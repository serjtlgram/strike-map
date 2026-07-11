const fs = require('fs');

const content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
let data = new Function('return ' + dataStr)();

for (let item of data) {
    if (item.id === 195) {
        if (!item.images) item.images = [];
        if (!item.images.includes("video/070626 omsk.MP4")) item.images.push("video/070626 omsk.MP4");
        if (!item.images.includes("video/070626 omsk1.mp4")) item.images.push("video/070626 omsk1.mp4");
        if (!item.images.includes("video/070626 omsk2.mp4")) item.images.push("video/070626 omsk2.mp4");
    }
}

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log('Successfully added new videos to Omsk.');
