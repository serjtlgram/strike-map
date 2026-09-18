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
    "date": "17.09.2026",
    "lat": 57.6012,
    "lng": 39.8745,
    "distance": calcMinDistance(57.6012, 39.8745),
    "ru": {
      "region": "Ярославская область, Ярославль",
      "target": "Ярославский НПЗ (ПАО «Славнефть-ЯНОС»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 17 сентября 2026 года украинские ударные дроны совершили результативную атаку на Ярославский нефтеперерабатывающий завод («Славнефть-ЯНОС»). Это совместная спецоперация СБУ, Сил беспилотных систем, ГУР и СВР на удалении свыше 800 км от границы. Предприятие входит в пятерку крупнейших в России с мощностью переработки порядка 15 млн тонн нефти в год и критически важно для снабжения армии горючим. В результате попаданий на территории завода вспыхнул сильный пожар, поднялся густой столб дыма. По информации Reuters и данным мониторинга, повреждения получила ключевая установка первичной перегонки нефти АВТ-3 мощностью 17 140 тонн в сутки, обеспечивающая около 40% переработки всего НПЗ. Из-за аварии работа установки была полностью остановлена, а предприятие временно сняло нефтепродукты с торгов на товарной бирже. Губернатор области заявил о 65 сбитых дронах, однако подтвердил тушение возгораний на заводе.",
      "source": "СБУ, Генштаб ВСУ, ГУР МО, Reuters, губернатор Ярославской области, OSINT (Astra, Крымский ветер)"
    },
    "uk": {
      "region": "Ярославська область, Ярославль",
      "target": "Ярославський НПЗ (ПАТ «Славнєфть-ЯНОС»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч на 17 вересня 2026 року далекобійні ударні безпілотники атакували стратегічний Ярославський нафтопереробний завод («Славнєфть-ЯНОС»). Спецоперацію успішно реалізували СБУ разом із Силами безпілотних систем, ГУР МО та СЗР на відстані понад 800 км від українського кордону. Підприємство потужністю переробки близько 15 млн тонн нафти на рік є одним із ключових джерел пального для російської армії та центральних регіонів РФ. Прямі влучання дронів спричинили масштабну пожежу на технологічних майданчиках заводу. За даними Reuters та супутникового моніторингу, уражено головну установку первинної переробки нафти АВТ-3 добовою потужністю 17 140 тонн, на яку припадає близько 40% усього виробництва НПЗ. Через серйозні пошкодження установку довелося аварійно зупинити, а завод призупинив біржові продажі нафтопродуктів. Місцева влада підтвердила факти прильотів і тривалу ліквідацію пожежі на території підприємства.",
      "source": "СБУ, Генштаб ЗСУ, ГУР МО, Reuters, губернатор Ярославської області, OSINT (Astra, Кримський вітер)"
    },
    "en": {
      "region": "Yaroslavl Oblast, Yaroslavl",
      "target": "Yaroslavl Refinery (PJSC Slavneft-YANOS)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of September 17, 2026, Ukrainian long-range strike drones carried out an effective attack on the Yaroslavl Oil Refinery (Slavneft-YANOS), located over 800 km from the border. The operation was conducted jointly by the SBU, Drone Systems Forces, DIU, and Foreign Intelligence Service. With an annual capacity of 15 million tons, the refinery is among Russia's top five fuel producers and plays a key role in military logistics. Direct drone hits caused a major fire across the site. According to Reuters and satellite data, the attack damaged the primary crude distillation unit AVT-3 with a capacity of 17,140 tons per day (~40% of the plant's total processing). The damaged unit was shut down, forcing the refinery to halt product offerings on the domestic commodities exchange. Regional authorities reported intercepting dozens of UAVs while confirming active firefighting efforts at the facility.",
      "source": "SBU, General Staff of AFU, DIU, Reuters, Yaroslavl Governor, OSINT (Astra, Crimean Wind)"
    },
    "images": [
      "video/yanos_1709_vid1.mp4",
      "video/yanos_1709_vid2.mp4",
      "images/yanos_1709_img1.jpg",
      "images/yanos_1709_img2.jpg",
      "images/yanos_1709_img3.jpg",
      "images/yanos_1709_img4.jpg"
    ]
  },
  {
    "date": "17.09.2026",
    "lat": 47.2580,
    "lng": 39.6380,
    "distance": calcMinDistance(47.2580, 39.6380),
    "ru": {
      "region": "Ростовская область, Ростов-на-Дону",
      "target": "Военный аэродром «Ростов-на-Дону — Центральный»",
      "category": "ВПК / Авиабазы",
      "weapon": "Дрон",
      "details": "В ночь на 17 сентября 2026 года группа украинских ударных БПЛА Центра спецопераций «Альфа» СБУ нанесла массированный удар по военному аэродрому «Ростов-на-Дону — Центральный». Авиабаза служит местом постоянной дислокации 30-го отдельного транспортного смешанного авиаполка ВС РФ и ключевым транспортным хабом группировки войск на южном направлении. В результате прямых попаданий дронов на стоянках авиатехники начался крупный пожар с серией мощных вторичных детонаций. Официально подтверждено поражение шести бортов: одного военно-транспортного самолета Ан-12, двух военно-транспортных самолетов Ан-26 и трех вертолетов армейской авиации. Спутниковые снимки NASA FIRMS зафиксировали множественные очаги открытого горения на летном поле. Кроме того, взрывами была повреждена трансформаторная подстанция, что привело к отключению электричества в четырех районах Ростова. Данный налет нанес существенный урон военно-транспортной логистике противника.",
      "source": "СБУ (ЦСО «А»), Президент Украины, Генштаб ВСУ, губернатор Ростовской области, NASA FIRMS, OSINT"
    },
    "uk": {
      "region": "Ростовська область, Ростов-на-Дону",
      "target": "Військовий аеродром «Ростов-на-Дону — Центральний»",
      "category": "ВПК / Авіабази",
      "weapon": "Дрон",
      "details": "У ніч на 17 вересня 2026 року ударні далекобійні дрони Центру спецоперацій «А» СБУ здійснили масовану атаку на військовий аеродром «Ростов-на-Дону — Центральний». Ця авіабаза є пунктом базування 30-го окремого транспортного змішаного авіаполку РФ та головним логістичним авіахабом південного угруповання ворога. У результаті точних прильотів на стоянках авіаційної техніки спалахнула масштабна пожежа із серією потужних вторинних детонацій. Було підтверджено ураження шести повітряних суден: одного військово-транспортного літака Ан-12, двох військово-транспортних літаків Ан-26 і трьох вертольотів. Супутникові термознімки NASA FIRMS зафіксували численні осередки сильного горіння в зоні розташування бортів. Також вибуховою хвилею було пошкоджено трансформаторну підстанцію, через що чотири райони Ростова-на-Дону залишилися без електропостачання. Успішний удар відчутно паралізував транспортну спроможність окупантів на цьому напрямку.",
      "source": "СБУ (ЦСО «А»), Президент України, Генштаб ЗСУ, губернатор Ростовської області, NASA FIRMS, OSINT"
    },
    "en": {
      "region": "Rostov Oblast, Rostov-on-Don",
      "target": "Rostov-on-Don Central Military Airfield",
      "category": "Defense / Airbases",
      "weapon": "Drone",
      "details": "On the night of September 17, 2026, long-range attack drones operated by Alpha Center of the SBU carried out a massive strike on the Rostov-on-Don Central military airfield. The airbase serves as the permanent home of Russia's 30th Independent Composite Transport Aviation Regiment and a primary logistical air hub for southern operations. Precise drone impacts across aircraft parking aprons triggered extensive fires accompanied by powerful secondary detonations. Official reports confirmed significant damage to six military aircraft: one An-12 transport plane, two An-26 transport planes, and three military helicopters. NASA FIRMS satellite thermal data confirmed multiple intense fire signatures across the flight line and parking pads. In addition, nearby explosions damaged an electrical transformer substation, cutting off power to four districts of Rostov. The operation dealt a severe blow to the transport and supply capabilities of the Russian military.",
      "source": "SBU (Alpha), President of Ukraine, General Staff of AFU, Rostov Governor, NASA FIRMS, OSINT"
    },
    "images": [
      "video/rostov_airbase_1709_vid1.mp4",
      "video/rostov_airbase_1709_vid2.mp4",
      "images/rostov_airbase_1709_img1.jpg",
      "images/rostov_airbase_1709_img2.jpg",
      "images/rostov_airbase_1709_img3.jpg",
      "images/rostov_airbase_1709_img4.jpg"
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
  console.log(`\nChecking Item ${idx + 1}: ${item.ru.target}`);
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

// Filter out existing 17.09.2026 if any
items = items.filter(x => x.date !== '17.09.2026');

let maxId = 0;
items.forEach(i => { if (i.id && i.id > maxId) maxId = i.id; });

newItems.forEach((item, idx) => {
  item.id = maxId + 1 + idx;
});

items = newItems.concat(items);

const newContent = 'const ' + varName + ' = ' + JSON.stringify(items, null, 2) + ';';
fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully updated data.js with ' + newItems.length + ' items for 17.09.2026. Total items: ' + items.length);
