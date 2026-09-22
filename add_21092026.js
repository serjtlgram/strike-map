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
    "date": "21.09.2026",
    "lat": 53.3676,
    "lng": 35.805,
    "distance": calcMinDistance(53.3676, 35.805),
    "ru": {
      "region": "Орловская область, Болховский район, пос. Цымбулово",
      "target": "Основной дронопорт ВС РФ «Цымбулово» (база пуска БПЛА «Герань-5» и склады БК)",
      "category": "Военный аэродром",
      "weapon": "Реактивный дрон / ракета «Нептун»",
      "details": "В ночь на 21 сентября 2026 года Силы обороны Украины нанесли комбинированный высокоточный удар реактивными дронами и крылатыми ракетами «Нептун» по главному российскому дронопорту «Цымбулово» в Орловской области. Этот специальный военный объект в 280 километрах от границы служил ключевой стартовой площадкой для регулярных пусков беспилотников «Герань-2» и новейших реактивных «Герань-5» по центральным регионам Украины. Спутниковые снимки зафиксировали прямое пробитие двух заглубленных железобетонных бункеров с боевой частью БПЛА, причем в одном из них произошла мощная подземная детонация. Также разрушены два предпусковых ангара-склада и уничтожена стартовая позиция вместе с подготовленными к ночному вылету аппаратами. Российская ПВО заявила о перехвате целей в регионе, однако очаги вторичных взрывов подтвердили критическое поражение базы. Вывод из строя дронопорта в Цымбулово временно сорвал пусковые графики налетов шахедов на северном направлении.",
      "source": "Генштаб ВСУ, OSINT (Exilenova+, Kiber Boroshno, Око Гора), мониторинговые каналы РФ"
    },
    "uk": {
      "region": "Орловська область, Болховський район, сел. Цимбулово",
      "target": "Головний дронопорт ЗС РФ «Цимбулово» (база пуску БпЛА «Герань-5» та склади БК)",
      "category": "Військовий аеродром",
      "weapon": "Реактивний дрон / ракета «Нептун»",
      "details": "У ніч на 21 вересня 2026 року Сили оборони України завдали комбінованого високоточного удару реактивними безпілотниками та ракетами «Нептун» по головному російському дронопорту «Цимбулово» в Орловській області. Цей спеціальний об'єкт за 280 кілометрів від лінії фронту використовувався окупантами як ключовий вузол підготовки та регулярних запусків баражуючих боєприпасів «Герань-2» та реактивних «Герань-5». Супутникові знімки високої роздільної здатності підтвердили пряме влучання у два захищені підземні бункери зберігання дронів із внутрішньою та поверхневою детонацією боєкомплекту. Окрім того, руйнувань зазнали два передпускові ангари й зафіксовано вигорання стартового майданчика з підготовленими до запуску дронами. Засоби ППО противника відзвітували про збиття цілей в області, однак вторинні вибухи повністю викрили масштаб руйнувань. Ураження вузлової бази в Цимбуловому суттєво послабило спроможності ворога щодо нічного дронового терору північних областей України.",
      "source": "Генштаб ЗСУ, OSINT (Exilenova+, Kiber Boroshno, Око Гора), моніторингові канали РФ"
    },
    "en": {
      "region": "Oryol Oblast, Bolkhov District, Tsymbulovo",
      "target": "Russian Armed Forces Main Dronoport \"Tsymbulovo\" (Geran-5 UAV base and ammo bunkers)",
      "category": "Military Airfield",
      "weapon": "Jet Drone / Neptune Missile",
      "details": "On the night of September 21, 2026, Ukrainian defense forces executed a precision strike combining jet-powered strike UAVs and Neptune cruise missiles against Russia's main drone port in Tsymbulovo, Oryol Oblast. Located 280 kilometers from the border, the specialized military base served as a primary launch hub for Shahed-type Geran-2 and jet-powered Geran-5 kamikaze drones. Satellite imagery confirmed direct hits on two reinforced underground bunkers used for UAV and warhead storage, causing deep subterranean explosions. Strikes also destroyed two pre-launch preparation hangars and incinerated the main launch pad with drones prepared for takeoff. While Russian air defense reported intercepting targets across the region, secondary detonations confirmed heavy damage to the compound. Disabling Tsymbulovo disrupted Russia's launch schedules for night drone raids on northern Ukraine.",
      "source": "General Staff of Ukraine, OSINT (Exilenova+, Kiber Boroshno, Oko Gora), Russian monitoring channels"
    },
    "images": [
      "images/cymbulovo_2109_img1.jpg",
      "images/cymbulovo_2109_img2.jpg",
      "images/cymbulovo_2109_img3.jpg",
      "images/cymbulovo_2109_img4.jpg"
    ]
  },
  {
    "date": "21.09.2026",
    "lat": 54.8872,
    "lng": 56.1264,
    "distance": calcMinDistance(54.8872, 56.1264),
    "ru": {
      "region": "Республика Башкортостан, г. Уфа, Орджоникидзевский район",
      "target": "НПЗ «Башнефть-УНПЗ» (ПАО АНК «Башнефть») — технологические установки первичной переработки",
      "category": "НПЗ",
      "weapon": "Дрон",
      "details": "Утром 21 сентября 2026 года дальнобойные ударные дроны Сил обороны Украины преодолели более 1400 километров и атаковали завод «Башнефть-УНПЗ» в северной промзоне Уфы. Нефтеперерабатывающее предприятие мощностью 7,5 млн тонн нефти в год входит в структуру «Роснефти» и выпускает бензины, дизель и авиакеросин для снабжения войск РФ. В результате серии прилетов в районе технологических установок первичной перегонки раздались взрывы и вспыхнул пожар, над заводом поднялся столб черного дыма. В городе ввели план «Ковер», временно закрыв аэропорт Уфы, а в промзоне отключали мобильный интернет. Власти Башкортостана заявили об отражении налета, однако Генштаб ВСУ официально подтвердил результативное огневое поражение завода. Удар углубил кризис в российской нефтепереработке, где из-за атак простаивает уже свыше 45% мощностей.",
      "source": "Генштаб ВСУ, ASTRA, Supernova+, Exilenova+, Око Гора, городская администрация Уфы"
    },
    "uk": {
      "region": "Республіка Башкортостан, м. Уфа, Орджонікідзевський район",
      "target": "НПЗ «Башнафта-УНПЗ» (ПАТ АНК «Башнафта») — технологічні установки первинної переробки",
      "category": "НПЗ",
      "weapon": "Дрон",
      "details": "Вранці 21 вересня 2026 року далекобійні безпілотники Сил оборони України подолали понад 1400 кілометрів та завдали удару по нафтопереробному заводу «Башнафта-УНПЗ» у північній промзоні Уфи. Підприємство проєктною потужністю 7,5 млн тонн нафти на рік належить холдингу «Роснафта» та спеціалізується на виробництві високооктанового пального і авіагасу для потреб окупаційних військ. Унаслідок кількох влучань у районі технологічних блоків первинної переробки прогриміли вибухи та спалахнула масштабна пожежа з густим задимленням. Через наліт влада республіки оголосила план «Килим», зупинивши роботу уфімського аеропорту, а в північних районах міста екстрено вимкнули мобільний зв'язок. Хоча російські посадовці стверджували про збиття апаратів ППО, Генеральний штаб ЗСУ офіційно підтвердив успішне вогневе ураження даного НПЗ. Атака посилила системний дефіцит на ринку пального агресора, вивівши з ладу черговий стратегічний вузол нафтохімічного комплексу Башкортостану.",
      "source": "Генштаб ЗСУ, ASTRA, Supernova+, Exilenova+, Око Гора, міська адміністрація Уфи"
    },
    "en": {
      "region": "Republic of Bashkortostan, Ufa, Ordzhonikidzevsky District",
      "target": "Bashneft-UNPZ Oil Refinery (PJSC ANK Bashneft) — Primary Refining Units",
      "category": "Oil Refinery",
      "weapon": "Drone",
      "details": "On the morning of September 21, 2026, Ukrainian deep strike drones flew over 1,400 kilometers to hit the Bashneft-UNPZ refinery in the northern industrial zone of Ufa. With an annual capacity of 7.5 million tons of crude, the Rosneft-owned plant produces high-octane gasoline, diesel, and aviation fuel for Russian military operations. Multiple drone impacts near primary refining units triggered heavy blasts and ignited a major fire, sending dark smoke over the city. Local officials triggered emergency protocols, temporarily halting flights at Ufa International Airport and cutting mobile internet across northern districts. Despite official Russian claims that drones were intercepted, Ukraine's General Staff confirmed successful combat damage to the refinery. The strike intensified disruptions across Russia's fuel sector, where drone attacks have idled over 45% of total refining capacity.",
      "source": "General Staff of Ukraine, ASTRA, Supernova+, Exilenova+, Oko Gora, Ufa City Administration"
    },
    "images": [
      "images/ufa_npz_2109_img1.jpg",
      "images/ufa_npz_2109_img2.jpg",
      "images/ufa_npz_2109_img3.jpg",
      "images/ufa_npz_2109_img4.jpg"
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

// Filter out existing 21.09.2026 if any
items = items.filter(x => x.date !== '21.09.2026');

let maxId = 0;
items.forEach(i => { if (i.id && i.id > maxId) maxId = i.id; });

newItems.forEach((item, idx) => {
  item.id = maxId + 1 + idx;
});

items = newItems.concat(items);

const newContent = 'const ' + varName + ' = ' + JSON.stringify(items, null, 2) + ';';
fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully updated data.js with ' + newItems.length + ' items for 21.09.2026. Total items: ' + items.length);
