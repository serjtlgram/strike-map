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
    "date": "08.09.2026",
    "lat": 51.4506,
    "lng": 45.9439,
    "distance": calcMinDistance(51.4506, 45.9439),
    "ru": {
      "region": "Саратовская область, Саратов (Заводской район)",
      "target": "Саратовский НПЗ (ПАО «Саратовский нефтеперерабатывающий завод» — ПАО «НК «Роснефть»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 8 сентября 2026 года дальнобойные украинские беспилотники атаковали Саратовский нефтеперерабатывающий завод в Заводском районе Саратова. Предприятие входит в структуру «Роснефти» и является одним из старейших в стране, ежегодно перерабатывая до 7 миллионов тонн сырья и снабжая топливом военные подразделения на юго-восточном направлении. Около половины четвертого утра над промышленной зоной раздалась серия мощных взрывов, после чего на технологической площадке завода вспыхнул сильный пожар с густым столбом дыма. Примечательно, что удар пришелся всего через пять дней после окончания планового капитального ремонта производственных установок. Из-за воздушной тревоги в международном аэропорту Гагарин временно вводили план «Ковер» с задержкой авиарейсов. Губернатор региона подтвердил повреждение заводской инфраструктуры и ранение 10 человек, а Минобороны заявило о перехвате беспилотников дежурными расчетами ПВО.",
      "source": "ASTRA, губернатор Саратовской области, Росавиация, очевидцы, росСМИ"
    },
    "uk": {
      "region": "Саратовська область, Саратов (Заводський район)",
      "target": "Саратовський НПЗ (ПАТ «Саратовський нафтопереробний завод» — ПАТ «НК «Роснефть»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 8 вересня 2026 року далекобійні українські безпілотники завдали удару по Саратовському нафтопереробному заводу в Заводському районі Саратова. Підприємство належить корпорації «Роснефть» і є одним із найстаріших у галузі, щорічно переробляючи до 7 мільйонів тонн нафти та забезпечуючи пальним військові з'єднання загарбників. Близько пів на четверту ранку над промисловою зоною пролунала серія вибухів, після чого на виробничих майданчиках заводу спалахнула сильна пожежа із задимленням. Важливо, що атака відбулася всього через п'ять днів після завершення капітального ремонту технологічного обладнання. Через загрозу БПЛА в міжнародному аеропорту Гагарін екстрено вводили план «Килим» із призупиненням рейсів. Губернатор Саратовської області підтвердив ураження інфраструктури підприємства та поранення 10 осіб, тоді як Міноборони РФ заявило про відбиття нальоту черговими засобами ППО.",
      "source": "ASTRA, губернатор Саратовської області, Росавіація, очевидці, росЗМІ"
    },
    "en": {
      "region": "Saratov Oblast, Saratov (Zavodskoy District)",
      "target": "Saratov Oil Refinery (PJSC Saratov Refinery — Rosneft)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Overnight into September 8, 2026, Ukrainian long-range strike drones attacked the Saratov Oil Refinery in the city's Zavodskoy District. Operating under Rosneft, the facility is among Russia's historic refineries, processing up to 7 million tons of crude annually and supplying fuel to military forces deployed across the southern theater. Around 03:30 local time, explosions shook the industrial area, followed by a fire and thick smoke billowing from the plant's production premises. Notably, the strike occurred merely five days after the facility completed scheduled capital overhaul operations. Due to the incoming drone threat, Saratov's Gagarin International Airport enacted the 'Kover' emergency protocol, delaying multiple scheduled flights. The regional governor acknowledged damage to refinery infrastructure and reported ten casualties, while the Russian Defense Ministry claimed its air defense units shot down incoming drones.",
      "source": "ASTRA, Saratov Oblast Governor, Rosaviatsiya, Eyewitnesses, Russian Media"
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

// Filter out any existing 08.09.2026 items
items = items.filter(x => x.date !== '08.09.2026');

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
console.log('Successfully updated data.js with ' + newItems.length + ' items for 08.09.2026. Total items: ' + items.length);
