const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').trim();
if (dataStr.endsWith(';')) dataStr = dataStr.slice(0, -1);
let data = eval('(' + dataStr + ')');

let changed = false;
data.forEach(item => {
    if (item.ru && item.ru.target && item.ru.target.includes('2 танкера')) {
        item.lat = 47.05;
        item.lng = 38.85;
        changed = true;
    }
});

if (changed) {
    const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
    fs.writeFileSync('data.js', newContent);
    console.log('Successfully updated tanker coordinates.');
} else {
    console.log('Tanker target not found!');
}
