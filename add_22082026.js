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
    "date": "22.08.2026",
    "lat": 52.9664,
    "lng": 49.7335,
    "distance": calcMinDistance(52.9664, 49.7335),
    "ru": {
      "region": "Самарская область, г. Чапаевск",
      "target": "Логистический хаб маркетплейса «Ozon» (Индустриальный парк «Чапаевск»)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "В ночь на 22 августа 2026 года дальнобойные украинские дроны атаковали крупный логистический комплекс маркетплейса Ozon в индустриальном парке города Чапаевск Самарской области. Это первое подтвержденное попадание беспилотников по инфраструктуре данной компании на удалении свыше 900 км от границы. В результате удара на территории складского хаба вспыхнул масштабный пожар, охвативший помещения сортировки и стеллажного хранения. Из здания дежурная смена экстренно эвакуировала свыше 500 сотрудников, при этом руководство площадки подтвердило наличие пострадавших. Из-за серьезных разрушений внутренних конструкций работа сортировочного центра была заморожена на неопределенный срок, а заказы сняты с доставки. Комплекс играл важную роль в региональной логистике снабжения Поволжья товарами двойного назначения и армейской экипировкой.",
      "source": "Президент Украины, Генштаб ВСУ, ASTRA, СМИ РФ"
    },
    "uk": {
      "region": "Самарська область, м. Чапаєвськ",
      "target": "Логістичний хаб маркетплейса «Ozon» (Індустріальний парк «Чапаєвськ»)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "У ніч на 22 серпня 2026 року далекобійні українські дрони атакували великий логістичний комплекс маркетплейса Ozon в індустріальному парку міста Чапаєвськ Самарської області. Це стало першим підтвердженим ураженням безпілотниками інфраструктури компанії на відстані понад 900 км від кордону. Внаслідок прильоту на території складського хабу спалахнула масштабна пожежа, яка охопила приміщення сортування та стелажного зберігання. З комплексу екстрено евакуювали понад 500 працівників чергової зміни, керівництво компанії підтвердило наявність постраждалих. Через суттєві руйнування конструкцій роботу сортувального термінала заморозили на невизначений термін, а доставку замовлень зупинили. Складський вузол відігравав вагому роль у забезпеченні Поволжя товарами подвійного призначення та армійською екіпіровкою.",
      "source": "Президент України, Генштаб ЗСУ, ASTRA, ЗМІ РФ"
    },
    "en": {
      "region": "Samara Oblast, Chapayevsk",
      "target": "Ozon Logistics Fulfillment Hub (Chapayevsk Industrial Park)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the night of August 22, 2026, Ukrainian long-range strike UAVs struck the major Ozon marketplace logistics fulfillment center in the Chapayevsk industrial park, Samara Oblast. This marked the first confirmed drone strike against the retail giant's logistical network at a distance exceeding 900 km from Ukraine's border. The impact sparked a massive fire across the facility, engulfing primary sorting lines and multi-tier warehousing sections. Emergency services evacuated over 500 shift workers from the burning facility, with company officials confirming multiple injuries. Extensive structural damage forced management to suspend all warehouse operations indefinitely and halt pending shipments. The central facility served as a key regional distribution hub across the Volga region, processing dual-use goods and military gear for Russian forces.",
      "source": "President of Ukraine, General Staff of AFU, ASTRA, Media"
    }
  },
  {
    "date": "22.08.2026",
    "lat": 53.1258,
    "lng": 49.9086,
    "distance": calcMinDistance(53.1258, 49.9086),
    "ru": {
      "region": "Самарская область, г. Новокуйбышевск",
      "target": "Новокуйбышевский НПЗ (АО «Новокуйбышевский нефтеперерабатывающий завод»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 22 августа 2026 года Силы беспилотных систем ВСУ во взаимодействии с другими подразделениями Сил обороны нанесли удар по Новокуйбышевскому НПЗ в Самарской области. Беспилотники преодолели около 950 км и поразили технологические установки завода, вызвав крупный пожар в производственной зоне. Мощность этого предприятия «Роснефти» превышает 8,8 млн тонн нефти в год, и оно является ключевым производителем авиакеросина, дизельного топлива высшего класса и мазута для российской армии. Губернатор региона подтвердил налет дронов и возгорание на промышленном объекте. В городе также сообщалось о повреждении жилого дома и одной погибшей пенсионерке в результате падения обломков сбитых целей. Точный удар нарушил непрерывный производственный цикл первичной переработки углеводородного сырья.",
      "source": "Генштаб ВСУ, СБС, губернатор Самарской области, ASTRA, СМИ"
    },
    "uk": {
      "region": "Самарська область, м. Новокуйбишевськ",
      "target": "Новокуйбишевський НПЗ (АТ «Новокуйбишевський нафтопереробний завод»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч на 22 серпня 2026 року Сили безпілотних систем ЗСУ у взаємодії з іншими підрозділами Сил оборони завдали результативного удару по Новокуйбишевському НПЗ у Самарській області. Безпілотники подолали близько 950 км та уразили технологічні установки заводу, спричинивши сильну пожежу у виробничій зоні. Потужність цього підприємства «Роснефти» перевищує 8,8 млн тонн нафти на рік, воно є провідним виробником авіагасу, дизельного пального та мазуту для потреб російської армії. Губернатор регіону підтвердив атаку дронів і займання на промисловому підприємстві. У місті також зафіксовано пошкодження житлового будинку та загибель літньої жінки внаслідок падіння уламків збитих цілей. Влучний удар порушив безперервний технологічний цикл первинної переробки сировини на нафтогіганті.",
      "source": "Генштаб ЗСУ, СБС, губернатор Самарської області, ASTRA, ЗМІ"
    },
    "en": {
      "region": "Samara Oblast, Novokuybyshevsk",
      "target": "Novokuybyshevsk Oil Refinery (JSC Novokuybyshevsk Refinery)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 22, 2026, the Ukrainian Unmanned Systems Forces, in coordination with other defense units, launched an effective drone attack against the Novokuybyshevsk Oil Refinery in Samara Oblast. Ukrainian UAVs covered roughly 950 km to strike industrial units of the refinery, triggering a major fire in the processing area. Owned by Rosneft, the facility processes over 8.8 million tons of crude annually and manufactures high-grade jet fuel, diesel, and fuel oil for the Russian military. Regional governor Vyacheslav Fedorishchev confirmed the drone strike and blaze at the industrial site. Local authorities also reported collateral damage to a residential building and one fatality caused by falling debris. The precision strike caused a shutdown in the primary crude distillation process.",
      "source": "General Staff of AFU, SBS, Samara Oblast Governor, ASTRA, Media"
    }
  },
  {
    "date": "22.08.2026",
    "lat": 46.7214,
    "lng": 38.2748,
    "distance": calcMinDistance(46.7214, 38.2748),
    "ru": {
      "region": "Краснодарский край, г. Ейск (территория морского порта)",
      "target": "Ейский нефтеналивной комплекс (Морской порт Ейск, ООО «Ейск-Порт-Виста»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "22 августа 2026 года Силы обороны Украины нанесли прицельный удар ударными беспилотниками по Ейскому нефтеналивному комплексу в морском порту Ейска на побережье Азовского моря. Украинские дроны поразили резервуарный парк предприятия общей емкостью свыше 11 тысяч кубических метров, предназначенный для перевалки и оперативного хранения горюче-смазочных материалов. В результате попаданий на объекте загорелись емкости с нефтепродуктами, над портовой зоной поднялись густые клубы черного дыма. Данный терминал играет важную роль в снабжении топливом группировки российских оккупационных войск и кораблей на Азовско-Черноморском театре военных действий. Местные власти подтвердили работу пожарных расчетов по тушению огня на территории портового предприятия. Поражение терминала ограничило логистику перевалки топлива морским путем.",
      "source": "Генштаб ВСУ, ВМС ВСУ / Силы обороны, ASTRA, СМИ"
    },
    "uk": {
      "region": "Краснодарський край, м. Єйськ (територія морського порту)",
      "target": "Єйський нафтоналивний комплекс (Морський порт Єйськ, ТОВ «Єйськ-Порт-Віста»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "22 серпня 2026 року Сили оборони України завдали прицільного удару ударними безпілотниками по Єйському нафтоналивному комплексу в морському порту Єйська на узбережжі Азовського моря. Українські дрони влучили у резервуарний парк підприємства загальною місткістю понад 11 тисяч кубічних метрів, що використовується для перевалки та зберігання пально-мастильних матеріалів. Внаслідок вибухів на об'єкті спалахнули місткості з нафтопродуктами, над акваторією порту здійнялися густі стовпи чорного диму. Цей термінал відіграє вагому роль у постачанні пального угрупованню російських окупаційних військ і катерів на Азовсько-Чорноморському напрямку. Місцева влада підтвердила роботу пожежних підрозділів з ліквідації вогню на території порту. Ураження резервуарів відчутно обмежило логістику морського перевезення палива.",
      "source": "Генштаб ЗСУ, ВМС ЗСУ / Сили оборони, ASTRA, ЗМІ"
    },
    "en": {
      "region": "Krasnodar Krai, Yeysk (Seaport area)",
      "target": "Yeysk Oil Loading Complex (Port of Yeysk, LLC Yeysk-Port-Vista)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On August 22, 2026, the Ukrainian Defense Forces launched a targeted drone strike against the Yeysk Oil Loading Complex located within the Port of Yeysk on the Sea of Azov coast. Ukrainian UAVs struck the facility's tank storage farm, which has an overall storage capacity exceeding 11,000 cubic meters for processing and storing petroleum products. The explosions ignited several storage tanks, sending dense columns of black smoke rising over the seaport harbor. The terminal serves as a vital logistics node supplying fuel and lubricants to Russian military formations and coastal patrol vessels in the Azov-Black Sea theater. Krasnodar Krai authorities confirmed the attack and emergency response efforts to contain the port fire. The destruction of fuel storage tanks disrupted maritime fuel logistics and supply lines.",
      "source": "General Staff of AFU, Ukrainian Navy / Defense Forces, ASTRA, Media"
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

// Remove existing 22.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '22.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 22 August 2026! Total items in data.js: ${data.length}`);
