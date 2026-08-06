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
    "date": "05.08.2026",
    "lat": 54.7172,
    "lng": 55.8364,
    "distance": calcMinDistance(54.7172, 55.8364),
    "ru": {
      "region": "Республика Башкортостан, Уфа (Орджоникидзевский район)",
      "target": "Нефтеперерабатывающий завод «Башнефть-Новойл» (ПАО АНК «Башнефть»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 5 августа 2026 года украинские силы совершили атаку дальнобойных БПЛА по нефтеперерабатывающему заводу «Башнефть-Новойл» в Уфе на удалении свыше 1400 километров от линии фронта. Завод является одним из ключевых производителей топливных компонентов и масел в Волго-Уральском регионе, снабжающим в том числе военную технику. Несколько ударных дронов смогли пройти сквозь эшелонированный заслон ПВО и нанесли прямые удары по технологическому оборудованию. По данным Генштаба ВСУ и OSINT-источников, поражена комбинированная технологическая установка и установка каталитического риформинга Л-35-11/1000. На предприятии вспыхнул сильный пожар, охвативший промышленную площадку. Глава региона подтвердил атаку, заявив о сбитии части дронов и падении обломков.",
      "source": "Генштаб ВСУ, OSINT (Astra), ЗМІ, глава РБ Хабиров"
    },
    "uk": {
      "region": "Республіка Башкортостан, Уфа (Орджонікідзевський район)",
      "target": "Нафтопереробний завод «Башнефть-Новойл» (ПАТ АНК «Башнефть»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 5 серпня 2026 року українські сили здійснили атаку далекобійних БПЛА по нафтопереробному заводу «Башнефть-Новойл» в Уфі на відстані понад 1400 кілометрів від лінії фронту. Завод є одним із ключових виробників паливних компонентів та мастил у Волго-Уральському регіоні, що забезпечує у тому числі військову техніку. Кілька ударних дронів змогли пройти крізь ешелоновану заслону ППО і завдали прямих ударів по технологічному обладнанню. За даними Генштабу ЗСУ та OSINT-джерел, уражено комбіновану технологічну установку та установку каталітичного риформінгу Л-35-11/1000. На підприємстві спалахнула сильна пожежа, яка охопила промисловий майданчик. Глава регіону підтвердив атаку, заявивши про збиття частини дронів та падіння уламків.",
      "source": "Генштаб ЗСУ, OSINT (Astra), ЗМІ, глава РБ Хабіров"
    },
    "en": {
      "region": "Republic of Bashkortostan, Ufa (Ordzhonikidzevsky District)",
      "target": "Bashneft-Novoil Oil Refinery (Bashneft PJSC)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 5, 2026, Ukrainian deep-strike drones targeted the Bashneft-Novoil oil refinery in Ufa, located over 1,400 kilometers from the front line. The facility is a premier petroleum producer in the Volga-Ural region supplying high-octane fuel and lubricants vital for military supply chains. Multiple attack drones breached local air defenses and scored direct hits on processing units. According to the General Staff of the AFU and OSINT analysts, the strike damaged a combined processing unit and the L-35-11/1000 catalytic reforming unit, triggering a massive industrial fire. Regional authorities acknowledged the strike while claiming most incoming UAVs were intercepted.",
      "source": "General Staff of AFU, OSINT (Astra), Media, Head of Bashkortostan Khabirov"
    }
  },
  {
    "date": "05.08.2026",
    "lat": 54.5126,
    "lng": 37.1729,
    "distance": calcMinDistance(54.5126, 37.1729),
    "ru": {
      "region": "Тульская область, г. Алексин (промзона)",
      "target": "Распределительный логистический комплекс Wildberries «Алексин»",
      "category": "Логистический центр",
      "weapon": "Дрон",
      "details": "В ночь на 5 августа 2026 года Силы обороны Украины нанесли мощный удар дальнобойными беспилотниками по крупному логистическому хабу Wildberries в городе Алексин Тульской области. Площадь этого складского терминала составляет около 300 тысяч квадратных метров, и он выполняет стратегическую роль в снабжении центральных регионов РФ товарно-материальными ценностями, включая армейское снаряжение и двойные технологии. В результате ударов на территории хаба вспыхнул масштабный пожар, сопровождавшийся сериями повторных детонаций на складах. По данным тульского губернатора и местных экстренных служб, пострадал как минимум один человек, а прием и отгрузка товаров на комплексе были полностью заморожены из-за масштабных повреждений конструкций.",
      "source": "OSINT (Astra), ЗМІ, губернатор Миляев, пресс-служба Wildberries"
    },
    "uk": {
      "region": "Тульська область, м. Алексін (промзона)",
      "target": "Розподільчий логістичний комплекс Wildberries «Алексін»",
      "category": "Логістичний центр",
      "weapon": "Дрон",
      "details": "У ніч проти 5 серпня 2026 року Сили оборони України завдали потужного удару далекобійними безпілотниками по великому логістичному хабу Wildberries у місті Алексін Тульської області. Площа цього складського термінала становить близько 300 тисяч квадратних метрів, і він виконує стратегічну роль у постачанні центральних регіонів РФ товарно-матеріальними цінностями, включно з армійським спорядженням та подвійними технологіями. У результаті ударів на території хабу спалахнула масштабна пожежа, що супроводжувалася серіями повторних детонацій на складах. За даними тульського губернатора та місцевих екстрених служб, постраждала щонайменше одна особа, а прийом та відвантаження товарів на комплексі були повністю заморожені через масштабні пошкодження конструкцій.",
      "source": "OSINT (Astra), ЗМІ, губернатор Мільяєв, прес-служба Wildberries"
    },
    "en": {
      "region": "Tula Oblast, Aleksin (Industrial Zone)",
      "target": "Wildberries Distribution & Logistics Hub Aleksin",
      "category": "Logistics Hub",
      "weapon": "Drone",
      "details": "On the night of August 5, 2026, Ukrainian long-range strike drones bombarded the massive Wildberries logistics distribution center in Aleksin, Tula Oblast. Spanning nearly 300,000 square meters, the hub serves as a critical strategic node for regional civilian and military dual-use logistics. Direct drone impacts sparked an extensive fire across warehouse blocks, accompanied by secondary explosions. Regional Governor Milyaev confirmed drone hits and reported at least one injury. Operations at the facility were completely halted due to structural destruction, delivering a noticeable blow to regional commercial and defense distribution pipelines.",
      "source": "OSINT (Astra), Media, Governor Milyaev, Wildberries PR"
    }
  }
];

console.log(JSON.stringify(newItems, null, 2));

// Update data.js
const content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
let data = new Function('return ' + dataStr)();

// Remove existing 05.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '05.08.2026');
data.unshift(...newItems);

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log('Successfully updated data.js with 5 August 2026 strikes!');
