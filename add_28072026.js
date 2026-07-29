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
    "date": "28.07.2026",
    "lat": 55.1481,
    "lng": 37.4727,
    "distance": null,
    "ru": {
      "region": "Московская область, Чехов (промзона ул. Чехова)",
      "target": "Завод металлоконструкций «Гидростальконструкция» / Чеховский регенераторный завод",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 28 июля 2026 года украинские ударные БПЛА совершили массированный налёт на промышленную инфраструктуру в городе Чехов Московской области. Один из беспилотников попал прямо в производственную трубу и технологический корпус завода «Гидростальконструкция» (вблизи Чеховского регенераторного завода). В результате взрыва произошёл сильный пожар на открытой площадке и в цехах, сопровождавшийся густым чёрным дымом. Предприятие специализируется на выпуске тяжёлых металлоконструкций и механического оборудования для гидротехнических сооружений, а также объектов энергетики и ВПК. Мэр Москвы Сергей Собянин и глава городского округа подтвердили прилёт дрона по производственному объекту. Атака на подмосковный промышленный узел на расстоянии свыше 460 км от линии фронта стала частью удара по инфраструктурному снабжению военной промышленности РФ.",
      "source": "OSINT (Astra, Exilenova+), Мэр Москвы, СМИ РФ, Генштаб ВСУ"
    },
    "uk": {
      "region": "Московська область, Чехов (промзона вул. Чехова)",
      "target": "Завод металоконструкцій «Гідростальконструкція» / Чеховський регенераторний завод",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 28 липня 2026 року українські ударні БПЛА здійснили масований наліт на промислову інфраструктуру в місті Чехов Московської області. Один із безпілотників улучив безпосередньо в виробничу трубу та технологічний корпус заводу «Гідростальконструкція» (поруч із Чеховським регенераторним заводом). Унаслідок вибуху спалахнула потужна пожежа на відкритому майданчику та в цехах, що супроводжувалася густим чорним димом. Підприємство спеціалізується на виготовленні важких металоконструкцій і механічного обладнання для гідротехнічних споруд, енергетики та об'єктів ВПК. Мер Москви Сергій Собянін та голова міського округу підтвердили влучання дрона по промисловому об'єкту. Атака на підмосковний промисловий вузол на відстані понад 460 км від лінії фронту стала частиною удару по інфраструктурному забезпеченню військової промисловості РФ.",
      "source": "OSINT (Astra, Exilenova+), Мер Москви, ЗМІ РФ, Генштаб ЗСУ"
    },
    "en": {
      "region": "Moscow Oblast, Chekhov (Chekhov St. industrial zone)",
      "target": "Gidrostalkonstruktsiya Heavy Metal Structures & Equipment Plant (Chekhov)",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On the night of July 28, 2026, Ukrainian long-range strike UAVs targeted industrial facilities in Chekhov, Moscow Oblast. One of the drones hit a production stack and manufacturing building at the Gidrostalkonstruktsiya plant, located adjacent to the Chekhov Regeneration Plant. The impact triggered a heavy fire across open storage areas and factory workshops, sending dense black smoke into the air. The enterprise manufactures critical heavy steel structures and engineering equipment for hydro-technical, energy, and military infrastructure projects. Moscow Mayor Sergei Sobyanin and local municipal authorities confirmed the direct drone strike on the industrial site. Located over 460 km from the Ukrainian border, the raid underscores Ukraine's capability to hit defense-adjacent manufacturing hubs deep in the Russian rear.",
      "source": "OSINT (Astra, Exilenova+), Moscow Mayor, Russian media, AFU General Staff"
    }
  },
  {
    "date": "28.07.2026",
    "lat": 55.3789,
    "lng": 37.5794,
    "distance": null,
    "ru": {
      "region": "Московская область, Подольский городской округ (д. Коледино)",
      "target": "Логистический комплекс 3PL / Wildberries (индустриальный парк «Коледино»)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "28 июля 2026 года в ходе масштабного ночного налёта БПЛА на Московскую область под удар попал крупнейший логистический хаб в индустриальном парке «Коледино» Подольского городского округа. Беспилотники поразили складские терминалы и 3PL-комплексы, обслуживающие маркетплейс Wildberries и смежные логистические сети. В результате падения дронов и их обломков на территории промзоны вспыхнули масштабные пожары, повреждения получили фасадные конструкции и складские секции. Логистический центр в Коледино является одним из крупнейших распределительных узлов Восточной Европы и активно задействован в снабжении столичного региона и тыловых военных поставок. Мониторинговые OSINT-каналы и местные службы зафиксировали взрывы и колонны дыма над объектом. Удар на расстоянии 450 км от линии фронта временно нарушил работу грузовых распределительных терминалов под Москвой.",
      "source": "OSINT (Astra), Мэр Москвы, Wildberries, СМИ РФ"
    },
    "uk": {
      "region": "Московська область, Подольський міський округ (с. Коледіно)",
      "target": "Логістичний комплекс 3PL / Wildberries (індустріальний парк «Коледіно»)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "28 липня 2026 року під час масштабного нічного нальоту БПЛА на Московську область під удар потрапив найбільший логістичний хаб в індустріальному парку «Коледіно» Подольського міського округу. Безпілотники уразили складські термінали та 3PL-комплекси, які обслуговують маркетплейс Wildberries і суміжні логістичні мережі. Унаслідок падіння дронів та їхніх уламків на території промзони спалахнули масштабні пожежі, пошкоджень зазнали фасадні конструкції й складські секції. Логістичний центр у Коледіно є одним із найбільших розподільчих вузлів Східної Європи і активно задіяний у забезпеченні столичного регіону та тилових військових поставок. Моніторингові OSINT-канали та місцеві служби зафіксували вибухи й стовпи диму над об'єктом. Удар на відстані 450 км від лінії фронту тимчасово порушив роботу вантажних розподільчих терміналів під Москвою.",
      "source": "OSINT (Astra), Мер Москви, Wildberries, ЗМІ РФ"
    },
    "en": {
      "region": "Moscow Oblast, Podolsk Urban District (Koledino village)",
      "target": "Koledino Logistics & Warehouse Complex (Wildberries / 3PL Hub)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On July 28, 2026, as part of a massive overnight UAV raid on the Moscow region, Ukrainian long-range drones struck the Koledino industrial and logistics park in Podolsk district. The strike hit major 3PL warehousing facilities and distribution terminals that serve the e-commerce giant Wildberries as well as secondary logistics channels. Direct drone impacts and falling debris sparked fires across the industrial zone, resulting in structural damage to warehouse facades and storage bays. The Koledino complex is one of the largest distribution hubs in Eastern Europe, playing a critical role in consumer supply as well as dual-use military logistics. OSINT observers and regional channels documented multiple detonations and thick smoke rising from the logistics center. Striking over 450 km from the front line, the operation disrupted regional supply nodes serving the Moscow area.",
      "source": "OSINT (Astra), Moscow Mayor, Wildberries, Russian media"
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
items.forEach((item, idx) => {
  maxId++;
  item.id = maxId;
  data.unshift(item);
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully added ${items.length} items for date 28.07.2026 into data.js`);
