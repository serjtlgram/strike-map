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
    "date": "10.08.2026",
    "lat": 58.2917,
    "lng": 68.3267,
    "distance": calcMinDistance(58.2917, 68.3267),
    "ru": {
      "region": "Тюменская область, г. Тобольск (Центральная промзона)",
      "target": "Нефтехимический комплекс «ЗапСибНефтехим» (ООО «ЗапСибНефтехим», ПАО «СИБУР Холдинг»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "10 августа 2026 года Силы специальных операций и Силы беспилотных систем ВСУ нанесли беспрецедентный дальний удар по крупнейшему в России нефтехимическому комплексу «ЗапСибНефтехим» в Тобольске. Предприятие холдинга «СИБУР» расположено на рекордном удалении свыше 2000 километров от линии фронта и является ключевым производителем полимеров, сжиженных углеводородных газов и мономерного сырья для оборонной промышленности РФ. Несколько украинских ударных БПЛА преодолели многоэшелонированную систему ПВО и поразили центральную газофракционирующую установку (ЦГФУ). На промышленном объекте вспыхнул масштабный пожар, сопровождавшийся факельным горением газовых фракций и сильным задымлением. Власти региона подтвердили факт атаки и падение дронов на территории завода. Атака привела к экстренной остановке цехов фракционирования и выходу из строя оборудования.",
      "source": "ССО ВСУ, СБС ВСУ, администрация Тюменской области, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Тюменська область, м. Тобольськ (Центральна промзона)",
      "target": "Нафтохімічний комплекс «ЗапСибНефтехим» (ТОВ «ЗапСибНефтехим», ПАТ «СІБУР Холдинг»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "10 серпня 2026 року Сили спеціальних операцій та Сили безпілотних систем ЗСУ завдали безпрецедентного далекого удару по найбільшому в Росії нафтохімічному комплексу «ЗапСибНефтехим» у Тобольську. Підприємство холдингу «СІБУР» розташоване на рекордній відстані понад 2000 кілометрів від лінії фронту та є ключовим виробником полімерів, скраплених вуглеводневих газів та мономерної сировини для оборонної промисловості РФ. Кілька українських ударних БПЛА подолали багатоешелоновану систему ППО та уразили центральну газофракціонуючу установку (ЦГФУ). На промисловому об'єкті спалахнула масштабна пожежа, що супроводжувалася факельним горінням газових фракцій та сильним задимленням. Влада регіону підтвердила факт атаки та падіння дронів на території заводу. Атака призвела до екстреної зупинки цехів фракціонування та виходу з ладу обладнання.",
      "source": "ССО ЗСУ, СБС ЗСУ, адміністрація Тюменської області, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Tyumen Oblast, Tobolsk (Central Industrial Zone)",
      "target": "ZapSibNeftekhim Petrochemical Complex (LLC ZapSibNeftekhim, SIBUR Holding)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On August 10, 2026, the Special Operations Forces and Unmanned Systems Forces of Ukraine carried out a long-range strike against Russia's largest petrochemical complex, ZapSibNeftekhim in Tobolsk. Operated by SIBUR Holding, the facility is situated at a record distance of over 2,000 kilometers from the frontline. It serves as a strategic producer of polymers, liquefied petroleum gases, and monomer feedstocks supporting Russia's military-industrial manufacturing. Multiple Ukrainian attack UAVs bypassed regional air defense systems and scored hits on the central gas fractionation unit (CGFU). The impact triggered a major fire accompanied by intense flare burning of hydrocarbon gases and heavy smoke columns across the industrial zone. Local authorities confirmed the drone impacts. The attack forced an emergency shutdown of processing units.",
      "source": "SOF of AFU, Unmanned Systems Forces, Tyumen Administration, OSINT (Astra), Media"
    }
  },
  {
    "date": "10.08.2026",
    "lat": 55.5786,
    "lng": 51.9365,
    "distance": calcMinDistance(55.5786, 51.9365),
    "ru": {
      "region": "Республика Татарстан, г. Нижнекамск (Промзона)",
      "target": "Нефтеперерабатывающий комплекс «ТАНЕКО» (АО «ТАНЕКО», ПАО «Татнефть») и Нижнекамская промзона",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 10 августа 2026 года Силы обороны Украины совершили массированный налет ударных БПЛА на нефтеперерабатывающий комплекс «ТАНЕКО» и объекты Нижнекамского промышленного узла в Татарстане. Предприятие мощностью переработки более 16 млн тонн нефти в год производит высокооктановое моторное топливо и авиационный керосин, питающие российскую военную группировку. Несмотря на интенсивную работу средств ПВО и подавление радиоэлектронными комплексами, группа дронов прорвалась к технологическим установкам НПЗ. В результате прилетов и падения детонировавших обломков на территории предприятия произошла серия взрывов и масштабный пожар. Также фиксировались повреждения инфраструктуры на соседнем нефтехимическом гиганте «Нижнекамскнефтехим». Из-за угрозы атаки в регионе вводился особый режим безопасности, а аэропорты Казани и Бегишево приостанавливали прием рейсов.",
      "source": "Генштаб ВСУ, ГУР МО, раис Татарстана Минниханов, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Республіка Татарстан, м. Нижньокамськ (Промзона)",
      "target": "Нафтопереробний комплекс «ТАНЕКО» (АТ «ТАНЕКО», ПАТ «Татнефть») та Нижньокамська промзона",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 10 серпня 2026 року Сили оборони України здійснили масований наліт ударних БПЛА на нафтопереробний комплекс «ТАНЕКО» та об'єкти Нижньокамського промислового вузла в Татарстані. Підприємство потужністю переробки понад 16 млн тонн нафти на рік виробляє високооктанове моторне пальне та авіаційний гас, що живлять російське військове угруповання. Попри інтенсивну роботу засобів ППО та придушення радіоелектронними комплексами, група дронів прорвалася до технологічних установок НПЗ. У результаті влучань та падіння детонуючих уламків на території підприємства сталася серія вибухів і масштабне займання. Також фіксувалися пошкодження інфраструктури на сусідньому нафтохімічному гіганті «Нижньокамськнафтохім». Через загрозу атаки в регіоні вводився особливий режим безпеки, а аеропорти Казані та Бегішево призупиняли прийом рейсів.",
      "source": "Генштаб ЗСУ, ГУР МО, раїс Татарстану Мінніханов, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Republic of Tatarstan, Nizhnekamsk (Industrial District)",
      "target": "TANECO Oil Refinery Complex (JSC TANECO, PJSC Tatneft) and Industrial Hub",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 10, 2026, the Ukrainian Defense Forces conducted a drone raid targeting the TANECO oil refinery and adjacent petrochemical facilities in Nizhnekamsk, Tatarstan. With an annual refining capacity exceeding 16 million metric tons of crude oil, TANECO is a primary producer of high-octane motor fuels and aviation kerosene critical for supplying Russian military logistics. Despite anti-aircraft fire and electronic warfare defenses, several long-range strike UAVs breached the air defense perimeter and struck technological processing units inside the refinery. The impacts and falling debris triggered explosions and a severe fire across the plant's operational area, with minor damage reported at the neighboring Nizhnekamskneftekhim plant. The attack prompted emergency protocols across Tatarstan and temporarily halted operations at Kazan and Begishevo airports.",
      "source": "General Staff of AFU, GUR MO, Head of Tatarstan Minnikhanov, OSINT (Astra), Media"
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

// Remove existing 10.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '10.08.2026');
data.unshift(...newItems);

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log('Successfully updated data.js with 10 August 2026 strikes!');
