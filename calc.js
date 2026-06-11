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

async function run() {
    // 1. Fetch UKR GeoJSON
    const res = await fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries/UKR.geo.json');
    const ukrGeo = await res.json();
    
    // Extract all coordinates from polygons/multipolygons
    let ukrCoords = [];
    const extractCoords = (coords) => {
        if (typeof coords[0] === 'number') {
            ukrCoords.push({lon: coords[0], lat: coords[1]});
        } else {
            coords.forEach(extractCoords);
        }
    };
    extractCoords(ukrGeo.features[0].geometry.coordinates);

    // 2. Read data.js
    const content = fs.readFileSync('data.js', 'utf8');
    let dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
    let data = new Function('return ' + dataStr)();

    // 3. Calculate min distance for each target
    data.forEach(item => {
        let minDist = Infinity;
        for (const pt of ukrCoords) {
            const d = haversine(item.lat, item.lng, pt.lat, pt.lon);
            if (d < minDist) minDist = d;
        }
        item.distance = Math.round(minDist);
    });

    // 4. Write back
    const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
    fs.writeFileSync('data.js', newContent);
    console.log('Distance calculated and data.js updated!');
}

run();
