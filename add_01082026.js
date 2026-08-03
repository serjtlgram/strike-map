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
    "date": "01.08.2026",
    "lat": 54.8430,
    "lng": 56.0790,
    "distance": null,
    "ru": {
      "region": "Республика Башкортостан, Уфа (мкр-н Черниковка)",
      "target": "Нефтеперерабатывающие заводы «Башнефть» («Башнефть-УНПЗ», «Башнефть-Новойл», «Башнефть-Уфанефтехим»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "1 августа 2026 года дальнобойные ударные дроны СБУ провели успешную операцию против крупного нефтеперерабатывающего кластера «Башнефти» в Уфе. Под удар попали производственные площадки заводов «Башнефть-УНПЗ», «Башнефть-Новойл» и «Башнефть-Уфанефтехим» в северной промзоне города. Несколько беспилотников прорвали местную противовоздушную оборону и поразили технологическое оборудование. На территории промзоны зафиксировали густые столбы черного дыма и пожары, что подтверждают снимки очевидцев и данные ASTRA. Глава региона Радий Хабиров признал атаку БПЛА, списав задымление на падение обломков сбитого дрона. В местном аэропорту Уфы временно вводили план «Ковер» и ограничивали вылеты. Совокупная мощность этого нефтеперерабатывающего узла превышает 23 млн тонн нефти в год, и он снабжает дизелем и авиакеросином войска РФ. Атака на дистанции свыше 1400 км от линии фронта стала одной из самых глубоких операций в тылу противника.",
      "source": "СБУ, Генштаб ВСУ, OSINT (Astra), глава Башкортостана Хабиров, СМИ"
    },
    "uk": {
      "region": "Республіка Башкортостан, Уфа (мкр-н Черніковка)",
      "target": "Нафтопереробні заводи «Башнєфть» («Башнєфть-УНПЗ», «Башнєфть-Новойл», «Башнєфть-Уфанафтохім»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "1 серпня 2026 року далекобійні ударні дрони СБУ провели успішну операцію проти великого нафтопереробного кластера «Башнєфті» в Уфі. Під удар потрапили виробничі майданчики заводів «Башнєфть-УНПЗ», «Башнєфть-Новойл» та «Башнєфть-Уфанафтохім» у північній промзоні міста. Кілька безпілотників змогли прорвати місцеву протиповітряну оборону та влучили в технологічне обладнання. На території промзони зафіксували густі стовпи чорного диму та пожежі, що підтверджують фото очевидців і моніторинг ASTRA. Голова регіону Радій Хабіров визнав атаку БПЛА, списавши задимлення на падіння уламків збитого дрона. Для безпеки в місцевому аеропорту Уфи тимчасово вводили режим обмеження польотів. Сукупна потужність цього нафтопереробного вузла перевищує 23 млн тонн нафти на рік, і він відіграє критичну роль у постачанні пального військам РФ. Атака на відстані понад 1400 км від лінії фронту стала однією з найглибших операцій у тилу противника.",
      "source": "СБУ, Генштаб ЗСУ, OSINT (Astra), голова Башкортостану Хабіров, ЗМІ"
    },
    "en": {
      "region": "Republic of Bashkortostan, Ufa (Chernikovka district)",
      "target": "Bashneft Oil Refinery Complex (UNPZ, Novoil, and Ufaneftekhim)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On August 1, 2026, long-range strike drones operated by the SBU launched a successful precision attack on the Bashneft oil refining cluster in Ufa. Strikes targeted production facilities across the UNPZ, Novoil, and Ufaneftekhim refineries in the northern industrial district. Multiple kamikaze UAVs breached local air defenses and impacted primary refining equipment. Thick plumes of black smoke and several fires over the site were confirmed by eyewitness photos and ASTRA monitoring reports. Regional Governor Radik Khabirov acknowledged the drone raid but attributed the heavy smoke to falling debris from intercepted UAVs. Air traffic authorities briefly suspended flights at Ufa International Airport for safety reasons. With a total capacity exceeding 23 million metric tons of crude oil per year, this refinery complex supplies essential fuel to Russian military forces. Striking over 1,400 km from the Ukrainian border, the operation marked one of the deepest raids into Russian territory.",
      "source": "SBU, AFU General Staff, OSINT (Astra), Head of Bashkortostan Khabirov, Media"
    }
  },
  {
    "date": "01.08.2026",
    "lat": 45.5081,
    "lng": 32.7003,
    "distance": null,
    "ru": {
      "region": "АР Крым (временно оккупированная), Черноморский район (пгт Черноморское)",
      "target": "Склад и база подготовки морских беспилотных катеров (БЭК)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "1 августа 2026 года Силы обороны Украины совместно с ВМС нанесли высокоточный удар по военной базе в пгт Черноморское в оккупированном Крыму. Основной целью атаки стал защищенный складской комплекс, где противник размещал и обслуживал безэкипажные катера. Несколько ударных БПЛА успешно поразили ангары с техникой и цеха предрейсовой подготовки морских дронов. На прибрежном объекте вспыхнул сильный пожар, сопровождавшийся детонацией хранившихся боеприпасов и топливных емкостей. Местные жители и крымские Telegram-каналы сообщали о серии мощных взрывов со стороны бухты Узкая. Эта база в Черноморском активно использовалась ВМФ РФ для запуска катеров-камикадзе и патрулирования прибрежной зоны. Удар на расстоянии около 140 км от линии фронта существенно снизил угрозу применения морских БПЛА противником в западной части Черного моря.",
      "source": "Генштаб ВСУ, ВМС ВСУ, OSINT (Astra), крымские паблики, СМИ"
    },
    "uk": {
      "region": "АР Крим (тимчасово окупована), Чорноморський район (смт Чорноморське)",
      "target": "Склад та база підготовки морських безпілотних катерів (БЕК)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "1 серпня 2026 року Сили оборони України спільно з ВМС завдали високоточного удару по військовій базі в смт Чорноморське в окупованому Криму. Основною ціллю атаки став захищений складський комплекс, де противник розміщував та обслуговував безекіпажні катери. Кілька ударних БПЛА успішно уразили ангари з технікою та цехи передрейсової підготовки морських дронів. На прибережному об'єкті спалахнула сильна пожежа, що супроводжувалася детонацією боєприпасів та паливних ємностей. Місцеві жителі та кримські Telegram-канали повідомляли про серію потужних вибухів з боку бухти Вузька. Ця база в Чорноморському активно використовувалася ВМФ РФ для запуску катерів-камікадзе та патрулювання прибережної зони. Удар на відстані близько 140 км від лінії фронту суттєво знизив загрозу застосування морських БПЛА противником у західній частині Чорного моря.",
      "source": "Генштаб ЗСУ, ВМС ЗСУ, OSINT (Astra), кримські пабліки, ЗМІ"
    },
    "en": {
      "region": "Autonomous Republic of Crimea (occupied), Chornomorske",
      "target": "Naval Drone Base and Storage Facility (Chornomorske)",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On August 1, 2026, the Ukrainian Defense Forces and Ukrainian Navy conducted a joint precision drone strike on a military installation in occupied Chornomorske, Crimea. The raid targeted a secured depot complex used by Russian forces to store and service uncrewed surface vessels (USVs). Multiple strike UAVs hit assembly hangars and equipment preparation bays inside the coastal site. Impacting drones ignited a major fire accompanied by secondary explosions of stored munitions and fuel cells. Local residents and Telegram channels reported heavy blasts originating from the Narrow Bay area throughout the night. Russian naval forces utilized the Chornomorske base to launch kamikaze boats and conduct coastal patrols. Located roughly 140 km from the frontline, the strike significantly disrupted Russia's naval drone operations in the western Black Sea.",
      "source": "AFU General Staff, Ukrainian Navy, OSINT (Astra), Crimean media"
    }
  },
  {
    "date": "01.08.2026",
    "lat": 45.1250,
    "lng": 36.8500,
    "distance": null,
    "ru": {
      "region": "Краснодарский край, Темрюкский район",
      "target": "Позиция радиолокационных станций ПВО («Подлет-К1» и «Каста-2Е2»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "1 августа 2026 года спецподразделения СБУ провели успешную воздушно-ударную операцию по уничтожению средств ПВО противника в Краснодарском крае. В ходе атаки дальнобойных дронов были поражены четыре радиолокационные станции: три комплекса «Подлет-К1» и одна РЛС «Каста-2Е2». Высокоточные прилеты вызвали уничтожение антенных постов и машинных залов радиолокационных комплексов. Данные станции обеспечивали обнаружение маловысотных целей и выдавали целеуказание для зенитных ракетных систем С-300 и С-400 на таманском направлении. Потеря этих радаров образовала брешь в системе радиолокационного контроля над Керченским проливом и югом России. Военные обозреватели отметили, что выведение из строя ценных РЛС существенно облегчит последующие операции украинской авиации и беспилотников. Удар на расстоянии около 240 км от линии фронта нанес ощутимый урон противовоздушной обороне региона.",
      "source": "СБУ, Генштаб ВСУ, OSINT (Astra), российские паблики, СМИ"
    },
    "uk": {
      "region": "Краснодарський край, Темрюцький район",
      "target": "Позиція радіолокаційних станцій ППО («Подлет-К1» та «Каста-2Е2»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "1 серпня 2026 року спецпідрозділи СБУ провели успішну повітряно-ударну операцію з знищення засобів ППО противника у Краснодарському краї. Під час атаки далекобійних дронів було уражено чотири радіолокаційні станції: три комплекси «Подлет-К1» та одну РЛС «Каста-2Е2». Високоточні прильоти спричинили знищення антенних постів і машинних залів радіолокаційних комплексів. Ці станції забезпечували виявлення маловисотних цілей та видавали цілевказування для зенітних ракетних систем С-300 і С-400 на таманському напрямку. Втрата цих радарів утворила прогалину в системі радіолокаційного контролю над Керченською протокою та півднем Росії. Військові оглядачі зазначили, що виведення з ладу цінних РЛС суттєво полегшить подальші операції української авіації та безпілотників. Удар на відстані близько 240 км від лінії фронту завдав відчутної шкоди протиповітряній обороні регіону.",
      "source": "СБУ, Генштаб ЗСУ, OSINT (Astra), російські пабліки, ЗМІ"
    },
    "en": {
      "region": "Krasnodar Krai, Temryuksky District",
      "target": "Air Defense Radar Station Positions (Podlet-K1 and Kasta-2E2)",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On August 1, 2026, specialized SBU units executed a long-range drone strike targetting Russian air defense radar systems in Krasnodar Krai. Ukrainian attack UAVs hit four key radar stations: three low-altitude 'Podlet-K1' units and one 'Kasta-2E2' radar site. Direct impacts destroyed antenna arrays and operational command vehicles across the target positions. These radar systems played a critical role in detecting low-flying aerial targets and providing target acquisition for S-300 and S-400 missile batteries around the Taman Peninsula. The destruction of these radar units created a blind spot in Russian early-warning coverage over the Kerch Strait and southern Krasnodar Krai. Military analysts noted that neutralizing these valuable sensors significantly enhances the effectiveness of future Ukrainian drone and missile operations. Positioned 240 km from the border, the raid inflicted severe damage on regional air defense networks.",
      "source": "SBU, AFU General Staff, OSINT (Astra), Russian media"
    }
  }
];

console.log('--- VALIDATING ITEMS FOR 01.08.2026 ---');
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
