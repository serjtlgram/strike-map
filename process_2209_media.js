const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const ffmpeg = path.join(__dirname, 'ffmpeg.exe');

// Ensure output directories exist
if (!fs.existsSync('video')) fs.mkdirSync('video', { recursive: true });
if (!fs.existsSync('images')) fs.mkdirSync('images', { recursive: true });

console.log('=== 1. PROCESSING VIDEOS FOR 22.09.2026 ===');

const videosToProcess = [
    // Kuibyshevsky Oil Refinery
    { in: '2209/kuibyshev_npz_vid1.mov', out: 'video/kuibyshev_npz_2209_vid1.mp4', label: 'Kuibyshev FP-1 Strike' },
    { in: '2209/kuibyshev_npz_vid4.mp4', out: 'video/kuibyshev_npz_2209_vid2.mp4', label: 'Kuibyshev Night Fire' },

    // Tolyattikauchuk
    { in: '2209/tolyatti_kauchuk_vid1.mp4', out: 'video/tolyatti_kauchuk_2209_vid1.mp4', label: 'Tolyattikauchuk Hit' },
    { in: '2209/tolyatti_kauchuk_vid2.mp4', out: 'video/tolyatti_kauchuk_2209_vid2.mp4', label: 'Tolyatti Air Defense & Blasts' }
];

for (const vid of videosToProcess) {
    if (!fs.existsSync(vid.in)) {
        console.error(`Missing input video: ${vid.in}`);
        continue;
    }
    const origSize = fs.statSync(vid.in).size;
    console.log(`Compressing video [${vid.label}] ${vid.in} (${(origSize/1024/1024).toFixed(2)} MB) -> ${vid.out}...`);
    
    // Video compression: scale 480p, CRF 28, max size 1.9M
    const cmd = `"${ffmpeg}" -i "${vid.in}" -vf "scale=-2:480" -vcodec libx264 -crf 28 -preset slow -acodec aac -b:a 64k -fs 1.9M "${vid.out}" -y`;
    execSync(cmd, { stdio: 'inherit' });
    
    const outSize = fs.statSync(vid.out).size;
    console.log(`  -> Final video ${vid.out}: ${outSize} bytes (${(outSize/1024/1024).toFixed(2)} MB)`);
    if (outSize > 1.95 * 1024 * 1024) {
        console.warn(`  WARNING: ${vid.out} is > 1.95MB, recompressing with lower CRF/bitrate...`);
        const cmdRetry = `"${ffmpeg}" -i "${vid.in}" -vf "scale=-2:360" -vcodec libx264 -b:v 400k -maxrate 500k -bufsize 800k -acodec aac -b:a 48k -fs 1.85M "${vid.out}" -y`;
        execSync(cmdRetry, { stdio: 'inherit' });
        console.log(`  -> Retry size: ${fs.statSync(vid.out).size} bytes`);
    }
}

console.log('\n=== 2. EXTRACTING FRAMES FOR TOLYATTIKAUCHUK PHOTOS ===');
// Extract frames from Tolyatti videos at key explosion/flash moments
execSync(`"${ffmpeg}" -ss 00:00:03 -i "2209/tolyatti_kauchuk_vid1.mp4" -vframes 1 -q:v 3 "2209/tolyatti_kauchuk_frame1.jpg" -y`, { stdio: 'ignore' });
execSync(`"${ffmpeg}" -ss 00:00:08 -i "2209/tolyatti_kauchuk_vid1.mp4" -vframes 1 -q:v 3 "2209/tolyatti_kauchuk_frame2.jpg" -y`, { stdio: 'ignore' });
execSync(`"${ffmpeg}" -ss 00:00:04 -i "2209/tolyatti_kauchuk_vid2.mp4" -vframes 1 -q:v 3 "2209/tolyatti_kauchuk_frame3.jpg" -y`, { stdio: 'ignore' });
execSync(`"${ffmpeg}" -ss 00:00:02 -i "2209/tolyatti_kauchuk_vid4.mp4" -vframes 1 -q:v 3 "2209/tolyatti_kauchuk_frame4.jpg" -y`, { stdio: 'ignore' });

console.log('\n=== 3. PROCESSING IMAGES FOR 22.09.2026 ===');
const imagesToProcess = [
    // Kuibyshevsky Oil Refinery photos
    { in: '2209/kuibyshev_npz_img1.jpg', out: 'images/kuibyshev_npz_2209_img1.jpg' },
    { in: '2209/kuibyshev_npz_img2.jpg', out: 'images/kuibyshev_npz_2209_img2.jpg' },
    { in: '2209/kuibyshev_npz_img3.jpg', out: 'images/kuibyshev_npz_2209_img3.jpg' },
    { in: '2209/kuibyshev_npz_img5.jpg', out: 'images/kuibyshev_npz_2209_img4.jpg' },

    // Tolyattikauchuk photos (extracted frames from strike footage)
    { in: '2209/tolyatti_kauchuk_frame1.jpg', out: 'images/tolyatti_kauchuk_2209_img1.jpg' },
    { in: '2209/tolyatti_kauchuk_frame2.jpg', out: 'images/tolyatti_kauchuk_2209_img2.jpg' },
    { in: '2209/tolyatti_kauchuk_frame3.jpg', out: 'images/tolyatti_kauchuk_2209_img3.jpg' },
    { in: '2209/tolyatti_kauchuk_frame4.jpg', out: 'images/tolyatti_kauchuk_2209_img4.jpg' },
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
        while (q <= 20 && !done) {
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
