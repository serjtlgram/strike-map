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
    "date": "01.09.2026",
    "lat": 59.6917,
    "lng": 28.4083,
    "distance": calcMinDistance(59.6917, 28.4083),
    "ru": {
      "region": "Ленинградская область, Кингисеппский район (Морской порт Усть-Луга)",
      "target": "Комплекс переработки газового конденсата ООО «НОВАТЭК-Усть-Луга»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 1 сентября 2026 года Главное управление разведки МО Украины совместно с Силами обороны в рамках операции Deepstrike нанесли результативный удар по комплексу «НОВАТЭК-Усть-Луга» в Ленинградской области. Беспилотники преодолели свыше 900 километров и атаковали ключевое технологическое оборудование предприятия. На объекте зафиксированы прилёты по установкам переработки стабильного газового конденсата и сопутствующей инфраструктуре, после чего вспыхнул крупный пожар. Предприятие производит нафту, керосин, мазут и дизель, обеспечивая экспорт углеводородов и снабжение Балтийского флота. Губернатор Александр Дрозденко подтвердил налет десятков БПЛА и возгорание в порту. Из-за атаки в воздушном пространстве региона вводился план «Ковер», а работа морского терминала была приостановлена.",
      "source": "ГУР МО, Силы обороны Украины, губернатор Дрозденко, OSINT"
    },
    "uk": {
      "region": "Ленінградська область, Кінгісеппський район (Морський порт Усть-Луга)",
      "target": "Комплекс переробки газового конденсату ТОВ «НОВАТЕК-Усть-Луга»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч на 1 вересня 2026 року Головне управління розвідки МО України спільно з Силами оборони в межах операції Deepstrike завдали результативного удару по комплексу «НОВАТЕК-Усть-Луга» в Ленінградській області. Безпілотники подолали понад 900 кілометрів та атакували ключове технологічне обладнання підприємства. На об'єкті зафіксовано влучання в установки переробки стабільного газового конденсату й супутню інфраструктуру, після чого спалахнула велика пожежа. Підприємство виробляє нафту, гас, мазут і дизель, забезпечуючи експорт палива та постачання Балтійського флоту. Губернатор Олександр Дрозденко підтвердив наліт десятків БПЛА і займання в порту. Через атаку в повітряному просторі регіону вводився план «Килим», а роботу морського термінала було призупинено.",
      "source": "ГУР МО, Сили оборони України, губернатор Дрозденко, OSINT"
    },
    "en": {
      "region": "Leningrad Oblast, Kingiseppsky District (Port of Ust-Luga)",
      "target": "Novatek-Ust-Luga Gas Condensate Processing Plant",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of September 1, 2026, the Main Intelligence Directorate of Ukraine alongside defense forces struck the Novatek-Ust-Luga industrial facility in Leningrad Oblast during a Deepstrike operation. Ukrainian drones covered over 900 kilometers to target primary technological equipment at the processing terminal. Direct hits damaged stable gas condensate fractionation units and adjacent pipeline infrastructure, igniting a large-scale fire. The plant refines condensate into naphtha, jet fuel, fuel oil, and diesel, supporting both energy exports and Baltic fleet logistics. Regional Governor Alexander Drozdenko confirmed a mass drone assault and an active blaze in the port area. The attack triggered emergency airspace shutdowns under the Kovyor plan and forced a halt in maritime loading operations.",
      "source": "DIU, Ukrainian Defense Forces, Governor Drozdenko, OSINT"
    }
  },
  {
    "date": "01.09.2026",
    "lat": 55.6536,
    "lng": 37.8078,
    "distance": calcMinDistance(55.6536, 37.8078),
    "ru": {
      "region": "Москва, район Капотня",
      "target": "Московский НПЗ (АО «Газпромнефть-МНПЗ») — технологическая установка «Евро+»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "1 сентября 2026 года в ходе одной из самых масштабных атак украинские дальнобойные дроны поразили Московский нефтеперерабатывающий завод компании «Газпром нефть» в Капотне. Мощность этого НПЗ составляет 11 миллионов тонн нефти в год, он обеспечивает около 40-50% потребностей столичного региона в бензине и авиакеросине. Прямое попадание беспилотника и падение обломков вызвали пожар пятого ранга сложности в районе отдельно стоящего технического помещения и комбинированной установки «Евро+». Данная установка отвечает за половину первичной перегонки нефти на предприятии, из-за повреждений технологический процесс был экстренно остановлен. Мэр Москвы Сергей Собянин подтвердил факт атаки дронов на объект. В столичных аэропортах Внуково, Домодедово и Жуковский объявлялись масштабные задержки рейсов.",
      "source": "Генштаб ВСУ, мэр Москвы Собянин, Reuters, OSINT (Astra, Baza)"
    },
    "uk": {
      "region": "Москва, район Капотня",
      "target": "Московський НПЗ (АТ «Газпромнефть-МНПЗ») — технологічна установка «Євро+»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "1 вересня 2026 року під час однієї з наймасштабніших атак українські далекобійні дрони уразили Московський нафтопереробний завод компанії «Газпром нефть» у Капотні. Потужність цього НПЗ становить 11 мільйонів тонн нафти на рік, він забезпечує близько 40-50% потреб столичного регіону в бензині та авіагасі. Пряме влучання безпілотника та падіння уламків спричинили пожежу п'ятого рангу складності в районі окремо розташованого технічного приміщення й комбінованої установки «Євро+». Ця установка відповідає за половину первинної перегонки нафти на підприємстві, через пошкодження технологічний процес було екстрено зупинено. Мер Москви Сергій Собянін підтвердив факт атаки дронів на об'єкт. У столичних аеропортах Внуково, Домодєдово та Жуковський оголошувалися масштабні затримки рейсів.",
      "source": "Генштаб ЗСУ, мер Москви Собянін, Reuters, OSINT (Astra, Baza)"
    },
    "en": {
      "region": "Moscow, Kapotnya District",
      "target": "Moscow Oil Refinery (JSC Gazpromneft-MNPZ) — Euro+ Processing Unit",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On September 1, 2026, during a massive drone raid, Ukrainian long-range UAVs struck the Moscow Oil Refinery operated by Gazprom Neft in the Kapotnya district. With an annual capacity of 11 million tons, the facility supplies roughly 40-50% of the gasoline and jet fuel consumed across the Moscow metropolitan area. Direct drone strikes and falling debris ignited a maximum grade-5 fire affecting an auxiliary technical facility and the primary Euro+ processing unit. The damaged Euro+ complex handles half of the refinery's crude distillation capacity, prompting an emergency operational shutdown. Moscow Mayor Sergey Sobyanin confirmed the UAV impact on the refinery grounds. Widespread flight delays and ground stops were instituted across Vnukovo, Domodedovo, and Zhukovsky airports.",
      "source": "General Staff of AFU, Moscow Mayor Sobyanin, Reuters, OSINT (Astra, Baza)"
    }
  },
  {
    "date": "01.09.2026",
    "lat": 56.7388,
    "lng": 36.7865,
    "distance": calcMinDistance(56.7388, 36.7865),
    "ru": {
      "region": "Тверская область, Конаковский район, г. Конаково",
      "target": "Конаковская ГРЭС (ПАО «ЭЛ5-Энерго») — энергоблоки и инфраструктура станции",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 1 сентября 2026 года группа украинских ударных БПЛА атаковала Конаковскую ГРЭС в Тверской области — одну из крупнейших тепловых электростанций Центральной России мощностью 2520 МВт. Станция играет ключевую роль в энергоснабжении промышленных предприятий столичного региона и оборонных заводов Тверской и Московской областей. Несколько дронов прорвались к территории объекта, нанеся удары по инфраструктуре энергоблоков и распределительным подстанциям. На территории электростанции вспыхнул сильный пожар с плотным столбом дыма, который засняли многочисленные очевидцы. Губернатор региона Игорь Руденя заявил о перехвате беспилотников, однако кадры с места событий подтвердили прямое попадание в производственную зону. Удар нарушил стабильность местной энергосети и привел к экстренным переключениям мощностей.",
      "source": "Силы обороны Украины, губернатор Тверской области Руденя, OSINT (Astra, Baza)"
    },
    "uk": {
      "region": "Тверська область, Конаковський район, м. Конаково",
      "target": "Конаковська ДРЕС (ПАТ «ЕЛ5-Енерго») — енергоблоки та інфраструктура станції",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч на 1 вересня 2026 року група українських ударних БПЛА атакувала Конаковську ДРЕС у Тверській області — одну з найбільших теплових електростанцій Центральної Росії потужністю 2520 МВт. Станція відіграє ключову роль в енергопостачанні промислових підприємств столичного регіону та оборонних заводів Тверської й Московської областей. Кілька дронів прорвалися до території об'єкта, завдавши ударів по інфраструктурі енергоблоків і розподільчих підстанціях. На території електростанції спалахнула сильна пожежа зі щільним стовпом диму, що зафіксували численні очевидці. Губернатор регіону Ігор Руденя заявив про перехоплення безпілотників, проте кадри з місця подій підтвердили пряме влучання у виробничу зону. Удар порушив стабільність місцевої енергомережі та призвів до екстрених перемикань потужностей.",
      "source": "Сили оборони України, губернатор Тверської області Руденя, OSINT (Astra, Baza)"
    },
    "en": {
      "region": "Tver Oblast, Konakovo District, Konakovo",
      "target": "Konakovo Power Station (GRES) (PJSC EL5-Energo) — Power Generation Units",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "On the night of September 1, 2026, Ukrainian attack drones struck the Konakovo State District Power Station in Tver Oblast, one of central Russia's largest thermal power plants boasting a 2,520 MW capacity. The plant serves as an energy backbone for industrial complexes and military-industrial manufacturing sites across Moscow and Tver Oblasts. Multiple drones penetrated localized air defense umbrellas, impacting generation block facilities and high-voltage transformer yards. Severe fires erupted across the plant grounds, sending thick columns of smoke into the sky as verified by extensive bystander footage. Tver Governor Igor Rudenya claimed drones were intercepted, yet geo-confirmed videos proved direct hits on industrial infrastructure. The strike disrupted grid stability, forcing emergency load transfers.",
      "source": "Ukrainian Defense Forces, Tver Governor Rudenya, OSINT (Astra, Baza)"
    }
  },
  {
    "date": "01.09.2026",
    "lat": 56.7020,
    "lng": 36.7620,
    "distance": calcMinDistance(56.7020, 36.7620),
    "ru": {
      "region": "Тверская область, Конаковский район, район г. Конаково",
      "target": "Газораспределительная станция (ГРС) «Конаково» магистрального газопровода",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "1 сентября 2026 года в Конаковском районе Тверской области украинский беспилотник нанес точный удар по газораспределительной станции (ГРС) «Конаково». Данный объект газотранспортной инфраструктуры обеспечивает редуцирование давления и подачу природного газа как для турбин Конаковской ГРЭС, так и в распределительные сети промышленной зоны. В результате детонации боевой части дрона на технологической площадке был поврежден узел распределения газа, что вызвало мощное факельное горение. Местные жители опубликовали кадры сильного пожара с заревом, видимым за несколько километров от эпицентра. Повреждение распределительного узла создало аварийную ситуацию в подаче топлива на электростанцию и соседние промышленные объекты. Экстренные службы оперативно перекрыли магистральную задвижку для локализации возгорания.",
      "source": "OSINT (Astra, Baza), очевидцы, региональные СМИ"
    },
    "uk": {
      "region": "Тверська область, Конаковський район, район м. Конаково",
      "target": "Газорозподільна станція (ГРС) «Конаково» магістрального газопроводу",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "1 вересня 2026 року в Конаковському районі Тверської області український безпілотник завдав точного удару по газорозподільній станції (ГРС) «Конаково». Цей об'єкт газотранспортної інфраструктури забезпечує редукування тиску та постачання природного газу як для турбін Конаковської ДРЕС, так і в розподільчі мережі промислової зони. Унаслідок детонації бойової частини дрона на технологічному майданчику було пошкоджено вузол розподілу газу, що спричинило потужне факельне горіння. Місцеві жителі оприлюднили кадри сильної пожежі із загравою, яку було видно за кілька кілометрів від епіцентру. Пошкодження розподільчого вузла створило аварійну ситуацію в подачі палива на електростанцію та сусідні промислові об'єкти. Екстрені служби оперативно перекрили магістральну засувку для локалізації займання.",
      "source": "OSINT (Astra, Baza), очевидці, регіональні ЗМІ"
    },
    "en": {
      "region": "Tver Oblast, Konakovo District, near Konakovo",
      "target": "Konakovo Gas Distribution Station (GDS) of the Trunk Pipeline Network",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On September 1, 2026, a Ukrainian attack drone hit the Konakovo Gas Distribution Station in Tver Oblast. The gas infrastructure hub regulates trunk pipeline pressure and feeds natural gas directly to the turbines of Konakovo GRES power plant and surrounding industrial facilities. The warhead detonation damaged valve manifolds and metering equipment, sparking a tall gas flare fire that lit up the night sky. Local residents recorded vivid footage of intense flames and heavy black smoke visible from miles away. Damaging this distribution node compromised fuel delivery to the regional power plant and nearby industrial enterprises. Emergency teams immediately isolated main valves to depressurize pipeline segments and contain the burning gas.",
      "source": "OSINT (Astra, Baza), Eyewitness accounts, Regional Media"
    }
  },
  {
    "date": "01.09.2026",
    "lat": 54.8580,
    "lng": 38.1630,
    "distance": calcMinDistance(54.8580, 38.1630),
    "ru": {
      "region": "Московская область, г. Кашира",
      "target": "Каширская ГРЭС имени Г. М. Кржижановского (ПАО «Интер РАО»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 1 сентября 2026 года группа украинских дронов-камикадзе атаковала территорию Каширской ГРЭС на юге Московской области. Тепловая электростанция мощностью 410 МВт расположена на берегу реки Оки и является важным резервным узлом Московской энергосистемы, обеспечивая резервирование питания южного сектора столицы и промышленных предприятий. По меньшей мере три беспилотника пытались нанести удар по объектам генерации и распределительным устройствам станции. Местные жители сообщали о звуках пролёта дронов, взрывах и интенсивной стрельбе стрелкового оружия и ПВО. Глава городского округа Михаил Шувалов признал факт попытки атаки на электростанцию. Несмотря на заявления властей об отсутствии разрушений, на объект были стянуты усиленные расчеты пожарных и спецслужб.",
      "source": "Силы обороны Украины, глава округа Шувалов, OSINT (Astra, Baza)"
    },
    "uk": {
      "region": "Московська область, м. Кашира",
      "target": "Каширська ДРЕС імені Г. М. Кржижановського (ПАТ «Інтер РАО»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч на 1 вересня 2026 року група українських дронів-камікадзе атакувала територію Каширської ДРЕС на півдні Московської області. Теплова електростанція потужністю 410 МВт розташована на березі річки Оки та є важливим резервним вузлом Московської енергосистеми, що забезпечує живлення південного сектора столиці й промислових підприємств. Щонайменше три безпілотники намагалися завдати удару по об'єктах генерації та розподільчих пристроях станції. Місцеві жителі повідомляли про звуки прольоту дронів, вибухи та інтенсивну стрілянину стрілецької зброї й ППО. Глава міського округу Михайло Шувалов визнав факт спроби атаки на електростанцію. Попри заяви влади про відсутність руйнувань, до об'єкта було стягнуто посилені розрахунки пожежників та спецслужб.",
      "source": "Сили оборони України, глава округу Шувалов, OSINT (Astra, Baza)"
    },
    "en": {
      "region": "Moscow Oblast, Kashira",
      "target": "Kashira Power Station (GRES) (PJSC Inter RAO)",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "On the night of September 1, 2026, a flight of Ukrainian strike drones targeted the Kashira State District Power Station in southern Moscow Oblast. With a generating capacity of 410 MW, the station on the Oka River serves as a strategic reserve power hub for the southern Moscow grid and regional industrial facilities. At least three kamikaze UAVs targeted the power generation complex and outdoor switchgear substations. Residents reported loud engine whines, multiple explosions, and heavy anti-aircraft machine gun fire echoing across the district. Head of Kashira district Mikhail Shuvalov acknowledged the drone attack on the power plant. While regional authorities denied major infrastructure damage, emergency response crews and specialized fire brigades were rapidly deployed to the scene.",
      "source": "Ukrainian Defense Forces, District Head Shuvalov, OSINT (Astra, Baza)"
    }
  },
  {
    "date": "01.09.2026",
    "lat": 53.1258,
    "lng": 49.9086,
    "distance": calcMinDistance(53.1258, 49.9086),
    "ru": {
      "region": "Самарская область, г. Новокуйбышевск",
      "target": "Новокуйбышевский НПЗ (АО «Новокуйбышевский нефтеперерабатывающий завод»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 1 сентября 2026 года дальнобойные украинские беспилотники нанесли повторный массированный удар по Новокуйбышевскому НПЗ «Роснефти» в Самарской области на удалении порядка 990 км от границы. Предприятие мощностью 8,8 млн тонн нефти в год специализируется на выпуске моторных топлив, реактивного керосина и масел для военной техники Центрального военного округа. Очевидцы зафиксировали серию мощных детонаций над промзоной города и попытки ПВО сбить атакующие дроны. В результате налета в Новокуйбышевске был официально введен режим чрезвычайной ситуации (ЧС), сообщалось о двух пострадавших и выбитых окнах в жилом секторе от взрывных волн. На территории завода возникло задымление на вспомогательных технологических линиях. В самарском аэропорту Курумоч вводился план «Ковер» с остановкой всех авиарейсов.",
      "source": "Силы обороны Украины, губернатор Федорищев, ASTRA, СМИ"
    },
    "uk": {
      "region": "Самарська область, м. Новокуйбишевськ",
      "target": "Новокуйбишевський НПЗ (АТ «Новокуйбишевський нафтопереробний завод»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч на 1 вересня 2026 року далекобійні українські безпілотники завдали повторного масованого удару по Новокуйбишевському НПЗ «Роснефти» в Самарській області на відстані близько 990 км від кордону. Підприємство потужністю 8,8 млн тонн нафти на рік спеціалізується на випуску моторних палив, реактивного гасу та мастил для військової техніки Центрального військового округу. Очевидці зафіксували серію потужних детонацій над промзоною міста й спроби ППО збити атакуючі дрони. У результаті нальоту в Новокуйбишевську було офіційно введено режим надзвичайної ситуації (НС), повідомлялося про двох постраждалих та вибиті шибки в житловому секторі від вибухових хвиль. На території заводу виникло задимлення на допоміжних технологічних лініях. У самарському аеропорту Курумоч вводився план «Килим» із зупинкою всіх рейсів.",
      "source": "Сили оборони України, губернатор Федорищев, ASTRA, ЗМІ"
    },
    "en": {
      "region": "Samara Oblast, Novokuibyshevsk",
      "target": "Novokuibyshevsk Oil Refinery (JSC Novokuibyshevsk Refinery)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of September 1, 2026, Ukrainian long-range strike drones delivered a massive raid against Rosneft's Novokuibyshevsk Oil Refinery in Samara Oblast, nearly 990 km from the border. With an annual refining throughput of 8.8 million tons, the plant produces military-grade motor fuels, aviation kerosene, and specialized lubricants for Central Military District units. Local observers documented a series of heavy explosions over the industrial district as regional anti-aircraft defenses engaged incoming UAVs. City authorities declared an official State of Emergency across Novokuibyshevsk following shockwave damage to nearby residential windows and two civilian injuries. Localized smoke plumes rose over refinery processing units, while Kurumoch International Airport suspended all flight departures under the Kovyor alert.",
      "source": "Ukrainian Defense Forces, Governor Fedorishchev, ASTRA, Media"
    }
  },
  {
    "date": "01.09.2026",
    "lat": 53.5410,
    "lng": 49.4480,
    "distance": calcMinDistance(53.5410, 49.4480),
    "ru": {
      "region": "Самарская область, г. Тольятти",
      "target": "Промышленная площадка азотно-химического комплекса («Тольяттиазот» / «КуйбышевАзот»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "1 сентября 2026 года группа дальнобойных украинских дронов атаковала стратегический промышленно-химический узел в городе Тольятти Самарской области. В северном промышленном районе города сосредоточены крупнейшие химические предприятия России — ПАО «Тольяттиазот» и ПАО «КуйбышевАзот», выпускающие аммиак, карбамид, азотные удобрения и химические полупродукты, критически важные для производства взрывчатых веществ и порохов ВПК РФ. В городе прогремела череда мощных взрывов, после чего над промзоной вспыхнул заметный пожар. По сообщениям местных мониторинговых каналов и жителей, беспилотники пикировали на объекты технологической инфраструктуры предприятий. В регионе более пяти часов действовал режим беспилотной опасности, а оперативные службы оцепили район происшествия.",
      "source": "OSINT, местные СМИ, губернатор Самарской области"
    },
    "uk": {
      "region": "Самарська область, м. Тольятті",
      "target": "Промисловий майданчик азотно-хімічного комплексу («Тольяттіазот» / «КуйбишевАзот»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "1 вересня 2026 року група далекобійних українських дронів атакувала стратегічний промислово-хімічний вузол у місті Тольятті Самарської області. У північному промисловому районі міста зосереджені найбільші хімічні підприємства Росії — ПАТ «Тольяттіазот» та ПАТ «КуйбишевАзот», які виробляють аміак, карбамід, азотні добрива й хімічні напівпродукти, критично важливі для виробництва вибухівки та порохів ВПК РФ. У місті пролунала низка потужних вибухів, після чого над промзоною спалахнула помітна пожежа. За повідомленнями місцевих моніторингових каналів і жителів, безпілотники пікірували на об'єкти технологічної інфраструктури підприємств. У регіоні понад п'ять годин діяв режим безпілотної небезпеки, а оперативні служби оточили район події.",
      "source": "OSINT, місцеві ЗМІ, губернатор Самарської області"
    },
    "en": {
      "region": "Samara Oblast, Tolyatti",
      "target": "Tolyatti Nitrogen Chemical Industrial Complex (TogliattiAzot / KuibyshevAzot)",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "On September 1, 2026, long-range Ukrainian strike drones targeted the strategic chemical and industrial hub of Tolyatti in Samara Oblast. The city's northern industrial belt houses major chemical manufacturers PJSC TogliattiAzot and PJSC KuibyshevAzot, key suppliers of ammonia, urea, and nitrate compounds vital for manufacturing Russian military explosives and gunpowder. A succession of loud detonations shook the city, followed by a noticeable fire erupting within the industrial district. Local monitoring channels and residents reported drones diving toward chemical infrastructure and production facilities. Regional authorities maintained a drone danger alert for over five hours, dispatching emergency units to cordon off affected industrial sectors.",
      "source": "OSINT, Local Media, Samara Regional Governor"
    }
  },
  {
    "date": "01.09.2026",
    "lat": 50.6030,
    "lng": 36.0150,
    "distance": calcMinDistance(50.6030, 36.0150),
    "ru": {
      "region": "Белгородская область, Борисовский район, пгт Борисовка",
      "target": "Склад горюче-смазочных материалов (ГСМ) подразделений ВС РФ",
      "category": "Нефтегаз",
      "weapon": "Дрон / Ракета",
      "details": "1 сентября 2026 года Генеральный штаб ВСУ официально сообщил об успешном поражении полевого склада горюче-смазочных материалов российских войск в районе пгт Борисовка Белгородской области. Данный объект топливной логистики использовался для заправки бронетехники, артиллерийских тягачей и армейских грузовиков белгородской группировки противника. Точные удары средств поражения вызвали детонацию резервуаров с бензином и дизельным топливом, приведшую к сильному пожару на складе. В результате уничтожения запасов горючего подразделения оккупантов в приграничной полосе столкнулись с перебоями в заправке боевых машин. Ликвидация склада ГСМ снизила оперативную мобильность российских частей на харьковско-белгородском направлении.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Бєлгородська область, Борисівський район, смт Борисівка",
      "target": "Склад пально-мастильних матеріалів (ПММ) підрозділів ЗС РФ",
      "category": "Нафтогаз",
      "weapon": "Дрон / Ракета",
      "details": "1 вересня 2026 року Генеральний штаб ЗСУ офіційно повідомив про успішне ураження польового складу пально-мастильних матеріалів російських військ у районі смт Борисівка Бєлгородської області. Цей об'єкт паливної логістики використовувався для заправки бронетехніки, артилерійських тягачів та армійських вантажівок бєлгородського угруповання противника. Точні удари засобів ураження спричинили детонацію резервуарів із бензином та дизельним пальним, що призвело до сильної пожежі на складі. Унаслідок знищення запасів пального підрозділи окупантів у прикордонній смузі зіткнулися з перебоями в заправці бойових машин. Ліквідація складу ПММ знизила оперативну мобільність російських частин на харківсько-бєлгородському напрямку.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Belgorod Oblast, Borisovka District, Borisovka",
      "target": "Russian Armed Forces Fuel and Lubricants (POL) Supply Depot",
      "category": "Oil & Gas",
      "weapon": "Drone / Missile",
      "details": "On September 1, 2026, the General Staff of the Armed Forces of Ukraine confirmed the successful destruction of a Russian military fuel and lubricants (POL) depot near Borisovka, Belgorod Oblast. The logistics fuel depot played an essential role in refueling combat armored vehicles, artillery prime movers, and transport convoys operating in the Belgorod border sector. Precision strikes ignited fuel tanks containing diesel and gasoline, triggering severe secondary detonations and heavy flames across the facility. The loss of these stored petroleum reserves caused acute refueling shortages for frontline Russian mechanized units. Neutralizing the POL depot impeded operational mobility and tactical logistics along the Kharkiv-Belgorod axis.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "01.09.2026",
    "lat": 45.1167,
    "lng": 33.9780,
    "distance": calcMinDistance(45.1167, 33.9780),
    "ru": {
      "region": "АР Крым, Симферопольский район, пгт Гвардейское",
      "target": "Пункт хранения, технической подготовки и боевого пуска ударных БПЛА на авиабазе Гвардейское",
      "category": "Военный аэродром",
      "weapon": "Дрон / Ракета",
      "details": "1 сентября 2026 года Силы обороны Украины нанесли результативный огневой удар по военному аэродрому и прилегающей инфраструктуре в пгт Гвардейское в оккупированном Крыму. Генштаб ВСУ подтвердил, что целью удара стали специализированные площадки хранения, технического обслуживания и боевых пусков ударных дронов типа «Шахед» («Герань-2») и БПЛА-камикадзе. В результате точного прилёта на объекте сдетонировал склад с готовыми к применению беспилотниками и компонентами топлива, вспыхнул масштабный пожар. Были повреждены пусковые установки, мобильные пункты управления и оборудование предполетной проверки. Уничтожение стартовой позиции сорвало запланированные пуски дронов по южным областям Украины.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "АР Крим, Сімферопольський район, смт Гвардійське",
      "target": "Пункт зберігання, технічної підготовки та бойового пуску ударних БпЛА на авіабазі Гвардійське",
      "category": "Військовий аеродром",
      "weapon": "Дрон / Ракета",
      "details": "1 вересня 2026 року Сили оборони України завдали результативного вогневого удару по військовому аеродрому та прилеглій інфраструктурі в смт Гвардійське в окупованому Криму. Генштаб ЗСУ підтвердив, що ціллю удару стали спеціалізовані майданчики зберігання, технічного обслуговування та бойових пусків ударних дронів типу «Шахед» («Герань-2») і БпЛА-камікадзе. Унаслідок точного прильоту на об'єкті здетонував склад із готовими до застосування безпілотниками та компонентами палива, спалахнула масштабна пожежа. Було пошкоджено пускові установки, мобільні пункти управління та обладнання передпольотної перевірки. Знищення стартової позиції зірвало заплановані пуски дронів по південних областях України.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Crimea, Simferopol District, Hvardiiske",
      "target": "UAV Storage, Preparation, and Launch Facility at Hvardiiske Airbase",
      "category": "Military Airbase",
      "weapon": "Drone / Missile",
      "details": "On September 1, 2026, Ukrainian defense forces executed a precision strike on Hvardiiske Airbase and its surrounding military infrastructure in occupied Crimea. The AFU General Staff verified that the strike targeted specialized storage hangars, technical assembly bays, and launch pads used for Shahed-type one-way attack drones. Direct hits triggered violent secondary explosions of prepped UAVs and fueling systems, igniting a widespread fire across the base. The attack destroyed pneumatic launchers, mobile ground control stations, and diagnostic equipment. Knocking out this launch site disrupted Russian drone swarm operations and curtailed planned strike missions against southern Ukraine.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "01.09.2026",
    "lat": 44.9750,
    "lng": 34.0620,
    "distance": calcMinDistance(44.9750, 34.0620),
    "ru": {
      "region": "АР Крым, Симферопольский район, с. Мирное",
      "target": "Защищенный узел военной связи группировки ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "1 сентября 2026 года Силы обороны Украины успешно поразили защищенный узел военной связи оккупационных войск в районе села Мирное Симферопольского района Крыма. Данный объект обеспечивал закрытую радиорелейную, проводную и спутниковую связь между штабом группировки войск и подчиненными подразделениями ПВО и авиации на полуострове. Прямое попадание боеприпасов разрушило аппаратный модуль управления, антенные вышки и серверные стойки криптографической защиты. Вывод узла из строя привел к частичной потере управления и нарушению координации противовоздушной обороны в центральной части Крыма. Успешное выполнение боевой задачи официально зафиксировано в сводке Генштаба ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "АР Крим, Сімферопольський район, с. Мирне",
      "target": "Захищений вузол військового зв'язку угруповання ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "1 вересня 2026 року Сили оборони України успішно уразили захищений вузол військового зв'язку окупаційних військ у районі села Мирне Сімферопольського району Криму. Цей об'єкт забезпечував закритий радіорелейний, дротовий та супутниковий зв'язок між штабом угруповання військ і підпорядкованими підрозділами ППО та авіації на півострові. Пряме влучання боєприпасів зруйнувало апаратний модуль управління, антенні вежі та серверні стійки криптографічного захисту. Виведення вузла з ладу призвело до часткової втрати управління й порушення координації протиповітряної оборони в центральній частині Криму. Успішне виконання бойового завдання офіційно зафіксовано у зведенні Генштабу ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Crimea, Simferopol District, Myrne",
      "target": "Russian Armed Forces Hardened Military Communications Node",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On September 1, 2026, Ukrainian forces delivered a precision strike disabling a fortified Russian military communications node near the village of Myrne in Crimea's Simferopol district. The facility served as a central hub routing encrypted radio-relay, landline, and satellite communications between Russian regional command headquarters and subordinated anti-aircraft units. Precision impacts destroyed the main equipment shelter, transmitter antenna towers, and cryptographic server racks. The loss of this node degraded command-and-control integrity and disrupted coordinated air defense operations across central Crimea. The operation was officially confirmed in the AFU General Staff operational bulletin.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "01.09.2026",
    "lat": 48.0159,
    "lng": 37.8028,
    "distance": calcMinDistance(48.0159, 37.8028),
    "ru": {
      "region": "Донецкая область, г. Донецк (временно оккупированная территория)",
      "target": "База хранения, предполетной подготовки и запуска ударных БПЛА оккупантов",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "1 сентября 2026 года Генеральный штаб ВСУ подтвердил уничтожение крупного пункта хранения, технической подготовки и пуска ударных дронов российских войск в оккупированном Донецке. На закрытой промышленной территории противник развернул цеха досборки FPV-дронов, склады барражирующих боеприпасов и стартовые позиции операторов беспилотников. В результате высокоточного огневого налета произошла серия детонаций боевых частей БПЛА, сопровождавшаяся сильным пожаром и обрушением производственных ангаров. Были ликвидированы накопленные запасы дронов и выведено из строя оборудование радиоуправления. Поражение базы существенно ослабило интенсивность атак беспилотников на донецком направлении фронта.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Донецька область, м. Донецьк (тимчасово окупована територія)",
      "target": "База зберігання, передпольотної підготовки та запуску ударних БпЛА окупантів",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "1 вересня 2026 року Генеральний штаб ЗСУ підтвердив знищення великого пункту зберігання, технічної підготовки та пуску ударних дронів російських військ в окупованому Донецьку. На закритій промисловій території противник розгорнув цехи дозбирання FPV-дронів, склади баражуючих боєприпасів та стартові позиції операторів безпілотників. У результаті високоточного вогневого нальоту сталася серія детонацій бойових частин БпЛА, що супроводжувалася сильною пожежею та обваленням виробничих ангарів. Було ліквідовано накопичені запаси дронів і виведено з ладу обладнання радіокерування. Ураження бази суттєво послабило інтенсивність атак безпілотників на донецькому напрямку фронту.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Donetsk Oblast, Donetsk (Temporarily Occupied Territory)",
      "target": "Russian Military Drone Storage, Assembly, and Launch Base",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On September 1, 2026, the General Staff of the AFU confirmed the destruction of a major Russian military drone storage, assembly, and launch base in occupied Donetsk. Operating from a secured industrial facility, the enemy maintained FPV drone assembly workshops, loitering munition depots, and crew launch positions. Precision strikes triggered violent chain-reaction detonations of stored warheads, causing the structural collapse of assembly hangars and a massive blaze. The strike wiped out significant stockpiles of attack drones and wrecked specialized radio control equipment. Neutralizing this facility curtailed enemy drone strike intensity across the active Donetsk front.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "01.09.2026",
    "lat": 47.4810,
    "lng": 36.2620,
    "distance": calcMinDistance(47.4810, 36.2620),
    "ru": {
      "region": "Запорожская область, Пологовский район, г. Пологи",
      "target": "Передовой командно-наблюдательный пункт (КНП) подразделения ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "1 сентября 2026 года Силы обороны Украины нанесли точечный удар по передовому командно-наблюдательному пункту российских оккупационных войск в городе Пологи Запорожской области. Объект размещался в капитальном укрепленном здании и использовался офицерами штаба для управления обороной рубежей, корректировки артиллерийского огня и распределения резервов. Прямое попадание высокоточного средства поражения пробило перекрытия и вызвало детонацию аппаратуры связи и средств радиоэлектронной борьбы. В результате удара пункт управления был полностью разрушен, среди командного состава зафиксированы потери. Разгром штабного пункта дезорганизовал управление российскими передовыми подразделениями на пологовском направлении.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Запорізька область, Пологівський район, м. Пологи",
      "target": "Передовий командно-спостережний пункт (КСП) підрозділу ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "1 вересня 2026 року Сили оборони України завдали точкового удару по передовому командно-спостережному пункту російських окупаційних військ у місті Пологи Запорізької області. Об'єкт розміщувався в капітальній укріпленій будівлі та використовувався офіцерами штабу для управління обороною рубежів, коригування артилерійського вогню й розподілу резервів. Пряме влучання високоточного засобу ураження пробило перекриття та спричинило детонацію апаратури зв'язку й засобів радіоелектронної боротьби. Унаслідок удару пункт управління було повністю зруйновано, серед командного складу зафіксовано втрати. Розгром штабного пункту дезорганізував управління російськими передовими підрозділами на пологівському напрямку.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Zaporizhzhia Oblast, Polohy District, Polohy",
      "target": "Russian Forward Command and Observation Post (COP)",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On September 1, 2026, Ukrainian defense forces delivered a precision strike against a forward Russian military command and observation post located in Polohy, Zaporizhzhia Oblast. Fortified inside a reinforced facility, the post was used by staff officers to coordinate tactical defenses, adjust artillery fire missions, and maneuver reserve units. Direct impacts by precision-guided munitions breached structural roofs, destroying tactical communication consoles and electronic warfare equipment. The command post was pulverized, inflicting casualties on duty personnel and staff officers. Neutralizing this nerve center disrupted tactical command cohesion and slowed enemy responses in the Polohy sector.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "01.09.2026",
    "lat": 48.8683,
    "lng": 38.3189,
    "distance": calcMinDistance(48.8683, 38.3189),
    "ru": {
      "region": "Луганская область, Северодонецкий район, с. Верхнекаменка",
      "target": "Район сосредоточения вооружения и тяжелой военной техники подразделений ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "1 сентября 2026 года украинские войска нанесли массированный огневой удар по району сосредоточения вооружения и военной техники противника возле села Верхнекаменка в районе Лисичанска. Российское командование использовало данную площадку для ремонта бронемашин, накопления танков и подготовки механизированных подразделений к штурмовым действиям на северском направлении. В результате серии точных попаданий на объекте загорелась стоянка бронетехники и сдетонировали боекомплекты нескольких боевых машин. Противник понес ощутимые потери в танках и боевых машинах пехоты, восстановительные работы в ремзоне были сорваны. Успешное поражение базы подтверждено официальным сообщением Генерального штаба ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Луганська область, Сєвєродонецький район, с. Верхньокам’янка",
      "target": "Район зосередження озброєння та важкої військової техніки підрозділів ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "1 вересня 2026 року українські війська завдали масованого вогневого удару по району зосередження озброєння та військової техніки противника поблизу села Верхньокам’янка в районі Лисичанська. Російське командування використовувало цей майданчик для ремонту бронемашин, накопичення танків та підготовки механізованих підрозділів до штурмових дій на сіверському напрямку. Унаслідок серії влучних влучань на об'єкті спалахнула стоянка бронетехніки та здетонували боєкомплекти кількох бойових машин. Противник зазнав відчутних втрат у танках і бойових машинах піхоти, відновлювальні роботи в ремзоні було зірвано. Успішне ураження бази підтверджено офіційним повідомленням Генерального штабу ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Luhansk Oblast, Sievierodonetsk District, Verkhniokam'yanka",
      "target": "Russian Armed Forces Heavy Armor and Military Equipment Staging Area",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On September 1, 2026, Ukrainian forces launched a concentrated strike targeting a Russian armored staging area and field maintenance yard near Verkhniokam'yanka in the Lysychansk sector. The installation was actively utilized by Russian forces to repair damaged armor, assemble armored spearheads, and stage mechanized assault units heading toward Siversk. Multiple precision strikes ignited combat vehicles in staging bays and set off violent ammunition detonations inside several armored platforms. The strike inflicted significant losses on Russian tanks and infantry fighting vehicles, shutting down local depot repair operations. The successful hit was officially verified in the AFU General Staff operational dispatch.",
      "source": "General Staff of AFU, OSINT"
    }
  }
];

// Validation checks
console.log('--- VALIDATION CHECKS ---');
let hasErrors = false;

newItems.forEach((item, idx) => {
  const ruLen = item.ru.details.length;
  const ukLen = item.uk.details.length;
  const enLen = item.en.details.length;

  const ruSentences = item.ru.details.split(/[.!?]+/).filter(x => x.trim().length > 0).length;
  const ukSentences = item.uk.details.split(/[.!?]+/).filter(x => x.trim().length > 0).length;
  const enSentences = item.en.details.split(/[.!?]+/).filter(x => x.trim().length > 0).length;

  console.log(`\nItem ${idx + 1}: ${item.ru.target}`);
  console.log(`  Distance: ${item.distance} km`);
  console.log(`  RU details length: ${ruLen} chars (${ruSentences} sentences)`);
  console.log(`  UK details length: ${ukLen} chars (${ukSentences} sentences)`);
  console.log(`  EN details length: ${enLen} chars (${enSentences} sentences)`);

  if (ruLen < 600 || ruLen > 1000) { console.error(`  [ERROR] RU length out of bounds [600-1000]: ${ruLen}`); hasErrors = true; }
  if (ukLen < 600 || ukLen > 1000) { console.error(`  [ERROR] UK length out of bounds [600-1000]: ${ukLen}`); hasErrors = true; }
  if (enLen < 600 || enLen > 1000) { console.error(`  [ERROR] EN length out of bounds [600-1000]: ${enLen}`); hasErrors = true; }
  if (ruSentences < 4 || ruSentences > 8) { console.error(`  [ERROR] RU sentence count out of bounds [4-8]: ${ruSentences}`); hasErrors = true; }
  if (ukSentences < 4 || ukSentences > 8) { console.error(`  [ERROR] UK sentence count out of bounds [4-8]: ${ukSentences}`); hasErrors = true; }
  if (enSentences < 4 || enSentences > 8) { console.error(`  [ERROR] EN sentence count out of bounds [4-8]: ${enSentences}`); hasErrors = true; }
});

if (hasErrors) {
  console.error('\nFAILED VALIDATION! Please fix lengths/sentences.');
  process.exit(1);
} else {
  console.log('\nALL VALIDATION CHECKS PASSED!');
}

// Load existing data
const dataPath = 'd:/_DEV/Map kick/data.js';
let raw = fs.readFileSync(dataPath, 'utf8');

const varMatch = raw.match(/const\s+(\w+)\s*=\s*\[/);
if (!varMatch) { console.error('Cannot detect variable name'); process.exit(1); }
const varName = varMatch[1];

let items = JSON.parse(raw.replace(new RegExp('^const\\s+' + varName + '\\s*=\\s*'), '').replace(/;\s*$/, ''));

// Filter out any existing 01.09.2026 items
items = items.filter(x => x.date !== '01.09.2026');

// Get max id
let maxId = 0;
items.forEach(i => { if (i.id && i.id > maxId) maxId = i.id; });

newItems.forEach((item, idx) => {
  item.id = maxId + 1 + idx;
});

// Put new items at the beginning
items = newItems.concat(items);

const newContent = 'const ' + varName + ' = ' + JSON.stringify(items, null, 2) + ';';
fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully updated data.js with ' + newItems.length + ' items for 01.09.2026. Total items: ' + items.length);
