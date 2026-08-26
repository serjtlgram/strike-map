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
    "date": "24.08.2026",
    "lat": 50.8580,
    "lng": 39.0620,
    "distance": calcMinDistance(50.8580, 39.0620),
    "ru": {
      "region": "Воронежская область, г. Острогожск",
      "target": "Полевой склад боеприпасов группировки войск «Запад» ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 24 августа 2026 года Главное управление разведки МО Украины успешно атаковало ударными беспилотниками крупный полевой склад боеприпасов в районе Острогожска Воронежской области. На объекте группировки войск «Запад» противник складировал свыше пяти тысяч тонн боеприпасов: артиллерийские снаряды различных калибров, танковые выстрелы, зенитные управляемые ракеты и патроны. Точные прилеты украинских БПЛА вызвали масштабный пожар с непрерывной вторичной детонацией, продолжавшейся почти двое суток. Власти региона ввели режим чрезвычайной ситуации на территории трех поселений и эвакуировали свыше двухсот жителей. Было нарушено электроснабжение прилегающих районов, повреждена инфраструктура военного полигона. Уничтожение арсенала сорвало запланированное снабжение подразделений ВС РФ на передовой.",
      "source": "ГУР МО Украины, губернатор Воронежской области, ASTRA, OSINT"
    },
    "uk": {
      "region": "Воронезька область, м. Острогозьк",
      "target": "Польовий склад боєприпасів угруповання військ «Запад» ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч на 24 серпня 2026 року Головне управління розвідки МО України успішно атакувало ударними безпілотниками великий польовий склад боєприпасів біля міста Острогозьк Воронезької області. На об'єкті угруповання військ «Запад» противник накопичив понад п'ять тисяч тонн боєприпасів: артилерійські снаряди, танкові постріли, зенітні керовані ракети та набої. Точні влучання українських дронів спричинили масштабну пожежу з безперервною вторинною детонацією, що тривала майже дві доби. Влада регіону оголосила режим надзвичайної ситуації на території трьох поселень та екстрено евакуювала понад двісті жителів. Було знеструмлено прилеглі селища та пошкоджено інфраструктуру військового полігону. Знищення цього арсеналу зірвало постачання снарядів окупаційним військам на передовій.",
      "source": "ГУР МО України, губернатор Воронезької області, ASTRA, OSINT"
    },
    "en": {
      "region": "Voronezh Oblast, Ostrogozhsk",
      "target": "Field Ammunition Depot of the Russian 'West' Group of Forces",
      "category": "Military",
      "weapon": "Drone",
      "details": "On the night of August 24, 2026, the Main Directorate of Intelligence (HUR) of Ukraine executed a targeted drone strike against a major forward ammunition depot near Ostrogozhsk, Voronezh Oblast. The targeted facility of Russia's 'West' military group stockpiled over five thousand tons of munitions, including artillery shells, tank rounds, surface-to-air missiles, and small arms ammunition. Precision drone impacts ignited a massive fire triggering non-stop secondary detonations lasting nearly two full days. Local authorities declared a state of emergency across three settlements and evacuated over two hundred residents from danger zones. Power lines and military test range infrastructure suffered extensive damage. The complete destruction of this depot severely disrupted munitions replenishment for frontline Russian units.",
      "source": "HUR MOU, Voronezh Oblast Governor, ASTRA, OSINT"
    }
  },
  {
    "date": "24.08.2026",
    "lat": 44.9285,
    "lng": 38.9140,
    "distance": calcMinDistance(44.9285, 38.9140),
    "ru": {
      "region": "Республика Адыгея, п. Энем",
      "target": "Логистический комплекс маркетплейса «Ozon» («Ozon Адыгея»)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "В ночь на 24 августа 2026 года дальнобойные украинские беспилотники нанесли результативный удар по крупнейшему логистическому комплексу маркетплейса Ozon в районе поселка Энем в Адыгее. Распределительный центр общей площадью свыше 91 тысячи квадратных метров играл стратегическую роль в снабжении Южного военного округа, обеспечивая накопление и отправку снаряжения, электроники и грузов двойного назначения. В результате попаданий дронов на территории складских терминалов начался сильный пожар в секциях хранения и сортировки отправлений. Персонал дежурной смены был срочно эвакуирован, работа хаба оказалась парализована, а руководство компании временно заблокировало оформление заказов со склада. Поражение объекта сорвало оперативные цепочки материально-технического обеспечения российских формирований.",
      "source": "Генштаб ВСУ, власти Республики Адыгея, ASTRA, OSINT"
    },
    "uk": {
      "region": "Республіка Адигея, смт Енем",
      "target": "Логістичний комплекс маркетплейса «Ozon» («Ozon Адигея»)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "У ніч на 24 серпня 2026 року далекобійні українські безпілотники завдали результативного удару по найбільшому логістичному комплексу маркетплейса Ozon біля селища Енем в Адигеї. Розподільчий центр загальною площею понад 91 тисячу квадратних метрів відігравав стратегічну роль у логістиці Південного військового округу, забезпечуючи перевалку військової амуніції, електроніки та вантажів подвійного призначення. Внаслідок влучань безпілотників у складських терміналах спалахнула сильна пожежа в блоках зберігання та сортування продукції. Персонал чергової зміни терміново евакуювали, роботу хабу було повністю заблоковано, а видачу замовлень призупинено. Удар по об'єкту завдав відчутного удару по налагоджених ланцюгах постачання матеріально-технічного майна армії РФ.",
      "source": "Генштаб ЗСУ, влада Республіки Адигея, ASTRA, OSINT"
    },
    "en": {
      "region": "Republic of Adygea, Enem",
      "target": "Ozon Logistics Fulfillment Distribution Center ('Ozon Adygea')",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the night of August 24, 2026, Ukrainian long-range strike drones struck the flagship Ozon logistics hub located near the settlement of Enem in Adygea. Spanning over 91,000 square meters, this major distribution center served as a critical logistical node for the Southern Military District, processing dual-use electronics, communication gear, and tactical equipment. Precision drone strikes ignited extensive fires across warehousing and automated sorting bays. Shift workers were rapidly evacuated as the complex halted operations, prompting the marketplace to suspend regional order processing. The crippling of this modern logistical hub delivered a major blow to rear supply chains supporting Russian military forces across the southern operational theater.",
      "source": "General Staff of AFU, Adygea Regional Authorities, ASTRA, OSINT"
    }
  },
  {
    "date": "24.08.2026",
    "lat": 44.7215,
    "lng": 41.9752,
    "distance": calcMinDistance(44.7215, 41.9752),
    "ru": {
      "region": "Ставропольский край, г. Невинномысск",
      "target": "Фулфилмент-центр маркетплейса «Ozon» в индустриальном парке «Невинномысск»",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "В ночь на 24 августа 2026 года группа украинских ударных БПЛА атаковала крупный региональный фулфилмент-центр маркетплейса Ozon в индустриальном парке города Невинномысск Ставропольского края. Современный складской комплекс класса «А» площадью более 93 тысяч квадратных метров являлся ключевым хабом распределения материальных потоков на Северном Кавказе. Дроны-камикадзе поразили складские блоки по улице Приозёрной, вызвав возгорание кровли и технологических помещений хранения отправлений. Губернатор края и оперативные службы подтвердили воздушный налет на городскую промзону. В результате атаки были существенно повреждены складские мощности и нарушена логистика поставок техники, квадрокоптеров и снаряжения, поставляемых через коммерческие сети для фронтовых подразделений ВС РФ.",
      "source": "Губернатор Ставропольского края, ASTRA, СМИ РФ, OSINT"
    },
    "uk": {
      "region": "Ставропольський край, м. Невинномиськ",
      "target": "Фулфілмент-центр маркетплейса «Ozon» в індустріальному парку «Невинномиськ»",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "У ніч на 24 серпня 2026 року група українських ударних БпЛА атакувала великий регіональний фулфілмент-центр маркетплейса Ozon в індустріальному парку міста Невинномиськ Ставропольського краю. Сучасний складський комплекс класу «А» площею понад 93 тисячі квадратних метрів був ключовим хабом розподілу матеріальних ресурсів на Північному Кавказі. Дрони-камікадзе уразили складські корпуси по вулиці Приозерній, спричинивши займання покрівлі та приміщень зберігання вантажів. Губернатор краю та екстрені служби підтвердили факт повітряного удару по міській промзоні. Внаслідок атаки було суттєво пошкоджено складські потужності та дезорганізовано логістику постачання техніки, квадрокоптерів і спорядження для підрозділів російської армії.",
      "source": "Губернатор Ставропольського краю, ASTRA, ЗМІ РФ, OSINT"
    },
    "en": {
      "region": "Stavropol Krai, Nevinnomyssk",
      "target": "Ozon Regional Fulfillment Center in Nevinnomyssk Industrial Park",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the night of August 24, 2026, Ukrainian attack UAVs targeted the extensive Ozon regional fulfillment center situated within the Nevinnomyssk industrial park in Stavropol Krai. Boasting over 93,000 square meters of Class-A warehousing space, the complex functioned as a primary logistics artery channeling goods and specialized equipment throughout the North Caucasus. Kamikaze drones struck storage blocks along Priozyornaya Street, triggering blazes across roof structures and cargo dispatch areas. Regional officials acknowledged the aerial raid against the industrial district. The strike inflicted substantial structural damage and disrupted commercial logistics pipelines routinely utilized to procure civilian drones, tactical gear, and electronic components for the Russian military.",
      "source": "Stavropol Krai Governor, ASTRA, Russian Media, OSINT"
    }
  },
  {
    "date": "24.08.2026",
    "lat": 43.0238,
    "lng": 47.3195,
    "distance": calcMinDistance(43.0238, 47.3195),
    "ru": {
      "region": "Республика Дагестан, пос. Тюбе (Кумторкалинский район)",
      "target": "Логистический хаб маркетплейса «Ozon» в индустриальном парке «Тюбе»",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "24 августа 2026 года украинские дальние ударные беспилотники атаковали новейший складской логистический комплекс маркетплейса Ozon в индустриальном парке «Тюбе» в Республике Дагестан. Дальность удара от границы Украины превысила 900 километров, став свидетельством расширения радиуса поражения объектов тылового обеспечения. Масштабный хаб площадью около 130 тысяч квадратных метров служил опорным распределительным узлом Прикаспийского региона и связующим звеном параллельного импорта. В результате падения и взрывов БПЛА возник пожар в складских отсеках и погрузочной зоне терминала. Инцидент вызвал панику среди персонала и приостановку логистических операций. Удар продемонстрировал незащищенность стратегических тыловых узлов снабжения РФ даже в глубоких южных регионах.",
      "source": "Власти Республики Дагестан, ASTRA, СМИ РФ, OSINT"
    },
    "uk": {
      "region": "Республіка Дагестан, сел. Тюбе (Кумторкалинський район)",
      "target": "Логістичний хаб маркетплейса «Ozon» в індустріальному парку «Тюбе»",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "24 серпня 2026 року українські далекобійні ударні безпілотники атакували новітній логістичний комплекс маркетплейса Ozon в індустріальному парку «Тюбе» в Республіці Дагестан. Відстань удару від кордону України склала понад 900 кілометрів, підтвердивши зростання радіуса дії українських дронів по ворожому тилу. Масштабний хаб площею близько 130 тисяч квадратних метрів був ключовим вузлом Прикаспійського регіону та важливим каналом паралельного імпорту товарів подвійного призначення. Внаслідок вибухів БпЛА виникла пожежа у складських відсіках та зоні навантажувальних терміналів. Інцидент призвів до зупинки логістичних операцій і засвідчив високу вразливість російської інфраструктури постачання у глибокому тилу.",
      "source": "Влада Республіки Дагестан, ASTRA, ЗМІ РФ, OSINT"
    },
    "en": {
      "region": "Republic of Dagestan, Tyube (Kumtorkalinsky District)",
      "target": "Ozon Logistics Hub in Tyube Industrial Park",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On August 24, 2026, Ukrainian long-range strike UAVs struck the newly built Ozon logistics hub in the Tyube Industrial Park in Dagestan. Traveling a flight distance exceeding 900 kilometers from Ukraine, the operation highlighted the expanding operational reach of Ukrainian deep-strike assets. Encompassing roughly 130,000 square meters, this vast logistics hub served as the primary Caspian distribution node and a vital channel for parallel import logistics of dual-use hardware. Drone explosions triggered fires across warehousing modules and loading dock bays, paralyzing site operations. The precision strike demonstrated the persistent vulnerability of critical Russian supply arteries even across deeply recessed southern territories.",
      "source": "Dagestan Authorities, ASTRA, Russian Media, OSINT"
    }
  },
  {
    "date": "24.08.2026",
    "lat": 45.3470,
    "lng": 32.5020,
    "distance": calcMinDistance(45.3470, 32.5020),
    "ru": {
      "region": "АР Крым, мыс Тарханкут",
      "target": "Военный объект и позиции ПВО ВС РФ (боевой дебют ракеты-дрона «Паляниця»)",
      "category": "ВПК",
      "weapon": "Ракета-дрон «Паляниця»",
      "details": "24 августа 2026 года, в День Независимости Украины, Силы обороны Украины осуществили первое успешное боевое применение новейшей украинской дальнобойной ракеты-дрона «Паляниця» по военному объекту оккупантов в Крыму. Точным ударом был поражен пункт базирования подразделений ПВО и радиолокационных средств ВС РФ на мысе Тарханкут. Скоростной реактивный дрон украинской разработки преодолел российские заслоны противовоздушной обороны и нанес прямое огневое поражение защищенной военной инфраструктуре, вызвав пожар и детонацию на боевой позиции. О первом результативном пуске нового оружия официально объявило высшее военно-политическое руководство Украины. Удар подтвердил высокую эффективность новой ракетной системы в преодолении ПВО и уничтожении приоритетных военных целей в Крыму.",
      "source": "Президент Украины, Генштаб ВСУ, Минстратегпром, OSINT"
    },
    "uk": {
      "region": "АР Крим, мис Тарханкут",
      "target": "Військовий об'єкт і позиції ППО ЗС РФ (бойовий дебют ракети-дрона «Паляниця»)",
      "category": "ВПК",
      "weapon": "Ракета-дрон «Паляниця»",
      "details": "24 серпня 2026 року, у День Незалежності України, Сили оборони України здійснили перше успішне бойове застосування новітньої української далекобійної ракети-дрона «Паляниця» по військовому об'єкту окупантів у Криму. Влучним ударом було уражено пункт базування підрозділів ППО та радіолокаційних засобів ЗС РФ на мисі Тарханкут. Швидкісний реактивний безпілотник вітчизняної розробки пробив російську систему ППО та завдав прямого вогневого ураження захищеній інфраструктурі, спричинивши пожежу й детонацію на бойовій позиції. Про перший результативний пуск нової зброї офіційно повідомило вище військово-політичне керівництво України. Удар засвідчив високу ефективність ракетної системи у знешкодженні пріоритетних цілей у Криму.",
      "source": "Президент України, Генштаб ЗСУ, Мінстратегпром, OSINT"
    },
    "en": {
      "region": "Crimea, Cape Tarkhankut",
      "target": "Russian Air Defense Site and Military Facility (Combat Debut of 'Palianytsia' Drone-Missile)",
      "category": "Military",
      "weapon": "Drone-Missile 'Palianytsia'",
      "details": "On August 24, 2026, marking Ukraine's Independence Day, the Ukrainian Defense Forces executed the first successful combat employment of the domestically developed 'Palianytsia' long-range drone-missile against Russian military assets in Crimea. The strike successfully struck a fortified radar installation and air defense deployment site operated by Russian forces at Cape Tarkhankut. The high-speed, turbojet-powered strike weapon penetrated regional air defense screens, scoring a direct hit on critical military infrastructure that triggered fires and secondary explosions. The historic first operational strike was formally announced by Ukraine's top leadership. The successful mission demonstrated the weapon's effectiveness in penetrating dense air defenses and neutralizing high-value targets.",
      "source": "President of Ukraine, General Staff of AFU, MinStratProm, OSINT"
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

// Remove existing 24.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '24.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 24 August 2026! Total items in data.js: ${data.length}`);
