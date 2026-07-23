const fs = require('fs');

const newData = [
  {
    "date": "22.07.2026",
    "lat": 45.006,
    "lng": 41.138,
    "distance": null,
    "ru": {
      "region": "Краснодарский край, Армавир (Северная промзона)",
      "target": "Нефтебаза в Армавире (Северная промзона)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 22 июля 2026 года дальнобойные украинские беспилотники совершили атаки на объекты нефтегазовой инфраструктуры в Краснодарском крае. Главным ударом налета стала нефтебаза в Северной промзоне Армавира. По объекту было выпущено более 16 ударных БПЛА самолетного типа, часть из которых пробила ПВО и точно поразила резервуарный парк. На территории топливного комплекса начался масштабный пожар, охвативший площадь свыше 800 квадратных метров. В результате падения обломков и детонации на предприятии погиб сотрудник охранной службы. Для тушения огня привлекли более 40 пожарных и 9 единиц спецтехники МЧС. Нефтебаза в Армавире играет ключевую роль в обеспечении горюче-смазочными материалами транспортных узлов и военной техники южной группировки войск РФ.",
      "source": "OSINT, МЧС РФ, СМИ РФ"
    },
    "uk": {
      "region": "Краснодарський край, Армавір (Північна промзона)",
      "target": "Нафтобаза в Армавірі (Північна промзона)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 22 липня 2026 року далекобійні українські безпілотники завдали удару по об'єктах нафтогазової інфраструктури в Краснодарському краї. Головною ціллю нальоту стала нафтобаза в Північній промзоні Армавіра. По об'єкту було випущено понад 16 ударних БПЛА літакового типу, частина з яких пробила ППО та точно уразила резервуарний парк. На території паливного комплексу спалахнула масштабна пожежа, яка охопила площу понад 800 квадратних метрів. Внаслідок падіння уламків та детонації на підприємстві загинув працівник охоронної служби. Для приборкання вогню залучили понад 40 вогнеборців та 9 одиниць спецтехніки МНС. Нафтобаза в Армавірі відіграє ключову роль у забезпеченні паливо-мастильними матеріалами транспортних вузлів та військової техніки південного угруповання військ РФ.",
      "source": "OSINT, МНС РФ, ЗМІ РФ"
    },
    "en": {
      "region": "Krasnodar Krai, Armavir (Northern Industrial Zone)",
      "target": "Oil depot in Armavir (Northern Industrial Zone)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of July 22, 2026, long-range Ukrainian strike drones targeted oil and gas infrastructure facilities in Russia's Krasnodar Krai. The primary target of the attack was the oil depot located in the Northern Industrial Zone of Armavir. Over 16 strike UAVs were launched at the site, with a portion penetrating air defenses and directly hitting the tank farm. A large-scale fire broke out across the fuel complex, spreading over an area of more than 800 square meters. Falling debris and detonations resulted in the death of a security worker at the facility. Emergency services deployed over 40 firefighters and 9 specialized vehicles to suppress the blaze. The Armavir oil depot serves as a critical fuel supply node for logistics and military vehicles supporting Russian operations in the south.",
      "source": "OSINT, Russian EMERCOM, Russian Media"
    }
  },
  {
    "date": "22.07.2026",
    "lat": 45.095,
    "lng": 39.115,
    "distance": null,
    "ru": {
      "region": "Краснодарский край, Краснодар (пос. Индустриальный)",
      "target": "Логистический комплекс Wildberries (Краснодар)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "В ночь на 22 июля 2026 года дальнобойные украинские беспилотники атаковали крупнейший распределительный центр компании Wildberries в поселке Индустриальный под Краснодаром. Падение дрона и последовавшие взрывы привели к возгоранию в складском комплексе, где хранились тонны товаров и материально-технических средств. Пожар быстро охватил значительную часть логистического блока, разрушив конструкции и парализовав работу узла. Из здания эвакуировали ночную смену, однако несколько сотрудников получили ожоги и травмы различной степени тяжести, одна из пострадавших работниц позже скончалась в больнице. Этот хаб использовался в том числе для снабжения двойного назначения и обмундирования войск. Из-за атаки компания приостановила операции и начала перенаправление грузов.",
      "source": "OSINT, Wildberries, СМИ РФ"
    },
    "uk": {
      "region": "Краснодарський край, Краснодар (селище Індустріальний)",
      "target": "Логістичний комплекс Wildberries (Краснодар)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "У ніч проти 22 липня 2026 року далекобійні українські безпілотники атакували найбільший розподільчий центр компанії Wildberries у селищі Індустріальний під Краснодаром. Падіння дрона та подальші вибухи спричинили займання у складському комплексі, де зберігалися тонни товарів та матеріально-технічних засобів. Пожежа швидко охопила значну частину логістичного блоку, зруйнувавши конструкції та паралізувавши роботу вузла. З будівлі евакуювали нічну зміну, проте кілька працівників дістали опіки та травми різного ступеня тяжкості, одна з постраждалих робітниць згодом померла в лікарні. Цей хаб використовувався зокрема для постачання товарів подвійного призначення та обмундирування військ. Через атаку компанія призупинила операції та перенаправила вантажі.",
      "source": "OSINT, Wildberries, ЗМІ РФ"
    },
    "en": {
      "region": "Krasnodar Krai, Krasnodar (Industrialny settlement)",
      "target": "Wildberries Logistics Complex (Krasnodar)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the night of July 22, 2026, Ukrainian long-range strike drones targeted the major Wildberries distribution center located in the Industrialny settlement near Krasnodar. A drone strike followed by detonations ignited a severe fire inside the warehouse complex, which stored tons of commercial goods and logistics supplies. The blaze rapidly engulfed a substantial portion of the facility, causing structural collapse and halting center operations. Night-shift staff were evacuated, but multiple workers suffered severe burns and injuries, with one female employee later dying in the hospital. The hub served as an important hub for dual-use equipment and military supply logistics. Following the strike, Wildberries suspended site operations and re-routed logistics traffic.",
      "source": "OSINT, Wildberries, Russian Media"
    }
  },
  {
    "date": "22.07.2026",
    "lat": 44.642,
    "lng": 41.925,
    "distance": null,
    "ru": {
      "region": "Ставропольский край, Невинномысск",
      "target": "Логистический комплекс Wildberries (Невинномысск)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "В ночь на 22 июля 2026 года ударные беспилотники атаковали региональный логистический комплекс Wildberries в промышленном узле города Невинномысск Ставропольского края. Прямое попадание БПЛА вызвало мощный взрыв и сильное возгорание в блоке хранения и сортировки грузов. Власти региона были вынуждены ввести режим чрезвычайной ситуации локального характера в районе происшествия. В ходе инцидента пострадали по меньшей мере пять сотрудников склада, которых госпитализировали с ранениями и отравлением продуктами горения. Невинномысский логистический хаб является стратегическим звеном снабжения южных регионов РФ и используется для перевозки предметов экипировки и двойного назначения. В результате налета работа объекта была полностью остановлена, а грузы перераспределены.",
      "source": "OSINT, Wildberries, СМИ РФ"
    },
    "uk": {
      "region": "Ставропольський край, Невинномиськ",
      "target": "Логістичний комплекс Wildberries (Невинномиськ)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "У ніч проти 22 липня 2026 року ударні безпілотники атакували регіональний логістичний комплекс Wildberries у промисловому вузлі міста Невинномиськ Ставропольського краю. Пряме влучання БПЛА спричинило потужний вибух і сильне займання у блоці зберігання та сортування вантажів. Влада регіону була змушена запровадити режим надзвичайної ситуації локального характеру в районі події. Під час інциденту постраждали щонайменше п'ятеро співробітників складу, яких госпіталізували з пораненнями та отруєнням продуктами горіння. Невинномиський логістичний хаб є стратегічною ланкою постачання південних регіонів РФ і використовується для перевезення предметів екіпірування та подвійного призначення. Внаслідок нальоту роботу об'єкта повністю зупинено, а вантажі перерозподілено.",
      "source": "OSINT, Wildberries, ЗМІ РФ"
    },
    "en": {
      "region": "Stavropol Krai, Nevinnomyssk",
      "target": "Wildberries Logistics Complex (Nevinnomyssk)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the night of July 22, 2026, strike drones attacked the Wildberries regional logistics hub in the industrial district of Nevinnomyssk, Stavropol Krai. A direct drone impact triggered a powerful explosion and an intense fire across the storage and sorting sections. Regional authorities were forced to declare a local state of emergency around the damaged facility. At least five warehouse employees sustained injuries and smoke inhalation, requiring urgent hospitalization. The Nevinnomyssk logistics center plays a strategic role in freight supply chains across southern Russia, including shipments of tactical gear and dual-use goods. Due to the attack, all operations at the site were halted, and inventory flows were urgently rerouted to alternate hubs.",
      "source": "OSINT, Wildberries, Russian Media"
    }
  }
];

// Read existing data
let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;\s*$/, '').trim();

let parsedData;
try {
  parsedData = new Function('return ' + dataStr)();
  
  // Assign ids
  let maxId = 0;
  parsedData.forEach(item => {
    if (item.id && item.id > maxId) {
      maxId = item.id;
    }
  });
  
  newData.forEach((item, index) => {
    item.id = maxId + index + 1;
  });
  
  parsedData = [...newData, ...parsedData];
  
  fs.writeFileSync('data.js', 'const strikeData = ' + JSON.stringify(parsedData, null, 2) + ';\n');
  console.log('Successfully prepended July 22, 2026 entries to data.js');
} catch (e) {
  console.error("Error parsing data.js:", e);
}
