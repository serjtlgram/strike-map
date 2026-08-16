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
    "date": "13.08.2026",
    "lat": 53.3986,
    "lng": 55.9388,
    "distance": calcMinDistance(53.3986, 55.9388),
    "ru": {
      "region": "Республика Башкортостан, г. Салават (Промзона)",
      "target": "Нефтеперерабатывающий и нефтехимический комплекс ООО «Газпром нефтехим Салават»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Утром 13 августа 2026 года дальнобойные ударные беспилотники Сил обороны Украины нанесли результативный удар по крупнейшему нефтехимическому и нефтеперерабатывающему комплексу ООО «Газпром нефтехим Салават» в Башкортостане. Предприятие расположено на удалении свыше 1300 километров от линии фронта, перерабатывает до 10 млн тонн углеводородного сырья в год и производит моторные топлива, авиакеросин и химическую продукцию для нужд российской армии. Украинские БПЛА преодолели эшелонированную противовоздушную оборону и успешно поразили технологические установки первичной переработки нефти. На территории промышленной площадки вспыхнул крупный пожар с факельным горением углеводородов и сильным задымлением. Власти региона подтвердили факт падения БПЛА и возгорание в промзоне, а работа поврежденных технологических линий была экстренно остановлена.",
      "source": "Генштаб ВСУ, ГУР МО, глава Башкортостана Хабиров, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Республіка Башкортостан, м. Салават (Промзона)",
      "target": "Нафтопереробний та нафтохімічний комплекс ТОВ «Газпром нафтохім Салават»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Уранці 13 серпня 2026 року далекобійні ударні безпілотники Сил оборони України завдали результативного удару по найбільшому нафтохімічному та нафтопереробному комплексу ТОВ «Газпром нафтохім Салават» у Башкортостані. Підприємство розташоване на відстані понад 1300 кілометрів від лінії фронту, переробляє до 10 млн тонн вуглеводневої сировини на рік і виробляє моторні палива, авіагас та хімічну продукцію для потреб російської армії. Українські БПЛА подолали ешелоновану протиповітряну оборону та успішно уразили технологічні установки первинної переробки нафти. На території промислового майданчика спалахнула велика пожежа з факельним горінням вуглеводнів і сильним задимленням. Влада регіону підтвердила факт падіння БПЛА та займання в промзоні, а роботу пошкоджених технологічних ліній було екстрено зупинено.",
      "source": "Генштаб ЗСУ, ГУР МО, глава Башкортостану Хабіров, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Republic of Bashkortostan, Salavat (Industrial District)",
      "target": "Gazprom Neftekhim Salavat Petrochemical and Refining Complex (LLC Gazprom Neftekhim Salavat)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the morning of August 13, 2026, long-range Ukrainian strike drones executed an effective deep strike against the Gazprom Neftekhim Salavat petrochemical and refining complex in the Republic of Bashkortostan. Located more than 1,300 kilometers from the frontline, the industrial giant processes up to 10 million metric tons of hydrocarbons annually, supplying motor fuels, aviation kerosene, and specialty polymers to Russian military units. Ukrainian strike UAVs penetrated multi-layered air defenses and directly impacted primary oil processing units inside the refinery. The explosion sparked a major industrial fire featuring intense hydrocarbon combustion and heavy plumes of black smoke. Regional authorities acknowledged drone impacts and fire suppression efforts, while operations across damaged processing units were immediately suspended.",
      "source": "General Staff of AFU, GUR MO, Head of Bashkortostan Khabirov, OSINT (Astra), Media"
    }
  },
  {
    "date": "13.08.2026",
    "lat": 54.5947,
    "lng": 55.3942,
    "distance": calcMinDistance(54.5947, 55.3942),
    "ru": {
      "region": "Республика Башкортостан, Чишминский район, пгт Чишмы",
      "target": "Распределительный логистический комплекс Wildberries",
      "category": "Логистический центр",
      "weapon": "Дрон",
      "details": "13 августа 2026 года группа украинских ударных БПЛА дальнего радиуса действия атаковала крупный распределительный логистический комплекс Wildberries в поселке Чишмы Чишминского района Башкортостана. Этот стратегический складской узел площадью свыше 140 тысяч квадратных метров задействован в логистике снабжения восточных и центральных регионов РФ товарами двойного назначения, техническими средствами и армейской экипировкой. В результате попадания нескольких дронов на складе вспыхнул мощный пожар, охвативший около 30 тысяч квадратных метров помещений (примерно пятую часть всего комплекса), что привело к частичному обрушению перекрытий. Руководство маркетплейса подтвердило атаку и факт пожара, отметив заблаговременную эвакуацию персонала. Приемка и распределение грузов на терминале были полностью заморожены на неопределенный срок.",
      "source": "OSINT (Astra), МЧС РФ, пресс-служба Wildberries, СМИ"
    },
    "uk": {
      "region": "Республіка Башкортостан, Чишминський район, смт Чишми",
      "target": "Розподільчий логістичний комплекс Wildberries",
      "category": "Логістичний центр",
      "weapon": "Дрон",
      "details": "13 серпня 2026 року група українських ударних БПЛА далекого радіуса дії атакувала великий розподільчий логістичний комплекс Wildberries у селищі Чишми Чишминського району Башкортостану. Цей стратегічний складський вузол площею понад 140 тисяч квадратних метрів задіяний у логістиці постачання східних та центральних регіонів РФ товарами подвійного призначення, технічними засобами та армійською екіпіровкою. У результаті влучання кількох дронів на складі спалахнула потужна пожежа, яка охопила близько 30 тисяч квадратних метрів приміщень (приблизно п'яту частину всього комплексу), що призвело до часткового обвалення перекриттів. Керівництво маркетплейсу підтвердило атаку та факт пожежі, наголосивши на завчасній евакуації персоналу. Прийом та розподіл вантажів на терміналі були повністю заморожені на невизначений термін.",
      "source": "OSINT (Astra), МНС РФ, прес-служба Wildberries, ЗМІ"
    },
    "en": {
      "region": "Republic of Bashkortostan, Chishminsky District, Chishmy",
      "target": "Wildberries Distribution & Logistics Hub",
      "category": "Logistics Hub",
      "weapon": "Drone",
      "details": "On August 13, 2026, a group of Ukrainian long-range strike UAVs struck the massive Wildberries logistics and distribution hub in Chishmy, Chishminsky District of Bashkortostan. Spanning over 140,000 square meters, this key distribution center serves as a critical strategic node handling dual-use technology, tactical gear, and commercial supplies bound for Russian regional supply lines. Direct drone hits caused a devastating fire that consumed approximately 30,000 square meters of warehouse space—nearly one-fifth of the entire complex—triggering major roof collapses across several storage bays. Wildberries management confirmed the drone strike and blaze, stating that facility workers were evacuated in advance. Freight processing and shipping operations at the logistics terminal were indefinitely suspended due to structural devastation.",
      "source": "OSINT (Astra), EMERCOM of Russia, Wildberries PR, Media"
    }
  },
  {
    "date": "13.08.2026",
    "lat": 44.5250,
    "lng": 33.5050,
    "distance": calcMinDistance(44.5250, 33.5050),
    "ru": {
      "region": "г. Севастополь, Балаклавский район / мыс Фиолент",
      "target": "Радиолокационная станция дальнего обнаружения 55Ж6У «Небо-У» войск ПВО РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 13 августа 2026 года Силы обороны Украины провели высокоточную операцию по уничтожению дорогостоящей российской радиолокационной станции дальнего обнаружения 55Ж6У «Небо-У» в районе Севастополя. Эта трехкоординатная РЛС метрового диапазона стоимостью около 100 млн долларов являлась ключевым элементом системы ПВО и радиотехнических войск РФ в Крыму, контролируя воздушное пространство на глубину до 600 км и сопровождая аэродинамические и баллистические цели. В результате точного удара ударных дронов антенна и аппаратный командный пункт РЛС получили критические повреждения с последующей детонацией радиоэлектронных блоков. Генеральный штаб ВСУ официально подтвердил уничтожение радиолокационной станции. Потеря данного радара создала существенную брешь в противовоздушном прикрытии Черноморского флота и военных баз на Крымском полуострове.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT (Crimeanwind, Astra), СМИ"
    },
    "uk": {
      "region": "м. Севастополь, Балаклавський район / мис Фіолент",
      "target": "Радіолокаційна станція далекого виявлення 55Ж6У «Небо-У» військ ППО РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 13 серпня 2026 року Сили оборони України провели високоточну операцію зі знищення дороговартісної російської радіолокаційної станції далекого виявлення 55Ж6У «Небо-У» в районі Севастополя. Ця трикоординатна РЛС метрового діапазону вартістю близько 100 млн доларів була ключовим елементом системи ППО та радіотехнічних військ РФ у Криму, контролюючи повітряний простір на глибину до 600 км і супроводжуючи аеродинамічні та балістичні цілі. У результаті точного удару ударних дронів антена та апаратний командний пункт РЛС зазнали критичних пошкоджень із подальшою детонацією радіоелектронних блоків. Генеральний штаб ЗСУ офіційно підтвердив знищення радіолокаційної станції. Втрата цього радара створила суттєву прогалину в протиповітряному прикритті Чорноморського флоту та військових баз на Кримському півострові.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT (Crimeanwind, Astra), ЗМІ"
    },
    "en": {
      "region": "Sevastopol, Balaklava District / Cape Fiolent",
      "target": "55Zh6U Nebo-U Early Warning Long-Range Radar Station",
      "category": "Military",
      "weapon": "Drone",
      "details": "On the night of August 13, 2026, the Ukrainian Defense Forces conducted a precision operation destroying a high-value Russian 55Zh6U Nebo-U long-range radar station deployed near Sevastopol in occupied Crimea. Valued at approximately $100 million, this 3D VHF-band early warning radar formed a cornerstone of Russian air defense architecture across the Black Sea, detecting and tracking aerodynamic and ballistic targets at ranges up to 600 km. Precision strike UAVs scored direct hits on the radar antenna array and operational command cabins, causing secondary detonations of sensitive radar circuitry. The General Staff of the Armed Forces of Ukraine officially confirmed the destruction of the Nebo-U installation. Neutralizing this strategic radar opened significant blind spots in Russian air surveillance protecting naval assets in Crimea.",
      "source": "General Staff of AFU, GUR MO, OSINT (Crimeanwind, Astra), Media"
    }
  },
  {
    "date": "13.08.2026",
    "lat": 48.0750,
    "lng": 39.6500,
    "distance": calcMinDistance(48.0750, 39.6500),
    "ru": {
      "region": "Луганская область, г. Должанск (оккупированная территория)",
      "target": "Склад горюче-смазочных материалов и нефтебаза обеспечения группировки ВС РФ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 13 августа 2026 года Силы обороны Украины нанесли точный удар беспилотными летательными аппаратами по крупному складу горюче-смазочных материалов в городе Должанске на временно оккупированной территории Луганской области. Данный тыловой топливный комплекс выполнял ключевую роль в накоплении и перевалке дизельного топлива и бензина для бронетехники и подразделений российской оккупационной армии, действующих на восточном театре военных действий. В результате серии прилетов ударных БПЛА на объекте загорелись резервуары с топливом, сопровождавшиеся сильными повторными взрывами и масштабным пожаром. Генеральный штаб ВСУ официально подтвердил успешное поражение склада ГСМ. Уничтожение значительного запаса нефтепродуктов нарушило логистику снабжения передовых частей РФ горючим и снизило оперативную мобильность группировки.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT, СМИ"
    },
    "uk": {
      "region": "Луганська область, м. Довжанськ (окупована територія)",
      "target": "Склад пально-мастильних матеріалів та нафтобаза забезпечення угруповання ЗС РФ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 13 серпня 2026 року Сили оборони України завдали точного удару безпілотними літальними апаратами по великому складу пально-мастильних матеріалів у місті Довжанськ на тимчасово окупованій території Луганської області. Цей тиловий паливний комплекс виконував ключову роль у накопиченні та перевалці дизельного пального і бензину для бронетехніки та підрозділів російської окупаційної армії, що діють на східному театрі воєнних дій. У результаті серії влучань ударних БПЛА на об'єкті спалахнули резервуари з пальним, що супроводжувалося сильними повторними вибухами та масштабною пожежею. Генеральний штаб ЗСУ офіційно підтвердив успішне ураження складу ПММ. Знищення значного запасу нафтопродуктів порушило логістику забезпечення передових частин РФ пальним і знизило оперативну мобільність угруповання.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT, ЗМІ"
    },
    "en": {
      "region": "Luhansk Oblast, Dovzhansk (Occupied Territory)",
      "target": "Military Fuel and Lubricants (POL) Storage Depot",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 13, 2026, the Ukrainian Defense Forces carried out a precision UAV strike on a major fuel and lubricants storage facility in the city of Dovzhansk, situated in occupied Luhansk Oblast. This rear military fuel depot played a crucial logistical role in receiving, storing, and dispensing diesel fuel and gasoline to armored formations and supply columns of Russian forces operating on the eastern front. Multiple strike drones directly penetrated the tank farm area, sparking intense fires across fuel storage tanks accompanied by secondary combustions. The General Staff of the Armed Forces of Ukraine officially confirmed the successful destruction of the fuel depot. The loss of substantial petroleum reserves disrupted tactical fuel distribution to frontline Russian units and constrained mechanized maneuverability.",
      "source": "General Staff of AFU, GUR MO, OSINT, Media"
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

// Remove existing 13.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '13.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 13 August 2026! Total items in data.js: ${data.length}`);
