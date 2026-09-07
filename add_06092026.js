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
    "date": "06.09.2026",
    "lat": 54.5422,
    "lng": 39.7719,
    "distance": calcMinDistance(54.5422, 39.7719),
    "ru": {
      "region": "Рязанская область, Рязань (Южный промузел)",
      "target": "Рязанский НПЗ (АО «Рязанская нефтеперерабатывающая компания» — Роснефть)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 6 сентября 2026 года дальнобойные украинские беспилотники атаковали Рязанский нефтеперерабатывающий завод в Южном промышленном узле города. Предприятие входит в структуру «Роснефти» и является одним из крупнейших в стране с годовой мощностью переработки более 17 млн тонн нефти, снабжая горючим столичный регион и подразделения армии РФ. По подтвержденным данным Генштаба ВСУ и компании Fire Point, дроны FP-1 поразили ректификационные колонны установок первичной переработки ЭЛОУ-АВТ-6 и АВТ-3, дававших свыше 75% всей переработки завода, а также установку изомеризации. На объекте вспыхнул масштабный пожар, в результате чего работу предприятия пришлось полностью остановить на экстренный ремонт. Губернатор области признал прилет и пожар на промышленной площадке, списав инцидент на падение обломков сбитых БПЛА. Минобороны заявило о перехвате беспилотников над регионом, а местные власти сообщили об отсутствии жертв среди персонала завода.",
      "source": "Генштаб ВСУ, Fire Point, ASTRA, губернатор Рязанской области, росСМИ"
    },
    "uk": {
      "region": "Рязанська область, Рязань (Південний промвузол)",
      "target": "Рязанський НПЗ (АТ «Рязанська нафтопереробна компанія» — Роснефть)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 6 вересня 2026 року далекобійні українські безпілотники атакували Рязанський нафтопереробний завод у Південному промвузлі міста. Підприємство належить корпорації «Роснефть» і входить до п’ятірки найбільших у РФ із річною потужністю понад 17 млн тонн нафти, забезпечуючи паливом як столичний регіон, так і війська загарбників. За підтвердженими даними Генштабу ЗСУ та компанії Fire Point, дрони FP-1 влучили в ректифікаційні колони установок первинної переробки ЕЛОУ-АВТ-6 та АВТ-3, які забезпечували понад 75% потужності, а також установку ізомеризації. На території НПЗ спалахнула масштабна пожежа, через що роботу всього підприємства довелося екстрено зупинити на тривалий ремонт. Губернатор регіону підтвердив атаку та загоряння на промисловому об’єкті, заявивши про падіння уламків дронів. Міноборони РФ традиційно відзвітувало про відбиття нальоту, а місцева влада заявила про відсутність загиблих серед працівників.",
      "source": "Генштаб ЗСУ, Fire Point, ASTRA, губернатор Рязанської області, росЗМІ"
    },
    "en": {
      "region": "Ryazan Oblast, Ryazan (Southern Industrial Zone)",
      "target": "Ryazan Oil Refinery (JSC Ryazan Oil Refining Company — Rosneft)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Overnight into September 6, 2026, Ukrainian long-range strike drones attacked the Ryazan Oil Refinery in the Southern Industrial Zone. Owned by Rosneft, the facility is among Russia's five largest refineries with an annual capacity exceeding 17 million tons, supplying fuel to the capital region and Russian military forces. According to the AFU General Staff and defense firm Fire Point, FP-1 strike UAVs hit distillation columns of primary refining units ELOU-AVT-6 and AVT-3, which accounted for over 75% of plant capacity, along with an isomerization unit. A massive fire broke out across the refinery, forcing management to halt operations for emergency repairs. The regional governor acknowledged the strike and industrial blaze, claiming it resulted from falling drone debris. Russia's Defense Ministry reported intercepting drones over the region, while authorities claimed no casualties among plant personnel.",
      "source": "General Staff of AFU, Fire Point, ASTRA, Ryazan Oblast Governor, Russian Media"
    }
  },
  {
    "date": "06.09.2026",
    "lat": 47.2872,
    "lng": 39.6356,
    "distance": calcMinDistance(47.2872, 39.6356),
    "ru": {
      "region": "Ростовская область, Ростов-на-Дону (мкр-н Военвед)",
      "target": "Военный аэродром «Ростов-на-Дону (Центральный)» (4-я армия ВВС и ПВО ВКС РФ)",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "В ночь на 6 сентября 2026 года Силы обороны Украины нанесли удар беспилотниками по военному аэродрому «Ростов-на-Дону (Центральный)». Этот аэродром служит главной базой 4-й армии ВВС и ПВО и 30-го отдельного транспортного авиаполка ВКС РФ, обеспечивая управление авиацией и переброску военных грузов в зону боевых действий. В сводке Генштаба ВСУ подтвердили успешное поражение аэродрома, где после серии взрывов начался пожар и пострадала наземная инфраструктура. Для прорыва обороны украинские силы также уничтожили РЛС «Подлет» и два прикрывавших район комплекса «Панцирь-С1». В Ростове беспилотники кружили над городом более четырех часов под непрерывный грохот зенитных установок. Из-за падения обломков сбитых дронов получили повреждения многоэтажные дома в Советском и Ленинском районах, а четверо горожан, включая ребенка, были ранены. Городские власти ввели режим чрезвычайной ситуации в районе пострадавших жилых кварталов.",
      "source": "Генштаб ВСУ, ASTRA, губернатор Ростовской области, очевидцы, росСМИ"
    },
    "uk": {
      "region": "Ростовська область, Ростов-на-Дону (мкр-н Воєнвед)",
      "target": "Військовий аеродром «Ростов-на-Дону (Центральний)» (4-та армія ВПС і ППО ВКС РФ)",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "У ніч проти 6 вересня 2026 року Сили оборони України завдали комбінованого удару безпілотниками по військовому аеродрому «Ростов-на-Дону (Центральний)». Цей летовище є ключовою штабною базою 4-ї армії ВПС і ППО та 30-го окремого змішаного авіаполку ВКС РФ, звідки координуються вильоти бойової авіації та доставляються вантажі на фронт. У зведенні Генштабу ЗСУ підтвердили ураження аеродрому, де після вибухів спалахнула пожежа й зазнала пошкоджень інфраструктура обслуговування бортів. Для ослаблення ворожого захисту українські бійці також ліквідували РЛС «Подльот» і два зенітні комплекси «Панцир-С1» у Ростовській області. У самому Ростові дрони кружляли понад чотири години під безперервну стрілянину ворожої ППО. Уламки збитих апаратів пошкодили багатоповерхівки в Радянському та Ленінському районах міста, поранення дістали четверо жителів, зокрема дитина. Влада міста оголосила локальний режим надзвичайного стану біля постраждалих будинків.",
      "source": "Генштаб ЗСУ, ASTRA, губернатор Ростовської області, очевидці, росЗМІ"
    },
    "en": {
      "region": "Rostov Oblast, Rostov-on-Don (Voenved District)",
      "target": "Rostov-on-Don (Centralny) Military Airfield (4th Air and Air Defence Forces Army)",
      "category": "Military Airbase",
      "weapon": "Drone",
      "details": "Overnight into September 6, 2026, Ukrainian defense forces launched a drone strike against the Rostov-on-Don (Centralny) military airfield. The airbase serves as headquarters for the 4th Air and Air Defence Forces Army and the 30th Independent Composite Transport Aviation Regiment, managing flights and military cargo logistics. The AFU General Staff officially confirmed hitting the airfield, where explosions ignited fires and damaged ground support infrastructure. To clear the flight path, Ukrainian strikes also destroyed a Podlyot radar and two Pantsir-S1 air defense missile systems protecting the sector. Drones circled over Rostov-on-Don for more than four hours amid heavy anti-aircraft gunfire. Debris from intercepted drones damaged apartment buildings in the Sovetsky and Leninsky districts, injuring four civilians including a child. City authorities declared a local state of emergency around the damaged apartment buildings.",
      "source": "General Staff of AFU, ASTRA, Rostov Oblast Governor, Eyewitnesses, Russian Media"
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
let raw = fs.readFileSync(dataPath, 'utf8');

const varMatch = raw.match(/const\s+(\w+)\s*=\s*\[/);
if (!varMatch) { console.error('Cannot detect variable name'); process.exit(1); }
const varName = varMatch[1];

let items = JSON.parse(raw.replace(new RegExp('^const\\s+' + varName + '\\s*=\\s*'), '').replace(/;\s*$/, ''));

// Filter out any existing 06.09.2026 items
items = items.filter(x => x.date !== '06.09.2026');

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
console.log('Successfully updated data.js with ' + newItems.length + ' items for 06.09.2026. Total items: ' + items.length);

