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
    "date": "19.09.2026",
    "lat": 42.8942,
    "lng": 47.6521,
    "distance": calcMinDistance(42.8942, 47.6521),
    "ru": {
      "region": "Республика Дагестан, Каспийск",
      "target": "Пункт базирования Каспийской флотилии ВМФ РФ (Военная гавань порта Каспийск)",
      "category": "ВПК / Военно-морские базы",
      "weapon": "Дрон",
      "details": "Ранним утром 19 сентября 2026 года украинские ударные дроны совершили налет на военную гавань Каспийска в Республике Дагестан, преодолев по воздуху свыше 1000 километров. Главной целью атаки стал основной пункт базирования Каспийской флотилии ВМФ РФ и прилегающие причалы морского порта. Очевидцы сняли пролет беспилотников на предельно малой высоте и серию мощных взрывов непосредственно в районе стоянки боевых кораблей. Минобороны РФ заявило о перехвате беспилотников над Дагестаном, однако местные жители зафиксировали прилеты в прибрежной полосе. Порт Каспийска имеет стратегическое значение для российской армии, служа ключевым морским хабом по приему иранских вооружений, баллистических ракет и компонентов дронов. Удар подтвердил уязвимость тыловых объектов флота на Каспийском море для дальнобойного украинского оружия.",
      "source": "Supernova+, Exilenova+, Crimeanwind, ASTRA, Минобороны РФ"
    },
    "uk": {
      "region": "Республіка Дагестан, Каспійськ",
      "target": "Пункт базування Каспійської флотилії ВМФ РФ (Військова гавань порту Каспійськ)",
      "category": "ВПК / Військово-морські бази",
      "weapon": "Дрон",
      "details": "Вранці 19 вересня 2026 року українські ударні дрони атакували військову гавань Каспійська в Дагестані, подолавши відстань понад 1000 кілометрів від лінії фронту. Головною ціллю удару став основний пункт базування Каспійської флотилії ВМФ РФ та інфраструктура морського порту. Місцеві жителі оприлюднили відеозаписи прольоту безпілотників над містом і серію гучних вибухів безпосередньо в районі стоянки військових кораблів. Міноборони РФ заявило про збиття дронів над регіоном, проте очевидці зафіксували влучання в портовій зоні. Порт Каспійська є критичним логістичним вузлом, через який Росія отримує морем іранські озброєння, балістичні ракети та комплектуючі до дронів. Успішна операція продемонструвала досяжність російських військових об'єктів у Каспійському регіоні.",
      "source": "Supernova+, Exilenova+, Crimeanwind, ASTRA, Міноборони РФ"
    },
    "en": {
      "region": "Republic of Dagestan, Kaspiysk",
      "target": "Caspian Flotilla Naval Base (Kaspiysk Naval Harbor)",
      "category": "Defense / Naval Bases",
      "weapon": "Drone",
      "details": "Early in the morning on September 19, 2026, Ukrainian long-range strike drones targeted the naval harbor of Kaspiysk in the Republic of Dagestan, flying over 1,000 kilometers across the Caspian region. The primary target was the main naval base of the Caspian Flotilla and adjacent maritime port facilities. Eyewitness video documented low-flying UAVs and multiple detonations rocking the vicinity of Russian naval warship berths. Although the Russian Ministry of Defense claimed drone interceptions over Dagestan, local residents confirmed impacts and heavy smoke near the waterfront. Kaspiysk serves as a vital logistics node handling maritime deliveries of Iranian weaponry, ballistic missiles, and drone components to Russia. The raid highlighted the growing vulnerability of Russian naval assets stationed across the Caspian Sea.",
      "source": "Supernova+, Exilenova+, Crimeanwind, ASTRA, Russian MoD"
    },
    "images": [
      "video/kaspiysk_1909_vid1.mp4",
      "video/kaspiysk_1909_vid2.mp4",
      "images/kaspiysk_1909_img1.jpg",
      "images/kaspiysk_1909_img2.jpg",
      "images/kaspiysk_1909_img3.jpg"
    ]
  },
  {
    "date": "19.09.2026",
    "lat": 44.6883,
    "lng": 33.5703,
    "distance": calcMinDistance(44.6883, 33.5703),
    "ru": {
      "region": "АР Крым (оккупирован), г. Севастополь, пос. Любимовка",
      "target": "Военный аэродром «Бельбек»",
      "category": "ВПК / Авиабазы",
      "weapon": "Дрон",
      "details": "Во второй половине дня 19 сентября 2026 года Силы обороны Украины нанесли результативный удар беспилотниками по военному аэродрому Бельбек под Севастополем. Местные жители зафиксировали непрерывную стрельбу мобильных огневых групп ПВО и два мощных взрыва на территории базы в 17:24 и 17:57. На опубликованных фотоматериалах видны характерные столбы дыма, поднимающиеся непосредственно над летным полем и стоянками техники. Аэродром Бельбек служит ключевой авиабазой 38-го истребительного авиаполка ВКС РФ, вооруженного самолетами Су-27, Су-30СМ и Су-35С, регулярно наносящими удары по югу Украины. Российские власти традиционно скрыли масштаб разрушений инфраструктуры аэродрома. Удар осложнил выполнение боевых вылетов российской тактической авиации с крымского направления.",
      "source": "Мониторинговая группа «Крымский ветер», OSINT, местные паблики"
    },
    "uk": {
      "region": "АР Крим (окупований), м. Севастополь, сел. Любимівка",
      "target": "Військовий аеродром «Бельбек»",
      "category": "ВПК / Авіабази",
      "weapon": "Дрон",
      "details": "У другій половині дня 19 вересня 2026 року Сили оборони України завдали результативного удару безпілотниками по військовому аеродрому Бельбек поблизу Севастополя. Мешканці навколишніх селищ зафіксували інтенсивну роботу зенітних кулеметів та два потужних вибухи на території авіабази о 17:24 та 17:57. На фотографіях очевидців чітко видно густі стовпи диму, що підіймалися безпосередньо над льотним полем та стоянками бортів. Летовище Бельбек є основним пунктом дислокації 38-го винищувального авіаполку ВКС РФ із літаками Су-27, Су-30СМ і Су-35С, які здійснюють пуски ракет по південних областях України. Окупаційна влада приховала масштаби руйнувань, уникнувши офіційних заяв щодо інциденту. Удар порушив графік бойових чергувань ворожої тактичної авіації в кримському секторі.",
      "source": "Моніторингова група «Кримський вітер», OSINT, місцеві пабліки"
    },
    "en": {
      "region": "Crimea (occupied), Sevastopol, Lyubimovka",
      "target": "Belbek Military Airfield",
      "category": "Defense / Airbases",
      "weapon": "Drone",
      "details": "In the late afternoon of September 19, 2026, Ukrainian defense forces conducted a successful drone strike against Belbek military airfield near Sevastopol in occupied Crimea. Local residents documented intensive anti-aircraft machine gun fire followed by two major explosions across the airfield at 17:24 and 17:57 local time. Eyewitness photographs confirmed distinct columns of smoke rising over the runway perimeter and aircraft parking areas. Belbek serves as the principal airbase for Russia's 38th Fighter Aviation Regiment, hosting Su-27, Su-30SM, and Su-35S multirole fighters used for missile and bomb attacks against southern Ukraine. Occupation authorities withheld commentary regarding base damage and airfield casualties. The strike disrupted regular combat sorties and alert patrols of Russian tactical aviation operating from Crimea.",
      "source": "Crimean Wind monitoring group, OSINT, local reports"
    },
    "images": [
      "images/belbek_1909_img1.jpg",
      "images/belbek_1909_img2.jpg"
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

// Filter out existing 19.09.2026 if any
items = items.filter(x => x.date !== '19.09.2026');

let maxId = 0;
items.forEach(i => { if (i.id && i.id > maxId) maxId = i.id; });

newItems.forEach((item, idx) => {
  item.id = maxId + 1 + idx;
});

items = newItems.concat(items);

const newContent = 'const ' + varName + ' = ' + JSON.stringify(items, null, 2) + ';';
fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully updated data.js with ' + newItems.length + ' items for 19.09.2026. Total items: ' + items.length);
