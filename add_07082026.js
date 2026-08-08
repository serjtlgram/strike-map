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
    "date": "07.08.2026",
    "lat": 45.1167,
    "lng": 33.9760,
    "distance": calcMinDistance(45.1167, 33.9760),
    "ru": {
      "region": "АР Крым (оккупирована РФ), Симферопольский район, пгт Гвардейское",
      "target": "Военный аэродром «Гвардейское»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 7 августа 2026 года Силы обороны Украины совершили комбинированный удар дальнобойными средствами поражения по военному аэродрому «Гвардейское» в оккупированном Крыму. Данный авиационный объект служит важным узлом базирования фронтовой авиации ВС РФ и крупной площадкой хранения и запуска ударных беспилотников типа «Шахед». По данным Генштаба ВСУ и мониторинговых пабликов, прилеты зафиксированы в районе площадки подготовки БПЛА и складов горюче-смазочных материалов. Местные жители сообщали о серии мощных взрывов с 03:30 до 04:47 утра и детонации боеприпасов. На территории аэродрома возникли два крупных очага возгорания, тушение которых продолжалось несколько часов. Силы ПВО РФ заявили о сбитии части дронов, однако прилеты по инфраструктуре подтверждаются снимками со спутников и свидетельствами очевидцев.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT (Astra, Крымский ветер), ЗМІ"
    },
    "uk": {
      "region": "АР Крим (окупована РФ), Сімферопольський район, смт Гвардійське",
      "target": "Військовий аеродром «Гвардійське»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 7 серпня 2026 року Сили оборони України завдали комбінованого удару далекобійними засобами ураження по військовому аеродрому «Гвардійське» в окупованому Криму. Цей авіаційний об'єкт слугує важливим вузлом базування фронтової авіації ЗС РФ та великим майданчиком зберігання й запуску ударних безпілотників типу «Шахед». За даними Генштабу ЗСУ та моніторингових пабліків, влучання зафіксовано в районі майданчика підготовки БПЛА та складів пально-мастильних матеріалів. Місцеві мешканці повідомляли про серію потужних вибухів із 03:30 до 04:47 ранку та вторинну детонацію боєприпасів. На території аеродрому виникли два великі осередки займання, ліквідація яких тривала кілька годин. Сили ППО РФ заявили про збиття частини дронів, проте влучання по інфраструктурі підтверджуються супутниковими знімками та свідченнями очевидців.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT (Astra, Кримський вітер), ЗМІ"
    },
    "en": {
      "region": "Autonomous Republic of Crimea (occupied by RF), Simferopol District, Gvardeyskoye",
      "target": "Gvardeyskoye Military Airfield",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On the night of August 7, 2026, the Ukrainian Defense Forces carried out a combined long-range strike against the Gvardeyskoye military airfield in occupied Crimea. The airbase functions as an operational hub for Russian tactical aviation and a key storage and launch facility for Shahed-type strike drones. According to the General Staff of the AFU and OSINT monitors, multiple impacts were registered near the drone launch control grounds and fuel storage depots. Local residents reported two waves of powerful explosions between 03:30 and 04:47 AM accompanied by secondary ammo detonations. The strike triggered two major industrial fires across the airbase infrastructure. Russian air defense claimed to have downed several incoming drones, yet confirmed direct impacts were verified by thermal satellite imagery and eyewitness reports.",
      "source": "General Staff of AFU, GUR MO, OSINT (Astra, Crimean Wind), Media"
    }
  },
  {
    "date": "07.08.2026",
    "lat": 45.3789,
    "lng": 32.5292,
    "distance": calcMinDistance(45.3789, 32.5292),
    "ru": {
      "region": "АР Крым (оккупирована РФ), Черноморский район, с. Оленевка (мыс Тарханкут)",
      "target": "Радиолокационная станция раннего обнаружения и ретранслятор БПЛА",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 7 августа 2026 года подразделения Сил обороны Украины и спецслужбы нанесли точечный удар по объектам военной инфраструктуры связи и наблюдения на Тарханкутском полуострове возле села Оленевка в Крыму. На данном направлении базировалась радиолокационная станция раннего обнаружения и наземный ретранслятор управления ударными беспилотниками типа «Герань». Эти технические комплексы обеспечивали наведение БПЛА и контроль воздушного пространства в западной части Черноморского региона. В результате успешного прилета высокоточных средств поражения зафиксировано уничтожение антенных систем и оборудования управления. Генштаб ВСУ официально подтвердил поражение ключевых узлов связи противника. Спутниковые снимки зафиксировали повреждения радиолокационного купола и пожар на позиции ретранслятора, что существенно снизило возможности РФ по координации налетов дронов.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT (Astra, Крымский ветер), ЗМІ"
    },
    "uk": {
      "region": "АР Крим (окупована РФ), Чорноморський район, с. Оленівка (мис Тарханкут)",
      "target": "Радіолокаційна станція раннього виявлення та ретранслятор БПЛА",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 7 серпня 2026 року підрозділи Сил оборони України та спецслужби завдали точкового удару по об'єктах військової інфраструктури зв'язку та спостереження на Тарханкутському півострові поблизу села Оленівка в Криму. На цьому напрямку базувалася радіолокаційна станція раннього виявлення та наземний ретранслятор управління ударними безпілотниками типу «Герань». Ці технічні комплекси забезпечували наведення БПЛА та контроль повітряного простору у західній частині Чорноморського регіону. У результаті успішного влучання високоточних засобів ураження зафіксовано знищення антенних систем та обладнання управління. Генштаб ЗСУ офіційно підтвердив ураження ключових вузлів зв'язку противника. Супутникові знімки зафіксували пошкодження радіолокаційного купола та пожежу на позиції ретранслятора, що суттєво знизило можливості РФ щодо координації нальотів дронів.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT (Astra, Кримський вітер), ЗМІ"
    },
    "en": {
      "region": "Autonomous Republic of Crimea (occupied by RF), Chornomorske District, Olenevka (Cape Tarkhankut)",
      "target": "Early Warning Radar Station & UAV Control Repeater",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On the night of August 7, 2026, Ukrainian Defense Forces and intelligence units conducted a precision strike targeting military surveillance and communications infrastructure near Olenevka on the Tarkhankut Peninsula in Crimea. The targeted site contained an early warning radar station and a key ground relay control node for Shahed and Geran attack UAVs. These high-tech installations maintained airspace monitoring and long-range drone control over the western Black Sea region. Direct impacts destroyed critical antenna systems and operational control equipment, as officially confirmed by the General Staff of the AFU. Satellite imagery confirmed structural damage to the radar dome and a localized fire at the repeater station, significantly undermining Russian capabilities to coordinate drone flight paths toward southern Ukraine.",
      "source": "General Staff of AFU, GUR MO, OSINT (Astra, Crimean Wind), Media"
    }
  },
  {
    "date": "07.08.2026",
    "lat": 56.7412,
    "lng": 60.7583,
    "distance": calcMinDistance(56.7412, 60.7583),
    "ru": {
      "region": "Свердловская область, г. Екатеринбург (Чкаловский район)",
      "target": "Распределительный логистический комплекс Wildberries",
      "category": "Логистический центр",
      "weapon": "Дрон",
      "details": "Утром 7 августа 2026 года украинские дальнобойные БПЛА совершили атаку на крупнейший распределительный логистический комплекс Wildberries в Екатеринбурге, расположенный почти в 2000 километрах от украинской границы. Данный хаб играет важную роль в логистических цепочках Уральского региона, осуществляя сортировку и транспортировку товаров двойного назначения и армейского снаряжения. По информации местных властей и OSINT-исследователей Astra, в налете участвовало не менее 8 беспилотников, три из которых пробили кровлю складского комплекса. На территории объекта вспыхнул сильный пожар, охвативший верхние уровни стеллажного хранения. Персонал склада в количестве около 800 человек был экстренно эвакуирован, жертв удалось избежать. Из-за атаки в екатеринбургском аэропорту «Кольцово» временно вводились ограничения на полеты, а прием грузов на терминале был остановлен.",
      "source": "OSINT (Astra), ЗМІ, губернатор Паслер, пресс-служба Wildberries"
    },
    "uk": {
      "region": "Свердловська область, м. Єкатеринбург (Чкаловський район)",
      "target": "Розподільчий логістичний комплекс Wildberries",
      "category": "Логістичний центр",
      "weapon": "Дрон",
      "details": "Уранці 7 серпня 2026 року українські далекобійні БПЛА здійснили атаку на найбільший розподільчий логістичний комплекс Wildberries в Єкатеринбурзі, розташований майже за 2000 кілометрів від українського кордону. Цей хаб відіграє важливу роль у логістичних ланцюжках Уральського регіону, здійснюючи сортування та транспортування товарів подвійного призначення і армійського спорядження. За інформацією місцевої влади та OSINT-дослідників Astra, у нальоті брали участь щонайменше 8 безпілотників, три з яких пробили покрівлю складського комплексу. На території об'єкта спалахнула сильна пожежа, яка охопила верхні рівні стелажного зберігання. Персонал складу у кількості близько 800 осіб було екстрено евакуйовано, жертв вдалося унинути. Через атаку в єкатеринбурзькому аеропорту «Кольцово» тимчасово вводилися обмеження на польоти, а прийом вантажів на терміналі було зупинено.",
      "source": "OSINT (Astra), ЗМІ, губернатор Паслер, прес-служба Wildberries"
    },
    "en": {
      "region": "Sverdlovsk Oblast, Yekaterinburg (Chkalovsky District)",
      "target": "Wildberries Distribution & Logistics Hub",
      "category": "Logistics Hub",
      "weapon": "Drone",
      "details": "On the morning of August 7, 2026, Ukrainian long-range strike drones targeted the Wildberries logistics and distribution hub in Yekaterinburg, roughly 2,000 kilometers from the Ukrainian border. This major distribution center plays a vital role in Urals logistics networks, facilitating shipments of dual-use supplies, tactical equipment, and commercial goods. According to regional authorities and OSINT outlet Astra, at least 8 drones participated in the attack, with three striking the main warehouse roof. A massive fire broke out across the upper storage racks inside the facility. Approximately 800 warehouse workers were evacuated safely, avoiding casualties. The attack forced temporary flight restrictions at Yekaterinburg's Koltsovo Airport, while inbound freight operations at the logistics center were suspended indefinitely due to heavy damage.",
      "source": "OSINT (Astra), Media, Governor Pasler, Wildberries PR"
    }
  }
];

// Check details lengths
let hasErrors = false;
newItems.forEach((item, idx) => {
  ['ru', 'uk', 'en'].forEach(lang => {
    const len = item[lang].details.length;
    console.log(`Item ${idx} (${item[lang].target} - ${lang}) details length: ${len} chars`);
    if (len < 600 || len > 1000) {
      console.error(`ERROR: Item ${idx} (${lang}) length ${len} is outside 600-1000 range!`);
      hasErrors = true;
    }
  });
});

if (hasErrors) {
  process.exit(1);
}

// Update data.js
const content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
let data = new Function('return ' + dataStr)();

// Remove existing 07.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '07.08.2026');
data.unshift(...newItems);

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log('Successfully updated data.js with 7 August 2026 strikes!');
