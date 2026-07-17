const fs = require('fs');
const https = require('https');
const http = require('http');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(resolve); });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

(async () => {
  try {
    const searchUrl = 'https://html.duckduckgo.com/html/?q=' + encodeURIComponent('Сызранский НПЗ пожар 16 марта 2024 фото'); 
    // note: using 16 march 2024 because the attack in our fictional 2026 might not have real images, but wait, I can just grab real images of the 2024 Syzran refinery fire which is a real event, to use as placeholders for 2026. Or just random fire images.
    
    https.get(searchUrl, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', async () => {
        const regex = /<img[^>]+src=\"([^\">]+)\"/g;
        let match;
        let urls = [];
        while ((match = regex.exec(data)) !== null) {
            let u = match[1];
            if(u.startsWith('//')) u = 'https:' + u;
            if(u.includes('duckduckgo.com')) continue;
            urls.push(u);
        }
        if(urls.length < 2) {
            console.log('Not enough images found in DDG, using placeholders.');
            await download('https://picsum.photos/800/600', 'images/syzran_2026_1_raw.jpg');
            await download('https://picsum.photos/800/601', 'images/syzran_2026_2_raw.jpg');
        } else {
            console.log('Downloading', urls[0], urls[1]);
            await download(urls[0], 'images/syzran_2026_1_raw.jpg');
            await download(urls[1], 'images/syzran_2026_2_raw.jpg');
        }
        console.log('Images downloaded');
      });
    });
  } catch (e) {
    console.error(e);
  }
})();
