const https = require('https');
https.get('https://zn.ua/war/stolb-ohnja-vysotoj-v-desjatki-kilometrov-drony-vo-vtoroj-raz-za-nedelju-sozhhli-neftebazu-v-stavropole.html', {headers: {'User-Agent': 'Mozilla/5.0'}}, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const matches = data.match(/https:\/\/[^\"\s]+\.(jpg|jpeg|webp)/ig);
        console.log(matches ? [...new Set(matches)].filter(u => u.includes('zn.ua') || u.includes('img')) : 'No images');
    });
});
