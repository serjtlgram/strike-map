#!/usr/bin/env python3
"""
Fast contact-sheet generator for /map media verification.
Creates 1 composite grid image per target folder (both photos and 4 keyframes per video:
start 0.5s, 30%, 60%, end 92%) so the agent can visually inspect all candidates in
1 read_file call per target instead of 50-70 separate tool calls.

Usage:
  python ".agents/skills/map/scripts/make_contact_sheet.py" "<raw_dir>" "<out_dir>"
"""
import os
import re
import subprocess
import sys
from pathlib import Path

FFMPEG = str(Path(__file__).resolve().parents[4] / "ffmpeg.exe")
if not os.path.exists(FFMPEG):
    FFMPEG = "ffmpeg"


def get_video_duration(path: Path) -> float:
    cmd = [FFMPEG, "-hide_banner", "-i", str(path)]
    proc = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, encoding="utf-8", errors="ignore")
    m = re.search(r"Duration:\s*(\d+):(\d+):(\d+(?:\.\d+)?)", proc.stderr)
    if not m:
        return 0.0
    h, m_, s = int(m.group(1)), int(m.group(2)), float(m.group(3))
    return h * 3600 + m_ * 60 + s


def escape_drawtext(text: str) -> str:
    return text.replace("\\", "/").replace(":", "\\:").replace("'", "")


def make_photo_tile(img_path: Path, out_tile: Path):
    size_kb = img_path.stat().st_size // 1024
    label = escape_drawtext(f"IMG: {img_path.name} ({size_kb}KB)")
    vf = (
        "scale=420:280:force_original_aspect_ratio=decrease,"
        "pad=420:280:(ow-iw)/2:(oh-ih)/2:black,"
        f"drawtext=text='{label}':x=8:y=8:fontsize=15:fontcolor=yellow:box=1:boxcolor=black@0.75"
    )
    subprocess.run(
        [FFMPEG, "-y", "-hide_banner", "-loglevel", "error", "-i", str(img_path), "-vf", vf, "-frames:v", "1", str(out_tile)],
        check=False,
    )


def make_video_strip(vid_path: Path, out_strip: Path):
    dur = get_video_duration(vid_path)
    if dur < 3.0:
        return False
    size_kb = vid_path.stat().st_size // 1024
    timestamps = [min(0.5, dur * 0.1), dur * 0.35, dur * 0.65, max(0.5, dur - 0.6)]
    frames = []
    for idx, ts in enumerate(timestamps):
        frame_file = out_strip.parent / f"_tmp_{vid_path.stem}_{idx}.jpg"
        tag = ["START", "35%", "65%", "END"][idx]
        header = f"{vid_path.name} ({dur:.1f}s, {size_kb}KB)" if idx == 0 else ""
        sub = f"{tag} @{ts:.1f}s"
        vf = (
            "scale=320:220:force_original_aspect_ratio=decrease,"
            "pad=320:220:(ow-iw)/2:(oh-ih)/2:black,"
            f"drawtext=text='{escape_drawtext(sub)}':x=6:y=194:fontsize=14:fontcolor=cyan:box=1:boxcolor=black@0.75"
        )
        if header:
            vf += f",drawtext=text='{escape_drawtext(header)}':x=6:y=6:fontsize=13:fontcolor=yellow:box=1:boxcolor=black@0.8"
        subprocess.run(
            [
                FFMPEG, "-y", "-hide_banner", "-loglevel", "error",
                "-ss", f"{ts:.2f}", "-i", str(vid_path),
                "-vf", vf, "-frames:v", "1", str(frame_file),
            ],
            check=False,
        )
        if frame_file.exists():
            frames.append(frame_file)
    if len(frames) == 4:
        inputs = []
        for f in frames:
            inputs.extend(["-i", str(f)])
        subprocess.run(
            [
                FFMPEG, "-y", "-hide_banner", "-loglevel", "error",
                *inputs,
                "-filter_complex", "hstack=inputs=4",
                "-q:v", "5", str(out_strip),
            ],
            check=False,
        )
    for f in frames:
        f.unlink(missing_ok=True)
    return out_strip.exists()


def process_group(group_dir: Path, out_dir: Path):
    photos = sorted([p for p in group_dir.iterdir() if p.suffix.lower() in (".jpg", ".jpeg", ".png", ".webp")])
    videos = sorted([p for p in group_dir.iterdir() if p.suffix.lower() in (".mp4", ".mov", ".webm")])
    group_name = group_dir.name

    if photos:
        tiles = []
        for p in photos:
            t = out_dir / f"_tile_{group_name}_{p.stem}.jpg"
            make_photo_tile(p, t)
            if t.exists():
                tiles.append(t)
        for chunk_idx in range(0, len(tiles), 12):
            chunk = tiles[chunk_idx : chunk_idx + 12]
            cols = min(3, len(chunk))
            rows = (len(chunk) + cols - 1) // cols
            # Pad to cols*rows if needed
            while len(chunk) < cols * rows:
                chunk.append(chunk[-1])
            inputs = []
            for t in chunk:
                inputs.extend(["-i", str(t)])
            sheet = out_dir / f"sheet_{group_name}_photos_{chunk_idx // 12 + 1}.jpg"
            filter_parts = [f"[{i}:v]" for i in range(len(chunk))]
            layout = []
            for r in range(rows):
                for c in range(cols):
                    x = "0" if c == 0 else "+".join([f"w0"] * c)
                    y = "0" if r == 0 else "+".join([f"h0"] * r)
                    layout.append(f"{x}_{y}")
            fc = "".join(filter_parts) + f"xstack=inputs={len(chunk)}:layout={'|'.join(layout)}"
            subprocess.run(
                [FFMPEG, "-y", "-hide_banner", "-loglevel", "error", *inputs, "-filter_complex", fc, "-q:v", "5", str(sheet)],
                check=False,
            )
            print(f"Created photo sheet: {sheet}")
        for t in tiles:
            t.unlink(missing_ok=True)

    if videos:
        strips = []
        for v in videos:
            s = out_dir / f"_strip_{group_name}_{v.stem}.jpg"
            if make_video_strip(v, s):
                strips.append(s)
        for chunk_idx in range(0, len(strips), 6):
            chunk = strips[chunk_idx : chunk_idx + 6]
            sheet = out_dir / f"sheet_{group_name}_videos_{chunk_idx // 6 + 1}.jpg"
            if len(chunk) == 1:
                chunk[0].replace(sheet)
            else:
                inputs = []
                for s in chunk:
                    inputs.extend(["-i", str(s)])
                subprocess.run(
                    [
                        FFMPEG, "-y", "-hide_banner", "-loglevel", "error",
                        *inputs,
                        "-filter_complex", f"vstack=inputs={len(chunk)}",
                        "-q:v", "5", str(sheet),
                    ],
                    check=False,
                )
            print(f"Created video sheet: {sheet}")
        for s in strips:
            s.unlink(missing_ok=True)


def main():
    if len(sys.argv) < 3:
        print("Usage: python make_contact_sheet.py <raw_dir> <out_dir>")
        sys.exit(1)
    raw_dir = Path(sys.argv[1])
    out_dir = Path(sys.argv[2])
    out_dir.mkdir(parents=True, exist_ok=True)
    subdirs = [d for d in sorted(raw_dir.iterdir()) if d.is_dir()]
    if subdirs:
        for d in subdirs:
            process_group(d, out_dir)
    else:
        process_group(raw_dir, out_dir)


if __name__ == "__main__":
    main()
