const fs = require('fs');

const content = fs.readFileSync('data.js', 'utf8');
const dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
const strikeData = new Function('return ' + dataStr)();

console.log('Current strike count:', strikeData.length);
console.log('Highest ID:', Math.max(...strikeData.map(d => d.id)));

const newEntries = [
  {
    "date": "25.09.2026",
    "lat": 57.9150,
    "lng": 56.1750,
    "distance": 1565,
    "ru": {
      "region": "Пермский край, Пермь (Индустриальный район)",
      "target": "Нефтеперерабатывающий завод «Лукойл-Пермнефтеоргсинтез» (ООО «ЛУКОЙЛ-ПНОС») — установка АВТ-5",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 25 сентября 2026 года украинские ударные БПЛА совершили сверхдальний налет на глубину свыше 1500 км, атаковав «Лукойл-Пермнефтеоргсинтез» в Перми. Около 04:30 несколько дронов типа «Лютый» спикировали на ключевую установку первичной перегонки нефти АВТ-5. На объекте прогремели взрывы, начался пожар, охвативший колонну и подходящие трубопроводы. Из-за угрозы масштабной аварии технологический процесс НПЗ был остановлен, а установки переведены в режим циркуляции. Губернатор Пермского края Дмитрий Махонин подтвердил налет, на предприятии погиб один работник. Завод перерабатывает более 13 млн тонн нефти в год и служит базовым поставщиком горючего для восточных военных округов. Остановка АВТ-5 выбила значительную часть производственных мощностей предприятия.",
      "source": "Генштаб ВСУ, Командование СБС, губернатор Пермского края, ASTRA, Exilenova+, Supernova+"
    },
    "uk": {
      "region": "Пермський край, Перм (Індустріальний район)",
      "target": "Нафтопереробний завод «Лукойл-Пермнафтооргсинтез» (ТОВ «ЛУКОЙЛ-ПНОС») — установка АВТ-5",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч на 25 вересня 2026 року українські ударні БПЛА здійснили наддалекий наліт на глибину понад 1500 кілометрів, атакувавши один із найбільших нафтопереробних заводів Росії — «Лукойл-Пермнафтооргсинтез» у Пермі. Близько 04:30 за місцевим часом кілька безпілотників типу «Лютий» прорвалися до промзони підприємства та пікірували на ключову установку первинної атмосферно-вакуумної перегонки нафти АВТ-5. На технологічному майданчику пролунали сильні вибухи, спалахнула інтенсивна пожежа, що охопила колону та естакади трубопроводів. Через ризик масштабної катастрофи технологічний процес заводу екстрено зупинили, а установки перевели в режим циркуляції. Губернатор Пермського краю Дмитро Махонін підтвердив наліт на промисловий об'єкт, на підприємстві загинув один працівник. «Пермнафтооргсинтез» переробляє понад 13 мільйонів тонн нафти на рік і забезпечує пальним східні військові округи. Чергова зупинка АВТ-5 вибила значну частину потужностей заводу.",
      "source": "Генштаб ЗСУ, Командування СБС, губернатор Пермського краю, ASTRA, Exilenova+, Supernova+"
    },
    "en": {
      "region": "Perm Krai, Perm (Industrialny District)",
      "target": "Lukoil-Permnefteorgsintez Oil Refinery (LLC LUKOIL-PNOS) — AVT-5 Crude Distillation Unit",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of September 25, 2026, Ukrainian strike UAVs launched a deep strike exceeding 1,500 kilometers, hitting one of Russia's largest crude refineries, Lukoil-Permnefteorgsintez (PNOS) in Perm. Around 4:30 AM local time, several Liutyi-type drones penetrated factory airspace and plunged directly into the primary AVT-5 atmospheric-vacuum crude distillation unit. Powerful detonations shook the plant, triggering an intense fire that engulfed the main refining column and adjacent pipe racks. Faced with a catastrophic blaze, plant managers initiated an emergency facility shutdown and placed active systems into recirculation mode. Perm Krai Governor Dmitry Mahonin confirmed the strike on the industrial site, with local authorities reporting one worker killed. Permnefteorgsintez processes over 13 million tons of crude annually, serving as a pillar of petroleum supply for eastern military commands. Halting AVT-5 disabled a massive share of the facility's refining capacity.",
      "source": "General Staff of the AFU, SBS Command, Perm Krai Governor, ASTRA, Exilenova+, Supernova+"
    },
    "images": [
      "video/perm_npz_2509_vid1.mp4",
      "video/perm_npz_2509_vid2.mp4",
      "images/perm_npz_2509_img1.jpg",
      "images/perm_npz_2509_img2.jpg",
      "images/perm_npz_2509_img3.jpg",
      "images/perm_npz_2509_img4.jpg"
    ],
    "id": 486
  },
  {
    "date": "25.09.2026",
    "lat": 47.7820,
    "lng": 39.8510,
    "distance": 199,
    "ru": {
      "region": "Ростовская область, Красносулинский район (г. Новошахтинск)",
      "target": "Новошахтинский завод нефтепродуктов (АО «Новошахтинский ЗНП»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 25 сентября 2026 года Силы беспилотных систем Украины нанесли комбинированный удар по Новошахтинскому заводу нефтепродуктов в Ростовской области. По данным российского Минобороны, над регионом за ночь пытались сбить около 50 дронов, но часть из них пробила заградительный огонь и взорвалась на территории НПЗ. На технологических установках предприятия вспыхнул пожар. Одновременно в районе Новошахтинска украинские силы поразили две радиолокационные станции прикрытия: 64Л6 «Гамма-С1» и 39Н6 «Каста-2Е2», ослепив местную группировку ПВО. Губернатор Ростовской области Юрий Слюсарь официально подтвердил повреждения на заводе и сообщил о временной приостановке производственной деятельности. Завод мощностью до 7,5 миллиона тонн нефти в год является ключевым производителем дизельного топлива и мазута на юге России, снабжая группировки оккупационных войск на Донбассе. Повторный вывод завода из строя серьезно осложнил фронтовое снабжение горючим.",
      "source": "Генштаб ВСУ, 1-й отдельный центр СБС, губернатор Ростовской области, ASTRA, Exilenova+"
    },
    "uk": {
      "region": "Ростовська область, Красносулинський район (м. Новошахтинськ)",
      "target": "Новошахтинський завод нафтопродуктів (АТ «Новошахтинський ЗНП»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч на 25 вересня 2026 року Сили безпілотних систем України завдали комбінованого удару по Новошахтинському заводу нафтопродуктів у Ростовській області. За даними російського Міноборони, над регіоном намагалися збити близько 50 дронів, але частина пробила загороджувальний вогонь і вибухнула на території НПЗ. На технологічних установках спалахнула пожежа. Одночасно в районі Новошахтинська українські сили уразили дві радіолокаційні станції прикриття: 64Л6 «Гамма-С1» та 39Н6 «Каста-2Е2», засліпивши місцеву ППО. Губернатор Ростовської області Юрій Слюсар офіційно підтвердив пошкодження на заводі та оголосив про тимчасове призупинення виробничої діяльності. Завод потужністю до 7,5 мільйона тонн нафти на рік є ключовим виробником дизеля та мазуту на півдні РФ, живлячи угруповання окупаційних військ на Донбасі. Повторний вивід заводу з ладу серйозно ускладнив фронтове забезпечення пальним.",
      "source": "Генштаб ЗСУ, 1-й окремий центр СБС, губернатор Ростовської області, ASTRA, Exilenova+"
    },
    "en": {
      "region": "Rostov Oblast, Krasnosulinsky District (Novoshakhtinsk)",
      "target": "Novoshakhtinsk Refinery (JSC Novoshakhtinsk Oil Products Plant — NZNP)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of September 25, 2026, Ukraine's Unmanned Systems Forces executed a coordinated strike against the Novoshakhtinsk Oil Products Plant (NZNP) in Rostov Oblast. Russian defense officials claimed intercepting roughly 50 drones across the region, yet multiple UAVs breached air defenses to strike the refinery grounds. A major technological fire broke out across the facility. Concurrently, Ukrainian forces disabled two vital Russian air defense radars shielding the area: a 64L6 Gamma-S1 and a 39N6 Kasta-2E2, blinding local radar surveillance. Rostov Oblast Governor Yuriy Slyusar confirmed damage to refinery installations and announced the emergency suspension of all refining activities. Boasting an annual capacity of 7.5 million tons of crude, NZNP serves as a primary fuel supplier of diesel and fuel oil for Russian military formations active in the Donbas theater. Forcing the facility offline dealt a sharp blow to southern frontline logistics.",
      "source": "General Staff of the AFU, 1st SBS Center, Rostov Oblast Governor, ASTRA, Exilenova+"
    },
    "images": [
      "video/novoshakht_npz_2509_vid1.mp4",
      "images/novoshakht_npz_2509_img1.jpg",
      "images/novoshakht_npz_2509_img2.jpg"
    ],
    "id": 487
  },
  {
    "date": "25.09.2026",
    "lat": 54.3530,
    "lng": 48.3582,
    "distance": 957,
    "ru": {
      "region": "Ульяновская область, Ульяновск (Ленинский район)",
      "target": "АО «НПП «Завод Искра» (Концерн ВКО «Алмаз-Антей»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 25 сентября 2026 года дальнобойные украинские дроны преодолели около 950 километров и атаковали научно-производственное предприятие «Завод Искра» в Ульяновске. Предприятие входит в состав Концерна ВКО «Алмаз-Антей» и является стратегическим производителем полупроводников, СВЧ-микроэлектроники и гибридных интегральных схем. Завод выпускает элементную базу для бортовой аппаратуры управляемых авиационных ракет Х-59М2/М2А и боевых машин ЗРПК «Панцирь-С1». Около четырех часов утра дроны точно спикировали на производственные корпуса на проспекте Нариманова, вызвав серию детонаций и открытый огонь в цехах. Губернатор Ульяновской области Алексей Русских признал повреждения промышленного объекта и ранения восьми человек. Президент Украины Владимир Зеленский и Генштаб ВСУ официально подтвердили результативное поражение завода. Выбивание чистых помещений и оборудования на «Искре» парализовало выпуск ключевых электронных модулей для российских ракетных арсеналов.",
      "source": "Генштаб ВСУ, Президент Украины, губернатор Ульяновской области, OSINT (ASTRA), Exilenova+, Supernova+"
    },
    "uk": {
      "region": "Ульяновська область, Ульяновськ (Ленінський район)",
      "target": "АТ «НВП «Завод Іскра» (Концерн ВКО «Алмаз-Антей»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч на 25 вересня 2026 року далекобійні українські дрони подолали близько 950 кілометрів і атакували науково-виробниче підприємство «Завод Іскра» в Ульяновську. Завод входить до Концерну ВКО «Алмаз-Антей» і є стратегічним виробником напівпровідникових приладів, НВЧ-мікроелектроніки та гібридних інтегральних схем. Підприємство виготовляє елементну базу для бортової апаратури керованих авіаційних ракет Х-59М2/М2А та бойових машин ЗРГК «Панцир-С1». Близько четвертої ранку дрони влучно впали на виробничі корпуси на проспекті Наріманова, спричинивши серію вибухів і сильну пожежу в цехах. Губернатор Ульяновської області Олексій Руських підтвердив ураження промислового об'єкта та поранення восьми осіб. Президент України Володимир Зеленський та Генштаб ЗСУ офіційно верифікували ураження заводу. Виведення з ладу обладнання на «Іскрі» паралізувало випуск ключових електронних модулів для російської ракетної програми.",
      "source": "Генштаб ЗСУ, Президент України, губернатор Ульяновської області, OSINT (ASTRA), Exilenova+, Supernova+"
    },
    "en": {
      "region": "Ulyanovsk Oblast, Ulyanovsk (Leninsky District)",
      "target": "JSC R&D Enterprise Zavod Iskra (Almaz-Antey Air and Space Defense Corporation)",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "On the night of September 25, 2026, Ukrainian strike drones flew roughly 950 km to hit the Zavod Iskra Research and Production Enterprise in Ulyanovsk. Belonging to the Almaz-Antey Concern, the plant is a premier defense producer of semiconductors, microwave electronics, and hybrid circuits. The facility manufactures essential electronic components for Kh-59M2/M2A guided missiles and 72V6 combat vehicles of the Pantsir-S1 air defense system. Around 4:00 AM, drones hit production workshops on Narimanov Avenue, triggering detonations and fires inside factory bays. Regional Governor Aleksey Russkikh confirmed hits on the industrial site, with eight casualties reported. President Volodymyr Zelenskyy and Ukraine's General Staff officially verified the successful deep strike. Damaging cleanrooms at Iskra paralyzed the assembly of vital guidance modules.",
      "source": "General Staff of the AFU, President of Ukraine, Ulyanovsk Oblast Governor, OSINT (ASTRA), Exilenova+, Supernova+"
    },
    "images": [
      "video/iskra_ulyanovsk_2509_vid1.mp4",
      "video/iskra_ulyanovsk_2509_vid2.mp4",
      "images/iskra_ulyanovsk_2509_img1.jpg",
      "images/iskra_ulyanovsk_2509_img2.jpg",
      "images/iskra_ulyanovsk_2509_img3.jpg"
    ],
    "id": 488
  },
  {
    "date": "25.09.2026",
    "lat": 51.6425,
    "lng": 39.2225,
    "distance": 279,
    "ru": {
      "region": "Воронежская область, Воронеж (Левобережный район)",
      "target": "АО «Воронежсинтезкаучук» (холдинг «СИБУР») — цеха каучуков и резервуарный парк",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 25 сентября 2026 года ударные дроны Сил беспилотных систем Украины успешно поразили химический комбинат «Воронежсинтезкаучук» в Воронеже. Операцию провели подразделения 1-го отдельного центра СБС совместно с 414-й отдельной бригадой «Птахи Мадяра». Завод холдинга СИБУР является крупнейшим в России производителем полибутадиена, термоэластопластов и специальных каучуков, используемых в производстве твердого ракетного топлива, в том числе для баллистических ракет ОТРК «Искандер». Кроме того, продукция завода идет на выпуск военной авиационной и танковой резины. Очевидцы зафиксировали несколько прилетов и открытое горение технологических резервуаров с химическими компонентами. Губернатор Воронежской области Александр Гусев сообщил об отражении налета 88 дронов, признав ущерб производственным зданиям. Генштаб ВСУ официально подтвердил поражение объекта, нацеленное на срыв производственных циклов ракетного вооружения противника.",
      "source": "Генштаб ВСУ, Командование СБС (414 ОБр «Птахи Мадяра»), губернатор Воронежской области, OSINT (ASTRA), Exilenova+, Supernova+"
    },
    "uk": {
      "region": "Воронезька область, Воронеж (Лівобережний район)",
      "target": "АТ «Воронежсинтезкаучук» (холдинг «СІБУР») — цехи каучуків та резервуарний парк",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч на 25 вересня 2026 року ударні дрони Сил безпілотних систем України успішно уразили хімічний комбінат «Воронежсинтезкаучук» у Воронежі. Операцію провели бійці 1-го окремого центру СБС спільно з 414-ю окремою бригадою «Птахи Мадяра». Завод холдингу СІБУР є провідним у Росії виробником полібутадієну, термоеластопластів та спеціальних каучуків, необхідних для виробництва твердого ракетного палива для балістичних ракет ОТРК «Іскандер». Також продукція заводу критично важлива для випуску бронетанкових та авіаційних шин. Очевидці зафіксували влучання дронів і масштабну пожежу на резервуарному майданчику з хімічними реагентами. Губернатор Воронезької області Олександр Гусєв заявив про наліт 88 безпілотників, визнавши пошкодження виробничих будівель. Генштаб ЗСУ офіційно підтвердив успішне ураження підприємства для підриву військово-промислового потенціалу армії окупантів.",
      "source": "Генштаб ЗСУ, Командування СБС (414 ОБр «Птахи Мадяра»), губернатор Воронезької області, OSINT (ASTRA), Exilenova+, Supernova+"
    },
    "en": {
      "region": "Voronezh Oblast, Voronezh (Levoberezhny District)",
      "target": "Voronezhsintezkauchuk Chemical Plant (SIBUR Holding) — Rubber Units and Tank Farm",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "On the night of September 25, 2026, Ukrainian attack UAVs successfully struck the Voronezhsintezkauchuk petrochemical facility in Voronezh. The precision deep strike was carried out jointly by the 1st Separate SBS Center and the 414th Strike UAV Brigade 'Birds of Magyar'. As part of SIBUR Holding, the plant is Russia's premier producer of polybutadiene, thermoplastic elastomers, and synthetic rubbers vital for compounding solid rocket propellants utilized in Iskander-M ballistic missiles. Furthermore, the site produces heavy-duty synthetic rubber compounds for armored fighting vehicle tracks and combat aircraft tires. Eyewitness videos captured drone dive impacts and heavy fires erupting across chemical storage tanks. Voronezh Oblast Governor Aleksandr Gusev reported repelling an 88-drone attack, admitting direct structural damage to industrial facilities. Ukraine's General Staff confirmed the strike, aimed at disrupting Russia's missile production infrastructure.",
      "source": "General Staff of the AFU, SBS Command (414th Brigade Birds of Magyar), Voronezh Governor, OSINT (ASTRA), Exilenova+, Supernova+"
    },
    "images": [
      "video/voronezh_kauchuk_2509_vid1.mp4",
      "video/voronezh_kauchuk_2509_vid2.mp4",
      "images/voronezh_kauchuk_2509_img1.jpg",
      "images/voronezh_kauchuk_2509_img2.jpg",
      "images/voronezh_kauchuk_2509_img3.jpg"
    ],
    "id": 489
  },
  {
    "date": "25.09.2026",
    "lat": 53.1360,
    "lng": 38.1130,
    "distance": 336,
    "ru": {
      "region": "Тульская область, г. Ефремов (ул. Строителей)",
      "target": "ОАО «Ефремовский завод синтетического каучука» (ОАО «ЕЗСК») — производственные корпуса",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 25 сентября 2026 года украинские ударные беспилотники атаковали территорию ОАО «Ефремовский завод синтетического каучука» в городе Ефремов Тульской области. Предприятие представляет собой уникальное стратегическое звено военно-химической промышленности РФ, являясь единственным в стране производителем высокомолекулярного полиизобутилена. Данный полимер служит критически важным связующим веществом и присадкой для изготовления смесевого твердого ракетного топлива, которым снаряжаются баллистические ракеты комплексов «Искандер-М», а также спецсмазок для тяжелой бронетехники. Несмотря на работу российских расчетов ПВО (губернатор Тульской области Дмитрий Миляев отчитался о 33 перехваченных БПЛА), ударные дроны спикировали на производственную площадку завода. Генштаб ВСУ официально включил Ефремовский завод в перечень трех пораженных предприятий ракетного ВПК России. Нарушение выпуска полиизобутилена создает прямой дефицит компонентов для снаряжения ракетных двигателей.",
      "source": "Генштаб ВСУ, губернатор Тульской области, OSINT-мониторинг"
    },
    "uk": {
      "region": "Тульська область, м. Єфремов (вул. Будівельників)",
      "target": "ВАТ «Єфремовський завод синтетичного каучуку» (ВАТ «ЄЗСК») — виробничі корпуси",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч на 25 вересня 2026 року українські ударні безпілотники атакували територію ВАТ «Єфремовський завод синтетичного каучуку» в місті Єфремов Тульської області. Підприємство є унікальною стратегічною ланкою військово-хімічного комплексу РФ, виступаючи єдиним у країні виробником високомолекулярного поліізобутилену. Цей полімер є критично важливим компонентом та зв'язуючою речовиною для створення твердого ракетного палива, яким споряджають балістичні ракети комплексів «Іскандер-М», а також спецмастил для важкої бронетехніки. Попри протидію російської ППО (губернатор Тульської області Дмитро Міляєв заявив про 33 збиті БПЛА), дрони пікірували на виробничі потужності підприємства. Генштаб ЗСУ офіційно вніс Єфремовський завод до списку трьох уражених оборонних підприємств, задіяних у виробництві ракетного озброєння. Удар завдав серйозного удару по ланцюжку виготовлення твердопаливних ракетних двигунів.",
      "source": "Генштаб ЗСУ, губернатор Тульської області, OSINT-моніторинг"
    },
    "en": {
      "region": "Tula Oblast, Efremov (Stroitely Street)",
      "target": "OJSC Efremov Synthetic Rubber Plant (OJSC EZSK) — Production Workshops",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "On the night of September 25, 2026, Ukrainian strike drones carried out a targeted raid on the Efremov Synthetic Rubber Plant (OJSC EZSK) in Efremov, Tula Oblast. The enterprise occupies a vital niche in Russia's military-chemical supply chain as the sole domestic producer of high-molecular-weight polyisobutylene. This polymer serves as an essential binder and additive in fabricating composite solid rocket propellants powering Iskander-M ballistic missiles, as well as specialized lubricants for armored vehicles. Despite air defenses intercepting incoming UAVs (with Governor Dmitry Milyaev reporting 33 downed drones in Tula Oblast), strike drones slammed into plant workshops. Ukraine's General Staff officially confirmed hits on EZSK, identifying it as a key Russian missile supply facility degraded during the overnight operation. Disrupting polyisobutylene output creates acute shortages of rocket motor fuel components.",
      "source": "General Staff of the AFU, Tula Oblast Governor, OSINT monitoring"
    },
    "images": [],
    "id": 486
  }
];

// Assign IDs 486, 487, 488, 489, 490
newEntries[0].id = 486;
newEntries[1].id = 487;
newEntries[2].id = 488;
newEntries[3].id = 489;
newEntries[4].id = 490;

let allPassed = true;
newEntries.forEach(entry => {
    console.log(`\n--- Target ID ${entry.id}: ${entry.ru.target} ---`);
    ['ru', 'uk', 'en'].forEach(lang => {
        const text = entry[lang].details;
        const len = text.length;
        const sentences = text.split(/(?<=[.!?])\s+/).length;
        console.log(`  [${lang}] Length: ${len} chars | Sentences: ${sentences}`);
        if (len < 600 || len > 1000) {
            console.error(`  ERROR: ${lang} length out of bounds (600-1000): ${len}`);
            allPassed = false;
        }
        if (sentences < 4 || sentences > 8) {
            console.error(`  ERROR: ${lang} sentence count out of bounds (4-8): ${sentences}`);
            allPassed = false;
        }
    });
});

if (!allPassed) {
    console.error('Validation failed!');
    process.exit(1);
}

// Prepend newEntries to strikeData
const updatedData = [...newEntries, ...strikeData];

const updatedContent = 'const strikeData = ' + JSON.stringify(updatedData, null, 2) + ';\n';
fs.writeFileSync('data.js', updatedContent, 'utf8');
console.log(`\nAll validations passed! Successfully updated data.js! Total items: ${updatedData.length}`);
