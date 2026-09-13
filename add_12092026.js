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
    "date": "12.09.2026",
    "lat": 53.5524,
    "lng": 49.4701,
    "distance": calcMinDistance(53.5524, 49.4701),
    "ru": {
      "region": "Самарская область, Тольятти (Северный промышленный узел)",
      "target": "Химкомбинат «КуйбышевАзот» и завод «Тольяттикаучук» (ПАО «КуйбышевАзот» / ООО «Тольяттикаучук»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 12 сентября 2026 года украинские ударные беспилотники атаковали крупнейшие предприятия химической промышленности в Тольятти Самарской области. Под ударом оказались мощности ПАО «КуйбышевАзот» и комбината «Тольяттикаучук», расположенные в едином Северном промышленном узле. Генштаб ВСУ подтвердил результативное поражение производства синтетических каучуков, используемых для выпуска твердого ракетного топлива тактических и баллистических ракет. «КуйбышевАзот» обеспечивает до половины выпуска капролактама в РФ и производит шинный корд для военной техники и аммиачную селитру. В результате серии взрывов на промплощадке начался пожар, пламя охватило производственные установки. Один из сбитых аппаратов врезался в жилой дом на улице Льва Яшина, ранив местного жителя. Губернатор Вячеслав Федорищев подтвердил атаку БПЛА на промышленный объект региона.",
      "source": "Генштаб ВСУ, ASTRA, Exilenova+, росСМИ, правительство Самарской области"
    },
    "uk": {
      "region": "Самарська область, Тольятті (Північний промисловий вузол)",
      "target": "Хімкомбінат «КуйбишевАзот» та завод «Тольяттікаучук» (ПАТ «КуйбишевАзот» / ТОВ «Тольяттікаучук»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 12 вересня 2026 року далекобійні українські дрони атакували провідні хімічні підприємства в місті Тольятті Самарської області. Ударів зазнали промислові майданчики ПАТ «КуйбишевАзот» та комбінату «Тольяттікаучук» у Північному промузлі міста. Генеральний штаб ЗСУ офіційно підтвердив ураження виробництва синтетичних каучуків, які ворог застосовує для виготовлення твердого ракетного пального для балістичних ракет. Завод «КуйбишевАзот» є ключовим виробником капролактаму, поліаміду та шинного корду для військової автобронетехніки окупантів. На території комплексу зафіксовано численні влучання та сильну пожежу в технологічних цехах. Один із дронів пошкодив житловий будинок на вулиці Лева Яшина, де зазнав поранення один мешканець. Влада області визнала наліт дронів та ураження промислового об'єкта.",
      "source": "Генштаб ЗСУ, ASTRA, Exilenova+, росЗМІ, влада Самарської області"
    },
    "en": {
      "region": "Samara Oblast, Tolyatti (Northern Industrial District)",
      "target": "KuibyshevAzot Chemical Plant and Tolyattikauchuk (PJSC KuibyshevAzot / LLC Tolyattikauchuk)",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "Overnight on September 12, 2026, Ukrainian long-range strike drones targeted key petrochemical plants in Tolyatti, Samara Oblast. The raid hit the production facilities of PJSC KuibyshevAzot and the adjacent Tolyattikauchuk plant within the city's Northern industrial hub. Ukraine's General Staff officially verified the strike, emphasizing that Tolyattikauchuk manufactures synthetic rubbers used in solid rocket fuel for tactical and ballistic missiles. KuibyshevAzot produces about half of Russia's caprolactam and supplies tire cords and polyamide polymers for military vehicles. Multiple drone detonations triggered fires across the chemical synthesis units, sending plumes of smoke across the district. One drone damaged a residential apartment building on Lev Yashin Street, injuring one resident. Regional governor Vyacheslav Fedorishchev acknowledged drone strikes damaging industrial facilities.",
      "source": "General Staff of AFU, ASTRA, Exilenova+, Russian Media, Samara Oblast Authorities"
    },
    "images": [
      "video/tolyatti_chem_2026-09-12_1.mp4",
      "video/tolyatti_chem_2026-09-12_2.mp4",
      "images/tolyatti_chem_1.jpg",
      "images/tolyatti_chem_2.jpg",
      "images/tolyatti_chem_3.jpg",
      "images/tolyatti_chem_4.jpg"
    ]
  },
  {
    "date": "12.09.2026",
    "lat": 47.1994,
    "lng": 38.8656,
    "distance": calcMinDistance(47.1994, 38.8656),
    "ru": {
      "region": "Ростовская область, Таганрог",
      "target": "Военный аэродром «Таганрог-Центральный» (708-й ВТАП и 325-й АРЗ)",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "В ночь на 12 сентября 2026 года Силы обороны Украины осуществили массированный налет ударных дронов на военный аэродром «Таганрог-Центральный». На авиабазе дислоцируется 708-й военно-транспортный авиационный полк и функционирует 325-й авиаремонтный завод. Президент Украины Владимир Зеленский подтвердил, что бойцы СБУ поразили радиолокационную станцию и зенитный ракетно-пушечный комплекс «Панцирь-С2», прикрывавший летное поле. Дроны Центра спецопераций «А» СБУ пробили противодроновые сетки и уничтожили резервуар с авиатопливом в резервуарном парке аэродрома. Генштаб ВСУ также зафиксировал уничтожение самолета противника в зоне авиабазы. На объекте начался масштабный ночной пожар с сильным задымлением, который продолжался до утра. Губернатор Ростовской области Юрий Слюсарь заявил об отражении налета более 70 дронов в регионе.",
      "source": "Президент Украины, СБУ, Генштаб ВСУ, ASTRA, Exilenova+, росСМИ"
    },
    "uk": {
      "region": "Ростовська область, Таганрог",
      "target": "Військовий аеродром «Таганрог-Центральний» (708-й ВТАП та 325-й АРЗ)",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "У ніч проти 12 вересня 2026 року Сили оборони України завдали масованого комбінованого удару безпілотниками по військовому аеродрому «Таганрог-Центральний». На летовищі базується 708-й військово-транспортний авіаполк РФ та діє 325-й авіаремонтний завод. Президент Володимир Зеленський повідомив про результативну роботу СБУ, воїни якої уразили ворожу РЛС та зенітний ракетно-гарматний комплекс «Панцир-С2». Спецпризначенці ЦСО «А» СБУ прямим влучанням спалили резервуар з авіаційним пальним у паливному парку авіабази. Крім того, Генштаб ЗСУ підтвердив ліквідацію одного літака окупантів. На території аеродрому спалахнула сильна пожежа, над військовим містечком тривалий час здіймався густий чорний дим. Влада Ростовської області визнала масовану нічну атаку, заявивши про перехоплення понад 70 дронів над містом та областю.",
      "source": "Президент України, СБУ, Генштаб ЗСУ, ASTRA, Exilenova+, росЗМІ"
    },
    "en": {
      "region": "Rostov Oblast, Taganrog",
      "target": "Taganrog-Tsentralny Military Airbase (708th VTAP & 325th ARZ)",
      "category": "Military Airfield",
      "weapon": "Drone",
      "details": "Overnight on September 12, 2026, Ukrainian strike drones executed a coordinated mass attack on Taganrog-Tsentralny military airfield in Rostov Oblast. The facility hosts the Russian 708th Military Transport Aviation Regiment and the 325th Aircraft Repair Plant. Ukrainian President Volodymyr Zelensky confirmed that SBU operators struck a radar station and a Pantsir-S2 air defense system defending the runway. Special operators of SBU Alpha breached cage defenses and blew up a jet fuel storage tank inside the airbase's fuel park. The General Staff of the AFU additionally recorded the destruction of a Russian aircraft during the operation. Secondary explosions caused massive fires and thick plumes of smoke that remained visible past sunrise. Rostov Oblast governor Yury Slyusar acknowledged the swarm raid, reporting that over 70 drones were engaged across the region.",
      "source": "President of Ukraine, SBU, General Staff of AFU, ASTRA, Exilenova+, Russian Media"
    },
    "images": [
      "video/taganrog_airbase_2026-09-12_1.mp4",
      "video/taganrog_airbase_2026-09-12_2.mp4",
      "images/taganrog_airbase_1209_1.jpg",
      "images/taganrog_airbase_1209_2.jpg",
      "images/taganrog_airbase_1209_3.jpg",
      "images/taganrog_airbase_1209_4.jpg"
    ]
  },
  {
    "date": "12.09.2026",
    "lat": 47.2386,
    "lng": 38.8925,
    "distance": calcMinDistance(47.2386, 38.8925),
    "ru": {
      "region": "Ростовская область, Таганрог (ул. Инструментальная)",
      "target": "Завод ударных БПЛА «Атлант Аэро» (территория ТагАЗ)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 12 сентября 2026 года дальнобойные дроны Сил обороны Украины нанесли прицельный удар по предприятию ВПК «Атлант Аэро» в Таганроге. Завод размещен на производственных площадях бывшего Таганрогского автозавода (ТагАЗ) на Инструментальной улице. Предприятие выполняет полный цикл проектирования, сборки и тестирования разведывательно-ударных дронов типа «Молния» и компонентов для БПЛА «Орион». Президент Украины Владимир Зеленский подтвердил поражение производственных цехов сборки FPV-дронов, складов хранения готовых БПЛА и резервуара с горючим. Спутниковые снимки зафиксировали как минимум три точных попадания по цеховым корпусам завода. На территории предприятия разгорелся крупный пожар, зафиксированный тепловыми датчиками NASA FIRMS. Губернатор региона подтвердил повреждения строений в близлежащем промышленном секторе города.",
      "source": "Президент Украины, СБУ, Exilenova+, NASA FIRMS, ASTRA, росСМИ"
    },
    "uk": {
      "region": "Ростовська область, Таганрог (вул. Інструментальна)",
      "target": "Завод ударних БпЛА «Атлант Аеро» (територія ТагАЗ)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 12 вересня 2026 року українські ударні дрони атакували ключове оборонне підприємство «Атлант Аеро» у Таганрозі Ростовської області. Виробництво розгорнуто на промислових потужностях колишнього Таганрозького автомобільного заводу (ТагАЗ). Підприємство здійснює повний цикл конструювання, серійного складання та випробувань ударних дронів «Молнія» та вузлів для БпЛА «Оріон». Президент Володимир Зеленський підтвердив, що воїни СБУ уразили цехи збирання FPV-дронів, склади зберігання безпілотників та резервуар з нафтопродуктами. Супутникові знімки зафіксували щонайменше три точні влучання у виробничі та складські корпуси заводу. Потужна детонація спричинила велику пожежу на об'єкті, сліди якої підтвердила супутникова система NASA FIRMS. Влада області підтвердила пошкодження будівель у промисловому секторі.",
      "source": "Президент України, СБУ, Exilenova+, NASA FIRMS, ASTRA, росЗМІ"
    },
    "en": {
      "region": "Rostov Oblast, Taganrog (Instrumentalnaya Street)",
      "target": "Atlant Aero UAV Production Plant (Former TagAZ Facility)",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "Overnight on September 12, 2026, Ukrainian deep-strike drones struck the Atlant Aero defense manufacturing facility in Taganrog, Rostov Oblast. The plant operates inside the repurposed industrial territory of the former Taganrog Automobile Plant (TagAZ). Atlant Aero handles end-to-end design, manufacturing, and testing of Molniya strike drones along with key components for Orion UAVs. Ukrainian President Volodymyr Zelensky confirmed that SBU operators destroyed FPV drone assembly workshops, drone storage warehouses, and an on-site fuel tank. Post-strike satellite imagery verified at least three direct hits on industrial assembly buildings and storage hangars across the plant. The attack caused massive fires on the factory grounds, confirmed by NASA FIRMS thermal anomaly satellite monitors. Regional officials acknowledged structural damage across the adjacent industrial area.",
      "source": "President of Ukraine, SBU, Exilenova+, NASA FIRMS, ASTRA, Russian Media"
    },
    "images": [
      "video/taganrog_atlant_2026-09-12_1.mp4",
      "video/taganrog_atlant_2026-09-12_2.mp4",
      "images/taganrog_atlant_1.jpg",
      "images/taganrog_atlant_2.jpg",
      "images/taganrog_atlant_3.jpg",
      "images/taganrog_atlant_4.jpg"
    ]
  },
  {
    "date": "12.09.2026",
    "lat": 43.5350,
    "lng": 39.7500,
    "distance": calcMinDistance(43.5350, 39.7500),
    "ru": {
      "region": "Краснодарский край, Сочи (акватория Черного моря)",
      "target": "Нефтяной танкер теневого флота РФ в Черном море",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "12 сентября 2026 года Силы беспилотных систем ВСУ нанесли результативный удар по подсанкционному нефтяному танкеру теневого флота РФ возле побережья Сочи. Спецоперация проведена в рамках кампании «МоЛоЧКа» по перекрытию морского экспорта российской сырой нефти. Президент Украины Владимир Зеленский в суточной сводке официально подтвердил поражение цели в Черном море. По данным OSINT-мониторинга и командования СБС, судно перевозило крупные объемы углеводородов для финансирования военных расходов РФ. Украинские дроны преодолели заслоны ПВО и поразили борт танкера, несмотря на попытки российского вертолета перехватить атакующие аппараты. На борту судна возник пожар, в акваторию вышли военные патрульные катера для обеспечения спасательных работ и ликвидации возгорания. Попадание привело к временному закрытию судоходного фарватера в районе порта Сочи.",
      "source": "Президент Украины, СБС ВСУ (Мадяр), Supernova+, Exilenova+, ASTRA"
    },
    "uk": {
      "region": "Краснодарський край, Сочі (акваторія Чорного моря)",
      "target": "Нафтовий танкер тіньового флоту РФ у Чорному морі",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "12 вересня 2026 року підрозділи Сил безпілотних систем ЗСУ завдали влучного удару по підсанкційному нафтовому танкеру тіньового флоту РФ біля узбережжя Сочі. Успішну операцію реалізовано в рамках кампанії «МоЛоЧКа», спрямованої на блокування нелегального танкерного експорту нафти агресора. Президент України Володимир Зеленський у вечірньому зверненні офіційно підтвердив ураження морської цілі в Чорному морі. За даними командування СБС, нафтоналивне судно транспортувало сировину для поповнення військового бюджету окупантів. Українські безпілотники успішно влучили в танкер, попри спроби російського вертольота збити апарати над морем. На судні спалахнула пожежа, до місця інциденту терміново вийшли патрульні катери Чорноморського флоту РФ. Атака змусила командування окупантів тимчасово обмежити рух суден у зоні порту Сочі.",
      "source": "Президент України, СБС ЗСУ (Мадяр), Supernova+, Exilenova+, ASTRA"
    },
    "en": {
      "region": "Krasnodar Krai, Sochi (Black Sea Coast)",
      "target": "Russian Shadow Fleet Oil Tanker in Black Sea",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On September 12, 2026, Ukrainian Unmanned Systems Forces hit a sanctioned Russian shadow fleet oil tanker navigating the Black Sea off the coast of Sochi. The deep maritime strike was executed under operation MoLoCHKa, designed to disrupt illicit Russian crude oil shipments that fund the war effort. President Volodymyr Zelensky officially verified the successful hit on a Black Sea maritime target in his daily briefing. Visual telemetry and military reports showed Ukrainian strike drones penetrating the vessel despite Russian military helicopters attempting interception. Multiple drone detonations punctured the tanker and ignited an intense fire on board the vessel. Russian patrol boats immediately deployed from the port of Sochi to assist with damage control and secure the perimeter. The engagement triggered emergency commercial shipping warnings and harbor restrictions along the Sochi shoreline.",
      "source": "President of Ukraine, SBS of AFU (Magyar), Supernova+, Exilenova+, ASTRA"
    },
    "images": [
      "video/sochi_tanker_2026-09-12_1.mp4",
      "video/sochi_tanker_2026-09-12_2.mp4",
      "images/sochi_tanker_1.jpg",
      "images/sochi_tanker_2.jpg",
      "images/sochi_tanker_3.jpg",
      "images/sochi_tanker_4.jpg"
    ]
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

  // Verify all media files exist
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

// Load existing data
const dataPath = 'd:/_DEV/Map kick/data.js';
let raw = fs.readFileSync(dataPath, 'utf8').trim();

const varMatch = raw.match(/const\s+(\w+)\s*=\s*\[/);
if (!varMatch) { console.error('Cannot detect variable name'); process.exit(1); }
const varName = varMatch[1];

let jsonStr = raw.replace(new RegExp('^const\\s+' + varName + '\\s*=\\s*'), '').replace(/;\s*$/, '').trim();
let items = JSON.parse(jsonStr);

// Filter out any existing 12.09.2026 items
items = items.filter(x => x.date !== '12.09.2026');

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
console.log('Successfully updated data.js with ' + newItems.length + ' items for 12.09.2026. Total items: ' + items.length);
