const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const ffmpeg = path.join(__dirname, 'ffmpeg.exe');

if (!fs.existsSync('video')) fs.mkdirSync('video', { recursive: true });
if (!fs.existsSync('images')) fs.mkdirSync('images', { recursive: true });

console.log('=== 1. PROCESSING VIDEO FOR UFA NPZ 23.09.2026 ===');

const vidIn = '2309/ufa_npz_vid1.mp4';
const vidOut = 'video/ufa_npz_2309_vid1.mp4';

if (fs.existsSync(vidIn)) {
    const origSize = fs.statSync(vidIn).size;
    console.log(`Compressing video ${vidIn} (${(origSize/1024/1024).toFixed(2)} MB) -> ${vidOut}...`);
    const cmd = `"${ffmpeg}" -i "${vidIn}" -vf "scale=-2:480" -vcodec libx264 -crf 28 -preset slow -acodec aac -b:a 64k -fs 1.9M "${vidOut}" -y`;
    execSync(cmd, { stdio: 'inherit' });

    let outSize = fs.statSync(vidOut).size;
    console.log(`  -> Final video ${vidOut}: ${outSize} bytes (${(outSize/1024/1024).toFixed(2)} MB)`);
    if (outSize > 1.95 * 1024 * 1024) {
        console.warn(`  WARNING: ${vidOut} is > 1.95MB, recompressing with lower CRF/bitrate...`);
        const cmdRetry = `"${ffmpeg}" -i "${vidIn}" -vf "scale=-2:360" -vcodec libx264 -b:v 400k -maxrate 500k -bufsize 800k -acodec aac -b:a 48k -fs 1.85M "${vidOut}" -y`;
        execSync(cmdRetry, { stdio: 'inherit' });
        console.log(`  -> Retry size: ${fs.statSync(vidOut).size} bytes`);
    }
}

console.log('\n=== 2. PROCESSING IMAGES FOR UFA NPZ 23.09.2026 ===');
const imagesToProcess = [
    { in: '2309/ufa_npz_img1.jpg', out: 'images/ufa_npz_2309_img1.jpg' },
    { in: '2309/ufa_npz_img2.jpg', out: 'images/ufa_npz_2309_img2.jpg' },
    { in: '2309/ufa_npz_img3.jpg', out: 'images/ufa_npz_2309_img3.jpg' },
    { in: '2309/ufa_npz_img4.jpg', out: 'images/ufa_npz_2309_img4.jpg' },
];

for (const img of imagesToProcess) {
    if (!fs.existsSync(img.in)) {
        console.error(`Missing input file: ${img.in}`);
        continue;
    }
    const origSize = fs.statSync(img.in).size;
    if (origSize <= 100 * 1024) {
        console.log(`Copying ${img.in} (${origSize} bytes <= 100KB)...`);
        fs.copyFileSync(img.in, img.out);
    } else {
        console.log(`Compressing ${img.in} (${origSize} bytes > 100KB) -> ${img.out}...`);
        let q = 4;
        let done = false;
        while (q <= 25 && !done) {
            const cmd = `"${ffmpeg}" -i "${img.in}" -vf "scale='min(1024,iw)':-1" -q:v ${q} "${img.out}" -y`;
            execSync(cmd, { stdio: 'ignore' });
            const sz = fs.statSync(img.out).size;
            if (sz <= 100 * 1024) {
                console.log(`SUCCESS: ${img.out} at q=${q} (${sz} bytes, ${(sz/1024).toFixed(1)} KB)`);
                done = true;
            } else {
                q += 2;
            }
        }
    }
    const finalSz = fs.statSync(img.out).size;
    console.log(`Final image ${img.out}: ${finalSz} bytes (${(finalSz/1024).toFixed(1)} KB)`);
}

console.log('\n=== MEDIA PROCESSING COMPLETE ===');
