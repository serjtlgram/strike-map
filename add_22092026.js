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
    "date": "22.09.2026",
    "lat": 53.1001,
    "lng": 50.0510,
    "distance": calcMinDistance(53.1001, 50.0510),
    "ru": {
      "region": "Самарская область, Самара (Куйбышевский район)",
      "target": "Куйбышевский НПЗ (АО «Куйбышевский НПЗ» — ПАО «НК «Роснефть») — установки АВТ-4 и АВТ-5",
      "category": "НПЗ",
      "weapon": "Дрон (FP-1 / Лютый)",
      "details": "В ночь на 22 сентября 2026 года дальнобойные ударные дроны Сил обороны Украины FP-1 нанесли результативный удар по Куйбышевскому НПЗ в Самаре. Это стратегическое предприятие «Роснефти» мощностью 7 миллионов тонн нефти в год снабжает бензином, дизелем и мазутом военные группировки РФ на восточном направлении. Около двух часов ночи беспилотники прорвали ПВО и точно поразили установки первичной переработки нефти АВТ-4 и АВТ-5, а также зацепили резервуарный парк. На заводской площадке вспыхнул факельный пожар пятой категории, густой столб черного дыма растянулся на десятки километров и был зафиксирован спутниками Planet Labs. Губернатор Самарской области Вячеслав Федорищев признал массированный налет десятков дронов, повреждения промышленных объектов, а также гибель одного человека и ранения четырех. Поражение обеих установок первичной перегонки полностью остановило переработку сырой нефти на заводе. На фоне череды ударов по НПЗ дефицит мощностей нефтепереработки в РФ превысил 45%.",
      "source": "Генштаб ВСУ, Fire Point (FP-1), ASTRA, Supernova+, Exilenova+, Radio Liberty (Planet Labs), губернатор Самарской области"
    },
    "uk": {
      "region": "Самарська область, Самара (Куйбишевський район)",
      "target": "Куйбишевський НПЗ (АТ «Куйбишевський НПЗ» — ПАТ «НК «Роснефть») — установки АВТ-4 та АВТ-5",
      "category": "НПЗ",
      "weapon": "Дрон (FP-1 / Лютий)",
      "details": "У ніч на 22 вересня 2026 року далекобійні ударні дрони Сил оборони України FP-1 завдали результативного удару по Куйбишевському НПЗ у Самарі. Це стратегічне підприємство «Роснефти» потужністю 7 млн тонн нафти на рік постачає бензин, дизель та мазут угрупованням військ РФ на східному напрямку. Близько другої години ночі безпілотники прорвали ППО й точково уразили установки первинної переробки нафти АВТ-4 та АВТ-5, а також зачепили резервуарний парк. На заводському майданчику спалахнула смолоскипна пожежа п'ятої категорії, а стовп чорного диму розтягнувся на десятки кілометрів і був зафіксований супутниками Planet Labs. Губернатор Самарської області В'ячеслав Федорищев визнав наліт десятків дронів, руйнування промислових об'єктів, загибель однієї людини та поранення чотирьох. Виведення з ладу блоків первинної перегонки повністю зупинило переробку сирої нафти на заводі. Серія ударів по НПЗ вивела з ладу понад 45% переробних потужностей агресора.",
      "source": "Генштаб ЗСУ, Fire Point (FP-1), ASTRA, Supernova+, Exilenova+, Radio Liberty (Planet Labs), губернатор Самарської області"
    },
    "en": {
      "region": "Samara Oblast, Samara (Kuibyshevsky District)",
      "target": "Kuibyshev Oil Refinery (PJSC Rosneft) — AVT-4 and AVT-5 Primary Distillation Units",
      "category": "Oil Refinery",
      "weapon": "Drone (FP-1 / Liutyi)",
      "details": "On the night of September 22, 2026, Ukrainian deep strike FP-1 drones attacked the Kuibyshev Oil Refinery in Samara. Owned by Rosneft, this strategic plant has an annual crude capacity of 7 million tons, supplying gasoline, diesel, and fuel oil to Russian military groups in eastern sectors. Around 2:00 AM, strike UAVs penetrated air defenses, scoring direct hits on primary distillation units AVT-4 and AVT-5 while damaging adjacent fuel storage tanks. A massive Category 5 blaze erupted across the industrial site, sending a thick smoke plume captured by Planet Labs satellites. Samara Oblast Governor Vyacheslav Fedorishchev confirmed the large raid involving dozens of drones, acknowledging industrial damage alongside one death and four injuries. Knocking out both primary distillation units forced a complete shutdown of crude processing at the facility. Systemic strikes have now idled over 45% of total Russian oil refining capacity.",
      "source": "General Staff of Ukraine, Fire Point (FP-1), ASTRA, Supernova+, Exilenova+, Radio Liberty (Planet Labs), Samara Oblast Governor"
    },
    "images": [
      "video/kuibyshev_npz_2209_vid1.mp4",
      "video/kuibyshev_npz_2209_vid2.mp4",
      "images/kuibyshev_npz_2209_img1.jpg",
      "images/kuibyshev_npz_2209_img2.jpg",
      "images/kuibyshev_npz_2209_img3.jpg",
      "images/kuibyshev_npz_2209_img4.jpg"
    ]
  },
  {
    "date": "22.09.2026",
    "lat": 53.5358,
    "lng": 49.4485,
    "distance": calcMinDistance(53.5358, 49.4485),
    "ru": {
      "region": "Самарская область, Тольятти (Центральный район)",
      "target": "Завод «Тольяттикаучук» (ООО «Тольяттикаучук») — цеха синтетического каучука и технологические линии",
      "category": "Заводы химической промышленности / ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 22 сентября 2026 года украинские ударные дроны совершили скоординированный налет на промышленный кластер Тольятти, атаковав завод «Тольяттикаучук». Это крупнейшее химическое предприятие производит синтетические каучуки, бутадиен и изопрен, играя ключевую роль в военной промышленности РФ. Завод обеспечивает сырьем выпуск износостойких шин для тяжелой бронетехники, армейских грузовиков, шасси авиации, а также резинотехнических уплотнителей для танков и ракет. Около часа ночи над промзоной раздались мощные взрывы и частая стрельба ПВО, после чего очевидцы зафиксировали прилеты по технологическим линиям предприятия. На объекте вспыхнул локальный пожар, сопровождавшийся аварийным сбросом давления и остановкой полимеризационных установок. Российские паблики и мониторинговые каналы подтвердили повреждения цехового сектора завода. Удар нарушил технологическую цепочку выпуска спецполимеров для российского оборонно-промышленного комплекса.",
      "source": "Supernova+, Exilenova+, мониторинговые каналы РФ, оперативные службы Самарской области"
    },
    "uk": {
      "region": "Самарська область, Тольятті (Центральний район)",
      "target": "Завод «Тольяттікаучук» (ТОВ «Тольяттікаучук») — цехи синтетичного каучуку та технологічні лінії",
      "category": "Заводи хімічної промисловості / ВПК",
      "weapon": "Дрон",
      "details": "У ніч на 22 вересня 2026 року українські ударні безпілотники здійснили скоординований наліт на промисловий кластер Тольятті, атакувавши завод «Тольяттікаучук». Це найбільше хімічне підприємство виробляє синтетичні каучуки, бутадієн та ізопрен, відіграючи ключову роль у військовій промисловості РФ. Завод забезпечує сировиною випуск зносостійких шин для важкої бронетехніки, армійських вантажівок, шасі бойової авіації, а також гумотехнічних ущільнювачів для танків і ракет. Близько першої години ночі над промзоною прогриміли потужні вибухи та інтенсивна стрілянина ППО, після чого очевидці зафіксували влучання по технологічних лініях підприємства. На об'єкті спалахнула локальна пожежа, що супроводжувалася аварійним скиданням тиску й зупинкою полімеризаційних установок. Російські пабліки та моніторингові канали підтвердили пошкодження цехового сектора заводу. Удар порушив технологічний ланцюжок постачання спецполімерів для російського оборонно-промислового комплексу.",
      "source": "Supernova+, Exilenova+, моніторингові канали РФ, оперативні служби Самарської області"
    },
    "en": {
      "region": "Samara Oblast, Tolyatti (Central District)",
      "target": "Tolyattikauchuk Plant (LLC Tolyattikauchuk) — Synthetic Rubber and Polymer Production Units",
      "category": "Chemical Industry / Defense Sector",
      "weapon": "Drone",
      "details": "On the night of September 22, 2026, Ukrainian strike drones executed a coordinated long-range raid against the industrial zone of Tolyatti, striking the Tolyattikauchuk chemical plant. As a major synthetic rubber producer, the facility manufactures butyl rubber, butadiene, and polyisoprene critical for Russian defense manufacturing. The enterprise provides raw polymer compounds for heavy combat vehicle tires, military truck transport, aircraft landing gear, and specialized rubber seals for tanks and missile systems. Around 1:00 AM, local residents reported loud explosions and rapid anti-aircraft fire, followed by confirmed drone impacts on the plant's production lines. A localized fire broke out on site, forcing emergency pressure venting and shutting down polymerization units. Russian monitoring groups and social channels corroborated structural damage within the workshops. Disabling these facilities disrupted crucial polymer supply chains supporting military production.",
      "source": "Supernova+, Exilenova+, Russian monitoring channels, Samara Oblast emergency services"
    },
    "images": [
      "video/tolyatti_kauchuk_2209_vid1.mp4",
      "video/tolyatti_kauchuk_2209_vid2.mp4",
      "images/tolyatti_kauchuk_2209_img1.jpg",
      "images/tolyatti_kauchuk_2209_img2.jpg",
      "images/tolyatti_kauchuk_2209_img3.jpg",
      "images/tolyatti_kauchuk_2209_img4.jpg"
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

// Filter out existing 22.09.2026 if any
items = items.filter(x => x.date !== '22.09.2026');

let maxId = 0;
items.forEach(i => { if (i.id && i.id > maxId) maxId = i.id; });

newItems.forEach((item, idx) => {
  item.id = maxId + 1 + idx;
});

items = newItems.concat(items);

const newContent = 'const ' + varName + ' = ' + JSON.stringify(items, null, 2) + ';';
fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully updated data.js with ' + newItems.length + ' items for 22.09.2026. Total items: ' + items.length);
