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
    "date": "17.08.2026",
    "lat": 45.1162,
    "lng": 33.9766,
    "distance": calcMinDistance(45.1162, 33.9766),
    "ru": {
      "region": "АР Крым, Симферопольский район, пгт Гвардейское (оккупированная территория)",
      "target": "Место хранения, подготовки и пуска ударных БПЛА на военном аэродроме «Гвардейское»",
      "category": "ВПК",
      "weapon": "Дрон / Ракетное вооружение",
      "details": "В ночь на 17 августа 2026 года Силы обороны Украины нанесли результативный комбинированный удар по территории военного аэродрома «Гвардейское» в Симферопольском районе Крыма на удалении около 200 км от линии фронта. Данная авиабаза активно использовалась российскими оккупационными войсками как передовой хаб для сборки, снаряжения, предполетной подготовки и массированных запусков ударных дронов по южным областям Украины. В ходе ночной атаки украинские ударные средства поразили специализированные площадки подготовки беспилотников и ангары хранения дронов. На объекте зафиксированы мощные вторичные взрывы и масштабный очаг пожара, который подтвержден спутниковыми снимками и местными пабликами. По данным сводки Генштаба ВСУ, поражение площадки пусков сорвало готовившуюся серию ночных налетов дронов-камикадзе по украинской портовой и энергетической инфраструктуре.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT (Крымский ветер), СМИ"
    },
    "uk": {
      "region": "АР Крим, Сімферопольський район, смт Гвардійське (окупована територія)",
      "target": "Місце зберігання, підготовки та пуску ударних БпЛА на військовому аеродромі «Гвардійське»",
      "category": "ВПК",
      "weapon": "Дрон / Ракетне озброєння",
      "details": "У ніч проти 17 серпня 2026 року Сили оборони України завдали результативного комбінованого удару по території військового аеродрому «Гвардійське» у Сімферопольському районі Криму на відстані близько 200 км від лінії фронту. Ця авіабаза активно використовувалася російськими окупаційними військами як передовий хаб для збирання, спорядження, передпольотної підготовки та масованих пусків ударних дронів по південних областях України. Під час нічної атаки українські ударні засоби уразили спеціалізовані майданчики підготовки безпілотників та ангари їхнього зберігання. На об'єкті зафіксовано потужні вторинні вибухи та масштабний осередок пожежі, підтверджений супутниковими знімками й місцевими моніторинговими пабліками. За даними зведення Генштабу ЗСУ, ураження пускового майданчика зірвало підготовку чергових дронових нальотів на українську інфраструктуру.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT (Кримський вітер), ЗМІ"
    },
    "en": {
      "region": "Crimea, Simferopol District, Hvardiiske (Occupied Territory)",
      "target": "Strike UAV Storage, Preparation and Launch Facility at Hvardiiske Airbase",
      "category": "Military",
      "weapon": "Drone / Strike Missiles",
      "details": "On the night of August 17, 2026, the Ukrainian Defense Forces launched an effective precision strike against Hvardiiske military airbase in Simferopol District of occupied Crimea, roughly 200 km from the frontline. The airfield functioned as an essential forward operating node for assembling, arming, pre-flight staging, and launching long-range strike drones across southern Ukrainian regions. Ukrainian strike assets penetrated local air defense screens, directly hitting drone assembly workshops and active launch aprons. The impact triggered heavy secondary detonations of stored drone warheads and extensive fires, corroborated by satellite thermal monitoring and local eyewitnesses. According to the General Staff of the Armed Forces of Ukraine, destroying this forward drone staging facility successfully disrupted planned mass kamikaze drone waves against Ukrainian regional infrastructure.",
      "source": "General Staff of AFU, GUR MO, OSINT, Media"
    }
  },
  {
    "date": "17.08.2026",
    "lat": 45.0933,
    "lng": 33.5936,
    "distance": calcMinDistance(45.0933, 33.5936),
    "ru": {
      "region": "АР Крым, Сакский район, пгт Новофедоровка (оккупированная территория)",
      "target": "Наземная станция управления БПЛА «Орион» на военном аэродроме «Саки»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 17 августа 2026 года Силы обороны Украины провели успешную операцию по поражению элементов управления беспилотной авиацией РФ на авиабазе «Саки» в районе Новофедоровки на западе Крыма. Главной целью удара стала стационарно-мобильная наземная станция управления тяжелыми разведывательно-ударными БПЛА «Орион» («Иноходец»). Данный командно-телеметрический комплекс обеспечивал дальнюю спутниковую и радиокомандную связь, ведение оптико-электронной разведки и наведение управляемых ракет по позициям украинских войск на южном ТВД и в Черном море. Точный прилет украинского дрона вывел из строя антенные посты, аппаратные модули и специализированную аппаратуру пункта наведения. По подтвержденным данным Генштаба ВСУ, поражение станции лишило противника возможности применять дроны «Орион» для корректировки ударов и мониторинга акватории.",
      "source": "Генштаб ВСУ, ВМС ВСУ, OSINT, СМИ"
    },
    "uk": {
      "region": "АР Крим, Сакський район, смт Новофедорівка (окупована територія)",
      "target": "Наземна станція управління БпЛА «Оріон» на військовому аеродромі «Саки»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 17 серпня 2026 року Сили оборони України провели успішну операцію з ураження елементів управління безпілотною авіацією РФ на авіабазі «Саки» в районі Новофедорівки на заході Криму. Головною ціллю удару стала стаціонарно-мобільна наземна станція управління важкими розвідувально-ударними БпЛА «Оріон» («Іноходець»). Цей командно-телеметричний комплекс забезпечував дальній супутниковий та радіокомандний зв'язок, ведення оптико-электронної розвідки і наведення керованих ракет по позиціях українських військ на південному ТВД та у Чорному морі. Влучний приліт українського дрона вивів з ладу антенні пости, апаратні модулі та спеціальне обладнання пункту наведення. За підтвердженими даними Генштабу ЗСУ, ураження станції позбавило ворога можливості застосовувати дрони «Оріон» для коригування вогню і моніторингу акваторії.",
      "source": "Генштаб ЗСУ, ВМС ЗСУ, OSINT, ЗМІ"
    },
    "en": {
      "region": "Crimea, Saky District, Novofedorivka (Occupied Territory)",
      "target": "Orion UAV Ground Control Station at Saky Airbase",
      "category": "Military",
      "weapon": "Drone",
      "details": "On the night of August 17, 2026, the Ukrainian Defense Forces carried out a precision strike targeting Russian unmanned aviation command assets at Saky Airbase near Novofedorivka in western Crimea. The primary target was the ground control and telemetry station for Orion (Inokhodets) heavy reconnaissance and strike UAVs. This specialized military command node provided long-range radio relay, satellite datalinks, optoelectronic reconnaissance tasking, and laser guidance for air-to-ground missiles operating over the Black Sea and the southern battlefront. Direct hits destroyed the antenna array, processing hardware modules, and operator consoles. The General Staff of the Armed Forces of Ukraine verified the successful neutralization of the facility, depriving Russian forces of key persistent aerial reconnaissance and precision strike coordination capabilities in the region.",
      "source": "General Staff of AFU, Ukrainian Navy, OSINT, Media"
    }
  },
  {
    "date": "17.08.2026",
    "lat": 45.3789,
    "lng": 32.5338,
    "distance": calcMinDistance(45.3789, 32.5338),
    "ru": {
      "region": "АР Крым, Черноморский район, с. Оленевка, мыс Тарханкут (оккупированная территория)",
      "target": "Наземный ретранслятор управления ударными БПЛА типа «Герань» и «Гербера»",
      "category": "ВПК",
      "weapon": "Дрон / Высокоточный удар",
      "details": "В ночь на 17 августа 2026 года Силы обороны Украины нанесли точечный удар по военному объекту связи на Тарханкутском полуострове в районе села Оленевка в Крыму. На объекте располагался мощный наземный автоматизированный ретранслятор, который российские военные развернули для расширения радиуса действия и онлайн-корректировки траекторий ударных БПЛА типа «Герань-2» и дронов «Гербера». Этот узел связи позволял операторам перенаправлять беспилотники в обход позиций украинской ПВО во время атак на Одесскую, Николаевскую и Херсонскую области. В результате попадания украинского средства поражения антенно-мачтовые сооружения и ретрансляционные блоки были уничтожены. Генштаб ВСУ подтвердил ликвидацию объекта. Уничтожение ретранслятора существенно снизило эффективность российских дроновых налетов через Черноморский коридор.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT, СМИ"
    },
    "uk": {
      "region": "АР Крим, Чорноморський район, с. Оленівка, мис Тарханкут (окупована територія)",
      "target": "Наземний ретранслятор управління ударними БпЛА типу «Герань» та «Гербера»",
      "category": "ВПК",
      "weapon": "Дрон / Високоточний удар",
      "details": "У ніч проти 17 серпня 2026 року Сили оборони України завдали точкового удару по військовому об'єкту зв'язку на Тарханкутському півострові в районі села Оленівка в Криму. На об'єкті розміщувався потужний наземний автоматизований ретранслятор, розгорнутий російськими військовими для розширення радіуса дії та онлайн-коригування траєкторій польоту ударних БпЛА типу «Герань-2» і дронів «Гербера». Цей вузол зв'язку дозволяв операторам перенаправляти безпілотники в обхід позицій української ППО під час атак на Одеську, Миколаївську та Херсонську області. Унаслідок влучання українського засобу ураження антенно-щоглові споруди та апаратні блоки ретранслятора були повністю знищені. Генштаб ЗСУ підтвердив ліквідацію об'єкта, що суттєво послабило координацію ворожих дронових нальотів через Чорноморський коридор.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT, ЗМІ"
    },
    "en": {
      "region": "Crimea, Chornomorske District, Olenivka, Cape Tarkhankut (Occupied Territory)",
      "target": "Ground Relay Station for Geran and Gerbera Strike UAV Guidance",
      "category": "Military",
      "weapon": "Drone / Precision Strike",
      "details": "On the night of August 17, 2026, the Ukrainian Defense Forces launched a precision strike against a Russian military communications node near Olenivka on Cape Tarkhankut in western Crimea. The facility hosted an automated high-frequency ground relay and booster terminal deployed to extend operational control ranges and provide in-flight trajectory adjustments for Geran-2 kamikaze drones and Gerbera decoy/strike UAVs. The relay was crucial for rerouting swarms around Ukrainian air defense sectors during raids on Odesa, Mykolaiv, and Kherson Oblasts. Direct precision hits pulverized the antenna mast structures and fried the transmission electronics. The General Staff of the Armed Forces of Ukraine officially verified the total neutralisation of the post, degrading Russian drone guidance networks across the northern Black Sea littoral.",
      "source": "General Staff of AFU, GUR MO, OSINT, Media"
    }
  },
  {
    "date": "17.08.2026",
    "lat": 46.3197,
    "lng": 31.6375,
    "distance": calcMinDistance(46.3197, 31.6375),
    "ru": {
      "region": "Херсонская область, Скадовский район, Тендровская коса (оккупированная территория)",
      "target": "Пункт коммуникации и электропитания ретранслятора БПЛА ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 17 августа 2026 года подразделения Сил обороны Украины нанесли результативный удар по передовой военной позиции российских войск на Тендровской косе в Херсонской области на расстоянии около 75 км от Херсона. Данная изолированная точка использовалась оккупантами для размещения автономного пункта коммуникации, защищенной связи и дизель-генераторного энергоснабжения морского ретранслятора БПЛА. С его помощью обеспечивалось управление разведывательными и ударными дронами, действовавшими в устье Днепра и северо-западной части Черного моря. Точный удар украинских ударных дронов уничтожил генераторную станцию, силовые кабели и оборудование коммутации, вызвав возгорание и полное обесточивание ретрансляционного комплекса. Сводка Генштаба ВСУ подтвердила ликвидацию узла, что ослепило передовую радиоэлектронную сеть врага на побережье.",
      "source": "Генштаб ВСУ, ВМС ВСУ, OSINT, СМИ"
    },
    "uk": {
      "region": "Херсонська область, Скадовський район, Тендрівська коса (окупована територія)",
      "target": "Пункт комунікації та електроживлення ретранслятора БпЛА ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 17 серпня 2026 року підрозділи Сил оборони України завдали результативного удару по передовій військовій позиції російських військ на Тендрівській косі в Херсонській області на відстані близько 75 км від Херсона. Ця ізольована точка використовувалася окупантами для розміщення автономного пункту комунікації, захищеного зв'язку та дизель-генераторного енергоживлення морського ретранслятора БпЛА. За його допомогою забезпечувалося управління розвідувальними та ударними дронами у гирлі Дніпра та північно-західній частині Чорного моря. Влучний удар українських дронів знищив генераторну станцію, силові кабелі та комутаційну апаратуру, спричинивши пожежу і повне знеструмлення комплексу. Зведення Генштабу ЗСУ підтвердило ліквідацію вузла, що суттєво порушило радіоелектронний контроль ворога над прибережним районом.",
      "source": "Генштаб ЗСУ, ВМС ЗСУ, OSINT, ЗМІ"
    },
    "en": {
      "region": "Kherson Oblast, Skadovsk District, Tendra Spit (Occupied Territory)",
      "target": "Forward Communications and Power Node for Drone Relay Station of Russian Forces",
      "category": "Military",
      "weapon": "Drone",
      "details": "On the night of August 17, 2026, Ukrainian Defense Forces delivered a precision strike against an isolated Russian military staging post on the Tendra Spit in Kherson Oblast, roughly 75 km from Kherson. The coastal outpost hosted an autonomous communications node, secure radio routing hardware, and heavy diesel generation units supplying continuous power to a maritime UAV repeater station. The site served to maintain constant datalinks with Russian reconnaissance and strike drones operating across the Dnipro estuary and the northwestern Black Sea corridor. Direct drone hits blew up the generator shelters and burned out the power switching panels, cutting all electrical supply and taking the relay offline. The General Staff of the Armed Forces of Ukraine verified the destruction of the node, crippling Russian tactical drone communications along the coastline.",
      "source": "General Staff of AFU, Ukrainian Navy, OSINT, Media"
    }
  },
  {
    "date": "17.08.2026",
    "lat": 55.8365,
    "lng": 38.3564,
    "distance": calcMinDistance(55.8365, 38.3564),
    "ru": {
      "region": "Московская область, Богородский г.о., г. Ногинск (логопарк «Атлант-Парк»)",
      "target": "Логистический распределительный комплекс Wildberries (Логопарк «Атлант-Парк»)",
      "category": "Логистический центр",
      "weapon": "Дрон",
      "details": "Вечером 17 августа 2026 года в ходе начала массированной атаки украинских дальнобойных БПЛА на Московский регион был поражен крупный складской комплекс маркетплейса Wildberries в индустриальном парке «Атлант-Парк» в Ногинске на удалении свыше 540 км от границы с Украиной. Данный логистический хаб площадью более 100 тысяч квадратных метров являлся одним из узловых распределительных центров Подмосковья, обслуживавшим грузопотоки электроники, спецоборудования и товаров двойного назначения. В результате прямого попадания ударного дрона были пробиты внешние ограждающие конструкции склада, разрушена стена здания и вспыхнул пожар в складских секциях. Администрация экстренно эвакуировала персонал, работа объекта была временно парализована. В подмосковных округах и столичных аэропортах вводились экстренные планы безопасности из-за масштабного налета дронов.",
      "source": "OSINT (Astra, Baza), СМИ РФ, оперативные службы"
    },
    "uk": {
      "region": "Московська область, Богородський м.о., м. Ногінськ (логопарк «Атлант-Парк»)",
      "target": "Логістичний розподільчий комплекс Wildberries (Логопарк «Атлант-Парк»)",
      "category": "Логістичний центр",
      "weapon": "Дрон",
      "details": "Увечері 17 серпня 2026 року під час початку масованої атаки українських далекобійних БпЛА на Московський регіон було уражено великий складський комплекс маркетплейсу Wildberries в індустріальному парку «Атлант-Парк» у Ногінську на відстані понад 540 км від кордону з Україною. Цей логістичний хаб площею понад 100 тисяч квадратних метрів був одним із ключових розподільчих центрів Підмосков'я, який обслуговував вантажопотоки електроніки, спецобладнання та товарів подвійного призначення. У результаті прямого влучання ударного дрона було пробито зовнішні огороджувальні конструкції складу, зруйновано стіну будівлі та спалахнула пожежа у складських секціях. Персонал терміново евакуювали, роботу об'єкта було призупинено. У підмосковних округах та столичних аеропортах вводилися екстрені безпекові плани через масштабний наліт дронів.",
      "source": "OSINT (Astra, Baza), ЗМІ РФ, оперативні служби"
    },
    "en": {
      "region": "Moscow Oblast, Bogorodsky District, Noginsk (Atlant-Park Logistics Hub)",
      "target": "Wildberries Central Logistics Distribution Complex at Atlant-Park",
      "category": "Logistics Hub",
      "weapon": "Drone",
      "details": "On the evening of August 17, 2026, during the opening phase of a massive long-range drone operation against the Moscow region, a Ukrainian strike UAV slammed into a major Wildberries warehouse at the Atlant-Park industrial logistics center in Noginsk, over 540 km from Ukraine's border. Spanning over 100,000 square meters, the logistical facility serves as a vital warehousing and freight hub handling electronics, telecommunication equipment, and dual-use supply chains across central Russia. A direct drone strike breached the exterior structural walls and triggered an active fire inside the packaging and storage bays. Facility management carried out an immediate evacuation of all personnel, halting hub processing. The drone swarm prompted emergency civil defense measures and widespread flight halts at Moscow airports throughout the evening.",
      "source": "OSINT (Astra, Baza), Russian Media, Emergency Services"
    }
  }
];

// Check details lengths (must be strictly between 600 and 1000 characters)
let hasErrors = false;
newItems.forEach((item, idx) => {
  ['ru', 'uk', 'en'].forEach(lang => {
    const len = item[lang].details.length;
    console.log(`Item ${idx} [${item[lang].target.substring(0, 35)}...] (${lang}) details length: ${len} chars`);
    if (len < 600 || len > 1000) {
      console.error(`ERROR: Item ${idx} (${lang}) length ${len} is outside 600-1000 range!`);
      hasErrors = true;
    }
  });
});

if (hasErrors) {
  console.error("Length check failed!");
  process.exit(1);
}

// Update data.js
const content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
let data = new Function('return ' + dataStr)();

// Remove existing 17.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '17.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 17 August 2026! Total items in data.js: ${data.length}`);
