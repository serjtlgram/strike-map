const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const ffmpeg = path.join(__dirname, 'ffmpeg.exe');

const videosToProcess = [
    { in: '2009/moscow_npz_2009_vid1.mp4', out: 'video/moscow_npz_2009_vid1.mp4' },
    { in: '2009/moscow_npz_2009_vid2.mp4', out: 'video/moscow_npz_2009_vid2.mp4' },
    { in: '2009/sofino_2009_vid1.mp4', out: 'video/sofino_2009_vid1.mp4' },
    { in: '2009/sofino_2009_vid2.mp4', out: 'video/sofino_2009_vid2.mp4' },
];

const imagesToProcess = [
    { in: '2009/moscow_npz_2009_img1.jpg', out: 'images/moscow_npz_2009_img1.jpg' },
    { in: '2009/moscow_npz_2009_img2.jpg', out: 'images/moscow_npz_2009_img2.jpg' },
    { in: '2009/moscow_npz_2009_img3.jpg', out: 'images/moscow_npz_2009_img3.jpg' },
    { in: '2009/sofino_2009_img1.jpg', out: 'images/sofino_2009_img1.jpg' },
    { in: '2009/sofino_2009_img2.jpg', out: 'images/sofino_2009_img2.jpg' },
    { in: '2009/sofino_2009_img3.jpg', out: 'images/sofino_2009_img3.jpg' },
];

console.log('--- PROCESSING VIDEOS ---');
for (const v of videosToProcess) {
    console.log(`Compressing ${v.in} -> ${v.out}...`);
    // Skill command: .\ffmpeg.exe -i "input.mp4" -vf "scale=-2:480" -vcodec libx264 -crf 28 -preset slow -acodec aac -b:a 64k -fs 1.9M "output.mp4" -y
    const cmd = `"${ffmpeg}" -i "${v.in}" -vf "scale=-2:480" -vcodec libx264 -crf 28 -preset slow -acodec aac -b:a 64k -fs 1.9M "${v.out}" -y`;
    try {
        execSync(cmd, { stdio: 'inherit' });
        const sz = fs.statSync(v.out).size;
        console.log(`DONE: ${v.out} (${(sz / 1024 / 1024).toFixed(2)} MB, ${sz} bytes)`);
        if (sz > 1.95 * 1024 * 1024) {
            console.error(`WARNING: Video > 1.95MB!`);
        }
    } catch (e) {
        console.error(`ERROR processing ${v.in}:`, e.message);
    }
}

console.log('\n--- PROCESSING IMAGES ---');
for (const img of imagesToProcess) {
    const origSize = fs.statSync(img.in).size;
    if (origSize <= 100 * 1024) {
        console.log(`Copying ${img.in} (${origSize} bytes <= 100KB)...`);
        fs.copyFileSync(img.in, img.out);
    } else {
        console.log(`Compressing ${img.in} (${origSize} bytes > 100KB) -> ${img.out}...`);
        // Skill command: .\ffmpeg.exe -i "input.jpg" -vf "scale='min(1024,iw)':-1" -q:v 5 "output.jpg" -y
        let q = 5;
        let done = false;
        while (q <= 15 && !done) {
            const cmd = `"${ffmpeg}" -i "${img.in}" -vf "scale='min(1024,iw)':-1" -q:v ${q} "${img.out}" -y`;
            execSync(cmd, { stdio: 'ignore' });
            const sz = fs.statSync(img.out).size;
            if (sz <= 100 * 1024) {
                console.log(`SUCCESS: ${img.out} at q=${q} (${sz} bytes)`);
                done = true;
            } else {
                q += 2;
            }
        }
    }
    const finalSz = fs.statSync(img.out).size;
    console.log(`Final image ${img.out}: ${finalSz} bytes (${(finalSz/1024).toFixed(1)} KB)`);
}
