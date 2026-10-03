const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ffmpeg = path.join(__dirname, 'ffmpeg.exe');

// Ensure output dirs
if (!fs.existsSync('video')) fs.mkdirSync('video');
if (!fs.existsSync('images')) fs.mkdirSync('images');

const videos = [
    { in: 'raw_0210/samara_en_31851.mp4', out: 'video/samara_lpds_0210_vid1.mp4' },
    { in: 'raw_0210/samara_en_31837.mp4', out: 'video/samara_lpds_0210_vid2.mp4' },
    { in: 'raw_0210/volgograd_sn_60815.mp4', out: 'video/volgograd_npz_0210_vid1.mp4' }
];

const images = [
    { in: 'raw_0210/samara_sn_60825.jpg', out: 'images/samara_lpds_0210_img1.jpg' },
    { in: 'raw_0210/samara_en_31859.jpg', out: 'images/samara_lpds_0210_img2.jpg' },
    { in: 'raw_0210/samara_en_31835.jpg', out: 'images/samara_lpds_0210_img3.jpg' },
    { in: 'raw_0210/volgograd_sn_60809.jpg', out: 'images/volgograd_npz_0210_img1.jpg' },
    { in: 'raw_0210/volgograd_cw_110391.jpg', out: 'images/volgograd_npz_0210_img2.jpg' },
    { in: 'raw_0210/volgograd_astra_126893.jpg', out: 'images/volgograd_npz_0210_img3.jpg' }
];

console.log('Processing videos...');
for (const v of videos) {
    console.log(`Compressing ${v.in} -> ${v.out}`);
    const cmd = `"${ffmpeg}" -i "${v.in}" -vf "scale=-2:480" -vcodec libx264 -crf 28 -preset slow -acodec aac -b:a 64k -fs 1.9M "${v.out}" -y`;
    execSync(cmd, { stdio: 'inherit' });
    const sz = fs.statSync(v.out).size;
    console.log(`Done: ${v.out} (${(sz / 1024 / 1024).toFixed(2)} MB)`);
    if (sz >= 2 * 1024 * 1024) console.warn('WARNING: Video exceeds 2MB!');
}

console.log('Processing images...');
for (const img of images) {
    console.log(`Compressing ${img.in} -> ${img.out}`);
    // Start with q:v 5, if > 100KB, retry with q:v 6 or 7
    let q = 5;
    let cmd = `"${ffmpeg}" -i "${img.in}" -vf "scale='min(1024,iw)':-1" -q:v ${q} "${img.out}" -y`;
    execSync(cmd, { stdio: 'inherit' });
    let sz = fs.statSync(img.out).size;
    if (sz >= 100 * 1024) {
        q = 7;
        console.log(`Retrying ${img.out} with q:v ${q} to ensure < 100KB...`);
        cmd = `"${ffmpeg}" -i "${img.in}" -vf "scale='min(1024,iw)':-1" -q:v ${q} "${img.out}" -y`;
        execSync(cmd, { stdio: 'inherit' });
        sz = fs.statSync(img.out).size;
    }
    console.log(`Done: ${img.out} (${(sz / 1024).toFixed(1)} KB)`);
    if (sz >= 100 * 1024) console.warn('WARNING: Image exceeds 100KB!');
}

console.log('All 02.10 media processed successfully!');
