const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').trim();
if (dataStr.endsWith(';')) dataStr = dataStr.slice(0, -1);
let data = eval('(' + dataStr + ')');

let changed = 0;
data.forEach(item => {
  // Move media from ru/uk/en to root image or images
  let mediaFile = null;
  if (item.ru && item.ru.media) mediaFile = item.ru.media;
  else if (item.uk && item.uk.media) mediaFile = item.uk.media;
  else if (item.en && item.en.media) mediaFile = item.en.media;

  if (mediaFile && !item.image && (!item.images || item.images.length === 0)) {
    // Determine path prefix
    let prefix = 'images/';
    if (mediaFile.toLowerCase().endsWith('.mp4') || mediaFile.toLowerCase().endsWith('.mov')) {
      prefix = 'video/';
    }
    
    // Check if the prefix is already there
    if (!mediaFile.startsWith('images/') && !mediaFile.startsWith('video/')) {
        item.image = prefix + mediaFile;
    } else {
        item.image = mediaFile;
    }
    
    // Cleanup inner properties
    if (item.ru) delete item.ru.media;
    if (item.uk) delete item.uk.media;
    if (item.en) delete item.en.media;
    
    changed++;
    console.log(`Updated item ${item.id} with image: ${item.image}`);
  }
});

if (changed > 0) {
  const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
  fs.writeFileSync('data.js', newContent);
  console.log(`Successfully updated ${changed} items.`);
} else {
  console.log('No items needed updating.');
}
