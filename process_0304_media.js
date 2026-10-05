const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ffmpeg = path.join(__dirname, 'ffmpeg.exe');

// Ensure output dirs
if (!fs.existsSync('video')) fs.mkdirSync('video');
if (!fs.existsSync('images')) fs.mkdirSync('images');

const videos = [
    { in: 'raw_0304/khanskaya_sn_60883.mp4', out: 'video/khanskaya_0410_vid1.mp4', crf: 28 },
    { in: 'raw_0304/khanskaya_en_31933.mp4', out: 'video/khanskaya_0410_vid2.mp4', crf: 28 },
    { in: 'raw_0304/kaluga_en_31913.mp4', out: 'video/kaluga_voskhod_0310_vid1.mp4', crf: 28 },
    { in: 'raw_0304/kaluga_en_31914.mp4', out: 'video/kaluga_voskhod_0310_vid2.mp4', crf: 30 }
];

const images = [
    { in: 'raw_0304/khanskaya_mil_180909.jpg', out: 'images/khanskaya_0410_img1.jpg', q: 5 },
    { in: 'raw_0304/khanskaya_cw_110488.jpg', out: 'images/khanskaya_0410_img2.jpg', q: 5 },
    { in: 'raw_0304/khanskaya_sbu_18735.jpg', out: 'images/khanskaya_0410_img3.jpg', q: 5 },
    { in: 'raw_0304/kaluga_sn_60877.jpg', out: 'images/kaluga_voskhod_0310_img1.jpg', q: 5 },
    { in: 'raw_0304/kaluga_sn_60863.jpg', out: 'images/kaluga_voskhod_0310_img2.jpg', q: 5 },
    { in: 'raw_0304/tsymbulovo_en_31881.jpg', out: 'images/tsymbulovo_0310_img1.jpg', q: 5 },
    { in: 'raw_0304/tsymbulovo_en_31880.jpg', out: 'images/tsymbulovo_0310_img2.jpg', q: 5 },
    { in: 'raw_0304/tsymbulovo_en_31882.jpg', out: 'images/tsymbulovo_0310_img3.jpg', q: 5 }
];

console.log('Processing videos...');
for (const v of videos) {
    console.log(`Compressing ${v.in} -> ${v.out}`);
    const cmd = `"${ffmpeg}" -i "${v.in}" -vf "scale=-2:480" -vcodec libx264 -crf ${v.crf} -preset slow -acodec aac -b:a 64k -fs 1.8M "${v.out}" -y`;
    execSync(cmd, { stdio: 'inherit' });
    const sz = fs.statSync(v.out).size;
    console.log(`Done: ${v.out} (${(sz / 1024 / 1024).toFixed(2)} MB)`);
    if (sz >= 2 * 1024 * 1024) console.warn('WARNING: Video exceeds 2MB!');
}

console.log('Processing images...');
for (const img of images) {
    console.log(`Compressing ${img.in} -> ${img.out}`);
    let q = img.q;
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

console.log('All 03-04.10 media processed successfully!');
