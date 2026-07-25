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

const item = {
  "date": "24.07.2026",
  "lat": 44.9521,
  "lng": 34.1024,
  "distance": calcMinDistance(44.9521, 34.1024),
  "ru": {
    "region": "Крым, Симферополь",
    "target": "Сортировочный центр Wildberries (Симферополь)",
    "category": "Логистика",
    "weapon": "Дрон",
    "details": "В ночь на 24 июля 2026 года дальнобойные украинские беспилотники атаковали крупный логистический и сортировочный центр компании Wildberries в Симферополе. В результате прицельного удара БПЛА и последующей детонации боевой части на территории комплекса вспыхнул сильный пожар. Огонь быстро охватил складские помещения и заблокировал работу нескольких погрузочных терминалов. Пресс-служба компании подтвердила факт воздушной атаки и экстренную эвакуацию персонала складского комплекса в соответствии с протоколами безопасности. Данный распределительный узел в Симферополе выполняет ключевую роль в обработке логистических потоков, складировании и снабжении армейских подразделений товарами двойного назначения и обмундированием. В результате налета складским мощностям был нанесен значительный ущерб, а операционная деятельность хаба временно приостановлена.",
    "source": "OSINT (Крымский ветер), пресс-служба Wildberries, СМИ"
  },
  "uk": {
    "region": "Крим, Сімферополь",
    "target": "Сортувальний центр Wildberries (Сімферополь)",
    "category": "Логістика",
    "weapon": "Дрон",
    "details": "У ніч проти 24 липня 2026 року далекобійні українські безпілотники атакували великий логістичний та сортувальний центр компанії Wildberries у Симферополі. Внаслідок прицільного удару БПЛА та подальшої детонації бойової частини на території комплексу спалахнула сильна пожежа. Вогонь швидко охопив складські приміщення та заблокував роботу кількох навантажувальних терміналів. Прес-служба компанії підтвердила факт повітряної атаки та екстрену евакуацію персоналу складського комплексу відповідно до протоколів безпеки. Цей розподільчий вузол у Симферополі відіграє ключову роль в обробці логістичних потоків, складуванні та постачанні армійських підрозділів товарами подвійного призначення і обмундируванням. Внаслідок нальоту складським потужностям було завдано значних збитків.",
    "source": "OSINT (Кримський вітер), прес-служба Wildberries, ЗМІ"
  },
  "en": {
    "region": "Crimea, Simferopol",
    "target": "Wildberries Sorting Center (Simferopol)",
    "category": "Logistics",
    "weapon": "Drone",
    "details": "On the night of July 24, 2026, long-range Ukrainian strike drones targeted the major Wildberries logistics and sorting center in Simferopol, Crimea. Direct drone impacts and warhead detonations triggered a heavy fire inside the warehouse complex. Flames rapidly spread through storage sections, heavily damaging loading terminals and automated sorting lines. The corporate press service confirmed the aerial attack and stated that warehouse personnel were evacuated in compliance with emergency safety protocols. The Simferopol logistics hub functions as a vital distribution facility handling regional freight flows, military logistics, and dual-use supply chains across Crimea. Due to severe structural damage from the fire, operations at the facility were temporarily suspended pending repair work.",
    "source": "OSINT (Crimean Wind), Wildberries Press Office, Media"
  }
};

['ru', 'uk', 'en'].forEach(lang => {
    const text = item[lang].details;
    console.log(`[${lang}] ${text.length} chars`);
});

let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;\n?$/, '').trim();
let data = new Function('return ' + dataStr)();

let maxId = 0;
data.forEach(i => { if (i.id > maxId) maxId = i.id; });
item.id = maxId + 1;

data.unshift(item);

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Added Wildberries Simferopol (ID ${item.id}) to data.js`);
