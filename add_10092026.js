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
    "date": "10.09.2026",
    "lat": 42.9885,
    "lng": 47.5055,
    "distance": calcMinDistance(42.9885, 47.5055),
    "ru": {
      "region": "Республика Дагестан, Махачкала",
      "target": "Махачкалинский морской торговый порт (Нефтяная гавань и причальная инфраструктура базирования)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 10 сентября 2026 года дальнобойные украинские дроны атаковали Махачкалинский морской торговый порт в Дагестане. Это единственный незамерзающий глубоководный порт России на Каспии с нефтеналивной гаванью мощностью перевалки почти восемь миллионов тонн сырья в год. Через эти причалы также снабжается база Каспийской флотилии и действует ключевой маршрут поставок военных грузов и компонентов беспилотников из Ирана. Беспилотники преодолели около тысячи километров и нанесли серию точных ударов по портовой инфраструктуре. На территории терминала прогремели взрывы, после чего вспыхнул пожар в складской зоне и возле причалов. Взрывная волна и осколки сбитых ПВО дронов повредили кровлю расположенного неподалеку Аварского театра. Генштаб ВСУ, ССО и президент Украины Владимир Зеленский официально подтвердили поражение объектов порта, а власти Дагестана признали пожар и ликвидацию последствий налета.",
      "source": "Генштаб ВСУ, ССО ВСУ, Президент Украины, ASTRA, росСМИ"
    },
    "uk": {
      "region": "Республіка Дагестан, Махачкала",
      "target": "Махачкалінський морський торговельний порт (Нафтова гавань та причальна інфраструктура базування)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 10 вересня 2026 року далекобійні українські безпілотники атакували Махачкалінський морський торговельний порт у Дагестані. Це єдиний незамерзаючий глибоководний порт Росії на Каспії з нафтоналивною гаванню проєктною потужністю майже вісім мільйонів тонн на рік. Через місцеві причали забезпечується база Каспійської флотилії та пролягає головний морський маршрут військових поставок і компонентів дронів з Ірану. Подолавши близько тисячі кілометрів, ударні БПЛА успішно уразили портову інфраструктуру противника. На майданчиках порту пролунали вибухи, після чого спалахнула пожежа у зоні складів та на причальних спорудах. Вибухова хвиля та уламки перехоплених апаратів пошкодили дах розташованого поруч театру на міській набережній. Генштаб ЗСУ, ССО та президент України Володимир Зеленський підтвердили влучне ураження об'єкта, а влада Дагестану визнала пожежу на портових спорудах.",
      "source": "Генштаб ЗСУ, ССО ЗСУ, Президент України, ASTRA, росЗМІ"
    },
    "en": {
      "region": "Republic of Dagestan, Makhachkala",
      "target": "Makhachkala Commercial Sea Port (Oil Harbor & Fleet Berthing Infrastructure)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Overnight into September 10, 2026, Ukrainian long-range strike drones attacked the Makhachkala Commercial Sea Port in Dagestan. As Russia's only ice-free deep-water port on the Caspian Sea, it features an oil harbor capable of transshipping nearly eight million tons of crude and fuel annually. The harbor also berths Caspian Flotilla warships and serves as a vital logistics corridor for military hardware and drone components shipped from Iran. Ukrainian drones traveled approximately 1,000 kilometers before striking facilities across the port complex. Multiple explosions sparked a fire across storage premises and portside mooring berths. Blast waves and debris from intercepted drones damaged the roof of the nearby Avar Theater along the embankment. Ukraine's General Staff, Special Operations Forces, and President Volodymyr Zelensky confirmed the strike, while local authorities acknowledged fires across the port.",
      "source": "General Staff of AFU, SOF of AFU, President of Ukraine, ASTRA, Russian Media"
    }
  }
];

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
  console.error('\nFAILED VALIDATION!');
  process.exit(1);
} else {
  console.log('\nALL VALIDATION CHECKS PASSED!');
}

// Load existing data
const dataPath = 'd:/_DEV/Map kick/data.js';
let raw = fs.readFileSync(dataPath, 'utf8').trim();

const varMatch = raw.match(/const\s+(\w+)\s*=\s*\[/);
if (!varMatch) { console.error('Cannot detect variable name'); process.exit(1); }
const varName = varMatch[1];

let jsonStr = raw.replace(new RegExp('^const\\s+' + varName + '\\s*=\\s*'), '').replace(/;\s*$/, '').trim();
let items = JSON.parse(jsonStr);

// Filter out any existing 10.09.2026 items
items = items.filter(x => x.date !== '10.09.2026');

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
console.log('Successfully updated data.js with ' + newItems.length + ' items for 10.09.2026. Total items: ' + items.length);
