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
    "date": "16.09.2026",
    "lat": 45.6420,
    "lng": 33.2613,
    "distance": calcMinDistance(45.6420, 33.2613),
    "ru": {
      "region": "АР Крым (оккупирован), Раздольненский район, с. Орловка",
      "target": "Газораспределительная станция «Орловка» (ГРС «Орловка»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Поздно вечером 16 сентября 2026 года украинские ударные беспилотники атаковали ключевой объект газотранспортной инфраструктуры на северо-западе Крыма — газораспределительную станцию «Орловка» в Раздольненском районе. Местные жители около 22:00 зафиксировали серию мощных взрывов, после чего над газовым распределительным узлом поднялось масштабное зарево от пожара. ГРС «Орловка» играет важную роль в распределении природного газа потребителям и на оккупационные военные объекты в регионе, технологически связывая станции «Раздольное» и «Нива». В результате прямого попадания дронов технологическое оборудование станции и распределительные узлы получили серьезные повреждения. Оккупационная администрация района была вынуждена признать факт аварии на магистральных объектах и отключение газоснабжения в нескольких селах. К месту взрыва прибыли расчеты МЧС для локализации очага возгорания.",
      "source": "Мониторинговая группа «Крымский ветер», оккупационная администрация Раздольненского района, местные жители"
    },
    "uk": {
      "region": "АР Крим (окупований), Роздольненський район, с. Орлівка",
      "target": "Газорозподільна станція «Орлівка» (ГРС «Орлівка»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Пізно ввечері 16 вересня 2026 року українські ударні безпілотники атакували важливий об'єкт газотранспортної мережі на північному заході Криму — газорозподільну станцію «Орлівка» в Роздольненському районі. Місцеві жителі близько 22:00 повідомили про звуки вибухів, після яких над територією газового вузла спалахнула масштабна пожежа із загравою на все поле. ГРС «Орлівка» виконує ключову роль у подачі блакитного палива споживачам та військовим об'єктам окупантів у Роздольненському і Сакському районах та технологічно поєднана з ГРС «Роздольне» і «Нива». Внаслідок влучання безпілотників пошкоджено технологічні газогони та запірну арматуру станції. Окупаційна адміністрація району змушена була визнати надзвичайну подію на магістральних мережах, через що без газу залишилися прилеглі населені пункти. До ліквідації вогню залучалися аварійні бригади та пожежні підрозділи.",
      "source": "Моніторингова група «Кримський вітер», окупаційна адміністрація Роздольненського району, місцеві жителі"
    },
    "en": {
      "region": "Autonomous Republic of Crimea (occupied), Razdolnensky District, Orlovka",
      "target": "Orlovka Gas Distribution Station (GRS Orlovka)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Late in the evening on September 16, 2026, Ukrainian long-range strike UAVs struck a vital gas transmission facility in northwestern occupied Crimea — the Orlovka Gas Distribution Station in Razdolnensky District. Around 10:00 PM local time, residents heard loud explosions, followed by a large fire with an intense glow lighting up the surrounding fields. The Orlovka GRS plays a vital role in natural gas distribution to civilian infrastructure and Russian military bases across Razdolnensky and Saksky districts, connecting with the Razdolnoye and Niva gas hubs. Direct drone impacts damaged the station's primary distribution manifolds, pressure reduction valves, and pipeline fittings. The local occupation administration confirmed disruptions to main gas transmission facilities, halting supplies to several nearby villages. Emergency response crews and firefighters were dispatched to contain the blaze and extinguish the fire.",
      "source": "Crimean Wind OSINT monitoring group, Razdolnensky district occupation administration, local reports"
    },
    "images": [
      "images/grs_orlovka_img1.jpg",
      "images/grs_orlovka_img2.jpg",
      "images/grs_orlovka_img3.jpg",
      "images/grs_orlovka_img4.jpg"
    ]
  }
];

// 1. Validation
let hasErrors = false;
function countSentences(text) {
  const sentences = text.split(/[.!?]+/).filter(x => x.trim().length > 0);
  return sentences.length;
}

newItems.forEach((item, idx) => {
  console.log(`Checking Item ${idx + 1}: ${item.ru.target}`);
  for (const lang of ['ru', 'uk', 'en']) {
    const text = item[lang].details;
    const charLen = text.length;
    const sentCount = countSentences(text);
    console.log(`  ${lang.toUpperCase()}: ${charLen} chars | ${sentCount} sentences | dist: ${item.distance} km`);
    if (charLen < 600 || charLen > 1000) {
      console.error(`  ERROR: ${lang.toUpperCase()} length ${charLen} is outside 600-1000!`);
      hasErrors = true;
    }
    if (sentCount < 4 || sentCount > 8) {
      console.error(`  ERROR: ${lang.toUpperCase()} sentences ${sentCount} is outside 4-8!`);
      hasErrors = true;
    }
  }

  // Check images/videos exist
  for (const media of item.images) {
    if (!fs.existsSync(media)) {
      console.error(`  ERROR: Media file missing: ${media}`);
      hasErrors = true;
    } else {
      const size = fs.statSync(media).size;
      if (media.endsWith('.mp4') && size > 1.9 * 1024 * 1024) {
        console.error(`  ERROR: Video ${media} is > 1.9MB (${size} bytes)`);
        hasErrors = true;
      }
      if ((media.endsWith('.jpg') || media.endsWith('.png')) && size > 100 * 1024) {
        console.error(`  ERROR: Image ${media} is > 100KB (${size} bytes)`);
        hasErrors = true;
      }
    }
  }
});

if (hasErrors) {
  console.error('\nFAILED VALIDATION!');
  process.exit(1);
} else {
  console.log('\nALL VALIDATION CHECKS PASSED!');
}

// 2. Read data.js, update and save
const dataPath = 'data.js';
let raw = fs.readFileSync(dataPath, 'utf8').trim();

const varMatch = raw.match(/const\s+(\w+)\s*=\s*\[/);
if (!varMatch) { console.error('Cannot detect variable name'); process.exit(1); }
const varName = varMatch[1];

let jsonStr = raw.replace(new RegExp('^const\\s+' + varName + '\\s*=\\s*'), '').replace(/;\s*$/, '').trim();
let items = JSON.parse(jsonStr);

// Filter out existing 16.09.2026 if any
items = items.filter(x => x.date !== '16.09.2026');

let maxId = 0;
items.forEach(i => { if (i.id && i.id > maxId) maxId = i.id; });

newItems.forEach((item, idx) => {
  item.id = maxId + 1 + idx;
});

items = newItems.concat(items);

const newContent = 'const ' + varName + ' = ' + JSON.stringify(items, null, 2) + ';';
fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully updated data.js with ' + newItems.length + ' items for 16.09.2026. Total items: ' + items.length);
