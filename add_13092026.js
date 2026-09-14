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
    "date": "13.09.2026",
    "lat": 55.5786,
    "lng": 51.9365,
    "distance": calcMinDistance(55.5786, 51.9365),
    "ru": {
      "region": "Республика Татарстан, Нижнекамск",
      "target": "Нефтеперерабатывающий комплекс «ТАНЕКО» (АО «ТАНЕКО» / ПАО «Татнефть»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 13 сентября 2026 года дальнобойные украинские дроны преодолели свыше 1200 километров и атаковали нефтеперерабатывающий комплекс «ТАНЕКО» в Нижнекамске. Завод компании «Татнефть» мощностью более 16 млн тонн нефти в год входит в пятерку крупнейших НПЗ страны и снабжает топливом военную технику РФ. В результате результативных попаданий на промышленной площадке вспыхнул резервуар с нефтепродуктами, пламя охватило емкость. Персонал предприятия зафиксировал мощные взрывы и зарево ночного пожара в резервуарном парке. Власти Татарстана подтвердили атаку и заявили о 14 пострадавших, трое из которых в тяжелом состоянии, а двое погибли в поврежденном автомобиле. Генштаб ВСУ включил удар по «ТАНЕКО» в утреннюю сводку, подтвердив поражение резервуара стратегического завода.",
      "source": "Генштаб ВСУ, ASTRA, Exilenova+, Supernova+, правительство Республики Татарстан"
    },
    "uk": {
      "region": "Республіка Татарстан, Нижньокамськ",
      "target": "Нафтопереробний комплекс «ТАНЕКО» (АТ «ТАНЕКО» / ПАТ «Татнафта»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 13 вересня 2026 року українські ударні дрони подолали понад 1200 кілометрів та завдали удару по нафтопереробному комплексу «ТАНЕКО» у Нижньокамську. Завод компанії «Татнафта» потужністю понад 16 млн тонн нафти на рік є одним із найпотужніших у Росії та забезпечує паливом армію окупантів. Унаслідок точних влучань на території підприємства спалахнув резервуар із нафтопродуктами, вогонь охопив технологічну ємність. Працівники комплексу зафіксували яскраві спалахи, ударні хвилі та масштабне загоряння у паливному парку. Влада Татарстану підтвердила госпіталізацію постраждалих, визнавши поранення 14 осіб та загибель двох людей біля пошкодженої автівки. Генеральний штаб ЗСУ офіційно підтвердив успішне ураження нафтового резервуара стратегічного НПЗ.",
      "source": "Генштаб ЗСУ, ASTRA, Exilenova+, Supernova+, уряд Республіки Татарстан"
    },
    "en": {
      "region": "Republic of Tatarstan, Nizhnekamsk",
      "target": "TANECO Oil Refinery Complex (JSC TANECO / PJSC Tatneft)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Overnight on September 13, 2026, Ukrainian long-range strike drones flew over 1,200 kilometers to strike the flagship TANECO oil refinery complex in Nizhnekamsk, Tatarstan. Owned by Tatneft, the facility processes over 16 million tons of crude annually, ranking among Russia's top five refineries and supplying fuel for military logistics. Direct drone impacts triggered explosions and ignited a petroleum storage tank within the site. Plant workers and local residents reported powerful blast shocks and heavy smoke rising over the industrial hub. Regional authorities of Tatarstan confirmed 14 injured individuals, with three hospitalized in critical condition, as well as two fatalities near a damaged vehicle. Ukraine's General Staff officially verified the successful hit on the TANECO fuel tank in its operational summary.",
      "source": "General Staff of AFU, ASTRA, Exilenova+, Supernova+, Government of Tatarstan"
    },
    "images": [
      "video/taneko_npz_2026-09-13_1.mp4",
      "video/taneko_npz_2026-09-13_2.mp4",
      "images/taneko_npz_1.jpg",
      "images/taneko_npz_2.jpg",
      "images/taneko_npz_3.jpg",
      "images/taneko_npz_4.jpg"
    ]
  },
  {
    "date": "13.09.2026",
    "lat": 45.242,
    "lng": 38.106,
    "distance": calcMinDistance(45.242, 38.106),
    "ru": {
      "region": "Краснодарский край, Славянск-на-Кубани",
      "target": "Славянский НПЗ (ООО «Славянск ЭКО»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 13 сентября 2026 года подразделения Сил обороны Украины провели результативную атаку ударными беспилотниками на Славянский нефтеперерабатывающий завод в Краснодарском крае. Предприятие компании «Славянск ЭКО» мощностью до 5,2 млн тонн нефти в год перерабатывает около 9% сырья всего Южного федерального округа и снабжает топливом южную группировку войск РФ. Несколько дронов прорвали заграждения и взорвались на территории резервуарного парка, вызвав сильный пожар. Огонь охватил технологические трубопроводы и резервуары с готовой продукцией, а столб густого черного дыма поднимался на сотни метров. Местные власти признали атаку, заявив о повреждении газопровода в частном секторе и ранении одного жителя обломками сбитого аппарата. Генштаб ВСУ официально подтвердил факт поражения завода, отметив важность лишения противника горючего.",
      "source": "Генштаб ВСУ, ASTRA, Exilenova+, Supernova+, оперативный штаб Краснодарского края"
    },
    "uk": {
      "region": "Краснодарський край, Слов’янськ-на-Кубані",
      "target": "Слов’янський НПЗ (ТОВ «Слов’янськ ЕКО»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 13 вересня 2026 року підрозділи Сил оборони України здійснили результативний наліт ударних дронів на Слов’янський нафтопереробний завод у Краснодарському краї. Підприємство «Слов’янськ ЕКО» з потужністю переробки до 5,2 млн тонн нафти щороку забезпечує майже 9% переробки в Південному окрузі РФ і безпосередньо живить паливом окупаційні війська. Частина безпілотників успішно подолала протиповітряну оборону та вибухнула безпосередньо у резервуарному парку. Внаслідок влучань спалахнула масштабна пожежа, полум'я охопило паливні ємності та технологічну мережу трубопроводів. Російська влада визнала наліт, повідомивши про пошкодження газопроводу та поранення однієї цивільної особи уламками. Генеральний штаб ЗСУ офіційно підтвердив успішне ураження об'єкта, що суттєво послаблює постачання ворожої армії.",
      "source": "Генштаб ЗСУ, ASTRA, Exilenova+, Supernova+, оперативний штаб Краснодарського краю"
    },
    "en": {
      "region": "Krasnodar Krai, Slavyansk-on-Kuban",
      "target": "Slavyansk Oil Refinery (LLC Slavyansk ECO)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Overnight on September 13, 2026, Ukrainian defense forces conducted a successful strike with long-range attack drones against the Slavyansk Oil Refinery in Krasnodar Krai. Operated by LLC Slavyansk ECO, the plant processes up to 5.2 million tons of crude oil annually, accounting for roughly 9% of refining capacity across Russia's Southern Federal District and fueling southern invasion troops. Several drones bypassed air defenses and struck the refinery's tank farm, triggering a large fire. The blaze quickly enveloped fuel storage tanks and distribution pipelines, sending massive plumes of dark smoke visible from miles away. Regional officials acknowledged the raid, claiming gas pipeline damage in the private sector and one injured resident from falling debris. The General Staff of the Armed Forces of Ukraine formally confirmed the hit, noting disrupted fuel logistics for Russian operations.",
      "source": "General Staff of AFU, ASTRA, Exilenova+, Supernova+, Krasnodar Krai Operational HQ"
    },
    "images": [
      "video/slavyansk_npz_2026-09-13_1.mp4",
      "video/slavyansk_npz_2026-09-13_2.mp4",
      "images/slavyansk_npz_1.jpg",
      "images/slavyansk_npz_2.jpg",
      "images/slavyansk_npz_3.jpg",
      "images/slavyansk_npz_4.jpg"
    ]
  },
  {
    "date": "13.09.2026",
    "lat": 48.9536,
    "lng": 40.3003,
    "distance": calcMinDistance(48.9536, 40.3003),
    "ru": {
      "region": "Ростовская область, Миллерово",
      "target": "Военный аэродром «Миллерово» — узел хранения, подготовки и запуска ударных БПЛА",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "13 сентября 2026 года Силы обороны Украины нанесли удар беспилотниками по военному аэродрому «Миллерово» в Ростовской области. Авиабаза расположена всего в двухстах километрах от фронта и активно эксплуатируется ВКС РФ не только для боевой авиации, но и как передовой центр подготовки, снаряжения и пусков дронов-камикадзе. Согласно официальной сводке Генштаба ВСУ, попадания пришлись по специализированной площадке хранения и предполетного обслуживания беспилотников. В результате взрывов уничтожены подготовленные к боевым вылетам дроны и сопутствующая аппаратура наведения. Губернатор Ростовской области Юрий Слюсарь заявил об отражении налета десятков беспилотников в районе Миллерово и других муниципалитетов. Удар нарушил график массированных пусков БПЛА противника по территории Украины.",
      "source": "Генштаб ВСУ, ASTRA, власти Ростовской области"
    },
    "uk": {
      "region": "Ростовська область, Міллерово",
      "target": "Військовий аеродром «Міллерово» — вузол зберігання, підготовки та запуску ударних БПЛА",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "13 вересня 2026 року Сили оборони України завдали прицільного удару далекобійними дронами по військовому аеродрому «Міллерово» в Ростовській області. Авіабаза знаходиться на відстані близько двохсот кілометрів від лінії фронту та використовується окупантами як ключовий плацдарм підготовки, спорядження й пуску дронів-камікадзе. Згідно з офіційною заявою Генерального штабу ЗСУ, вогневого ураження зазнав пункт зберігання, технічного обслуговування та старту ударних безпілотників. Ударники знищили підготовлені до запусків апарати, пускове обладнання та технічні засоби управління. Влада Ростовської області визнала масований нічний наліт дронів на регіон, звітуючи про роботу ППО біля Міллерового. Операція суттєво зірвала графік ворожих безпілотних ударів по українських містах.",
      "source": "Генштаб ЗСУ, ASTRA, влада Ростовської області"
    },
    "en": {
      "region": "Rostov Oblast, Millerovo",
      "target": "Millerovo Military Airfield — Strike UAV Storage, Preparation, and Launch Facility",
      "category": "Military Airfield",
      "weapon": "Drone",
      "details": "On September 13, 2026, the Ukrainian Defense Forces carried out a precision drone strike targeting the Millerovo military airfield in Rostov Oblast. Located approximately 200 kilometers from the front line, this airbase serves as an operational base for Russian tactical aviation and a critical forward hub for assembling, storing, and launching long-range attack drones. According to the official statement of the General Staff of the AFU, the strike hit the designated storage, pre-flight preparation, and launch infrastructure for kamikaze drones. Detonations destroyed ready-to-launch unmanned systems and ground guidance equipment deployed at the flight facilities. Rostov Oblast Governor Yury Slyusar reported a massive aerial assault involving over 60 intercepted drones across the region. The successful strike disrupted scheduled Russian drone raids against Ukrainian territory.",
      "source": "General Staff of AFU, ASTRA, Rostov Oblast Authorities"
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
  console.log(`  Media count: ${item.images ? item.images.length : 0} items`);
  console.log(`  RU details length: ${ruLen} chars (${ruSentences} sentences)`);
  console.log(`  UK details length: ${ukLen} chars (${ukSentences} sentences)`);
  console.log(`  EN details length: ${enLen} chars (${enSentences} sentences)`);

  if (ruLen < 600 || ruLen > 1000) { console.error(`  [ERROR] RU length out of bounds [600-1000]: ${ruLen}`); hasErrors = true; }
  if (ukLen < 600 || ukLen > 1000) { console.error(`  [ERROR] UK length out of bounds [600-1000]: ${ukLen}`); hasErrors = true; }
  if (enLen < 600 || enLen > 1000) { console.error(`  [ERROR] EN length out of bounds [600-1000]: ${enLen}`); hasErrors = true; }
  if (ruSentences < 4 || ruSentences > 8) { console.error(`  [ERROR] RU sentence count out of bounds [4-8]: ${ruSentences}`); hasErrors = true; }
  if (ukSentences < 4 || ukSentences > 8) { console.error(`  [ERROR] UK sentence count out of bounds [4-8]: ${ukSentences}`); hasErrors = true; }
  if (enSentences < 4 || enSentences > 8) { console.error(`  [ERROR] EN sentence count out of bounds [4-8]: ${enSentences}`); hasErrors = true; }

  if (item.images) {
    for (const m of item.images) {
      if (!fs.existsSync(m)) {
        console.error(`  [ERROR] Media file does not exist: ${m}`);
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

const dataPath = 'data.js';
let raw = fs.readFileSync(dataPath, 'utf8').trim();

const varMatch = raw.match(/const\s+(\w+)\s*=\s*\[/);
if (!varMatch) { console.error('Cannot detect variable name'); process.exit(1); }
const varName = varMatch[1];

let jsonStr = raw.replace(new RegExp('^const\\s+' + varName + '\\s*=\\s*'), '').replace(/;\s*$/, '').trim();
let items = JSON.parse(jsonStr);

// Filter out existing 13.09.2026 if any
items = items.filter(x => x.date !== '13.09.2026');

let maxId = 0;
items.forEach(i => { if (i.id && i.id > maxId) maxId = i.id; });

newItems.forEach((item, idx) => {
  item.id = maxId + 1 + idx;
});

items = newItems.concat(items);

const newContent = 'const ' + varName + ' = ' + JSON.stringify(items, null, 2) + ';';
fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully updated data.js with ' + newItems.length + ' items for 13.09.2026. Total items: ' + items.length);
