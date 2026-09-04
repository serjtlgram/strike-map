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
    "date": "03.09.2026",
    "lat": 56.8291,
    "lng": 35.7564,
    "distance": calcMinDistance(56.8291, 35.7564),
    "ru": {
      "region": "Тверская область, Тверь (мкр-н Мигалово)",
      "target": "Военный аэродром «Мигалово» (12-я военно-транспортная авиационная дивизия ВКС РФ)",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "В ночь на 3 сентября 2026 года дальнобойные украинские беспилотники атаковали военный аэродром «Мигалово» на окраине Твери. Этот стратегический объект служит главной базой 12-й военно-транспортной авиадивизии и 196-го военно-транспортного авиаполка ВКС РФ, где дислоцируются тяжелые транспортные самолеты Ил-76МД, Ан-22 и Ан-12. Борты из Мигалово регулярно задействуют для переброски на фронт десантных подразделений, техники, тяжелого вооружения и боекомплекта. Местные жители зафиксировали звуки пролета групп низколетящих дронов и непрекращающуюся плотную стрельбу зенитных расчетов прямо над взлетно-посадочной полосой. В микрорайоне прогремело несколько мощных взрывов от прилетов и работы систем противовоздушной обороны. Из-за атаки в воздушном пространстве Тверской и Московской областей вводили план «Ковер», что привело к задержке десятков пассажирских рейсов в столичных аэропортах. Факт налета подтвердили очевидцы и данные мониторинга.",
      "source": "OSINT (Astra, Exilenova+), очевидцы, росСМИ"
    },
    "uk": {
      "region": "Тверська область, Твер (мкр-н Мігалово)",
      "target": "Військовий аеродром «Мігалово» (12-та військово-транспортна авіаційна дивізія ВКС РФ)",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "У ніч на 3 вересня 2026 року далекобійні українські безпілотники атакували військовий аеродром «Мігалово» на околиці Твері. Цей стратегічний об'єкт слугує основною базою 12-ї військово-транспортної авіадивізії та 196-го військово-транспортного авіаполку ВКС РФ, де дислокуються важкі літаки Іл-76МД, Ан-22 та Ан-12. Борти з Мігалово постійно задіюють для оперативного перекидання на фронт штурмових підрозділів, бронетехніки, озброєння та боєприпасів. Місцеві жителі зафіксували гул дронів і безперервну щільну стрілянину зенітних розрахунків над злітно-посадковою смугою летовища. У мікрорайоні пролунала серія потужних вибухів від влучань та роботи ворожої протиповітряної оборони. Через наліт у повітряному просторі Тверської та Московської областей оголошували план «Килим», що призвело до затримки десятків рейсів у столичних аеропортах. Факт удару підтвердили очевидці та моніторингові канали.",
      "source": "OSINT (Astra, Exilenova+), очевидці, росЗМІ"
    },
    "en": {
      "region": "Tver Oblast, Tver (Migalovo District)",
      "target": "Migalovo Military Airbase (12th Military Transport Aviation Division)",
      "category": "Military Airbase",
      "weapon": "Drone",
      "details": "Overnight into September 3, 2026, Ukrainian long-range strike drones attacked the Migalovo military airbase on the outskirts of Tver. The strategic airfield is home to the 12th Military Transport Aviation Division and the 196th Military Transport Aviation Regiment of the Russian Aerospace Forces, hosting heavy Il-76MD, An-22, and An-12 transport aircraft. Aircraft stationed at Migalovo play an essential role in airlifting troops, armored vehicles, heavy weaponry, and ammunition to forward deployment areas. Local residents documented the approach of drone waves accompanied by intense anti-aircraft and small-arms fire directly over the airfield runways. Multiple loud explosions echoed across the district from drone impacts and active air defenses. The attack triggered emergency airspace closures under the Kovyor plan across Tver and Moscow oblasts, grounding dozens of civilian flights. The strike was cross-verified by local eyewitness video and satellite monitoring.",
      "source": "OSINT (Astra, Exilenova+), Local Media"
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

// Filter out any existing 03.09.2026 items
items = items.filter(x => x.date !== '03.09.2026');

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
console.log('Successfully updated data.js with ' + newItems.length + ' items for 03.09.2026. Total items: ' + items.length);
