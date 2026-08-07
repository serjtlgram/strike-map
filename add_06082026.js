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
    "date": "06.08.2026",
    "lat": 57.5683,
    "lng": 39.8653,
    "distance": calcMinDistance(57.5683, 39.8653),
    "ru": {
      "region": "Ярославская область, г. Ярославль (Красноперекопский район)",
      "target": "Ново-Ярославский нефтеперерабатывающий завод (ПАО «Славнефть-ЯНОС»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 6 августа 2026 года Силы обороны Украины провели массированную операцию с применением дальнобойных БПЛА по нефтеперерабатывающему заводу «Славнефть-ЯНОС» в Ярославле, находящемуся более чем в 700 километрах от украинской границы. Данное предприятие входит в пятерку крупнейших НПЗ России и играет критическую роль в снабжении центральных регионов и подразделений ВС РФ моторным топливом и авиакеросином. Несмотря на заявления местных властей о работе ПВО и сбитии десятков дронов, несколько беспилотников пробились к технологическим объектам. По данным Генштаба ВСУ и OSINT-канала Astra, зафиксированы прилеты по установкам первичной переработка нефти ЭЛОУ-1 и АВТ-3, а также возгорание четырех резервуаров с сырьем. На заводе вспыхнул масштабный пожар с несколькими очагами. Из-за инцидента власти временно перекрывали выезд из города в сторону Москвы, 4 человека получили ранения.",
      "source": "Генштаб ВСУ, СБУ, OSINT (Astra), ЗМІ, губернатор Евраев"
    },
    "uk": {
      "region": "Ярославська область, м. Ярославль (Красноперекопський район)",
      "target": "Ново-Ярославський нафтопереробний завод (ПАТ «Славнефть-ЯНОС»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 6 серпня 2026 року Сили оборони України провели масовану операцію із застосуванням далекобійних БПЛА по нафтопереробному заводу «Славнефть-ЯНОС» у Ярославлі, що розташований на відстані понад 700 кілометрів від українського кордону. Це підприємство входить до п'ятірки найбільших НПЗ Росії та відіграє критичну роль у забезпеченні центральних регіонів і підрозділів ЗС РФ моторним пальним та авіагасом. Попри заяви місцевої влади про роботу ППО та збиття десятків дронів, кілька безпілотників пробилися до технологічних об'єктів. За даними Генштабу ЗСУ та OSINT-каналу Astra, зафіксовано влучання по установках первинної переробки нафти ЕЛОУ-1 та АВТ-3, а також займання чотирьох резервуарів із сировиною. На заводі спалахнула масштабна пожежа з кількома осередками. Через інцидент влада тимчасово перекривала виїзд із міста в бік Москви, 4 особи дістали поранення.",
      "source": "Генштаб ЗСУ, СБУ, OSINT (Astra), ЗМІ, губернатор Євраєв"
    },
    "en": {
      "region": "Yaroslavl Oblast, Yaroslavl (Krasnoperekopsky District)",
      "target": "Novo-Yaroslavl Oil Refinery (Slavneft-YANOS PJSC)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 6, 2026, the Ukrainian Defense Forces launched a massive long-range drone strike against the Slavneft-YANOS oil refinery in Yaroslavl, over 700 kilometers from the Ukrainian border. Ranking among Russia's top five petroleum refineries, the facility is vital for supplying military units and central Russian regions with diesel, gasoline, and jet fuel. Despite local authority claims that air defenses intercepted dozens of UAVs, several strike drones breached the defense perimeter and hit critical infrastructure. According to the General Staff of the AFU and OSINT channel Astra, direct impacts targeted the ELOU-1 and AVT-3 primary crude distillation units and ignited four raw oil storage tanks. A large-scale industrial fire erupted across multiple sectors. Regional authorities temporarily shut down main highway exits toward Moscow, and 4 individuals were reported injured.",
      "source": "General Staff of AFU, SBU, OSINT (Astra), Media, Governor Evraev"
    }
  },
  {
    "date": "06.08.2026",
    "lat": 56.8183,
    "lng": 35.8956,
    "distance": calcMinDistance(56.8183, 35.8956),
    "ru": {
      "region": "Тверская область, Калининский муниципальный округ (промзона близ Твери)",
      "target": "Распределительный логистический комплекс Wildberries",
      "category": "Логистический центр",
      "weapon": "Дрон",
      "details": "В ночь на 6 августа 2026 года в рамках серии ударов по тыловой инфраструктуре РФ украинские беспилотники атаковали логистический комплекс Wildberries в Калининском округе Тверской области. Этот крупный распределительный склад расположен вблизи Твери и активно задействован в логистических цепочках по доставке товаров двойного назначения, армейской экипировки и технических средств. В результате налета и воздействия средств ПВО на территории объекта зафиксированы прилеты и падение обломков БПЛА. По данным OSINT-исследователей и признанию региональных властей, повреждения получил главный фасад складского терминала, а также вспомогательные хозяйственные постройки. На месте возник локальный пожар, который вывел из строя часть сортировочных линий. Эвакуация персонала прошла оперативно, обошлось без погибших и пострадавших, однако приемка грузов на терминале была приостановлена.",
      "source": "OSINT (Astra), ЗМІ, врио губернатора Королев, пресс-служба Wildberries"
    },
    "uk": {
      "region": "Тверська область, Калінінський муніципальний округ (промзона поблизу Твері)",
      "target": "Розподільчий логістичний комплекс Wildberries",
      "category": "Логістичний центр",
      "weapon": "Дрон",
      "details": "У ніч проти 6 серпня 2026 року в рамках серії ударів по тиловій інфраструктурі РФ українські безпілотники атакували логістичний комплекс Wildberries у Калінінському окрузі Тверської області. Цей великий розподільчий склад розташований поблизу Твері та активно задіяний у логістичних ланцюжках із доставки товарів подвійного призначення, армійського спорядження та технічних засобів. У результаті нальоту та впливу засобів ППО на території об'єкта зафіксовано влучання та падіння уламків БПЛА. За даними OSINT-дослідників та визнанням регіональної влади, пошкоджень зазнав головний фасад складського термінала, а також допоміжні господарчі споруди. На місці виникла локальна пожежа, яка вивела з ладу частину сортувальних ліній. Евакуація персоналу пройшла оперативно, обійшлося без загиблих і постраждалих, однак прийом вантажів на терміналі було призупинено.",
      "source": "OSINT (Astra), ЗМІ, в.о. губернатора Корольов, прес-служба Wildberries"
    },
    "en": {
      "region": "Tver Oblast, Kalininsky District (Industrial Zone near Tver)",
      "target": "Wildberries Logistics & Distribution Center",
      "category": "Logistics Hub",
      "weapon": "Drone",
      "details": "On the night of August 6, 2026, Ukrainian strike drones hit the Wildberries logistics distribution hub in the Kalininsky District of Tver Oblast near Tver. This key regional distribution complex plays a noticeable role in supply chain logistics, including dual-use gear and tactical supplies bound for military logistics routes. During the night attack, multiple drones reached the facility, resulting in direct hits and falling debris from air defense engagements. According to OSINT reports and statements by regional officials, the strike inflicted structural damage on the main warehouse facade and adjacent utility buildings. A localized fire broke out, disabling portion of the automated sorting lines. Facility personnel were evacuated without reported casualties, but receiving and shipping operations at the hub were temporarily suspended due to the damage.",
      "source": "OSINT (Astra), Media, Acting Governor Korolev, Wildberries PR"
    }
  }
];

// Check details lengths
newItems.forEach((item, idx) => {
  ['ru', 'uk', 'en'].forEach(lang => {
    const len = item[lang].details.length;
    console.log(`Item ${idx} (${lang}) details length: ${len} chars`);
    if (len < 600 || len > 1000) {
      console.warn(`WARNING: Item ${idx} (${lang}) length ${len} is outside 600-1000 range!`);
    }
  });
});

// Update data.js
const content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
let data = new Function('return ' + dataStr)();

// Remove existing 06.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '06.08.2026');
data.unshift(...newItems);

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log('Successfully updated data.js with 6 August 2026 strikes!');
