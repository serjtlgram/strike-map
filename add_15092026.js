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
    "date": "15.09.2026",
    "lat": 53.3687,
    "lng": 35.8177,
    "distance": calcMinDistance(53.3687, 35.8177),
    "ru": {
      "region": "Орловская область, Болховский район, с. Цимбулово",
      "target": "Главная пусковая база и дронопорт реактивных БПЛА «Герань» (Цимбулово / Руднево)",
      "category": "ВПК / БПЛА",
      "weapon": "Дрон",
      "details": "Днем 15 сентября 2026 года дальнобойные украинские дроны атаковали крупнейший российский дронопорт около села Цимбулово в Орловской области. Объект расположен примерно в 280 километрах от границы и служил основным центром подготовки и пуска реактивных ударных беспилотников «Герань-4» и «Герань-5». По данным спутниковой разведки, на площадке были смонтированы 16 стационарных пусковых рамп с удлиненными направляющими, более сотни солнечных батарей для автономного питания, а также подземные хранилища топлива и боевых частей. В момент налета на открытых площадках находились десятки готовых к пуску беспилотников. Несколько украинских ударных дронов пробили локальную систему ПВО и точно ударили по пусковым установкам и складским ангарам. На территории базы вспыхнули сильные пожары с вторичной детонацией хранившихся БПЛА. Президент Украины Владимир Зеленский официально подтвердил успешное поражение этой ключевой пусковой площадки в регионе.",
      "source": "Президент Украины Владимир Зеленский, The Telegraph, OSINT (Dnipro Osint, Oko Gora), Генштаб ВСУ"
    },
    "uk": {
      "region": "Орловська область, Болховський район, с. Цимбулово",
      "target": "Головна пускова база та дронопорт реактивних БПЛА «Герань» (Цимбулово / Руднєво)",
      "category": "ВПК / БПЛА",
      "weapon": "Дрон",
      "details": "Удень 15 вересня 2026 року українські далекобійні безпілотники завдали результативного удару по найбільшому російському дронопорту біля села Цимбулово в Орловській області. Цей військовий об'єкт розташований приблизно за 280 кілометрів від кордону та був головним хабом для підготовки й масованих пусків реактивних дронів «Герань-4» і «Герань-5». Супутникові знімки фіксували на базі 16 стаціонарних пускових рамп із подовженими рейками, понад сотню сонячних панелей для автономного живлення та підземні сховища пального й бойових частин. Під час атаки на відкритих майданчиках стояли десятки споряджених безпілотників. Українські ударні дрони подолали загороджувальний вогонь ППО та влучили безпосередньо по пускових напрямних і складальних ангарах. На території бази спалахнули масштабні пожежі з детонацією БПЛА. Президент України Володимир Зеленський офіційно підтвердив успішне ураження цієї стратегічної пускової бази ворога.",
      "source": "Президент України Володимир Зеленський, The Telegraph, OSINT (Dnipro Osint, Oko Gora), Генштаб ЗСУ"
    },
    "en": {
      "region": "Oryol Oblast, Bolkhovsky District, Tsymbulovo",
      "target": "Main Jet UAV Launch Base & Droneport (Tsymbulovo / Rudnevo site)",
      "category": "Military-Industrial / UAV",
      "weapon": "Drone",
      "details": "On the afternoon of September 15, 2026, Ukrainian long-range strike drones hit Russia's largest drone launch hub near Tsymbulovo in Oryol Oblast. Located roughly 280 kilometers from the Ukrainian border, this strategic facility served as the primary operational base for preparing and launching jet-powered Geran-4 and Geran-5 strike drones. Satellite imagery showed 16 fixed launch rails with extended tracks, an autonomous solar array of over 100 panels, and underground bunkers for fuel and warheads. Dozens of combat-ready UAVs were positioned outdoors during the attack. Several Ukrainian drones penetrated local air defense systems, scoring direct hits on launch ramps, storage hangars, and assembly areas. Secondary explosions erupted as stored drones and fuel tanks caught fire. President Volodymyr Zelensky officially confirmed the successful strike on this critical drone-launch facility.",
      "source": "President of Ukraine Volodymyr Zelensky, The Telegraph, OSINT (Dnipro Osint, Oko Gora), General Staff of AFU"
    },
    "images": [
      "images/tsymbulovo_dronoport_1.jpg",
      "images/tsymbulovo_dronoport_2.jpg",
      "images/tsymbulovo_dronoport_3.jpg",
      "images/tsymbulovo_dronoport_4.jpg"
    ]
  },
  {
    "date": "15.09.2026",
    "lat": 48.9538,
    "lng": 40.2974,
    "distance": calcMinDistance(48.9538, 40.2974),
    "ru": {
      "region": "Ростовская область, Миллеровский район, Миллерово",
      "target": "РЛС дальнего радиолокационного обнаружения 55Ж6М «Небо-М» (Военный аэродром «Миллерово»)",
      "category": "Военный аэродром",
      "weapon": "Дрон-камикадзе RAM-2X",
      "details": "Утром 15 сентября 2026 года Силы обороны Украины уничтожили новейшую российскую радиолокационную станцию дальнего обнаружения 55Ж6М «Небо-М» в районе военного аэродрома «Миллерово» в Ростовской области. Высокоточную операцию провели операторы 429-й отдельной бригады беспилотных систем «АХИЛЛЕС» совместно с бойцами 43-й отдельной артиллерийской бригады. Удар был нанесен отечественным барражирующим боеприпасом RAM-2X на рекордную дистанцию около 175 километров от линии фронта. Многодиапазонный комплекс стоимостью около 100 миллионов долларов служил ключевым элементом ПВО, прикрывая аэродром «Миллерово» от налетов украинской авиации и дальнобойных дронов. Именно с этого аэродрома противник регулярно поднимает боевую авиацию и запускает ударные БПЛА по Украине. Прямое попадание дрона-камикадзе вывело радиолокационный модуль из строя и пробило брешь в защите авиабазы.",
      "source": "429-я отдельная бригада «АХИЛЛЕС», 43-я ОАБр, Оперативно ЗСУ, Генштаб ВСУ"
    },
    "uk": {
      "region": "Ростовська область, Міллеровський район, Міллерово",
      "target": "РЛС дальнього радіолокаційного виявлення 55Ж6М «Небо-М» (Військовий аеродром «Міллерово»)",
      "category": "Військовий аеродром",
      "weapon": "Дрон-камікадзе RAM-2X",
      "details": "Вранці 15 вересня 2026 року Сили оборони України знищили найновішу російську радіолокаційну станцію дальнього виявлення 55Ж6М «Небо-М» поблизу військового аеродрому «Міллерово» у Ростовській області. Успішну операцію реалізували бійці 429-ї окремої бригади безпілотних систем «АХІЛЛЕС» у тісній взаємодії з 43-ю окремою артилерійською бригадою. Для ураження військові застосували далекобійний баражуючий боєприпас RAM-2X, який подолав близько 175 кілометрів від лінії бойового зіткнення. Багатодіапазонний комплекс вартістю близько 100 мільйонів доларів забезпечував радіолокаційний контроль та прикривав ворожу авіабазу від українських ракет і безпілотників. Саме з «Міллерово» окупанти регулярно піднімають винищувачі та запускають дрони типу «Шахед». Пряме влучання дрона-камікадзе повністю вивело РЛС з ладу, позбавивши аеродром радіолокаційних очей.",
      "source": "429-та окрема бригада «АХІЛЛЕС», 43-тя ОАБр, Оперативно ЗСУ, Генштаб ЗСУ"
    },
    "en": {
      "region": "Rostov Oblast, Millerovsky District, Millerovo",
      "target": "Nebo-M Long-Range Early Warning Radar 55Zh6M (Millerovo Military Airfield)",
      "category": "Military Airfield",
      "weapon": "RAM-2X Loitering Munition",
      "details": "On the morning of September 15, 2026, Ukrainian defense forces destroyed a modern Russian 55Zh6M Nebo-M long-range surveillance radar system near the Millerovo military airfield in Rostov Oblast. The precision strike was executed by operators from the 429th Achilles Separate Drone Brigade working alongside the 43rd Separate Artillery Brigade. Ukrainian forces utilized the long-range RAM-2X loitering munition, striking the target roughly 175 kilometers behind the active battle line. Valued at approximately 100 million dollars, this multiband radar provided primary air surveillance and early warning against incoming Ukrainian missiles and drones. Russia heavily relies on Millerovo airbase for staging tactical combat aircraft and launching Shahed strike drones. The direct hit completely disabled the radar array, leaving a major blind spot in the air defense screen protecting the airfield.",
      "source": "429th Achilles Separate Drone Brigade, 43rd Separate Artillery Brigade, OperativnoZSU, General Staff of AFU"
    },
    "images": [
      "video/millerovo_nebo_m_2026-09-15_1.mp4",
      "video/millerovo_nebo_m_2026-09-15_2.mp4",
      "images/millerovo_nebo_m_1.jpg",
      "images/millerovo_nebo_m_2.jpg"
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

// Filter out existing 15.09.2026 if any
items = items.filter(x => x.date !== '15.09.2026');

let maxId = 0;
items.forEach(i => { if (i.id && i.id > maxId) maxId = i.id; });

newItems.forEach((item, idx) => {
  item.id = maxId + 1 + idx;
});

items = newItems.concat(items);

const newContent = 'const ' + varName + ' = ' + JSON.stringify(items, null, 2) + ';';
fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully updated data.js with ' + newItems.length + ' items for 15.09.2026. Total items: ' + items.length);
