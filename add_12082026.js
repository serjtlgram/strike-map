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
    "date": "12.08.2026",
    "lat": 44.7240,
    "lng": 37.7850,
    "distance": calcMinDistance(44.7240, 37.7850),
    "ru": {
      "region": "Краснодарский край, г. Новороссийск (Цемесская бухта)",
      "target": "Новороссийская военно-морская база ЧФ РФ и инфраструктура морского порта Новороссийск",
      "category": "ВПК",
      "weapon": "Дроны-камикадзе, ракеты «Нептун», морские дроны",
      "details": "В ночь на 12 августа 2026 года Силы обороны Украины провели масштабную комбинированную операцию по ключевым военным и логистическим объектам в Новороссийске на расстоянии свыше 350 километров от фронта. В налете одновременно применялись реактивные беспилотники «Паляниця», крылатые ракеты «Нептун» и морские надводные дроны СБУ и ВМС. Главными целями стали причальные сооружения Новороссийской военно-морской базы Черноморского флота РФ, позиции береговых комплексов ПВО и портовая инфраструктура в Цемесской бухте. В результате скоординированных ударов зафиксированы взрывы на территории базы и портовых терминалов, повреждения получили вспомогательные причалы и оборудование перевалки грузов. Местные власти ввели в Новороссийске режим чрезвычайной ситуации из-за повреждений инфраструктуры и аварий на водопроводе. Атака существенно нарушила морскую логистику и боеготовность флота.",
      "source": "Генштаб ВСУ, ВМС ВСУ, оперативный штаб Краснодарского края, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Краснодарський край, м. Новоросійськ (Цемеська бухта)",
      "target": "Новоросійська військово-морська база ЧФ РФ та інфраструктура морського порту Новоросійськ",
      "category": "ВПК",
      "weapon": "Дрони-камікадзе, ракети «Нептун», морські дрони",
      "details": "У ніч проти 12 серпня 2026 року Сили оборони України провели масштабну комбіновану операцію по ключових військових та логістичних об'єктах у Новоросійську на відстані понад 350 кілометрів від фронту. У нальоті одночасно застосовувалися реактивні безпілотники «Паляниця», крилаті ракети «Нептун» та морські надводні дрони СБУ і ВМС. Головними цілями стали причальні споруди Новоросійської військово-морської бази Чорноморського флоту РФ, позиції берегових комплексів ППО та портова інфраструктура в Цемеській бухті. У результаті скоординованих ударів зафіксовано вибухи на території бази та портових терміналів, пошкоджень зазнали допоміжні причали та обладнання перевалки вантажів. Місцева влада ввела в Новоросійську режим надзвичайної ситуації через пошкодження інфраструктури та аварії на водогоні. Атака суттєво порушила морську логістику і боєздатність флоту.",
      "source": "Генштаб ЗСУ, ВМС ЗСУ, оперативний штаб Краснодарського краю, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Krasnodar Krai, Novorossiysk (Tsemes Bay)",
      "target": "Novorossiysk Naval Base of the Black Sea Fleet and Seaport Infrastructure",
      "category": "Military",
      "weapon": "Kamikaze drones, Neptune missiles, USVs",
      "details": "On the night of August 12, 2026, the Ukrainian Defense Forces executed a synchronized multi-domain strike targeting strategic military and port facilities in Novorossiysk, over 350 kilometers from the frontline. The combined operation utilized Palianytsia jet-powered drones, Neptune cruise missiles, and sea surface attack drones operated by the SBU and Ukrainian Navy. Primary targets included mooring facilities at the Novorossiysk Naval Base of the Black Sea Fleet, air defense batteries, and seaport shipping infrastructure across Tsemes Bay. The coordinated impacts triggered heavy explosions and fires inside the naval perimeter and port terminals, damaging auxiliary berths and cargo handling units. Local authorities declared a state of emergency across Novorossiysk due to infrastructure damage and disrupted municipal water networks. The strike severely degraded fleet logistics and naval readiness.",
      "source": "General Staff of AFU, Ukrainian Navy, Krasnodar HQ, OSINT (Astra), Media"
    }
  },
  {
    "date": "12.08.2026",
    "lat": 45.0933,
    "lng": 33.5986,
    "distance": calcMinDistance(45.0933, 33.5986),
    "ru": {
      "region": "АР Крым, Сакский район, пгт Новофедоровка",
      "target": "Военный аэродром «Саки» (43-й отдельный морской штурмовой авиационный полк ВМФ РФ)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "12 августа 2026 года Силы обороны Украины нанесли точный удар беспилотными летательными аппаратами по военному аэродрому «Саки» в районе поселка Новофедоровка. Авиабаза служит местом постоянной дислокации 43-го отдельного морского штурмового авиаполка ВМФ РФ, вооруженного многоцелевыми истребителями Су-30СМ и фронтовыми бомбардировщиками Су-24М. В результате прилета ударного дрона прямое поражение получила диспетчерская вышка командно-диспетчерского пункта (КДП). Взрывом и пожаром было уничтожено радионавигационное оборудование и аппаратура управления полетами, а также повреждены технические сооружения в зоне стоянок авиатехники. Генеральный штаб ВСУ официально подтвердил результативное поражение ключевого пункта управления аэродрома, что временно заблокировало возможность координации боевых вылетов российской авиации с этой базы.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT (Astra, Crimeanwind), СМИ"
    },
    "uk": {
      "region": "АР Крим, Сакський район, смт Новофедорівка",
      "target": "Військовий аеродром «Саки» (43-й окремий морський штурмовий авіаційний полк ВМФ РФ)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "12 серпня 2026 року Сили оборони України завдали точного удару безпілотними літальними апаратами по військовому аеродрому «Саки» в районі селища Новофедорівка. Авіабаза слугує місцем постійної дислокації 43-го окремого морського штурмового авіаполку ВМФ РФ, озброєного багатоцільовими винищувачами Су-30СМ та фронтовими бомбардувальниками Су-24М. У результаті влучання ударного дрона прямого ураження зазнала диспетчерська вежа командно-диспетчерського пункту (КДП). Вибухом і пожежею було знищено радіонавігаційне обладнання та апаратуру управління польотами, а також пошкоджено технічні споруди в зоні стоянок авіатехніки. Генеральний штаб ЗСУ офіційно підтвердив результативне ураження ключового пункту управління аеродрому, що тимчасово заблокувало можливість координації бойових вильотів російської авіації з цієї бази.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT (Astra, Crimeanwind), ЗМІ"
    },
    "en": {
      "region": "Crimea, Saky District, Novofedorivka",
      "target": "Saki Military Airbase (43rd Naval Assault Aviation Regiment, Russian Navy)",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 12, 2026, the Ukrainian Defense Forces carried out a precision drone strike against the Saki military airbase near the settlement of Novofedorivka. The airbase serves as the home base for the Russian Navy's 43rd Separate Naval Assault Aviation Regiment, which operates Su-30SM multirole fighters and Su-24M tactical bombers. Direct UAV impacts severely damaged the airfield's air traffic control tower and flight coordination center. The explosion and resulting fire disabled crucial radionavigation systems, runway telemetry instruments, and support infrastructure around the aircraft servicing zones. The General Staff of the Ukrainian Armed Forces officially confirmed the destruction of this key flight command facility, which temporarily grounded combat sortie coordination for Russian naval aviation units operating from the airfield.",
      "source": "General Staff of AFU, GUR MO, OSINT (Astra, Crimeanwind), Media"
    }
  },
  {
    "date": "12.08.2026",
    "lat": 45.5103,
    "lng": 32.7005,
    "distance": calcMinDistance(45.5103, 32.7005),
    "ru": {
      "region": "АР Крым, Черноморский район, пгт Черноморское",
      "target": "Узел ретрансляции и боевого управления ударными БПЛА («Герань-2» / «Гербера»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "12 августа 2026 года подразделения Сил обороны Украины провели результативную операцию по ликвидации важного узла управления беспилотной авиацией ВС РФ в районе Черноморского на западе Крымского полуострова. Высокоточными ударными БПЛА был атакован наземный высотный ретранслятор и стационарный пункт наведения, использовавшийся российскими военными для координации и телеметрии дальнобойных дронов-камикадзе типов «Герань-2», «Гербера» и разведывательных комплексов. Прямой удар привел к детонации аппаратуры связи, обрушению антенно-мачтовых конструкций и уничтожению командного модуля. Генштаб ВСУ официально подтвердил уничтожение этого ретранслятора. Ликвидация объекта существенно нарушила каналы передачи данных и устойчивость навигационных маршрутов российских ударных БПЛА, направляемых в сторону Одесской и Николаевской областей.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT (Astra, Crimeanwind), СМИ"
    },
    "uk": {
      "region": "АР Крим, Чорноморський район, смт Чорноморське",
      "target": "Вузол ретрансляції та бойового управління ударними БПЛА («Герань-2» / «Гербера»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "12 серпня 2026 року підрозділи Сил оборони України провели результативну операцію з ліквідації важливого вузла управління безпілотною авіацією ЗС РФ у районі Чорноморського на заході Кримського півострова. Високоточними ударними БПЛА було атаковано наземний висотний ретранслятор та стаціонарний пункт наведення, який російські військові використовували для координації та телеметрії далекобійних дронів-камікадзе типів «Герань-2», «Гербера» та розвідувальних комплексів. Прямий удар призвів до детонації апаратури зв'язку, обвалення антенно-щоглових конструкцій та знищення командного модуля. Генштаб ЗСУ офіційно підтвердив знищення цього ретранслятора. Ліквідація об'єкта суттєво порушила канали передачі даних і стійкість навігаційних маршрутів російських ударних БПЛА, спрямованих у бік Одеської та Миколаївської областей.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT (Astra, Crimeanwind), ЗМІ"
    },
    "en": {
      "region": "Crimea, Chornomorske District, Chornomorske",
      "target": "UAV Guidance and Signal Relay Hub (Geran-2 / Gerber UAV Systems)",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 12, 2026, Ukrainian Defense Forces conducted an operation to eliminate an operational drone communication and control hub near the coastal town of Chornomorske in western Crimea. Precision strike UAVs targeted a high-altitude radio relay station and ground command post utilized by Russian forces for guiding and maintaining telemetry links with long-range Shahed/Geran-2 and Gerber strike drones. The direct hit ignited electronic control equipment, collapsed antenna masts, and destroyed the command guidance module. The General Staff of the Armed Forces of Ukraine officially confirmed the destruction of this vital relay installation. The elimination of this hub significantly degraded data transmission channels and compromised routing consistency for Russian attack UAV swarms launched toward Odesa and Mykolaiv regions.",
      "source": "General Staff of AFU, GUR MO, OSINT (Astra, Crimeanwind), Media"
    }
  },
  {
    "date": "12.08.2026",
    "lat": 44.5420,
    "lng": 33.6060,
    "distance": calcMinDistance(44.5420, 33.6060),
    "ru": {
      "region": "г. Севастополь, Балаклавский район (Севастопольская ТЭС)",
      "target": "Энергетический комплекс Балаклавской ТЭС (ПГУ-ТЭС «Таврическая») и ПС 330 кВ «Севастополь»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 12 августа 2026 года рой украинских дальнобойных БПЛА совершил массированный налет на узловые объекты энергетической инфраструктуры Севастополя в Балаклавском районе. Балаклавская ПГУ-ТЭС («Таврическая») установленной мощностью 470 МВт и узловая подстанция 330 кВ являются критически важными объектами, снабжающими электроэнергией главную военно-морскую базу ЧФ РФ, судоремонтные заводы и комплексы ПВО. Несмотря на плотный заградительный огонь ПВО, часть ударных дронов пробилась к энергообъектам, вызвав взрывы, повреждения распределительных устройств и сильные пожары на прилегающей территории. В результате атаки в Севастополе, Саках и Евпатории произошли масштабные аварийные отключения электричества, вводились графики ограничений, а на объектах жизнеобеспечения был объявлен особый режим.",
      "source": "Генштаб ВСУ, оккупационная администрация Севастополя, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "м. Севастополь, Балаклавський район (Севастопольська ТЕС)",
      "target": "Енергетичний комплекс Балаклавської ТЕС (ПГУ-ТЕС «Таврійська») та ПС 330 кВ «Севастополь»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 12 серпня 2026 року рій українських далекобійних БПЛА здійснив масований наліт на вузлові об'єкти енергетичної інфраструктури Севастополя в Балаклавському районі. Балаклавська ПГУ-ТЕС («Таврійська») встановленою потужністю 470 МВт та вузлова підстанція 330 кВ є критично важливими об'єктами, що живлять головну військово-морську базу ЧФ РФ, судноремонтні заводи та комплекси ППО. Попри щільний загороджувальний вогонь ППО, частина ударних дронів пробилася до енергооб'єктів, спричинивши вибухи, пошкодження розподільчих пристроїв та великі пожежі на прилеглій території. У результаті атаки в Севастополі, Саках та Євпаторії сталися масштабні аварійні відключення електрики, вводилися графіки обмежень, а на об'єктах життєзабезпечення було оголошено особливий режим.",
      "source": "Генштаб ЗСУ, окупаційна адміністрація Севастополя, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Sevastopol, Balaklava District (Sevastopol TPP)",
      "target": "Balaklava Thermal Power Plant Complex (Tavricheskaya TPP) and 330 kV Substation",
      "category": "Military",
      "weapon": "Drone",
      "details": "On the night of August 12, 2026, a swarm of Ukrainian long-range strike drones carried out a raid against strategic power facilities in the Balaklava district of Sevastopol. The 470 MW Balaklava Combined Cycle Power Plant (Tavricheskaya TPP) and the 330 kV Sevastopol central substation provide base-load electricity to Russian Black Sea Fleet naval facilities, ship repair yards, and air defense radar networks. Despite defensive barrages from local air defense batteries, several strike UAVs reached the power complex, triggering explosions, damaging distribution switchgear, and starting extensive fires. The attack caused widespread blackouts across Sevastopol, Saky, and Yevpatoria, compelling regional authorities to implement rolling power cuts and activate emergency protocols across essential infrastructure.",
      "source": "General Staff of AFU, Sevastopol Administration, OSINT (Astra), Media"
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

// Remove existing 12.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '12.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 12 August 2026! Total items in data.js: ${data.length}`);
