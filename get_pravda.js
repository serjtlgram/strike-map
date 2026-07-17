const https = require('https');
https.get('https://html.duckduckgo.com/html/?q=site:pravda.com.ua+Вязники+пожар', {headers: {'User-Agent': 'Mozilla/5.0'}}, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const matches = data.match(/href=\"([^\"]+pravda\.com\.ua[^\"]+)\"/ig);
        console.log(matches ? matches.slice(0, 10) : 'No matches');
    });
});
