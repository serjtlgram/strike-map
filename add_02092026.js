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
    "date": "02.09.2026",
    "lat": 52.8913,
    "lng": 33.4707,
    "distance": calcMinDistance(52.8913, 33.4707),
    "ru": {
      "region": "Брянская область, Почепский район, пос. Речица",
      "target": "Район сосредоточения вооружения и военной техники подразделений ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 2 сентября 2026 года подразделения Сил обороны Украины нанесли прицельный огневой удар по району сосредоточения вооружения и военной техники противника в поселке Речица Почепского района Брянской области. Населенный пункт расположен возле крупного транспортного узла Почепа и длительное время использовался российским командованием как передовая база распределения тяжелой бронетехники и артиллерии. Украинские ударные беспилотники точно поразили площадки открытого хранения и замаскированные ангары, где происходило обслуживание техники перед отправкой в зону боевых действий. На месте прилетов зафиксированы мощные взрывы и вторичная детонация хранившихся боекомплектов, за которыми последовал сильный пожар. В результате результативной атаки оккупанты потеряли несколько единиц бронетехники и грузового транспорта. Поражение вражеского логистического узла официально подтвердил Генеральный штаб ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Брянська область, Почепський район, сел. Речиця",
      "target": "Район зосередження озброєння та військової техніки підрозділів ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч на 2 вересня 2026 року підрозділи Сил оборони України завдали прицільного вогневого удару по району зосередження озброєння та військової техніки противника в селищі Речиця Почепського району Брянської області. Населений пункт розташований поблизу великого транспортного вузла Почепа й тривалий час використовувався командуванням РФ як передова база розподілу важкої бронетехніки та артилерії. Українські ударні безпілотники точно уразили майданчики відкритого зберігання та замасковані ангари, де відбувалося обслуговування техніки перед відправленням у зону бойових дій. На місці влучань зафіксовано потужні вибухи та вторинну детонацію збережених боєкомплектів, за якими спалахнула сильна пожежа. Унаслідок результативної атаки окупанти втратили кілька одиниць бронетехніки та вантажного транспорту. Ураження ворожого логістичного вузла офіційно підтвердив Генеральний штаб ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Bryansk Oblast, Pochepsky District, Rechitsa",
      "target": "Concentration Area of Russian Military Equipment and Heavy Weapons",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "Overnight into September 2, 2026, Ukrainian defense forces delivered a precision strike against a concentration area of Russian military hardware in Rechitsa, Pochepsky District of Bryansk Oblast. Situated near the major logistical junction of Pochep, the site served as an advance transit staging facility for heavy armor and artillery prior to frontline deployment. Long-range Ukrainian attack drones successfully penetrated regional air defenses to strike open-air vehicle storage parks and maintenance hangars. The direct impacts triggered secondary detonations of stored munitions and ignited a fierce fire across the compound. The Russian military sustained documented losses of several armored vehicles and specialized transport trucks. The successful destruction of this equipment hub was officially confirmed by the General Staff of the Armed Forces of Ukraine.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "02.09.2026",
    "lat": 44.6015,
    "lng": 33.4842,
    "distance": calcMinDistance(44.6015, 33.4842),
    "ru": {
      "region": "АР Крым, Севастополь (Стрелецкая бухта)",
      "target": "Скоростной транспортно-десантный катер БК-16 (проект 02510) Черноморского флота РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "2 сентября 2026 года Силы обороны Украины провели успешную операцию по поражению скоростного транспортно-десантного катера БК-16 проекта 02510 Черноморского флота в Севастополе. Катера этого проекта предназначены для переброски спецподразделений морской пехоты, высадки десанта на необорудованное побережье, патрулирования прибрежной зоны и огневой поддержки. Точный удар украинского средства поражения пришелся непосредственно по борту корабля во время его стоянки в бухте. Катер получил критические пробоины корпуса, повреждения ходовой рубки и бортовых систем управления, что привело к частичному затоплению отсеков. Российские аварийные службы попытались оперативно локализовать пробоины и спасти судно от полного ухода под воду. Успешный удар снизил мобильность российских сил специальных операций в акватории Крыма и был подтвержден в сводке Генштаба ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "АР Крим, Севастополь (Стрілецька бухта)",
      "target": "Швидкісний транспортно-десантний катер БК-16 (проєкт 02510) Чорноморського флоту РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "2 вересня 2026 року Сили оборони України провели успішну операцію з ураження швидкісного транспортно-десантного катера БК-16 проєкту 02510 Чорноморського флоту в Севастополі. Катери цього проєкту призначені для перекидання спецпідрозділів морської піхоти, висадки десанту на необладнане узбережжя, патрулювання прибережної зони та вогневої підтримки. Точний удар українського засобу ураження припав безпосередньо по борту судна під час його стоянки в бухті. Катер зазнав критичних пробоїн корпусу, пошкоджень ходової рубки та бортових систем управління, що спричинило часткове затоплення відсіків. Російські аварійні служби намагалися оперативно локалізувати пробоїни та врятувати судно від повного затоплення. Успішний удар суттєво обмежив мобільність російських спецпризначенців у прибережній зоні Криму й був підтверджений Генштабом ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Crimea, Sevastopol (Streletskaya Bay)",
      "target": "High-Speed Amphibious Landing Craft BK-16 (Project 02510) of Black Sea Fleet",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On September 2, 2026, the Ukrainian Defense Forces conducted a successful precision strike against a Russian Project 02510 BK-16 high-speed assault and landing boat moored in Sevastopol. These advanced tactical vessels are built for rapid amphibious troop transport, special forces insertions along contested shores, and coastal patrol missions. A direct hit by Ukrainian strike assets tore through the hull and heavily damaged the pilot house and onboard navigation suites. The catastrophic hull breaches resulted in significant water ingress and severe flooding of internal compartments. Russian harbor emergency crews scrambled salvage tugs in an effort to stabilize the vessel and prevent total capsizing. Knocking out this high-speed craft diminishes Russian special forces operational mobility around occupied Crimea, as verified by the General Staff of AFU.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "02.09.2026",
    "lat": 44.5360,
    "lng": 33.5180,
    "distance": calcMinDistance(44.5360, 33.5180),
    "ru": {
      "region": "АР Крым, район Севастополя",
      "target": "Мобильная станция радиоэлектронной борьбы (РЭБ) 1Л269 «Красуха-4» ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "2 сентября 2026 года в ходе точечного удара в районе оккупированного Севастополя украинские военные поразили новейшую российскую мобильную станцию радиоэлектронной борьбы 1Л269 «Красуха-4». Данный комплекс является одним из самых ценных элементов российской системы РЭБ и предназначен для подавления радаров ударной авиации, бортовых локаторов БПЛА и спутников радиолокационной разведки на дистанциях до трехсот километров. Развернутая на господствующей высоте машина прикрывала военные базы Черноморского флота и позиции зенитных комплексов. Прямое попадание боеприпаса привело к полному разрушению антенно-фидерного модуля и выгоранию сложной аппаратной части станции. Ликвидация дорогостоящего комплекса создала брешь в куполе радиоэлектронного подавления над юго-западной частью Крыма. Успешное поражение подтверждено Генеральным штабом ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "АР Крим, район Севастополя",
      "target": "Мобільна станція радіоелектронної боротьби (РЕБ) 1Л269 «Красуха-4» ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "2 вересня 2026 року під час точкового удару в районі окупованого Севастополя українські військові уразили новітню російську мобільну станцію радіоелектронної боротьби 1Л269 «Красуха-4». Цей комплекс належить до найцінніших елементів російської системи РЕБ і призначений для придушення радарів ударної авіації, бортових локаторів БпЛА та супутників радіолокаційної розвідки на відстанях до трьохсот кілометрів. Розгорнута на панівній висоті машина прикривала військові бази Чорноморського флоту й позиції зенітних комплексів. Пряме влучання боєприпаса призвело до повного руйнування антенно-фідерного модуля та вигорання складної апаратної частини станції. Знищення високовартісного комплексу створило відчутний пролом у системі радіоелектронного прикриття над південно-західною частиною Криму. Успішне ураження підтвердив Генеральний штаб ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Crimea, Sevastopol area",
      "target": "Russian Mobile Electronic Warfare Complex 1L269 Krasukha-4",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On September 2, 2026, Ukrainian forces executed a precision strike targeting an advanced Russian 1L269 Krasukha-4 mobile electronic warfare station deployed near occupied Sevastopol. The high-value EW system is specifically engineered to neutralize airborne radar systems, jam satellite reconnaissance links, and blind long-range strike drones across an operational radius of up to three hundred kilometers. Operating from an elevated tactical staging ground, the unit shielded Black Sea Fleet installations and air defense sites. Direct precision weapon impact detonated on the antenna assembly, totally gutting the sophisticated signal-processing receiver cabin. Eliminating this multi-million dollar asset punched a substantial hole into Russian electromagnetic defenses covering southwestern Crimea. The successful neutralization was officially confirmed by the General Staff of AFU.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "02.09.2026",
    "lat": 45.2890,
    "lng": 31.9870,
    "distance": calcMinDistance(45.2890, 31.9870),
    "ru": {
      "region": "АР Крым, Черноморский район, с. Марьино (мыс Тарханкут)",
      "target": "Пункт управления и стартовая позиция операторов ударных БПЛА ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "2 сентября 2026 года украинские защитники нанесли результативный комбинированный удар по российскому пункту управления беспилотниками в районе села Марьино на Тарханкутском полуострове в Крыму. Эта позиция на западной оконечности полуострова активно применялась российскими войсками для координации разведывательных и ударных дронов над акваторией Черного моря и южными регионами Украины. В результате точного попадания уничтожен полевой командный пункт вместе со средствами защищенной спутниковой связи, антенными ретрансляторами и терминалами управления. Также на площадке сгорели подготовленные к вылету разведывательные дроны и пусковые катапульты. Вражеский расчет операторов понес потери в личном составе, управление беспилотными операциями на этом направлении было сорвано. Факт разгрома пункта управления зафиксирован официальным сообщением Генштаба ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "АР Крим, Чорноморський район, с. Мар'їне (мис Тарханкут)",
      "target": "Пункт управління та стартова позиція операторів ударних БпЛА ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "2 вересня 2026 року українські захисники завдали результативного комбінованого удару по російському пункту управління безпілотниками в районі села Мар'їне на Тарханкутському півострові в Криму. Ця позиція на західному узбережжі півострова активно застосовувалася російськими військами для координації розвідувальних і ударних дронів над акваторією Чорного моря та південними областями України. Унаслідок точного влучання знищено польовий командний пункт разом із засобами захищеного супутникового зв'язку, антенними ретрансляторами й терміналами керування. Також на майданчику згоріли підготовлені до вильоту розвідувальні дрони та пускові установки. Ворожий розрахунок операторів зазнав втрат в особовому складі, управління безпілотними місіями на цьому напрямку було зірвано. Розгром пункту управління зафіксовано офіційним зведенням Генштабу ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Crimea, Chornomorske District, Maryino (Cape Tarkhankut)",
      "target": "Russian UAV Command Post and Drone Launch Site",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On September 2, 2026, Ukrainian forces launched a precision strike destroying a Russian drone operations command post near the village of Maryino on Cape Tarkhankut in western Crimea. This coastal facility played a vital role in directing long-range reconnaissance and strike UAV missions across the Black Sea basin and coastal sectors of southern Ukraine. The strike scored direct hits on the mobile field operations bunker, destroying hardened satellite data uplinks, antenna arrays, and specialized pilot control terminals. Multiple ready-to-launch reconnaissance drones and catapult systems parked nearby were completely consumed by fire. Russian drone crew personnel sustained confirmed casualties, paralyzing tactical aerial surveillance operations across the western sector. The AFU General Staff officially documented the destruction of this vital drone command post.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "02.09.2026",
    "lat": 47.9275,
    "lng": 38.1965,
    "distance": calcMinDistance(47.9275, 38.1965),
    "ru": {
      "region": "Донецкая область, г. Иловайск",
      "target": "Крупный склад боеприпасов и железнодорожный узел снабжения ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "2 сентября 2026 года Силы обороны Украины нанесли мощный дальнобойный удар по крупному складу боеприпасов оккупантов в районе города Иловайск в Донецкой области. Иловайск является стратегически важным железнодорожным узлом, через который непрерывно идут эшелоны с военными грузами и боеприпасами из Ростовской области на донецкий и запорожский фронты. Украинские средства поражения накрыли складской ангар в непосредственной близости от сортировочных путей. После попадания началась вторичная детонация сотен артиллерийских снарядов и реактивных выстрелов, серия взрывов продолжалась на протяжении нескольких часов. Осколками было повреждено железнодорожное полотно, погрузочная рампа и контактная электросеть. Разрушение арсенала сорвало запланированные поставки боекомплекта на передовую, что подтвердил Генеральный штаб ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Донецька область, м. Іловайськ",
      "target": "Великий склад боєприпасів та залізничний вузол постачання ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "2 вересня 2026 року Сили оборони України завдали потужного далекобійного удару по великому складу боєприпасів окупантів у районі міста Іловайськ на Донеччині. Іловайськ виступає стратегічно важливим залізничним вузлом, крізь який безперервно прямують ешелони з військовими вантажами та боєприпасами з Ростовської області на донецький та запорізький напрямки фронту. Українські засоби ураження накрили складський ангар безпосередньо біля сортувальних колій. Після прильоту розпочалася потужна вторинна детонація сотень артилерійських снарядів і реактивних зарядів, яка тривала кілька годин поспіль. Уламками було пошкоджено залізничне полотно, навантажувальні платформи та контактну електромережу станції. Знищення великого арсеналу зірвало постачання боєприпасів ворога, про що заявив Генеральний штаб ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Donetsk Oblast, Ilovaisk",
      "target": "Major Ammunition Depot and Rail Logistics Hub of Russian Forces",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On September 2, 2026, Ukrainian forces carried out a high-impact long-range strike against a major Russian ammunition depot located in the railway city of Ilovaisk, Donetsk Oblast. Ilovaisk represents a critical rail marshalling hub routing trains laden with heavy weaponry and artillery shells directly from Russia's Rostov region toward southern and eastern combat sectors. The strike penetrated a storage hangar situated right beside the rail classification yard, triggering massive secondary explosions. Intense chain detonations of hundreds of artillery rounds and rocket munitions rocked the district for hours, shattering infrastructure. Shrapnel tore through parallel track lines, loading ramps, and overhead electrical traction grids, bringing logistics to a dead halt. The destruction of this major ammunition stockpile was officially confirmed by the AFU General Staff.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "02.09.2026",
    "lat": 48.2125,
    "lng": 37.4935,
    "distance": calcMinDistance(48.2125, 37.4935),
    "ru": {
      "region": "Донецкая область, Покровский район, пос. Желанное",
      "target": "Склад хранения, снаряжения и подготовки ударных БПЛА подразделений ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "2 сентября 2026 года украинские военные нанесли точечный удар по тыловому складу ударных беспилотников подразделений ВС РФ возле поселка Желанное в Покровском районе Донецкой области. Данный объект использовался российскими войсками как передовой центр комплектования и подготовки дронов-камикадзе для поддержки наступательных действий. В здании хранились готовые FPV-дроны, тепловизионные модули, блоки управления и боевые части различного типа. В результате прилета боеприпаса произошел объемный взрыв с детонацией взрывчатых веществ и сильным пожаром, уничтожившим запасы оборудования. Потеря этих комплектующих заметно снизила плотность применения вражеских дронов на прилегающем участке фронта. Успешное огневое поражение вражеского объекта подтверждено официальным сообщением Генерального штаба ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Донецька область, Покровський район, сел. Желанне",
      "target": "Склад зберігання, спорядження та підготовки ударних БпЛА підрозділів ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "2 вересня 2026 року українські військові завдали точкового удару по тиловому складу ударних безпілотників підрозділів ЗС РФ поблизу селища Желанне в Покровському районі Донецької області. Цей об'єкт використовувався російськими військами як передовий центр комплектування та спорядження дронів-камікадзе для підтримки штурмових дій. У будівлі зберігалися готові FPV-дрони, тепловізійні модулі, блоки керування та бойові частини різного типу. Унаслідок влучання боєприпаса стався об'ємний вибух із детонацією вибухових речовин і сильною пожежею, яка знищила запаси технологічного обладнання. Втрата цих комплектуючих помітно знизила щільність застосування ворожих дронів на цій ділянці фронту. Успішне вогневе ураження ворожого об'єкта підтверджено офіційним зведенням Генерального штабу ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Donetsk Oblast, Pokrovsk District, Zhelanne",
      "target": "UAV Storage, Assembly, and Preparation Depot of Russian Forces",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On September 2, 2026, Ukrainian forces struck a rear tactical depot utilized for storing and assembling strike drones near Zhelanne in the Pokrovsk district of Donetsk Oblast. Russian occupation troops relied heavily on this facility as a forward depot for configuring and arming FPV kamikaze drones supporting infantry offensives. The warehouse sheltered hundreds of assembled FPV airframes, thermal imaging camera suites, frequency transmitters, and pre-packaged explosive charges. A precision munition strike triggered a powerful volumetric explosion that set off stored warheads, leveling the main facility in an all-consuming fire. Destroying these drone reserves immediately degraded the intensity of enemy tactical drone sorties across the adjacent sector. The operation was officially verified by the General Staff of AFU.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "02.09.2026",
    "lat": 46.8285,
    "lng": 36.9855,
    "distance": calcMinDistance(46.8285, 36.9855),
    "ru": {
      "region": "Запорожская область, Бердянский район, с. Новопетровка",
      "target": "Военные объекты и база тылового обеспечения ВС РФ на полигоне «Восточный»",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "2 сентября 2026 года Силы обороны Украины нанесли серию ударов по российским военным объектам на территории военного полигона «Восточный» в районе села Новопетровка Бердянского района Запорожской области. Расположенный на побережье Азовского моря полигон служил важным центром боевой подготовки штурмовых групп и накопительной базой материально-технического обеспечения группировки оккупационных войск. Высокоточные удары поразили полевые склады хранения материальных ресурсов, стоянки военной техники и пункт временной дислокации личного состава. На территории полигона возникли масштабные очаги возгорания, сопровождавшиеся детонацией боеприпасов и задымлением прибрежной полосы. Атака нанесла существенный урон логистике противника в Приазовье, что официально зафиксировано в сводке Генштаба ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Запорізька область, Бердянський район, с. Новопетрівка",
      "target": "Військові об'єкти та база тилового забезпечення ЗС РФ на полігоні «Восточный»",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "2 вересня 2026 року Сили оборони України завдали серії ударів по російських військових об'єктах на території військового полігону «Восточный» у районі села Новопетрівка Бердянського району Запорізької області. Розташований на узбережжі Азовського моря полігон слугував важливим центром бойової підготовки штурмових груп і накопичувальною базою матеріально-технічного забезпечення угруповання окупаційних військ. Високоточні удари уразили польові склади зберігання матеріальних ресурсів, майданчики зберігання військової техніки та пункт тимчасової дислокації особового складу. На території полігону виникли масштабні осередки займання, що супроводжувалися вторинною детонацією боєприпасів. Атака завдала істотної шкоди тиловій логістиці ворога в Приазов'ї, про що заявив Генштаб ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Zaporizhzhia Oblast, Berdyansk District, Novopetrivka",
      "target": "Military Infrastructure and Supply Base at Vostochny Training Ground",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On September 2, 2026, the Armed Forces of Ukraine launched a coordinated strike on Russian military infrastructure at the Vostochny training grounds near Novopetrivka in the Berdyansk district of Zaporizhzhia Oblast. Situated along the Sea of Azov coast, the military proving ground operated as an essential combat training camp and regional staging reservoir for motorized formations. Precision strikes slammed directly into field supply storehouses, heavy equipment staging yards, and temporary barracks housing personnel. Raging fires swiftly engulfed multiple facilities across the proving ground, causing secondary munitions detonations that sent smoke rising over the shoreline. The successful raid dealt a severe blow to Russian logistic readiness across the Azov littoral sector, as verified in official briefings by the General Staff of AFU.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "02.09.2026",
    "lat": 47.7485,
    "lng": 37.3825,
    "distance": calcMinDistance(47.7485, 37.3825),
    "ru": {
      "region": "Донецкая область, Волновахский район, пос. Владимировка",
      "target": "Склад боеприпасов передового артиллерийского снабжения подразделений ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "В ночь на 2 сентября 2026 года украинские военные нанесли точный огневой удар по крупному складу боеприпасов российских оккупантов в поселке Владимировка Волновахского района Донецкой области. Складской комплекс был обустроен на базе защищенных ангаров и использовался для постоянного снабжения артиллерийских расчетов и танковых подразделений на Южно-Донецком направлении. Прилет тяжелого средства поражения вызвал мгновенную детонацию артиллерийских выстрелов и пороховых зарядов, ударная волна разрушила несущие конструкции зданий склада. Последовавший сильнейший пожар уничтожил сотни тонн боеприпасов и специальную грузовую технику для их подвоза. Уничтожение этого арсенала сорвало запланированную артиллерийскую подготовку российских войск на данном участке фронта, что подтвердил Генштаб ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Донецька область, Волноваський район, сел. Володимирівка",
      "target": "Склад боєприпасів передового артилерійського постачання підрозділів ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "У ніч на 2 вересня 2026 року українські військові завдали точного вогневого удару по великому складу боєприпасів російських окупантів у селищі Володимирівка Волноваського району Донецької області. Складський комплекс було облаштовано на базі захищених ангарів і використовувався для постійного забезпечення артилерійських розрахунків і танкових підрозділів на Південно-Донецькому напрямку. Влучання важкого засобу ураження спричинило миттєву детонацію артилерійських пострілів і порохових зарядів, ударна хвиля зруйнувала опорні конструкції складських приміщень. Сильна подальша пожежа знищила сотні тонн боєприпасів та спеціальну вантажну техніку для їх підвезення. Знищення цього арсеналу зірвало заплановану артилерійську підготовку військ РФ на вказаній ділянці, що підтвердив Генштаб ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Donetsk Oblast, Volnovakha District, Volodymyrivka",
      "target": "Forward Artillery Ammunition Depot of Russian Forces",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "Overnight into September 2, 2026, Ukrainian forces struck a high-priority Russian ammunition depot located in Volodymyrivka, Volnovakha District of Donetsk Oblast. Established inside reinforced hangars, the forward depot maintained artillery shells, propellant charges, and tank rounds destined for combat formations across the southern Donetsk front. Heavy munition impact ignited an instantaneous detonation of high-explosive ordnance, ripping apart structural walls and collapsing storage bays. A fast-spreading inferno consumed hundreds of tons of stored artillery munitions along with specialized cargo replenishment trucks parked on site. Obliterating this key ammo supply point disrupted scheduled Russian artillery barrages across the tactical axis, as officially reported by the AFU General Staff.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "02.09.2026",
    "lat": 48.2415,
    "lng": 37.6185,
    "distance": calcMinDistance(48.2415, 37.6185),
    "ru": {
      "region": "Донецкая область, Покровский район, пос. Очеретино",
      "target": "Склад материально-технических средств и снабжения мотострелковых подразделений ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "В ночь на 2 сентября 2026 года Силы обороны Украины поразили важный склад материально-технических средств оккупационной группировки в поселке Очеретино Покровского района Донецкой области. Объект был развернут на узловой железнодорожной станции и выполнял роль центрального перевалочного пункта для снабжения наступающих мотострелковых подразделений армии РФ. В складских помещениях хранились запчасти для бронетехники, полевое ремонтное имущество, комплекты связи, маскировочные сети и обмундирование. В результате прилета нескольких ударных дронов на территории базы возник интенсивный пожар, уничтоживший основные запасы материального имущества. Ликвидация склада существенно осложнила восстановление поврежденной боевой техники противника. Успешный удар был официально зафиксирован в сводке Генерального штаба ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Донецька область, Покровський район, сел. Очеретине",
      "target": "Склад матеріально-технічних засобів і постачання мотострілецьких підрозділів ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "У ніч на 2 вересня 2026 року Сили оборони України уразили важливий склад матеріально-технічних засобів окупаційного угруповання в селищі Очеретине Покровського району Донецької області. Об'єкт було розгорнуто на вузловій залізничній станції, він виконував роль центрального перевалочного пункту для постачання наступальних мотострілецьких підрозділів армії РФ. У складських приміщеннях зберігалися запасні частини для бронетехніки, польове ремонтне майно, засоби зв'язку, маскувальні сітки та обмундирування. Унаслідок прильоту ударних дронів на території бази виникла інтенсивна пожежа, яка знищила основні запаси матеріального майна. Ліквідація складу суттєво ускладнила ремонт пошкодженої бойової техніки противника. Успішний удар було офіційно зафіксовано у зведенні Генерального штабу ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Donetsk Oblast, Pokrovsk District, Ocheretyne",
      "target": "Logistics and Materiel Supply Depot of Russian Motorized Rifle Units",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "Overnight into September 2, 2026, Ukrainian defense forces struck a major logistics and materiel warehouse belonging to Russian forces in Ocheretyne, Pokrovsk District of Donetsk Oblast. Established around a key railway hub, the site acted as a central intermediate supply station supporting frontline Russian motorized rifle units. The facility housed armored vehicle replacement components, field repair toolkits, field radios, camouflage netting, and military gear. Direct impacts by Ukrainian strike drones sparked an intense blaze that consumed warehouse bays and gutted critical spare parts inventories. The destruction of this materiel base substantially impaired the repair and maintenance cycle of damaged Russian combat vehicles. The successful action was officially confirmed in the operational update by the AFU General Staff.",
      "source": "General Staff of AFU, OSINT"
    }
  }
];

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

// Filter out any existing 02.09.2026 items
items = items.filter(x => x.date !== '02.09.2026');

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
console.log('Successfully updated data.js with ' + newItems.length + ' items for 02.09.2026. Total items: ' + items.length);
