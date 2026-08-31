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
    "date": "30.08.2026",
    "lat": 59.4894,
    "lng": 32.0625,
    "distance": calcMinDistance(59.4894, 32.0625),
    "ru": {
      "region": "Ленинградская область, г. Кириши",
      "target": "ООО «КИНЕФ» (Киришинефтеоргсинтез) — технологические установки и резервуарный парк",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 30 августа 2026 года дальнобойные ударные беспилотники Сил обороны Украины успешно атаковали один из крупнейших нефтеперерабатывающих заводов России — ООО «КИНЕФ» («Киришинефтеоргсинтез») в Ленинградской области. Предприятие занимает второе место в РФ по объёмам переработки с годовой мощностью более 20 миллионов тонн нефти. Завод является главным производителем авиационного керосина, дизеля и бензина для Северо-Западного региона и подразделений Ленинградского военного округа. Украинские дроны преодолели около 890 километров, точно поразив технологические установки первичной перегонки и резервуары готовой продукции. На территории НПЗ вспыхнул сильный пожар, который подтвердили кадры очевидцев и спутниковая система NASA FIRMS. Прямой удар вывел из строя часть технологических линий завода.",
      "source": "СБУ, ГУР МО, Генштаб ВСУ, NASA FIRMS, OSINT"
    },
    "uk": {
      "region": "Ленінградська область, м. Кіриші",
      "target": "ТОВ «КІНЕФ» (Кіришінафтооргсинтез) — технологічні установки та резервуарний парк",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч на 30 серпня 2026 року далекобійні ударні безпілотники Сил оборони України успішно атакували один із найбільших нафтопереробних заводів Росії — ТОВ «КІНЕФ» («Кіришінафтооргсинтез») у Ленінградській області. Підприємство посідає друге місце в РФ за обсягами переробки з річною потужністю понад 20 мільйонів тонн нафти. Завод виступає головним виробником авіаційного гасу, дизельного пального та бензину для Північно-Західного регіону й підрозділів Ленінградського військового округу. Українські дрони подолали близько 890 кілометрів, влучивши у технологічні установки первинної перегонки та резервуари готової продукції. На території НПЗ спалахнула сильна пожежа, яку підтвердили відео очевидців і супутники NASA FIRMS. Влучання вивело з ладу частину технологічних ліній заводу.",
      "source": "СБУ, ГУР МО, Генштаб ЗСУ, NASA FIRMS, OSINT"
    },
    "en": {
      "region": "Leningrad Oblast, Kirishi",
      "target": "KINEF Oil Refinery (Kirishinefteorgsintez) — Processing Units and Storage Tank Farm",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 30, 2026, long-range Ukrainian strike drones hit LLC KINEF (Kirishinefteorgsintez) in Leningrad Oblast, Russia's second-largest oil refinery with an annual processing capacity exceeding 20 million tons. The facility is the primary supplier of jet fuel, diesel, and gasoline for Northwestern Russia and the Leningrad Military District. Ukrainian UAVs covered a distance of approximately 890 km, scoring direct hits on primary distillation columns and finished fuel storage tanks. A massive fire broke out across the industrial site, corroborated by local footage and NASA FIRMS thermal satellite sensors. The precision strike knocked out crucial refining lines, creating immediate fuel logistics disruptions for Russian military operations.",
      "source": "SBU, DIU, AFU General Staff, NASA FIRMS, OSINT"
    }
  },
  {
    "date": "30.08.2026",
    "lat": 46.6806,
    "lng": 38.2519,
    "distance": calcMinDistance(46.6806, 38.2519),
    "ru": {
      "region": "Краснодарский край, г. Ейск / пос. Шабельское",
      "target": "Военный аэродром «Ейск» — склады авиационных боеприпасов, ЗРПК «Панцирь-С1» и РЛС «Сопка-2», «Каста-2Е2»",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "В ночь на 30 августа 2026 года Силы беспилотных систем во взаимодействии с другими подразделениями ВСУ провели комбинированную атаку на военный аэродром «Ейск» в Краснодарском крае. Авиабаза является пунктом дислокации 859-го Центра боевого применения морской авиации и активно используется для бомбардировок украинских городов управляемыми авиабомбами. В ходе налёта серия взрывов разрушила склады авиационного вооружения, вызвав вторичную детонацию бомб и масштабный пожар. По официальным данным СБС ВСУ, результативными ударами уничтожены прикрывавший аэродром зенитный комплекс «Панцирь-С1», радиолокационный комплекс «Сопка-2», а также РЛС «Каста-2Е2» в районе поселка Шабельское. Удар существенно ослабил радиолокационный зонт противника над Азовским морем.",
      "source": "Силы беспилотных систем (СБС) ВСУ, Генштаб ВСУ, NASA FIRMS, OSINT"
    },
    "uk": {
      "region": "Краснодарський край, м. Єйськ / сел. Шабельське",
      "target": "Військовий аеродром «Єйськ» — склади авіаційних боєприпасів, ЗРГК «Панцир-С1» та РЛС «Сопка-2», «Каста-2Е2»",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "У ніч на 30 серпня 2026 року Сили безпілотних систем у взаємодії з іншими підрозділами ЗСУ провели комбіновану атаку на військовий аеродром «Єйськ» у Краснодарському краї. Авіабаза є пунктом базування 859-го Центру бойового застосування морської авіації РФ та активно використовується для бомбардувань українських міст керованими авіабомбами. Під час нальоту серія вибухів зруйнувала склади авіаційного озброєння, спричинивши вторинну детонацію бомб і масштабну пожежу. За офіційними даними СБС ЗСУ, результативними ударами знищено зенітний комплекс «Панцир-С1», радіолокаційний комплекс «Сопка-2», а також РЛС «Каста-2Е2» у районі селища Шабельське. Удар суттєво послабив радіолокаційну парасольку ворога над Азовським морем.",
      "source": "Сили безпілотних систем (СБС) ЗСУ, Генштаб ЗСУ, NASA FIRMS, OSINT"
    },
    "en": {
      "region": "Krasnodar Krai, Yeysk / Shabelskoye",
      "target": "Yeysk Military Airbase — Aviation Munition Depots, Pantsir-S1, and Sopka-2 / Kasta-2E2 Radars",
      "category": "Military Airbase",
      "weapon": "Drone",
      "details": "On the night of August 30, 2026, the Ukrainian Unmanned Systems Forces carried out a coordinated long-range drone assault on the Yeysk military airfield in Krasnodar Krai. The base hosts the Russian Navy's 859th Naval Aviation Combat Application Center and serves as a major staging hub for tactical aircraft launching glide bomb strikes. Multiple drone impacts ignited aviation weapons storage warehouses, triggering intense secondary detonations and widespread blazes. The USF Command officially confirmed the destruction of a Pantsir-S1 air defense system, a Sopka-2 radar installation, and an advanced Kasta-2E2 low-altitude radar situated near Shabelskoye. The operation severely damaged airfield infrastructure and degraded Russian radar detection across the Azov Sea.",
      "source": "Unmanned Systems Forces of AFU, AFU General Staff, NASA FIRMS, OSINT"
    }
  },
  {
    "date": "30.08.2026",
    "lat": 48.9536,
    "lng": 40.3003,
    "distance": calcMinDistance(48.9536, 40.3003),
    "ru": {
      "region": "Ростовская область, г. Миллерово / с. Долотинка",
      "target": "Военный аэродром «Миллерово» — база запуска БПЛА «Shahed», радиолокатор ДРЛ-27 и РЛС «Небо-СВ»",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "30 августа 2026 года подразделения Сил беспилотных систем Украины нанесли массированный удар ударными БПЛА по военному аэродрому «Миллерово» в Ростовской области. Авиабаза служила не только аэродромом оперативного базирования боевых самолетов Су-30СМ и Су-35С, но и крупным узлом предполетной подготовки и пуска дальнобойных дронов типа «Shahed» и «Герань». В результате атаки повреждены ангары техническо-эксплуатационной части и стартовые площадки беспилотников. Кроме того, высокоточными попаданиями уничтожены ключевой диспетчерский радиолокатор ДРЛ-27 из состава комплекса РСП-27 и РЛС дальнего обнаружения «Небо-СВ» возле села Долотинка. Вывод из строя радиолокаторов парализовал управление полетами и систему наведения ПВО на авиабазе.",
      "source": "Силы беспилотных систем (СБС) ВСУ, Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Ростовська область, м. Міллерово / с. Долотинка",
      "target": "Військовий аеродром «Міллерово» — база запуску БПЛА «Shahed», радіолокатор ДРЛ-27 та РЛС «Небо-СВ»",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "30 серпня 2026 року підрозділи Сил безпілотних систем України завдали масованого удару ударними БПЛА по військовому аеродрому «Міллерово» в Ростовській області. Авіабаза слугувала не лише аеродромом оперативного базування бойових літаків Су-30СМ та Су-35С, але й великим вузлом передпольотної підготовки і пуску далекобійних дронів типу «Shahed» і «Герань». Унаслідок атаки пошкоджено ангари технічно-експлуатаційної частини та стартові майданчики безпілотників. Крім того, високоточними влучаннями знищено ключовий диспетчерський радіолокатор ДРЛ-27 зі складу комплексу РСП-27 та РЛС дальнього виявлення «Небо-СВ» біля села Долотинка. Виведення з ладу радарів паралізувало управління польотами та систему наведення ППО на авіабазі.",
      "source": "Сили безпілотних систем (СБС) ЗСУ, Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Rostov Oblast, Millerovo / Dolotinka",
      "target": "Millerovo Military Airfield — Shahed Drone Operations Base, DRL-27 Radar, and Nebo-SV Radar",
      "category": "Military Airbase",
      "weapon": "Drone",
      "details": "On August 30, 2026, Ukrainian Unmanned Systems Forces launched a deep strike against the Millerovo military airfield in Rostov Oblast. The facility operated as a forward airbase for Su-30SM and Su-35S fighters and served as a strategic assembly, fueling, and launch platform for Shahed and Geran long-range attack drones. Drone strikes hit maintenance hangars, technical maintenance section facilities, and drone deployment ramps. The main objective was achieved by knocking out the critical DRL-27 airfield radar module (part of the RSP-27 flight landing system) and destroying a Nebo-SV early-warning radar near the village of Dolotinka. The destruction of these radar units grounded regular sorties and disrupted tactical air traffic coordination.",
      "source": "Unmanned Systems Forces of AFU, AFU General Staff, OSINT"
    }
  },
  {
    "date": "30.08.2026",
    "lat": 53.0760,
    "lng": 35.6840,
    "distance": calcMinDistance(53.0760, 35.6840),
    "ru": {
      "region": "Орловская область, Знаменский район, с. Цымбулова",
      "target": "Дронопорт «Цымбулова» — пусковые позиции реактивных БПЛА и склад дронов",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 30 августа 2026 года украинские ударные беспилотники атаковали специализированный российский дронопорт «Цымбулова» в Знаменском районе Орловской области. Объект расположен примерно в 180 км от границы и летом 2026 года был масштабно переоборудован для массированных пусков реактивных дронов: на базе развернули 16 пусковых установок для скоростных БПЛА «Герань-5» и «Герань-4», а также позиции для моделей «Герань-2» и «Герань-3». В ходе налёта прямое попадание пришлось по одной из реактивных пусковых установок и ангару хранения готовых беспилотников. На территории дронопорта возник сильный пожар, следы которого вместе с разрушениями зафиксировали спутниковые снимки Exilenova+ и Supernova+. Удар сорвал подготовку к очередному залповому пуску реактивных БПЛА.",
      "source": "Генштаб ВСУ, Exilenova+, Supernova+, Милитарный, OSINT"
    },
    "uk": {
      "region": "Орловська область, Знам'янський район, с. Цимбулова",
      "target": "Дронопорт «Цимбулова» — пускові позиції реактивних БПЛА та склад дронів",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч на 30 серпня 2026 року українські ударні безпілотники атакували спеціалізований російський дронопорт «Цимбулова» у Знам'янському районі Орловської області. Об'єкт розташований приблизно за 180 км від кордону і влітку 2026 року був масштабно переобладнаний для масованих запусків реактивних дронів: на базі розгорнули 16 пускових установок для швидкісних БПЛА «Герань-5» і «Герань-4», а також позиції для моделей «Герань-2» і «Герань-3». Під час нальоту пряме влучання припало по одній із реактивних пускових установок та ангару зберігання готових безпілотників. На території дронопорту спалахнула сильна пожежа, сліди якої разом із руйнуваннями зафіксували супутникові знімки Exilenova+ та Supernova+. Удар зірвав підготовку до чергового залпового пуску реактивних БПЛА.",
      "source": "Генштаб ЗСУ, Exilenova+, Supernova+, Мілітарний, OSINT"
    },
    "en": {
      "region": "Oryol Oblast, Znamensky District, Tsymbulova",
      "target": "Tsymbulova Droneport — Jet UAV Launch Positions and Drone Storage Facility",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "On the night of August 30, 2026, Ukrainian attack drones struck the Tsymbulova droneport in the Znamensky district of Oryol Oblast, located 180 km from the border. During July and August 2026, Russian forces had expanded this site into a dedicated launch hub, erecting 16 specialized launch ramps for Geran-5 and Geran-4 jet-powered strike UAVs alongside positions for Geran-2 and Geran-3 models. Precision drone strikes scored direct hits on a jet UAV launcher and an adjacent drone storage hangar. Satellite imagery released by Exilenova+ and Supernova+ verified extensive structural destruction and severe burn scars across the facility. The successful strike disrupted scheduled mass launches of jet-powered kamikaze drones.",
      "source": "General Staff of AFU, Exilenova+, Supernova+, Militarnyi, OSINT"
    }
  },
  {
    "date": "30.08.2026",
    "lat": 48.0436,
    "lng": 38.1425,
    "distance": calcMinDistance(48.0436, 38.1425),
    "ru": {
      "region": "Донецкая область, г. Харцызск",
      "target": "Складской комплекс и база хранения БПЛА Центра передовых беспилотных технологий «Рубикон»",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "30 августа 2026 года Силы обороны Украины нанесли результативный высокоточный удар по тыловой базе материально-технического обеспечения оккупантов в городе Харцызск. Целью стал крупный складской комплекс Центра передовых беспилотных технологий МО РФ «Рубикон» — специализированного формирования, отвечающего за применение разведывательных и ударных дронов на восточном фронте. На объекте хранились готовые партии барражирующих боеприпасов, оптико-электронные модули, комплекты спутниковой связи и запасные блоки управления. Прямые попадания вызвали цепную детонацию боевых частей и сильный пожар в ангарах. Уничтожение материальной базы нанесло серьезный удар по возможностям подразделения «Рубикон» координировать наступательные операции на покровском направлении.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Донецька область, м. Харцизьк",
      "target": "Складський комплекс та база зберігання БПЛА Центру передових безпілотних технологій «Рубікон»",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "30 серпня 2026 року Сили оборони України завдали результативного високоточного удару по тиловій базі матеріально-технічного забезпечення окупантів у місті Харцизьк. Ціллю став великий складський комплекс Центру передових безпілотних технологій МО РФ «Рубікон» — спеціалізованого формування, що відповідає за застосування розвідувальних та ударних дронів на східному фронті. На об'єкті зберігалися готові партії баражуючих боєприпасів, оптико-електронні модулі, комплекти супутникового зв'язку та запасні блоки управління. Прямі влучання спричинили ланцюгову детонацію бойових частин і сильну пожежу в ангарах. Знищення матеріальної бази завдало серйозного удару по можливостях підрозділу «Рубікон» координувати наступальні операції на покровському напрямку.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Donetsk Oblast, Khartsyzk",
      "target": "Rubikon Advanced Drone Center Storage Complex and Drone Logistics Depot",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On August 30, 2026, Ukrainian defense forces delivered a precision strike against a rear logistical base of the Russian occupying forces in Khartsyzk. The strike targeted a primary warehouse facility belonging to the Rubikon Center for Advanced Unmanned Technologies — an elite unit managing reconnaissance and combat drone operations across the eastern theater. The compound housed stockpiles of loitering munitions, optical-electronic sensor payloads, satellite communications suites, and drone electronics. Direct hits ignited a chain-reaction explosion of warheads and completely engulfed the storage buildings in flames. The destruction of this asset severely degraded Rubikon's operational capabilities to support offensive drives in the Pokrovsk sector.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "30.08.2026",
    "lat": 47.4520,
    "lng": 36.8510,
    "distance": calcMinDistance(47.4520, 36.8510),
    "ru": {
      "region": "Запорожская область, Пологовский район, с. Чумацкое",
      "target": "Командно-штабной пункт управления подразделениями ударных БПЛА ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "30 августа 2026 года Силы обороны Украины нанесли огневой удар по защищенному командно-штабному пункту управления БПЛА российских войск в районе села Чумацкое. Данный пункт выполнял функции координационного узла тактической беспилотной разведки, корректировки артиллерийских ударов и управления расчетами FPV-дронов на южном участке фронта. В результате прямого попадания высокоточного боеприпаса пункт управления, ретрансляционные антенные мачты и терминалы связи были полностью разрушены, а находившаяся на дежурстве смена операторов понесла потери. Ликвидация командного центра нарушила координацию тактических подразделений и снизила интенсивность применения дронов противником на данном рубеже. Успешный удар подтвержден в сводке Генштаба ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Запорізька область, Пологівський район, с. Чумацьке",
      "target": "Командно-штабний пункт управління підрозділами ударних БПЛА ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "30 серпня 2026 року Сили оборони України завдали вогневого удару по захищеному командно-штабному пункту управління БПЛА російських військ у районі села Чумацьке. Цей пункт виконував функції координаційного вузла тактичної безпілотної розвідки, коригування артилерійських ударів та управління розрахунками FPV-дронів на південній ділянці фронту. Унаслідок прямого влучання високоточного боєприпасу пункт управління, ретрансляційні антенні щогли та термінали зв'язку були повністю зруйновані, а чергова зміна операторів зазнала втрат. Ліквідація командного центру порушила координацію тактичних підрозділів і знизила інтенсивність застосування дронів противником на цьому рубежі. Успішний удар підтверджено у зведенні Генштабу ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Zaporizhzhia Oblast, Polohy District, Chumatske",
      "target": "Russian Armed Forces Strike Drone Unit Command and Control Center",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On August 30, 2026, Ukrainian forces delivered a precision strike against a fortified Russian drone command and control post near Chumatske. The facility functioned as a regional tactical coordination hub for reconnaissance UAVs, artillery spotting, and FPV drone strikes across the southern front. A direct missile or drone impact demolished the command structure, telecommunication relay masts, and flight control stations, inflicting severe personnel casualties on the operating staff. The destruction of this coordination node crippled tactical UAV guidance and significantly reduced enemy loitering munition activity along the sector. The strike was officially verified in the AFU General Staff daily operational update.",
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

// Filter out any existing 30.08.2026 items
items = items.filter(x => x.date !== '30.08.2026');

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
console.log('Successfully updated data.js with ' + newItems.length + ' items for 30.08.2026. Total items: ' + items.length);

// Also copy this script to d:\_DEV\Map kick\add_30082026.js for repository history
fs.writeFileSync('d:/_DEV/Map kick/add_30082026.js', fs.readFileSync(__filename, 'utf8'), 'utf8');
console.log('Saved add_30082026.js');
