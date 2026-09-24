const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const ffmpeg = path.join(__dirname, 'ffmpeg.exe');

if (!fs.existsSync('video')) fs.mkdirSync('video', { recursive: true });
if (!fs.existsSync('images')) fs.mkdirSync('images', { recursive: true });

console.log('=== PROCESSING IMAGES FOR 24.09.2026 ===');
const imagesToProcess = [
    { in: '2409/novotitarovskaya_oil_depot_img1.jpg', out: 'images/novotitarovskaya_oil_depot_2409_img1.jpg' },
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
