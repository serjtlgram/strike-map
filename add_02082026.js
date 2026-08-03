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
    "date": "02.08.2026",
    "lat": 51.4422,
    "lng": 45.9614,
    "distance": null,
    "ru": {
      "region": "Саратовская область, г. Саратов (Заводской район)",
      "target": "Саратовский НПЗ (ПАО «НК «Роснефть»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 2 августа 2026 года Силы обороны Украины совместно с ГУР МО провели успешную атаку БПЛА по Саратовскому нефтеперерабатывающему заводу. Несколько ударных дронов-камикадзе преодолели региональную систему ПВО и попали по ключевым производственным секциям предприятия. В результате прилетов на территории завода возник сильный пожар, поражение получила установка первичной переработки нефти ЭЛОУ-АВТ-6. Губернатор Саратовской области Роман Бусаргин подтвердил атаку БПЛА и повреждение промышленного объекта. Данный завод входит в структуру компании «Роснефть» и способен перерабатывать до 7 млн тонн нефти в год. Предприятие производит автомобильный бензин, дизельное топливо и мазут, играя важную роль в обеспечении топливом войск РФ. Удар на расстоянии около 540 км от линии фронта существенно снизил оперативные мощности завода.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT (Astra), губернатор Бусаргин, СМИ"
    },
    "uk": {
      "region": "Саратовська область, м. Саратов (Заводський район)",
      "target": "Саратовський НПЗ (ПАТ «НК «Роснафта»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 2 серпня 2026 року Сили оборони України спільно з ГУР МО провели успішну атаку БПЛА по Саратовському нафтопереробному заводу. Кілька ударних дронів-камікадзе подолали регіональну систему ППО та влучили по ключових виробничих секціях підприємства. Унаслідок прильотів на території заводу виникла сильна пожежа, ураження зазнала установка первинної переробки нафти ЕЛОУ-АВТ-6. Губернатор Саратовської області Роман Бусаргін підтвердив атаку БПЛА та пошкодження промислового об'єкта. Цей завод входить до структури компанії «Роснафта» і здатен переробляти до 7 млн тонн нафти на рік. Підприємство виготовляє автомобільний бензин, дизельне пальне та мазут, відіграючи важливу роль у забезпеченні паливом військ РФ. Удар на відстані близько 540 км від лінії фронту суттєво знизив оперативні потужності заводу.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT (Astra), губернатор Бусаргін, ЗМІ"
    },
    "en": {
      "region": "Saratov Oblast, Saratov (Zavodsky District)",
      "target": "Saratov Oil Refinery (Rosneft)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 2, 2026, Ukrainian Defense Forces and GUR units executed a long-range drone attack targeting the Saratov Oil Refinery. Multiple kamikaze UAVs penetrated local air defenses, striking primary oil processing infrastructure. The raid ignited a large fire inside the industrial complex, causing significant structural damage to the ELOU-AVT-6 crude distillation unit. Saratov Regional Governor Roman Busargin acknowledged the drone raid and confirmed damages at the industrial facility. Owned by Rosneft, the refinery has an annual processing capacity of up to 7 million metric tons of crude oil. The plant manufactures motor gasoline, diesel, and fuel oil, serving as a critical fuel supply hub for Russian forces. Striking roughly 540 km from the border, the raid noticeably reduced the facility's production capabilities.",
      "source": "AFU General Staff, GUR, OSINT (Astra), Governor Busargin, Media"
    }
  },
  {
    "date": "02.08.2026",
    "lat": 51.4811,
    "lng": 46.2163,
    "distance": null,
    "ru": {
      "region": "Саратовская область, г. Энгельс",
      "target": "Военный аэродром стратегической авиации «Энгельс-2»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 2 августа 2026 года Силы беспилотных систем ВСУ во взаимодействии с ГУР нанесли массированный удар БПЛА по авиабазе «Энгельс-2» в Саратовской области. Несколько дальнобойных дронов прорвали противовоздушную оборону аэродрома, вызвав серию взрывов и масштабные пожары на его территории. По данным космического мониторинга и местным источникам, повреждения получили объекты инфраструктуры обеспечения и зоны технического обслуживания авиатехники. Аэродром «Энгельс-2» является ключевой базой Дальней авиации ВКС РФ, где постоянно дислоцируются стратегические бомбардировщики Ту-95МС и Ту-160, используемые для ракетных ударов по Украине. Атака привела к срыву плановых вылетов и вынудила противника рассредотачивать самолеты. Удар на расстоянии около 560 км от линии фронта продемонстрировал уязвимость главной базы ядерной триады.",
      "source": "Генштаб ВСУ, СБС, ГУР МО, OSINT (Astra), российские паблики, СМИ"
    },
    "uk": {
      "region": "Саратовська область, м. Енгельс",
      "target": "Військовий аеродром стратегічної авіації «Енгельс-2»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 2 серпня 2026 року Сили безпілотних систем ЗСУ у взаємодії з ГУР завдали масованого удару БПЛА по авіабазі «Енгельс-2» у Саратовській області. Кілька далекобійних дронів прорвали протиповітряну оборону аеродрому, спричинивши серію вибухів та масштабні пожежі на його території. За даними космічного моніторингу та місцевих джерел, пошкоджень зазнали об'єкти інфраструктури забезпечення та зони технічного обслуговування авіатехніки. Аеродром «Енгельс-2» є ключовою базою Далекої авіації ПКС РФ, де постійно дислокуються стратегічні бомбардувальники Ту-95МС та Ту-160, які використовуються для ракетних ударів по Україні. Атака призвела до зриву планових вильотів і змусила противника розосереджувати літаки. Удар на відстані близько 560 км від лінії фронту продемонстрував вразливість головної бази ядерної тріади.",
      "source": "Генштаб ЗСУ, СБС, ГУР МО, OSINT (Astra), російські пабліки, ЗМІ"
    },
    "en": {
      "region": "Saratov Oblast, Engels",
      "target": "Engels-2 Strategic Aviation Airbase",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On the night of August 2, 2026, the Unmanned Systems Forces of Ukraine and GUR launched a joint drone strike on the Engels-2 airbase in Saratov Oblast. Multiple long-range strike UAVs breached air defense layers, triggering secondary explosions and fires across the military airfield. Satellite imagery and local reports confirmed damages to support infrastructure and flight line maintenance areas. Engels-2 serves as the primary base for Russia's Long-Range Aviation, hosting Tu-95MS and Tu-160 strategic bombers used for missile raids against Ukrainian cities. The attack disrupted scheduled bomber sorties and forced military command to order aircraft dispersal to northern airfields. Positioned roughly 560 km from the border, the raid highlighted severe vulnerabilities at Russia's strategic nuclear triad hub.",
      "source": "AFU General Staff, SBS, GUR, OSINT (Astra), Russian media"
    }
  },
  {
    "date": "02.08.2026",
    "lat": 53.8642,
    "lng": 34.4621,
    "distance": null,
    "ru": {
      "region": "Калужская область, г. Людиново",
      "target": "Нефтебаза «Людиновская» (АО «Калуганефтепродукт»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "2 августа 2026 года в ходе ночной атаки украинских БПЛА поражение получила нефтебаза «Людиновская» в Калужской области. Несколько ударных дронов точечно атаковали резервуарный парк предприятия, вызвав возгорание нескольких емкостей с дизельным топливом. Губернатор Калужской области Владислав Шапша подтвердил падение беспилотников и пожар на территории объекта ТЭК. На место выезжали расчеты МЧС для тушения горящих резервуаров. Нефтебаза принадлежит АО «Калуганефтепродукт» и выступает ключевым узлом хранения и распределения горюче-смазочных материалов для снабжения военных частей Центрального военного округа. Удар на расстоянии около 260 км от линии фронта нарушил топливную логистику группировки войск противника на брянском и курском направлениях.",
      "source": "Генштаб ВСУ, СБС, OSINT (Astra), губернатор Шапша, СМИ"
    },
    "uk": {
      "region": "Калузька область, м. Людиново",
      "target": "Нафтобаза «Людинівська» (АТ «Калуганефтепродукт»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "2 серпня 2026 року під час нічної атаки українських БПЛА ураження зазнала нафтобаза «Людинівська» в Калузькій області. Кілька ударних дронів точково атакували резервуарний парк підприємства, спричинивши займання кількох ємностей із дизельним пальним. Губернатор Калузької області Владислав Шапша підтвердив падіння безпілотників та пожежу на території об'єкта ТЕК. На місце виїжджали розрахунки МНС для гасіння палаючих резервуарів. Нафтобаза належить АТ «Калуганефтепродукт» і виступає ключовим вузлом зберігання та розподілу пально-мастильних матеріалів для забезпечення військових частин Центрального військового округу. Удар на відстані близько 260 км від лінії фронту порушив паливну логістику угруповання військ противника на брянському та курському напрямках.",
      "source": "Генштаб ЗСУ, СБС, OSINT (Astra), губернатор Шапша, ЗМІ"
    },
    "en": {
      "region": "Kaluga Oblast, Lyudinovo",
      "target": "Lyudinovskaya Oil Depot (Kaluganefteprodukt)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On August 2, 2026, Ukrainian strike drones successfully targeted the Lyudinovskaya oil depot in Kaluga Oblast. Several kamikaze UAVs hit the facility's tank farm, setting multiple diesel storage containers ablaze. Kaluga Regional Governor Vladislav Shapsha confirmed the drone strike and subsequent fires inside the fuel depot property. Firefighting crews spent several hours suppressing the flames across the industrial site. Operated by Kaluganefteprodukt, the facility serves as a vital logistics storage hub supplying fuels and lubricants to Russian troops in the Central Military District. Located roughly 260 km from the border, the operation severely disrupted military fuel logistics along the Bryansk and Kursk front sectors.",
      "source": "AFU General Staff, SBS, OSINT (Astra), Governor Shapsha, Media"
    }
  },
  {
    "date": "02.08.2026",
    "lat": 52.8250,
    "lng": 34.4980,
    "distance": null,
    "ru": {
      "region": "Брянская область, Навлинский район (пгт Навля)",
      "target": "База хранения, подготовки и запуска ударных БПЛА (пгт Навля)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 2 августа 2026 года подразделения Сил обороны Украины нанесли высокоточный удар БПЛА по замаскированному военному объекту в районе пгт Навля Брянской области. Целью атаки стала передовая база противника, использовавшаяся для хранения, сборки и запуска ударных дронов по территории Украины. Беспилотники поразили складские ангары и пусковые площадки, вызвав вторичную детонацию боеприпасов и сильный пожар. В сводке Генштаба ВСУ официально подтверждено уничтожение места дислокации и подготовки операторов БПЛА противника. Местные жители сообщали о серии громких взрывов и выбитых окнах в зданиях неподалеку от промзоны. Ликвидация этого пункта на расстоянии около 160 км от линии фронта снизила интенсивность налётов вражеских дронов на приграничные украинские регионы.",
      "source": "Генштаб ВСУ, СБС, OSINT (Astra), брянские паблики, СМИ"
    },
    "uk": {
      "region": "Брянська область, Навлинський район (смт Навля)",
      "target": "База зберігання, підготовки та запуску ударних БПЛА (смт Навля)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 2 серпня 2026 року підрозділи Сил оборони України завдали високоточного удару БПЛА по замаскованому військовому об'єкту в районі смт Навля Брянської області. Ціллю атаки стала передова база противника, яка використовувалася для зберігання, складання та запуску ударних дронів по території України. Безпілотники уразили складські ангари та пускові майданчики, спричинивши вторинну детонацію боєприпасів і сильну пожежу. У зведенні Генштабу ЗСУ офіційно підтверджено знищення місця дислокації та підготовки операторів БПЛА противника. Місцеві жителі повідомляли про серію гучних вибухів та вибиті шибки в будівлях неподалік промзони. Ліквідація цього пункту на відстані близько 160 км від лінії фронту знизила інтенсивність нальотів ворожих дронів на прикордонні українські регіони.",
      "source": "Генштаб ЗСУ, СБС, OSINT (Astra), брянські пабліки, ЗМІ"
    },
    "en": {
      "region": "Bryansk Oblast, Navlya District (Navlya)",
      "target": "Strike UAV Depot and Launch Base (Navlya)",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On the night of August 2, 2026, Ukrainian Defense Forces carried out a precision drone attack on a concealed military facility near Navlya, Bryansk Oblast. The target was a forward deployment base used by Russian forces for storing, assembling, and launching kamikaze UAVs against Ukrainian targets. Striking drones hit storage hangars and launch positions, causing secondary ammunition explosions and fires. The General Staff of the AFU officially confirmed the destruction of the drone storage site and operator crew quarters. Local residents reported a series of heavy explosions that shattered windows near the industrial zone. Neutralizing this hub, located roughly 160 km from the border, significantly reduced enemy drone launch capabilities against northern Ukrainian border regions.",
      "source": "AFU General Staff, SBS, OSINT (Astra), Bryansk media"
    }
  },
  {
    "date": "02.08.2026",
    "lat": 53.3644,
    "lng": 50.3472,
    "distance": null,
    "ru": {
      "region": "Самарская область, Красноярский район (пгт Новосемейкино)",
      "target": "Логистический распределительный центр Wildberries (пгт Новосемейкино)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "2 августа 2026 года в результате налёта дальнобойных украинских БПЛА был поражен крупный логистический центр Wildberries в поселке Новосемейкино Самарской области. Несколько ударных беспилотников упали на территорию складского терминала, спровоцировав взрывы и масштабный пожар на площади несколько тысяч квадратных метров. Губернатор Вячеслав Федорищев и пресс-служба компании подтвердили факт атаки и эвакуацию персонала, обошлось без жертв. Пожарные расчеты МЧС тушили возгорание в течение нескольких часов. Логистический хаб в Новосемейкино выполнял важную роль в цепочках 3PL-сортировки товаров двойного назначения и военного снаряжения для Поволжского региона. Удар на расстоянии около 950 км от линии фронта нанес урон снабжению логистических сетей противника.",
      "source": "Генштаб ВСУ, OSINT (Astra), Wildberries, губернатор Федорищев, СМИ"
    },
    "uk": {
      "region": "Самарська область, Красноярський район (смт Новосемейкіно)",
      "target": "Логістичний розподільчий центр Wildberries (смт Новосемейкіно)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "2 серпня 2026 року внаслідок нальоту далекобійних українських БПЛА було уражено великий логістичний центр Wildberries у селищі Новосемейкіно Самарської області. Кілька ударних безпілотників впали на територію складського термінала, спровокувавши вибухи та масштабну пожежу на площі кілька тисяч квадратних метрів. Губернатор В'ячеслав Федорищев та прес-служба компанії підтвердили факт атаки та евакуацію персоналу, обійшлося без жертв. Пожежні розрахунки МНС гасили займання протягом кількох годин. Логістичний хаб у Новосемейкіно відігравав важливу роль у ланцюжках 3PL-сортування товарів подвійного призначення та військового спорядження для Поволзького регіону. Удар на відстані близько 950 км від лінії фронту завдав шкоди постачанню логістичних мереж противника.",
      "source": "Генштаб ЗСУ, OSINT (Astra), Wildberries, губернатор Федорищев, ЗМІ"
    },
    "en": {
      "region": "Samara Oblast, Krasnoyarsky District (Novosemeykino)",
      "target": "Wildberries Logistics Hub (Novosemeykino, Samara Oblast)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On August 2, 2026, a long-range Ukrainian drone attack hit the Wildberries major logistics distribution center in Novosemeykino, Samara Oblast. Multiple strike UAVs impacted warehouse modules, triggering secondary explosions and a large-scale fire spanning several thousand square meters. Samara Regional Governor Vyacheslav Fedorishev and Wildberries representatives confirmed the drone strike and worker evacuations, reporting no fatalities. EMERCOM firefighting teams spent hours extinguishing the blazes across the facility. The Novosemeykino distribution node played a significant role in sorting 3PL tactical goods, dual-use electronics, and supply gear for military units across the Volga region. Positioned roughly 950 km from the border, the raid severely disrupted regional logistics flows.",
      "source": "AFU General Staff, OSINT (Astra), Wildberries, Governor Fedorishev, Media"
    }
  }
];

console.log('--- VALIDATING ITEMS FOR 02.08.2026 ---');
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
    console.error('Validation failed. Aborting write.');
    process.exit(1);
}

// Read data.js and add items
const content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
let data = new Function('return ' + dataStr)();

let maxId = data.reduce((max, item) => item.id && item.id > max ? item.id : max, 0);

items.forEach(item => {
    maxId++;
    item.id = maxId;
    data.push(item);
});

// Write back to data.js
const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully added ${items.length} items to data.js! Total items now: ${data.length}`);
