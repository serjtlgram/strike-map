const fs = require('fs');

const dataFile = 'data.js';
const dataStr = fs.readFileSync(dataFile, 'utf8');

// The file format is `const strikeData = [\n...\n];\n`
const startIdx = dataStr.indexOf('[');
const endIdx = dataStr.lastIndexOf(']');

if (startIdx === -1 || endIdx === -1) {
    console.error("Could not find array in data.js");
    process.exit(1);
}

const jsonStr = dataStr.substring(startIdx, endIdx + 1);
let data;
try {
    data = JSON.parse(jsonStr);
} catch (e) {
    console.error("Error parsing JSON:", e);
    process.exit(1);
}

// Add IDs
data.forEach((item, index) => {
    // We can use a simple 1-based index or something stable. Let's just use index + 1.
    // Or a random short hash? Sequential IDs are better for short links.
    if (!item.id) {
        item.id = index + 1;
    }
});

const newJsonStr = JSON.stringify(data, null, 2);
const newDataStr = dataStr.substring(0, startIdx) + newJsonStr + dataStr.substring(endIdx + 1);

fs.writeFileSync(dataFile, newDataStr, 'utf8');
console.log("Successfully added IDs to data.js");
