const https = require('https');
https.get('https://html.duckduckgo.com/html/?q=site:obozrevatel.com+Вязники+пожар', res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const matches = data.match(/href=\"([^\"]+obozrevatel\.com[^\"]+)\"/ig);
        console.log(matches ? matches.slice(0, 10) : 'No matches');
    });
});
