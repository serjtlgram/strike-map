const fs = require('fs');

function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

const referenceCities = [
    { name: 'Херсон', lat: 46.6354, lon: 32.6169 },
    { name: 'Запорожье', lat: 47.8388, lon: 35.1396 },
    { name: 'Харьков', lat: 49.9935, lon: 36.2304 },
    { name: 'Сумы', lat: 50.9077, lon: 34.7981 },
    { name: 'Чернигов', lat: 51.4982, lon: 31.2893 },
    { name: 'Краматорск', lat: 48.7390, lon: 37.5844 }
];

function run() {
    // 1. Read data.js
    const content = fs.readFileSync('data.js', 'utf8');
    let dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
    let data = new Function('return ' + dataStr)();

    // 2. Calculate min distance for each target
    data.forEach(item => {
        let minDist = Infinity;
        for (const city of referenceCities) {
            const d = haversine(item.lat, item.lng, city.lat, city.lon);
            if (d < minDist) minDist = d;
        }
        item.distance = Math.round(minDist);
    });

    // 3. Write back
    const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
    fs.writeFileSync('data.js', newContent);
    console.log('Distance recalculated from frontline proxy cities and data.js updated!');
}

run();
