const fs = require('fs');

const newItems = [
  {
    "date": "17.07.2026",
    "lat": 45.3370,
    "lng": 36.4700,
    "distance": null,
    "ru": {
      "region": "Республика Крым (временно оккупирована), Керчь",
      "target": "Нефтяной терминал ООО «ТЭС-Терминал-1»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "«ТЭС-Терминал-1» — один из крупнейших нефтепродуктовых терминалов Крыма, специализирующийся на перевалке, хранении и транспортировке светлых и тёмных нефтепродуктов, а также сжиженного углеводородного газа. Объект расположен в портовой зоне Керчи и входит в группу компаний «ТЭС» — одного из ведущих нефтетрейдеров на полуострове. Генштаб ВСУ включил терминал в сводку поражённых объектов за 17 июля 2026 года, указав, что объект обеспечивает нужды российской военной группировки в горюче-смазочных материалах. Это не первая атака на терминал: в июне–июле 2026 года он уже неоднократно становился мишенью украинских ударних БПЛА, кожного разу с пожежами в резервуарному парку. Удар є частиною систематичної кампанії щодо блокування паливного постачання окупаційних сил в Криму.",
      "source": "Генштаб ВСУ, pravda.com.ua, nv.ua, investigator.org.ua"
    },
    "uk": {
      "region": "Республіка Крим (тимчасово окупована), Керч",
      "target": "Нафтовий термінал ТОВ «ТЕС-Термінал-1»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "«ТЕС-Термінал-1» — один із найбільших нафтопродуктових терміналів Криму, що спеціалізується на перевалці, зберіганні та транспортуванні світлих і темних нафтопродуктів, а також зрідженого вуглеводневого газу. Об'єкт розташований у портовій зоні Керчі та входить до групи компаній «ТЕС» — одного з провідних нафтотрейдерів на півострові. Генштаб ЗСУ включив термінал до зведення уражених об'єктів за 17 липня 2026 року, зазначивши, що об'єкт забезпечує потреби російського угруповання у паливно-мастильних матеріалах. Це вже не перша атака: у червні–липні 2026 року термінал неодноразово ставав мішенню українських ударних БПЛА із пожежами в резервуарному парку. Удар є частиною систематичної кампанії блокування паливного постачання окупаційних сил у Криму.",
      "source": "Генштаб ЗСУ, pravda.com.ua, nv.ua, investigator.org.ua"
    },
    "en": {
      "region": "Crimea (temporarily occupied), Kerch",
      "target": "TES-Terminal-1 Oil Products Terminal",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "TES-Terminal-1 is one of Crimea's largest oil products terminals, specialising in the transshipment, storage and transportation of light and dark petroleum products as well as liquefied petroleum gas. Located in Kerch's port zone, it belongs to the TES Group — one of the peninsula's leading oil traders. Ukraine's General Staff listed the terminal among confirmed strike targets for July 17, 2026, noting it supplies fuel to Russian occupation forces. This was not the first attack: in June–July 2026 the terminal had already been hit multiple times by Ukrainian strike UAVs, each time triggering fires in the tank farm. The strike is part of a systematic campaign to cut off fuel supply chains to Russian forces in Crimea.",
      "source": "AFU General Staff, pravda.com.ua, nv.ua, investigator.org.ua"
    },
    "id": 237
  },
  {
    "date": "17.07.2026",
    "lat": 45.3410,
    "lng": 36.4640,
    "distance": null,
    "ru": {
      "region": "Республика Крым (временно оккупирована), Керчь",
      "target": "Склад горюче-смазочных материалов (ГСМ) в районе порта",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Склад ГСМ в портовом районе Керчи является частью топливно-логистической инфраструктуры, обслуживающей переправу через Керченский пролив и военные нужды оккупационных войск. Объект обеспечивает хранение и выдачу дизельного топлива, бензина и масел для нужд российских воинских подразделений и технических служб. Генштаб ВСУ 17 июля 2026 года подтвердил поражение склада ГСМ в Керчи в рамках той же серии ударов, что и по ТЭС-Терминал-1. Два одновременных удара по топливной инфраструктуре Керчи существенно снижают пропускную способность цепочки ГСМ-снабжения Крымской группировки. По данным украинских OSINT-аналітиків, над Керчью в ту ніч спостерігалось масштабне задимлення від одразу кількох осередків горіння.",
      "source": "Генштаб ВСУ, nv.ua, interfax.com.ua, Militarnyi"
    },
    "uk": {
      "region": "Республіка Крим (тимчасово окупована), Керч",
      "target": "Склад паливно-мастильних матеріалів (ПММ) в районі порту",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Склад ПММ у портовому районі Керчі є частиною паливно-логістичної інфраструктури, що обслуговує переправу через Керченську протоку та військові потреби окупаційних військ. Об'єкт забезпечує зберігання та видачу дизельного пального, бензину та мастил для потреб російських військових підрозділів і технічних служб. Генштаб ЗСУ 17 липня 2026 року підтвердив ураження складу ПММ у Керчі в рамках тієї ж серії ударів, що і по ТЕС-Терміналу-1. Два одночасних удари по паливній інфраструктурі Керчі суттєво знижують пропускну здатність ланцюга постачання ПММ Кримського угруповання. За даними українських OSINT-аналітиків, над Керчю тієї ночі спостерігалося масштабне задимлення від кількох осередків горіння.",
      "source": "Генштаб ЗСУ, nv.ua, interfax.com.ua, Militarnyi"
    },
    "en": {
      "region": "Crimea (temporarily occupied), Kerch",
      "target": "Fuel and Lubricants Depot in the Port Area",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "The fuel and lubricants depot in Kerch's port district is part of the logistical supply chain serving the Kerch Strait crossing and the fuel needs of Russian occupation forces. The facility stores and dispenses diesel, gasoline and lubricants for Russian military units and technical services in Crimea. Ukraine's General Staff confirmed the depot as a struck target on July 17, 2026, in the same strike package that hit TES-Terminal-1. Two simultaneous hits on Kerch's fuel infrastructure significantly reduce the throughput of the fuel supply chain for Russia's Crimean grouping. Ukrainian OSINT analysts reported large smoke plumes visible over Kerch from multiple simultaneous fires that night.",
      "source": "AFU General Staff, nv.ua, interfax.com.ua, Militarnyi"
    },
    "id": 238
  },
  {
    "date": "17.07.2026",
    "lat": 55.8700,
    "lng": 38.4500,
    "distance": null,
    "ru": {
      "region": "Московская область, Богородский городской округ, Ногинск",
      "target": "«Ногинская» нефтебаза (Электростальское шоссе, 5)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "«Ногинская» нефтебаза — объект для хранения и перевалки светлых нефтепродуктов: бензина, дизельного топлива и керосина. Резервуарный парк насчитывает 24 ёмкости суммарным объёмом 11 500 кубометров — это существенные запасы для обеспечения нужд региона и логистических цепочек в интересах ВПК. Воздушная тревога в Подмосковье была объявлена вечером 17 июля 2026 года: в направлении Московского региона шло более 370 БПЛА. В результате попадания дрона на нефтебазе вспыхнул пожар, охвативший резервуарный парк. Губернатор Подмосковья Андрей Воробьёв подтвердил факт возгорания: 2 человека получили травмы, из близлежащих жилых домов и родильного дома на ул. Радченко была проведена эвакуация. Объект является частью топливной инфраструктуры региона, обеспечивающей в том числе нужды военно-транспортной логістики.",
      "source": "Губернатор МО Воробьёв, OSINT (Astra, UNN), dialog.ua, interfax.ru"
    },
    "uk": {
      "region": "Московська область, Богородський міський округ, Ногінськ",
      "target": "«Ногінська» нафтобаза (Електростальське шосе, 5)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "«Ногінська» нафтобаза — об'єкт для зберігання та перевалки світлих нафтопродуктів: бензину, дизельного пального і гасу. Резервуарний парк налічує 24 ємності загальним об'ємом 11 500 кубометрів — це суттєві запаси для забезпечення потреб регіону та логістичних ланцюжків в інтересах ВПК. Повітряна тривога в Підмосков'ї була оголошена ввечері 17 липня 2026 року: у напрямку Московського регіону летіло понад 370 БПЛА. Внаслідок влучання дрона на нафтобазі спалахнула пожежа, яка охопила резервуарний парк. Губернатор Підмосков'я Андрій Воробйов підтвердив факт загоряння: 2 особи отримали травми, з прилеглих житлових будинків і пологового будинку на вул. Радченка була проведена евакуація. Об'єкт є частиною паливної інфраструктури регіону, що забезпечує зокрема потреби військово-транспортної логістики.",
      "source": "Губернатор МО Воробйов, OSINT (Astra, UNN), dialog.ua, interfax.ru"
    },
    "en": {
      "region": "Moscow Oblast, Bogorodsky City District, Noginsk",
      "target": "Noginskaya Oil Depot (Elektrostalskoe Highway, 5)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "The Noginskaya oil depot stores and dispatches light petroleum products — gasoline, diesel and kerosene — with a tank farm of 24 reservoirs totalling 11,500 cubic metres of capacity, representing significant fuel reserves for the region and military logistics chains. An air raid alert was declared across the Moscow region on the evening of July 17, 2026, as more than 370 UAVs were tracked heading toward the Moscow area. A drone strike ignited a fire in the tank farm. Moscow Oblast Governor Andrei Vorobyov confirmed the blaze: two people were injured, and residents of nearby apartment buildings and a maternity hospital on Radchenko Street were evacuated. The facility is part of the region's fuel infrastructure that also supports military transport logistics.",
      "source": "Moscow Oblast Governor Vorobyov, OSINT (Astra, UNN), dialog.ua, interfax.ru"
    },
    "id": 239
  },
  {
    "date": "17.07.2026",
    "lat": 55.7920,
    "lng": 38.4460,
    "distance": null,
    "ru": {
      "region": "Московская область, Электросталь, пос. Случайный",
      "target": "Логистический центр Wildberries (склад подсанкционных комплектующих для дронов)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Складской комплекс Wildberries в Электростали — один из крупнейших логистических хабов компании в московском регионе, расположенный в посёлке Случайный на территории промышленного массива. По заявлению президента Украины Владимира Зеленского, объект использовался российским ВПК для хранения и перераспределения подсанкционных комплектующих: деталей для производства ударных беспилотников и навигационного оборудования — что делает его законной военной целью. В ночь на 18 июля 2026 года удары БПЛА спровоцировали масштабный пожар на территории склада. Губернатор Московской области Андрей Воробьёв подтвердил атаку: 24 человека пострадали. Московская ПВО в ту ночь перехватила 64 дрона над столицей, однако часть всё же достигла целей по всей области.",
      "source": "Президент Зеленский, губернатор МО Воробьёв, dialog.ua, rbc.ua, belsat.eu"
    },
    "uk": {
      "region": "Московська область, Електросталь, пос. Випадковий",
      "target": "Логістичний центр Wildberries (склад підсанкційних комплектуючих для дронів)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Складський комплекс Wildberries в Електростали — один із найбільших логістичних хабів компанії в московському регіоні, розташований у селищі Випадковому на території промислового масиву. За заявою президента України Володимира Зеленського, об'єкт використовувався російським ВПК для зберігання та перерозподілу підсанкційних комплектуючих: деталей для виробництва ударних безпілотників та навігаційного обладнання — що робить його законною військовою ціллю. Вночі 18 липня 2026 року удари БПЛА спровокували масштабну пожежу на території складу. Губернатор Московської області Андрій Воробйов підтвердив атаку: 24 особи постраждали. Московська ППО тієї ночі перехопила 64 дрони над столицею, однак частина все ж досягла цілей по всій області.",
      "source": "Президент Зеленський, губернатор МО Воробйов, dialog.ua, rbc.ua, belsat.eu"
    },
    "en": {
      "region": "Moscow Oblast, Elektrostal, Sluchaynyy settlement",
      "target": "Wildberries Logistics Centre (warehouse of sanctioned drone components)",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "The Wildberries warehouse complex in Elektrostal is one of the company's largest logistics hubs in the Moscow region, located in the Sluchaynyy industrial estate. According to Ukrainian President Volodymyr Zelensky, the facility was used by Russia's military-industrial complex to store and redistribute sanctioned components — parts for strike drone production and navigation equipment — making it a legitimate military target. On the night of July 17–18, 2026, drone strikes triggered a major fire at the facility. Moscow Oblast Governor Andrei Vorobyov confirmed the attack: 24 people were injured. Moscow's air defences intercepted 64 drones over the capital that night, but part of the strike wave reached targets across the region.",
      "source": "President Zelensky, Moscow Oblast Governor Vorobyov, dialog.ua, rbc.ua, belsat.eu"
    },
    "id": 240
  },
  {
    "date": "17.07.2026",
    "lat": 52.5850,
    "lng": 41.5100,
    "distance": null,
    "ru": {
      "region": "Тамбовская область, Котовск",
      "target": "Логистический центр Wildberries / складская зона вблизи ФКП «Тамбовский пороховой завод»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Котовск — моногород, чьим градообразующим предприятием является ФКП «Тамбовский пороховой завод» (входит в Ростех) — один из ключевых производителей пироксилиновых порохов и зарядов для стрелкового оружия, артиллерии и танков, работающий с 1916 года. В ночь на 18 июля 2026 года украинские ударные БПЛА, оснащённые осколочными боевыми частями, атаковали логистический центр Wildberries в городе. По заявлению Зеленского, склад использовался для поставок подсанкционных комплектующих для дронов. В результате попаданий вспыхнул масштабный пожар. По официальным данным губернатора Тамбовской области Евгения Первышова, погибли 7 сотрудников ночной смены, ещё 25 человек получили ранения различной степени тяжести. Работа ПВО региона зафиксировала перехват 28 БПЛА, но часть достигла цели.",
      "source": "Президент Зеленский, губернатор Тамбовской обл. Первышов, meduza.io, kyivpost.com, belsat.eu"
    },
    "uk": {
      "region": "Тамбовська область, Котовськ",
      "target": "Логістичний центр Wildberries / складська зона поблизу ФКП «Тамбовський пороховий завод»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Котовськ — монопромислове місто, чиїм містоутворюючим підприємством є ФКП «Тамбовський пороховий завод» (входить до Ростеху) — один із ключових виробників піроксилінових порохів і зарядів для стрілецької зброї, артилерії та танків, що працює з 1916 року. Вночі 18 липня 2026 року українські ударні БПЛА, оснащені осколковими бойовими частинами, атакували логістичний центр Wildberries у місті. За заявою Зеленського, склад використовувався для поставок підсанкційних комплектуючих для дронів. Внаслідок влучань спалахнула масштабна пожежа. За офіційними даними губернатора Тамбовської області Євгена Первишова, загинули 7 співробітників нічної зміни, ще 25 осіб отримали поранення різного ступеня тяжкості. ППО регіону зафіксувало перехоплення 28 БПЛА, але частина досягла цілей.",
      "source": "Президент Зеленський, губернатор Тамбовської обл. Первишов, meduza.io, kyivpost.com, belsat.eu"
    },
    "en": {
      "region": "Tambov Oblast, Kotovsk",
      "target": "Wildberries Logistics Centre / warehouse zone near Tambov Powder Plant",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "Kotovsk is a company town whose city-forming enterprise is the Federal State Unitary Enterprise Tambov Powder Plant (part of Rostec) — one of Russia's key producers of pyroxylin powders and propellant charges for small arms, artillery and tanks, in operation since 1916. On the night of July 17–18, 2026, Ukrainian strike UAVs equipped with fragmentation warheads hit the Wildberries logistics centre in the city. President Zelensky stated the warehouse was used to supply sanctioned drone components. A large fire broke out after the strikes. Tambov Oblast Governor Yevgeny Pervyshov confirmed seven night-shift workers were killed and 25 others wounded to varying degrees. Regional air defences intercepted 28 UAVs, but part of the attack wave hit its targets.",
      "source": "President Zelensky, Tambov Oblast Governor Pervyshov, meduza.io, kyivpost.com, belsat.eu"
    },
    "id": 241
  }
];

// Load data.js
const content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;\n?$/, '').trim();
let data = new Function('return ' + dataStr)();

// Unshift new items (newest first)
data.unshift(...newItems);

// Write back to data.js
const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log('Added July 17, 2026 events to data.js successfully!');
console.log('New IDs: 237, 238, 239, 240, 241');
