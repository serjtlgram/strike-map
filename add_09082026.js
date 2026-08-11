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
    "date": "09.08.2026",
    "lat": 54.8872,
    "lng": 56.1086,
    "distance": calcMinDistance(54.8872, 56.1086),
    "ru": {
      "region": "Республика Башкортостан, г. Уфа (Орджоникидзевский район)",
      "target": "Уфимский нефтеперерабатывающий и нефтехимический комплекс (АО «Башнефть-Уфанефтехим», ПАО «АНК «Башнефть»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 9 августа 2026 года украинские дальнобойные беспилотники совершили налет на нефтеперерабатывающий комплекс АО «Башнефть-Уфанефтехим» в Уфе на расстоянии свыше 1400 километров от линии фронта. Завод мощностью переработки до 9,5 млн тонн нефти в год выпускает высокооктановый бензин, дизель и авиакеросин, питающие военную логистику центральных регионов РФ. Группа ударных БПЛА преодолела региональные рубежи ПВО, один из дронов рухнул на строящийся объект вблизи промышленной площадки, вызвав сильный пожар. В городе и на территории предприятия объявлялась тревога, а международный аэропорт «Уфа» вводил ограничения на вылет и посадку самолетов. В результате атаки на заводе приостанавливались отдельные технологические процессы для проверки оборудования.",
      "source": "Генштаб ВСУ, ГУР МО, администрация Башкортостана, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Республіка Башкортостан, м. Уфа (Орджонікідзевський район)",
      "target": "Уфимський нафтопереробний та нафтохімічний комплекс (АТ «Башнефть-Уфанефтехім», ПАТ «АНК «Башнефть»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 9 серпня 2026 року українські далекобійні безпілотники здійснили наліт на нафтопереробний комплекс АТ «Башнефть-Уфанефтехім» в Уфі на відстані понад 1400 кілометрів від лінії фронту. Завод потужністю переробки до 9,5 млн тонн нафти на рік випускає високооктановий бензин, дизель та авіагас, що живлять військову логістику центральних регіонів РФ. Група ударних БПЛА подолала регіональні рубежі ППО, один із дронів впав на споруду поблизу промислового майданчика, спричинивши сильну пожежу. У місті та на території підприємства оголошувалася тривога, а міжнародний аеропорт «Уфа» вводив обмеження на виліт та посадку літаків. У результаті атаки на заводі призупинялися окремі технологічні процеси для перевірки обладнання.",
      "source": "Генштаб ЗСУ, ГУР МО, адміністрація Башкортостану, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Republic of Bashkortostan, Ufa (Ordzhonikidzevsky District)",
      "target": "Ufa Oil Refinery and Petrochemical Complex (JSC Bashneft-Ufaneftekhim, Rosneft/Bashneft)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 9, 2026, long-range Ukrainian strike drones targeted the Bashneft-Ufaneftekhim oil refining and petrochemical complex in Ufa, located over 1,400 kilometers from the frontline. Processing up to 9.5 million metric tons of crude annually, this major facility produces high-octane gasoline, diesel, and jet fuel essential for Russian military transport units. A swarm of attack UAVs penetrated regional air defenses, with one drone falling near the industrial perimeter and triggering a heavy fire. Local emergency protocols were triggered across the industrial district, while Ufa International Airport briefly halted all flight operations. The strike forced partial shutdowns of refining units for safety checks and damage evaluation.",
      "source": "General Staff of AFU, GUR MO, Bashkortostan Administration, OSINT (Astra), Media"
    }
  },
  {
    "date": "09.08.2026",
    "lat": 44.7528,
    "lng": 37.6653,
    "distance": calcMinDistance(44.7528, 37.6653),
    "ru": {
      "region": "Краснодарский край, г. Новороссийск (пос. Верхнебаканский / восточная промзона)",
      "target": "Перевалочный комплекс нефтепродуктов и мазутный терминал в Новороссийском порту (ООО «Импортпищепром» / мазутный терминал «Шесхарис»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 9 августа 2026 года Силы обороны Украины атаковали дальнобойными дронами перевалочные терминалы нефтепродуктов и портовую инфраструктуру Новороссийска. Этот крупнейший экспортный узел на Черном море снабжает горючим группировки российских войск на Южном фронте и в Крыму. Вопреки работе систем ПВО и стрельбе из зенитных установок, несколько БПЛА прорвались к промышленным площадкам предприятия ООО «Импортпищепром» и объектам в районе поселка Верхнебаканский. Падение детонировавших БПЛА и обломков вызвало возгорание хозяйственных построек и топливных резервуаров, один человек получил ранения. Атака привела к временно приостановленной погрузке мазута и усилению режимов безопасности в акватории порта.",
      "source": "Генштаб ВСУ, ГУР МО, оперштаб Краснодарского края, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Краснодарський край, м. Новоросійськ (смт Верхньобаканський / східна промзона)",
      "target": "Перевалювальний комплекс нафтопродуктів та мазутний термінал у Новоросійському порту (ТОВ «Імпортпищепром» / мазутний термінал «Шесхарис»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 9 серпня 2026 року Сили оборони України атакували далекобійними дронами перевалювальні термінали нафтопродуктів та портову інфраструктуру Новоросійська. Цей найбільший експортний вузол на Чорному морі забезпечує пальним угруповання російських військ на Південному фронті та в Криму. Попри роботу систем ППО та стрілянину із зенітних установок, кілька БПЛА прорвалися до промислових майданчиків підприємства ТОВ «Імпортпищепром» та об'єктів у районі селища Верхньобаканський. Падіння БПЛА та палаючих уламків спричинило займання господарчих споруд і паливних резервуарів, одна людина дістала поранення. Атака призвела до тимчасового призупинення відвантаження мазуту й посилення безпеки в акваторії порта.",
      "source": "Генштаб ЗСУ, ГУР МО, оперштаб Краснодарського краю, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Krasnodar Krai, Novorossiysk (Vyerkhnyebakansky / Port East District)",
      "target": "Oil Product Transfer Terminal & Fuel Storage Complex (Importpischeprom LLC / Sheskharis Terminal)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 9, 2026, Ukrainian Defense Forces launched a long-range UAV attack on oil product transfer terminals and port logistics facilities in Novorossiysk. Serving as the primary Black Sea fuel hub, Novorossiysk plays a central role in supplying fuel to Russian forces stationed in southern Ukraine and occupied Crimea. Despite heavy anti-aircraft fire and SAM interceptions, several drones reached the industrial premises of Importpischeprom LLC and storage assets near Vyerkhnyebakansky. Falling strike drones and debris ignited fires across auxiliary structures and fuel storage infrastructure, injuring one technician. The operation temporarily disrupted marine oil loading and forced port authorities to lock down maritime traffic.",
      "source": "General Staff of AFU, GUR MO, Krasnodar Operational HQ, OSINT (Astra), Media"
    }
  },
  {
    "date": "09.08.2026",
    "lat": 44.4842,
    "lng": 33.6472,
    "distance": calcMinDistance(44.4842, 33.6472),
    "ru": {
      "region": "г. Севастополь (Балаклавский район, урочище Инжир / мыс Айя)",
      "target": "Склад материально-технического обеспечения и топлива Черноморского флота РФ (Балаклавский район / мыс Айя / пляж Инжир)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "9 августа 2026 года украинские ударные беспилотники атаковали позиции материально-технического обеспечения и складов ГСМ Черноморского флота РФ в районе урочища Инжир у мыса Айя в Балаклавском районе Севастополя. Прибрежная полоса и защищенные военные объекты использовались оккупационными войсками для скрытного хранения топлива и снаряжения морской пехоты. В результате прилетов дронов-камикадзе на объекте вспыхнул интенсивный пожар, охвативший складские помещения и прилегающие лесные массивы. Пожарные расчеты и военные команды тушения боролись с огнем на площади более нескольких гектаров. Удар нарушил логистическую цепочку снабжения малых катеров и подразделений береговой обороны РФ в крымском секторе.",
      "source": "СВУ, СБС ВСУ, оккупационная администрация Севастополя, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "м. Севастополь (Балаклавський район, урочище Інжир / мис Айя)",
      "target": "Склад матеріально-технічного забезпечення та пального Чорноморського флоту РФ (Балаклавський район / мис Айя / пляж Інжир)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "9 серпня 2026 року українські ударні безпілотники атакували позиції матеріально-технічного забезпечення та складів пального Чорноморського флоту РФ у районі урочища Інжир біля мису Айя в Балаклавському районі Севастополя. Прибережна смуга та захищені військові об'єкти використовувалися окупаційними військами для прихованого зберігання пального та спорядження морської піхоти. У результаті влучань дронів-камікадзе на об'єкті спалахнула інтенсивна пожежа, яка охопила складські приміщення та прилеглі лісові масиви. Пожежні розрахунки та військові команди приборкували вогонь на площі понад кілька гектарів. Удар порушив логістичний ланцюг постачання малих катерів та підрозділів берегової оборони РФ у кримському секторі.",
      "source": "СБС ЗСУ, окупаційна адміністрація Севастополя, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Sevastopol (Balaklava District, Inzhir / Cape Aiya)",
      "target": "Black Sea Fleet Logistics Supply & Fuel Depot (Inzhir / Cape Aiya / Balaklava District)",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On August 9, 2026, Ukrainian attack drones carried out a precision strike on Russian Black Sea Fleet logistic storage and fuel depots located in the Inzhir area near Cape Aiya, Sevastopol. Russian forces utilized these sheltered coastal military positions for storing fuel supplies and tactical gear dedicated to naval infantry and patrol boats. Impacting kamikaze UAVs detonated inside the storage facility, triggering a massive fire that consumed warehouse infrastructure and adjacent terrain. Military firefighting units battled the flames across several hectares throughout the day. The strike disrupted supply pipelines supporting Russian light naval craft and coastal defense units based along the Crimean Peninsula.",
      "source": "Unmanned Systems Forces of AFU, Sevastopol Operational HQ, OSINT (Astra), Media"
    }
  },
  {
    "date": "09.08.2026",
    "lat": 50.5958,
    "lng": 36.5872,
    "distance": calcMinDistance(50.5958, 36.5872),
    "ru": {
      "region": "Белгородская область, г. Белгород (Северная промышленная зона)",
      "target": "Производственный комплекс ВПК и материально-технического снабжения в промышленной зоне Белгорода",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "9 августа 2026 года Силы обороны Украины нанесли групповой удар беспилотниками по объектам производственно-складской инфраструктуры ВПК в промышленной зоне Белгорода. В данном промрайоне расположены предприятия металлообработки и ремонтно-механические цеха, выполняющие заказы Министерства обороны РФ по ремонту бронетехники и изготовлению защитных конструкций. Беспилотники преодолели локальные средства ПВО, зафиксированы прямые попадания по цехам и складам снабжения. На промышленных объектах начались масштабные пожары, сопровождавшиеся разрушением крыш и производственных линий. Атака нанесла ущерб мощностям по ремонту военной техники и временно парализовала работу оборонного узла.",
      "source": "Генштаб ВСУ, губернатор Гладков, OSINT (Astra, Пепел), СМИ"
    },
    "uk": {
      "region": "Бєлгородська область, м. Бєлгород (Північна промислова зона)",
      "target": "Виробничий комплекс ВПК та матеріально-технічного постачання у промисловій зоні Бєлгорода",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "9 серпня 2026 року Сили оборони України завдали групового удару безпілотниками по об'єктах виробничо-складської інфраструктури ВПК у промисловій зоні Бєлгорода. У цьому промрайоні розташовані підприємства металообробки та ремонтно-механічні цехи, що виконують замовлення Міністерства оборони РФ з ремонту бронетехніки та виготовлення захисних конструкцій. Безпілотники подолали локальні засоби ПВО, зафіксовано прямі влучання по цехах та складах постачання. На промислових об'єктах розпочалися масштабні пожежі, що супроводжувалися руйнуванням покрівель та виробничих ліній. Атака завдала шкоди потужностям з ремонту військової техніки та тимчасово паралізувала роботу оборонного вузла.",
      "source": "Генштаб ЗСУ, губернатор Гладков, OSINT (Astra, Пепел), ЗМІ"
    },
    "en": {
      "region": "Belgorod Oblast, Belgorod (Northern Industrial Area)",
      "target": "Defense Supply & Repair Industrial Facility (Belgorod Industrial District)",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On August 9, 2026, the Ukrainian Armed Forces executed a synchronized strike using loitering munitions against military-industrial manufacturing and storage sites in Belgorod's industrial zone. The target area houses metalworking, machinery, and equipment repair plants contracted by the Russian Ministry of Defense to service armored vehicles and fabricate defensive structures. Low-flying drones bypassed local air defense batteries, scoring direct hits on assembly workshops and logistics warehouses. The strikes triggered widespread fires, causing severe structural collapse of roofs and machinery lines. The action damaged critical military repair infrastructure and disrupted logistics operations supporting frontline combat units.",
      "source": "General Staff of AFU, Governor Gladkov, OSINT (Astra, Pepel), Media"
    }
  },
  {
    "date": "09.08.2026",
    "lat": 51.5647,
    "lng": 34.6828,
    "distance": calcMinDistance(51.5647, 34.6828),
    "ru": {
      "region": "Курская область, Рыльский район",
      "target": "Передовой склад ГСМ и материально-технического обеспечения группировки войск «Север» в Рыльском районе",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В течение 9 августа 2026 года украинские ударные БПЛА поразили передовой склад горюче-смазочных материалов и материально-технического обеспечения группировки войск РФ «Север» в Рыльском районе Курской области. Объект использовался российским командованием как промежуточная база снабжения дизельным топливом, бензином и боеприпасами для подразделений, действующих в приграничной полосе. Несколько ударных дронов успешно атаковали емкости с горючим и ангары хранения техники, вызвав детонацию и сильное возгорание. Огонь и густой дым фиксировались местными жителями и спутниковыми системами контроля. Успешный удар усложнил заправку бронетехники и снабжение группировки прикрытия границы РФ.",
      "source": "Генштаб ВСУ, ГУР МО, врио губернатора Смирнов, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Курська область, Рильський район",
      "target": "Передовий склад ПММ та матеріально-технічного забезпечення угруповання військ «Север» у Рильському районі",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Протягом 9 серпня 2026 року українські ударні БПЛА уразили передовий склад пально-мастильних матеріалів та матеріально-технічного забезпечення угруповання військ РФ «Север» у Рильському районі Курської області. Об'єкт використовувався російським командуванням як проміжна база постачання дизельним пальним, бензином та боєприпасами для підрозділів, що діють у прикордонній смузі. Кілька ударних дронів успішно атакували ємності з пальним та ангари зберігання техніки, спричинивши детонацію й сильне займання. Вогонь та густий дим фіксувалися місцевими мешканцями та супутниковими системами контролю. Успішний удар ускладнив заправку бронетехніки та постачання угруповання прикриття кордону РФ.",
      "source": "Генштаб ЗСУ, ГУР МО, т.в.о. губернатора Смирнов, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Kursk Oblast, Rylsky District",
      "target": "Tactical Fuel & Logistics Supply Depot of Sever Force Grouping (Rylsky District)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Throughout August 9, 2026, Ukrainian attack UAVs hit a forward fuel and logistics depot belonging to Russia's \"Sever\" grouping of forces in the Rylsky District of Kursk Oblast. The site served as a tactical staging area for distributing diesel, gasoline, and combat supplies to Russian military units deployed near the border. Multiple loitering munitions struck fuel storage tanks and equipment maintenance hangars, triggering secondary explosions and a major blaze. Heavy flames and smoke columns were documented by local eyewitnesses and satellite thermal monitoring. The destruction of this tactical supply node disrupted fuel replenishment for armored vehicles operating in the border sector.",
      "source": "General Staff of AFU, GUR MO, Acting Governor Smirnov, OSINT (Astra), Media"
    }
  }
];

// Check details lengths (must be strictly between 600 and 1000 characters)
let hasErrors = false;
newItems.forEach((item, idx) => {
  ['ru', 'uk', 'en'].forEach(lang => {
    const len = item[lang].details.length;
    console.log(`Item ${idx} (${item[lang].target.substring(0, 30)}... - ${lang}) details length: ${len} chars`);
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

// Remove existing 09.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '09.08.2026');
data.unshift(...newItems);

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log('Successfully updated data.js with 9 August 2026 strikes!');
