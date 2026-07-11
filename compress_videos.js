const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const videoDir = path.join(__dirname, 'video');
const files = fs.readdirSync(videoDir);

files.forEach(file => {
    if (file.toLowerCase().endsWith('.mp4')) {
        const filePath = path.join(videoDir, file);
        const stats = fs.statSync(filePath);
        if (stats.size > 2 * 1024 * 1024) {
            console.log(`Compressing ${file}... (${(stats.size/1024/1024).toFixed(2)} MB)`);
            const tempPath = path.join(videoDir, 'temp_' + file);
            try {
                execSync(`.\\ffmpeg.exe -i "${filePath}" -b:v 200k -b:a 48k -vcodec libx264 -acodec aac "${tempPath}" -y`, { stdio: 'inherit' });
                fs.copyFileSync(tempPath, filePath);
                fs.unlinkSync(tempPath);
                console.log(`Successfully compressed ${file}`);
            } catch (e) {
                console.error(`Error compressing ${file}: ${e.message}`);
            }
        }
    }
});
