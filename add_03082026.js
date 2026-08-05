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

const items = [
  {
    "date": "03.08.2026",
    "lat": 50.5906,
    "lng": 36.5747,
    "distance": null,
    "ru": {
      "region": "Белгородская область, г. Белгород",
      "target": "БГТУ им. В. Г. Шухова — корпус разработки и подготовки операторов БПЛА",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 3 августа 2026 года Силы обороны Украины нанесли удар по корпусу БГТУ им. Шухова в Белгороде. По данным OSINT-источников, здание использовалось для разработки автоматизированных систем управления БПЛА на базе процессора «Миландр», а также как тренировочная площадка для операторов FPV-дронов — с сетками и полётными препятствиями. Беспилотники вызвали крупный пожар, уничтоживший значительную часть корпуса; врио губернатора Шуваев подтвердил атаку тремя БПЛА и повреждение «социального объекта», не раскрывая военного назначения здания. БГТУ летом 2026 года открыто рекламировал программы по проектированию беспилотников, в том числе для школьников. Удар на расстоянии около 40 км от линии фронта вывел из строя ключевую точку подготовки кадров для российской дроновой программы.",
      "source": "OSINT (Astra, Exilenova+), ЗМІ, врио губернатора Шуваев"
    },
    "uk": {
      "region": "Бєлгородська область, м. Бєлгород",
      "target": "БДТУ ім. В. Г. Шухова — корпус розробки та підготовки операторів БПЛА",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 3 серпня 2026 року Сили оборони України завдали удару по корпусу БДТУ ім. Шухова в Бєлгороді. За даними OSINT-джерел, будівля використовувалася для розробки автоматизованих систем управління БПЛА на базі процесора «Міландр» та як тренувальний майданчик для операторів FPV-дронів — із сітками й польотними перешкодами. Дрони спричинили велику пожежу, що знищила значну частину корпусу; в. о. губернатора Шуваєв підтвердив атаку трьома БПЛА та пошкодження «соціального об'єкта», не розкриваючи військового призначення будівлі. БДТУ влітку 2026 року відкрито рекламував програми з проектування безпілотників, зокрема курси для школярів. Удар на відстані близько 40 км від лінії фронту вивів з ладу ключову точку підготовки кадрів для російської дронової програми.",
      "source": "OSINT (Astra, Exilenova+), ЗМІ, в. о. губернатора Шуваєв"
    },
    "en": {
      "region": "Belgorod Oblast, Belgorod",
      "target": "BSTU (Shukhov University) — UAV Development and Operator Training Facility",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On the night of August 3, 2026, Ukrainian Defense Forces struck a building at Belgorod State Technological University named after V. G. Shukhov. According to Ukrainian and OSINT sources, the facility was used to design automated UAV control systems based on the Milandr processor, and served as a training ground for FPV drone operators — complete with nets and flight obstacles. The drone strike ignited a large fire that destroyed a substantial portion of the building. Acting Governor Alexander Shuvaev only confirmed an attack by three UAVs and damage to a \"social facility,\" without elaborating on its military use. The university itself had advertised UAV engineering programs in summer 2026, including courses for schoolchildren. Located just 40 km from the front line, the strike knocked out a key personnel training hub for Russia's drone program.",
      "source": "OSINT (Astra, Exilenova+), Media, Acting Governor Shuvaev"
    }
  },
  {
    "date": "03.08.2026",
    "lat": 56.0183,
    "lng": 40.1375,
    "distance": null,
    "ru": {
      "region": "Владимирская область, Собинский район (с. Хрястово)",
      "target": "Логистический распределительный центр Wildberries (с. Хрястово)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "Утром 3 августа 2026 года украинские ударные БПЛА поразили крупный логистический хаб Wildberries в селе Хрястово Собинского района Владимирской области. В результате попадания беспилотников на территории складского комплекса вспыхнул масштабный пожар, видимый с большого расстояния — клубы дыма фиксировали очевидцы и OSINT-аналитики. Губернатор Владимирской области Александр Авдеев подтвердил атаку и сообщил об одном получившем лёгкое ранение сотруднике. Складской комплекс в Хрястово общей площадью около 171 900 кв. м является одним из крупнейших объектов Wildberries и выполняет стратегическую роль в логистике между московским регионом, севером и северо-западом европейской России. По данным украинских источников, склады Wildberries использовались для реализации товаров двойного назначения и военного снаряжения. Объект находится примерно в 840 км от линии фронта; атака стала частью систематической кампании по разрушению логистической инфраструктуры РФ.",
      "source": "OSINT (Astra), губернатор Авдеев, Wildberries, СМИ"
    },
    "uk": {
      "region": "Владимирська область, Собинський район (с. Хрястово)",
      "target": "Логістичний розподільчий центр Wildberries (с. Хрястово)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "Вранці 3 серпня 2026 року українські ударні БПЛА уразили великий логістичний хаб Wildberries у селі Хрястово Собинського району Владимирської області. Внаслідок влучання безпілотників на території складського комплексу спалахнула масштабна пожежа, видима на великій відстані — стовпи диму фіксували очевидці та OSINT-аналітики. Губернатор Владимирської області Олександр Авдєєв підтвердив атаку та повідомив про одного легкопораненого співробітника. Складський комплекс у Хрястово загальною площею близько 171 900 кв. м є одним із найбільших об'єктів Wildberries і відіграє стратегічну роль у логістиці між московським регіоном, північчю та північним заходом Європейської Росії. За даними українських джерел, склади Wildberries використовувалися для реалізації товарів подвійного призначення та військового спорядження. Об'єкт знаходиться приблизно в 840 км від лінії фронту; атака стала частиною систематичної кампанії із руйнування логістичної інфраструктури РФ.",
      "source": "OSINT (Astra), губернатор Авдєєв, Wildberries, ЗМІ"
    },
    "en": {
      "region": "Vladimir Oblast, Sobinsky District (Khryastovo village)",
      "target": "Wildberries Logistics Distribution Center (Khryastovo)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the morning of August 3, 2026, Ukrainian strike UAVs hit the major Wildberries logistics hub in Khryastovo village, Sobinsky District, Vladimir Oblast. The drone impacts ignited a large-scale fire visible from a considerable distance, documented by eyewitnesses and OSINT analysts. Vladimir Oblast Governor Alexander Avdeev confirmed the attack and reported one employee with minor injuries. The Khryastovo warehouse complex, spanning approximately 171,900 square meters, is among Wildberries' largest facilities and plays a strategic logistics role linking the Moscow region with Russia's north and northwest. Ukrainian sources indicate that Wildberries warehouses were used to supply dual-use goods and military equipment to Russian forces. Located about 840 km from the front line, the strike was part of a systematic campaign targeting Russian logistics infrastructure.",
      "source": "OSINT (Astra), Governor Avdeev, Wildberries, Media"
    }
  },
  {
    "date": "03.08.2026",
    "lat": 50.4333,
    "lng": 36.9167,
    "distance": null,
    "ru": {
      "region": "Белгородская область, Яковлевский округ (с. Октябрьское)",
      "target": "Склад горюче-смазочных материалов (с. Октябрьское)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 3 августа 2026 года Силы обороны Украины нанесли удар БПЛА по складу горюче-смазочных материалов в районе Белгородской области. Поражение объекта ГСМ подтверждено в официальной сводке Генерального штаба ВСУ. Склад обеспечивал горючим воинские части, дислоцированные в Белгородской области и действующие на харьковском направлении. В результате прилёта возник пожар, зафиксированы вторичные детонации хранившегося топлива. Поскольку объект расположен в непосредственной близости от зоны боевых действий (около 40–60 км от фронта), его поражение напрямую затронуло оперативное топливоснабжение передовых группировок противника. Удар был частью скоординированной ночной волны атак на военно-логистическую инфраструктуру РФ, выполненных в ночь с 2 на 3 августа.",
      "source": "Генштаб ВСУ, OSINT (Astra)"
    },
    "uk": {
      "region": "Бєлгородська область, Яковлівський округ (с. Жовтневе)",
      "target": "Склад пально-мастильних матеріалів (с. Жовтневе)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 3 серпня 2026 року Сили оборони України завдали удару БПЛА по складу пально-мастильних матеріалів у Бєлгородській області. Ураження об'єкта ПММ підтверджено в офіційному зведенні Генерального штабу ЗСУ. Склад забезпечував пальним військові частини, дислоковані в Бєлгородській області та задіяні на харківському напрямку. Внаслідок влучання виникла пожежа, зафіксовано вторинні детонації нафтопродуктів, що зберігалися на об'єкті. Оскільки об'єкт розташований у безпосередній близькості від зони бойових дій (близько 40–60 км від фронту), його ураження безпосередньо вплинуло на оперативне паливозабезпечення передових угруповань противника. Удар був частиною скоординованої нічної хвилі атак на військово-логістичну інфраструктуру РФ, що виконувалися в ніч з 2 на 3 серпня.",
      "source": "Генштаб ЗСУ, OSINT (Astra)"
    },
    "en": {
      "region": "Belgorod Oblast, Yakovlevsky District (Oktyabrskoye village)",
      "target": "Fuel and Lubricants Depot (Oktyabrskoye)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 3, 2026, Ukrainian Defense Forces executed a drone strike on a fuel and lubricants depot in Belgorod Oblast. The strike on the fuel storage facility was officially confirmed in the General Staff of the Armed Forces of Ukraine summary. The depot supplied fuel to Russian military units stationed in Belgorod Oblast and operating along the Kharkiv axis. The attack caused fires and secondary detonations of stored petroleum products. As the facility is located approximately 40–60 km from the front line, its destruction directly disrupted operational fuel supply chains for Russian forward deployed units. The strike was part of a coordinated overnight wave of attacks against Russian military-logistics infrastructure conducted on the night of August 2–3.",
      "source": "AFU General Staff, OSINT (Astra)"
    }
  }
];

console.log('--- VALIDATING ITEMS FOR 03.08.2026 ---');
let hasError = false;
items.forEach((item, idx) => {
    item.distance = calcMinDistance(item.lat, item.lng);
    ['ru', 'uk', 'en'].forEach(lang => {
        const text = item[lang].details;
        const charLen = text.length;
        const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);
        const sentenceCount = sentences.length;
        console.log(`Item #${idx+1} [${lang}] Target: "${item[lang].target}": ${charLen} chars, ${sentenceCount} sentences, dist=${item.distance}km.`);
        if (charLen < 600 || charLen > 1000) {
            console.error(`ERROR: Item #${idx+1} [${lang}] char length ${charLen} is outside [600, 1000] range!`);
            hasError = true;
        }
        if (sentenceCount < 4 || sentenceCount > 8) {
            console.error(`ERROR: Item #${idx+1} [${lang}] sentence count ${sentenceCount} is outside [4, 8] range!`);
            hasError = true;
        }
    });
});

if (hasError) {
    console.error('Validation failed. Aborting write.');
    process.exit(1);
}

// Read data.js and add items
const content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
let data = new Function('return ' + dataStr)();

let maxId = data.reduce((max, item) => item.id && item.id > max ? item.id : max, 0);

items.forEach(item => {
    maxId++;
    item.id = maxId;
    data.push(item);
});

// Write back to data.js
const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully added ${items.length} items to data.js! Total items now: ${data.length}`);
