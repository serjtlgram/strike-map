const fs = require('fs');
const https = require('https');
const http = require('http');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
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

async function fetchImages(query, outPrefix) {
  return new Promise((resolve, reject) => {
    const searchUrl = 'https://html.duckduckgo.com/html/?q=' + encodeURIComponent(query); 
    
    https.get(searchUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
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
            console.log('Not enough images found in DDG for', query, 'using placeholders.');
            await download('https://picsum.photos/800/600?random=' + Math.random(), `images/${outPrefix}1.jpg`);
            await download('https://picsum.photos/800/601?random=' + Math.random(), `images/${outPrefix}2.jpg`);
        } else {
            console.log(`Downloading for ${query}:`, urls[0], urls[1]);
            try {
               await download(urls[0], `images/${outPrefix}1_raw.jpg`);
               await download(urls[1], `images/${outPrefix}2_raw.jpg`);
            } catch(e) {
               console.error('Error downloading, using placeholders', e);
               await download('https://picsum.photos/800/600?random=' + Math.random(), `images/${outPrefix}1_raw.jpg`);
               await download('https://picsum.photos/800/601?random=' + Math.random(), `images/${outPrefix}2_raw.jpg`);
            }
        }
        console.log(`Images downloaded for ${outPrefix}`);
        resolve();
      });
    });
  });
}

(async () => {
  try {
    await fetchImages('Цимлянская нефтебаза пожар 13 июля 2024 фото', 'tsim');
    await fetchImages('Нефтебаза Вязники Ставропольский край пожар 2024 фото', 'vyazniki');
  } catch (e) {
    console.error(e);
  }
})();
