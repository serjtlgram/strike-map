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
    "date": "18.09.2026",
    "lat": 45.0933,
    "lng": 33.5986,
    "distance": calcMinDistance(45.0933, 33.5986),
    "ru": {
      "region": "АР Крым (оккупирован), Сакский р-н, пгт Новофёдоровка",
      "target": "Военный аэродром «Саки» — станция управления БПЛА «Орион»",
      "category": "ВПК / Авиабазы",
      "weapon": "Дрон",
      "details": "В ночь на 18 сентября 2026 года Силы обороны Украины нанесли результативный удар по военному аэродрому Саки в районе Новофёдоровки на западе Крыма. Главной целью атаки стала наземная станция управления тяжелыми разведывательно-ударными дронами «Орион» («Иноходец»). Как официально отчитался Генштаб ВСУ, пункт управления получил прямое попадание и был выведен из строя. «Орион» относится к классу средневысотных БПЛА большой продолжительности полета MALE и способен висеть в небе до 24 часов, неся на борту управляемые бомбы и ракеты. Поражение наземного комплекса управления серьезно подорвало разведывательные и ударные возможности оккупантов на всем южном направлении. Вторичных разрушений гражданской застройки не зафиксировано, российская сторона инцидент официально не комментировала.",
      "source": "Генеральный штаб ВСУ, мониторинговая группа «Крымский ветер», OSINT"
    },
    "uk": {
      "region": "АР Крим (окупований), Сакський р-н, смт Новофедорівка",
      "target": "Військовий аеродром «Саки» — станція управління БпЛА «Оріон»",
      "category": "ВПК / Авіабази",
      "weapon": "Дрон",
      "details": "У ніч на 18 вересня 2026 року підрозділи Сил оборони України завдали високоточного удару по військовому аеродрому Саки поблизу смт Новофедорівка в тимчасово окупованому Криму. Головною ціллю операції стала наземна станція управління розвідувально-ударними дронами «Оріон» («Іноходець»). За офіційним повідомленням Генерального штабу ЗСУ, станцію було успішно уражено та виведено з ладу. Безпілотники «Оріон» належать до важкого класу MALE, мають тривалість польоту до 24 годин і здатні скидати керовані авіабомби на відстані до сотень кілометрів. Знищення комплексу управління критично обмежило здатність армії РФ коригувати вогонь та вести чергування у повітрі над південним фронтом. Окупаційна влада приховала втрати, уникнувши коментарів у офіційних зведеннях.",
      "source": "Генеральний штаб ЗСУ, моніторингова група «Кримський вітер», OSINT"
    },
    "en": {
      "region": "Crimea (occupied), Saky District, Novofedorivka",
      "target": "Saky Military Airfield — 'Orion' UAV Ground Control Station",
      "category": "Defense / Airbases",
      "weapon": "Drone",
      "details": "On the night of September 18, 2026, the Ukrainian Defense Forces carried out a precision strike on Saky military airfield near Novofedorivka in occupied Crimea. The primary target was the ground control station for Russian 'Orion' (Inokhodets) medium-altitude long-endurance (MALE) strike UAVs. According to an official statement by the General Staff of the AFU, the control station was directly hit and neutralized. The Orion system is capable of staying airborne for up to 24 hours while carrying precision-guided bombs and tactical missiles for ground strikes. Destroying this critical command node severely restricts Russian aerial reconnaissance and strike capabilities across the entire southern operational zone. Occupation authorities avoided public remarks regarding the strike, while satellite monitoring confirmed activity around the command complex.",
      "source": "General Staff of AFU, Crimean Wind monitoring group, OSINT"
    },
    "images": [
      "images/saki_1809_img1.jpg",
      "images/saki_1809_img2.jpg",
      "images/saki_1809_img3.jpg"
    ]
  },
  {
    "date": "18.09.2026",
    "lat": 46.6800,
    "lng": 38.2510,
    "distance": calcMinDistance(46.6800, 38.2510),
    "ru": {
      "region": "Краснодарский край, Ейск",
      "target": "Военный аэродром «Ейск»",
      "category": "ВПК / Авиабазы",
      "weapon": "Дрон",
      "details": "Утром 18 сентября 2026 года на военном аэродроме в Ейске зафиксирован масштабный пожар после ночного налета украинских ударных БПЛА. Авиабаза является пунктом постоянного базирования 859-го Центра боевого применения морской авиации ВМФ РФ и активно используется для ударов по югу Украины. Мониторинговая группа «Крымского ветра» и проект «Око Гора» со ссылкой на спутниковые данные NASA FIRMS подтвердили открытые очаги горения непосредственно на летном поле и площадках стоянки бортов. Минобороны РФ заявило о перехвате беспилотников над Краснодарским краем и Азовским морем, однако часть дронов прорвала эшелон ПВО. Очевидцы в прибрежной полосе Ейска слышали взрывы в районе четырех часов утра с последующим задымлением летной полосы. Удар снизил интенсивность боевых вылетов морской авиации противника с данного направления.",
      "source": "Мониторинговая группа «Крымский ветер», OSINT («Око Гора»), NASA FIRMS, Минобороны РФ"
    },
    "uk": {
      "region": "Краснодарський край, Єйськ",
      "target": "Військовий аеродром «Єйськ»",
      "category": "ВПК / Авіабази",
      "weapon": "Дрон",
      "details": "Вранці 18 вересня 2026 року на військовому аеродромі в Єйську спалахнула масштабна пожежа внаслідок нічної атаки українських ударних БпЛА. Ця авіабаза слугує базою для 859-го Центру бойового застосування морської авіації ВМФ РФ і регулярно задіюється для терору прифронтових областей України. Моніторингова група «Кримського вітру» та аналітики «Око Гора» з посиланням на термознімки NASA FIRMS підтвердили займання в районі стоянок авіаційної техніки. Міністерство оборони РФ стверджувало про відбиття повітряної атаки над Азовським морем, але частина дронів досягла цілей на території летовища. Місцеві жителі повідомляли про серію глухих вибухів близько четвертої ранку та густий дим над об'єктом. Успішне ураження стоянок авіабази знизило спроможність окупантів оперативно підіймати винищувачі та штурмовики.",
      "source": "Моніторингова група «Кримський вітер», OSINT («Око Гора»), NASA FIRMS, Міноборони РФ"
    },
    "en": {
      "region": "Krasnodar Krai, Yeysk",
      "target": "Yeysk Military Airfield",
      "category": "Defense / Airbases",
      "weapon": "Drone",
      "details": "On the morning of September 18, 2026, a significant fire broke out at Yeysk military airfield following an overnight Ukrainian strike drone raid. The airbase hosts Russia's 859th Naval Aviation Combat Application Center and serves as a major staging platform for sorties over southern Ukraine. The Crimean Wind monitoring group and Oko Gora OSINT project confirmed open fire thermal signatures on aircraft parking areas using NASA FIRMS satellite imagery. Although the Russian MoD claimed drone interceptions over Krasnodar Krai and the Azov Sea, multiple UAVs penetrated regional defenses and reached the flight line. Local residents reported explosions around 04:00 AM followed by plumes of smoke rising over the airfield perimeter. The strike successfully constrained flight operations and maintenance capabilities of Russian naval aviation units.",
      "source": "Crimean Wind monitoring group, OSINT (Oko Gora), NASA FIRMS, Russian MoD"
    },
    "images": [
      "images/yeysk_1809_img1.jpg",
      "images/yeysk_1809_img2.jpg",
      "images/yeysk_1809_img3.jpg"
    ]
  },
  {
    "date": "18.09.2026",
    "lat": 47.2580,
    "lng": 39.6380,
    "distance": calcMinDistance(47.2580, 39.6380),
    "ru": {
      "region": "Ростовская область, Ростов-на-Дону",
      "target": "Военный аэродром «Ростов-на-Дону — Центральный»",
      "category": "ВПК / Авиабазы",
      "weapon": "Дрон",
      "details": "В ночь на 18 сентября 2026 года военный аэродром «Ростов-на-Дону — Центральный» подвергся повторной массированной атаке украинских ударных БПЛА. Губернатор области заявил о перехвате более 50 беспилотников над Ростовом, Батайском и пятью районами, однако на территории авиабазы снова прогремели взрывы с последующим возгоранием. Жители Северного микрорайона сняли моменты взрывов и густое задымление в районе аэродрома. Днем 18 сентября исследовательские группы «Киберборошно» и «Око Гора» обнародовали детальные спутниковые снимки объекта. Фотофиксация подтвердила полное уничтожение четырех бортов: одного самолета Ан-12, одного Ан-26 и двух вертолетов Ми-8, превратившихся в обугленные остовы. Двойной комбинированный удар за двое суток нанес сокрушительный ущерб транспортно-логистической авиации южной группировки ВС РФ.",
      "source": "Supernova+, Exilenova+, ASTRA, OSINT («Кіберборошно», «Око Гора»), губернатор Ростовской области"
    },
    "uk": {
      "region": "Ростовська область, Ростов-на-Дону",
      "target": "Військовий аеродром «Ростов-на-Дону — Центральний»",
      "category": "ВПК / Авіабази",
      "weapon": "Дрон",
      "details": "У ніч на 18 вересня 2026 року військовий аеродром «Ростов-на-Дону — Центральний» зазнав повторної масованої атаки українських далекобійних БпЛА. Очільник регіону заявив про збиття понад 50 дронів над Ростовом, Батайськом і районами області, проте на летовищі знову лунали детонації та вирувала пожежа. Мешканці Північного району фіксували влучання та дим над територією розташування полку. Вдень 18 вересня проєкти «Кіберборошно» та «Око Гора» оприлюднили супутникові знімки високої роздільної здатності із результатами нальотів. Кадри підтвердили безповоротне знищення чотирьох бортів: військово-транспортних літаків Ан-12 і Ан-26, а також двох багатоцільових вертольотів Мі-8. Повторне вогневе ураження протягом 48 годин остаточно паралізувало логістичний транспортний авіавузол південного угруповання ворога.",
      "source": "Supernova+, Exilenova+, ASTRA, OSINT («Кіберборошно», «Око Гора»), губернатор Ростовської області"
    },
    "en": {
      "region": "Rostov Oblast, Rostov-on-Don",
      "target": "Rostov-on-Don Central Military Airfield",
      "category": "Defense / Airbases",
      "weapon": "Drone",
      "details": "On the night of September 18, 2026, the Rostov-on-Don Central military airfield suffered a repeated massive wave of Ukrainian long-range strike UAVs. While local authorities claimed over 50 drones were intercepted across Rostov, Bataysk, and adjacent districts, eyewitness footage documented fresh blasts and heavy smoke rising from the airbase. Later on September 18, OSINT groups CyberBoroshno and Oko Gora published high-resolution satellite imagery confirming severe damage on the apron. The imagery verified the total destruction of four aircraft: one An-12 transport plane, one An-26 transport plane, and two Mi-8 helicopters reduced to charred frames. Delivering back-to-back strikes within 48 hours effectively disrupted Russian military transport airlift and logistics operations throughout the southern sector.",
      "source": "Supernova+, Exilenova+, ASTRA, OSINT (CyberBoroshno, Oko Gora), Rostov Governor"
    },
    "images": [
      "video/rostov_1809_vid1.mp4",
      "video/rostov_1809_vid2.mp4",
      "images/rostov_1809_img1.jpg",
      "images/rostov_1809_img2.jpg",
      "images/rostov_1809_img3.jpg",
      "images/rostov_1809_img4.jpg"
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

// Filter out existing 18.09.2026 if any
items = items.filter(x => x.date !== '18.09.2026');

let maxId = 0;
items.forEach(i => { if (i.id && i.id > maxId) maxId = i.id; });

newItems.forEach((item, idx) => {
  item.id = maxId + 1 + idx;
});

items = newItems.concat(items);

const newContent = 'const ' + varName + ' = ' + JSON.stringify(items, null, 2) + ';';
fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully updated data.js with ' + newItems.length + ' items for 18.09.2026. Total items: ' + items.length);
