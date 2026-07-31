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
    "lat": 45.3110,
    "lng": 33.6390,
    "distance": null,
    "ru": {
      "region": "АР Крым (временно оккупированная), Сакский район (с. Наумовка)",
      "target": "Склад боеприпасов ВС РФ (с. Наумовка, Крым)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 31 июля 2026 года Генеральный штаб ВСУ и подразделения ГУР МО официально подтвердили проведение успешной спецоперации по уничтожению крупного склада боеприпасов противника возле села Наумовка в Сакском районе оккупированного Крыма. Серия высокоточных ударов дальнобойных дронов-камикадзе привела к поражению складских площадок и временных хранилищ снарядов. На месте прилёта начался сильнейший пожар с продолжительной вторичной детонацией артиллерийских боеприпасов и ракет. Местные жители сообщали о серии мощных взрывов, которые ощущались на расстоянии нескольких десятков километров. Объект служил ключевым перевалочным пунктом снабжения боекомплектом группировки войск РФ в Херсонской и Запорожской областях. Удар на расстоянии 175 км от линии фронта существенно ослабил артиллерийский потенциал врага.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "АР Крим (тимчасово окупована), Сакський район (с. Наумовка)",
      "target": "Склад боєприпасів ЗС РФ (с. Наумовка, Крим)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 31 липня 2026 року Генеральний штаб ЗСУ та підрозділи ГУР МО офіційно підтвердили проведення успішної спецоперації зі знищення великого складу боєприпасів противника біля села Наумовка в Сакському районі окупованого Криму. Серія високоточних ударів далекобійних дронів-камікадзе призвела до ураження складських майданчиків і тимчасових сховищ снарядів. На місці прильоту сталася найсильніша пожежа з тривалою вторинною детонацією артилерійських боєприпасів і ракет. Місцеві жителі повідомляли про серію потужних вибухів, які відчувалися на відстані кількох десятків кілометрів. Об'єкт слугував ключовим перевалювальним пунктом забезпечення боєкомплектом угруповання військ РФ у Херсонській та Запорізькій областях. Удар на відстані 175 км від лінії фронту суттєво послабив артилерійський потенціал ворога.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Autonomous Republic of Crimea (occupied), Saksky District (Naumovka village)",
      "target": "Russian Ammunition Depot (Naumovka, Crimea)",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On the night of July 31, 2026, the AFU General Staff and GUR confirmed a joint long-range drone operation destroying a major Russian ammunition depot near Naumovka in occupied Crimea's Saksky District. Multiple precision strike UAVs hit storage sites and field ordnance bunkers across the military facility. The impact detonated stored artillery shells and rockets, initiating a massive fire and hours of secondary explosions. Local residents across the Saky region reported heavy shockwaves felt tens of kilometers away. The depot operated as a primary logistics staging area supplying artillery ammunition to Russian forces in the Kherson and Zaporizhzhia sectors. Positioned 175 km from the active frontline, the strike severely undermined Russian frontline artillery sustainment.",
      "source": "AFU General Staff, GUR, OSINT (Astra), Media"
    }
  },
  {
    "date": "31.07.2026",
    "lat": 55.5681,
    "lng": 51.9719,
    "distance": null,
    "ru": {
      "region": "Республика Татарстан, Нижнекамский район (г. Нижнекамск)",
      "target": "Нефтеперерабатывающий комплекс «ТАНЕКО» / «ТАИФ-НК»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Утром 31 июля 2026 года дальнобойные БПЛА Сил обороны Украины провели комбинированную атаку по крупным нефтеперерабатывающим мощностям в промзоне Нижнекамска. Несколько ударных дронов попытались пробиться к технологическим установкам заводов «ТАНЕКО» и «ТАИФ-НК». На территории промышленного кластера зафиксированы взрывы, работа систем ПВО и сильное задымление в районе нефтехимических резервуаров. Местные власти вводили план «Ковер» и эвакуировали персонал нескольких цехов, также временно закрывалось небесное пространство над регионом. Комплекс «ТАНЕКО» входит в пятерку крупнейших НПЗ России и задействован в производстве дизельного и авиационного топлива для нужд ВВС РФ. Удар на рекордной дистанции 1240 км от линии фронта продемонстрировал уязвимость нефтегазовых объектов Урало-Поволжья.",
      "source": "OSINT (Astra), ГУР МО, пресс-служба региона, СМИ"
    },
    "uk": {
      "region": "Республіка Татарстан, Нижньокамський район (м. Нижньокамськ)",
      "target": "Нафтопереробний комплекс «ТАНЕКО» / «ТАІФ-НК»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Уранці 31 липня 2026 року далекобійні БПЛА Сил оборони України провели комбіновану атаку по великих нафтопереробних потужностях у промзоні Нижньокамська. Кілька ударних дронів спробували пробитися до технологічних установок заводів «ТАНЕКО» та «ТАІФ-НК». На території промислового кластера зафіксовано вибухи, роботу систем ППО та сильне задимлення в районі нафтохімічних резервуарів. Місцева влада вводила план «Ковер» і евакуювала персонал кількох цехів, також тимчасово закривався повітряний простір над регіоном. Комплекс «ТАНЕКО» входить до п'ятірки найпотужніших НПЗ Росії та задіяний у виробництві дизельного й авіаційного пального для потреб ПКС РФ. Удар на рекорній відстані 1240 км від лінії фронту продемонстрував уразливість нафтогазових об'єктів Урало-Поволжя.",
      "source": "OSINT (Astra), ГУР МО, пресслужба регіону, ЗМІ"
    },
    "en": {
      "region": "Republic of Tatarstan, Nizhnekamsky District (Nizhnekamsk)",
      "target": "TANECO / TAIF-NK Refinery Complex (Nizhnekamsk)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the morning of July 31, 2026, long-range Ukrainian strike UAVs launched a coordinated raid against major refining complexes in the Nizhnekamsk industrial cluster. Attacking drones targeted processing units belonging to the TANECO and TAIF-NK oil refineries. Explosions, active air defense engagements, and heavy smoke were reported around petrochemical tank farms. Regional emergency services issued air raid alerts and evacuated factory personnel while airspace over Kazan and Nizhnekamsk was temporarily grounded. TANECO stands among Russia's top five oil refining facilities, producing diesel and jet fuel directly supporting Russian military aviation. Striking at a record distance of 1,240 km from the border, the operation exposed deep rear oil infrastructure to long-range threat.",
      "source": "OSINT (Astra), GUR, Regional Authorities, Media"
    }
  }
];

// Validate sentence count & character length
console.log('--- VALIDATING MISSING ITEMS ---');
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
console.log(`Successfully added ${items.length} missing items for date 31.07.2026 into data.js`);
