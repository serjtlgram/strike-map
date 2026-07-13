const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').trim();
if (dataStr.endsWith(';')) dataStr = dataStr.slice(0, -1);
let data = eval('(' + dataStr + ')');

// Determine max id
let maxId = 0;
data.forEach(item => {
    if (item.id && item.id > maxId) maxId = item.id;
});

const newItems = [
  {
    "date": "11.07.2026",
    "lat": 47.115,
    "lng": 39.418,
    "distance": null,
    "images": [
      "images/azov-1-2026-07-11_opt.jpg",
      "images/azov-2-2026-07-11_opt.jpg",
      "video/azov-1-2026-07-11_opt.mp4"
    ],
    "ru": {
      "region": "Ростовская область, Азов",
      "target": "Азовская нефтебаза (ЗАО «Азовпродукт» и ООО «Донтерминал»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 11 июля 2026 года под мощный удар украинских беспилотников попали сразу два терминала Азовской нефтебазы: ЗАО «Азовпродукт» и ООО «Донтерминал». По данным СБУ и источников в украинской разведке, это была спланированная операция по уничтожению логистических узлов, обеспечивающих топливом группировку российских войск на юге. Азовская база имеет стратегическое значение для перевалки светлых нефтепродуктов и логистики ВПК в целом. После попаданий вспыхнул колоссальный пожар, охвативший несколько резервуаров с горючим общим объёмом в десятки тысяч кубометров. Тушение осложнялось высокой температурой и угрозой перехода огня на соседние цистерны, местные власти даже привлекали пожарный поезд. Местные паблики были переполнены кадрами огромного зарева и столбов чёрного дыма, которые было видно за десятки километров.",
      "source": "СБУ, ГУР МО, OSINT-аналитики, СМИ РФ"
    },
    "uk": {
      "region": "Ростовська область, Азов",
      "target": "Азовська нафтобаза (ЗАТ «Азовпродукт» та ТОВ «Донтермінал»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 11 липня 2026 року під потужний удар українських безпілотників потрапили одразу два термінали Азовської нафтобази: ЗАТ «Азовпродукт» та ТОВ «Донтермінал». За даними СБУ та джерел в українській розвідці, це була спланована операція зі знищення логістичних вузлів, що забезпечують паливом угруповання російських військ на півдні. Азовська база має стратегічне значення для перевалки світлих нафтопродуктів та логістики ВПК загалом. Після влучань спалахнула колосальна пожежа, яка охопила кілька резервуарів з пальним загальним об'ємом у десятки тисяч кубометрів. Гасіння ускладнювалося високою температурою та загрозою перекидання вогню на сусідні цистерни, місцева влада навіть залучала пожежний поїзд. Місцеві пабліки були переповнені кадрами величезної заграви та стовпів чорного диму, які було видно за десятки кілометрів.",
      "source": "СБУ, ГУР МО, OSINT-аналітики, ЗМІ РФ"
    },
    "en": {
      "region": "Rostov Oblast, Azov",
      "target": "Azov Oil Depot (Azovprodukt CJSC and Donterminal LLC)",
      "category": "Oil and Gas",
      "weapon": "Drone",
      "details": "On the night of July 11, 2026, Ukrainian strike drones delivered a powerful blow to two terminals of the Azov oil depot: Azovprodukt CJSC and Donterminal LLC. According to the SBU and Ukrainian intelligence sources, this was a planned operation aimed at destroying logistical hubs that supply fuel to the Russian military grouping in the south. The Azov base is of strategic importance for the transshipment of light oil products and overall military-industrial logistics. Following the strikes, a massive fire broke out, engulfing several fuel storage tanks with a total volume of tens of thousands of cubic meters. Firefighting efforts were complicated by extreme heat and the threat of the fire spreading to neighboring tanks, prompting local authorities to deploy a firefighting train. Local social media channels were flooded with footage of a massive glow and columns of black smoke visible from dozens of kilometers away.",
      "source": "SBU, HUR MO, OSINT analysts, Russian Media"
    },
    "id": maxId + 1
  },
  {
    "date": "11.07.2026",
    "lat": 44.85,
    "lng": 38.5769,
    "distance": null,
    "images": [
      "images/ilsk1_2026-07-11_opt.jpg",
      "images/ilsk2_2026-07-11.jpg",
      "video/ilsk-1-2026-07-11.mp4"
    ],
    "ru": {
      "region": "Краснодарский край, Ильский",
      "target": "Ильский НПЗ (ООО «КНГК-ИНПЗ»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ту же ночь, 11 июля 2026 года, массированной атаке украинских дронов-камикадзе подвергся Ильский нефтеперерабатывающий завод на Кубани. Этот НПЗ — один из крупнейших производителей мазута и дизельного топлива на юге РФ, его продукция критически важна для снабжения Черноморского флота и оккупационных войск в Крыму. Как сообщают в Силах беспилотных систем (СБС) и ГУР, в результате точечных попаданий была повреждена установка первичной переработки нефти, что привело к сильному возгоранию и временной остановке части производственного цикла. Ильский НПЗ уже не раз становился целью подобных операций, что свидетельствует о системной работе Украины по выведению из строя российской топливной генерации. Местные жители публиковали многочисленные видео с пролетом беспилотников, звуками взрывов и последующим крупным пожаром на территории предприятия.",
      "source": "СБС, ГУР МО, OSINT, СМИ РФ"
    },
    "uk": {
      "region": "Краснодарський край, Ільський",
      "target": "Ільський НПЗ (ТОВ «КНГК-ІНПЗ»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Тієї ж ночі, 11 липня 2026 року, масованої атаки українських дронів-камікадзе зазнав Ільський нафтопереробний завод на Кубані. Цей НПЗ — один із найбільших виробників мазуту та дизельного пального на півдні РФ, його продукція критично важлива для постачання Чорноморського флоту та окупаційних військ у Криму. Як повідомляють у Силах безпілотних систем (СБС) та ГУР, внаслідок точкових влучань було пошкоджено установку первинної переробки нафти, що призвело до сильного займання та тимчасової зупинки частини виробничого циклу. Ільський НПЗ вже не вперше ставав метою подібних операцій, що свідчить про системну роботу України з виведення з ладу російської паливної генерації. Місцеві жителі публікували численні відео з прольотом безпілотників, звуками вибухів та подальшою великою пожежею на території підприємства.",
      "source": "СБС, ГУР МО, OSINT, ЗМІ РФ"
    },
    "en": {
      "region": "Krasnodar Krai, Ilsky",
      "target": "Ilsky Oil Refinery (KNGK-INPZ LLC)",
      "category": "Oil and Gas",
      "weapon": "Drone",
      "details": "On the same night of July 11, 2026, the Ilsky oil refinery in the Kuban region came under a massive attack by Ukrainian kamikaze drones. This refinery is one of the largest producers of fuel oil and diesel fuel in southern Russia, and its products are critical for supplying the Black Sea Fleet and occupation forces in Crimea. According to the Unmanned Systems Forces (SBS) and HUR, pinpoint strikes damaged the primary oil processing unit, leading to a severe fire and the temporary shutdown of part of the production cycle. The Ilsky refinery has been targeted in similar operations before, underscoring Ukraine's systematic efforts to dismantle Russian fuel generation. Local residents posted numerous videos showing drones flying overhead, the sounds of explosions, and the subsequent large-scale fire at the facility.",
      "source": "SBS, HUR MO, OSINT, Russian Media"
    },
    "id": maxId + 2
  }
];

// Insert at the beginning of the array but after the July 12 entry to keep it somewhat sorted (or just at the beginning).
// Actually, data is sorted descending by date. 12.07.2026 is at index 0.
// We can insert at index 1.
data.splice(1, 0, ...newItems);

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log('Successfully added July 11 events to data.js');
