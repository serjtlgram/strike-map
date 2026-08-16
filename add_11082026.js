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
    "date": "11.08.2026",
    "lat": 51.2506,
    "lng": 58.5233,
    "distance": calcMinDistance(51.2506, 58.5233),
    "ru": {
      "region": "Оренбургская область, г. Орск (пос. Никель)",
      "target": "Нефтеперерабатывающий комплекс ПАО «Орскнефтеоргсинтез» (Орский НПЗ, АО «ФортеИнвест»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 11 августа 2026 года Силы обороны Украины нанесли результативный дальний удар ударными дронами по нефтеперерабатывающему заводу ПАО «Орскнефтеоргсинтез» в городе Орске Оренбургской области. Предприятие мощностью переработки около 6 млн тонн сырой нефти в год находится на удалении более 1500 километров от линии боевого соприкосновения и производит моторные топлива для восточной группировки войск РФ. Украинские БПЛА преодолели противовоздушную оборону и успешно поразили установку первичной переработки нефти ЭЛОУ-АВТ, а также задели комплекс гидрокрекинга. На территории НПЗ вспыхнул крупный пожар, в Орске вводился план «Ковер» и закрывалось воздушное пространство. Власти Оренбургской области подтвердили серьезные повреждения технологических цепочек, из-за которых завод полностью остановил переработку нефти, а на региональных автозаправках возник дефицит топлива.",
      "source": "Генштаб ВСУ, ГУР МО, администрация Оренбургской области, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Оренбурзька область, м. Орськ (сел. Нікель)",
      "target": "Нафтопереробний комплекс ПАТ «Орськнафтооргсинтез» (Орський НПЗ, АТ «ФортеІнвест»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 11 серпня 2026 року Сили оборони України завдали результативного далекого удару ударними дронами по нафтопереробному заводу ПАТ «Орськнафтооргсинтез» у місті Орськ Оренбурзької області. Підприємство потужністю переробки близько 6 млн тонн сирої нафти на рік розташоване на відстані понад 1500 кілометрів від лінії бойового зіткнення та виробляє моторні палива для східного угруповання військ РФ. Українські БПЛА подолали протиповітряну оборону та успішно уразили установку первинної переробки нафти ЕЛОУ-АВТ, а також зачепили комплекс гідрокрекінгу. На території НПЗ спалахнула велика пожежа, в Орську вводився план «Килим» та закривався повітряний простір. Влада Оренбурзької області підтвердила серйозні пошкодження технологічних ланцюжків, через які завод повністю зупинив переробку нафти, а на регіональних автозаправках виник дефіцит пального.",
      "source": "Генштаб ЗСУ, ГУР МО, адміністрація Оренбурзької області, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Orenburg Oblast, Orsk (Nikel Settlement)",
      "target": "Orsknefteorgsintez Oil Refinery Complex (Orsk Refinery, JSC ForteInvest)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 11, 2026, the Ukrainian Defense Forces executed an effective long-range drone strike against the Orsknefteorgsintez oil refinery in Orsk, Orenburg Oblast. Located more than 1,500 kilometers from the frontline, the refinery has a processing capacity of approximately 6 million metric tons of crude oil per year and supplies fuels to Russian military logistics. Ukrainian strike UAVs penetrated regional air defenses and directly hit the ELOU-AVT crude distillation unit, with damage also reported at the hydrocracking unit. The strike sparked a large blaze across the refinery, prompting emergency air traffic restrictions at Orsk Airport. Regional authorities acknowledged severe infrastructure damage, which forced a total shutdown of oil refining operations at the plant and led to widespread fuel shortages at regional gas stations.",
      "source": "General Staff of AFU, GUR MO, Orenburg Administration, OSINT (Astra), Media"
    }
  },
  {
    "date": "11.08.2026",
    "lat": 51.6142,
    "lng": 39.3416,
    "distance": calcMinDistance(51.6142, 39.3416),
    "ru": {
      "region": "Воронежская область, Новоусманский район, с. Александровка",
      "target": "Распределительный логистический комплекс Wildberries",
      "category": "Логистический центр",
      "weapon": "Дрон",
      "details": "В ночь на 11 августа 2026 года Силы беспилотных систем Украины совершили массированную атаку БПЛА на ключевой распределительный логистический комплекс Wildberries в селе Александровка Новоусманского района Воронежской области. Этот недавно запущенный хаб площадью в десятки тысяч квадратных метров служил важнейшим транзитным узлом для сортировки и оперативной отправки армейской экипировки и грузов двойного назначения. Несколько ударных дронов прорвали зональную ПВО и попали в складские корпуса, вызвав масштабный пожар на площади свыше 16 тысяч квадратных метров с частичным обрушением кровли. Губернатор Воронежской области подтвердил гибель одного человека и ранения еще двоих сотрудников. Работа крупного логистического центра была парализована, а сопутствующая кибератака украинских специалистов на цифровые системы маркетплейса усилила сбой поставок.",
      "source": "СБС ВСУ, ГУР МО, губернатор Гусев, OSINT (Astra), пресс-служба Wildberries, СМИ"
    },
    "uk": {
      "region": "Воронезька область, Новоусманський район, с. Олександрівка",
      "target": "Розподільчий логістичний комплекс Wildberries",
      "category": "Логістичний центр",
      "weapon": "Дрон",
      "details": "У ніч проти 11 серпня 2026 року Сили безпілотних систем України здійснили масовану атаку БПЛА на ключовий розподільчий логістичний комплекс Wildberries у селі Олександрівка Новоусманського району Воронезької області. Цей нещодавно запущений хаб площею у десятки тисяч квадратних метрів слугував найважливішим транзитним вузлом для сортування та оперативного відправлення армійської екіпіровки і вантажів подвійного призначення. Кілька ударних дронів прорвали зональну ППО та влучили у складські корпуси, спричинивши масштабну пожежу на площі понад 16 тисяч квадратних метрів із частковим обваленням покрівлі. Губернатор Воронезької області підтвердив загибель однієї людини та поранення ще двох співробітників. Роботу великого логістичного центру було паралізовано, а супутня кібератака українських фахівців на цифрові системи маркетплейсу посилила збій постачань.",
      "source": "СБС ЗСУ, ГУР МО, губернатор Гусєв, OSINT (Astra), прес-служба Wildberries, ЗМІ"
    },
    "en": {
      "region": "Voronezh Oblast, Novousmansky District, Aleksandrovka Village",
      "target": "Wildberries Distribution & Logistics Hub",
      "category": "Logistics Hub",
      "weapon": "Drone",
      "details": "On the night of August 11, 2026, the Unmanned Systems Forces of Ukraine launched a concentrated drone attack on the primary Wildberries distribution and logistics hub in Aleksandrovka village, Novousmansky District of Voronezh Oblast. Opened as a major distribution platform spanning tens of thousands of square meters, the hub was actively utilized for sorting and fast-tracking military equipment and dual-use goods. Several strike UAVs breached regional air defenses, hitting warehouse buildings and triggering a massive fire covering over 16,000 square meters that led to structural roof collapses. The Voronezh regional governor confirmed one fatality and two injuries among personnel. Operations at the logistics center were completely halted, while a coordinated Ukrainian cyber operation against the retailer's backend servers compounded supply chain disruptions.",
      "source": "Unmanned Systems Forces, GUR MO, Governor Gusev, OSINT (Astra), Wildberries PR, Media"
    }
  },
  {
    "date": "11.08.2026",
    "lat": 50.6141,
    "lng": 137.0640,
    "distance": calcMinDistance(50.6141, 137.0640),
    "ru": {
      "region": "Хабаровский край, г. Комсомольск-на-Амуре",
      "target": "Комсомольский нефтеперерабатывающий завод (ООО «РН-Комсомольский НПЗ», ПАО «НК «Роснефть»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "11 августа 2026 года на Комсомольском нефтеперерабатывающем заводе «Роснефти» в Хабаровском крае произошла серия взрывов и масштабный пожар на технологических мощностях. Предприятие перерабатывает до 8 млн тонн нефти в год и выступает ключевым поставщиком моторного и авиационного керосина для военных соединений Восточного военного округа и Тихоокеанского флота РФ. По сообщениям местных источников и мониторинговых каналов, инцидент сопровождался разгерметизацией колонны первичной переработки нефти и сильным задымлением территории цехов. Событие произошло синхронно с серией ударов Сил обороны Украины по топливно-энергетическому комплексу России. В результате аварии и последовавшего пожара на предприятии экстренно вводились специальные регламенты безопасности, а переработка углеводородов на поврежденном участке была временно остановлена.",
      "source": "OSINT (Astra), МЧС РФ, администрация Хабаровского края, СМИ"
    },
    "uk": {
      "region": "Хабаровський край, м. Комсомольськ-на-Амурі",
      "target": "Комсомольський нафтопереробний завод (ТОВ «РН-Комсомольський НПЗ», ПАТ «НК «Роснефть»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "11 серпня 2026 року на Комсомольському нафтопереробному заводі «Роснефти» в Хабаровському краї сталася серія вибухів і масштабна пожежа на технологічних потужностях. Підприємство переробляє до 8 млн тонн нафти на рік і виступає ключовим постачальником моторного та авіаційного гасу для військових з'єднань Східного військового округу та Тихоокеанського флоту РФ. За повідомленнями місцевих джерел і моніторингових каналів, інцидент супроводжувався розгерметизацією колони первинної переробки нафти та сильним задимленням території цехів. Подія сталася синхронно із серією ударів Сил оборони України по паливно-енергетичному комплексу Росії. У результаті аварії та пожежі на підприємстві екстрено вводилися спеціальні регламенти безпеки, а переробку вуглеводнів на пошкодженій ділянці було тимчасово зупинено.",
      "source": "OSINT (Astra), МНС РФ, адміністрація Хабаровського краю, ЗМІ"
    },
    "en": {
      "region": "Khabarovsk Krai, Komsomolsk-on-Amur",
      "target": "Komsomolsk Oil Refinery (LLC RN-Komsomolsky NPZ, Rosneft)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On August 11, 2026, a series of explosions and a major technological fire occurred at Rosneft's Komsomolsk Oil Refinery in Khabarovsk Krai. With a crude processing capacity of up to 8 million metric tons annually, the refinery serves as a critical supplier of gasoline, diesel, and aviation kerosene for Russian forces in the Eastern Military District and the Pacific Fleet. According to local reports and OSINT monitoring channels, the incident involved the sudden depressurization and fire outbreak at the atmospheric distillation column, sending thick smoke over the industrial perimeter. The incident coincided with coordinated Ukrainian deep strikes against Russian fuel infrastructure. Following the blaze, emergency safety protocols were implemented at the plant, and hydrocarbon processing on the damaged technological line was temporarily halted.",
      "source": "OSINT (Astra), EMERCOM of Russia, Khabarovsk Krai Administration, Media"
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

// Remove existing 11.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '11.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 11 August 2026! Total items in data.js: ${data.length}`);
