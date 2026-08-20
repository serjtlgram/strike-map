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
    "date": "19.08.2026",
    "lat": 54.8872,
    "lng": 56.1264,
    "distance": calcMinDistance(54.8872, 56.1264),
    "ru": {
      "region": "Республика Башкортостан, г. Уфа",
      "target": "НПЗ «Башнефть-УНПЗ» (ПАО АНК «Башнефть»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "19 августа 2026 года дальнобойные ударные дроны Сил обороны Украины атаковали производственные мощности крупнейшего нефтеперерабатывающего завода «Башнефть-УНПЗ» в промышленной зоне Уфы (Республика Башкортостан) на рекордной дистанции свыше 1360 км от границы. В налете участвовали не менее 6 ударных БПЛА самолетного типа. В результате прямого попадания дрона в технологическую установку первичной переработки нефти ЭЛОУ-АВТ-6 вспыхнул пожар, оказались повреждены коммуникационные эстакады и трубопроводы. Мощность переработки предприятия превышает 7,5 млн тонн нефти в год, завод является ключевым поставщиком бензинов, дизельного топлива стандарта Евро-5 и авиакеросина для нужд российской армии. Из-за атаки в уфимском аэропорту вводился план «Ковер» с задержкой рейсов. Поражение установки нарушило технологический цикл выпуска светлых нефтепродуктов.",
      "source": "Глава Республики Башкортостан, OSINT (Astra, Exilenova+), СМИ"
    },
    "uk": {
      "region": "Республіка Башкортостан, м. Уфа",
      "target": "НПЗ «Башнєфть-УНПЗ» (ПАТ АНК «Башнєфть»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "19 серпня 2026 року далекобійні ударні дрони Сил оборони України атакували виробничі потужності великого нафтопереробного заводу «Башнєфть-УНПЗ» у промисловій зоні Уфи (Республіка Башкортостан) на рекордній відстані понад 1360 км від кордону. У повітряному нальоті брали участь щонайменше 6 ударних БпЛА літакового типу. Унаслідок прямого влучання дрона в технологічну установку первинної переробки нафти ЕЛОУ-АВТ-6 спалахнула пожежа, зазнали пошкоджень технологічні естакади та магістральні трубопроводи. Потужність переробки заводу перевищує 7,5 млн тонн нафти на рік, підприємство виступає ключовим постачальником бензинів, дизельного пального стандарту Євро-5 та авіагасу для ЗС РФ. Через атаку в аеропорту Уфи вводили план «Килим» із затримкою рейсів. Ураження установки порушило виробничий цикл випуску пального.",
      "source": "Глава Республіки Башкортостан, OSINT (Astra, Exilenova+), ЗМІ"
    },
    "en": {
      "region": "Republic of Bashkortostan, Ufa",
      "target": "Bashneft-UNPZ Oil Refinery (PJSC ANK Bashneft)",
      "category": "Refinery",
      "weapon": "Drone",
      "details": "On August 19, 2026, long-range strike drones of the Ukrainian Defense Forces struck the production facilities of the major Bashneft-UNPZ oil refinery located in the industrial district of Ufa, Republic of Bashkortostan, over 1360 km from the border. The operation involved at least six fixed-wing strike UAVs penetrating deep into Russian airspace. A direct drone strike hit the ELOU-AVT-6 crude distillation unit, triggering an intensive fire and damaging industrial pipe bridges and fuel transfer lines. The refinery boasts an annual processing capacity exceeding 7.5 million tons of crude, serving as a primary regional supplier of Euro-5 gasoline, diesel fuel, and aviation kerosene for the Russian military. The attack forced local authorities to implement the Carpet emergency airspace restriction at Ufa Airport. Damaging this distillation unit caused a substantial disruption to the refinery's refined fuel output.",
      "source": "Head of Republic of Bashkortostan, OSINT (Astra, Exilenova+), Media"
    }
  },
  {
    "date": "19.08.2026",
    "lat": 56.2415,
    "lng": 43.4352,
    "distance": calcMinDistance(56.2415, 43.4352),
    "ru": {
      "region": "Нижегородская область, г. Дзержинск",
      "target": "ФКП «Завод имени Я. М. Свердлова»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 19 августа 2026 года подразделения украинских ударных БПЛА провели результативную атаку на оборонное предприятие ФКП «Завод имени Я. М. Свердлова» в городе Дзержинск Нижегородской области. Завод является одним из крупнейших в РФ производителей взрывчатых веществ (гексогена, октогена, ТЭНа), снаряжения авиабомб всех калибров (ФАБ и КАБ), боеголовок к ракетным комплексам и зарядов для РСЗО. Местные жители зафиксировали звуки пролета дронов, работу объектовой ПВО, серию громких детонаций и густой столб дыма над территорией химзавода. Часть беспилотников прорвала заградительный огонь и поразила производственные корпуса цехов снаряжения боеприпасов. Взрывной волной выбило остекление в близлежащих жилых кварталах. Попадания привели к повреждению оборудования и экстренной остановке линий снаряжения авиационных боеприпасов.",
      "source": "Генштаб ВСУ, Минобороны РФ, OSINT (Astra, Shot), СМИ"
    },
    "uk": {
      "region": "Нижньогородська область, м. Дзержинськ",
      "target": "ФКП «Завод імені Я. М. Свердлова»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч на 19 серпня 2026 року підрозділи українських ударних БпЛА здійснили результативну атаку на оборонне підприємство ФКП «Завод імені Я. М. Свердлова» в місті Дзержинськ Нижньогородської області. Завод є одним із найбільших у РФ виробників промислових і військових вибухових речовин (гексогену, октогену), спорядження авіаційних бомб (ФАБ та КАБ), бойових частин до ракетних комплексів і зарядів для РСЗВ. Місцеві жителі зафіксували проліт дронів, роботу протиповітряної оборони, серію гучних детонацій та густий стовп диму над територією хімзаводу. Частина безпілотників подолала загороджувальний вогонь і влучила у виробничі цехи спорядження боєприпасів. Вибуховою хвилею вибило скло у прилеглих житлових будинках. Влучання призвели до пошкодження обладнання та екстреної зупинки ліній виготовлення боєприпасів.",
      "source": "Генштаб ЗСУ, Міноборони РФ, OSINT (Astra, Shot), ЗМІ"
    },
    "en": {
      "region": "Nizhny Novgorod Oblast, Dzerzhinsk",
      "target": "Sverdlov State Plant (FKP Zavod Imeni Ya. M. Sverdlova)",
      "category": "Military",
      "weapon": "Drone",
      "details": "On the night of August 19, 2026, Ukrainian long-range strike UAVs executed a successful strike against the major defense manufacturing enterprise, Sverdlov State Plant, in Dzerzhinsk, Nizhny Novgorod Oblast. The enterprise ranks among Russia's primary producers of military-grade explosives (RDX, HMX), aerial bombs (FAB and guided KAB bombs), warheads for tactical missile systems, and artillery/MLRS munitions. Local residents reported drone engine sounds, heavy anti-aircraft fire, followed by multiple powerful explosions and heavy smoke rising above the plant's perimeter. Several drones penetrated air defense cordons and scored direct hits on ammunition filling workshops. The explosion blast wave shattered window panes in nearby residential neighborhoods. The impacts caused structural damage to industrial assets and halted high-explosive ordnance production lines.",
      "source": "General Staff of AFU, MoD of RF, OSINT (Astra, Shot), Media"
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

// Remove existing 19.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '19.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 19 August 2026! Total items in data.js: ${data.length}`);
