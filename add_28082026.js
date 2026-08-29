const fs = require('fs');

function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371;
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
    "date": "28.08.2026",
    "lat": 57.6012,
    "lng": 39.8745,
    "distance": calcMinDistance(57.6012, 39.8745),
    "ru": {
      "region": "Ярославская область, г. Ярославль",
      "target": "НПЗ «Славнефть-ЯНОС» (Ярославский нефтеперерабатывающий завод)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 28 августа 2026 года ударные дроны подразделений Deep Strike ССО, Сил беспилотных систем и ГУР МО Украины поразили НПЗ «Славнефть-ЯНОС» — один из пяти крупнейших нефтеперерабатывающих заводов России мощностью около 15 млн тонн нефти в год. Предприятие производит полный спектр нефтепродуктов: бензин, дизельное и авиационное топливо, мазут, битум и смазочные масла, снабжая центральные регионы РФ. На территории НПЗ наблюдатели зафиксировали два очага возгорания. Местные власти перекрыли автотрассы, включая выезд на Москву, часть детских садов была закрыта. Завод уже неоднократно становился целью украинских БПЛА в 2026 году. Генштаб ВСУ официально подтвердил поражение объекта.",
      "source": "ССО, ГУР МО, Сили БС, Генштаб ЗСУ, Укрправда, РБК Україна"
    },
    "uk": {
      "region": "Ярославська область, м. Ярославль",
      "target": "НПЗ «Славнєфть-ЯНОС» (Ярославський нафтопереробний завод)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч на 28 серпня 2026 року ударні дрони підрозділів Deep Strike ССО, Сил безпілотних систем та ГУР МО України уразили НПЗ «Славнєфть-ЯНОС» — один із п'яти найбільших нафтопереробних заводів Росії потужністю близько 15 млн тонн нафти на рік. Підприємство виробляє повний спектр нафтопродуктів: бензин, дизельне та авіаційне паливо, мазут, бітум та мастильні матеріали, забезпечуючи центральні регіони РФ. На території НПЗ спостерігачі зафіксували два осередки пожежі. Місцева влада перекрила автодороги, включно з виїздом на Москву, частину дитячих садків було зачинено. Завод вже неодноразово ставав ціллю українських БПЛА у 2026 році. Генштаб ЗСУ офіційно підтвердив ураження об'єкта.",
      "source": "ССО, ГУР МО, Сили БС, Генштаб ЗСУ, Укрправда, РБК Україна"
    },
    "en": {
      "region": "Yaroslavl Oblast, Yaroslavl",
      "target": "Slavneft-YANOS Oil Refinery (Yaroslavl Refinery)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 28, 2026, Deep Strike drones operated by Ukrainian SSO, Unmanned Systems Forces, and Defense Intelligence hit the Slavneft-YANOS refinery — one of Russia's five largest, with a capacity of approximately 15 million tonnes per year. The plant produces the full range of petroleum products including gasoline, diesel, jet fuel, fuel oil, bitumen, and lubricants, supplying central Russian regions. Two separate fire outbreaks were observed on-site. Local authorities closed roads including the Moscow highway exit and shut down some kindergartens. The refinery had already been hit multiple times in 2026. The General Staff of the AFU officially confirmed the strike.",
      "source": "SSO, DIU, Unmanned Systems Forces, AFU General Staff, Ukrpravda, RBC Ukraine"
    }
  },
  {
    "date": "28.08.2026",
    "lat": 51.4618,
    "lng": 46.1143,
    "distance": calcMinDistance(51.4618, 46.1143),
    "ru": {
      "region": "Саратовская область, г. Энгельс",
      "target": "Авиабаза «Энгельс-2» — стратегический бомбардировщик Ту-95МС",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "28 августа 2026 года подразделение «Альфа» ЦСО СБУ провело операцию против авиабазы Энгельс-2 в Саратовской области — главной точки базирования стратегической авиации РФ. Дроны преодолели около 800 км и поразили стратегический ракетоносец Ту-95МС: спутниковые снимки и OSINT-анализ зафиксировали критические повреждения правого крыла с частичным его отломом. Эксперты оценили самолёт как не подлежащий ремонту — фактически уничтоженный. Ту-95МС является основным носителем крылатых ракет Х-101, которыми Россия регулярно бьёт по украинским городам. Дополнительно под удар попали склады боеприпасов и горюче-смазочных материалов на территории базы. Президент Зеленский лично подтвердил успех операции.",
      "source": "ЦСО СБУ «Альфа», Президент України Зеленський, Генштаб ЗСУ, OSINT"
    },
    "uk": {
      "region": "Саратовська область, м. Енгельс",
      "target": "Авіабаза «Енгельс-2» — стратегічний бомбардувальник Ту-95МС",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "28 серпня 2026 року підрозділ «Альфа» ЦСО СБУ провело операцію проти авіабази Енгельс-2 у Саратовській області — головної точки базування стратегічної авіації РФ. Дрони подолали близько 800 км та уразили стратегічний ракетоносець Ту-95МС: супутникові знімки й OSINT-аналіз зафіксували критичні пошкодження правого крила з частковим його відломом. Експерти оцінили літак як не придатний до ремонту — фактично знищений. Ту-95МС є основним носієм крилатих ракет Х-101, якими Росія регулярно б'є по українських містах. Додатково під удар потрапили склади боєприпасів та пально-мастильних матеріалів на території бази. Президент Зеленський особисто підтвердив успіх операції.",
      "source": "ЦСО СБУ «Альфа», Президент України Зеленський, Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Saratov Oblast, Engels",
      "target": "Engels-2 Airbase — Tu-95MS Strategic Bomber",
      "category": "Military Airbase",
      "weapon": "Drone",
      "details": "On August 28, 2026, the SBU Alpha special operations unit struck Engels-2 airbase in Saratov Oblast — Russia's primary base for strategic aviation. Drones covered approximately 800 km to hit a Tu-95MS strategic missile carrier. Satellite imagery and OSINT analysis confirmed critical damage to the right wing with part of it severed. Analysts assessed the aircraft as beyond repair and effectively destroyed. The Tu-95MS is Russia's main carrier for Kh-101 cruise missiles used against Ukrainian cities. An ammunition depot and fuel storage facility at the base were also hit. President Zelenskyy personally confirmed the success of the operation.",
      "source": "SBU Alpha CSO, President Zelenskyy, AFU General Staff, OSINT (satellite imagery)"
    }
  },
  {
    "date": "28.08.2026",
    "lat": 47.2608,
    "lng": 39.8685,
    "distance": calcMinDistance(47.2608, 39.8685),
    "ru": {
      "region": "Ростовская область, Аксайский район",
      "target": "Склад DNS (сеть электроники) и логистический центр Ozon — Новочеркасское шоссе",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "В ночь на 29 августа 2026 года (поздно вечером 28-го) украинские ударные БПЛА атаковали крупный складской кластер на Новочеркасском шоссе в Аксайском районе Ростовской области. На складе DNS (Новочеркасское ш., 180, здание 3) вспыхнул масштабный пожар. Рядом расположенный логистический объект Ozon (180Б, здание 1) также получил прямое попадание — компания подтвердила возгорание и временную остановку работы. Склады электроники DNS являются частью крупнейшей в РФ ретейл-сети и обеспечивают региональные поставки товаров, в том числе компонентов двойного применения. В регионе пострадали 7 человек, четверо госпитализированы. Губернатор Слюсарь официально подтвердил атаку.",
      "source": "Губернатор Ростовской обл. Слюсарь, Ozon, Meduza, Укрправда, OSINT"
    },
    "uk": {
      "region": "Ростовська область, Аксайський район",
      "target": "Склад DNS (мережа електроніки) та логістичний центр Ozon — Новочеркаське шосе",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "У ніч на 29 серпня 2026 року (пізно ввечері 28-го) українські ударні БПЛА атакували великий складський кластер на Новочеркаському шосе в Аксайському районі Ростовської області. На складі DNS (Новочеркаське ш., 180, будівля 3) спалахнула масштабна пожежа. Поряд розташований логістичний об'єкт Ozon (180Б, будівля 1) також отримав пряме влучання — компанія підтвердила займання та тимчасове припинення роботи. Склади електроніки DNS є частиною найбільшої в РФ рітейл-мережі та забезпечують регіональні поставки товарів, зокрема компонентів подвійного застосування. У регіоні постраждали 7 осіб, четверо госпіталізовані. Губернатор Слюсарь офіційно підтвердив атаку.",
      "source": "Губернатор Ростовської обл. Слюсарь, Ozon, Meduza, Укрправда, OSINT"
    },
    "en": {
      "region": "Rostov Oblast, Aksai District",
      "target": "DNS Electronics Warehouse and Ozon Logistics Center — Novocherkassk Highway",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "Late on August 28 / early August 29, 2026, Ukrainian drones struck a major warehouse cluster on the Novocherkassk highway in Aksai district, Rostov Oblast. A large fire broke out at the DNS electronics warehouse (Novocherkasskoye Shosse 180, Building 3). The adjacent Ozon logistics facility (180B, Building 1) was also directly hit — the company confirmed a fire and suspended operations. DNS warehouses form part of Russia's largest electronics retail network and supply regional logistics including dual-use components. Seven people were injured in the region, four hospitalized. Governor Slyusar officially confirmed the attack.",
      "source": "Rostov Oblast Governor Slyusar, Ozon, Meduza, Ukrpravda, OSINT"
    }
  },
  {
    "date": "28.08.2026",
    "lat": 47.2730,
    "lng": 39.8573,
    "distance": calcMinDistance(47.2730, 39.8573),
    "ru": {
      "region": "Ростовская область, г. Аксай",
      "target": "Судостроительно-судоремонтный завод «Мидель»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ту же ночь с 28 на 29 августа 2026 года удар украинских БПЛА был нанесён по судостроительному и судоремонтному заводу «Мидель» в Аксае Ростовской области. Предприятие расположено на берегу реки Дон и специализируется на строительстве и ремонте речных судов, в том числе вспомогательных военных плавсредств. В результате попадания на территории завода вспыхнуло пришвартованное судно. Завод «Мидель» представляет военно-промышленный интерес: его мощности могут использоваться для обеспечения военной логистики по Дону и ремонта армейских катеров. Данные об ударе подтвердили российские мониторинговые ресурсы и региональные телеграм-каналы.",
      "source": "Meduza, 24tv.ua, регіональні моніторингові ТГ-канали"
    },
    "uk": {
      "region": "Ростовська область, м. Аксай",
      "target": "Суднобудівно-судноремонтний завод «Мідель»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Тієї ж ночі з 28 на 29 серпня 2026 року удар українських БПЛА було завдано по суднобудівному та судноремонтному заводу «Мідель» в Аксаї Ростовської області. Підприємство розташоване на березі річки Дон і спеціалізується на будівництві та ремонті річкових суден, зокрема допоміжних військових плавзасобів. Внаслідок влучання на території заводу спалахнуло пришвартоване судно. Завод «Мідель» має військово-промисловий інтерес: його потужності можуть використовуватися для забезпечення військової логістики по Дону та ремонту армійських катерів. Дані про удар підтвердили російські моніторингові ресурси та регіональні телеграм-канали.",
      "source": "Meduza, 24tv.ua, регіональні моніторингові ТГ-канали"
    },
    "en": {
      "region": "Rostov Oblast, Aksai",
      "target": "Midel Shipbuilding and Ship Repair Plant",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "During the night of August 28-29, 2026, Ukrainian long-range strike drones attacked the Midel shipbuilding and ship repair plant in Aksai, Rostov Oblast. The facility is situated on the banks of the Don River and specializes in constructing and servicing river vessels, including auxiliary military and patrol craft. Following the drone strikes, a moored vessel caught fire on the premises of the shipyard. The Midel plant plays an active role in Russian defense and transport logistics, supporting freight traffic along the Don and repairing riverboats used by military units. The strike and resulting blaze were corroborated by Russian emergency monitoring resources and regional channels.",
      "source": "Meduza, 24tv.ua, regional monitoring Telegram channels"
    }
  }
];

// Load existing data
const dataPath = './data.js';
let raw = fs.readFileSync(dataPath, 'utf8');

// Detect variable name dynamically
const varMatch = raw.match(/const\s+(\w+)\s*=\s*\[/);
if (!varMatch) { console.error('Cannot detect variable name'); process.exit(1); }
const varName = varMatch[1];

let items = JSON.parse(raw.replace(new RegExp('^const\\s+' + varName + '\\s*=\\s*'), '').replace(/;\s*$/, ''));

// Filter out any existing 28.08.2026 items
items = items.filter(x => x.date !== '28.08.2026');

// Get max id
let maxId = 0;
items.forEach(i => { if (i.id && i.id > maxId) maxId = i.id; });

newItems.forEach((item, idx) => {
  item.id = maxId + 1 + idx;
});

// Put new items at the beginning or end? Let's check chronological order of data.js
// data.js has newest items at the beginning
items = newItems.concat(items);

const newContent = 'const ' + varName + ' = ' + JSON.stringify(items, null, 2) + ';';
fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully updated data.js with ' + newItems.length + ' items for 28.08.2026. Total items: ' + items.length);
