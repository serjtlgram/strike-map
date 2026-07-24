const fs = require('fs');

const items = [
  {
    "date": "23.07.2026",
    "lat": 53.1539,
    "lng": 47.7554,
    "distance": null,
    "ru": {
      "region": "Ульяновская область, Новоспасский район (р. п. Новоспасское)",
      "target": "НПЗ «НС-Ойл» (Новоспасское)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 23 июля 2026 года дальнобойные украинские беспилотники нанесли прицельный удар по нефтеперерабатывающему заводу ООО «НС-Ойл» в рабочем поселке Новоспасское Ульяновской области. Несколько ударных БПЛА самолетного типа успешно преодолели региональную систему ПВО и поразили технологическую инфраструктуру предприятия, а также базу хранения сжиженного газа. На территории НПЗ начался масштабный пожар с густым черным дымом, охвативший резервуарные секции и перерабатывающие установки. Из-за воздушной угрозы в Ульяновске вводился план «Ковер» с временной приостановкой полетов в местном аэропорту. Завод «НС-Ойл» является ключевым производителем светлых нефтепродуктов и сжиженного углеводородного газа, обеспечивающим топливом транспортные и промышленные узлы Поволжья.",
      "source": "OSINT (Astra), МЧС РФ, СМИ РФ"
    },
    "uk": {
      "region": "Ульяновська область, Новоспаський район (смт Новоспаське)",
      "target": "НПЗ «НС-Ойл» (Новоспаське)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 23 липня 2026 року далекобійні українські безпілотники завдали прицільного удару по нафтопереробному заводу ТОВ «НС-Ойл» у селищі Новоспаське Ульяновської області. Кілька ударних БПЛА літакового типу успішно подолали регіональну систему ППО та уразили технологічну інфраструктуру підприємства, а також базу зберігання скрапленого газу. На території НПЗ спалахнула масштабна пожежа з густим чорним димом, що миттєво охопила резервуарні секції та переробні установки. Через загрозу БПЛА в Ульяновську запроваджувався план «Ковер» із тимчасовим призупиненням рейсів у місцевому аеропорту. Завод «НС-Ойл» є важливим виробником світлих нафтопродуктів та скрапленого вуглеводневого газу, що забезпечує паливом транспортні й промислові вузли Поволжя.",
      "source": "OSINT (Astra), МНС РФ, ЗМІ РФ"
    },
    "en": {
      "region": "Ulyanovsk Oblast, Novospassky District (Novospasskoye)",
      "target": "NS-Oil Refinery (Novospasskoye)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of July 23, 2026, long-range Ukrainian strike drones launched a targeted attack on the NS-Oil refinery in the settlement of Novospasskoye, Ulyanovsk Oblast. Multiple fixed-wing UAVs successfully bypassed regional air defenses, striking the refinery's core processing units and liquefied petroleum gas storage facility. The impact triggered a major fire accompanied by heavy black smoke, which rapidly spread across fuel storage tanks and distillation infrastructure. The drone raid prompted aviation authorities to initiate Plan Carpet in Ulyanovsk, temporarily shutting down operations at the local airport. The NS-Oil facility operates as a vital regional fuel processing hub, producing light petroleum products and liquefied gas for transport and industrial logistics across the Volga region.",
      "source": "OSINT (Astra), Russian EMERCOM, Russian Media"
    }
  },
  {
    "date": "23.07.2026",
    "lat": 54.5422,
    "lng": 53.7667,
    "distance": null,
    "ru": {
      "region": "Республика Башкортостан, Туймазинский район (с. Субханкулово)",
      "target": "ЛПДС «Субханкулово» (Башкортостан)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "23 июля 2026 года дальнобойные украинские беспилотники атаковали важнейший объект топливно-энергетического комплекса Башкортостана — линейную производственно-диспетчерскую станцию «Субханкулово». В результате прицельного удара один из БПЛА пробил систему защиты и вызвал детонацию с последующим горением крупного резервуара с нефтью. Спутниковый мониторинг и кадры с места подтвердили интенсивный пожар, для ликвидации которого привлекались специализированные расчеты МЧС. Данная станция компании «Транснефть-Урал» выполняет ключевую роль в смешивании, хранении и магистральной транспортировке нефти западносибирских и башкирских месторождений. В результате атаки технологические операции узла были частично приостановлены до устранения повреждений и локализации огня.",
      "source": "OSINT, МЧС РФ, СМИ РФ"
    },
    "uk": {
      "region": "Республіка Башкортостан, Туймазинський район (с. Субханкулово)",
      "target": "ЛПДС «Субханкулово» (Башкортостан)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "23 липня 2026 року далекобійні українські безпілотники атакували найважливіший об'єкт паливно-енергетичного комплексу Башкортостану — лінійну виробничо-диспетчерську станцію «Субханкулово». Внаслідок прицільного удару один із БПЛА пробив систему захисту та спричинив детонацію з подальшим горінням великого резервуара з нафтою. Супутниковий моніторинг і кадри з місця події підтвердили інтенсивну пожежу, для ліквідації якої залучалися спеціалізовані розрахунки МНС. Ця станція компанії «Транснефть-Урал» відіграє ключову роль у змішуванні, зберіганні та магістральному транспортуванні нафти західносибірських і башкирських родовищ. Внаслідок атаки технологічні операції вузла були частково призупинені до усунення пошкоджень та локалізації вогню.",
      "source": "OSINT, МНС РФ, ЗМІ РФ"
    },
    "en": {
      "region": "Republic of Bashkortostan, Tuimazinsky District (Subkhankulovo)",
      "target": "Subkhankulovo Oil Pump Station (Bashkortostan)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On July 23, 2026, Ukrainian long-range strike drones targeted the Subkhankulovo linear production and dispatch station, a major oil infrastructure facility in Bashkortostan. A precise drone strike penetrated local defense networks, causing a detonation and a massive fire in a large crude oil storage tank. Satellite imagery and footage from the site confirmed intense burning, requiring heavy emergency crews from the Ministry of Emergency Situations to suppress the flames. Operated by Transneft-Ural, the Subkhankulovo station plays a central strategic role in blending, storing, and pumping oil from West Siberian and Bashkir fields into main pipelines. The drone attack forced a temporary suspension of dispatch operations while damage assessments were conducted.",
      "source": "OSINT, Russian EMERCOM, Russian Media"
    }
  },
  {
    "date": "23.07.2026",
    "lat": 51.6425,
    "lng": 39.3882,
    "distance": null,
    "ru": {
      "region": "Воронежская область, Новоусманский район (с. Нечаевка)",
      "target": "Складской комплекс Wildberries (Нечаевка)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "В ночь на 23 июля 2026 года Воронежская область подверглась массированному налету беспилотников, в ходе которого был атакован логистический хаб Wildberries в районе села Нечаевка. По имеющимся данным OSINT и спутниковым снимкам, падение БПЛА и детонация боевых частей повредили кровлю и конструктивные элементы складских терминалов. На территории комплекса вспыхнули локальные пожары, а фасадные панели и сортировочное оборудование получили серьезные повреждения. Данный распределительный узел активно задействовался для обработки логистических потоков, складирования обмундирования и товаров двойного назначения для снабжения войск. Из-за атаки компания была вынуждена приостановить работу ряда линий терминала и приступить к перенаправлению грузопотоков.",
      "source": "OSINT, Радио Свобода, СМИ РФ"
    },
    "uk": {
      "region": "Воронезька область, Новоусманський район (с. Нечаєвка)",
      "target": "Складський комплекс Wildberries (Нечаєвка)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "У ніч проти 23 липня 2026 року Воронезька область зазнала масованого нальоту безпілотників, під час якого було атаковано логістичний хаб Wildberries у районі села Нечаєвка. За даними OSINT та супутниковими знімками, падіння БПЛА і детонація бойових частин пошкодили покрівлю та конструктивні елементи складських терміналів. На території комплексу спалахнули локальні пожежі, а фасадні панелі й сортувальне обладнання зазнали серйозних руйнувань. Цей розподільчий вузол активно залучався для обробки логістичних потоків, складування обмундирування та товарів подвійного призначення для постачання військ. Через атаку компанія була змушена призупинити роботу низки ліній термінала та розпочати перенаправлення вантажопотоків.",
      "source": "OSINT, Радіо Свобода, ЗМІ РФ"
    },
    "en": {
      "region": "Voronezh Oblast, Novousmansky District (Nechayevka)",
      "target": "Wildberries Warehouse Complex (Nechayevka)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the night of July 23, 2026, Voronezh Oblast was hit by a large-scale drone attack that targeted the major Wildberries logistics center near Nechayevka. OSINT analysis and satellite imagery revealed structural damage to the warehouse roofing and interior sections caused by drone impacts and detonations. Localized fires erupted inside the logistics center, causing damage to sorting lines, structural framing, and stored inventory. The Nechayevka distribution hub serves as a critical supply node handling dual-use commodities, tactical gear, and clothing for regional military supply chains. Following the strike, warehouse operations were partially disrupted, forcing logistics managers to initiate emergency re-routing of incoming shipments.",
      "source": "OSINT, Radio Liberty, Russian Media"
    }
  },
  {
    "date": "23.07.2026",
    "lat": 56.8286,
    "lng": 35.9867,
    "distance": null,
    "ru": {
      "region": "Тверская область, Тверь (пос. Элеватор)",
      "target": "Логистический центр в пос. Элеватор (Тверь)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "В ночь на 23 июля 2026 года украинские беспилотники атаковали крупный транспортно-логистический комплекс в поселке Элеватор на окраине Твери. Удар пришелся по административно-складскому корпусу, где произошел сильный взрыв с последующим возгоранием на широкой площади. Огонь уничтожил элементы кровли и внутреннюю отделку логистического объекта, вызвав сильное задымление промзоны. Для тушения пожара и предотвращения распространения пламени на соседние строения были задействованы оперативные расчеты МЧС. Тверской логистический хаб используется для транзита, складирования и распределения промышленной продукции и материалов двойного назначения. В результате налета работа комплекса была полностью заблокирована до завершения восстановительных работ.",
      "source": "OSINT, МЧС РФ, СМИ РФ"
    },
    "uk": {
      "region": "Тверська область, Твер (селище Елеватор)",
      "target": "Логістичний центр у смт Елеватор (Твер)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "У ніч проти 23 липня 2026 року українські безпілотники атакували великий транспортно-логістичний комплекс у селищі Елеватор на околиці Твері. Удар припав на адміністративно-складський корпус, де стався потужний вибух із подальшим займанням на значній площі. Вогонь знищив елементи покрівлі та внутрішнє оздоблення логістичного об'єкта, спричинивши сильне задимлення промислової зони. Для ліквідації пожежі та запобігання поширенню полум'я на сусідні будівлі залучалися оперативні розрахунки МНС. Тверський логістичний хаб використовується для транзиту, складування та розподілу промислової продукції й матеріалів подвійного призначення. Внаслідок нальоту роботу комплексу повністю заблоковано до завершення відновлювальних робіт.",
      "source": "OSINT, МНС РФ, ЗМІ РФ"
    },
    "en": {
      "region": "Tver Oblast, Tver (Elevator Settlement)",
      "target": "Logistics Hub in Elevator District (Tver)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the night of July 23, 2026, Ukrainian strike drones hit a major logistics center located in the Elevator settlement on the outskirts of Tver. The attack directly struck the main administrative and storage building, causing a powerful explosion followed by an extensive structure fire. Flames destroyed sections of the roof and interior facilities, releasing heavy smoke across the industrial area. Emergency response units from the Ministry of Emergency Situations were dispatched to contain the blaze and protect adjacent infrastructure. The Tver logistics hub plays an essential role in freight transit, warehousing, and distribution of industrial and dual-use supplies. Due to the severe structural damage, operations at the facility were fully halted pending site clearance.",
      "source": "OSINT, Russian EMERCOM, Russian Media"
    }
  }
];

// Check details lengths
items.forEach((item, index) => {
  ['ru', 'uk', 'en'].forEach(lang => {
    const text = item[lang].details;
    const len = text.length;
    console.log(`Item ${index+1} [${lang}] length: ${len}`);
    if (len < 600 || len > 1000) {
      console.error(`ERROR: Item ${index+1} [${lang}] details length ${len} is out of 600-1000 bounds!`);
    }
  });
});

// Read existing data
let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;\s*$/, '').trim();

let parsedData = new Function('return ' + dataStr)();

let maxId = 0;
parsedData.forEach(item => {
  if (item.id && item.id > maxId) {
    maxId = item.id;
  }
});

items.forEach((item, index) => {
  item.id = maxId + index + 1;
});

parsedData = [...items, ...parsedData];

fs.writeFileSync('data.js', 'const strikeData = ' + JSON.stringify(parsedData, null, 2) + ';\n');
console.log('Successfully prepended July 23, 2026 entries to data.js');
