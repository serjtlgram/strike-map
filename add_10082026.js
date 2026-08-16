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
    "date": "10.08.2026",
    "lat": 58.2917,
    "lng": 68.3267,
    "distance": calcMinDistance(58.2917, 68.3267),
    "ru": {
      "region": "Тюменская область, г. Тобольск (Центральная промзона)",
      "target": "Нефтехимический комплекс «ЗапСибНефтехим» (ООО «ЗапСибНефтехим», ПАО «СИБУР Холдинг»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "10 августа 2026 года Силы специальных операций и Силы беспилотных систем ВСУ нанесли беспрецедентный дальний удар по крупнейшему в России нефтехимическому комплексу «ЗапСибНефтехим» в Тобольске. Предприятие холдинга «СИБУР» расположено на рекордном удалении свыше 2000 километров от линии фронта и является ключевым производителем полимеров, сжиженных углеводородных газов и мономерного сырья для оборонной промышленности РФ. Несколько украинских ударных БПЛА преодолели многоэшелонированную систему ПВО и поразили центральную газофракционирующую установку (ЦГФУ). На промышленном объекте вспыхнул масштабный пожар, сопровождавшийся факельным горением газовых фракций и сильным задымлением. Власти региона подтвердили факт атаки и падение дронов на территории завода. Атака привела к экстренной остановке цехов фракционирования и выходу из строя оборудования.",
      "source": "ССО ВСУ, СБС ВСУ, администрация Тюменской области, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Тюменська область, м. Тобольськ (Центральна промзона)",
      "target": "Нафтохімічний комплекс «ЗапСибНефтехим» (ТОВ «ЗапСибНефтехим», ПАТ «СІБУР Холдинг»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "10 серпня 2026 року Сили спеціальних операцій та Сили безпілотних систем ЗСУ завдали безпрецедентного далекого удару по найбільшому в Росії нафтохімічному комплексу «ЗапСибНефтехим» у Тобольську. Підприємство холдингу «СІБУР» розташоване на рекордній відстані понад 2000 кілометрів від лінії фронту та є ключовим виробником полімерів, скраплених вуглеводневих газів та мономерної сировини для оборонної промисловості РФ. Кілька українських ударних БПЛА подолали багатоешелоновану систему ППО та уразили центральну газофракціонуючу установку (ЦГФУ). На промисловому об'єкті спалахнула масштабна пожежа, що супроводжувалася факельним горінням газових фракцій та сильним задимленням. Влада регіону підтвердила факт атаки та падіння дронів на території заводу. Атака призвела до екстреної зупинки цехів фракціонування та виходу з ладу обладнання.",
      "source": "ССО ЗСУ, СБС ЗСУ, адміністрація Тюменської області, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Tyumen Oblast, Tobolsk (Central Industrial Zone)",
      "target": "ZapSibNeftekhim Petrochemical Complex (LLC ZapSibNeftekhim, SIBUR Holding)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On August 10, 2026, the Special Operations Forces and Unmanned Systems Forces of Ukraine carried out a long-range strike against Russia's largest petrochemical complex, ZapSibNeftekhim in Tobolsk. Operated by SIBUR Holding, the facility is situated at a record distance of over 2,000 kilometers from the frontline. It serves as a strategic producer of polymers, liquefied petroleum gases, and monomer feedstocks supporting Russia's military-industrial manufacturing. Multiple Ukrainian attack UAVs bypassed regional air defense systems and scored hits on the central gas fractionation unit (CGFU). The impact triggered a major fire accompanied by intense flare burning of hydrocarbon gases and heavy smoke columns across the industrial zone. Local authorities confirmed the drone impacts. The attack forced an emergency shutdown of processing units.",
      "source": "SOF of AFU, Unmanned Systems Forces, Tyumen Administration, OSINT (Astra), Media"
    }
  },
  {
    "date": "10.08.2026",
    "lat": 55.5786,
    "lng": 51.9365,
    "distance": calcMinDistance(55.5786, 51.9365),
    "ru": {
      "region": "Республика Татарстан, г. Нижнекамск (Промзона)",
      "target": "Нефтеперерабатывающий комплекс «ТАНЕКО» (АО «ТАНЕКО», ПАО «Татнефть») и Нижнекамская промзона",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 10 августа 2026 года Силы обороны Украины совершили массированный налет ударных БПЛА на нефтеперерабатывающий комплекс «ТАНЕКО» и объекты Нижнекамского промышленного узла в Татарстане. Предприятие мощностью переработки более 16 млн тонн нефти в год производит высокооктановое моторное топливо и авиационный керосин, питающие российскую военную группировку. Несмотря на интенсивную работу средств ПВО и подавление радиоэлектронными комплексами, группа дронов прорвалась к технологическим установкам НПЗ. В результате прилетов и падения детонировавших обломков на территории предприятия произошла серия взрывов и масштабный пожар. Также фиксировались повреждения инфраструктуры на соседнем нефтехимическом гиганте «Нижнекамскнефтехим». Из-за угрозы атаки в регионе вводился особый режим безопасности, а аэропорты Казани и Бегишево приостанавливали прием рейсов.",
      "source": "Генштаб ВСУ, ГУР МО, раис Татарстана Минниханов, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Республіка Татарстан, м. Нижньокамськ (Промзона)",
      "target": "Нафтопереробний комплекс «ТАНЕКО» (АТ «ТАНЕКО», ПАТ «Татнефть») та Нижньокамська промзона",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 10 серпня 2026 року Сили оборони України здійснили масований наліт ударних БПЛА на нафтопереробний комплекс «ТАНЕКО» та об'єкти Нижньокамського промислового вузла в Татарстані. Підприємство потужністю переробки понад 16 млн тонн нафти на рік виробляє високооктанове моторне пальне та авіаційний гас, що живлять російське військове угруповання. Попри інтенсивну роботу засобів ППО та придушення радіоелектронними комплексами, група дронів прорвалася до технологічних установок НПЗ. У результаті влучань та падіння детонуючих уламків на території підприємства сталася серія вибухів і масштабне займання. Також фіксувалися пошкодження інфраструктури на сусідньому нафтохімічному гіганті «Нижньокамськнафтохім». Через загрозу атаки в регіоні вводився особливий режим безпеки, а аеропорти Казані та Бегішево призупиняли прийом рейсів.",
      "source": "Генштаб ЗСУ, ГУР МО, раїс Татарстану Мінніханов, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Republic of Tatarstan, Nizhnekamsk (Industrial District)",
      "target": "TANECO Oil Refinery Complex (JSC TANECO, PJSC Tatneft) and Industrial Hub",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 10, 2026, the Ukrainian Defense Forces conducted a drone raid targeting the TANECO oil refinery and adjacent petrochemical facilities in Nizhnekamsk, Tatarstan. With an annual refining capacity exceeding 16 million metric tons of crude oil, TANECO is a primary producer of high-octane motor fuels and aviation kerosene critical for supplying Russian military logistics. Despite anti-aircraft fire and electronic warfare defenses, several long-range strike UAVs breached the air defense perimeter and struck technological processing units inside the refinery. The impacts and falling debris triggered explosions and a severe fire across the plant's operational area, with minor damage reported at the neighboring Nizhnekamskneftekhim plant. The attack prompted emergency protocols across Tatarstan and temporarily halted operations at Kazan and Begishevo airports.",
      "source": "General Staff of AFU, GUR MO, Head of Tatarstan Minnikhanov, OSINT (Astra), Media"
    }
  },
  {
    "date": "10.08.2026",
    "lat": 48.1294,
    "lng": 38.9328,
    "distance": calcMinDistance(48.1294, 38.9328),
    "ru": {
      "region": "Луганская область, г. Хрустальный (оккупированная территория)",
      "target": "Ремонтно-восстановительная база и стоянка поврежденной бронетехники ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "10 августа 2026 года Силы обороны Украины нанесли точный удар беспилотными авиационными комплексами по ремонтно-восстановительной базе подразделений ВС РФ в городе Хрустальном на временно оккупированной территории Луганской области. Данный промышленно-ремонтный комплекс использовался российским военным командованием для оперативного ремонта тяжелой бронетехники, танков, артиллерийских систем и двигателей перед их повторной отправкой на линию фронта. В результате серии точных прилетов ударных БПЛА произошло обрушение кровли ремонтных цехов, возник сильный пожар и детонация хранившихся запчастей и боекомплекта. Генеральный штаб ВСУ официально подтвердил результативное поражение ремонтного подразделения. Уничтожение ремонтной инфраструктуры сорвало график восстановления боеспособности поврежденной бронетехники противника.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT, СМИ"
    },
    "uk": {
      "region": "Луганська область, м. Хрустальний (окупована територія)",
      "target": "Ремонтно-відновлювальна база та стоянка пошкодженої бронетехніки ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "10 серпня 2026 року Сили оборони України завдали точного удару безпілотними авіаційними комплексами по ремонтно-відновлювальній базі підрозділів ЗС РФ у місті Хрустальний на тимчасово окупованій території Луганської області. Цей промислово-ремонтний комплекс використовувався російським військовим командуванням для оперативного ремонту важкої бронетехніки, танків, артилерійських систем та двигунів перед їх повторним відправленням на лінію фронту. У результаті серії точних влучань ударних БПЛА сталося обвалення покрівлі ремонтних цехів, виникла сильна пожежа та детонація накопичених запчастин і боєкомплекту. Генеральний штаб ЗСУ офіційно підтвердив результативне ураження ремонтного підрозділу. Знищення ремонтної інфраструктури зірвало графік відновлення боєздатності пошкодженої бронетехніки противника.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT, ЗМІ"
    },
    "en": {
      "region": "Luhansk Oblast, Khrustalnyi (Occupied Territory)",
      "target": "Military Armored Vehicle Repair and Maintenance Facility",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 10, 2026, the Ukrainian Defense Forces carried out a precision strike using unmanned aerial systems against a Russian military repair and maintenance base located in the occupied city of Khrustalnyi, Luhansk Oblast. This industrial repair facility was heavily utilized by the Russian military command for the overhaul, welding, and refitting of battle-damaged armored fighting vehicles, tanks, and artillery systems before redeployment to the front line. Multiple strike drones directly penetrated the main maintenance workshops, triggering severe structural fires and secondary explosions of ammunition and spare part stores. The General Staff of the Armed Forces of Ukraine officially confirmed the destruction of this repair unit. The strike severely degraded Russian capabilities to rapidly return heavy armored combat vehicles to operational status.",
      "source": "General Staff of AFU, GUR MO, OSINT, Media"
    }
  },
  {
    "date": "10.08.2026",
    "lat": 47.1650,
    "lng": 37.2850,
    "distance": calcMinDistance(47.1650, 37.2850),
    "ru": {
      "region": "Донецкая область, Мариупольский район, с. Боевое (оккупированная территория)",
      "target": "Полевой артиллерийский склад боеприпасов группировки войск ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "10 августа 2026 года подразделения Сил обороны Украины провели успешную операцию по уничтожению крупного полевого артиллерийского склада боеприпасов ВС РФ в районе села Боевое на временно оккупированной территории Донецкой области. Складской узел выполнял критически важную функцию промежуточного накопления снарядов ствольной артиллерии, реактивных выстрелов для РСЗО и мин для снабжения наступающих российских частей на южном направлении. В результате попадания дальнобойных дронов-камикадзе на объекте началась масштабная вторичная детонация артиллерийских боеприпасов, продолжавшаяся несколько часов и сопровождавшаяся сильными пожарами. Генеральный штаб ВСУ подтвердил уничтожение склада. Ликвидация артиллерийского арсенала существенно снизила плотность вражеских обстрелов на данном участке фронта.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT, СМИ"
    },
    "uk": {
      "region": "Донецька область, Маріупольський район, с. Бойове (окупована територія)",
      "target": "Польовий артилерійський склад боєприпасів угруповання військ ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "10 серпня 2026 року підрозділи Сил оборони України провели успішну операцію зі знищення великого польового артилерійського складу боєприпасів ЗС РФ у районі села Бойове на тимчасово окупованій території Донецької області. Складський вузол виконував критично важливу функцію проміжного накопичення снарядів ствольної артилерії, реактивних пострілів для РСЗВ та мін для постачання наступальних російських частин на південному напрямку. У результаті влучання далекобійних дронів-камікадзе на об'єкті почалася масштабна вторинна детонація артилерійських боєприпасів, яка тривала кілька годин і супроводжувалася сильними пожежами. Генеральний штаб ЗСУ підтвердив знищення складу. Ліквідація артилерійського арсеналу суттєво знизила щільність ворожих обстрілів на цій ділянці фронту.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT, ЗМІ"
    },
    "en": {
      "region": "Donetsk Oblast, Mariupol District, Boyove (Occupied Territory)",
      "target": "Forward Field Artillery Ammunition Supply Depot",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 10, 2026, units of the Ukrainian Defense Forces carried out a precision operation destroying a large forward field artillery ammunition depot of the Russian Armed Forces near the village of Boyove in occupied Donetsk Oblast. This ammunition depot served as a critical forward transshipment hub storing tube artillery shells, MLRS rockets, and heavy mortar rounds allocated to Russian operational formations on the southern axis. Direct impacts by Ukrainian strike drones triggered extensive secondary detonations of stored ordnance that continued for several hours, completely razing the depot storage area. The General Staff of the Armed Forces of Ukraine officially verified the total destruction of the field depot. The loss of these stockpiles significantly curtailed Russian artillery fire intensity along the front sector.",
      "source": "General Staff of AFU, GUR MO, OSINT, Media"
    }
  },
  {
    "date": "10.08.2026",
    "lat": 47.9850,
    "lng": 37.3300,
    "distance": calcMinDistance(47.9850, 37.3300),
    "ru": {
      "region": "Донецкая область, Покровский район, с. Новоселидовка (оккупированная территория)",
      "target": "Склад материально-технических средств и войскового снабжения ВС РФ",
      "category": "Логистический центр",
      "weapon": "Дрон",
      "details": "10 августа 2026 года Силы обороны Украины нанесли результативный удар ударными БПЛА по крупному складу материально-технических средств российских войск в районе Новоселидовки в Донецкой области. Объект служил ключевым передовым распределительным узлом для снабжения российских подразделений инженерным имуществом, полевым снаряжением, средствами связи, маскировочными сетями и горюче-смазочными материалами. В результате точного налета дронов загорелись основные ангары и складские площадки открытого хранения, что привело к полному выгоранию имущества и детонации хранившихся емкостей с ГСМ. Генеральный штаб ВСУ официально подтвердил успешное поражение склада. Уничтожение распределительного хаба сорвало тыловое обеспечение группировки противника на покровско-кураховском направлении.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT, СМИ"
    },
    "uk": {
      "region": "Донецька область, Покровський район, с. Новоселідівка (окупована територія)",
      "target": "Склад матеріально-технічних засобів та військового забезпечення ЗС РФ",
      "category": "Логістичний центр",
      "weapon": "Дрон",
      "details": "10 серпня 2026 року Сили оборони України завдали результативного удару ударними БПЛА по великому складу матеріально-технічних засобів російських військ у районі Новоселідівки в Донецькій області. Об'єкт слугував ключовим передовим розподільчим вузлом для забезпечення російських підрозділів інженерним майном, польовим спорядженням, засобами зв'язку, маскувальними сітками та пально-мастильними матеріалами. У результаті точного нальоту дронів зайнялися основні ангари та складські майданчики відкритого зберігання, що призвело до повного вигорання майна та детонації ємностей із ПММ. Генеральний штаб ЗСУ офіційно підтвердив успішне ураження складу. Знищення розподільчого хабу зірвало тилове забезпечення угруповання противника на покровсько-курахівському напрямку.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT, ЗМІ"
    },
    "en": {
      "region": "Donetsk Oblast, Pokrovsk District, Novoselydivka (Occupied Territory)",
      "target": "Material and Technical Military Supply Depot",
      "category": "Logistics Hub",
      "weapon": "Drone",
      "details": "On August 10, 2026, the Ukrainian Defense Forces executed a successful UAV strike targeting a major material-technical storage and logistics depot of Russian forces near Novoselydivka in Donetsk Oblast. The installation functioned as an essential forward logistics distribution node supplying Russian assault units with combat engineering equipment, field gear, tactical radios, camouflage supplies, and technical lubricants. Precision drone strikes set ablaze the primary warehouse hangars and outdoor staging sectors, leading to complete destruction of stored equipment and secondary combustions of fuel containers. The General Staff of the Armed Forces of Ukraine officially confirmed the destruction of the logistics facility. The elimination of this depot severely disrupted rear logistics for Russian combat units on the Pokrovsk-Kurakhove axis.",
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

// Separate items by date
const itemsBefore10 = data.filter(item => {
    const d = item.date.split('.');
    const itemDate = new Date(`${d[2]}-${d[1]}-${d[0]}`);
    const date10 = new Date('2026-08-10');
    return itemDate > date10;
});
const itemsAfter10 = data.filter(item => {
    const d = item.date.split('.');
    const itemDate = new Date(`${d[2]}-${d[1]}-${d[0]}`);
    const date10 = new Date('2026-08-10');
    return itemDate < date10;
});

data = [...itemsBefore10, ...newItems, ...itemsAfter10];

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 10 August 2026! Total items in data.js: ${data.length}`);
