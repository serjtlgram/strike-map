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

const items = [
  {
    "date": "30.07.2026",
    "lat": 57.9094,
    "lng": 56.2700,
    "distance": null,
    "ru": {
      "region": "Пермский край, Пермский район (д. Замулянка, Фроловское с/п)",
      "target": "Логистический центр Wildberries (д. Замулянка под Пермью)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "30 июля 2026 года дальнобойные БПЛА Сил обороны Украины атаковали крупный распределительный комплекс Wildberries в деревне Замулянка Пермского района. Генштаб ВСУ и мониторинговый проект Astra подтвердили нанесение удара по складской инфраструктуре маркетплейса, выполнявшей функции 3PL-логистики. В результате прилёта ударных дронов на территории объекта произошла серия взрывов с последующим возгоранием производственных корпусов. Губернатор Пермского края Дмитрий Махонин сообщил о работе ПВО и повреждении нежилых строений. Этот хаб играл важную роль в цепочках поставки товаров двойного назначения в Уральском регионе. Удар на расстоянии около 1560 км от линии фронта нанёс существенный урон логистическому снабжению противника.",
      "source": "Генштаб ВСУ, OSINT (Astra), губернатор Махонин, СМИ"
    },
    "uk": {
      "region": "Пермський край, Пермський район (с. Замулянка, Фролівське с/п)",
      "target": "Логістичний центр Wildberries (с. Замулянка під Перм'ю)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "30 липня 2026 року далекобійні БПЛА Сил оборони України атакували великий розподільчий комплекс Wildberries у селі Замулянка Пермського району. Генштаб ЗСУ та моніторинговий проєкт Astra підтвердили завдання удару по складській інфраструктурі маркетплейсу, що виконувала функції 3PL-логістики. Унаслідок прильоту ударних дронів на території об'єкта сталася серія вибухів із подальшим займанням виробничих корпусів. Губернатор Пермського краю Дмитро Махонін повідомив про роботу ПВО та пошкодження нежитлових будівель. Цей хаб відігравав важливу роль у ланцюжках постачання товарів подвійного призначення в Уральському регіоні. Удар на відстані близько 1560 км від лінії фронту завдав суттєвої шкоди логістичному забезпеченню противника.",
      "source": "Генштаб ЗСУ, OSINT (Astra), губернатор Махонін, ЗМІ"
    },
    "en": {
      "region": "Perm Krai, Perm District (Zamulyanka village)",
      "target": "Wildberries Logistics Hub (Zamulyanka, Perm Krai)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On July 30, 2026, Ukrainian long-range strike drones targeted the major Wildberries distribution center located in Zamulyanka village near Perm. The AFU General Staff and the Astra OSINT project confirmed successful hits on the commercial logistics warehouse module. The impact of several suicide drones triggered multiple explosions and a high-intensity fire across the storage facilities. Perm Krai Governor Dmitry Makhonin acknowledged regional air defense operations and reported damage to industrial structures. The facility served as a key regional 3PL node used for warehousing dual-use and military-adjacent supply lines. Striking over 1,560 km from the Ukrainian border, the operation disrupted major Russian military supply networks in the Urals.",
      "source": "AFU General Staff, OSINT (Astra), Governor Makhonin, Media"
    }
  },
  {
    "date": "30.07.2026",
    "lat": 53.2887,
    "lng": 44.8342,
    "distance": null,
    "ru": {
      "region": "Пензенская область, Бессоновский район (с. Мастиновка)",
      "target": "Логистический комплекс Wildberries (с. Мастиновка под Пензой)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "В ночь на 30 июля 2026 года украинские БПЛА нанесли удар по новому логистическому комплексу Wildberries в селе Мастиновка Бессоновского района Пензенской области. Несколько ударных беспилотников попали в складские секции, вызвав крупный пожар и разрушение элементов конструкций. Губернатор Пензенской области Олег Мельниченко подтвердил атаку дронов и эвакуацию около 200 сотрудников распределительного центра. По оперативным данным, в результате удара один человек получил ранения и был госпитализирован. Объект использовался для хранения и распределения промышленных грузов и предметов материально-технического снабжения. Удар на расстоянии 580 км от границы дезорганизовал снабжение Поволжского транспортного узла.",
      "source": "OSINT (Astra), губернатор Мельниченко, Wildberries, СМИ"
    },
    "uk": {
      "region": "Пензенська область, Бессоновський район (с. Мастіновка)",
      "target": "Логістичний комплекс Wildberries (с. Мастіновка під Пензою)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "У ніч проти 30 липня 2026 року українські БПЛА завдали удару по новому логістичному комплексу Wildberries у селі Мастіновка Бессоновського району Пензенської області. Кілька ударних безпілотників уразили складські секції, спричинивши велику пожежу та руйнування елементів конструкцій. Губернатор Пензенської області Олег Мельниченко підтвердив атаку дронів та евакуацію близько 200 співробітників розподільчого центру. За оперативними даними, унаслідок удару одна людина дістала поранення й була госпіталізована. Об'єкт використовувався для зберігання та розподілу промислових вантажів і матеріально-технічного забезпечення. Удар на відстані 580 км від кордону дезорганізував забезпечення Поволзького транспортного вузла.",
      "source": "OSINT (Astra), губернатор Мельниченко, Wildberries, ЗМІ"
    },
    "en": {
      "region": "Penza Oblast, Bessonovsky District (Mastinovka village)",
      "target": "Wildberries Logistics Complex (Mastinovka, Penza Oblast)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the night of July 30, 2026, Ukrainian attack UAVs struck the newly built Wildberries logistics complex in Mastinovka village, Penza Oblast. Multiple long-range drones directly hit warehouse bays, initiating a massive fire and heavy structural destruction. Penza Oblast Governor Oleg Melnichenko confirmed the drone raid and stated that nearly 200 facility employees were evacuated. Local emergency services reported one injury requiring hospitalization during the attack and subsequent blaze. The hub operated as a main logistics center for storing commercial goods and dual-use industrial military supplies. Positioned 580 km from the Ukrainian frontline, the strike severed logistics flow across the Volga transport sector.",
      "source": "OSINT (Astra), Governor Melnichenko, Wildberries, Media"
    }
  },
  {
    "date": "30.07.2026",
    "lat": 56.4811,
    "lng": 53.6918,
    "distance": null,
    "ru": {
      "region": "Удмуртская Республика, Сарапул (Ижевский тракт, 22)",
      "target": "Логистический центр Wildberries (г. Сарапул, Удмуртия)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "30 июля 2026 года в ходе ночной атаки украинские беспилотники атаковали логистический хаб Wildberries на Ижевском тракте в городе Сарапул. Попадание БПЛА привело к возгоранию складских терминалов и частичному обрушению кровли комплекса. Пресс-служба компании RWB подтвердила экстренную эвакуацию работников сразу после сигнала тревоги, пострадавших среди персонала удалость избежать. Объект расположен в непосредственной близости от оборонных предприятий Удмуртии и использовался для 3PL-сортировки комплектующих. Удар на расстоянии 1370 км от линии фронта продемонстрировал уязвимость глубоких тыловых регионов ВПК России и нарушил логистические цепочки доставки.",
      "source": "OSINT (Astra), пресс-служба RWB/Wildberries, СМИ"
    },
    "uk": {
      "region": "Удмуртська Республіка, Сарапул (Іжевський тракт, 22)",
      "target": "Логістичний центр Wildberries (м. Сарапул, Удмуртія)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "30 липня 2026 року під час нічної атаки українські безпілотники атакували логістичний хаб Wildberries на Іжевському тракті в місті Сарапул. Влучання БПЛА призвело до займання складських терміналів та часткового обвалу покрівлі комплексу. Пресслужба компанії RWB підтвердила екстрену евакуацію працівників одразу після сигналу тривоги, потерпілих серед персоналу вдалося уникнути. Об'єкт розташований у безпосередній близькості від оборонних підприємств Удмуртії та використовувався для 3PL-сортування комплектуючих. Удар на відстані 1370 км від лінії фронту продемонстрував уразливість глибоких тилових регіонів ВПК Росії та порушив логістичні ланцюжки доставки.",
      "source": "OSINT (Astra), пресслужба RWB/Wildberries, ЗМІ"
    },
    "en": {
      "region": "Udmurt Republic, Sarapul (Izhevsky Trakt, 22)",
      "target": "Wildberries Distribution Center (Sarapul, Udmurtia)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On July 30, 2026, an overnight attack by Ukrainian long-range drones struck the Wildberries distribution center on Izhevsky Trakt in Sarapul, Udmurt Republic. Drone strikes sparked a intense fire in the main storage section, resulting in a roof collapse over the loading docks. The RWB company press office confirmed that all warehouse staff were evacuated immediately following the air raid warning, avoiding casualties. Located near major Udmurt defense production plants, the facility handled sorting for dual-use components and electronics. Executed 1,370 km from the border, the raid highlighted the vulnerability of deep rear Russian defense industrial hubs and disrupted supply routing.",
      "source": "OSINT (Astra), RWB / Wildberries press service, Media"
    }
  },
  {
    "date": "30.07.2026",
    "lat": 47.1994,
    "lng": 38.8661,
    "distance": null,
    "ru": {
      "region": "Ростовская область, Таганрог (аэродром Таганрог-Южный)",
      "target": "Аэродром «Таганрог-Южный» и Авиазавод ТАНТК им. Бериева",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 30 июля 2026 года Силы обороны Украины провели массированный налёт БПЛА по военным объектам в Таганроге. Главными целями атаки стали военный аэродром «Таганрог-Южный» и территория Таганрогского авиационного научно-технического комплекса (ТАНТК) им. Бериева. В районе авиазавода и взлётно-посадочной полосы прогремела серия мощных взрывов, местная администрация объявила эвакуацию жителей в радиусе 500 метров. На объекте зафиксированы возгорания и повреждения цехов, где проводится ремонт и модернизация самолётов ДРЛО А-50 и противолодочных Ту-142. Предприятие имеет важнейшее значение для ВВС РФ. Удар на расстоянии 170 км от линии фронта нанёс прямой ущерб ключевой авиаремонтной базе оккупационных войск.",
      "source": "Генштаб ВСУ, OSINT (Astra), главы региона, СМИ"
    },
    "uk": {
      "region": "Ростовська область, Таганрог (аеродром Таганрог-Південний)",
      "target": "Аеродром «Таганрог-Південний» та Авіазавод ТАНТК ім. Берієва",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 30 липня 2026 року Сили оборони України провели масований наліт БПЛА по військових об'єктах у Таганрозі. Головними цілями атаки стали військовий аеродром «Таганрог-Південний» та територія Таганрозького авіаційного науково-технічного комплексу (ТАНТК) ім. Берієва. У районі авіазаводу та злітно-посадкової смуги пролунала серія потужних вибухів, місцева адміністрація оголосила евакуацію жителів у радіусі 500 метрів. На об'єкті зафіксовано займання та пошкодження цехів, де проводиться ремонт і модернізація літаків ДРЛВ А-50 і протичовнових Ту-142. Підприємство має критичне значення для ПКС РФ. Удар на відстані 170 км від лінії фронту завдав прямої шкоди ключовій авіаремонтній базі окупаційних військ.",
      "source": "Генштаб ЗСУ, OSINT (Astra), голова міста, ЗМІ"
    },
    "en": {
      "region": "Rostov Oblast, Taganrog (Taganrog-South airfield)",
      "target": "Taganrog-South Airfield & Beriev Aircraft Complex (TANTK)",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On the night of July 30, 2026, the Ukrainian Defense Forces launched a large-scale drone attack against military targets in Taganrog. The strike prioritized the Taganrog-South military airfield and the adjacent Beriev Aircraft Complex (TANTK). Explosions detonated across the airfield apron and factory territory, forcing local authorities to evacuate residents within a 500-meter perimeter around impact zones. Fires and structural damage were recorded in workshops where A-50 Airborne Early Warning aircraft and Tu-142 maritime patrol planes undergo maintenance. The facility serves as Russia's top strategic aviation repair hub. Located 170 km from the frontline, the strike crippled critical repair infrastructure supporting Russian Aerospace Forces operations.",
      "source": "AFU General Staff, OSINT (Astra), City Administration, Media"
    }
  },
  {
    "date": "30.07.2026",
    "lat": 46.6139,
    "lng": 35.7359,
    "distance": null,
    "ru": {
      "region": "Запорожская область (временно оккупированная), Приморский Посад",
      "target": "Военный полигон ВС РФ «Приморский Посад»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "30 июля 2026 года Генеральный штаб ВСУ официально подтвердил успешное поражение крупного военного полигона ВС РФ «Приморский Посад» на прибрежной территории оккупированной части Запорожской области. Высокоточный удар дальнобойных БПЛА и средств поражения пришёлся по местам скопления личного состава, учебным площадкам и складам боеприпасов. В результате атаки на территории полигона возникла вторичная детонация боекомплекта и масштабный пожар. Объект активно использовался командованием оккупационных войск для слаживания подразделений и подготовки операторов БПЛА перед отправкой на фронт. Удар на расстоянии 140 км от линии боевого соприкосновения привёл к уничтожению техники и нарушил процесс подготовки резервов армии РФ.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT, СМИ"
    },
    "uk": {
      "region": "Запорізька область (тимчасово окупована), Приморський Посад",
      "target": "Військовий полігон ЗС РФ «Приморський Посад»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "30 липня 2026 року Генеральний штаб ЗСУ офіційно підтвердив успішне ураження великого військового полігону ЗС РФ «Приморський Посад» на прибережній території окупованої частини Запорізької області. Високоточний удар далекобійних БПЛА та засобів ураження припав по місцях скупчення особового складу, навчальних майданчиках і складах боєприпасів. Унаслідок атаки на території полігону виникла вторинна детонація боєкомплекту та масштабна пожежа. Об'єкт активно використовувався командуванням окупаційних військ для злагодження підрозділів і підготовки операторів БПЛА перед відправкою на фронт. Удар на відстані 140 км від лінії бойового зіткнення призвів до знищення техніки та порушив процес підготовки резервів армії РФ.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT, ЗМІ"
    },
    "en": {
      "region": "Zaporizhzhia Oblast (occupied territory), Primorsky Posad",
      "target": "Russian Army Military Training Ground 'Primorsky Posad'",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On July 30, 2026, the AFU General Staff officially confirmed a successful long-range precision strike on the Russian military training facility 'Primorsky Posad' in occupied Zaporizhzhia Oblast. Long-range UAVs hit troop staging sectors, equipment firing ranges, and temporary ammunition storage points near the coast. The attack triggered secondary detonations of stored munitions and a widespread fire across the military ground. Russian forces utilized this coastal site for training assault units and qualifying drone operators prior to frontline deployment. Striking 140 km from the active frontline, the strike destroyed military hardware and severely disrupted Russian reserve troop preparation.",
      "source": "AFU General Staff, GUR MO, OSINT, Media"
    }
  }
];

// Validate sentence count & character length
console.log('--- VALIDATING ITEMS ---');
let hasError = false;
items.forEach((item, idx) => {
    item.distance = calcMinDistance(item.lat, item.lng);
    ['ru', 'uk', 'en'].forEach(lang => {
        const text = item[lang].details;
        const charLen = text.length;
        const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);
        const sentenceCount = sentences.length;
        console.log(`Item #${idx+1} [${lang}] Target: "${item[lang].target}": ${charLen} chars, ${sentenceCount} sentences, dist=${item.distance}km.`);
        if (charLen < 600 || charLen > 1000) {
            console.error(`ERROR: Item #${idx+1} [${lang}] char length ${charLen} is outside [600, 1000] range!`);
            hasError = true;
        }
        if (sentenceCount < 4 || sentenceCount > 8) {
            console.error(`ERROR: Item #${idx+1} [${lang}] sentence count ${sentenceCount} is outside [4, 8] range!`);
            hasError = true;
        }
    });
});

if (hasError) {
    console.error('Validation failed!');
    process.exit(1);
}

// Read existing data.js
let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;\n?$/, '').trim();
let data = new Function('return ' + dataStr)();

// Find max ID
let maxId = 0;
data.forEach(item => { if (item.id > maxId) maxId = item.id; });

// Insert items at the beginning of the array so newest items appear first
items.forEach((item) => {
  maxId++;
  item.id = maxId;
  data.unshift(item);
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully added ${items.length} items for date 30.07.2026 into data.js`);
