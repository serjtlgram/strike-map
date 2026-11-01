const fs = require('fs');
const path = require('path');

const newEntries = [
  {
    "date": "31.10.2026",
    "lat": 48.3315,
    "lng": 40.2310,
    "distance": null,
    "ru": {
      "region": "Ростовская обл., г. Каменск-Шахтинский, Садовая ул., 1",
      "target": "ФКП «Комбинат \"Каменский\"» — завод по производству твердого ракетного топлива и компонентов для РСЗО",
      "category": "ВПК",
      "weapon": "Комбинированный удар (БПЛА и КР «Нептун»)",
      "details": "В ночь на 31 октября 2026 года Силы обороны Украины нанесли комплексный удар дальнобойными дронами и противокорабельными ракетами «Нептун» ВМС ВСУ по оборонному предприятию ФКП «Комбинат \"Каменский\"» в Ростовской области. Комбинат является одним из важнейших объектов химического сектора российского ВПК, специализируясь на производстве твердого ракетного топлива, порохов и взрывчатых составов для боеприпасов РСЗО «Град», «Ураган», «Смерч» и «Торнадо-С». По официальному сообщению Генштаба ВСУ, в результате огневого налета произошло прямое попадание в склад готовой продукции твердого ракетного топлива с последующим мощным возгоранием. Кроме того, серьезные повреждения получили четыре производственных цеха комбината. Губернатор Ростовской области сообщил об отражении налета более 90 дронов в районе Каменска-Шахтинского. Удар парализовал ключевую технологическую цепочку снаряжения реактивных снарядов для российской армии.",
      "source": "Генеральный штаб ВСУ, губернатор Ростовской области, ASTRA, Exilenova+, WarZoneInc"
    },
    "uk": {
      "region": "Ростовська обл., м. Каменськ-Шахтинський, Садова вул., 1",
      "target": "ФКП «Комбінат \"Каменський\"» — завод із виробництва твердого ракетного палива та компонентів для РСЗВ",
      "category": "ВПК",
      "weapon": "Комбінований удар (БпЛА та КР «Нептун»)",
      "details": "У ніч на 31 жовтня 2026 року підрозділи Сил оборони України здійснили комбіновану атаку із застосуванням далекобійних безпілотників та крилатих ракет «Нептун» ВМС ЗСУ по оборонному підприємству ФКП «Комбінат \"Каменський\"» у Ростовській області. Комбінат належить до найважливіших об'єктів ВПК РФ і спеціалізується на виготовленні твердого ракетного палива та зарядів для реактивних систем залпового вогню «Град», «Ураган», «Смерч» і «Торнадо-С». За офіційним зведенням Генерального штабу ЗСУ, влучання призвели до масштабного займання складу готової продукції твердого палива та руйнування чотирьох виробничих цехів підприємства. Губернатор Ростовської області підтвердив масовану повітряну атаку понад 90 безпілотників у районі Каменська-Шахтинського. Успішне ураження комбінату завдало нищівного удару по потужностях ворога із забезпечення реактивної артилерії боєприпасами.",
      "source": "Генеральний штаб ЗСУ, губернатор Ростовської області, ASTRA, Exilenova+, WarZoneInc"
    },
    "en": {
      "region": "Rostov Oblast, Kamensk-Shakhtinsky, Sadovaya St, 1",
      "target": "FKP Kamensky Combine — solid propellant and rocket artillery munition components plant",
      "category": "Military-Industrial Complex",
      "weapon": "Combined strike (UAVs and Neptune cruise missiles)",
      "details": "On the night of October 31, 2026, Ukrainian Defense Forces conducted a coordinated assault combining long-range strike drones and naval Neptune cruise missiles against the Kamensky Combine defense enterprise in Rostov Oblast. The facility is a premier chemical asset of Russia's military-industrial complex, dedicated to manufacturing solid rocket propellants, advanced polymers, and explosive formulations for Grad, Uragan, Smerch, and Tornado-S multiple rocket launch systems. The General Staff of the Armed Forces of Ukraine officially reported that strikes ignited a finished solid propellant storage warehouse and inflicted structural damage across four production workshops. Regional governor Yuri Slyusar confirmed an overnight wave exceeding 90 drones targeting Kamensk-Shakhtinsky and nearby sectors. Disrupting the combine directly constrains Russia's capacity to produce solid-fuel rocket artillery munitions.",
      "source": "General Staff of the AFU, Rostov Oblast Governor, ASTRA, Exilenova+, WarZoneInc"
    },
    "images": [
      "images/kamensky_combine_3110_img1.jpg",
      "images/kamensky_combine_3110_img2.jpg",
      "images/kamensky_combine_3110_img3.jpg",
      "images/kamensky_combine_3110_img4.jpg"
    ],
    "id": 564
  },
  {
    "date": "31.10.2026",
    "lat": 54.8988,
    "lng": 56.0967,
    "distance": null,
    "ru": {
      "region": "Республика Башкортостан, г. Уфа, Орджоникидзевский район",
      "target": "Филиал ПАО АНК «Башнефть» «Башнефть-Новойл» (ПАО «НК \"Роснефть\"») — нефтеперерабатывающий завод",
      "category": "Нефтегаз / НПЗ",
      "weapon": "Дальнобойные БПЛА",
      "details": "Утром 31 октября 2026 года дальнобойные украинские дроны преодолели свыше 1350 километров и атаковали производственную площадку нефтеперерабатывающего завода «Башнефть-Новойл» в Уфе. Предприятие входит в состав Уфимского нефтеперерабатывающего комплекса «Роснефти» совокупной мощностью 23,5 млн тонн сырья в год, являясь производителем моторных бензинов класса «Евро-6», дизтоплива и парафинов. В результате серии прилетов беспилотников в промзоне вспыхнули не менее трех очагов возгорания. OSINT-анализ фото- и видеоматериалов подтвердил прямое попадание в ключевую установку каталитического риформинга Л-35, предназначенную для получения высокооктановых компонентов бензина. Пожар сопровождался открытым горением технологических колонн и густым задымлением. Власти Башкортостана ввели режим воздушной опасности и закрыли аэропорт Уфы. Успешный удар продемонстрировал уязвимость ключевых тыловых НПЗ РФ на экстремальных дистанциях.",
      "source": "ASTRA, @ASupersharij, Supernova+, Exilenova+, Crimeanwind, Минэнерго РФ"
    },
    "uk": {
      "region": "Республіка Башкортостан, м. Уфа, Орджонікідзевський район",
      "target": "Філія ПАТ АНК «Башнафта» «Башнафта-Новойл» (ПАТ «НК \"Роснафта\"») — нафтопереробний завод",
      "category": "Нафтогаз / НПЗ",
      "weapon": "Далекобійні БпЛА",
      "details": "Уранці 31 жовтня 2026 року українські ударні дрони подолали понад 1350 кілометрів та завдали удару по нафтопереробному заводу «Башнафта-Новойл» в Уфі. Завод є невіддільною частиною потужного Уфімського нафтопереробного вузла «Роснафти» загальною потужністю 23,5 млн тонн нафти на рік, що виробляє бензини стандарту «Євро-6», дизель та авіаційні мастила. Унаслідок атаки безпілотників на технологічній території виникло щонайменше три осередки пожеж. OSINT-аналіз підтвердив ураження критично важливої установки каталітичного риформінгу Л-35, яка відповідає за випуск високооктанових компонентів пального. Відкрите полум'я охопило технологічні колони та трубопроводи, викликавши густий дим над усім районом. Влада Башкортостану була змушена запровадити план «Килим» і зупинити роботу аеропорту Уфи. Ураження уфімського кластера завдало чергового болючого удару по паливному сектору ворога.",
      "source": "ASTRA, @ASupersharij, Supernova+, Exilenova+, Crimeanwind, Міненерго РФ"
    },
    "en": {
      "region": "Republic of Bashkortostan, Ufa, Ordzhonikidzevsky District",
      "target": "Bashneft-Novoil Refinery (Rosneft) — oil refinery plant",
      "category": "Oil & Gas / Refinery",
      "weapon": "Long-range UAVs",
      "details": "On the morning of October 31, 2026, Ukrainian long-range strike drones traveled over 1,350 kilometers to strike the Bashneft-Novoil oil refinery in Ufa. Operating within Rosneft's unified Ufa refining complex with a joint capacity of 23.5 million tons annually, the facility specializes in Euro-6 gasoline, diesel, and specialty industrial oils. Eyewitness videos verified multiple UAV impacts, creating at least three distinct fires across the industrial sector. Geolocation and OSINT assessments indicated that the primary impact struck the critical L-35 catalytic reforming unit responsible for generating high-octane gasoline blending components. Heavy smoke plumes rose as refinery towers burned. Regional authorities instituted air alert protocols and temporarily grounded all commercial operations at Ufa International Airport. The raid underscores Ukraine's capability to deliver precise strikes against deep strategic refining assets.",
      "source": "ASTRA, @ASupersharij, Supernova+, Exilenova+, Crimeanwind, Russian Ministry of Energy"
    },
    "images": [
      "video/ufa_bashneft_3110_vid1.mp4",
      "video/ufa_bashneft_3110_vid2.mp4",
      "images/ufa_bashneft_3110_img1.jpg",
      "images/ufa_bashneft_3110_img2.jpg",
      "images/ufa_bashneft_3110_img3.jpg",
      "images/ufa_bashneft_3110_img4.jpg"
    ],
    "id": 563
  },
  {
    "date": "30.10.2026",
    "lat": 53.0850,
    "lng": 49.9230,
    "distance": null,
    "ru": {
      "region": "Самарская обл., г. Новокуйбышевск, ул. Осипенко, 12",
      "target": "АО «Новокуйбышевский НПЗ» (ПАО «НК \"Роснефть\"») — нефтеперерабатывающий завод",
      "category": "Нефтегаз / НПЗ",
      "weapon": "Дальнобойные БПЛА",
      "details": "Рано утром 30 октября 2026 года Силы обороны Украины нанесли результативный удар дальнобойными дронами-камикадзе по Новокуйбышевскому нефтеперерабатывающему заводу в Самарской области. Предприятие принадлежит компании «Роснефть» и обладает проектной мощностью переработки до 8,3 млн тонн сырой нефти в год. Завод специализируется на выпуске моторных топлив высших экологических стандартов, а также реактивного керосина марок ТС-1 и РТ для военной авиации. В результате попаданий дронов на объекте вспыхнул масштабный пожар, столб черного дыма от которого поднялся на сотни метров. По данным спутникового мониторинга и свидетельствам очевидцев, тяжелые повреждения получила установка первичной переработки нефти АВТ-9, что привело к аварийной остановке технологического цикла. Вице-премьер РФ Александр Новак публично подтвердил атаки ВСУ на российские НПЗ. Завод повторно выведен из строя, усугубляя дефицит дизеля в центральных регионах.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, вице-премьер РФ А. Новак, губернатор Самарской области"
    },
    "uk": {
      "region": "Самарська обл., м. Новокуйбишевськ, вул. Осипенка, 12",
      "target": "АТ «Новокуйбишевський НПЗ» (ПАТ «НК \"Роснафта\"») — нафтопереробний завод",
      "category": "Нафтогаз / НПЗ",
      "weapon": "Далекобійні БпЛА",
      "details": "Уранці 30 жовтня 2026 року Сили оборони України завдали влучного удару далекобійними дронами по Новокуйбишевському нафтопереробному заводу в Самарській області. Підприємство входить до структури корпорації «Роснафта» та має проєктну потужність переробки сировини на рівні 8,3 млн тонн на рік. Завод є стратегічним виробником палива, зокрема реактивного гасу марок ТС-1 і РТ для потреб військової авіації окупаційних військ. Після ударів безпілотників на території НПЗ спалахнула потужна пожежа з викидом високого стовпа чорного диму. Аналіз супутникових даних підтвердив пряме ураження установки первинної переробки нафти АВТ-9, через що технологічний процес на підприємстві було повністю паралізовано. Віцепрем'єр РФ Олександр Новак офіційно підтвердив відновлення ударів по російських НПЗ. Чергове виведення заводу з ладу загострює кризу забезпечення ворожої армії паливно-мастильними матеріалами.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, віцепрем'єр РФ О. Новак, губернатор Самарської області"
    },
    "en": {
      "region": "Samara Oblast, Novokuibyshevsk, Osipenko St, 12",
      "target": "JSC Novokuibyshevsk Refinery (Rosneft) — oil refinery plant",
      "category": "Oil & Gas / Refinery",
      "weapon": "Long-range UAVs",
      "details": "In the early morning of October 30, 2026, Ukrainian Defense Forces launched long-range strike UAVs against the Novokuibyshevsk Oil Refinery in Samara Oblast. Operated by Rosneft, the plant maintains a refining capacity of 8.3 million tons of crude oil per year and supplies major volumes of high-octane gasoline, diesel, and TS-1 jet fuel for Russian military aviation. Multiple drone impacts ignited a massive fire, sending thick columns of smoke over the industrial district. Independent satellite imagery and eyewitness documentation revealed critical structural damage to the AVT-9 primary crude distillation unit, forcing emergency shutdown procedures across the production line. Russian Deputy Prime Minister Aleksandr Novak publicly acknowledged Ukrainian strikes targeting domestic refineries on October 30. The shutdown severely degrades fuel distribution hubs supporting logistics networks in European Russia.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, Russian Deputy PM A. Novak, Samara Oblast Governor"
    },
    "images": [
      "video/novokuibyshevsk_npz_3010_vid1.mp4",
      "video/novokuibyshevsk_npz_3010_vid2.mp4",
      "images/novokuibyshevsk_npz_3010_img1.jpg",
      "images/novokuibyshevsk_npz_3010_img2.jpg",
      "images/novokuibyshevsk_npz_3010_img3.jpg",
      "images/novokuibyshevsk_npz_3010_img4.jpg"
    ],
    "id": 562
  },
  {
    "date": "29.10.2026",
    "lat": 48.6394,
    "lng": 43.7850,
    "distance": null,
    "ru": {
      "region": "Волгоградская обл., Калачевский район, пос. Октябрьский",
      "target": "Военный аэродром «Мариновка» ВКС РФ: уничтожение двух истребителей-бомбардировщиков Су-34 ракетами «Нептун»",
      "category": "Военные аэродромы",
      "weapon": "Крылатые ракеты Р-360 «Нептун»",
      "details": "29 октября 2026 года ракетные войска ВМС Вооруженных сил Украины нанесли высокоточный удар модифицированными крылатыми ракетами «Нептун» («Длинный Нептун») по военному аэродрому «Мариновка» в Волгоградской области. Авиабаза является местом постоянной дислокации 11-го смешанного авиационного полка 4-й армии ВВС и ПВО России, самолеты которого наносят удары корректируемыми авиабомбами по позициям украинских войск. Согласно официальному подтверждению Генерального штаба ВСУ, в результате огневого поражения уничтожено два фронтовых сверхзвуковых бомбардировщика Су-34 общей стоимостью около 100 миллионов долларов. Спутниковые снимки зафиксировали очаги интенсивного горения на стоянках авиатехники и обломки фюзеляжей. Поражение ключевых носителей авиабомб КАБ снижает наступательный потенциал фронтовой авиации противника. Операция стала одной из самых дальнобойных и результативных ракетных атак по военной авиации РФ.",
      "source": "Генеральный штаб ВСУ, NASA FIRMS, OSINT-группа «КіберБорошно», Exilenova+, Supernova+"
    },
    "uk": {
      "region": "Волгоградська обл., Калачівський район, сел. Октябрський",
      "target": "Військовий аеродром «Мариновка» ВКС РФ: знищення двох винищувачів-бомбардувальників Су-34 ракетами «Нептун»",
      "category": "Військові аеродроми",
      "weapon": "Крилаті ракети Р-360 «Нептун»",
      "details": "29 жовтня 2026 року підрозділи берегових ракетних комплексів «Нептун» Військово-морських сил ЗСУ завдали результативного удару по військовому аеродрому «Мариновка» у Волгоградській області РФ. Авіабаза використовується як передовий вузол базування 11-го змішаного авіаполку 4-ї армії ВПС та ППО РФ, чиї літаки систематично застосовують керовані авіабомби проти українських позицій. Генеральний штаб ЗСУ офіційно підтвердив ліквідацію двох ворожих фронтових надзвукових літаків Су-34 загальною ринковою вартістю близько 100 мільйонів доларів. Оприлюднені супутникові знімки засвідчили великі сліди згарищ на відкритих стоянках авіатехніки та розльоти уламків уражених бортів. Знищення носіїв КАБів відчутно знижує спроможність противника здійснювати авіаційний терор прифронтових рубежів. Ця атака стала однією з найглибших ракетних операцій вітчизняного комплексу «Довгий Нептун».",
      "source": "Генеральний штаб ЗСУ, NASA FIRMS, OSINT-група «КіберБорошно», Exilenova+, Supernova+"
    },
    "en": {
      "region": "Volgograd Oblast, Kalachyovsky District, Oktyabrsky settlement",
      "target": "Marinovka Air Base of the Russian Aerospace Forces: two Su-34 fighter-bombers destroyed by Neptune missiles",
      "category": "Military Airfields",
      "weapon": "R-360 Neptune cruise missiles",
      "details": "On October 29, 2026, coastal missile units of the Ukrainian Navy executed a high-precision strike using Long Neptune cruise missiles against the Marinovka military airfield in Volgograd Oblast. The airbase serves as an operational hub for the Russian 11th Composite Aviation Regiment, whose aircraft routinely launch glide bombs (KABs) against Ukrainian front-line positions. The General Staff of the Armed Forces of Ukraine officially verified the complete destruction of two Su-34 supersonic fighter-bombers with an estimated replacement value of 100 million dollars. Satellite imagery confirmed widespread burn scars across hardened aircraft parking aprons alongside scattered fuselage wreckage. Eliminating advanced tactical strike aircraft directly degrades Russia's capacity to maintain aerial bombardment campaigns. The mission demonstrates the expanding standoff reach and lethality of Ukraine's domestically developed cruise missile arsenal.",
      "source": "General Staff of the AFU, NASA FIRMS, CyberBoroshno OSINT, Exilenova+, Supernova+"
    },
    "images": [
      "images/marinovka_airfield_2910_img1.jpg",
      "images/marinovka_airfield_2910_img2.jpg",
      "images/marinovka_airfield_2910_img3.jpg",
      "images/marinovka_airfield_2910_img4.jpg"
    ],
    "id": 561
  },
  {
    "date": "28.10.2026",
    "lat": 54.0793,
    "lng": 38.2252,
    "distance": null,
    "ru": {
      "region": "Тульская обл., г. Новомосковск, ул. Связи, 10",
      "target": "АО «НАК \"Азот\"» (холдинг «ЕвроХим») — химический комбинат сырья для взрывчатых веществ и порохов",
      "category": "ВПК / Химическая промышленность",
      "weapon": "Дальнобойные БПЛА",
      "details": "В ночь на 28 октября 2026 года Силы обороны Украины осуществили массированный налет дальнобойных дронов на Новомосковскую акционерную компанию «Азот» в Тульской области. Предприятие входит в минерально-химический холдинг «ЕвроХим» и является одним из крупнейших в России производителей аммиака, карбамида и концентрированной азотной кислоты. Завод играет критическую роль в технологической цепочке ВПК: азотная кислота и аммиачная селитра служат базовым сырьем для синтеза октогена, гексогена и твердых порохов на оборонных заводах Дзержинска. В результате серии прямых попаданий беспилотников на промышленной площадке вспыхнул сильный пожар. Огонь охватил технологический агрегат синтеза аммиака АМ-70, а также разрушил склад готовой продукции аммиачной селитры. Губернатор Тульской области подтвердил повреждения промышленной инфраструктуры после налета 64 дронов. Успешный удар нанес чувствительный урон производству боеприпасов для артиллерии ВС РФ.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, губернатор Тульской области"
    },
    "uk": {
      "region": "Тульська обл., м. Новомосковськ, вул. Связі, 10",
      "target": "АТ «НАК \"Азот\"» (холдинг «ЄвроХім») — хімічний комбінат сировини для вибухових речовин і порохів",
      "category": "ВПК / Хімічна промисловість",
      "weapon": "Далекобійні БпЛА",
      "details": "У ніч на 28 жовтня 2026 року Сили оборони України здійснили масований наліт далекобійних дронів на Новомосковську акціонерну компанію «Азот» у Тульській області. Підприємство входить до холдингу «ЄвроХім» та є одним із провідних виробників аміаку, карбаміду й концентрованої азотної кислоти в Росії. Завод відіграє критичну роль у функціонуванні російського ВПК: його продукція слугує фундаментальною сировиною для синтезу гексогену, октогену та порохів на спецпідприємствах Дзержинська. Унаслідок серії влучань безпілотників на промисловому майданчику спалахнула масштабна пожежа. Вогонь уразив технологічну установку синтезу аміаку АМ-70 та повністю зруйнував склад готової продукції аміачної селітри. Губернатор Тульської області визнав пошкодження промислової інфраструктури в місті після нальоту 64 безпілотників. Удар суттєво послабив ланцюги постачання прекурсорів для виробництва артснарядів армії РФ.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, губернатор Тульської області"
    },
    "en": {
      "region": "Tula Oblast, Novomoskovsk, Svyazi St, 10",
      "target": "JSC NAC Azot (EuroChem Group) — chemical plant producing raw materials for explosives and gunpowders",
      "category": "Military-Industrial Complex / Chemical Industry",
      "weapon": "Long-range UAVs",
      "details": "On the night of October 28, 2026, Ukrainian Defense Forces launched a concentrated long-range drone attack against the JSC Novomoskovsk Joint Stock Company Azot chemical combine in Tula Oblast. An asset of the EuroChem mineral and chemical holding, the facility is one of Russia's primary producers of ammonia, urea, and concentrated nitric acid. The enterprise is a vital pillar for the Russian military-industrial complex, supplying essential precursors for the synthesis of RDX, HMX, and artillery propellants manufactured in Dzerzhinsk. Multiple direct UAV impacts triggered severe fires across the facility grounds. The strikes heavily damaged the AM-70 ammonia synthesis unit and ignited a warehouse storing ammonium nitrate finished goods. The governor of Tula Oblast acknowledged damage to industrial zone infrastructure following an assault involving 64 drones. The strike delivered a substantial disruption to Russia's ammunition and explosives supply chain.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, Tula Oblast Governor"
    },
    "images": [
      "video/novomoskovsk_azot_2810_vid1.mp4",
      "video/novomoskovsk_azot_2810_vid2.mp4",
      "images/novomoskovsk_azot_2810_img1.jpg",
      "images/novomoskovsk_azot_2810_img2.jpg",
      "images/novomoskovsk_azot_2810_img3.jpg"
    ],
    "id": 560
  }
];

const dataPath = path.join(__dirname, 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

const strikeData = new Function(dataContent + '; return strikeData;')();

// Check if any of 560..564 already exist
const existingIds = new Set(strikeData.map(x => x.id));
const toInsert = newEntries.filter(x => !existingIds.has(x.id));

if (toInsert.length > 0) {
  strikeData.unshift(...toInsert);
  const updatedFile = 'const strikeData = ' + JSON.stringify(strikeData, null, 2) + ';\n';
  fs.writeFileSync(dataPath, updatedFile, 'utf8');
  console.log(`Successfully inserted ${toInsert.length} new entries (IDs: ${toInsert.map(x => x.id).join(', ')}). Total entries: ${strikeData.length}`);
} else {
  console.log("All entries already exist in data.js.");
}
