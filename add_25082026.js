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
    "date": "25.08.2026",
    "lat": 47.7820,
    "lng": 39.8510,
    "distance": calcMinDistance(47.7820, 39.8510),
    "ru": {
      "region": "Ростовская область, г. Новошахтинск",
      "target": "Новошахтинский завод нефтепродуктов (ОАО «НЗНП»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 25 августа 2026 года группа украинских ударных дронов атаковала Новошахтинский завод нефтепродуктов в Ростовской области. Это крупнейший действующий поставщик светлых нефтепродуктов на юге России с установленной мощностью переработки порядка 5,6 миллиона тонн сырой нефти ежегодно. Завод имеет прямое значение для снабжения топливом и горюче-смазочными материалами российской группировки войск. Несмотря на интенсивную работу дежурных расчетов ПВО, несколько дронов-камикадзе спикировали на производственную площадку и пробили защитные конструкции. В результате точных попаданий вспыхнул технологический сектор первичной переработки нефти. Губернатор Ростовской области подтвердил повреждения производственных мощностей, после чего руководство предприятия приняло решение о полной временной остановке технологических процессов завода.",
      "source": "Генштаб ВСУ, губернатор Ростовской области, ASTRA, OSINT"
    },
    "uk": {
      "region": "Ростовська область, м. Новошахтинськ",
      "target": "Новошахтинський завод нафтопродуктів (ВАТ «НЗНП»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч на 25 серпня 2026 року група українських ударних дронів атакувала Новошахтинський завод нафтопродуктів у Ростовській області. Це найбільший діючий постачальник світлих нафтопродуктів на півдні Росії із проектною потужністю переробки близько 5,6 мільйона тонн сирої нафти щороку. Завод відіграє стратегічну роль у забезпеченні пальним та мастильними матеріалами окупаційних військ РФ. Попри активну роботу розрахунків ППО над регіоном, кілька безпілотників прорвалися до виробничого майданчика та вразили промислову інфраструктуру. Внаслідок влучань спалахнула пожежа в районі технологічних установок первинної переробки. Губернатор Ростовської області офіційно визнав пошкодження підприємства, після чого роботу нафтопереробного заводу було повністю тимчасово зупинено.",
      "source": "Генштаб ЗСУ, губернатор Ростовської області, ASTRA, OSINT"
    },
    "en": {
      "region": "Rostov Oblast, Novoshakhtinsk",
      "target": "Novoshakhtinsk Oil Refinery (JSC 'NZNP')",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 25, 2026, Ukrainian long-range strike drones carried out a successful attack against the Novoshakhtinsk Oil Refinery in Rostov Oblast. Operating as the largest petroleum processing plant in southern Russia, the enterprise boasts an annual crude refining capacity of around 5.6 million metric tons. The refinery plays an indispensable role in supplying diesel, gasoline, and lubricants to Russian military forces in the south. Despite interception attempts by regional air defenses, kamikaze UAVs struck crucial industrial equipment across the primary refining units. The resulting explosions sparked significant structural fires. The regional governor publicly confirmed infrastructural damage at the enterprise, which forced the refinery management to temporarily halt all operational and refining processes.",
      "source": "General Staff of AFU, Rostov Oblast Governor, ASTRA, OSINT"
    }
  },
  {
    "date": "25.08.2026",
    "lat": 44.8876,
    "lng": 38.8290,
    "distance": calcMinDistance(44.8876, 38.8290),
    "ru": {
      "region": "Краснодарский край, Северский район, пгт Афипский",
      "target": "Афипский нефтеперерабатывающий завод (ООО «Афипский НПЗ»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 25 августа 2026 года подразделения Сил обороны Украины провели комбинированный налет дронов на Афипский нефтеперерабатывающий завод в Краснодарском крае. Проектная мощность этого стратегического НПЗ составляет более 6,2 миллиона тонн нефти в год, обеспечивая перевалку авиакеросина, мазута и дизтоплива для группировок ВС РФ и Черноморского флота. Ударные дроны пробили систему ПВО объекта, поразив технологические блоки переработки и вызвав крупный пожар на промышленной площадке. Очевидцы зафиксировали серию мощных детонаций и яркое зарево. Власти региона признали возгорание на предприятии и падение обломков БПЛА в районе прилегающей железнодорожной станции Афипская, из-за чего временно останавливалось движение поездов. Успешный удар Генштаба ВСУ нанес существенный ущерб снабжению южного фронта.",
      "source": "Генштаб ВСУ, губернатор Краснодарского края, ASTRA, OSINT"
    },
    "uk": {
      "region": "Краснодарський край, Северський район, смт Афіпський",
      "target": "Афіпський нафтопереробний завод (ТОВ «Афіпський НПЗ»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч на 25 серпня 2026 року підрозділи Сил обороної України завдали комбінованого удару далекобійними дронами по Афіпському нафтопереробному заводу в Краснодарському краї. Проектна потужність цього стратегічного підприємства становить понад 6,2 мільйона тонн нафти на рік, забезпечуючи виробництво авіагасу та дизельного пального для окупаційних сил і Чорноморського флоту РФ. Ударні безпілотники прорвали місцеву ППО, влучивши у технологічні установки та спричинивши сильну пожежу на промисловій території. Місцеві жителі повідомляли про серію гучних вибухів та високий стовп диму. Влада регіону визнала займання на заводі та падіння уламків біля залізничної станції Афіпська, де було тимчасово паралізовано рух поїздів. Успішна атака Генштабу ЗСУ відчутно вдарила по логістиці постачання пального.",
      "source": "Генштаб ЗСУ, губернатор Краснодарського краю, ASTRA, OSINT"
    },
    "en": {
      "region": "Krasnodar Krai, Seversky District, Afipsky",
      "target": "Afipsky Oil Refinery (LLC 'Afipsky NPZ')",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 25, 2026, the Ukrainian Defense Forces launched a coordinated strike drone assault against the Afipsky Oil Refinery in Krasnodar Krai. With an annual processing capacity surpassing 6.2 million tons of crude, this major facility represents a pivotal fuel supplier for Russian armed forces and the Black Sea Fleet. Ukrainian attack UAVs penetrated localized defense screens, scoring direct impacts on core technological processing sections and igniting severe blazes. Regional authorities acknowledged the fire at the industrial plant and reported drone debris falling near the adjacent Afipskaya railway station, which disrupted regional rail transit. The successful precision strike, officially confirmed by the Ukrainian General Staff, inflicted substantial damage on enemy military fuel supply chains.",
      "source": "General Staff of AFU, Krasnodar Krai Governor, ASTRA, OSINT"
    }
  },
  {
    "date": "25.08.2026",
    "lat": 44.7800,
    "lng": 33.5500,
    "distance": calcMinDistance(44.7800, 33.5500),
    "ru": {
      "region": "г. Севастополь (АР Крым), пос. Кача",
      "target": "Радиолокационная станция 39Н6 «Каста-2Е2» на авиабазе Кача",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "25 августа 2026 года Силы обороны Украины нанесли прицельный удар дальнобойными средствами поражения по позиции российской радиолокационной станции 39Н6 «Каста-2Е2» в районе военного аэродрома Кача в оккупированном Крыму. Трехкоординатная мобильная РЛС дежурного режима являлась ключевым элементом эшелонированной противовоздушной обороны полуострова, специализируясь на обнаружении маловысотных крылатых ракет, вертолетов и низколетящих дронов. Точное попадание украинского беспилотника уничтожило аппаратную машину и антенно-мачтовое устройство комплекса, вызвав вторичную детонацию оборудования. Уничтожение дорогостоящей РЛС «Каста» образовало критическую брешь в радиолокационном поле оккупантов на юго-западном побережье Крыма, облегчив выполнение последующих боевых задач авиацией и дронами.",
      "source": "Генштаб ВСУ, ВМС ВСУ, OSINT"
    },
    "uk": {
      "region": "м. Севастополь (АР Крим), сел. Кача",
      "target": "Радіолокаційна станція 39Н6 «Каста-2Е2» на авіабазі Кача",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "25 серпня 2026 року Сили оборони України завдали прицільного удару далекобійними засобами ураження по позиції російської радіолокаційної станції 39Н6 «Каста-2Е2» поблизу військового аеродрому Кача в окупованому Криму. Мобільна трикоординатна РЛС чергового режиму відігравала ключову роль у системі ППО півострова, відповідаючи за раннє виявлення маловисотних цілей — крилатих ракет та ударних дронів. Влучне влучання українського безпілотника повністю знищило апаратну машину з антеною станції, спричинивши вибух і займання апаратури. Ліквідація сучасного комплексу «Каста» пробила істотну діру в радіолокаційному покритті окупантів над південно-західним узбережжям Криму та акваторією Чорного моря, створивши сприятливі умови для нових ударів.",
      "source": "Генштаб ЗСУ, ВМС ЗСУ, OSINT"
    },
    "en": {
      "region": "Sevastopol (Crimea), Kacha",
      "target": "39N6 'Kasta-2E2' Radar Station at Kacha Airbase",
      "category": "Military Airfield",
      "weapon": "Drone",
      "details": "On August 25, 2026, Ukrainian Defense Forces conducted a precision deep strike against a Russian 39N6 'Kasta-2E2' surveillance radar station stationed near Kacha military airbase in occupied Crimea. This advanced mobile low-altitude radar system was a cornerstone of the peninsula's layered air defense network, purpose-built to detect low-flying cruise missiles, aircraft, and stealth strike drones. The direct drone impact destroyed the radar antenna mast and command vehicle, triggering secondary detonations of internal electronic hardware. The destruction of the costly 'Kasta' system opened a significant coverage gap in Russia's radar surveillance across southwestern Crimea and adjacent Black Sea waters, substantially facilitating future aerial and maritime operations.",
      "source": "General Staff of AFU, Ukrainian Navy, OSINT"
    }
  },
  {
    "date": "25.08.2026",
    "lat": 45.7144,
    "lng": 33.8596,
    "distance": calcMinDistance(45.7144, 33.8596),
    "ru": {
      "region": "АР Крым, пгт Первомайское",
      "target": "Ремонтно-восстановительная база бронетанковой и автомобильной техники ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "25 августа 2026 года Силы обороны Украины нанесли результативный удар ударными дронами по крупной ремонтно-восстановительной базе оккупационных войск в пгт Первомайское на севере Крыма. Данный специализированный объект ВПК использовался российским военным командованием для капитального ремонта, восстановления и регламентного обслуживания подбитой бронетехники, самоходных артиллерийских установок и армейских тягачей группировки войск «Днепр». Несколько ударных БПЛА поразили основные ремонтные ангары, механические цеха и открытую стоянку военной техники, ожидавшей запчастей. В результате серии детонаций и сильного пожара было уничтожено и повреждено оборудование для техобслуживания и находившиеся в боксах бронемашины, что сорвало темпы восстановления техники для передовой.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "АР Крим, смт Первомайське",
      "target": "Ремонтно-відновлювальна база бронетанкової та автомобільної техніки ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "25 серпня 2026 року Сили оборони України здійснили результативну атаку ударними дронами по великій ремонтно-відновлювальній базі окупаційних військ у смт Первомайське на півночі Криму. Цей спеціалізований об'єкт ВПК використовувався командуванням РФ для відновлення, капітального ремонту та обслуговування пошкодженої бронетехніки, артилерійських систем і військового автотранспорту угруповання «Днєпр». Українські безпілотники влучили у головні ремонтні цехи, склад запчастин та майданчик із зосередженням бойових машин. Серія вибухів та масштабна пожежа знищили високотехнологічне ремонтне обладнання й пошкодили відновлювану техніку, що суттєво загальмувало процес поповнення бронепарку російських військ на південному фронті.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Crimea, Pervomayskoye",
      "target": "Russian Military Armored Vehicle Repair and Maintenance Base",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 25, 2026, Ukrainian forces conducted an effective drone strike targeting a major military repair and recovery base in Pervomayskoye in northern Crimea. Operating as a critical maintenance hub, the facility was utilized by Russian forces to overhaul, repair, and maintain battle-damaged tanks, armored personnel carriers, artillery pieces, and heavy military trucks for the 'Dnepr' grouping of forces. Strike UAVs successfully hit primary maintenance bays, engineering workshops, and open-air holding areas containing hardware awaiting spare parts. The resulting explosions and extensive blazes severely damaged maintenance rigs, specialized repair tools, and armored vehicles inside the workshops, significantly disrupting armored fleet replenishment for frontline Russian units.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "25.08.2026",
    "lat": 45.5080,
    "lng": 32.7000,
    "distance": calcMinDistance(45.5080, 32.7000),
    "ru": {
      "region": "АР Крым, пгт Черноморское",
      "target": "Узел связи и ретранслятор командного управления БПЛА «Герань» и «Гербера»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "25 августа 2026 года подразделения Сил обороны Украины поразили защищенный узел связи и специализированный ретрансляционный комплекс ВС РФ в районе Черноморского на западе Крыма. Оккупанты использовали эту позицию для ретрансляции команд управления, телеметрии и координации маршрутов ударных дронов типа «Герань-2» и ложных целей «Гербера», запускаемых по южным областям Украины. Точечный удар беспилотника привел к поражению аппаратных контейнеров, мачт спутниковой связи и антенных решеток наведения. В результате уничтожения ключевого связного узла противник потерял возможность стабильного низковысотного управления беспилотниками в прибрежной полосе Черного моря, что существенно снизило эффективность их последующих ночных налетов.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "АР Крим, смт Чорноморське",
      "target": "Вузол зв'язку та ретранслятор командного управління БПЛА «Герань» і «Гербера»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "25 серпня 2026 року Сили оборони України успішно уразили захищений вузол зв'язку та спеціалізований ретрансляційний комплекс окупантів у районі Чорноморського на заході Криму. Російські війська використовували цю позицію для передачі сигналів телеметрії, навігації та корекції траєкторій польоту ударних дронів «Герань-2» і дронів-пасток «Гербера» під час атак на південь України. Точний удар українського дрона знищив апаратні модулі зв'язку, супутникове обладнання та антенно-фідерні системи наведення. Внаслідок ліквідації цього ретранслятора окупанти втратили надійний канал управління безпілотниками у прибережній зоні Чорного моря, що суттєво послабило координацію ворожих повітряних операцій.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Crimea, Chornomorske",
      "target": "Communications and Relay Hub for 'Geran' and 'Gerbera' UAVs",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 25, 2026, Ukrainian strike forces carried out a precision strike on a specialized military communications and drone relay station near Chornomorske in western Crimea. The Russian military utilized this coastal relay post to transmit guidance commands, telemetry, and low-altitude flight adjustments for 'Geran-2' kamikaze drones and 'Gerbera' decoy UAVs targeting southern Ukrainian regions. The drone strike destroyed modular communication containers, satellite uplink receivers, and directional antenna arrays on site. Neutralizing this critical relay infrastructure stripped Russian operators of reliable real-time command channels over coastal Black Sea airspace, substantially reducing the coordination and operational precision of subsequent drone sorties.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "25.08.2026",
    "lat": 48.5740,
    "lng": 39.3078,
    "distance": calcMinDistance(48.5740, 39.3078),
    "ru": {
      "region": "Луганская область, г. Луганск",
      "target": "Учебный центр и база подготовки операторов БПЛА ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "25 августа 2026 года Силы обороны Украины нанесли точный удар с воздуха по специализированному учебному центру подготовки расчетов беспилотных систем ВС РФ в оккупированном Луганске. На территории объекта инструкторы противника вели масштабную подготовку операторов ударных FPV-дронов, расчетов разведывательных комплексов («Орлан-10», «Zala», «Supercam»), а также осуществляли сборку и модернизацию беспилотников перед отправкой на линию фронта. Украинские дроны поразили учебные корпуса, лабораторные классы с тренажерами и помещения сборки БПЛА. Попадания вызвали детонацию готовых боеприпасов для дронов и локальный пожар, разрушивший техническую инфраструктуру центра. Ликвидация учебной базы сорвала регулярный выпуск подготовленных операторов для восточного фронта.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Луганська область, м. Луганськ",
      "target": "Навчальний центр і база підготовки операторів БПЛА ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "25 серпня 2026 року Сили оборони України завдали точного повітряного удару по спеціалізованому навчальному центру операторів безпілотних систем ЗС РФ в окупованому Луганську. На базі об'єкта ворожі інструктори здійснювали підготовку екіпажів ударних FPV-дронів, операторів розвідувальних безпілотників («Орлан-10», «Zala», «Supercam»), а також збирання та технічне переоснащення дронів для передової. Українські засоби ураження поцілили в навчальні корпуси, комп'ютерні тренажерні класи та майстерні комплектування. Влучання спричинили детонацію боєприпасів для дронів і пожежу, яка зруйнувала матеріально-технічну базу центру. Знищення цього об'єкта зірвало налагоджений процес підготовки кваліфікованих операторів для підрозділів РФ на східному фронті.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Luhansk Oblast, Luhansk",
      "target": "Russian UAV Operator Training Center and Flight School",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 25, 2026, Ukrainian forces conducted a precision strike against a dedicated training center and proving ground for Russian unmanned aerial system operators in occupied Luhansk. At this facility, enemy instructors provided specialized training for FPV drone pilots and reconnaissance UAV crews ('Orlan-10', 'Zala', 'Supercam'), alongside running assembly and payload modification workshops for frontline units. Precision strike weapons struck main training barracks, computer simulation labs, and assembly workshops. The impacts triggered secondary explosions of drone payloads and ignited intense fires that destroyed technical training hardware. Disabling this training center dealt a direct blow to Russia's pilot pipeline supplying the eastern operational sector.",
      "source": "General Staff of AFU, OSINT"
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

// Remove existing 25.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '25.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 25 August 2026! Total items in data.js: ${data.length}`);
