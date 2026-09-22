const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const ffmpeg = path.join(__dirname, 'ffmpeg.exe');

const imagesToProcess = [
    { in: '2109/cymbulovo_2109_img1.jpg', out: 'images/cymbulovo_2109_img1.jpg' },
    { in: '2109/cymbulovo_2109_img2.jpg', out: 'images/cymbulovo_2109_img2.jpg' },
    { in: '2109/cymbulovo_2109_img3.jpg', out: 'images/cymbulovo_2109_img3.jpg' },
    { in: '2109/cymbulovo_2109_img4.jpg', out: 'images/cymbulovo_2109_img4.jpg' },
    { in: '2109/ufa_npz_2109_img1.jpg', out: 'images/ufa_npz_2109_img1.jpg' },
    { in: '2109/ufa_npz_2109_img2.jpg', out: 'images/ufa_npz_2109_img2.jpg' },
    { in: '2109/ufa_npz_2109_img3.jpg', out: 'images/ufa_npz_2109_img3.jpg' },
    { in: '2109/ufa_npz_2109_img4.jpg', out: 'images/ufa_npz_2109_img4.jpg' },
];

console.log('--- PROCESSING IMAGES FOR 21.09.2026 ---');
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
        while (q <= 16 && !done) {
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
