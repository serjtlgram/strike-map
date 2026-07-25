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
    "date": "24.07.2026",
    "lat": 58.6477,
    "lng": 49.6508,
    "distance": null,
    "ru": {
      "region": "Кировская область, Киров (Октябрьский район)",
      "target": "АО «ВМП «Авитек» (Концерн ВКО «Алмаз-Антей»)",
      "category": "ВПК",
      "weapon": "Крылатая ракета / Дрон",
      "details": "Утром 24 июля 2026 года Силы обороны Украины нанесли высокоточный удар по заводу АО «Вятское машиностроительное предприятие «Авитек» в Кирове. По данным OSINT-аналитиков и заявлению Президента Украины, атака была осуществлена дальнобойным крылатым вооружением на дистанции свыше 1100 километров. Прицельное попадание пришлось по центральному производственному корпусу, где сборка компонентов осуществлялась для оборонных нужд. В результате детонации на предприятии вспыхнул масштабный пожар, охвативший несколько цехов и сопровождавшийся обрушением крыши. По сообщениям местных властей, в результате удара 6 человек погибли и 32 получили ранения различной степени тяжести. Вятский завод «Авитек» входит в концерн «Алмаз-Антей» и является ключевым изготовителем зенитных управляемых ракет для комплексов «Тор» и «С-300», а также катапультных кресел. Из-за существенных повреждений оборудования производственные линии завода были полностью остановлены.",
      "source": "СБУ, ГУР, Президент Украины, МЧС РФ, OSINT"
    },
    "uk": {
      "region": "Кіровська область, Кіров (Жовтневий район)",
      "target": "АТ «ВМП «Авітек» (Концерн ВКО «Алмаз-Антей»)",
      "category": "ВПК",
      "weapon": "Крилата ракета / Дрон",
      "details": "Уранці 24 липня 2026 року Сили оборони України завдали високоточного удару по оборонному заводу АТ «В'ятське машинобудівне підприємство «Авітек» у Кірові. За даними OSINT-аналітиків та заявою Президента України, атаку здійснено далекобійним крилатим озброєнням на відстані понад 1100 кілометрів. Прицільне влучання припало на центральний виробничий корпус, де здійснювалося збирання компонентів для потреб армії. Внаслідок детонації на підприємстві спалахнула масштабна пожежа, що охопила кілька цехів та спричинила часткове обвалення покрівлі. За повідомленнями місцевої влади, 6 осіб загинули та 32 дістали поранення різного ступеня тяжкості. В'ятський завод «Авітек» входить до концерну «Алмаз-Антей» і є ключовим виробником зенітних керованих ракет для комплексів «Тор» і «С-300», а також катапультних крісел. Через суттєві руйнування обладнання виробничі лінії було повністю зупинено.",
      "source": "СБУ, ГУР, Президент України, МНС РФ, OSINT"
    },
    "en": {
      "region": "Kirov Oblast, Kirov (Oktyabrsky District)",
      "target": "JSC VMP Avitek (Almaz-Antey Concern)",
      "category": "Military-Industrial Complex",
      "weapon": "Cruise Missile / Drone",
      "details": "On the morning of July 24, 2026, the Ukrainian Defense Forces executed a precision long-range strike against the Vyatka Machine-Building Plant Avitek in Kirov. According to OSINT reports and official confirmation from the President of Ukraine, the raid was carried out using long-range cruise weapons over a distance exceeding 1,100 kilometers. Direct missile impacts severely damaged the main production building where critical defense components were assembled. The detonation triggered a massive industrial fire across several workshops, resulting in partial roof collapses and heavy smoke. Local authorities confirmed 6 fatalities and 32 injured personnel following the attack. Operating under the Almaz-Antey Concern, Avitek serves as a primary manufacturer of guided anti-aircraft missiles for Tor and S-300 air defense systems as well as pilot ejection seats. Due to the extensive destruction of specialized machinery, manufacturing operations were completely halted.",
      "source": "SBU, GUR, President of Ukraine, Russian EMERCOM, OSINT"
    }
  },
  {
    "date": "24.07.2026",
    "lat": 44.6908,
    "lng": 33.5750,
    "distance": null,
    "ru": {
      "region": "Крым, Севастополь (пос. Любимовка)",
      "target": "Аэродром «Бельбек» (РЛС «Небо-У»)",
      "category": "Военные аэродромы",
      "weapon": "Дрон",
      "details": "В ночь на 24 июля 2026 года Служба безопасности Украины провела успешную специальную операцию по поражению военной инфраструктуры на аэродроме «Бельбек» под Севастополем. Главной целью атаки украинских ударных БПЛА стала трехкоординатная радиолокационная станция дальнего обнаружения «Небо-У». Несколько беспилотников сумели преодолеть эшелонированную систему ПВО Крыма и нанести прямой удар по радиолокационному комплексу. В результате взрыва и последующего возгорания дорогостоящая антенная система и аппаратный контейнер РЛС получили критические повреждения. Данная станция обеспечивала мониторинг воздушного пространства над акваторией Черного моря и южными регионами Украины на дальности до 600 км. Потеря комплекса «Небо-У» существенно ослабила радиолокационное покрытие ВС РФ в крымском секторе и ограничила возможности наведения собственных средств ПВО.",
      "source": "СБУ, ВМС ВСУ, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Крим, Севастополь (смт Любимівка)",
      "target": "Аеродром «Бельбек» (РЛС «Небо-У»)",
      "category": "Військові аеродроми",
      "weapon": "Дрон",
      "details": "У ніч проти 24 липня 2026 року Служба безпеки України провела успішну спеціальну операцію з ураження військової інфраструктури на аеродромі «Бельбек» поблизу Севастополя. Головною ціллю атаки українських ударних БПЛА стала трикоординатна радіолокаційна станція дальнього виявлення «Небо-У». Кілька безпілотників зуміли подолати ешелоновану систему ППО Криму та завдати прямого удару по радіолокаційному комплексу. Внаслідок вибуху та подальшого займання дорога антенно-фідерна система й апаратний контейнер РЛС зазнали критичних руйнувань. Ця станція забезпечувала моніторинг повітряного простору над акваторією Чорного моря та південними регіонами України на дальності до 600 км. Втрата комплексу «Небо-У» суттєво послабила радіолокаційне покриття окупаційних військ у кримському секторі.",
      "source": "СБУ, ВМС ЗСУ, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Crimea, Sevastopol (Lyubimovka)",
      "target": "Belbek Airfield (Nebo-U Radar)",
      "category": "Military Airfields",
      "weapon": "Drone",
      "details": "On the night of July 24, 2026, the Security Service of Ukraine conducted a targeted special operation against military infrastructure at the Belbek airfield near Sevastopol. The primary target of the long-range drone strike was a valuable Nebo-U 3D long-range air surveillance radar station. Multiple strike UAVs successfully penetrated Crimean air defense networks and delivered direct hits onto the radar array. The explosion and resulting blaze caused critical damage to the primary antenna structure and control units. The Nebo-U system was essential for monitoring airspace over the Black Sea and southern Ukraine at ranges up to 600 kilometers. The destruction of this radar complex severely compromised Russian early warning capabilities and degraded integrated air defense oversight across the Crimean peninsula.",
      "source": "SBU, Ukrainian Navy, OSINT (Astra), Media"
    }
  },
  {
    "date": "24.07.2026",
    "lat": 45.0925,
    "lng": 33.5958,
    "distance": null,
    "ru": {
      "region": "Крым, Сакский район (пгт Новофёдоровка)",
      "target": "Аэродром «Саки» (Резервуар ГСМ)",
      "category": "Военные аэродромы",
      "weapon": "Дрон",
      "details": "В ночь на 24 июля 2026 года украинские ударные БПЛА атаковали военный аэродром Морской авиации ВМФ РФ «Саки» в Новофёдоровке. В ходе ночного налета группа дальнобойных дронов поразила ключевые объекты топливной инфраструктуры авиабазы. Прицельный удар пришелся по крупному наземному резервуару с авиационным горючим, что привело к мощному взрыву и сильному пожару. Пламя охватило соседние емкости для хранения ГСМ, вызвав густые клубы черного дыма, видимые за десятки километров. Для тушения возгорания привлекались расчеты местной пожарной команды и военные подразделения ликвидации последствий. Аэродром «Саки» является базой для истребителей Су-30СМ и бомбардировщиков Су-24М, регулярно атакующих южные области Украины. Уничтожение запасов топлива вызвало серьезные сбои в логистике вылетов российской авиации.",
      "source": "СБУ, Генштаб ВСУ, OSINT, СМИ"
    },
    "uk": {
      "region": "Крим, Сакський район (смт Новофедорівка)",
      "target": "Аеродром «Саки» (Резервуар ГСМ)",
      "category": "Військові аеродроми",
      "weapon": "Дрон",
      "details": "У ніч проти 24 липня 2026 року українські ударні БПЛА атакували військовий аеродром Морської авіації ВМФ РФ «Саки» у Новофедорівці. Під час нічного нальоту група далекобійних дронів уразила ключові об'єкти паливної інфраструктури авіабази. Прицільний удар припав на великий резервуар із авіаційним пальним, що призвело до потужного вибуху та інтенсивної пожежі. Полум'я миттєво охопило сусідні ємності для зберігання ГСМ, спричинивши густі клуби чорного диму, які спостерігалися за десятки кілометрів. Для ліквідації вогню залучалися пожежні розрахунки та військові підрозділи реагування. Аеродром «Саки» є базой для винищувачів Су-30СМ і бомбардувальників Су-24М, які регулярно атакують південні області України. Знищення резервуарів спричинило збої у забезпеченні вильотів авіації.",
      "source": "СБУ, Генштаб ЗСУ, OSINT, ЗМІ"
    },
    "en": {
      "region": "Crimea, Saky District (Novofedorivka)",
      "target": "Saky Airfield (Fuel Reservoir)",
      "category": "Military Airfields",
      "weapon": "Drone",
      "details": "On the night of July 24, 2026, Ukrainian strike drones targeted the Russian Naval Aviation airfield Saky located in Novofedorivka, Crimea. During the overnight raid, a formation of long-range UAVs struck critical fuel infrastructure elements at the airbase. A direct hit destroyed a large aviation fuel storage tank, triggering a powerful detonation and a widespread fire. The blaze quickly engulfed adjacent fuel reservoirs, producing dense plumes of black smoke visible from miles away. Emergency firefighting units and military response teams were deployed to contain the raging fuel fire. Saky airfield houses Su-30SM fighters and Su-24M bombers that regularly launch strikes against southern Ukrainian targets. The destruction of fuel supplies caused severe operational disruptions to Russian tactical air sorties.",
      "source": "SBU, AFU General Staff, OSINT, Media"
    }
  },
  {
    "date": "24.07.2026",
    "lat": 59.7915,
    "lng": 30.4072,
    "distance": null,
    "ru": {
      "region": "Санкт-Петербург, Пушкинский район (п. Шушары)",
      "target": "Складской комплекс Wildberries (Шушары)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "В ночь на 24 июля 2026 года дальнобойные беспилотники атаковали крупный логистический хаб компании Wildberries в промышленной зоне Шушары на окраине Санкт-Петербурга. Падение ударных БПЛА и детонация боевых частей вызвали возгорание в административно-сортировочном блоке комплекса. Огонь быстро распространился по складским помещениям, повредив конструктивные элементы кровли, стеновые панели и автоматизированные линии обработки грузов. На месте происшествия работали усиленные отряды МЧС, которым удалось локализовать пожар на площади нескольких сотен квадратных метров. Данный распределительный центр активно задействовался для складирования и транспортировки товаров двойного назначения, армейского обмундирования и снаряжения. В результате налета работа сортировочного терминала была временно приостановлена.",
      "source": "OSINT, МЧС РФ, СМИ"
    },
    "uk": {
      "region": "Санкт-Петербург, Пушкінський район (смт Шушари)",
      "target": "Складський комплекс Wildberries (Шушари)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "У ніч проти 24 липня 2026 року далекобійні безпілотники атакували великий логістичний хаб компанії Wildberries у промисловій зоні Шушари на околиці Санкт-Петербурга. Падіння ударних БПЛА та детонація бойових частин спричинили займання в адміністративно-сортувальному блоці комплексу. Вогонь швидко поширився складськими приміщеннями, пошкодивши конструктивні елементи покрівлі, стінові панелі та автоматизовані лінії обробки вантажів. На місці події працювали посилені підрозділи МНС, яким вдалося локалізувати пожежу на площі кількох сотень квадратних метрів. Цей розподільчий центр активно залучався для складування та транспортування товарів подвійного призначення, армійського обмундирування і спорядження. Внаслідок нальоту роботу сортувального термінала було тимчасово призупинено.",
      "source": "OSINT, МНС РФ, ЗМІ"
    },
    "en": {
      "region": "Saint Petersburg, Pushkinsky District (Shushary)",
      "target": "Wildberries Logistics Complex (Shushary)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the night of July 24, 2026, long-range drones struck a major Wildberries distribution center located in the Shushary industrial area of Saint Petersburg. Drone impacts and warhead detonations sparked a fast-moving fire inside the main administrative and sorting block. Flames damaged roof supports, exterior panels, and automated conveyor sorting machinery across the facility. Heavy emergency response crews from the Ministry of Emergency Situations were deployed to suppress the blaze, which burned across several hundred square meters. The Shushary distribution hub functions as a vital supply node for processing dual-use goods, tactical gear, and military logistics shipments. Following the attack, sorting lines were temporarily shut down while damage assessments and repairs took place.",
      "source": "OSINT, Russian EMERCOM, Media"
    }
  },
  {
    "date": "24.07.2026",
    "lat": 54.5422,
    "lng": 53.7667,
    "distance": null,
    "ru": {
      "region": "Республика Башкортостан, Туймазинский район (с. Субханкулово)",
      "target": "ЛПДС «Субханкулово» (Транснефть-Урал)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "24 июля 2026 года Служба безопасности Украины нанесла синхронный удар дальнобойными БПЛА по линейно-производственной диспетчерской станции «Субханкулово» в Башкортостане. Атака на рекордному удалении около 1350 километров от государственной границы стала одной из самых глубоких операций в тылу РФ. Один из беспилотников преодолел локальные средства ПВО и попал в крупный резервуар с нефтью в составе резервуарного парка. Ударом была вызвана детонация с последующим интенсивным горением сырья, что подтверждается спутниковыми снимками и кадрами очевидцев. ЛПДС «Субханкулово» компании «Транснефть-Урал» является стратегическим узлом смешивания, хранения и перекачки нефти с месторождений Западной Сибири в ключевые магистральные трубопроводы. В результате атаки прокачка нефти через станцию была временно приостановлена.",
      "source": "СБУ, OSINT (Astra), МЧС РФ, СМИ"
    },
    "uk": {
      "region": "Республіка Башкортостан, Туймазинський район (с. Субханкулово)",
      "target": "ЛПДС «Субханкулово» (Транснефть-Урал)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "24 липня 2026 року Служба безпеки України завдала синхронного удару далекобійними БПЛА по лінійно-виробничій диспетчерській станції «Субханкулово» в Башкортостані. Атака на рекордному віддаленні близько 1350 кілометрів від державного кордону стала однією з найглибших операцій у тилу РФ. Один із безпілотників подолав місцеві засоби ППО та влучив у великий резервуар із нафтою в складі резервуарного парку. Ударом було спричинено детонацію з подальшим інтенсивним горінням сировини, що підтверджується супутниковими знімками та кадрами очевидців. ЛПДС «Субханкулово» компанії «Транснефть-Урал» є стратегічним вузлом змішування, зберігання та перекачування нафти з родовищ Західного Сибіру в ключові магістральні трубопроводи. Внаслідок атаки прокачування нафти через станцію було тимчасово призупинено.",
      "source": "СБУ, OSINT (Astra), МНС РФ, ЗМІ"
    },
    "en": {
      "region": "Republic of Bashkortostan, Tuimazinsky District (Subkhankulovo)",
      "target": "Subkhankulovo Oil Pump Station (Transneft)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On July 24, 2026, the Security Service of Ukraine carried out a synchronized long-range drone strike on the Subkhankulovo dispatch station in the Republic of Bashkortostan. Striking at a record distance of approximately 1,350 kilometers from the border, it represented one of the deepest raids into Russian territory. A strike drone bypassed local air defenses and scored a direct hit on a primary crude oil storage tank inside the tank farm. The impact caused an immediate detonation and an intense petroleum fire, as confirmed by satellite imagery and eyewitness footage. Operated by Transneft-Ural, Subkhankulovo is a critical strategic hub for blending, storing, and pumping West Siberian crude into major trunk pipelines. The strike forced an emergency shutdown of oil pumping operations.",
      "source": "SBU, OSINT (Astra), Russian EMERCOM, Media"
    }
  },
  {
    "date": "24.07.2026",
    "lat": 53.1539,
    "lng": 47.7554,
    "distance": null,
    "ru": {
      "region": "Ульяновская область, Новоспасский район (р. п. Новоспасское)",
      "target": "НПЗ «НС-Ойл» (Новоспасское)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "24 июля 2026 года украинские ударные БПЛА в рамках спланированной операции СБУ поразили нефтеперерабатывающий завод ООО «НС-Ойл» в рабочем поселке Новоспасское Ульяновской области. Объект расположен на расстоянии около 900 километров от границы и играет важную роль в обеспечении Поволжья топливом. В результате прицельных попаданий дронов загорелись технологическая установка переработки нефти и резервуары со сжиженным углеводородным газом. На территории завода вспыхнул масштабный пожар с густым черным дымом, для тушения которого привлекались основные расчеты МЧС региона. В связи с воздушной угрозой в Ульяновске вводился план «Ковер» с временной приостановкой работы местного аэропорта. Завод «НС-Ойл» производит бензин, дизель и сжиженный газ, поставляемые для нужд промышленности и транспорта.",
      "source": "СБУ, OSINT, МЧС РФ, СМИ"
    },
    "uk": {
      "region": "Ульяновська область, Новоспаський район (смт Новоспаське)",
      "target": "НПЗ «НС-Ойл» (Новоспаське)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "24 липня 2026 року українські ударні БПЛА в рамках спланованої операції СБУ уразили нафтопереробний завод ТОВ «НС-Ойл» у селищі Новоспаське Ульяновської області. Об'єкт розташований на відстані близько 900 кілометрів від кордону і відіграє важливу роль у забезпеченні Поволжя пальним. Внаслідок прицільних влучань дронів спалахнули технологічна установка переробки нафти та резервуари зі скрапленим вуглеводневим газом. На території заводу виникла масштабна пожежа з густим чорним димом, для ліквідації якої залучалися основні розрахунки МНС регіону. У зв'язку з повітряною загрозою в Ульяновську запроваджувався план «Ковер» із тимчасовим призупиненням роботи місцевого аеропорту. Завод «НС-Ойл» виробляє бензин, дизель та скраплений газ, що постачаються для потреб промисловості й транспорту.",
      "source": "СБУ, OSINT, МНС РФ, ЗМІ"
    },
    "en": {
      "region": "Ulyanovsk Oblast, Novospassky District (Novospasskoye)",
      "target": "NS-Oil Refinery (Novospasskoye)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On July 24, 2026, Ukrainian strike drones executed a targeted operation planned by the SBU against the NS-Oil refinery in Novospasskoye, Ulyanovsk Oblast. Situated roughly 900 kilometers from the Ukrainian border, the plant serves as an essential fuel supplier for the Volga federal district. Direct drone impacts ignited a primary oil distillation unit and adjacent liquefied petroleum gas storage tanks. The attack resulted in a major industrial blaze sending thick black smoke columns into the sky, prompting heavy emergency responses. Due to airborne threats, aviation authorities declared Plan Carpet in Ulyanovsk, briefly suspending operations at the regional airport. The NS-Oil facility produces refined gasoline, diesel, and liquefied gas essential for industrial logistics.",
      "source": "SBU, OSINT, Russian EMERCOM, Media"
    }
  },
  {
    "date": "24.07.2026",
    "lat": 54.7312,
    "lng": 35.9719,
    "distance": null,
    "ru": {
      "region": "Калужская область, Дзержинский район (п. Полотняный Завод)",
      "target": "Мини-НПЗ «Первый Завод»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "24 июля 2026 года дальнобойные украинские беспилотники нанесли прицельный удар по нефтеперерабатывающему предприятию ООО «Первый Завод» в Калужской области. Завод находится в поселке Полотняный Завод на расстоянии около 365 километров от линии фронта. Несколько БПЛА самолетного типа успешно преодолели средства РЭБ и поразили ректификационные колонны и резервуарный парк предприятия. На объекте началось интенсивное горение нефтепродуктов, сопровождавшееся сильным задымлением прилегающей территории. Пожарным расчетам МЧС потребовалось несколько часов для локализации и полной ликвидации возгорания. «Первый Завод» является крупнейшим независимым НПЗ в Калужской области, специализирующимся на переработке нефти и производстве газового конденсата для промышленных нужд. Атака привела к приостановке переработки.",
      "source": "СБУ, OSINT, МЧС РФ, СМИ"
    },
    "uk": {
      "region": "Калузька область, Дзержинський район (смт Полотняний Завод)",
      "target": "Міні-НПЗ «Перший Завод»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "24 липня 2026 року далекобійні українські безпілотники завдали прицільного удару по нафтопереробному підприємству ТОВ «Перший Завод» у Калузькій області. Завод розташований у селищі Полотняний Завод на відстані близько 365 кілометрів від лінії фронту. Кілька БПЛА літакового типу успішно подолали засоби РЕБ і уразили ректифікаційні колони та резервуарний парк підприємства. На об'єкті розпочалося інтенсивне горіння нафтопродуктів, що супроводжувалося сильним задымленням прилеглої території. Пожежним розрахункам МНС знадобилося кілька годин для локалізації та повної ліквідації займання. «Перший Завод» є найбільшим незалежним НПЗ у Калузькій області, що спеціалізується на переробці нафти і виробництві газового конденсата для промислових потреб. Атака спричинила зупинку переробки.",
      "source": "СБУ, OSINT, МНС РФ, ЗМІ"
    },
    "en": {
      "region": "Kaluga Oblast, Dzerzhinsky District (Polotnyany Zavod)",
      "target": "Perviy Zavod Mini-Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On July 24, 2026, Ukrainian long-range strike drones carried out a successful attack on the Perviy Zavod oil refinery in Kaluga Oblast. Located in the settlement of Polotnyany Zavod roughly 365 kilometers from the frontline, the plant operates as a key regional fuel processing site. Multiple fixed-wing drones bypassed electronic warfare systems, directly striking distillation columns and storage tank infrastructure. The impacts triggered an intense oil fire that released dense smoke over the surrounding industrial sector. Emergency crews from the Ministry of Emergency Situations spent several hours containing and extinguishing the blaze. Perviy Zavod is the largest independent oil refinery in Kaluga Oblast, producing gasoline, diesel, and naphtha. The strike forced an immediate suspension of refining activities.",
      "source": "SBU, OSINT, Russian EMERCOM, Media"
    }
  }
];

// Validate sentence count & character length
console.log('--- VALIDATING ITEMS ---');
items.forEach((item, idx) => {
    item.distance = calcMinDistance(item.lat, item.lng);
    ['ru', 'uk', 'en'].forEach(lang => {
        const text = item[lang].details;
        const charLen = text.length;
        const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);
        const sentenceCount = sentences.length;
        console.log(`Item #${idx+1} [${lang}] Target: "${item[lang].target}": ${charLen} chars, ${sentenceCount} sentences.`);
        if (charLen < 600 || charLen > 1000) {
            console.error(`ERROR: Item #${idx+1} [${lang}] char length ${charLen} is outside [600, 1000] range!`);
        }
        if (sentenceCount < 4 || sentenceCount > 8) {
            console.error(`ERROR: Item #${idx+1} [${lang}] sentence count ${sentenceCount} is outside [4, 8] range!`);
        }
    });
});

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
  // unshift or push
  data.unshift(item);
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully added ${items.length} items for date 24.07.2026 into data.js`);
