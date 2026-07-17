const https = require('https');
https.get('https://unn.ua/amp/na-naftobazi-u-stavropolskomu-krai-spalakhnula-masshtabna-pozhezha-povidomliaiut-pro-detonatsiiu-rezervuariv', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const matches = data.match(/https:\/\/[^\"']+\.(jpg|jpeg|webp)/ig);
        console.log(matches ? [...new Set(matches)] : 'No images');
    });
});
