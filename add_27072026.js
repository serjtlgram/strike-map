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
    "date": "27.07.2026",
    "lat": 56.4330,
    "lng": 53.8970,
    "distance": null,
    "ru": {
      "region": "Удмуртская Республика, Камбарский район (п. Борок)",
      "target": "ФГКУ Комбинат «Приоритет» Росрезерва (нефтебаза)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 27 июля 2026 года украинские ударные БПЛА атаковали закрытую стратегическую нефтебазу Росрезерва — комбинат «Приоритет» (бывший «Горизонт») в посёлке Борок Камбарского района. Объект предназначен для долгосрочного хранения запасов топлива и ГСМ государственного значения, в том числе для нужд армии. Генштаб ВСУ подтвердил поражение цели: на территории предприятия вспыхнул пожар, зафиксированный OSINT-каналами. Расстояние до линии фронта — около 1300 км, атака стала одной из дальнобойных операций украинских беспилотников. Глава Удмуртии Александр Бречалов назвал налёт «самым массированным» за последнее время. Удар по стратегическому резерву топлива бьёт по системе мобилизационного снабжения ВС РФ в тылу.",
      "source": "Генштаб ВСУ, Kyiv Independent, OSINT, СМИ РФ"
    },
    "uk": {
      "region": "Удмуртська Республіка, Камбарський район (смт Борок)",
      "target": "ФДКУ Комбінат «Пріоритет» Росрезерву (нафтобаза)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 27 липня 2026 року українські ударні БПЛА атакували закриту стратегічну нафтобазу Росрезерву — комбінат «Пріоритет» (колишній «Горизонт») у селищі Борок Камбарського району. Об'єкт призначений для довгострокового зберігання запасів пального і ПММ державного значення, зокрема для потреб армії. Генштаб ЗСУ підтвердив ураження цілі: на території підприємства спалахнула пожежа, зафіксована OSINT-каналами. Відстань до лінії фронту — близько 1300 км, атака стала однією з найдалекобійніших операцій українських безпілотників. Голова Удмуртії Олександр Бречалов назвав наліт «найбільш масованим» за останній час. Удар по стратегічному резерву пального б'є по системі мобілізаційного постачання ЗС РФ у тилу.",
      "source": "Генштаб ЗСУ, Kyiv Independent, OSINT, ЗМІ РФ"
    },
    "en": {
      "region": "Udmurt Republic, Kambarsky District (Borok settlement)",
      "target": "Rosrezerv 'Prioritet' Strategic Fuel Depot (Borok)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of July 27, 2026, Ukrainian long-range UAVs struck the closed strategic fuel depot of Russia's State Material Reserve (Rosrezerv) — the 'Prioritet' (formerly 'Gorizont') facility in Borok, Kambarsky District. The facility stores strategic reserves of fuel and lubricants for military and civil emergency needs. The AFU General Staff confirmed the hit, and OSINT channels documented a fire breaking out on the premises. The target sits approximately 1,300 km from the front line, making the strike one of the longest-range Ukrainian UAV operations to date. The head of Udmurtia, Alexander Brechalov, called the attack the most intense drone raid the republic had experienced. Destroying strategic fuel stockpiles directly degrades Russia's mobilization logistics supply chain.",
      "source": "AFU General Staff, Kyiv Independent, OSINT, Russian media"
    }
  },
  {
    "date": "27.07.2026",
    "lat": 57.6120,
    "lng": 39.8740,
    "distance": null,
    "ru": {
      "region": "Ярославская область, Ярославль (Московский проспект)",
      "target": "«Славнефть-ЯНОС» (Ярославский НПЗ)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "27 июля 2026 года украинские БПЛА нанесли удар по промышленному объекту в Ярославле, идентифицированному источниками как НПЗ «Славнефть-ЯНОС» на Московском проспекте — один из крупнейших нефтеперерабатывающих заводов России с мощностью переработки до 15 млн тонн нефти в год. Предприятие производит бензин, дизельное топливо, мазут и авиакеросин. Губернатор Евраев подтвердил попадание дрона в промышленный объект, пожар был оперативно локализован спасателями. Движение на выезде из Ярославля в сторону Москвы временно перекрывалось по соображениям безопасности. Президент Зеленский назвал удары по нефтяным объектам в Ярославской области частью стратегии «дальнобойных санкций».",
      "source": "Президент Зеленский, Генштаб ВСУ, OSINT (Astra), СМИ РФ"
    },
    "uk": {
      "region": "Ярославська область, Ярославль (Московський проспект)",
      "target": "«Славнафта-ЯНОС» (Ярославський НПЗ)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "27 липня 2026 року українські БПЛА завдали удару по промисловому об'єкту в Ярославлі, ідентифікованому джерелами як НПЗ «Славнафта-ЯНОС» на Московському проспекті — один із найбільших нафтопереробних заводів Росії потужністю до 15 млн тонн нафти на рік. Підприємство виробляє бензин, дизельне паливо, мазут та авіакеросин. Губернатор Євраєв підтвердив влучання дрона в промисловий об'єкт, пожежу оперативно локалізували рятувальники. Рух на виїзді з Ярославля у бік Москви тимчасово перекривався з міркувань безпеки. Президент Зеленський назвав удари по нафтових об'єктах у Ярославській області частиною стратегії «далекобійних санкцій».",
      "source": "Президент Зеленський, Генштаб ЗСУ, OSINT (Astra), ЗМІ РФ"
    },
    "en": {
      "region": "Yaroslavl Oblast, Yaroslavl (Moskovsky Prospekt)",
      "target": "Slavneft-YANOS Oil Refinery (Yaroslavl)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On July 27, 2026, Ukrainian UAVs struck an industrial facility in Yaroslavl identified by sources as the Slavneft-YANOS refinery — one of Russia's largest oil processing plants, with a throughput capacity of up to 15 million tonnes per year. The facility produces gasoline, diesel fuel, fuel oil, and aviation kerosene. Regional governor Evraev confirmed a drone hit on an industrial site and said the resulting fire was quickly brought under control. Traffic on the Yaroslavl-Moscow road was briefly halted as a safety precaution. President Zelensky identified the Yaroslavl oil strikes as part of Ukraine's 'long-range sanctions' strategy aimed at cutting Russian war revenues.",
      "source": "President Zelensky, AFU General Staff, OSINT (Astra), Russian media"
    }
  },
  {
    "date": "27.07.2026",
    "lat": 47.1787,
    "lng": 39.6419,
    "distance": null,
    "ru": {
      "region": "Ростовская область, Ростов-на-Дону (мкр-н Заречная)",
      "target": "Экспортный терминал Ростовского морского торгового порта (4-й грузовой район)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "В ночь на 27 июля 2026 года украинские БПЛА атаковали 4-й грузовой район Ростовского морского торгового порта — универсальный перегрузочный комплекс в микрорайоне Заречная на левом берегу Дона, ниже разводного железнодорожного моста. Объект специализируется на перевалке экспортных грузов и является ключевым звеном в системе доходов бюджета РФ. Генштаб ВСУ подтвердил поражение цели: на территории терминала зафиксированы пожар и задымление. По данным губернатора Ростовской области Юрия Слюсаря, в ходе ночной атаки погибли 5 человек, ещё 8 получили ранения — среди жертв оказался ребёнок. Повреждения получили жилые дома в Железнодорожном, Пролетарском и Ленинском районах города. Президент Зеленский назвал порт целью на расстоянии ~250 км от фронта.",
      "source": "Генштаб ВСУ, Президент Зеленский, губернатор Слюсарь, OSINT (hromadske), СМИ"
    },
    "uk": {
      "region": "Ростовська область, Ростов-на-Дону (мкр-н Заріччя)",
      "target": "Експортний термінал Ростовського морського торгового порту (4-й вантажний район)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "У ніч проти 27 липня 2026 року українські БПЛА атакували 4-й вантажний район Ростовського морського торгового порту — універсальний перевантажувальний комплекс у мікрорайоні Заріччя на лівому березі Дону, нижче розвідного залізничного мосту. Об'єкт спеціалізується на перевалці експортних вантажів і є ключовою ланкою в системі доходів бюджету РФ. Генштаб ЗСУ підтвердив ураження цілі: на території терміналу зафіксовані пожежа та задимлення. За даними губернатора Ростовської області Юрія Слюсаря, під час нічної атаки загинули 5 осіб, ще 8 отримали поранення — серед жертв опинилася дитина. Пошкоджень зазнали житлові будинки в Залізничному, Пролетарському та Ленінському районах міста. Президент Зеленський назвав порт ціллю на відстані ~250 км від фронту.",
      "source": "Генштаб ЗСУ, Президент Зеленський, губернатор Слюсар, OSINT (hromadske), ЗМІ"
    },
    "en": {
      "region": "Rostov Oblast, Rostov-on-Don (Zarechnaya district)",
      "target": "Rostov-on-Don Export Port Terminal (4th Cargo District)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the night of July 27, 2026, Ukrainian UAVs struck the 4th cargo district of the Rostov-on-Don Sea Trade Port — a general-cargo terminal in the Zarechnaya district on the left bank of the Don River, just downstream from the railway swing bridge. The facility handles export cargo and serves as a key revenue-generating node for the Russian state budget. The AFU General Staff confirmed the hit, with fire and smoke observed at the terminal. Rostov Oblast Governor Yury Slyusar reported that 5 people were killed, including a child, and 8 others injured during the overnight strike. Residential buildings in the Zheleznodorozhny, Proletarsky, and Leninsky districts also sustained damage. President Zelensky cited the port as a target located approximately 250 km from the front line.",
      "source": "AFU General Staff, President Zelensky, Governor Slyusar, OSINT (hromadske), Media"
    }
  }
];

// Validate sentence count & character length
console.log('--- VALIDATING ITEMS ---');
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
    console.error('Validation failed!');
    process.exit(1);
}

// Read existing data.js
let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;\n?$/, '').trim();
let data = new Function('return ' + dataStr)();

// Find max ID
let maxId = 0;
data.forEach(item => { if (item.id > maxId) maxId = item.id; });

// Insert items at the beginning of the array so newest items appear first
items.forEach((item, idx) => {
  maxId++;
  item.id = maxId;
  data.unshift(item);
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully added ${items.length} items for date 27.07.2026 into data.js`);
