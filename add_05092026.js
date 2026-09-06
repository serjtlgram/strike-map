const fs = require('fs');

function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

const referenceCities = [
    { name: 'Херсон', lat: 46.6354, lon: 32.6169 },
    { name: 'Запорожье', lat: 47.8388, lon: 35.1396 },
    { name: 'Харьков', lat: 49.9935, lon: 36.2304 },
    { name: 'Сумы', lat: 50.9077, lon: 34.7981 },
    { name: 'Чернигов', lat: 51.4982, lon: 31.2893 },
    { name: 'Краматорск', lat: 48.7390, lon: 37.5844 }
];

function calcMinDistance(lat, lng) {
    let minDist = Infinity;
    for (const city of referenceCities) {
        const d = haversine(lat, lng, city.lat, city.lon);
        if (d < minDist) minDist = d;
    }
    return Math.round(minDist);
}

const newItems = [
  {
    "date": "05.09.2026",
    "lat": 44.7214,
    "lng": 37.8286,
    "distance": calcMinDistance(44.7214, 37.8286),
    "ru": {
      "region": "Краснодарский край, Новороссийск (Цемесская бухта)",
      "target": "Военно-морская база «Новороссийск» (НВМБ ЧФ РФ) и портовая инфраструктура",
      "category": "ВПК",
      "weapon": "БЭК / Дрон",
      "details": "В ночь на 5 сентября 2026 года украинские силы атаковали Новороссийскую военно-морскую базу и морской порт с применением безэкипажных катеров и ударных БПЛА. После ухода из Севастополя Новороссийск стал главным пунктом базирования Черноморского флота РФ, где укрываются носители крылатых ракет «Калибр» и десантные корабли. Тревогу в городе объявили в 01:23, после чего сирены выли несколько часов подряд, а жителей просили не подходить к окнам с видом на море. В Цемесской бухте гремели пушечные залпы и пулеметная стрельба по приближающимся морским дронам. Власти перекрыли набережную от улицы Исаева до Мысхако и закрыли городские пляжи. Минобороны РФ отчиталось об уничтожении двух безэкипажных катеров в акватории Черного моря, а отбой опасности дали только к восьми часам утра.",
      "source": "ВМС ВСУ, оперативный штаб Краснодарского края, мэр Новороссийска, росСМИ"
    },
    "uk": {
      "region": "Краснодарський край, Новоросійськ (Цемеська бухта)",
      "target": "Військово-морська база «Новоросійськ» (НВМБ ЧФ РФ) та портова інфраструктура",
      "category": "ВПК",
      "weapon": "БЕК / Дрон",
      "details": "У ніч проти 5 вересня 2026 року українські сили атакували Новоросійську військово-морську базу та морський порт за допомогою безекіпажних катерів і ударних БПЛА. Після вимушеного виведення сил із Севастополя Новоросійськ став основним пунктом базування Чорноморського флоту РФ, де розміщуються носії крилатих ракет «Калібр» та десантні кораблі. Тривогу в місті оголосили о 01:23 ночі, після чого сирени лунали кілька годин поспіль, а мешканців закликали не підходити до вікон із видом на море. У Цемеській бухті вели щільну стрілянину з корабельних гармат та кулеметів по морських дронах, що наближалися до стоянок суден. Влада екстрено перекрила рух набережною від вулиці Ісаєва до Мисхако та закрила всі пляжі. Міноборони РФ заявило про знищення двох безекіпажних катерів у Чорному морі, а відбій небезпеки дали лише близько восьмої ранку.",
      "source": "ВМС ЗСУ, оперативний штаб Краснодарського краю, мер Новоросійська, росЗМІ"
    },
    "en": {
      "region": "Krasnodar Krai, Novorossiysk (Tsemes Bay)",
      "target": "Novorossiysk Naval Base (Novorossiysk Naval Base of the Black Sea Fleet) & Port Infrastructure",
      "category": "Military-Industrial Complex",
      "weapon": "USV / Drone",
      "details": "Overnight into September 5, 2026, Ukrainian forces attacked the Novorossiysk Naval Base and seaport infrastructure using unmanned surface vessels and strike UAVs. Following the retreat from Sevastopol, Novorossiysk became the primary operating base for the Russian Black Sea Fleet, sheltering Kalibr cruise missile carriers and landing ships. Air raid sirens sounded in the city at 01:23 local time, with alarms wailing for several hours while authorities urged residents to avoid seaward-facing windows. Inside Tsemes Bay, naval crews engaged approaching maritime drones with intense gunfire and rapid-fire naval cannons. Local authorities blocked traffic along the waterfront from Isaeva Street to Myskhako and closed city beaches. The Russian Defense Ministry reported destroying two unmanned surface vessels in the Black Sea, and the threat alert was cleared around eight in the morning.",
      "source": "Navy of AFU, Krasnodar Operational HQ, Mayor of Novorossiysk, Russian Media"
    }
  }
];

// Validation
let hasErrors = false;
newItems.forEach((item, idx) => {
  const ruLen = item.ru.details.length;
  const ukLen = item.uk.details.length;
  const enLen = item.en.details.length;

  const ruSentences = item.ru.details.split(/[.!?]+/).filter(x => x.trim().length > 0).length;
  const ukSentences = item.uk.details.split(/[.!?]+/).filter(x => x.trim().length > 0).length;
  const enSentences = item.en.details.split(/[.!?]+/).filter(x => x.trim().length > 0).length;

  console.log(`\nItem ${idx + 1}: ${item.ru.target}`);
  console.log(`  Distance: ${item.distance} km`);
  console.log(`  RU details length: ${ruLen} chars (${ruSentences} sentences)`);
  console.log(`  UK details length: ${ukLen} chars (${ukSentences} sentences)`);
  console.log(`  EN details length: ${enLen} chars (${enSentences} sentences)`);

  if (ruLen < 600 || ruLen > 1000) { console.error(`  [ERROR] RU length out of bounds [600-1000]: ${ruLen}`); hasErrors = true; }
  if (ukLen < 600 || ukLen > 1000) { console.error(`  [ERROR] UK length out of bounds [600-1000]: ${ukLen}`); hasErrors = true; }
  if (enLen < 600 || enLen > 1000) { console.error(`  [ERROR] EN length out of bounds [600-1000]: ${enLen}`); hasErrors = true; }
  if (ruSentences < 4 || ruSentences > 8) { console.error(`  [ERROR] RU sentence count out of bounds [4-8]: ${ruSentences}`); hasErrors = true; }
  if (ukSentences < 4 || ukSentences > 8) { console.error(`  [ERROR] UK sentence count out of bounds [4-8]: ${ukSentences}`); hasErrors = true; }
  if (enSentences < 4 || enSentences > 8) { console.error(`  [ERROR] EN sentence count out of bounds [4-8]: ${enSentences}`); hasErrors = true; }
});

if (hasErrors) {
  console.error('\nFAILED VALIDATION! Please fix lengths/sentences.');
  process.exit(1);
} else {
  console.log('\nALL VALIDATION CHECKS PASSED!');
}

// Load existing data
const dataPath = 'd:/_DEV/Map kick/data.js';
let raw = fs.readFileSync(dataPath, 'utf8');

const varMatch = raw.match(/const\s+(\w+)\s*=\s*\[/);
if (!varMatch) { console.error('Cannot detect variable name'); process.exit(1); }
const varName = varMatch[1];

let items = JSON.parse(raw.replace(new RegExp('^const\\s+' + varName + '\\s*=\\s*'), '').replace(/;\s*$/, ''));

// Filter out any existing 05.09.2026 items
items = items.filter(x => x.date !== '05.09.2026');

// Get max id
let maxId = 0;
items.forEach(i => { if (i.id && i.id > maxId) maxId = i.id; });

newItems.forEach((item, idx) => {
  item.id = maxId + 1 + idx;
});

// Put new items at the beginning
items = newItems.concat(items);

const newContent = 'const ' + varName + ' = ' + JSON.stringify(items, null, 2) + ';';
fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully updated data.js with ' + newItems.length + ' items for 05.09.2026. Total items: ' + items.length);
