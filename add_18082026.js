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
    "date": "18.08.2026",
    "lat": 48.5683,
    "lng": 38.6436,
    "distance": calcMinDistance(48.5683, 38.6436),
    "ru": {
      "region": "Луганская область, г. Кадиевка (оккупированная территория)",
      "target": "Склад материально-технического обеспечения и вооружения ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Высокоточный удар",
      "details": "18 августа 2026 года Силы обороны Украины осуществили результативный огневой налет на крупный склад материально-технического обеспечения российских войск в городе Кадиевка на оккупированной части Луганской области. Данный логистический объект в промышленной зоне использовался оккупантами для накопления инженерного имущества, запасных частей к тяжелой бронетехнике, партий стрелкового вооружения и боеприпасов для снабжения передовых частей. В результате серии точных прилетов украинских ударных средств на складе произошла масштабная детонация хранящегося боекомплекта и начался сильный пожар. В сводке Генштаба ВСУ подтверждено успешное поражение объекта и уничтожение значительных объемов военных запасов. Ликвидация этого хаба вызвала логистический сбой в обеспечении группировки противника на данном оперативном направлении.",
      "source": "Генштаб ВСУ, ОСГВ «Хортица», OSINT, СМИ"
    },
    "uk": {
      "region": "Луганська область, м. Кадіївка (окупована територія)",
      "target": "Склад матеріально-технічного забезпечення та озброєння ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Високоточний удар",
      "details": "18 серпня 2026 року Сили оборони України здійснили результативний вогневий наліт на великий склад матеріально-технічного забезпечення російських військ у місті Кадіївка на окупованій частині Луганської області. Цей логістичний об'єкт у промисловій зоні використовувався окупантами для накопичення інженерного майна, запасних частин до важкої бронетехніки, партій стрілецької зброї та боєприпасів для забезпечення передових підрозділів. У результаті серії влучних прильотів українських ударних засобів на складі сталася масштабна детонація накопиченого боєкомплекту та спалахнула сильна пожежа. У зведенні Генштабу ЗСУ підтверджено успішне ураження об'єкта та знищення значних обсягів військових запасів. Ліквідація цього хабу спричинила логістичний збій у забезпеченні угруповання ворога на цьому напрямку.",
      "source": "Генштаб ЗСУ, ОСУВ «Хортиця», OSINT, ЗМІ"
    },
    "en": {
      "region": "Luhansk Oblast, Kadiivka (Occupied Territory)",
      "target": "Material-Technical Logistics Support and Arms Depot of Russian Army",
      "category": "Military",
      "weapon": "Drone / Precision Strike",
      "details": "On August 18, 2026, the Ukrainian Defense Forces conducted an effective precision strike against a major material-technical logistics supply depot of Russian forces in Kadiivka in occupied Luhansk Oblast. Located within an industrial district, the logistical facility was heavily utilized by Russian forces for warehousing engineering equipment, heavy armor spare parts, small arms caches, and artillery munitions intended for frontline units. Direct hits from Ukrainian strike assets triggered intense secondary detonations of stockpiled munitions and extensive fires across the compound. The General Staff of the Armed Forces of Ukraine verified the successful neutralization of the facility and the destruction of large military stockpiles. Disabling this logistics hub caused significant supply disruptions for enemy combat detachments operating on this axis.",
      "source": "General Staff of AFU, OSGT Khortytsia, OSINT, Media"
    }
  },
  {
    "date": "18.08.2026",
    "lat": 48.8986,
    "lng": 38.4311,
    "distance": calcMinDistance(48.8986, 38.4311),
    "ru": {
      "region": "Луганская область, г. Лисичанск (оккупированная территория)",
      "target": "Район сосредоточения вооружения и военной техники (ВВТ) ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракетное вооружение",
      "details": "18 августа 2026 года подразделения Сил обороны Украины нанесли массированный огневой удар по выявленному району сосредоточения вооружения и военной техники российских оккупационных войск в Лисичанске Луганской области. На территории промышленной площадки противник организовал ремонтную базу и пункт стоянки танков, боевых бронированных машин и самоходной артиллерии, готовившихся к переброске на передовую. Украинские средства дальнего поражения точно накрыли ангары и открытые стоянки с техникой, вызвав повторные взрывы боекомплекта и топлива. По официальным данным Генштаба ВСУ, в результате налета выведено из строя значительное количество бронетехники и уничтожена живая сила подразделений техобслуживания. Удар сорвал оперативное усиление бронегрупп противника на восточном участке фронта.",
      "source": "Генштаб ВСУ, ОСГВ «Хортица», OSINT, СМИ"
    },
    "uk": {
      "region": "Луганська область, м. Лисичанськ (окупована територія)",
      "target": "Район зосередження озброєння та військової техніки (ОВТ) ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракетне озброєння",
      "details": "18 серпня 2026 року підрозділи Сил оборони України завдали масованого вогневого удару по виявленому району зосередження озброєння та військової техніки російських окупаційних військ у Лисичанську Луганської області. На території промислового майданчика противник облаштував ремонтну базу та пункт стоянки танків, бойових броньованих машин і самохідної артилерії, що готувалися до перекидання на передову. Українські далекобійні засоби ураження влучно накрили ангари та відкриті майданчики з технікою, спричинивши повторні вибухи боєкомплекту і пального. За офіційними даними Генштабу ЗСУ, у результаті нальоту виведено з ладу значну кількість бронетехніки та знищено особовий склад ремонтних підрозділів. Удар зірвав оперативне підсилення бронегруп ворога на східній ділянці фронту.",
      "source": "Генштаб ЗСУ, ОСУВ «Хортиця», OSINT, ЗМІ"
    },
    "en": {
      "region": "Luhansk Oblast, Lysychansk (Occupied Territory)",
      "target": "Concentration Area of Russian Military Equipment and Armored Vehicles",
      "category": "Military",
      "weapon": "Drone / Strike Missiles",
      "details": "On August 18, 2026, Ukrainian Defense Forces delivered a concentrated precision strike on an identified staging area for Russian military weaponry and armored combat vehicles in Lysychansk, Luhansk Oblast. Set up within an industrial plant, the site served as an armored repair base and forward staging area for main battle tanks, infantry fighting vehicles, and self-propelled artillery earmarked for front-line deployment. Long-range Ukrainian strike assets accurately blanketed vehicle workshops and open staging yards, triggering secondary cook-offs of loaded ammunition and fuel reserves. According to the General Staff of the AFU, the strike successfully disabled numerous heavy combat vehicles and eliminated maintenance personnel. The attack effectively prevented the timely armored reinforcement of enemy assault units on the eastern front.",
      "source": "General Staff of AFU, OSGT Khortytsia, OSINT, Media"
    }
  },
  {
    "date": "18.08.2026",
    "lat": 48.6989,
    "lng": 39.0622,
    "distance": calcMinDistance(48.6989, 39.0622),
    "ru": {
      "region": "Луганская область, Северодонецкий район, с. Лобачево (оккупированная территория)",
      "target": "Склад хранения и комплектации ударных БПЛА ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "18 августа 2026 года Силы обороны Украины нанесли результативный точечный удар по тыловому складу хранения и комплектации беспилотных летательных аппаратов ВС РФ в районе села Лобачево на Луганщине. На объекте противник сосредоточил запасы ударных дронов тактического звена, модули управления, оптико-электронные блоки и партии боевых частей для БПЛА, использовавшихся для налетов на позиции украинских защитников. Прямое попадание украинского ударного дрона вызвало воспламенение помещений склада и детонацию хранившихся зарядов взрывчатки. Сводка Генштаба ВСУ подтвердила полное поражение объекта и уничтожение значительного арсенала беспилотников. Потеря склада парализовала работу расчетов операторов вражеских дронов на прилегающем участке фронта и снизила интенсивность воздушных атак противника.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT, СМИ"
    },
    "uk": {
      "region": "Луганська область, Сєвєродонецький район, с. Лобачеве (окупована територія)",
      "target": "Склад зберігання та комплектації ударних БпЛА ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "18 серпня 2026 року Сили оборони України завдали результативного точкового удару по тиловому складу зберігання та комплектації безпілотних літальних апаратів ЗС РФ у районі села Лобачеве на Луганщині. На об'єкті противник зосередив запаси ударних дронів тактичної ланки, модулі управління, оптико-електронні блоки та партії бойових частин для БпЛА, які застосовувалися для нальотів на позиції українських захисників. Пряме влучання українського ударного дрона спричинило займання приміщень складу та детонацію збережених зарядів вибухівки. Зведення Генштабу ЗСУ підтвердило повне ураження об'єкта та знищення значного арсеналу безпілотників. Втрата складу паралізувала роботу розрахунків операторів ворожих дронів на прилеглій ділянці фронту та знизила інтенсивність повітряних атак ворога.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT, ЗМІ"
    },
    "en": {
      "region": "Luhansk Oblast, Sievierodonetsk District, Lobacheve (Occupied Territory)",
      "target": "Strike UAV Storage and Assembly Depot of Russian Army",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 18, 2026, the Ukrainian Defense Forces launched a precision strike against a rear storage and staging depot for Russian tactical unmanned aerial vehicles near the village of Lobacheve in Luhansk Oblast. The Russian military utilized the facility to stockpile tactical strike drones, ground control datalinks, optical payload units, and high-explosive warheads utilized for combat sorties against Ukrainian lines. A direct hit from a Ukrainian strike UAV ignited the main storage buildings and set off powerful secondary blasts of stored explosive components. The General Staff of the Armed Forces of Ukraine verified the destruction of the drone facility and its specialized inventories. Neutralizing this depot crippled the operational readiness of Russian UAV crews and lessened aerial bombardment pressure across the sector.",
      "source": "General Staff of AFU, GUR MO, OSINT, Media"
    }
  },
  {
    "date": "18.08.2026",
    "lat": 47.6781,
    "lng": 36.9856,
    "distance": calcMinDistance(47.6781, 36.9856),
    "ru": {
      "region": "Донецкая область, Волновахский район, с. Новопетриковка (оккупированная территория)",
      "target": "Склад хранения и предполетной подготовки ударных дронов ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "18 августа 2026 года Силы обороны Украины провели успешную операцию по уничтожению склада хранения и предполетной подготовки ударных дронов противника в районе села Новопетриковка в Волновахском районе Донецкой области. Данная база служила узловым пунктом снабжения для подразделений операторов БПЛА, обеспечивая снаряжение дронов боевыми частями, замену аккумуляторов и программирование полетных заданий. Точный прилет средств поражения привел к разрушению складских конструкций, пожару и детонации находившихся внутри боеприпасов и дронов-камикадзе. По официальной информации Генштаба ВСУ, складской пункт был полностью ликвидирован. Уничтожение объекта лишило российские штурмовые группы оперативной воздушной поддержки и предотвратило массированные дроновые налеты на оборонительные рубежи ВСУ.",
      "source": "Генштаб ВСУ, ОСГВ «Хортица», OSINT, СМИ"
    },
    "uk": {
      "region": "Донецька область, Волноваський район, с. Новопетриківка (окупована територія)",
      "target": "Склад зберігання та передпольотної підготовки ударних дронів ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "18 серпня 2026 року Сили оборони України провели успішну операцію зі знищення складу зберігання та передпольотної підготовки ударних дронів противника в районі села Новопетриківка у Волноваському районі Донецької області. Ця база слугувала вузловим пунктом забезпечення для підрозділів операторів БпЛА, забезпечуючи спорядження дронів бойовими частинами, заміну акумуляторів та програмування польотних завдань. Влучний приліт засобів ураження призвів до руйнування складських конструкцій, пожежі та детонації боєприпасів і дронів-камікадзе всередині. За офіційною інформацією Генштабу ЗСУ, складський пункт був повністю ліквідований. Знищення об'єкта позбавило російські штурмові групи оперативної повітряної підтримки та запобігло масованим дроновим нальотам на рубежі ЗСУ.",
      "source": "Генштаб ЗСУ, ОСУВ «Хортиця», OSINT, ЗМІ"
    },
    "en": {
      "region": "Donetsk Oblast, Volnovakha District, Novopetrykivka (Occupied Territory)",
      "target": "Strike Drone Storage and Pre-flight Staging Facility of Russian Army",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 18, 2026, the Ukrainian Defense Forces conducted an effective operation destroying an operational storage and pre-flight staging base for Russian strike drones near Novopetrykivka in the Volnovakha District of Donetsk Oblast. The site operated as a dedicated logistics facility for enemy drone units, facilitating warhead arming, high-capacity battery fitting, and mission flight path programming. Direct hits from Ukrainian precision strike weapons collapsed storage shelters, igniting rapid fires and secondary explosions of stockpiled kamikaze drones and demolition munitions. The General Staff of the Armed Forces of Ukraine officially verified the total destruction of the compound. The strike stripped advancing enemy assault detachments of crucial tactical air support and thwarted planned drone swarm attacks.",
      "source": "General Staff of AFU, OSGT Khortytsia, OSINT, Media"
    }
  },
  {
    "date": "18.08.2026",
    "lat": 47.7183,
    "lng": 37.5758,
    "distance": calcMinDistance(47.7183, 37.5758),
    "ru": {
      "region": "Донецкая область, Волновахский район, пгт Новотроицкое (оккупированная территория)",
      "target": "Склад и пункт сборки ударных беспилотников ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "18 августа 2026 года Силы обороны Украины нанесли точный огневой удар по складу и пункту сборки ударных беспилотников российских войск в районе пгт Новотроицкое в Донецкой области. На территории объекта размещались запасы готовых к пуску FPV-дронов, БПЛА-камикадзе самолетного типа, а также ретрансляционное оборудование и станции зарядки. В результате попадания украинского средства поражения произошел мощный взрыв, вызвавший разрушение технологических помещений и полное уничтожение хранившихся аппаратов. Сводка Генерального штаба ВСУ подтвердила успешное выполнение боевой задачи и ликвидацию склада. Уничтожение данного хаба сорвало планы противника по проведению массированных дроновых атак и существенно снизило разведывательную активность оккупантов на угледарском и кураховском направлениях.",
      "source": "Генштаб ВСУ, ОСГВ «Хортица», OSINT, СМИ"
    },
    "uk": {
      "region": "Донецька область, Волноваський район, смт Новотроїцьке (окупована територія)",
      "target": "Склад та пункт збирання ударних безпілотників ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "18 серпня 2026 року Сили оборони України завдали точного вогневого удару по складу та пункту збирання ударних безпілотників російських військ у районі смт Новотроїцьке в Донецькій області. На території об'єкта розміщувалися запаси готових до пуску FPV-дронів, БпЛА-камікадзе літакового типу, а також ретрансляційне обладнання та станції заряджання. У результаті влучання українського засобу ураження стався потужний вибух, що спричинив руйнування технологічних приміщень та повне знищення збережених апаратів. Зведення Генерального штабу ЗСУ підтвердило успішне виконання бойового завдання та ліквідацію складу. Знищення цього хабу зірвало плани противника щодо проведення масованих дронових атак та суттєво знизило розвідувальну активність ворога на напрямку.",
      "source": "Генштаб ЗСУ, ОСУВ «Хортиця», OSINT, ЗМІ"
    },
    "en": {
      "region": "Donetsk Oblast, Volnovakha District, Novotroitske (Occupied Territory)",
      "target": "Strike Drone Warehouse and Assembly Facility of Russian Army",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 18, 2026, the Ukrainian Defense Forces carried out a precision strike targeting a Russian warehouse and forward drone assembly facility near Novotroitske in Donetsk Oblast. The site housed large quantities of ready-to-launch FPV drones, fixed-wing kamikaze UAVs, repeater hardware, and multi-channel charging stations supporting frontline Russian formations. A direct precision hit ignited an explosive chain reaction, demolishing the fabrication workshops and destroying the stored drone inventory. The General Staff of the Armed Forces of Ukraine verified the successful strike and elimination of the depot. The loss of this assembly facility disrupted scheduled enemy drone saturation attacks and severely constrained Russian reconnaissance capabilities across the frontline sector.",
      "source": "General Staff of AFU, OSGT Khortytsia, OSINT, Media"
    }
  },
  {
    "date": "18.08.2026",
    "lat": 47.2436,
    "lng": 34.3589,
    "distance": calcMinDistance(47.2436, 34.3589),
    "ru": {
      "region": "Херсонская область, Каховский район, пгт Верхний Рогачик (оккупированная территория)",
      "target": "Пункт управления и координации БПЛА ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "18 августа 2026 года Силы обороны Украины нанесли результативный удар по передовому пункту управления и координации беспилотной авиации ВС РФ в районе пгт Верхний Рогачик на оккупированной части Херсонской области. Командный узел был оснащен аппаратурой защищенной спутниковой связи, антенными ретрансляторами и рабочими станциями операторов для координации налетов дронов-камикадзе и ведения аэроразведки в нижнем течении Днепра. В ходе атаки украинский ударный дрон точно поразил аппаратный модуль и антенный пост, уничтожив радиоэлектронное оборудование и вспомогательную технику связи. По данным сводки Генштаба ВСУ, пункт управления был полностью выведен из строя. Удар лишил российские войска возможности оперативно управлять дроновыми группами и сорвал наведение артиллерийского огня по правому берегу.",
      "source": "Генштаб ВСУ, ОСГВ «Таврия», OSINT, СМИ"
    },
    "uk": {
      "region": "Херсонська область, Каховський район, смт Верхній Рогачик (окупована територія)",
      "target": "Пункт управління та координації БпЛА ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "18 серпня 2026 року Сили оборони України завдали результативного удару по передовому пункту управління та координації безпілотної авіації ЗС РФ у районі смт Верхній Рогачик на окупованій частині Херсонської області. Командний вузол був оснащений апаратурою захищеного супутникового зв'язку, антенними ретрансляторами та робочими станціями операторів для координації нальотів дронів-камікадзе та ведення аеророзвідки в нижній течії Дніпра. Під час атаки український ударний дрон влучно уразив апаратний модуль та антенний пост, знищивши радіоелектронне обладнання й допоміжну техніку зв'язку. За даними зведення Генштабу ЗСУ, пункт управління був повністю виведений з ладу. Удар позбавив війська РФ можливості оперативно керувати дронами та зірвав наведення артилерійського вогню.",
      "source": "Генштаб ЗСУ, ОСУВ «Таврія», OSINT, ЗМІ"
    },
    "en": {
      "region": "Kherson Oblast, Kakhovka District, Verkhnii Rohachyk (Occupied Territory)",
      "target": "Drone Operations Command and Telemetry Post of Russian Forces",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 18, 2026, the Ukrainian Defense Forces carried out a precision strike destroying an advanced command and telemetry post for Russian unmanned aviation near Verkhnii Rohachyk in occupied Kherson Oblast. The military command facility contained secure satellite datalink arrays, antenna relay masts, and multi-display operator terminals used to plan kamikaze drone strikes and conduct aerial reconnaissance along the lower Dnipro. Ukrainian strike drones hit the primary equipment shelter and communication masts directly, demolishing core electronic components and auxiliary control vehicles. The General Staff of the Armed Forces of Ukraine verified the neutralization of the command facility. The strike severed real-time drone coordination networks and hindered enemy artillery spotting against liberated coastal settlements.",
      "source": "General Staff of AFU, OSGT Tavria, OSINT, Media"
    }
  },
  {
    "date": "18.08.2026",
    "lat": 47.2042,
    "lng": 35.5978,
    "distance": calcMinDistance(47.2042, 35.5978),
    "ru": {
      "region": "Запорожская область, Пологовский район, г. Молочанск (оккупированная территория)",
      "target": "Автомобильный мост через реку Молочная на маршруте снабжения ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Высокоточный удар",
      "details": "18 августа 2026 года Силы обороны Украины нанесли высокоточный удар по стратегическому автомобильному мосту через реку Молочная в районе города Молочанск в Запорожской области. Данный мостовой переход являлся ключевой логистической артерией на оккупированной территории, по которой осуществлялось непрерывное снабжение и переброска боевой техники, боеприпасов и подкреплений для российских войск на Токмакском и Запорожском направлениях. В результате точного попадания средств поражения были серьезно повреждены несущие пролетные конструкции и дорожное полотно моста, что сделало невозможным движение тяжелого грузового транспорта и бронетехники. Генштаб ВСУ подтвердил успешное огневое поражение объекта. Выведение моста из строя перерезало критический логистический маршрут и существенно усложнило снабжение передовых позиций врага.",
      "source": "Генштаб ВСУ, СБС ВСУ, OSINT, СМИ"
    },
    "uk": {
      "region": "Запорізька область, Пологівський район, м. Молочанськ (окупована територія)",
      "target": "Автомобільний міст через річку Молочна на маршруті постачання ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Високоточний удар",
      "details": "18 серпня 2026 року Сили оборони України завдали високоточного удару по стратегічному автомобільному мосту через річку Молочна в районі міста Молочанськ у Запорізькій області. Цей мостовий перехід був ключовою логістичною артерією на окупованій території, якою здійснювалося безперервне постачання та перекидання бойової техніки, боєприпасів і підкріплень для російських військ на Токмацькому та Запорізькому напрямках. У результаті влучного удару засобів ураження було серйозно пошкоджено опорні прогонові конструкції та дорожнє полотно мосту, що унеможливило рух важкого вантажного транспорту й бронетехніки. Генштаб ЗСУ підтвердив успішне вогневе ураження об'єкта. Виведення мосту з ладу перерізало критичний логістичний маршрут та ускладнило постачання ворога.",
      "source": "Генштаб ЗСУ, СБС ЗСУ, OSINT, ЗМІ"
    },
    "en": {
      "region": "Zaporizhzhia Oblast, Polohy District, Molochansk (Occupied Territory)",
      "target": "Strategic Military Road Bridge over Molochna River on Russian Supply Route",
      "category": "Military",
      "weapon": "Drone / Precision Strike",
      "details": "On August 18, 2026, the Ukrainian Defense Forces delivered a precision strike against a strategic military road bridge spanning the Molochna River near the town of Molochansk in occupied Zaporizhzhia Oblast. The bridge served as a critical vehicular artery for the Russian military, facilitating continuous transports of combat vehicles, heavy munitions, and tactical troop reinforcements toward the Tokmak and southern frontline sectors. Precision-guided munitions punched directly through the main load-bearing spans and collapsed sections of the road deck, halting heavy military transports and armor movements. The General Staff of the Armed Forces of Ukraine officially verified the successful strike. Severing this crossing crippled a major logistics corridor and complicated forward supply lines for Russian frontline forces.",
      "source": "General Staff of AFU, SBS of AFU, OSINT, Media"
    }
  },
  {
    "date": "18.08.2026",
    "lat": 50.3853,
    "lng": 36.3242,
    "distance": calcMinDistance(50.3853, 36.3242),
    "ru": {
      "region": "Белгородская область, Белгородский район, с. Устинка / с. Журавлевка",
      "target": "Пункты управления беспилотной авиацией ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "18 августа 2026 года Силы обороны Украины нанесли серию скоординированных ударов по передовым пунктам управления беспилотной авиацией российской армии в приграничной зоне Белгородской области в районе населенных пунктов Устинка и Журавлевка. С этих замаскированных позиций расчеты операторов противника осуществляли запуск и управление разведывательными дронами и ударными FPV-беспилотниками, наносившими удары по приграничным районам Харьковской области. Точными прилетами украинских ударных БПЛА были уничтожены полевые аппаратные станции, антенно-мачтовые комплексы ретрансляции и пункты размещения операторов. По официальным данным сводки Генштаба ВСУ, поражение данных объектов сорвало координацию дроновых налетов врага. Уничтожение пунктов управления снизило интенсивность воздушной разведки и атак в приграничной полосе.",
      "source": "Генштаб ВСУ, ОСГВ «Хортица», OSINT, СМИ"
    },
    "uk": {
      "region": "Бєлгородська область, Бєлгородський район, с. Устинка / с. Журавлівка",
      "target": "Пункти управління безпілотною авіацією ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "18 серпня 2026 року Сили оборони України завдали серії скоординованих ударів по передових пунктах управління безпілотною авіацією російської армії у прикордонній зоні Бєлгородської області в районі населених пунктів Устинка та Журавлівка. З цих замаскованих позицій розрахунки операторів противника здійснювали запуск та управління розвідувальними дронами й ударними FPV-безпілотниками, які атакували прикордонні райони Харківщини. Влучними прильотами українських ударних БпЛА було знищено польові апаратні станції, антенно-щоглові комплекси ретрансляції та пункти розміщення операторів. За офіційними даними зведення Генштабу ЗСУ, ураження цих об'єктів зірвало координацію дронових нальотів ворога. Знищення пунктів управління знизило інтенсивність розвідки й атак у прикордонні.",
      "source": "Генштаб ЗСУ, ОСУВ «Хортиця», OSINT, ЗМІ"
    },
    "en": {
      "region": "Belgorod Oblast, Belgorod District, Ustinka / Zhuravlevka",
      "target": "Forward Drone Command and Telemetry Posts of Russian Army",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 18, 2026, the Ukrainian Defense Forces executed coordinated strikes destroying forward drone command and telemetry posts of the Russian military in the Belgorod border area near Ustinka and Zhuravlevka. Operating from concealed staging positions, enemy drone crews launched and piloted tactical reconnaissance UAVs and strike FPV swarms targeting border communities in Kharkiv Oblast. Direct hits by Ukrainian strike drones demolished field processing units, antenna telemetry masts, and crew shelters. The General Staff of the Armed Forces of Ukraine officially verified the neutralisation of the command locations. Eliminating these operational posts disrupted Russian drone coordination networks and considerably curtailed aerial surveillance and cross-border drone strikes along the northern frontier.",
      "source": "General Staff of AFU, OSGT Khortytsia, OSINT, Media"
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

// Remove existing 18.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '18.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 18 August 2026! Total items in data.js: ${data.length}`);
