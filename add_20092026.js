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
    "date": "20.09.2026",
    "lat": 55.6445,
    "lng": 37.8057,
    "distance": calcMinDistance(55.6445, 37.8057),
    "ru": {
      "region": "г. Москва, ЮВАО, район Капотня",
      "target": "Московский НПЗ (АО «Газпромнефть-МНПЗ») — установки первичной переработки АВТ-6 и КУПН «Евро+»",
      "category": "НПЗ",
      "weapon": "Дрон",
      "details": "В ночь на 20 сентября 2026 года Силы обороны Украины провели массированную операцию с применением сотен ударных дронов, успешно атаковав Московский НПЗ в Капотне всего в 15 километрах от Кремля. В налете участвовали подразделения СБС, СБУ, ССО и ГУР, применившие БПЛА MICH-2000, FP-1 и «Лютый». По подтвержденным данным Генштаба ВСУ и OSINT-аналитиков, точные прилеты пришлись сразу по трем ключевым объектам: установке первичной переработки ЭЛОУ-АВТ-6, комплексу «Евро+» (КУПН) и блоку изомеризации. На заводе вспыхнул масштабный пожар, кадры которого заполонили соцсети. Вывод из строя обеих установок первичной перегонки фактически парализовал работу НПЗ мощностью 12 млн тонн нефти в год, обеспечивавшего треть топливного рынка Москвы и авиакеросин для столичных аэродромов. Мэр Москвы Сергей Собянин признал возгорание на территории завода, заявив о перехвате сотен дронов на подлете. Удар нанес критический ущерб топливной логистике российской военной машины.",
      "source": "Генштаб ВСУ, СБУ, СБС, ГУР, OSINT (Kiber Boroshno, ASTRA, Supernova+, Exilenova+), мэр Москвы"
    },
    "uk": {
      "region": "м. Москва, ПдСхАО, район Капотня",
      "target": "Московський НПЗ (АТ «Газпромнафта-МНПЗ») — установки первинної переробки АВТ-6 та КУПН «Євро+»",
      "category": "НПЗ",
      "weapon": "Дрон",
      "details": "У ніч на 20 вересня 2026 року Сили оборони України здійснили комбінований наліт далекобійних безпілотників на Московський нафтопереробний завод у Капотні за 15 км від Кремля. До операції долучилися підрозділи СБС, СБУ, ССО та ГУР, задіявши дрони MICH-2000, FP-1 та «Лютий». За підтвердженими даними Генштабу ЗСУ та супутникового аналізу, прямі влучання зафіксовано по установці первинної переробки ЕЛОУ-АВТ-6, комплексу «Євро+» (КУПН) та установці ізомеризації. На території підприємства спалахнула масштабна пожежа, яку підтвердила мерія Москви. Одночасне ураження обох ліній первинної перегонки повністю зупинило переробку нафти на заводі потужністю 12 млн тонн на рік, що постачав до 40% пального столичному регіону та забезпечував потреби військ РФ. Російська ППО заявила про збиття сотень дронів, проте критичні установки були виведені з ладу. Удар завдав відчутного удару по паливній логістиці агресора.",
      "source": "Генштаб ЗСУ, СБУ, СБС, ГУР, OSINT (Kiber Boroshno, ASTRA, Supernova+, Exilenova+), мерія Москви"
    },
    "en": {
      "region": "Moscow, South-Eastern Administrative District, Kapotnya",
      "target": "Moscow Oil Refinery (Gazprom Neft-MNPZ) — ELOU-AVT-6 and Euro+ Distillation Units",
      "category": "Oil Refinery",
      "weapon": "Drone",
      "details": "On the night of September 20, 2026, Ukrainian defense forces executed a massive deep drone strike targeting the Russian capital region. The coordinated raid was launched by Unmanned Systems Forces, SBU, SSO, and military intelligence using MICH-2000, FP-1, and Liutyi UAVs. The primary objective was the Gazprom Neft Moscow Oil Refinery in Kapotnya, 15 kilometers from the Kremlin. Ukrainian General Staff and satellite OSINT confirmed direct hits on three major units: the ELOU-AVT-6 primary distillation facility, the Euro+ refining complex, and an isomerization block. A fierce fire engulfed the refinery grounds, creating dense smoke across southeastern Moscow. Disabling both primary distillation units completely crippled refining operations at the plant, which has an annual capacity of 12 million tons. The refinery provided up to 40% of Moscow's motor fuel and jet fuel for military transport. Moscow Mayor Sobyanin confirmed damage to plant facilities.",
      "source": "General Staff of Ukraine, SBU, USF, HUR, OSINT (Kiber Boroshno, ASTRA, Supernova+, Exilenova+), Moscow Mayor"
    },
    "images": [
      "video/moscow_npz_2009_vid1.mp4",
      "video/moscow_npz_2009_vid2.mp4",
      "images/moscow_npz_2009_img1.jpg",
      "images/moscow_npz_2009_img2.jpg",
      "images/moscow_npz_2009_img3.jpg"
    ]
  },
  {
    "date": "20.09.2026",
    "lat": 55.505,
    "lng": 38.165,
    "distance": calcMinDistance(55.505, 38.165),
    "ru": {
      "region": "Московская область, Раменский район, с/п Софьинское (д. Бритово)",
      "target": "Логистический комплекс «Софьино» (фулфилмент-центр Ozon / ООО «ССТ»)",
      "category": "Логистический центр",
      "weapon": "Дрон",
      "details": "В ночь на 20 сентября 2026 года в ходе масштабного налета ударных дронов на Московскую область был атакован логистический парк «Софьино» в Раменском районе. Беспилотники поразили крупный производственно-складской комплекс ООО «Современные складские технологии», служащий ключевым фулфилмент-центром маркетплейса Ozon и перевалочной базой снабжения. Общая площадь шести корпусов комплекса превышает 290 тысяч квадратных метров. На объекте начался сильнейший пожар, охвативший несколько корпусов, в результате чего склады выгорели практически полностью. Губернатор Подмосковья Андрей Воробьев подтвердил возгорание складского комплекса в Софьино и сообщил о гибели двух человек и десятках пострадавших в округе. По данным OSINT-аналитиков, всего в 500 метрах от объекта была развернута позиция российского ЗРПК «Панцирь-С1», который не сумел предотвратить удар. Поражение логистического центра нанесло тяжелый урон снабжению региона.",
      "source": "Официальные заявления руководства Украины, ASTRA, Supernova+, Exilenova+, Крымский ветер, Baza"
    },
    "uk": {
      "region": "Московська область, Раменський район, с/п Соф'їнське (с. Брітово)",
      "target": "Логістичний комплекс «Соф'їно» (фулфілмент-центр Ozon / ТОВ «ССТ»)",
      "category": "Логістичний центр",
      "weapon": "Дрон",
      "details": "У ніч на 20 вересня 2026 року під час масованого рейду безпілотників на Підмосков'я було уражено логістичний парк «Соф'їно» в Раменському районі. Ударні дрони поцілили у виробничо-складський комплекс ТОВ «Современные складские технологии», де розміщено великий фулфілмент-центр маркетплейса Ozon та бази розподілу товарів подвійного призначення. Загальна площа шести корпусів логістичного хабу сягає 290 тисяч квадратних метрів. Внаслідок прильотів на території спалахнула масштабна пожежа, яка швидко охопила суміжні ангари й призвела до практично повного вигорання складських приміщень. Губернатор Московської області підтвердив займання складського комплексу в Соф'їному та повідомив про загибель двох людей і понад 20 поранених через падіння уламків та роботу зенітних засобів. Прикметно, що всього за 500 метрів від хабу чергував російський ЗРПК «Панцир-С1», який виявився безсилим перед роєм дронів. Знищення комплексу паралізувало товарні потоки агресора в центрі європейської частини РФ.",
      "source": "Офіційні заяви керівництва України, ASTRA, Supernova+, Exilenova+, Кримський вітер, Baza"
    },
    "en": {
      "region": "Moscow Oblast, Ramensky District, Sofyino (Britovo)",
      "target": "Sofino Logistics Complex (Ozon fulfillment center / SST LLC)",
      "category": "Logistics Hub",
      "weapon": "Drone",
      "details": "On the night of September 20, 2026, during a massive drone raid across Moscow region, Ukrainian strike UAVs hit the Sofino Logistics Park in Ramensky District. The strike targeted the industrial storage complex of Modern Warehouse Technologies (SST), which serves as a flagship fulfillment center for the Ozon marketplace and a key regional distribution node. The facility spans six massive blocks covering over 290,000 square meters. Multiple direct hits ignited a catastrophic fire that rapidly spread between buildings, leaving warehouse sections gutted. Moscow Oblast Governor Andrei Vorobyov confirmed the warehouse blaze in Sofino and reported casualties across the district caused by falling debris and air defenses. OSINT researchers documented a Russian Pantsir-S1 air defense system stationed just 500 meters away that failed to stop the attack. The destruction severely disrupted commercial and dual-use supply logistics in the Moscow region.",
      "source": "Official statements by Ukraine's leadership, ASTRA, Supernova+, Exilenova+, Crimean Wind, Baza"
    },
    "images": [
      "video/sofino_2009_vid1.mp4",
      "video/sofino_2009_vid2.mp4",
      "images/sofino_2009_img1.jpg",
      "images/sofino_2009_img2.jpg",
      "images/sofino_2009_img3.jpg"
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
      if (media.endsWith('.mp4') && size > 1.95 * 1024 * 1024) {
        console.error(`  ERROR: Video ${media} is > 1.95MB (${size} bytes)`);
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

// Filter out existing 20.09.2026 if any
items = items.filter(x => x.date !== '20.09.2026');

let maxId = 0;
items.forEach(i => { if (i.id && i.id > maxId) maxId = i.id; });

newItems.forEach((item, idx) => {
  item.id = maxId + 1 + idx;
});

items = newItems.concat(items);

const newContent = 'const ' + varName + ' = ' + JSON.stringify(items, null, 2) + ';';
fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully updated data.js with ' + newItems.length + ' items for 20.09.2026. Total items: ' + items.length);
