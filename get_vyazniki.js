const https = require('https');
https.get('https://html.duckduckgo.com/html/?q=' + encodeURIComponent('Вязники Шпаковский округ нефтебаза пожар'), {headers: {'User-Agent': 'Mozilla/5.0'}}, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const matches = data.match(/https:\/\/[^\"\s]+\.jpg/ig);
        console.log(matches ? matches.slice(0, 5) : 'No matches');
    });
});
