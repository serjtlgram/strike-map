const https = require('https');

function fetchImage(url, name) {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            const ogImageMatch = data.match(/<meta[^>]*property=[\"']og:image[\"'][^>]*content=[\"']([^\"']+)[\"']/i) || 
                                 data.match(/<meta[^>]*content=[\"']([^\"']+)[\"'][^>]*property=[\"']og:image[\"']/i) ||
                                 data.match(/<img[^>]*class=[\"'][^\"']*main-image[^\"']*[\"'][^>]*src=[\"']([^\"']+)[\"']/i);
            
            if (ogImageMatch && ogImageMatch[1]) {
                console.log(`[${name}] Found image: ${ogImageMatch[1]}`);
            } else {
                console.log(`[${name}] No image found. HTML length: ${data.length}`);
            }
        });
    }).on('error', err => console.log(err));
}

fetchImage('https://unn.ua/amp/na-naftobazi-u-stavropolskomu-krai-spalakhnula-masshtabna-pozhezha-povidomliaiut-pro-detonatsiiu-rezervuariv', 'UNN');
fetchImage('https://zn.ua/war/stolb-ohnja-vysotoj-v-desjatki-kilometrov-drony-vo-vtoroj-raz-za-nedelju-sozhhli-neftebazu-v-stavropole.html', 'ZN');
