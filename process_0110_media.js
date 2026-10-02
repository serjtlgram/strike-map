const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ffmpeg = path.join(__dirname, 'ffmpeg.exe');

// Ensure output dirs
if (!fs.existsSync('video')) fs.mkdirSync('video');
if (!fs.existsSync('images')) fs.mkdirSync('images');

const videos = [
    { in: 'raw_0110/krasnozavodsk_en_31813.mp4', out: 'video/krasnozavodsk_0110_vid1.mp4' },
    { in: 'raw_0110/krasnozavodsk_en_31825.mp4', out: 'video/krasnozavodsk_0110_vid2.mp4' }
];

const images = [
    { in: 'raw_0110/krasnozavodsk_en_31807.jpg', out: 'images/krasnozavodsk_0110_img1.jpg' },
    { in: 'raw_0110/krasnozavodsk_sn_60799.jpg', out: 'images/krasnozavodsk_0110_img2.jpg' },
    { in: 'raw_0110/krasnozavodsk_en_31814.jpg', out: 'images/krasnozavodsk_0110_img3.jpg' },
    { in: 'raw_0110/krasnozavodsk_sn_60797.jpg', out: 'images/krasnozavodsk_0110_img4.jpg' }
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
    const cmd = `"${ffmpeg}" -i "${img.in}" -vf "scale='min(1024,iw)':-1" -q:v 5 "${img.out}" -y`;
    execSync(cmd, { stdio: 'inherit' });
    const sz = fs.statSync(img.out).size;
    console.log(`Done: ${img.out} (${(sz / 1024).toFixed(1)} KB)`);
    if (sz >= 100 * 1024) console.warn('WARNING: Image exceeds 100KB!');
}

console.log('All media processed successfully!');
