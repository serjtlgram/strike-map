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
    "date": "31.07.2026",
    "lat": 48.5085,
    "lng": 44.5956,
    "distance": null,
    "ru": {
      "region": "Волгоградская область, Волгоград (Красноармейский район)",
      "target": "Волгоградский НПЗ (ООО «ЛУКОЙЛ-Волгограднефтепереработка»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 31 июля 2026 года Силы обороны Украины совместно с ГУР МО провели ударную операцию по Волгоградскому НПЗ. Несколько дальнобойных дронов-камикадзе преодолели систему ПВО и попали по ключевым технологическим установкам предприятия. На территории завода начался сильный пожар, охвативший секцию переработки нефти. Губернатор Андрей Бочаров подтвердил атаку БПЛА и возгорание на объекте ТЭК в Красноармейском районе. Этот НПЗ считается самым мощным нефтеперерабатывающим заводом Южного федерального округа с объёмом переработки до 15 млн тонн нефти в год. Предприятие производит дизельное топливо и бензин, снабжая подразделения ВС РФ на Южном фронте. Удар на дистанции около 470 км от линии фронта существенно снизил производственные возможности завода.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT (Astra), губернатор Бочаров, СМИ"
    },
    "uk": {
      "region": "Волгоградська область, Волгоград (Красноармійський район)",
      "target": "Волгоградський НПЗ (ТОВ «ЛУКОЙЛ-Волгограднєфтепереработка»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 31 липня 2026 року Сили оборони України спільно з ГУР МО провели ударну операцію по Волгоградському НПЗ. Кілька далекобійних дронів-камікадзе подолали систему ППО та влучили по ключових технологічних установках підприємства. На території заводу сталася сильна пожежа, що охопила секцію переробки нафти. Губернатор Андрій Бочаров підтвердив атаку БПЛА та займання на об'єкті ТЕК у Красноармійському районі. Цей НПЗ є найпотужнішим нафтопереробним заводом Південного федерального округу з обсягом переробки до 15 млн тонн нафти на рік. Підприємство виготовляє дизельне пальне та бензин, забезпечуючи підрозділи ЗС РФ на Південному фронті. Удар на відстані близько 470 км від лінії фронту суттєво знизив виробничі можливості заводу.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT (Astra), губернатор Бочаров, ЗМІ"
    },
    "en": {
      "region": "Volgograd Oblast, Volgograd (Krasnoarmeysky District)",
      "target": "Volgograd Oil Refinery (LUKOIL-Volgogradneftepererabotka)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of July 31, 2026, the Ukrainian Defense Forces and GUR carried out a successful drone attack on the Volgograd Oil Refinery. Several long-range strike UAVs breached regional air defenses and directly hit primary refining units. The strike triggered a large fire across the industrial site in the Krasnoarmeysky District, confirmed by Governor Andrey Bocharov. As the largest refinery in Southern Russia, the facility processes up to 15 million metric tons of crude oil annually. The plant supplies critical diesel and aviation fuel directly to Russian occupation forces operating along the southern frontlines. Striking roughly 470 km from the border, the raid inflicted significant operational disruption on Russia's military fuel supply infrastructure.",
      "source": "AFU General Staff, GUR, OSINT (Astra), Governor Bocharov, Media"
    }
  },
  {
    "date": "31.07.2026",
    "lat": 48.7490,
    "lng": 44.4645,
    "distance": null,
    "ru": {
      "region": "Волгоградская область, Волгоград (Дзержинский район)",
      "target": "Логистический комплекс Wildberries (г. Волгоград)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "31 июля 2026 года в ходе ночного налёта БПЛА поражение получил крупный логистический центр Wildberries в Дзержинском районе Волгограда. Несколько ударных дронов упали на территорию складского терминала, вызвав серию взрывов и масштабный пожар. Администрация маркетплейса подтвердила экстренную эвакуацию сотни сотрудников, при этом пять человек получили травмы различной степени тяжести. Пожарные расчеты МЧС несколько часов ликвидировали возгорание на площади более тысячи квадратных метров. Складской комплекс выполнял задачи 3PL-сортировки и хранения товаров двойного назначения, поступающих для нужд снабжения армии. Удар на дистанции 480 км от линии фронта нарушил распределение промышленных грузов в Поволжье.",
      "source": "OSINT (Astra), МЧС РФ, Wildberries, губернатор Бочаров, СМИ"
    },
    "uk": {
      "region": "Волгоградська область, Волгоград (Дзержинський район)",
      "target": "Логістичний комплекс Wildberries (м. Волгоград)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "31 липня 2026 року під час нічного нальоту БПЛА ураження зазнав великий логістичний центр Wildberries у Дзержинському районі Волгограда. Кілька ударних дронів впали на територію складського термінала, спричинивши серію вибухів і масштабну пожежу. Адміністрація маркетплейсу підтвердила екстрену евакуацію сотні співробітників, при цьому п'ятеро осіб дістали травми різного ступеня тяжкості. Пожежні розрахунки МНС кілька годин ліквідовували займання на площі понад тисячу квадратних метрів. Складський комплекс виконував завдання 3PL-сортування та зберігання товарів подвійного призначення, що надходили для потреб забезпечення армії. Удар на відстані 480 км від лінії фронту порушив розподіл промислових вантажів у Поволжі.",
      "source": "OSINT (Astra), МНС РФ, Wildberries, губернатор Бочаров, ЗМІ"
    },
    "en": {
      "region": "Volgograd Oblast, Volgograd (Dzerzhinsky District)",
      "target": "Wildberries Logistics Center (Volgograd)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On July 31, 2026, during an overnight drone raid, Ukrainian UAVs struck the main Wildberries logistics distribution hub in Volgograd's Dzerzhinsky District. Impacting strike drones ignited a large fire inside storage modules, triggering structural collapse and secondary explosions. Wildberries management reported the emergency evacuation of over 100 workers, with local medical services confirming five injuries. Emergency response crews spent several hours extinguishing the blaze covering over 1,000 square meters. The facility operated as a central 3PL sorting node handling dual-use industrial gear and tactical supplies for Russian army logistics. Positioned 480 km from the Ukrainian border, the attack severely impaired supply distribution across the region.",
      "source": "OSINT (Astra), EMERCOM, Wildberries, Governor Bocharov, Media"
    }
  },
  {
    "date": "31.07.2026",
    "lat": 45.1278,
    "lng": 36.6811,
    "distance": null,
    "ru": {
      "region": "Краснодарский край, Темрюкский район (п. Волна)",
      "target": "Морской порт Тамань (Нефтегазовый и перевалочный терминал)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "31 июля 2026 года СБУ и Силы обороны Украины официально подтвердили успешный удар по инфраструктуре морского порта Тамань в Краснодарском крае. В результате прилёта украинских БПЛА на объекте возник сильный пожар, спутники зафиксировали не менее десяти очагов возгорания в районе резервуарных парков. Южная транспортная прокуратура РФ признала повреждения портового оборудования и травмы у двух сотрудников. Морской порт Тамань является важнейшим глубоководным узлом экспортной перевалки сжиженного природного газа, мазута и нефтепродуктов. Через терминалы порта обеспечивается заправка кораблей и топливное снабжение группировки войск РФ на юге. Удар на расстоянии около 250 км от линии фронта заблокировал отгрузку сырья.",
      "source": "СБУ, Генштаб ВСУ, OSINT (Astra), Транспортная прокуратура РФ, СМИ"
    },
    "uk": {
      "region": "Краснодарський край, Темрюцький район (с. Волна)",
      "target": "Морський порт Тамань (Нафтогазовий та перевалювальний термінал)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "31 липня 2026 року СБУ та Сили оборони України офіційно підтвердили успішний удар по інфраструктурі морського порту Тамань у Краснодарському краї. Унаслідок прильоту українських БПЛА на об'єкті виникла сильна пожежа, супутники зафіксували щонайменше десять осередків займання в районі резервуарних парків. Південна транспортна прокуратура РФ визнала пошкодження портового обладнання та травми у двох співробітників. Морський порт Тамань є найважливішим глибоководним вузлом експортної перевалки скрапленого природного газу, мазуту та нафтопродуктів. Через термінали порту забезпечується заправка кораблів і паливне забезпечення угруповання військ РФ на півдні. Удар на відстані близько 250 км від лінії фронту заблокував відвантаження сировини.",
      "source": "СБУ, Генштаб ЗСУ, OSINT (Astra), Транспортна прокуратура РФ, ЗМІ"
    },
    "en": {
      "region": "Krasnodar Krai, Temryuksky District (Volna settlement)",
      "target": "Port of Taman (Oil & Gas Export Terminal)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On July 31, 2026, the SBU and Ukrainian Defense Forces confirmed a joint long-range strike on the Taman commercial seaport in Krasnodar Krai. Ukrainian attack UAVs hit fuel transfer infrastructure, starting massive fires across storage tank farms with satellite imagery showing over ten active fire spots. Russian transport prosecutors acknowledged structural damages to loading piers and reported two personnel injured during the night raid. The Port of Taman serves as a critical deep-water hub for exporting Russian liquefied petroleum gas, fuel oil, and refined petroleum products. It directly feeds fuel supplies to Russian naval vessels and military units stationed in the Black Sea region. Located 250 km from the frontline, the strike crippled maritime fuel logistics.",
      "source": "SBU, AFU General Staff, OSINT (Astra), Russian Transport Prosecutor, Media"
    }
  },
  {
    "date": "31.07.2026",
    "lat": 45.2217,
    "lng": 33.3764,
    "distance": null,
    "ru": {
      "region": "АР Крым (временно оккупированная), г. Евпатория",
      "target": "Евпаторийский авиационный ремонтный завод (ЕАРЗ)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 31 июля 2026 года подразделения СБУ нанесли высокоточный удар БПЛА по Евпаторийскому авиационному ремонтному заводу в оккупированном Крыму. В результате налёта поражены два производственных ангара для хранения авиатехники и сборочный цех предприятия. Очевидцы и местные Telegram-каналы зафиксировали густые клубы дыма и звуки повторных детонаций на закрытой территории завода. ЕАРЗ специализируется на техническом обслуживании, регламентном ремонте и модернизации самолётов штурмовой авиации Су-25, а также агрегатов для ВВС РФ. Потеря производственных мощностей усложнит восстановление повреждённой крылатой техники противника. Удар на расстоянии 210 км от линии фронта нанёс серьёзный урон инфраструктуре ремонта ВПК.",
      "source": "СБУ, Генштаб ВСУ, OSINT (Astra), крымские паблики, СМИ"
    },
    "uk": {
      "region": "АР Крим (тимчасово окупована), м. Євпаторія",
      "target": "Євпаторійський авіаційний ремонтний завод (ЄАРЗ)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 31 липня 2026 року підрозділи СБУ завдали високоточного удару БПЛА по Євпаторійському авіаційному ремонтному заводу в окупованому Криму. Унаслідок нальоту уражено два виробничі ангари для зберігання авіатехніки та складальний цех підприємства. Очевидці та місцеві Telegram-канали зафіксували густі клуби диму й звуки повторних детонацій на закритій території заводу. ЄАРЗ спеціалізується на технічному обслуговуванні, регламентному ремонті та модернізації літаків штурмової авіації Су-25, а також агрегатів для ПКС РФ. Втрата виробничих потужностей ускладнить відновлення пошкодженої крилатої техніки противника. Удар на відстані 210 км від лінії фронту завдав серйозної шкоди інфраструктурі ремонту ВПК.",
      "source": "СБУ, Генштаб ЗСУ, OSINT (Astra), кримські пабліки, ЗМІ"
    },
    "en": {
      "region": "Autonomous Republic of Crimea (occupied), Yevpatoria",
      "target": "Yevpatoria Aircraft Repair Plant (EARZ)",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On the night of July 31, 2026, SBU specialized units conducted a precision long-range drone attack against the Yevpatoria Aircraft Repair Plant in occupied Crimea. Ukrainian kamikaze UAVs hit two large maintenance hangars housing military aviation equipment and damaged a primary assembly workshop. Local residents and satellite monitors reported dense smoke plumes rising over the secured facility alongside secondary explosions inside the plant grounds. EARZ is a key defense installation tasked with overhauling, maintaining, and upgrading Su-25 attack aircraft and components for Russian Aerospace Forces. Disruption of factory operations directly undermines Russia's capability to repair damaged frontline warplanes. Striking 210 km from the border, the raid severely weakened enemy air repair capacity.",
      "source": "SBU, AFU General Staff, OSINT (Astra), Crimean media"
    }
  },
  {
    "date": "31.07.2026",
    "lat": 55.8483,
    "lng": 48.5444,
    "distance": null,
    "ru": {
      "region": "Республика Татарстан, Зеленодольский район (г. Зеленодольск)",
      "target": "Логистический распределительный центр (г. Зеленодольск)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "Утром 31 июля 2026 года дальнобойные украинские беспилотники атаковали промышленно-логистическую зону в городе Зеленодольске Республики Татарстан. Несколько БПЛА нанесли удар по территории крупного распределительного комплекса, вызвав пожар и задымление над складскими терминалами. Глава Зеленодольского района Михаил Афанасьев подтвердил инцидент, а на предприятии провели экстренную эвакуацию персонала. Из-за угрозы беспилотников Росавиация временно вводила ограничения на работу аэропорта Казани. Логистический хаб в Зеленодольске используется для складской обработки и снабжения комплектующими оборонных заводов региона, включая судостроительный завод им. Горького. Удар на рекордном расстоянии 1180 км подтвердил достижимость тыловых объектов РФ.",
      "source": "OSINT (Astra), глава района Афанасьев, Росавиация, СМИ"
    },
    "uk": {
      "region": "Республіка Татарстан, Зеленодольський район (м. Зеленодольськ)",
      "target": "Логістичний розподільчий центр (м. Зеленодольськ)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "Уранці 31 липня 2026 року далекобійні українські безпілотники атакували промислово-логістичну зону в місті Зеленодольську Республіки Татарстан. Кілька БПЛА завдали удару по території великого розподільчого комплексу, спричинивши пожежу та задимлення над складськими терміналами. Голова Зеленодольського району Михайло Афанасьєв підтвердив інцидент, а на підприємстві провели екстрену евакуацію персоналу. Через загрозу безпілотників Росавіація тимчасово вводила обмеження на роботу аеропорту Казані. Логістичний хаб у Зеленодольську використовується для складської обробки та постачання комплектуючих оборонних заводів регіону, включно із суднобудівним заводом ім. Горького. Удар на рекорній відстані 1180 км підтвердив досяжність тилових об'єктів РФ.",
      "source": "OSINT (Astra), голова району Афанасьєв, Росавіація, ЗМІ"
    },
    "en": {
      "region": "Republic of Tatarstan, Zelenodolsky District (Zelenodolsk)",
      "target": "Logistics Distribution Hub (Zelenodolsk, Tatarstan)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the morning of July 31, 2026, long-range Ukrainian drones attacked an industrial logistics zone in Zelenodolsk, Republic of Tatarstan. Multiple UAV strikes caused explosions and smoke over warehouse terminals within the commercial distribution hub. Zelenodolsk District Head Mikhail Afanasyev confirmed the drone incident as management ordered an emergency evacuation of warehouse workers. The drone raid prompted air traffic authorities (Rosaviatsia) to temporarily suspend operations at Kazan International Airport. The Zelenodolsk logistics center plays a vital role in routing dual-use components and hardware to nearby defense plants, such as the Zelenodolsk Shipyard. Reaching 1,180 km from the border, the raid exposed deep rear vulnerabilities in Russian industrial supply chains.",
      "source": "OSINT (Astra), District Head Afanasyev, Rosaviatsia, Media"
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
console.log(`Successfully added ${items.length} items for date 31.07.2026 into data.js`);
