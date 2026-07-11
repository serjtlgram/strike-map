const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').trim();
if (dataStr.endsWith(';')) dataStr = dataStr.slice(0, -1);
let data = eval('(' + dataStr + ')');

let changed = false;
data.forEach(item => {
    if (item.ru && item.ru.target && item.ru.target.includes('Азовская портовая инфраструктура')) {
        item.lat = 47.115;
        item.lng = 39.418;
        changed = true;
    }
});

if (changed) {
    const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
    fs.writeFileSync('data.js', newContent);
    console.log('Successfully updated Azov port coordinates.');
} else {
    console.log('Azov port target not found!');
}
