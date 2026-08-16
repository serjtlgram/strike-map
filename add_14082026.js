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
    "date": "14.08.2026",
    "lat": 59.6917,
    "lng": 28.4083,
    "distance": calcMinDistance(59.6917, 28.4083),
    "ru": {
      "region": "Ленинградская область, Кингисеппский район (Морской порт Усть-Луга)",
      "target": "Комплекс фракционирования и перевалки газового конденсата ООО «НОВАТЭК-Усть-Луга»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 14 августа 2026 года дальнобойные ударные БПЛА Сил обороны Украины совершили массированный налет на морской терминал и производственный комплекс ООО «НОВАТЭК-Усть-Луга» в порту Усть-Луга Ленинградской области на удалении около 900 км от границы. Предприятие перерабатывает стабильный газовый конденсат в нафту, авиакеросин, мазут и дизельное топливо, являясь ключевым экспортно-топливным узлом на Балтике. Несколько украинских дронов прорвали зональную ПВО и поразили две технологические установки фракционирования и перегонки. На территории терминала вспыхнул масштабный пожар с густым задымлением, а в аэропорту Пулково и воздушном пространстве региона временно вводился план «Ковер». Генеральный штаб ВСУ официально подтвердил результативное поражение комплекса, в результате чего технологический цикл перевалки и фракционирования был временно остановлен.",
      "source": "Генштаб ВСУ, губернатор Дрозденко, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Ленінградська область, Кінгісеппський район (Морський порт Усть-Луга)",
      "target": "Комплекс фракціонування та перевалки газового конденсату ТОВ «НОВАТЕК-Усть-Луга»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 14 серпня 2026 року далекобійні ударні БПЛА Сил оборони України здійснили масований наліт на морський термінал та виробничий комплекс ТОВ «НОВАТЕК-Усть-Луга» у порту Усть-Луга Ленінградської області на відстані близько 900 км від кордону. Підприємство переробляє стабільний газовий конденсат на нафту, авіагас, мазут та дизельне пальне, будучи ключовим експортно-паливним вузлом на Балтиці. Кілька українських дронів прорвали зональну ППО та уразили дві технологічні установки фракціонування і перегонки. На території термінала спалахнула масштабна пожежа з густим задимленням, а в аеропорту Пулково та повітряному просторі регіону тимчасово вводився план «Килим». Генеральний штаб ЗСУ офіційно підтвердив результативне ураження комплексу, у результаті чого технологічний цикл перевалки та фракціонування було тимчасово зупинено.",
      "source": "Генштаб ЗСУ, губернатор Дрозденко, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Leningrad Oblast, Kingiseppsky District (Port of Ust-Luga)",
      "target": "Novatek-Ust-Luga Gas Condensate Processing and Transshipment Complex",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 14, 2026, Ukrainian long-range strike drones carried out a mass raid targeting the Novatek-Ust-Luga gas condensate processing and transshipment terminal in Ust-Luga, Leningrad Oblast, roughly 900 km from the border. The facility processes stable gas condensate into naphtha, jet fuel, fuel oil, and diesel, serving as a critical energy export and military supply hub on the Baltic Sea. Several UAVs breached regional air defenses, hitting two technological fractionation and distillation units. The direct impacts ignited a major blaze across the terminal, prompting emergency air traffic shutdowns under the Kovyor plan at St. Petersburg's Pulkovo Airport. The General Staff of the Ukrainian Armed Forces officially confirmed the strike, which forced a temporary halt in fuel fractionation and maritime loading operations.",
      "source": "General Staff of AFU, Governor Drozdenko, OSINT (Astra), Media"
    }
  },
  {
    "date": "14.08.2026",
    "lat": 44.7228,
    "lng": 37.8386,
    "distance": calcMinDistance(44.7228, 37.8386),
    "ru": {
      "region": "Краснодарский край, г. Новороссийск (Восточный район)",
      "target": "Нефтерайон «Шесхарис» (перевалочный комплекс АО «Черномортранснефть», ПАО «Транснефть»)",
      "category": "Нефтегаз",
      "weapon": "Дрон, ракеты",
      "details": "14 августа 2026 года Силы обороны Украины нанесли повторный комплексный удар ударными беспилотниками и ракетами по нефтеэкспортному перевалочному комплексу «Шесхарис» в порту Новороссийска. Нефтерайон «Шесхарис» является крупнейшим терминалом на юге России, через который осуществляется экспортная перевалка сырой нефти и мазута, а также бункеровка кораблей Черноморского флота РФ. В результате воздушной атаки и падения обломков получили повреждения технологические трубопроводы и причальные узлы налива. Из-за непосредственной угрозы повторных ударов морские танкеры были экстренно выведены на внешний рейд, что привело к переполнению берегового резервуарного парка и полной остановке приема и отгрузки нефти. Президент Украины Владимир Зеленский подтвердил проведение системной стратегической операции по блокированию экспортной топливной логистики РФ.",
      "source": "ВМС ВСУ, ГУР МО, оперативный штаб Краснодарского края, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Краснодарський край, м. Новоросійськ (Східний район)",
      "target": "Нафторайон «Шесхаріс» (перевалочний комплекс АТ «Чорномортранснафта», ПАТ «Транснафта»)",
      "category": "Нафтогаз",
      "weapon": "Дрон, ракети",
      "details": "14 серпня 2026 року Сили оборони України завдали повторного комплексного удару ударними безпілотниками та ракетами по нафтоекспортному перевалочному комплексу «Шесхаріс» у порту Новоросійська. Нафторайон «Шесхаріс» є найбільшим терміналом на півдні Росії, через який здійснюється експортна перевалка сирої нафти та мазуту, а також бункерування кораблів Чорноморського флоту РФ. У результаті повітряної атаки та падіння уламків зазнали пошкоджень технологічні трубопроводи та причальні вузли наливу. Через безпосередню загрозу повторних ударів морські танкери були екстрено виведені на зовнішній рейд, що призвело до переповнення берегового резервуарного парку і повної зупинки прийому та відвантаження нафти. Президент України Володимир Зеленський підтвердив проведення системної стратегічної операції з блокування експортної паливної логістики РФ.",
      "source": "ВМС ЗСУ, ГУР МО, оперативний штаб Краснодарського краю, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Krasnodar Krai, Novorossiysk (Eastern District)",
      "target": "Sheskharis Oil Complex (Chernomortransneft / Transneft Loading Terminal)",
      "category": "Oil & Gas",
      "weapon": "Drone, missiles",
      "details": "On August 14, 2026, the Ukrainian Defense Forces launched a follow-up multi-domain strike with UAVs and cruise missiles against the Sheskharis oil transshipment complex in Novorossiysk. Sheskharis represents Russia's largest maritime oil hub on the Black Sea, responsible for exporting crude oil, heavy fuel oil, and supplying bunker fuel to the Black Sea Fleet. The strike caused structural damage to technological pipeline manifolds and deep-water loading berths across the terminal. Facing ongoing drone threats, international oil tankers were urgently evacuated to outer anchorages, which triggered a complete saturation of the onshore tank farm and a total suspension of crude oil intake and loading. Ukrainian President Volodymyr Zelensky confirmed this strike as part of an ongoing strategic campaign to disrupt Russian oil export revenues and military logistics.",
      "source": "Ukrainian Navy, GUR MO, Krasnodar HQ, OSINT (Astra), Media"
    }
  },
  {
    "date": "14.08.2026",
    "lat": 56.7620,
    "lng": 36.0350,
    "distance": calcMinDistance(56.7620, 36.0350),
    "ru": {
      "region": "Тверская область, Калининский муниципальный округ",
      "target": "Распределительный логистический комплекс Wildberries",
      "category": "Логистический центр",
      "weapon": "Дрон",
      "details": "14 августа 2026 года подразделения украинских ударных БПЛА атаковали крупный распределительный логистический комплекс маркетплейса Wildberries в Калининском округе Тверской области. Данный региональный логистический хаб задействован в транспортировке грузов двойного назначения, средств связи, обмундирования и армейской экипировки для подразделений ВС РФ. В результате налета и воздействия средств ПВО зафиксированы прямые прилеты и падение фрагментов дронов на кровлю и фасад складского терминала. На территории объекта вспыхнуло локальное возгорание с задымлением внутренних помещений стеллажного хранения, что потребовало экстренной эвакуации дежурной смены сотрудников склада. Руководство маркетплейса и региональные власти подтвердили инцидент, в результате которого работа распределительного терминала и приемка поставок были временно приостановлены.",
      "source": "OSINT (Astra), администрация Тверской области, пресс-служба Wildberries, СМИ"
    },
    "uk": {
      "region": "Тверська область, Калінінський муніципальний округ",
      "target": "Розподільчий логістичний комплекс Wildberries",
      "category": "Логістичний центр",
      "weapon": "Дрон",
      "details": "14 серпня 2026 року підрозділи українських ударних БПЛА атакували великий розподільчий логістичний комплекс маркетплейсу Wildberries у Калінінському окрузі Тверської області. Цей регіональний логістичний хаб задіяний у транспортуванні вантажів подвійного призначення, засобів зв'язку, обмундирування та армійської екіпіровки для підрозділів ЗС РФ. У результаті нальоту та впливу засобів ППО зафіксовано прямі влучання та падіння фрагментів дронів на покрівлю і фасад складського термінала. На території об'єкта спалахнуло локальне займання із задимленням внутрішніх приміщень стелажного зберігання, що потребувало екстреної евакуації чергової зміни співробітників складу. Керівництво маркетплейсу та регіональна влада підтвердили інцидент, у результаті якого роботу розподільчого термінала та прийом поставок було тимчасово призупинено.",
      "source": "OSINT (Astra), адміністрація Тверської області, прес-служба Wildberries, ЗМІ"
    },
    "en": {
      "region": "Tver Oblast, Kalininsky District",
      "target": "Wildberries Distribution & Logistics Hub",
      "category": "Logistics Hub",
      "weapon": "Drone",
      "details": "On August 14, 2026, Ukrainian attack UAVs targeted the Wildberries regional distribution and logistics center in the Kalininsky District of Tver Oblast. This distribution hub plays a noticeable role in processing dual-use items, tactical communications equipment, uniforms, and field gear supplying Russian military logistics chains. During the raid, drone impacts and falling debris struck the roof and exterior facade of the main warehouse terminal. The attack sparked a localized fire accompanied by heavy smoke inside the high-bay storage racks, requiring an emergency evacuation of warehouse personnel. Both Wildberries corporate communications and regional authorities acknowledged the incident, which led to a temporary suspension of parcel sorting and inbound cargo intake at the facility.",
      "source": "OSINT (Astra), Tver Administration, Wildberries PR, Media"
    }
  },
  {
    "date": "14.08.2026",
    "lat": 46.1240,
    "lng": 32.2980,
    "distance": calcMinDistance(46.1240, 32.2980),
    "ru": {
      "region": "Херсонская область, Скадовский район, с. Железный Порт (оккупированная территория)",
      "target": "Узел ретрансляции и пункт управления ударными БПЛА («Герань-2» / «Гербера»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "14 августа 2026 года Силы обороны Украины провели результативную операцию по разгрому ключевого приморского узла управления беспилотной авиацией противника в районе Железного Порта на временно оккупированном побережье Херсонской области. Точными ударами дальнобойных дронов были поражены два наземных высотных ретранслятора связи, а также стационарный пункт управления БПЛА. Объект использовался российскими войсками для обеспечения устойчивой телеметрии, спутниковой коррекции и прямого наведения ударных дронов типов «Герань-2» и «Гербера», запускаемых по объектам в Николаевской и Одесской областях. В результате детонации аппаратуры связи командный пункт был полностью разрушен. Генеральный штаб ВСУ официально подтвердил ликвидацию ретрансляторов и пункта управления, что существенно снизило эффективность российских налетов на юге Украины.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT, СМИ"
    },
    "uk": {
      "region": "Херсонська область, Скадовський район, с. Залізний Порт (окупована територія)",
      "target": "Вузол ретрансляції та пункт управління ударними БПЛА («Герань-2» / «Гербера»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "14 серпня 2026 року Сили оборони України провели результативну операцію з розгрому ключового приморського вузла управління безпілотною авіацією противника в районі Залізного Порту на тимчасово окупованому узбережжі Херсонської області. Точними ударами далекобійних дронів було уражено два наземні висотні ретранслятори зв'язку, а також стаціонарний пункт управління БПЛА. Об'єкт використовувався російськими військами для забезпечення стійкої телеметрії, супутникової корекції та прямого наведення ударних дронів типів «Герань-2» та «Гербера», що запускалися по об'єктах у Миколаївській та Одеській областях. У результаті детонації апаратури зв'язку командний пункт було повністю зруйновано. Генеральний штаб ЗСУ офіційно підтвердив ліквідацію ретрансляторів та пункту управління, що суттєво знизило ефективність російських нальотів на півдні України.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT, ЗМІ"
    },
    "en": {
      "region": "Kherson Oblast, Skadovsk District, Zaliznyi Port (Occupied Territory)",
      "target": "UAV Guidance Relay Hub and Drone Command Post (Geran-2 / Gerber Systems)",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 14, 2026, the Ukrainian Defense Forces conducted an operation neutralizing a vital coastal UAV command and relay installation near Zaliznyi Port in occupied Kherson Oblast. Precision strike drones scored direct hits on two high-altitude ground communication relay towers and an associated UAV command post. The facility was utilized by Russian forces to maintain encrypted telemetry, satellite correction, and guidance links for Shahed/Geran-2 and Gerber kamikaze drones targeting southern Ukraine. The strikes caused violent secondary detonations of radio equipment and communication modems, totally disabling the installation. The General Staff of the Armed Forces of Ukraine officially verified the destruction of both relay masts and the command facility, significantly curbing Russian precision UAV capabilities across the Black Sea littoral.",
      "source": "General Staff of AFU, GUR MO, OSINT, Media"
    }
  },
  {
    "date": "14.08.2026",
    "lat": 51.2720,
    "lng": 34.9080,
    "distance": calcMinDistance(51.2720, 34.9080),
    "ru": {
      "region": "Курская область, Кореневский район, с. Гордеевка",
      "target": "Передовые пункты управления и база операторов БПЛА подразделений ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "14 августа 2026 года Силы беспилотных систем и подразделения ВСУ нанесли серию скоординированных ударов по передовым пунктам управления и базам расчетов БПЛА российских войск в районах Гордеевки и Волфинского в Курской области. Эти полевые командные узлы осуществляли координацию тактических разведывательных и ударных дронов, корректировку артиллерийского огня и радиоэлектронное подавление приграничной полосы. В результате точных попаданий ударных БПЛА уничтожены антенные посты связи, полевые аппаратные комплексы управления и специализированный транспорт расчетов операторов дронов. По данным Генштаба ВСУ, поражение данных объектов сорвало планируемые контратаки противника на курском направлении и лишило передовые подразделения ВС РФ оперативной воздушной разведки и наведения высокоточного вооружения.",
      "source": "Генштаб ВСУ, СБС ВСУ, OSINT, СМИ"
    },
    "uk": {
      "region": "Курська область, Кореневський район, с. Гордіївка",
      "target": "Передові пункти управління та база операторів БПЛА підрозділів ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "14 серпня 2026 року Сили безпілотних систем та підрозділи ЗСУ завдали серії скоординованих ударів по передових пунктах управління та базах розрахунків БПЛА російських військ у районах Гордіївки та Волфинського в Курській області. Ці польові командні вузли здійснювали координацію тактичних розвідувальних і ударних дронів, коригування артилерійського вогню та радіоелектронне придушення прикордонної смуги. У результаті точних влучань ударних БПЛА знищено антенні пости зв'язку, польові апаратні комплекси управління та спеціалізований транспорт розрахунків операторів дронів. За даними Генштабу ЗСУ, ураження цих об'єктів зірвало заплановані контратаки противника на курському напрямку та позбавило передові підрозділи ЗС РФ оперативної повітряної розвідки і наведення високоточної зброї.",
      "source": "Генштаб ЗСУ, СБС ЗСУ, OSINT, ЗМІ"
    },
    "en": {
      "region": "Kursk Oblast, Korenevsky District, Gordeevka",
      "target": "Forward UAV Operator Deployment Bases and Drone Command Nodes",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 14, 2026, the Unmanned Systems Forces and Ukrainian Defense Forces launched coordinated drone strikes against forward command posts and UAV operator bases of the Russian Armed Forces near Gordeevka and Volfino in Kursk Oblast. These tactical command installations coordinated reconnaissance and strike UAVs, directed artillery fire, and operated electronic warfare systems along the border sector. Precision drone strikes destroyed tactical antenna arrays, field communication hardware, and specialized mobile operator vehicles. According to the General Staff of the Armed Forces of Ukraine, destroying these command nodes disrupted planned enemy counterattacks in the Kursk direction and severely curtailed Russian tactical reconnaissance and precision fire coordination capabilities.",
      "source": "General Staff of AFU, SBS of AFU, OSINT, Media"
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

// Remove existing 14.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '14.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 14 August 2026! Total items in data.js: ${data.length}`);
