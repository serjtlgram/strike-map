const https = require('https');
https.get('https://html.duckduckgo.com/html/?q=' + encodeURIComponent('Вязники нефтебаза пожар 13 июля'), {headers: {'User-Agent': 'Mozilla/5.0'}}, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const matches = data.match(/href=\"([^\"]+)\"/ig);
        if (matches) {
            console.log(matches.filter(h => h.includes('http') && !h.includes('duckduckgo')).slice(0, 10));
        } else {
            console.log('No matches');
        }
    });
});
