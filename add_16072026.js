const fs = require('fs');

const newItems = [
  {
    "date": "16.07.2026",
    "lat": 57.6261,
    "lng": 39.8845,
    "distance": null,
    "ru": {
      "region": "Ярославская область, Ярославль",
      "target": "НПЗ «Славнефть-ЯНОС» (ПАО «Славнефть-Ярославнефтеоргсинтез»)",
      "category": "НПЗ",
      "weapon": "Дрон",
      "details": "«Славнефть-ЯНОС» — один из старейших и крупнейших нефтеперерабатывающих заводов России, работающий с 1961 года. Мощность переработки превышает 15 млн тонн нефти в год — это порядка 3–4% всей российской нефтепереработки. Завод производит широчайший спектр нефтепродуктов: авиационный и автомобильный бензин, реактивное и дизельное топливо, мазут, а также сырьё для нефтехимии. Стратегическое значение «ЯНОС» огромно: предприятие является ключевым поставщиком топлива для московского региона. Утром 16 июля 2026 года украинские ударные БПЛА дальнего радиуса поразили товарно-сырьевой резервуарный парк завода. OSINT-аналитики зафиксировали попадание в резервуарный парк и сильное задымление над объектом. Губернатор Ярославской области Михаил Евраев подтвердил массированную атаку БПЛА: 19 дронов были перехвачены ПВО, однако поразившие цель беспилотники всё же добились попадания. В результате удара погиб один местный житель, четверо получили ранения; власти временно перекрыли трассу Ярославль–Москва и ввели ограничения в работе местного аэропорта. Это была не первая атака на «ЯНОС» в 2026 году — завод превратился в регулярную цель украинских глубоких ударов.",
      "source": "OSINT (Militarnyі, Kurs, Informator), губернатор Ярославской обл. Евраев, 24tv.ua, Meduza"
    },
    "uk": {
      "region": "Ярославська область, Ярославль",
      "target": "НПЗ «Славнефть-ЯНОС» (ПАТ «Славнефть-Ярославнефтеоргсинтез»)",
      "category": "НПЗ",
      "weapon": "Дрон",
      "details": "«Славнефть-ЯНОС» — один із найстаріших та найбільших нафтопереробних заводів Росії, що працює з 1961 року. Потужність переробки перевищує 15 млн тонн нафти на рік — це близько 3–4% усієї російської нафтопереробки. Завод виробляє широкий спектр нафтопродуктів: авіаційний і автомобільний бензин, реактивне та дизельне паливо, мазут, а також сировину для нафтохімії. Стратегічне значення «ЯНОС» є колосальним: підприємство є ключовим постачальником палива для московського регіону. Вранці 16 липня 2026 року українські ударні БПЛА далекого радіусу уразили товарно-сировинний резервуарний парк заводу. OSINT-аналітики зафіксували влучання у резервуарний парк і сильне задимлення над об'єктом. Губернатор Ярославської області Михайло Євраєв підтвердив масовану атаку БПЛА: 19 дронів були перехоплені ППО, однак ті, що вразили ціль, усе ж таки досягли мети. Внаслідок удару загинув один місцевий житель, четверо отримали поранення; влада тимчасово перекрила трасу Ярославль–Москва та обмежила роботу місцевого аеропорту. Це була не перша атака на «ЯНОС» у 2026 році — завод перетворився на регулярну ціль українських глибоких ударів.",
      "source": "OSINT (Militarnyі, Kurs, Informator), губернатор Ярославської обл. Євраєв, 24tv.ua, Meduza"
    },
    "en": {
      "region": "Yaroslavl Oblast, Yaroslavl",
      "target": "Slavneft-YANOS Oil Refinery (PAO Slavneft-Yaroslavnefteorgsintez)",
      "category": "Oil Refinery",
      "weapon": "Drone",
      "details": "Slavneft-YANOS is one of Russia's oldest and largest oil refineries, operating since 1961 with an annual processing capacity exceeding 15 million tonnes of crude oil — roughly 3–4% of all Russian refining capacity. The plant produces a wide range of petroleum products: aviation and automotive gasoline, jet fuel, diesel, fuel oil, and petrochemical feedstocks. Its strategic importance is enormous, as YANOS is a key fuel supplier for the Moscow region. On the morning of July 16, 2026, Ukrainian long-range strike UAVs hit the plant's oil storage and tank farm. OSINT analysts confirmed a strike on the tank farm and heavy smoke plumes over the facility. Yaroslavl Oblast Governor Mikhail Yevrayev confirmed a massive drone attack: 19 drones were intercepted by air defenses, but those that struck the target achieved their objective. One local resident was killed and four others injured; authorities temporarily closed the Yaroslavl–Moscow highway and imposed restrictions at the local airport. This was not the first attack on YANOS in 2026 — the plant has become a regular target of Ukrainian deep strikes.",
      "source": "OSINT (Militarnyi, Kurs, Informator), Yaroslavl Oblast Governor Yevrayev, 24tv.ua, Meduza"
    },
    "id": 234
  },
  {
    "date": "16.07.2026",
    "lat": 45.0900,
    "lng": 33.5930,
    "distance": null,
    "ru": {
      "region": "Республика Крым (временно оккупирована), Сакский район, Новофёдоровка",
      "target": "Военный аэродром «Саки» — уничтожение фронтового бомбардировщика Су-24М",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "Аэродром «Саки» (Новофёдоровка) — военная авиабаза первого класса на западном берегу Крыма, где дислоцируется 43-й отдельный морской штурмовой авиаполк ВКС РФ. С этого аэродрома российские фронтовые бомбардировщики Су-24М регулярно наносят удары по украинским позициям и городам, а также ведут разведку в акватории Чёрного моря. 16 июля 2026 года боевые водолазы-спецназовцы Центра специального назначения Нацгвардии Украины «Омега» провели дерзкую операцию глубокого удара, в ходе которой уничтожили российский фронтовой бомбардировщик Су-24М прямо в момент подготовки его к боевому вылету. Операцию провели с применением ударных беспилотників: первый БПЛА поразил носовую часть самолёта, а второй нанёс удар по топливным бакам — что привело к полному уничтожению машины. Командующий НГУ генерал Олександр Пивненко подтвердил успешность операции, подчеркнув, что Украина наращивает потенциал дальних ударных операций. Поражение бомбардировщика на оккупированном полуострове демонстрирует способность украинских сил доставать врага в любой точке, включая Крым.",
      "source": "НГУ «Омега», командующий НГУ Пивненко, pravda.com.ua, dsnews.ua, Kyiv Independent"
    },
    "uk": {
      "region": "Республіка Крим (тимчасово окупована), Сакський район, Новофедорівка",
      "target": "Військовий аеродром «Саки» — знищення фронтового бомбардувальника Су-24М",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "Аеродром «Саки» (Новофедорівка) — військова авіабаза першого класу на західному березі Криму, де дислокується 43-й окремий морський штурмовий авіаполк ВКС РФ. З цього аеродрому російські фронтові бомбардувальники Су-24М регулярно завдають ударів по українських позиціях і містах, а також ведуть розвідку в акваторії Чорного моря. 16 липня 2026 року бойові водолази-спецназівці Центру спеціального призначення Нацгвардії України «Омега» провели зухвалу операцію глибокого удару, в ході якої знищили російський фронтовий бомбардувальник Су-24М просто під час підготовки його до бойового вильоту. Операцію провели із застосуванням ударних безпілотників: перший БПЛА уразив носову частину літака, а другий завдав удару по паливних баках — що призвело до повного знищення машини. Командувач НГУ генерал Олександр Пивненко підтвердив успішність операції, наголосивши, що Україна нарощує потенціал далеких ударних операцій. Ураження бомбардувальника на окупованому півострові демонструє здатність українських сил дістати ворога в будь-якій точці, включно з Кримом.",
      "source": "НГУ «Омега», командувач НГУ Пивненко, pravda.com.ua, dsnews.ua, Kyiv Independent"
    },
    "en": {
      "region": "Crimea (temporarily occupied), Saky District, Novofedorivka",
      "target": "Saky Military Airfield — Destruction of Su-24M Frontline Bomber",
      "category": "Military Airfield",
      "weapon": "Drone",
      "details": "The Saky (Novofedorivka) airfield is a first-class military airbase on Crimea's western coast, home to Russia's 43rd Separate Naval Assault Aviation Regiment. Su-24M frontline bombers stationed here regularly carry out strikes on Ukrainian positions and cities, as well as conduct Black Sea reconnaissance missions. On July 16, 2026, combat diver special operators from Ukraine's National Guard special operations unit 'Omega' conducted a bold deep-strike operation, destroying a Russian Su-24M frontline bomber while it was being readied for a combat sortie. The operation employed attack UAVs: the first drone struck the aircraft's nose section, while the second targeted the fuel tanks — resulting in complete destruction of the aircraft. National Guard Commander General Oleksandr Pivnenko confirmed the success of the operation, emphasizing that Ukraine is expanding its capacity for deep offensive strikes. Hitting a bomber on the occupied peninsula demonstrates Ukraine's ability to reach the enemy anywhere, including Crimea.",
      "source": "NGU 'Omega', NGU Commander Pivnenko, pravda.com.ua, dsnews.ua, Kyiv Independent"
    },
    "id": 235
  },
  {
    "date": "16.07.2026",
    "lat": 45.3000,
    "lng": 36.8000,
    "distance": null,
    "ru": {
      "region": "Азовское море / Чёрное море (акватория)",
      "target": "Операция «МоЛоЧКа» — 11 судов теневого флота РФ (5 нефтетанкеров, 1 газовоз, 3 сухогруза, 2 буксира)",
      "category": "Флот / Топливная логистика",
      "weapon": "Дрон / БЭК",
      "details": "16 июля 2026 года в рамках продолжающейся операции «МоЛоЧКа» Силы беспилотных систем (СБС) ВСУ под командованием Роберта «Мадяра» Бровди нанесли удары ещё по 11 судам российского теневого флота в акваториях Чёрного и Азовского морей. В числе поражённых — пять нефтяных танкеров, один танкер-газовоз, три сухогруза и два буксира. К исходу 16 июля суммарное число судов, поражённых в ходе операции «МоЛоЧКа», достигло 147 единиц — 117 в Азовском море и 30 в Чёрном. Концепция операции предусматривает «неизлечимый паралич логистики»: украинские безэкипажные катера выводят суда из строя, поражая ходовую часть, рулевое управление и навигационное оборудование, не пробивая при этом корпус и не создавая угрозы экологической катастрофы. Теневой флот является главным инструментом России для экспорта нефти в обход западных санкций — именно нефтяные доходы финансируют военную машину Кремля. Ударами по этим судам Украина системно перекрывает финансовые артерии войны и превращает Азовское море во враждебную для российского судоходства акваторию.",
      "source": "СБС ВСУ (Роберт «Мадяр» Бровді), pravda.com.ua, Ukrinform, Armyinform"
    },
    "uk": {
      "region": "Азовське море / Чорне море (акваторія)",
      "target": "Операція «МоЛоЧКа» — 11 суден тіньового флоту РФ (5 нафтотанкерів, 1 газовоз, 3 суховантажі, 2 буксири)",
      "category": "Флот / Паливна логістика",
      "weapon": "Дрон / БЕК",
      "details": "16 липня 2026 року в рамках операції «МоЛоЧКа», що продовжується, Сили безпілотних систем (СБС) ЗСУ під командуванням Роберта «Мадяра» Бровді завдали ударів ще по 11 суднах тіньового флоту РФ в акваторіях Чорного та Азовського морів. Серед уражених — п'ять нафтових танкерів, один танкер-газовоз, три суховантажні судна та два буксири. До кінця 16 липня загальна кількість суден, уражених у ході операції «МоЛоЧКа», досягла 147 одиниць — 117 в Азовському морі та 30 у Чорному. Концепція операції передбачає «невиліковний параліч логістики»: українські безекіпажні катери виводять судна з ладу, уражаючи ходову частину, рульове управління та навігаційне обладнання, не пробиваючи при цьому корпус і не створюючи загрози екологічної катастрофи. Тіньовий флот є головним інструментом Росії для експорту нафти в обхід західних санкцій — саме нафтові доходи фінансують військову машину Кремля. Ударами по цих суднах Україна системно перекриває фінансові артерії війни та перетворює Азовське море на ворожу для російського судноплавства акваторію.",
      "source": "СБС ЗСУ (Роберт «Мадяр» Бровді), pravda.com.ua, Ukrinform, Armyinform"
    },
    "en": {
      "region": "Sea of Azov / Black Sea (open waters)",
      "target": "Operation 'MoLoChKa' — 11 Russian Shadow Fleet Vessels (5 oil tankers, 1 LNG tanker, 3 dry cargo ships, 2 tugboats)",
      "category": "Fleet / Fuel Logistics",
      "weapon": "Drone / USV",
      "details": "On July 16, 2026, as part of the ongoing Operation 'MoLoChKa', Ukraine's Unmanned Systems Forces (USF) under commander Robert 'Madyar' Brovdi struck 11 more vessels of the Russian shadow fleet in the Black Sea and Sea of Azov. Among those hit were five oil tankers, one LNG tanker, three dry cargo vessels, and two tugboats. By the end of July 16, the total number of vessels struck during Operation MoLoChKa reached 147 — 117 in the Sea of Azov and 30 in the Black Sea. The operation's concept envisions 'incurable logistical paralysis': Ukrainian unmanned surface vessels disable ships by targeting their propulsion, steering, and navigation systems without breaching hulls, thus avoiding environmental catastrophe. Russia's shadow fleet is its primary tool for exporting oil in circumvention of Western sanctions — and it is oil revenues that fund the Kremlin's war machine. By systematically striking these vessels, Ukraine is cutting off the financial lifelines of the war and turning the Sea of Azov into hostile waters for Russian shipping.",
      "source": "USF of the AFU (Robert 'Madyar' Brovdi), pravda.com.ua, Ukrinform, Armyinform"
    },
    "id": 236
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
console.log('Added July 16, 2026 events to data.js successfully!');
