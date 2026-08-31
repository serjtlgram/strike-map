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
    "date": "31.08.2026",
    "lat": 52.4842,
    "lng": 33.6828,
    "distance": calcMinDistance(52.4842, 33.6828),
    "ru": {
      "region": "Брянская область, Трубчевский район, с. Деснянское",
      "target": "Радиолокационная станция (РЛС) обнаружения воздушных целей ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "31 августа 2026 года Силы обороны Украины нанесли результативный удар беспилотниками по российской радиолокационной станции возле села Деснянское в Брянской области. Развернутая в приграничной полосе РЛС вела непрерывное круговое наблюдение за воздушным пространством, фиксируя перемещение украинских БПЛА и авиации на северном операционном направлении. В результате прямого попадания ударного дрона антенна радиолокатора и сопутствующий аппаратный кунг получили критические разрушения с последующим возгоранием электроники. Вывод станции из строя лишил подразделения ПВО противника оперативной информации о низколетящих целях и пробил коридор для дальнейших дальнобойных ударов. Поражение радиолокатора официально подтверждено в сводке Генштаба ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Брянська область, Трубчевський район, с. Деснянське",
      "target": "Радіолокаційна станція (РЛС) виявлення повітряних цілей ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "31 серпня 2026 року Сили оборони України завдали результативного удару безпілотниками по російській радіолокаційній станції поблизу села Деснянське в Брянській області. Розгорнута у прикордонній смузі РЛС вела безперервний круговий моніторинг повітряного простору, фіксуючи переміщення українських БПЛА та авіації на північному операційному напрямку. Унаслідок прямого влучання ударного дрона антена радіолокатора та супутній апаратний кунг зазнали критичних руйнувань із подальшим займанням електроніки. Виведення станції з ладу позбавило підрозділи ППО противника оперативної інформації про низьколітні цілі та пробило коридор для подальших далекобійних ударів. Ураження радіолокатора офіційно підтверджено у зведенні Генштабу ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Bryansk Oblast, Trubchevsk District, Desnyanskoye",
      "target": "Russian Armed Forces Air Surveillance Radar Station",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "On August 31, 2026, Ukrainian defense forces conducted a successful drone strike targeting a Russian air surveillance radar station near the village of Desnyanskoye in Bryansk Oblast. Deployed along the border zone, this radar provided continuous round-the-clock airspace monitoring, tracking incoming Ukrainian UAVs and aviation assets across the northern operational sector. Direct drone hits caused catastrophic structural damage to the phased array antenna and incinerated the onboard electronic equipment module. Neutralizing this radar station created a critical detection blind spot for Russian regional air defenses and opened safe transit lanes for subsequent deep strike sorties. The strike was officially verified in the AFU General Staff operational bulletin.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "31.08.2026",
    "lat": 52.0520,
    "lng": 34.2530,
    "distance": calcMinDistance(52.0520, 34.2530),
    "ru": {
      "region": "Брянская область, Севский район, район с. Плоскобукреевка",
      "target": "Командно-штабная машина (КШМ) из состава ЗРК С-400 «Триумф»",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "31 августа 2026 года Генеральный штаб ВСУ подтвердил уничтожение командно-штабной машины из состава новейшего зенитного ракетного комплекса С-400 «Триумф» в районе села Плоскобукреевка Брянской области. Данная специализированная машина являлась мозговым центром зенитного дивизиона, отвечая за интеграцию РЛС обнаружения, распределение воздушных целей и наведение зенитных управляемых ракет на дальних дистанциях. Точное огневое поражение привело к детонации аппаратуры и полному выгоранию командного модуля управления вместе со средствами закрытой спутниковой связи. Ликвидация КШМ полностью парализовала боевую работу всего дивизиона С-400 на данном участке приграничья, лишив противника возможности эффективно отражать воздушные атаки.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Брянська область, Севський район, район с. Плоскобукреївка",
      "target": "Командно-штабна машина (КШМ) зі складу ЗРК С-400 «Тріумф»",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "31 серпня 2026 року Генеральний штаб ЗСУ підтвердив знищення командно-штабної машини зі складу новітнього зенітного ракетного комплексу С-400 «Тріумф» у районі села Плоскобукреївка Брянської області. Ця спеціалізована машина була мозковим центром зенітного дивізіону, відповідаючи за інтеграцію РЛС виявлення, розподіл повітряних цілей та наведення зенітних керованих ракет на дальніх дистанціях. Влучне вогневе ураження призвело до детонації апаратури та повного вигорання командного модуля управління разом із засобами закритого супутникового зв'язку. Ліквідація КШМ повністю паралізувала бойову роботу всього дивізіону С-400 на цьому відтинку прикордоння, позбавивши ворога можливості ефективно відбивати повітряні атаки.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Bryansk Oblast, Sevsk District, Ploskobukreevka",
      "target": "Command and Control Vehicle of S-400 'Triumf' SAM System",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On August 31, 2026, the General Staff of the AFU confirmed the destruction of a specialized command and control post vehicle belonging to an advanced Russian S-400 Triumf surface-to-air missile battalion near Ploskobukreevka in Bryansk Oblast. The command vehicle served as the automated nerve center of the SAM battery, orchestrating radar data processing, threat evaluation, target assignment, and missile guidance algorithms. Precision strike munitions directly struck the vehicle, triggering severe internal explosions and incinerating secure satellite communication terminals. Neutralizing the command post effectively crippled the entire S-400 air defense battery along the border sector, degrading layered Russian anti-aircraft capabilities.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "31.08.2026",
    "lat": 50.4578,
    "lng": 36.9850,
    "distance": calcMinDistance(50.4578, 36.9850),
    "ru": {
      "region": "Белгородская область, Шебекинский район, с. Зимовное",
      "target": "Защищенный узел военной связи подразделения ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "31 августа 2026 года Силы обороны Украины нанесли точечный удар дальнобойным дроном по замаскированному узлу военной связи российских войск возле села Зимовное в Белгородской области. На территории этого объекта противник развернул приемо-передающие антенные комплексы, ретрансляторы тактической радиосвязи и криптографическое оборудование для управления приграничной группировкой войск. Прямое попадание ударного беспилотника разрушило аппаратный пункт, вызвало пожар и срезало антенные мачты. В результате поражения была нарушена устойчивая связь между командными пунктами и передовыми подразделениями противника на шебекинском направлении. Результаты огневого поражения подтверждены оперативным отчетом Генштаба ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Бєлгородська область, Шебекінський район, с. Зімовне",
      "target": "Захищений вузол військового зв'язку підрозділу ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "31 серпня 2026 року Сили оборони України завдали точкового удару далекобійним дроном по замаскованому вузлу військового зв'язку російських військ поблизу села Зімовне в Бєлгородській області. На території цього об'єкта противник розгорнув приймально-передавальні антенні комплекси, ретранслятори тактичного радіозв'язку та криптографічне обладнання для управління прикордонним угрупованням військ. Пряме влучання ударного безпілотника зруйнувало апаратний пункт, спричинило пожежу та зрізало антенні щогли. Унаслідок ураження було порушено стійкий зв'язок між командними пунктами та передовими підрозділами противника на шебекінському напрямку. Результати вогневого ураження підтверджено оперативним звітом Генштабу ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Belgorod Oblast, Shebekino District, Zimovnoye",
      "target": "Russian Armed Forces Tactical Military Communications Node",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "On August 31, 2026, Ukrainian forces executed a precision strike using an attack drone against a concealed Russian military communications and relay station near the village of Zimovnoye in Belgorod Oblast. The site housed multichannel transceivers, tactical radio relay masts, and secure cryptographic equipment routing command directives to frontline Russian combat units. A direct hit pulverized the primary hardware shelter, ignited a fierce localized blaze, and toppled main transmitting towers. The elimination of this hub disrupted tactical communications and compromised coordination between higher command headquarters and tactical border battalions. The strike was officially verified by the AFU General Staff.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "31.08.2026",
    "lat": 51.2725,
    "lng": 34.4697,
    "distance": calcMinDistance(51.2725, 34.4697),
    "ru": {
      "region": "Курская область, Глушковский район, с. Попово-Лежачи",
      "target": "Склад материально-технических средств и база снабжения ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "31 августа 2026 года подразделения Сил обороны Украины поразили крупный полевой склад материально-технических средств оккупантов в районе села Попово-Лежачи Глушковского района Курской области. Объект использовался российским военным командованием для накопления горюче-смазочных материалов, запасных частей к бронетехнике, фортификационного оборудования и снаряжения для снабжения приграничной группировки. В результате серии точных ударов на территории базы вспыхнул масштабный пожар с последующей детонацией хранившихся емкостей с топливом и инженерных боеприпасов. Уничтожение складских запасов сорвало график тылового обеспечения российских войск на глушковском участке фронта. Генштаб ВСУ подтвердил успешное выполнение боевой задачи.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Курська область, Глушковський район, с. Попово-Лежачі",
      "target": "Склад матеріально-технічних засобів та база постачання ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "31 серпня 2026 року підрозділи Сил оборони України уразили великий польовий склад матеріально-технічних засобів окупантів у районі села Попово-Лежачі Глушковського району Курської області. Об'єкт використовувався російським військовим командуванням для накопичення пально-мастильних матеріалів, запасних частин до бронетехніки, фортифікаційного майна та спорядження для постачання прикордонного угруповання. Унаслідок серії влучних ударів на території бази спалахнула масштабна пожежа з подальшою детонацією накопичених ємностей із пальним та інженерних боєприпасів. Знищення складських запасів зірвало графік тилового забезпечення російських військ на глушковському відтинку фронту. Генштаб ЗСУ підтвердив успішне виконання бойового завдання.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Kursk Oblast, Glushkovo District, Popovo-Lezhachi",
      "target": "Russian Armed Forces Logistical and Materiel Storage Depot",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On August 31, 2026, Ukrainian defense forces delivered a strike against a vital field logistics and materiel supply depot located near Popovo-Lezhachi in the Glushkovo district of Kursk Oblast. The depot functioned as an operational staging post storing fuels and lubricants, armored vehicle spare parts, field engineering materials, and logistical gear supplying combat units along the border. Multiple precision hits sparked a widespread fire accompanied by secondary explosions of fuel containers and specialized ordnance. The destruction of this logistical stockpile disrupted enemy resupply schedules and hampered defensive maintenance across the Glushkovo sector. The hit was officially reported in the AFU General Staff bulletin.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "31.08.2026",
    "lat": 45.3956,
    "lng": 34.7303,
    "distance": calcMinDistance(45.3956, 34.7303),
    "ru": {
      "region": "АР Крым, Нижнегорский район, с. Жемчужина (Кир-Байлар)",
      "target": "Складской комплекс материально-технических средств и боеприпасов ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "В ночь на 31 августа 2026 года Силы обороны Украины нанесли комбинированный огневой удар по тыловому складскому комплексу оккупантов в районе села Жемчужина (историческое название Кир-Байлар) в Нижнегорском районе Крыма. На этом объекте противник сосредоточил запасы материально-технического имущества, комплектующих к военной технике и партии боеприпасов для снабжения группировки войск на южном направлении. Точные попадания средств поражения вызвали сильные взрывы с вторичной детонацией и интенсивное возгорание ангаров. В результате удара уничтожена значительная часть накопленных резервов материально-технического снабжения. Успешное поражение военного объекта подтверждено сводкой Генерального штаба ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "АР Крим, Нижньогірський район, с. Жемчужина (Кир-Байлар)",
      "target": "Складський комплекс матеріально-технічних засобів та боєприпасів ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "У ніч на 31 серпня 2026 року Сили оборони України завдали комбінованого вогневого удару по тиловому складському комплексу окупантів у районі села Жемчужина (історична назва Кир-Байлар) у Нижньогірському районі Криму. На цьому об'єкті противник зосередив запаси матеріально-технічного майна, комплектуючих до військової техніки та партії боєприпасів для забезпечення угруповання військ на південному напрямку. Точні влучання засобів ураження спричинили сильні вибухи із вторинною детонацією та інтенсивне займання ангарів. Унаслідок удару знищено значну частину накопичених резервів матеріально-технічного постачання. Успішне ураження військового об'єкта підтверджено зведенням Генерального штабу ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Crimea, Nyzhnohirskyi District, Zhemchuzhyna (Qır Baylar)",
      "target": "Russian Military Logistics and Ammunition Supply Warehouse",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "In the early hours of August 31, 2026, Ukrainian forces conducted a precision strike on a Russian rear logistics and ammunition storage compound situated near Zhemchuzhyna (historically known as Qır Baylar) in Crimea's Nyzhnohirskyi district. The installation held stockpiles of technical materiel, vehicle repair components, and artillery ammunition intended to reinforce Russian front-line units across southern operational sectors. Precision impacts triggered powerful secondary detonations, setting ablaze multiple storage facilities and maintenance hangars. The strike wiped out substantial logistics reserves, depriving regional forces of critical equipment replenishment. The AFU General Staff verified the destruction of the site in its daily dispatch.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "31.08.2026",
    "lat": 48.8683,
    "lng": 38.3189,
    "distance": calcMinDistance(48.8683, 38.3189),
    "ru": {
      "region": "Луганская область, Северодонецкий район, с. Верхнекаменка",
      "target": "Складской комплекс материально-технических средств оккупационных войск",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "31 августа 2026 года украинские военные нанесли огневой удар по крупному тыловому складу материально-технических средств противника возле села Верхнекаменка в районе Лисичанска. На территории складского комплекса и прилегающей инфраструктуры базировались подразделения обеспечения, хранились запасы топлива, смазочных материалов, комплекты бронезащиты и расходные запчасти для бронетанковых частей. В результате серии точных попаданий произошла детонация цистерн и ангаров с техническим имуществом, над позицией поднялся столб густого чёрного дыма. Уничтожение узла снабжения существенно осложнило логистику российских подразделений на северском направлении. Успешное поражение цели зафиксировано в сводке Генштаба ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Луганська область, Сєвєродонецький район, с. Верхньокам’янка",
      "target": "Складський комплекс матеріально-технічних засобів окупаційних військ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "31 серпня 2026 року українські військові завдали вогневого удару по великому тиловому складу матеріально-технічних засобів противника поблизу села Верхньокам’янка в районі Лисичанська. На території складського комплексу та прилеглої інфраструктури базувалися підрозділи забезпечення, зберігалися запаси пального, мастил, комплекти бронезахисту та витратні запчастини для бронетанкових частин. Унаслідок серії влучних влучань сталася детонація цистерн та ангарів із технічним майном, над позицією піднявся стовп густого чорного диму. Знищення вузла постачання суттєво ускладнило логістику російських підрозділів на сіверському напрямку. Успішне ураження цілі зафіксовано у зведенні Генштабу ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Luhansk Oblast, Sievierodonetsk District, Verkhniokam'yanka",
      "target": "Russian Occupying Forces Materiel and Logistics Depot",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On August 31, 2026, Ukrainian forces struck a substantial Russian rear materiel and technical support compound near the village of Verkhniokam'yanka in the vicinity of Lysychansk. The logistics depot served as an essential support staging point housing stored fuel reserves, lubricants, body armor kits, and spare components for armored battalions. Coordinated precision strikes ignited fuel reservoirs and wrecked technical maintenance buildings, throwing up thick plumes of black smoke visible across the sector. Destroying this supply hub severely impeded logistical resupply for Russian forces attempting offensive drives on the Siversk axis. The AFU General Staff officially confirmed the successful hit in its operational report.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "31.08.2026",
    "lat": 47.6200,
    "lng": 36.3200,
    "distance": calcMinDistance(47.6200, 36.3200),
    "ru": {
      "region": "Запорожская область, Пологовский район, район г. Гуляйполе",
      "target": "Командный пункт управления подразделениями ударных и разведывательных БПЛА ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "31 августа 2026 года Силы обороны Украины нанесли высокоточный удар по замаскированному командно-штабному пункту управления БПЛА противника на временно оккупированной территории Запорожской области в районе Гуляйполя. На данном объекте размещались рабочие места операторов, мобильные станции спутниковой связи и антенные ретрансляторы, координировавшие вылеты разведывательных дронов и удары FPV-беспилотников по украинским оборонительным позициям. В результате прямого попадания пункт управления и антенное оборудование были полностью уничтожены, дежурная смена операторов понесла потери. Ликвидация координационного центра позволила снизить плотность вражеских атак дронами на данном участке фронта. Генштаб ВСУ подтвердил уничтожение объекта.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Запорізька область, Пологівський район, район м. Гуляйполе",
      "target": "Командний пункт управління підрозділами ударних та розвідувальних БПЛА ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "31 серпня 2026 року Сили оборони України завдали високоточного удару по замаскованому командно-штабному пункту управління БПЛА противника на тимчасово окупованій території Запорізької області в районі Гуляйполя. На цьому об'єкті розміщувалися робочі місця операторів, мобільні станції супутникового зв'язку та антенні ретранслятори, які координували вильоти розвідувальних дронів та удари FPV-безпілотників по українських оборонних позиціях. Унаслідок прямого влучання пункт управління та антенне обладнання були повністю знищені, чергова зміна операторів зазнала втрат. Ліквідація координаційного центру дозволила знизити щільність ворожих атак дронами на цьому відтинку фронту. Генштаб ЗСУ підтвердив знищення об'єкта.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Zaporizhzhia Oblast, Polohy District, Huliaipole sector",
      "target": "Russian Armed Forces UAV Command and Control Center",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On August 31, 2026, Ukrainian defense forces delivered a precision strike against a fortified and concealed Russian UAV command and control node in the occupied sector near Huliaipole, Zaporizhzhia Oblast. The facility accommodated drone flight control suites, mobile satellite communication links, and relay antennae directing tactical reconnaissance UAV missions and FPV strike operations against Ukrainian defensive lines. Direct precision hits pulverized the command post, wrecked specialized antenna masts, and inflicted casualties on on-duty operators. The destruction of this control post degraded Russian drone integration and curtailed drone strikes across the tactical sector. The hit was verified by the AFU General Staff.",
      "source": "General Staff of AFU, OSINT"
    }
  }
];

// Validation checks
console.log('--- VALIDATION CHECKS ---');
let hasErrors = false;

newItems.forEach((item, idx) => {
  const ruLen = item.ru.details.length;
  const ukLen = item.uk.details.length;
  const enLen = item.en.details.length;

  const ruSentences = item.ru.details.split(/[.!?]+/).filter(x => x.trim().length > 0).length;
  const ukSentences = item.uk.details.split(/[.!?]+/).filter(x => x.trim().length > 0).length;
  const enSentences = item.en.details.split(/[.!?]+/).filter(x => x.trim().length > 0).length;

  console.log(`\nItem ${idx + 1}: ${item.ru.target}`);
  console.log(`  Distance: ${item.distance} km`);
  console.log(`  RU details length: ${ruLen} chars (${ruSentences} sentences)`);
  console.log(`  UK details length: ${ukLen} chars (${ukSentences} sentences)`);
  console.log(`  EN details length: ${enLen} chars (${enSentences} sentences)`);

  if (ruLen < 600 || ruLen > 1000) { console.error(`  [ERROR] RU length out of bounds [600-1000]: ${ruLen}`); hasErrors = true; }
  if (ukLen < 600 || ukLen > 1000) { console.error(`  [ERROR] UK length out of bounds [600-1000]: ${ukLen}`); hasErrors = true; }
  if (enLen < 600 || enLen > 1000) { console.error(`  [ERROR] EN length out of bounds [600-1000]: ${enLen}`); hasErrors = true; }
  if (ruSentences < 4 || ruSentences > 8) { console.error(`  [ERROR] RU sentence count out of bounds [4-8]: ${ruSentences}`); hasErrors = true; }
  if (ukSentences < 4 || ukSentences > 8) { console.error(`  [ERROR] UK sentence count out of bounds [4-8]: ${ukSentences}`); hasErrors = true; }
  if (enSentences < 4 || enSentences > 8) { console.error(`  [ERROR] EN sentence count out of bounds [4-8]: ${enSentences}`); hasErrors = true; }
});

if (hasErrors) {
  console.error('\nFAILED VALIDATION! Please fix lengths/sentences.');
  process.exit(1);
} else {
  console.log('\nALL VALIDATION CHECKS PASSED!');
}

// Load existing data
const dataPath = 'd:/_DEV/Map kick/data.js';
let raw = fs.readFileSync(dataPath, 'utf8');

const varMatch = raw.match(/const\s+(\w+)\s*=\s*\[/);
if (!varMatch) { console.error('Cannot detect variable name'); process.exit(1); }
const varName = varMatch[1];

let items = JSON.parse(raw.replace(new RegExp('^const\\s+' + varName + '\\s*=\\s*'), '').replace(/;\s*$/, ''));

// Filter out any existing 31.08.2026 items
items = items.filter(x => x.date !== '31.08.2026');

// Get max id
let maxId = 0;
items.forEach(i => { if (i.id && i.id > maxId) maxId = i.id; });

newItems.forEach((item, idx) => {
  item.id = maxId + 1 + idx;
});

// Put new items at the beginning
items = newItems.concat(items);

const newContent = 'const ' + varName + ' = ' + JSON.stringify(items, null, 2) + ';';
fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully updated data.js with ' + newItems.length + ' items for 31.08.2026. Total items: ' + items.length);

// Also copy this script to d:\_DEV\Map kick\add_31082026.js for repository history
fs.writeFileSync('d:/_DEV/Map kick/add_31082026.js', fs.readFileSync(__filename, 'utf8'), 'utf8');
console.log('Saved add_31082026.js');
