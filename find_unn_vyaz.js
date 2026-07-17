const https = require('https');

function fetchAllImgs(url, name) {
    https.get(url, {headers: {'User-Agent': 'Mozilla/5.0'}}, res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            const matches = data.match(/https:\/\/img\.unn\.ua[^\"\s\)]+/ig);
            if (matches) {
                const unique = [...new Set(matches)];
                console.log(`[${name}] Found ${unique.length} images:`);
                unique.slice(0, 10).forEach(u => console.log('  ' + u));
            } else {
                console.log(`[${name}] No images`);
            }
        });
    });
}

// Try to get multiple UNN images from the Vyazniki article
fetchAllImgs('https://unn.ua/ru/news/v-stavropolskom-krae-gorit-neftebaza', 'UNN-RU');
fetchAllImgs('https://unn.ua/amp/na-naftobazi-u-stavropolskomu-krai-spalakhnula-masshtabna-pozhezha-povidomliaiut-pro-detonatsiiu-rezervuariv', 'UNN-AMP');
