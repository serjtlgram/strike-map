const https = require('https');
// Try to get fire images from obozrevatel.com article about Vyazniki
https.get('https://obozrevatel.com/ua/crime/droni-vtretye-atakuvali-naftobazu-v-vya-znikax-u-stavropoli.htm', {headers: {'User-Agent': 'Mozilla/5.0'}}, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const matches = data.match(/https:\/\/[^\"\s]+\.(jpg|jpeg|webp)/ig);
        if (matches) {
            console.log([...new Set(matches)].filter(u => u.includes('obozrevatel') || u.includes('imgoboz')));
        } else {
            // Try to get the og:image
            const og = data.match(/og:image.*?content="([^"]+)"/i);
            console.log(og ? og[1] : 'No match, length: ' + data.length);
        }
    });
});
