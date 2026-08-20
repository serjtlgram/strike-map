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
    "date": "20.08.2026",
    "lat": 55.5786,
    "lng": 51.9365,
    "distance": calcMinDistance(55.5786, 51.9365),
    "ru": {
      "region": "Республика Татарстан, г. Нижнекамск (Промзона)",
      "target": "Нефтеперерабатывающий комплекс «ТАНЕКО» (АО «ТАНЕКО», ПАО «Татнефть»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 20 августа 2026 года дальнобойные ударные дроны Сил обороны Украины и подразделений ГУР МО атаковали крупный нефтеперерабатывающий комплекс «ТАНЕКО» компании «Татнефть» в промышленной зоне Нижнекамска (Республика Татарстан). Дистанция до цели превысила 1200 км от государственной границы. Беспилотники самолетного типа преодолели эшелонированную объектовою ПВО и точно ударили по технологической зоне переработки углеводородного сырья. На территории предприятия начался пожар, взрывы повредили производственные блоки и трубные эстакады. НПЗ «ТАНЕКО» входит в пятерку крупнейших нефтеперерабатывающих заводов РФ с мощностью первичной переработки свыше 16 млн тонн нефти в год. Предприятие выпускает авиакеросин, дизельное топливо и бензины, снабжая группировки ВС РФ и военную технику. Местные власти объявили сигнал воздушной тревоги и эвакуировали персонал. Удар нарушил цикл переработки нефти и снизил выпуск светлых нефтепродуктов.",
      "source": "Генштаб ВСУ, ГУР МО Украины, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Республіка Татарстан, м. Нижньокамськ (Промзона)",
      "target": "Нафтопереробний комплекс «ТАНЕКО» (АТ «ТАНЕКО», ПАТ «Татнафта»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч на 20 серпня 2026 року далекобійні ударні дрони Сил оборони України та підрозділів ГУР МО атакували великий нафтопереробний комплекс «ТАНЕКО» компанії «Татнафта» в промисловій зоні Нижньокамська (Республіка Татарстан). Відстань до цілі перевищила 1200 км від державного кордону. Безпілотники літакового типу подолали ешелоновану протиповітряну оборону та влучили у технологічну зону переробки вуглеводневої сировини. На території заводу спалахнула пожежа, вибухи пошкодили технологічні блоки та магістральні трубопроводи. НПЗ «ТАНЕКО» входить до п'ятірки найбільших нафтопереробних підприємств РФ із річною потужністю понад 16 млн тонн нафти. Підприємство виготовляє авіагас, дизельне пальне та бензини для потреб угруповань російської армії. Місцева влада оголошувала тривогу й провела термінову евакуацію персоналу. Влучання дронів порушило технологічний цикл переробки та знизило випуск пального.",
      "source": "Генштаб ЗСУ, ГУР МО України, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Republic of Tatarstan, Nizhnekamsk (Industrial Zone)",
      "target": "TANECO Oil Refining Complex (JSC TANECO, PJSC Tatneft)",
      "category": "Refinery",
      "weapon": "Drone",
      "details": "On the night of August 20, 2026, long-range strike drones operated by the Ukrainian Defense Forces and the Defense Intelligence of Ukraine (HUR) launched an attack against the major TANECO oil refining complex owned by Tatneft in Nizhnekamsk, Republic of Tatarstan. The target was situated more than 1,200 km from the international border. Fixed-wing UAVs penetrated local air defense systems and scored direct hits on crude processing infrastructure. Explosions triggered an intense fire across the refinery grounds, damaging piping bridges and refinery process units. TANECO ranks among the top five largest refineries in Russia, with an annual crude processing capacity exceeding 16 million tons. It produces vast quantities of aviation fuel, diesel, and motor gasoline supplied to Russian armed forces. Local authorities activated emergency alerts and evacuated plant workers. The strike disrupted crude refining operations and reduced overall refined fuel output.",
      "source": "General Staff of AFU, HUR MOU, OSINT (Astra), Media"
    }
  },
  {
    "date": "20.08.2026",
    "lat": 45.1278,
    "lng": 36.6811,
    "distance": calcMinDistance(45.1278, 36.6811),
    "ru": {
      "region": "Краснодарский край, Темрюкский район (пос. Волна)",
      "target": "Морской нефтегазовый терминал «Таманьнефтегаз» (ОТЭКО)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "20 августа 2026 года группа украинских ударных беспилотников провела операцию по поражению морского перевалочного терминала «Таманьнефтегаз» группы ОТЭКО в районе поселка Волна на Таманском полуострове (Краснодарский край). Комплекс в порту Тамань является важнейшим южным логистическим хабом РФ по экспорту и перевалке нефти, мазута, сжиженных углеводородных газов и дизтоплива. В результате серии попаданий дронов-камикадзе вспыхнул масштабный пожар на территории резервуарного парка. Огонь охватил емкости с нефтепродуктами, повреждены магистральные трубопроводы подачи топлива и насосные эстакады. Перевалочная мощность терминала достигает 20 млн тонн нефтепродуктов и сжиженного газа в год. Этот объект активно используется для снабжения Черноморского флота и южной группировки войск РФ. Пожарные расчеты экстренно стянули силы для локализации возгорания, отгрузка топлива в танкеры была остановлена.",
      "source": "Генштаб ВСУ, ГУР МО Украины, OSINT (Astra), СМИ РФ"
    },
    "uk": {
      "region": "Краснодарський край, Темрюцький район (сел. Волна)",
      "target": "Морський нафтогазовий термінал «Таманьнафтогаз» (ОТЕКО)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "20 серпня 2026 року група українських ударних безпілотників провела операцію з ураження морського перевалочного термінала «Таманьнафтогаз» групи ОТЕКО біля селища Волна на Таманському півострові (Краснодарський край). Портовий комплекс у Тамані є одним із ключових південних логістичних вузлів РФ з експорту та перевалки нафти, мазуту, зрідженого газу й дизельного пального. Унаслідок серії влучань дронів-камікадзе спалахнула масштабна пожежа на території резервуарного парку. Вогонь охопив місткості з нафтопродуктами, зазнали пошкоджень магістральні трубопроводи перекачування та насосні естакади. Потужність перевалки термінала сягає 20 млн тонн нафтопродуктів і газу на рік. Об'єкт відіграє стратегічну роль у постачанні пального Чорноморському флоту та окупаційним військам на півдні. Пожежні підрозділи залучили спецтехніку для гасіння, морське відвантаження пального було зупинено.",
      "source": "Генштаб ЗСУ, ГУР МО України, OSINT (Astra), ЗМІ РФ"
    },
    "en": {
      "region": "Krasnodar Krai, Temryuksky District (Volna settlement)",
      "target": "Tamanneftegas Marine Oil & Gas Terminal (OTEKO)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On August 20, 2026, Ukrainian long-range strike UAVs carried out a strike operation against the Tamanneftegas marine transshipment terminal operated by OTEKO near Volna settlement on the Taman Peninsula, Krasnodar Krai. The marine facility in the Port of Taman serves as a critical southern logistics node for Russian exports and transshipment of crude oil, fuel oil, liquefied petroleum gas (LPG), and diesel. Direct hits by suicide drones ignited a major fire across the facility's fuel storage farm. The blaze engulfed oil storage tanks and severely damaged fuel pumping transfer pipelines and loading racks. The terminal has an annual transshipment capacity of up to 20 million tons of oil products and LPG, playing an essential role in fueling the Black Sea Fleet and southern military deployments. Emergency firefighting teams were dispatched to contain the blaze, while maritime fuel loading operations were halted.",
      "source": "General Staff of AFU, HUR MOU, OSINT (Astra), Russian Media"
    }
  },
  {
    "date": "20.08.2026",
    "lat": 46.0617,
    "lng": 38.2522,
    "distance": calcMinDistance(46.0617, 38.2522),
    "ru": {
      "region": "Краснодарский край, г. Приморско-Ахтарск",
      "target": "Военный аэродром Приморско-Ахтарск (пусковые площадки БПЛА и РЛС «Небо-У» / «Ниобий»)",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "В ночь на 20 августа 2026 года Силы обороны Украины и спецподразделения ГУР МО нанесли комбинированный удар беспилотниками по военному аэродрому в городе Приморско-Ахтарск Краснодарского края. Авиабаза является постоянным местом дислокации 960-го штурмового авиаполка (Су-25СМ3) и одним из главных стартовых районов, откуда ВС РФ регулярно запускают дроны-камикадзе типа Shahed-136/«Герань-2» по Украине. В ходе атаки украинские ударные БПЛА успешно поразили пусковые площадки и склады предполетной подготовки дронов, вызвав вторичные детонации. Также высокоточными попаданиями были выведены из строя две дорогостоящие радиолокационные станции: мобильная РЛС дежурного режима 55Ж6У «Небо-У» и трехкоординатная станция 55Ж6УМ «Ниобий». Уничтожение этих РЛС существенно ослабило контроль воздушного пространства РФ над Азовским морем и прибрежной полосой.",
      "source": "Генштаб ВСУ, ГУР МО Украины, OSINT (Крымский ветер, Astra), СМИ"
    },
    "uk": {
      "region": "Краснодарський край, м. Приморсько-Ахтарськ",
      "target": "Військовий аеродром Приморсько-Ахтарськ (пускові майданчики БпЛА та РЛС «Небо-У» / «Ніобій»)",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "У ніч на 20 серпня 2026 року Сили оборони України та спецпідрозділи ГУР МО здійснили комбінований удар безпілотниками по військовому аеродрому в місті Приморсько-Ахтарськ Краснодарського краю. Авіабаза слугує постійним пунктом базування 960-го штурмового авіаполку (Су-25СМ3) та є одним із головних пускових майданчиків, звідки війська РФ систематично запускають дрони-камікадзе типу Shahed-136/«Герань-2» по Україні. Під час операції українські ударні БпЛА уразили стартові позиції та склади передпольотної підготовки безпілотників, спричинивши вторинну детонацію. Також точними ударами було виведено з ладу дві цінні радіолокаційні станції: мобільну РЛС чергового режиму 55Ж6У «Небо-У» та трикоординатну станцію 55Ж6УМ «Ніобій». Знищення цих комплексів значно послабило можливості контролю повітряного простору РФ над Азовським морем.",
      "source": "Генштаб ЗСУ, ГУР МО України, OSINT (Кримський вітер, Astra), ЗМІ"
    },
    "en": {
      "region": "Krasnodar Krai, Primorsko-Akhtarsk",
      "target": "Primorsko-Akhtarsk Military Airfield (UAV Launch Sites and Nebo-U / Niobiye Radars)",
      "category": "Military Airfield",
      "weapon": "Drone",
      "details": "On the night of August 20, 2026, the Ukrainian Defense Forces alongside HUR special units conducted a combined drone strike against the military airfield in Primorsko-Akhtarsk, Krasnodar Krai. The airbase hosts the 960th Assault Aviation Regiment (Su-25SM3 aircraft) and functions as one of the primary launch sites used by Russian forces to deploy Shahed-136/Geran-2 loitering munitions against Ukrainian cities. During the strike, Ukrainian UAVs hit drone launch facilities and pre-flight assembly shelters, triggering secondary explosions. Precision impacts also neutralized two advanced radar systems stationed at the base: a mobile 55Zh6U Nebo-U early-warning radar and a 55Zh6UM Niobiye 3D radar system. The destruction of these radar units significantly degraded Russian airspace surveillance and air defense coordination over the Sea of Azov and coastal sectors.",
      "source": "General Staff of AFU, HUR MOU, OSINT (Crimean Wind, Astra), Media"
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

// Remove existing 20.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '20.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 20 August 2026! Total items in data.js: ${data.length}`);
