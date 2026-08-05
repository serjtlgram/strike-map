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
    "date": "04.08.2026",
    "lat": 55.1053,
    "lng": 37.5147,
    "distance": calcMinDistance(55.1053, 37.5147),
    "ru": {
      "region": "Московская область, г.о. Чехов (промзона Новоселки)",
      "target": "Логистический хаб Wildberries и промзона «Новоселки»",
      "category": "Логистический центр",
      "weapon": "Дрон",
      "details": "В ночь на 4 августа 2026 года Силы обороны Украины нанесли удар роем ударных БПЛА по ключевому логистическому комплексу Wildberries в промзоне «Новоселки» Подмосковья. Этот объект служит крупнейшим распределительным узлом для снабжения центрального региона РФ товарами двоякого назначения и армейской экипировкой. Несколько дронов преодолели систему ПВО и попали в складские помещения, вызвав масштабный пожар с густым задымлением. В результате атаки была также существенно повреждена соседняя электрическая подстанция и здание административного блока. По данным местных властей, 5 человек погибли и ещё не менее 6 получили ранения, а складские мощности хаба понесли серьезные разрушения.",
      "source": "OSINT (Astra, ВЧК-ОГПУ), ЗМІ, губернатор Воробьёв"
    },
    "uk": {
      "region": "Московська область, м.о. Чехов (промзона Новосьолки)",
      "target": "Логістичний хаб Wildberries та промзона «Новосьолки»",
      "category": "Логістичний центр",
      "weapon": "Дрон",
      "details": "У ніч проти 4 серпня 2026 року Сили оборони України завдали удару роєм ударних БПЛА по ключовому логістичному комплексу Wildberries у промзоні «Новосьолки» Підмосков'я. Цей об'єкт слугує найбільшим розподільчим вузлом для постачання центрального регіону РФ товарами подвійного призначення та армійською екіпіровкою. Кілька дронів подолали систему ППО та влучили у складські приміщення, спричинивши масштабну пожежу з густим задимленням. У результаті атаки було також суттєво пошкоджено сусідню електричну підстанцію та будівлю адміністративного блоку. За даними місцевої влади, 5 осіб загинули і ще щонайменше 6 дістали поранення, а складські потужності хабу зазнали серйозних руйнувань.",
      "source": "OSINT (Astra, ВЧК-ОГПУ), ЗМІ, губернатор Воробйов"
    },
    "en": {
      "region": "Moscow Oblast, Chekhov Urban District (Novoselki Industrial Zone)",
      "target": "Wildberries Logistics Hub & Novoselki Industrial Zone",
      "category": "Logistics Hub",
      "weapon": "Drone",
      "details": "On the night of August 4, 2026, Ukrainian Defense Forces launched a swarm drone strike against a major Wildberries logistics hub located in the Novoselki industrial zone of Moscow Oblast. The complex plays a key role in regional distribution and supply chains serving army equipment logistics. Several long-range drones bypassed regional air defenses, hitting warehouse facilities and starting a large-scale fire. The attack also damaged an adjacent electrical substation and an administrative building. Regional authorities confirmed 5 fatalities and at least 6 injuries, alongside severe destruction to warehouse storage infrastructure.",
      "source": "OSINT (Astra), Media, Governor Vorobyov"
    }
  },
  {
    "date": "04.08.2026",
    "lat": 59.6975,
    "lng": 30.8711,
    "distance": calcMinDistance(59.6975, 30.8711),
    "ru": {
      "region": "Ленинградская область, Тосненский район (пос. Красный Бор)",
      "target": "Распределительный логистический комплекс Wildberries «Красный Бор»",
      "category": "Логистический центр",
      "weapon": "Дрон",
      "details": "В ночь на 4 августа 2026 года дальнобойные украинские БПЛА атаковали крупный складской комплекс Wildberries площадью 154 тысячи квадратных метров в районе посёлка Красный Бор. Хаб является крупнейшим логистическим узлом на северо-западе России, через который проходят значительные объемы товаров двоякого назначения. В результате прямого попадания БПЛА на складах вспыхнул интенсивный пожар, охвативший несколько секций, а клубы черного дыма были видны за десятки километров. Власти Ленинградской области подтвердили факт атаки и повреждения складских сооружений, сообщив об одном раненом сотруднике. Нарушение работы хаба создало серьёзные сбои в цепочках поставок по всему региону.",
      "source": "OSINT (Astra, Крымский ветер), ЗМІ, губернатор Дрозденко"
    },
    "uk": {
      "region": "Ленінградська область, Тосненський район (селище Красний Бор)",
      "target": "Розподільчий логістичний комплекс Wildberries «Красний Бор»",
      "category": "Логістичний центр",
      "weapon": "Дрон",
      "details": "У ніч проти 4 серпня 2026 року далекобійні українські БПЛА атакували великий складський комплекс Wildberries площею 154 тисячі квадратних метрів у районі селища Красний Бор. Хаб є найбільшим логістичним вузлом на північному заході Росії, через який проходять значні обсяги товарів подвійного призначення. У результаті прямого влучання БПЛА на складах спалахнула інтенсивна пожежа, що охопила кілька секцій, а стовпи чорного диму було видно за десятки кілометрів. Влада Ленінградської області підтвердила факт атаки та пошкодження складських споруд, повідомивши про одного пораненого співробітника. Порушення роботи хабу створило серйозні збої у ланцюгах постачання по всьому регіону.",
      "source": "OSINT (Astra, Крымский ветер), ЗМІ, губернатор Дрозденко"
    },
    "en": {
      "region": "Leningrad Oblast, Tosnensky District (Krasny Bor)",
      "target": "Wildberries Distribution & Logistics Hub Krasny Bor",
      "category": "Logistics Hub",
      "weapon": "Drone",
      "details": "On the night of August 4, 2026, long-range Ukrainian drones targeted the 154,000-square-meter Wildberries warehouse complex near Krasny Bor in Leningrad Oblast. This hub serves as a critical strategic supply node in northwestern Russia handling heavy throughput of civilian and dual-use inventory. Direct drone strikes triggered a massive fire across multiple storage sectors, sending plumes of smoke into the sky visible from miles away. Regional Governor Drozdenko confirmed drone impacts and structural damage to the warehouses, noting one injury. The disruption severely destabilized commercial and military dual-use delivery chains in the St. Petersburg area.",
      "source": "OSINT (Astra), Media, Governor Drozdenko"
    }
  },
  {
    "date": "04.08.2026",
    "lat": 56.7867,
    "lng": 36.1158,
    "distance": calcMinDistance(56.7867, 36.1158),
    "ru": {
      "region": "Тверская область, Калининский район (пос. Эммаус)",
      "target": "Складской логистический терминал Wildberries в пос. Эммаус",
      "category": "Логистический центр",
      "weapon": "Дрон",
      "details": "В ходе массированного налёта в ночь на 4 августа 2026 года украинские ударные дроны поразили логистический складской терминал Wildberries в поселке Эммаус под Тверью. Объект расположен на трассе М-10 и активно используется для промежуточного хранения и перевалки коммерческих грузов и техники. В результате атаки БПЛА получил повреждения фасад и несущие стены складского корпуса, произошла локальная детонация и возгорание. Тверские областные службы подтвердили факт падения БПЛА на территории промзоны и повреждение складской инфраструктуры, заявляя об отсутствии жертв. Инцидент стал частью координационного удара по тыловым логистическим звеньям РФ.",
      "source": "OSINT (Astra), ЗМІ, пресс-служба правительства Тверской области"
    },
    "uk": {
      "region": "Тверська область, Калінінський район (селище Еммаус)",
      "target": "Складський логістичний термінал Wildberries у сел. Еммаус",
      "category": "Логістичний центр",
      "weapon": "Дрон",
      "details": "Під час масованого нальоту в ніч проти 4 серпня 2026 року українські ударні дрони уразили логістичний складський термінал Wildberries у селищі Еммаус під Твер'ю. Об'єкт розташований на трасі М-10 і активно використовується для проміжного зберігання та перевалки комерційних вантажів і техніки. У результаті атаки БПЛА зазнали пошкоджень фасад і несучі стіни складського корпусу, сталася локальна детонація та спалахнула пожежа. Тверські обласні служби підтвердили факт падіння БПЛА на території промзони та пошкодження складської інфраструктури, заявивши про відсутність жертв. Інцидент став частиною координованого удару по тилових логістичних ланках РФ.",
      "source": "OSINT (Astra), ЗМІ, прес-служба уряду Тверської області"
    },
    "en": {
      "region": "Tver Oblast, Kalininsky District (Emmaus)",
      "target": "Wildberries Logistics Warehouse Terminal Emmaus",
      "category": "Logistics Hub",
      "weapon": "Drone",
      "details": "During a massive overnight raid on August 4, 2026, Ukrainian attack drones hit the Wildberries logistical storage terminal in the village of Emmaus near Tver. Strategically situated along the M-10 highway, this hub functions as a vital transshipment point for regional freight and dual-use supply flows. The strike damaged the building façade and structural walls of the warehouse facility, igniting a localized fire. Tver regional authorities acknowledged drone impacts in the industrial sector and structural damage, stating no casualties occurred. The strike formed part of a synchronized effort targeting Russian rear logistical networks.",
      "source": "OSINT (Astra), Media, Tver Regional Administration"
    }
  }
];

console.log(JSON.stringify(newItems, null, 2));

// Update data.js
const content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
let data = new Function('return ' + dataStr)();

// Remove existing 04.08.2026 items if any, then insert
data = data.filter(item => item.date !== '04.08.2026');
data.unshift(...newItems);

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log('Successfully updated data.js with 4 August 2026 strikes!');
