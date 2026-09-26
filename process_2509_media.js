const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const ffmpeg = path.join(__dirname, 'ffmpeg.exe');

if (!fs.existsSync('video')) fs.mkdirSync('video', { recursive: true });
if (!fs.existsSync('images')) fs.mkdirSync('images', { recursive: true });

console.log('=== 1. PROCESSING VIDEOS FOR 25.09.2026 ===');

const videosToProcess = [
    { in: 'raw_media_2509/perm_npz_2509_vid1.mp4', out: 'video/perm_npz_2509_vid1.mp4' },
    { in: 'raw_media_2509/perm_npz_2509_vid2.mp4', out: 'video/perm_npz_2509_vid2.mp4' },
    { in: 'raw_media_2509/iskra_ulyanovsk_2509_vid1.mp4', out: 'video/iskra_ulyanovsk_2509_vid1.mp4' },
    { in: 'raw_media_2509/iskra_ulyanovsk_2509_vid2.mp4', out: 'video/iskra_ulyanovsk_2509_vid2.mp4' },
    { in: 'raw_media_2509/voronezh_kauchuk_2509_vid1.mp4', out: 'video/voronezh_kauchuk_2509_vid1.mp4' },
    { in: 'raw_media_2509/voronezh_kauchuk_2509_vid2.mp4', out: 'video/voronezh_kauchuk_2509_vid2.mp4' },
    { in: 'raw_media_2509/novoshakht_npz_2509_vid1.mp4', out: 'video/novoshakht_npz_2509_vid1.mp4' },
];

for (const vid of videosToProcess) {
    if (!fs.existsSync(vid.in)) {
        console.error(`Missing video: ${vid.in}`);
        continue;
    }
    const origSize = fs.statSync(vid.in).size;
    console.log(`\nCompressing ${vid.in} (${(origSize/1024/1024).toFixed(2)} MB) -> ${vid.out}...`);
    
    // Default recommended parameters from SKILL.md:
    // .\ffmpeg.exe -i "input.mp4" -vf "scale=-2:480" -vcodec libx264 -crf 28 -preset slow -acodec aac -b:a 64k -fs 1.9M "output.mp4" -y
    const cmd = `"${ffmpeg}" -i "${vid.in}" -vf "scale=-2:480" -vcodec libx264 -crf 28 -preset slow -acodec aac -b:a 64k -fs 1.9M "${vid.out}" -y`;
    execSync(cmd, { stdio: 'inherit' });

    let outSize = fs.statSync(vid.out).size;
    console.log(`  -> ${vid.out}: ${outSize} bytes (${(outSize/1024/1024).toFixed(2)} MB)`);
    if (outSize > 1.95 * 1024 * 1024) {
        console.warn(`  WARNING: ${vid.out} > 1.95MB, recompressing with lower bitrate...`);
        const cmdRetry = `"${ffmpeg}" -i "${vid.in}" -vf "scale=-2:360" -vcodec libx264 -b:v 400k -maxrate 500k -bufsize 800k -acodec aac -b:a 48k -fs 1.85M "${vid.out}" -y`;
        execSync(cmdRetry, { stdio: 'inherit' });
        console.log(`  -> Retry size: ${fs.statSync(vid.out).size} bytes`);
    }
}

console.log('\n=== 2. PROCESSING IMAGES FOR 25.09.2026 ===');

const imagesToProcess = [
    { in: 'raw_media_2509/perm_npz_2509_img1.jpg', out: 'images/perm_npz_2509_img1.jpg' },
    { in: 'raw_media_2509/perm_npz_2509_img2.jpg', out: 'images/perm_npz_2509_img2.jpg' },
    { in: 'raw_media_2509/perm_npz_2509_img3.jpg', out: 'images/perm_npz_2509_img3.jpg' },
    { in: 'raw_media_2509/perm_npz_2509_img4.jpg', out: 'images/perm_npz_2509_img4.jpg' },

    { in: 'raw_media_2509/iskra_ulyanovsk_2509_img1.jpg', out: 'images/iskra_ulyanovsk_2509_img1.jpg' },
    { in: 'raw_media_2509/iskra_ulyanovsk_2509_img2.jpg', out: 'images/iskra_ulyanovsk_2509_img2.jpg' },
    { in: 'raw_media_2509/iskra_ulyanovsk_2509_img3.jpg', out: 'images/iskra_ulyanovsk_2509_img3.jpg' },
    { in: 'raw_media_2509/iskra_ulyanovsk_2509_img4.jpg', out: 'images/iskra_ulyanovsk_2509_img4.jpg' },

    { in: 'raw_media_2509/voronezh_kauchuk_2509_img1.jpg', out: 'images/voronezh_kauchuk_2509_img1.jpg' },
    { in: 'raw_media_2509/voronezh_kauchuk_2509_img2.jpg', out: 'images/voronezh_kauchuk_2509_img2.jpg' },
    { in: 'raw_media_2509/voronezh_kauchuk_2509_img3.jpg', out: 'images/voronezh_kauchuk_2509_img3.jpg' },

    { in: 'raw_media_2509/novoshakht_npz_2509_img1.jpg', out: 'images/novoshakht_npz_2509_img1.jpg' },
    { in: 'raw_media_2509/novoshakht_npz_2509_img2.jpg', out: 'images/novoshakht_npz_2509_img2.jpg' },
];

for (const img of imagesToProcess) {
    if (!fs.existsSync(img.in)) {
        console.error(`Missing input image: ${img.in}`);
        continue;
    }
    const origSize = fs.statSync(img.in).size;
    if (origSize <= 100 * 1024) {
        console.log(`Copying ${img.in} (${origSize} bytes <= 100KB) -> ${img.out}...`);
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
                console.log(`  SUCCESS: ${img.out} at q=${q} (${sz} bytes, ${(sz/1024).toFixed(1)} KB)`);
                done = true;
            } else {
                q += 2;
            }
        }
    }
    const finalSz = fs.statSync(img.out).size;
    console.log(`  Final image ${img.out}: ${finalSz} bytes (${(finalSz/1024).toFixed(1)} KB)`);
}

console.log('\n=== MEDIA PROCESSING COMPLETE ===');
