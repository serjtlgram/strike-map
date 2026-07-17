const https = require('https');

// Get article list with Vyazniki fire from obozrevatel
function fetch(url, name) {
    https.get(url, {headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}}, res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            const og = data.match(/property=[\"']og:image[\"'][^>]*content=[\"']([^\"']+)[\"']/i) ||
                        data.match(/content=[\"']([^\"']+)[\"'][^>]*property=[\"']og:image[\"']/i);
            console.log(`[${name}] ${og ? og[1] : 'Not found - len: ' + data.length}`);
        });
    });
}

// UNN full article about Vyazniki
fetch('https://unn.ua/news/u-stavropol-skomu-krai-rf-horit-naftobaza-miscevi-vladi-vveli-rezhim-ns', 'UNN1');
fetch('https://unn.ua/ru/news/v-stavropolskom-krae-gorit-neftebaza', 'UNN2');
fetch('https://zn.ua/war/stolb-ohnja-vysotoj-v-desjatki-kilometrov-drony-vo-vtoroj-raz-za-nedelju-sozhhli-neftebazu-v-stavropole.html', 'ZN');
