const strikeData = [
  {
    "date": "01.01.2026",
    "lat": 44.85,
    "lng": 38.5769,
    "distance": 424,
    "ru": {
      "region": "Краснодарский край, Ильский",
      "target": "Ильский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В новогоднюю ночь зафиксировано попадание по объекту с последующим пожаром на территории предприятия.",
      "source": "СБС, Генштаб ВСУ"
    },
    "uk": {
      "region": "Краснодарський край, Ільський",
      "target": "Ільський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У новорічну ніч зафіксовано влучання по об'єкту з подальшою пожежею на території підприємства.",
      "source": "СБС, Генштаб ЗСУ"
    },
    "en": {
      "region": "Krasnodar Krai, Ilsky",
      "target": "Ilsky Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On New Year's night a direct hit was recorded po facilityu s subsequent fireom on the facility's territory.",
      "source": "SBS, AFU General Staff"
    },
    "id": 1
  },
  {
    "date": "01.01.2026",
    "lat": 53.8541,
    "lng": 34.4413,
    "distance": 329,
    "ru": {
      "region": "Калужская область, Людиново",
      "target": "Людиновская нефтебаза",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Поражены резервуары топливного хранилища («Калуганефтепродукт»), масштабный пожар зафиксирован спутниковыми снимками.",
      "source": "СБС"
    },
    "uk": {
      "region": "Калузька область, Людинове",
      "target": "Людиновська нафтобаза",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Уражені резервуари паливного сховища («Калуганафтопродукт»), масштабну пожежу зафіксовано супутниковими знімками.",
      "source": "СБС"
    },
    "en": {
      "region": "Kaluga Oblast, Lyudinovo",
      "target": "Lyudinovskaya Fuel Depot",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Fuel tanks were struck fuel storage facility (\"Kaluganefteprodukt\"), large-scale fire zafiksirovan satellite imagery.",
      "source": "SBS"
    },
    "id": 2
  },
  {
    "date": "01.01.2026",
    "lat": 54.89,
    "lng": 52.29,
    "distance": 1213,
    "ru": {
      "region": "Республика Татарстан, Альметьевский район",
      "target": "Установка подготовки нефти «Альметьевская»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Успешная атака беспилотников на стратегический нефтяной объект.",
      "source": "СБС, Генштаб ВСУ"
    },
    "uk": {
      "region": "Республіка Татарстан, Альметьєвський район",
      "target": "Установка підготовки нафти «Альметьєвська»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Успішна атака безпілотників на стратегічний нафтовий об'єкт.",
      "source": "СБС, Генштаб ЗСУ"
    },
    "en": {
      "region": "Republic of Tatarstan, Almetyevsky District",
      "target": "Oil Treatment Unit \"Almetyevskaya\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "successful strike droneov na strategic oil facility.",
      "source": "SBS, AFU General Staff"
    },
    "id": 3
  },
  {
    "date": "08.01.2026",
    "lat": 45.1167,
    "lng": 34,
    "distance": 200,
    "ru": {
      "region": "АР Крым, пгт Гвардейское",
      "target": "Нефтебаза",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Ударные беспилотники ССО поразили подвижной состав с горюче-смазочными материалами прямо на топливной эстакаде нефтебазы.",
      "source": "ССО, Генштаб ВСУ"
    },
    "uk": {
      "region": "АР Крим, смт Гвардійське",
      "target": "Нафтобаза",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Ударні безпілотники ССО уразили рухомий склад з паливно-мастильними матеріалами прямо на паливній естакаді нафтобази.",
      "source": "ССО, Генштаб ЗСУ"
    },
    "en": {
      "region": "AR Crimea, пгт Gvardeyskoe",
      "target": "Fuel Depot",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "strike drones SOF porazili rolling stock with fuel and lubricants pryamo na fuel loading rack fuel depot.",
      "source": "SOF, AFU General Staff"
    },
    "id": 4
  },
  {
    "date": "10.01.2026",
    "lat": 48.53,
    "lng": 44.58,
    "distance": 514,
    "ru": {
      "region": "Волгоградская область, Волгоград",
      "target": "Волгоградский НПЗ / Нефтебаза",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В результате падения обломков возникло возгорание, рассматривалась возможность эвакуации населения.",
      "source": "OSINT"
    },
    "uk": {
      "region": "Волгоградська область, Волгоград",
      "target": "Волгоградський НПЗ / Нафтобаза",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Внаслідок падіння уламків виникло загоряння, розглядалася можливість евакуації населення.",
      "source": "OSINT"
    },
    "en": {
      "region": "Volgograd Oblast, Volgograd",
      "target": "Volgogradskiy Oil Refinery / Fuel Depot",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "As a result of falling debris vozniklo fire outbreak, evacuation of the population was considered.",
      "source": "OSINT"
    },
    "id": 5
  },
  {
    "date": "11.01.2026",
    "lat": 45.0022,
    "lng": 48.4791,
    "distance": 925,
    "ru": {
      "region": "Акватория Каспийского моря",
      "target": "Буровые установки корпорации «Лукойл»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Поражены три ледостойкие стационарные платформы (им. В. Филановского, Юрия Корчагина и Валерия Грайфера), остановлена работа скважин.",
      "source": "ССО, Генштаб ВСУ"
    },
    "uk": {
      "region": "Акваторія Каспійського моря",
      "target": "Бурові установки корпорації «Лукойл»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Уражено три льодостійкі стаціонарні платформи (ім. В. Філановського, Юрія Корчагіна та Валерія Грайфера), зупинено роботу свердловин.",
      "source": "ССО, Генштаб ЗСУ"
    },
    "en": {
      "region": "Caspian Sea Waters",
      "target": "Drilling Rigs Corporation \"Lukoyl\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "were struck tri ice-resistant stationary platforms (im. V. Filanovskogo, Yuriya Korchagina i Valeriya Grayfera), well operations were halted.",
      "source": "SOF, AFU General Staff"
    },
    "id": 6
  },
  {
    "date": "16.01.2026",
    "lat": 51.625,
    "lng": 39.145,
    "distance": 274,
    "ru": {
      "region": "Воронежская область, Воронеж",
      "target": "Аэродром «Балтимор»",
      "category": "Военная инфраструктура / Авиация",
      "weapon": "Дрон",
      "details": "Массированная атака беспилотников на город и военный аэродром, где базируются фронтовые бомбардировщики Су-34. В городе вводился режим ЧС, зафиксированы повреждения от обломков.",
      "source": "OSINT, СМИ РФ"
    },
    "uk": {
      "region": "Воронезька область, Воронеж",
      "target": "Аеродром «Балтимор»",
      "category": "Військова інфраструктура / Авіація",
      "weapon": "Дрон",
      "details": "Масована атака безпілотників на місто та військовий аеродром, де базуються фронтові бомбардувальники Су-34. У місті запроваджувався режим НС, зафіксовано пошкодження від уламків.",
      "source": "OSINT, ЗМІ РФ"
    },
    "en": {
      "region": "Voronezh Oblast, Voronezh",
      "target": "Airfield \"Baltimor\"",
      "category": "Military Infrastructure / Aviation",
      "weapon": "Drone",
      "details": "massive strike droneov na city i military airfield, gde baziruyutsya frontline bombers Su-34. V citye a state of emergency was declared emergency, damage was recorded ot debris.",
      "source": "OSINT, Russian Media"
    },
    "id": 7
  },
  {
    "date": "18.01.2026",
    "lat": 59.878,
    "lng": 29.865,
    "distance": 936,
    "ru": {
      "region": "Санкт-Петербург",
      "target": "Петербургский нефтяной терминал",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Историческая операция ГУР МО. Впервые с начала полномасштабной войны украинский ударный беспилотник пролетел более 1200 км и достиг Ленинградской области, поразив инфраструктуру крупнейшего российского терминала по перевалке нефтепродуктов в Балтийском регионе.",
      "source": "ГУР, OSINT"
    },
    "uk": {
      "region": "Санкт-Петербург",
      "target": "Петербурзький нафтовий термінал",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Історична операція ГУР МО. Вперше з початку повномасштабної війни український ударний безпілотник пролетів понад 1200 км і досяг Ленінградської області, уразивши інфраструктуру найбільшого російського термінала з перевалки нафтопродуктів у Балтійському регіоні.",
      "source": "ГУР, OSINT"
    },
    "en": {
      "region": "Санкт-Петербург",
      "target": "Peterburgskiy neftyanoy Terminal",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "historic operation HUR MoD. For the first time since the start of the full-scale war Ukrainian strike drone proletel bolee 1200 km i dostig Leningradskoy oblast, poraziv infrastrukturu krupneyshego Russian terminala po transshipment of petroleum products v Baltic region.",
      "source": "HUR, OSINT"
    },
    "id": 8
  },
  {
    "date": "19.01.2026",
    "lat": 52.752,
    "lng": 32.235,
    "distance": 154,
    "ru": {
      "region": "Брянская область, Клинцы",
      "target": "Клинцовская нефтебаза (ОАО «Брянскнефтепродукт»)",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Успешная операция ГУР МО. В результате удара БПЛА вспыхнул масштабный пожар, горело минимум четыре резервуара с топливом общим объемом около 6 тыс. кубометров. Огонь был настолько сильным, что его тушили более двух суток.",
      "source": "ГУР, OSINT"
    },
    "uk": {
      "region": "Брянська область, Клинці",
      "target": "Клинцівська нафтобаза (ВАТ «Брянськнафтопродукт»)",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Успішна операція ГУР МО. Унаслідок удару БПЛА спалахнула масштабна пожежа, горіло щонайменше чотири резервуари з пальним загальним об'ємом близько 6 тис. кубометрів. Вогонь був настільки сильним, що його гасили понад дві доби.",
      "source": "ГУР, OSINT"
    },
    "en": {
      "region": "Bryansk Oblast, Klintsy",
      "target": "Klintsovskaya Fuel Depot (OAO \"Bryansknefteprodukt\")",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "successful operation HUR MoD. As a result of the strike UAV vspykhnul large-scale fire, burned at least chetyre storage tanka s fuelm obshchim obemom okolo 6 tys. cubic meters. Ogon byl nastolko silnym, chto ego was extinguished bolee dvukh days.",
      "source": "HUR, OSINT"
    },
    "id": 9
  },
  {
    "date": "21.01.2026",
    "lat": 54.823,
    "lng": 32.028,
    "distance": 373,
    "ru": {
      "region": "Смоленская область, Смоленск",
      "target": "Смоленский авиационный завод (СмАЗ)",
      "category": "ВПК / Авиация",
      "weapon": "Дрон",
      "details": "Удар по стратегическому предприятию, производящему крылатые ракеты Х-59 и дроны-«обманки». Зафиксированы взрывы на территории завода.",
      "source": "ГУР, OSINT"
    },
    "uk": {
      "region": "Смоленська область, Смоленськ",
      "target": "Смоленський авіаційний завод (СмАЗ)",
      "category": "ВПК / Авіація",
      "weapon": "Дрон",
      "details": "Удар по стратегічному підприємству, що виробляє крилаті ракети Х-59 та дрони-«обманки». Зафіксовано вибухи на території завода.",
      "source": "ГУР, OSINT"
    },
    "en": {
      "region": "Smolensk Oblast, Smolensk",
      "target": "Smolenskiy aviatsionnyy Plant (SmAZ)",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "strike on strategicheskomu predpriyatiyu, proizvodyashchemu cruise missiles Kh-59 i drones-\"obmanki\". explosions were recorded on the plant's territory.",
      "source": "HUR, OSINT"
    },
    "id": 10
  },
  {
    "date": "21.01.2026",
    "lat": 59.666,
    "lng": 28.278,
    "distance": 927,
    "ru": {
      "region": "Ленинградская область, порт Усть-Луга",
      "target": "Морской терминал компании «Новатэк»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Успешная спецоперация СБУ. Беспилотники поразили завод по переработке газового конденсата. Вспыхнул колоссальный пожар, предприятие было вынуждено полностью остановить технологический процесс и отгрузку топлива на экспорт.",
      "source": "СБУ"
    },
    "uk": {
      "region": "Ленінградська область, порт Усть-Луга",
      "target": "Морський термінал компанії «Новатек»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Успішна спецоперація СБУ. Безпілотники уразили завод з переробки газового конденсату. Спалахнула колосальна пожежа, підприємство було змушене повністю зупинити технологічний процес та відвантаження пального на экспорт.",
      "source": "СБУ"
    },
    "en": {
      "region": "Leningrad Oblast, порт Усть-Луга",
      "target": "Morskoy Terminal kompanii \"Novatek\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Uspeshnaya spetsoperation SBU. drones porazili plant po pererabotke gasovogo kondensata. Vspykhnul kolossalnyy fire, facility bylo vynuzhdeno polnostyu ostanovit tekhnologicheskiy protsess i otgruzku topliva na eksport.",
      "source": "SBU"
    },
    "id": 11
  },
  {
    "date": "23.01.2026",
    "lat": 53.2069,
    "lng": 45.0765,
    "distance": 707,
    "ru": {
      "region": "Пензенская область, Пенза",
      "target": "Нефтебаза «Пензанефтепродукт» и ТЭЦ",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Мощный пожар на нефтебазе, а также зафиксированы последствия удара по местному энергообъекту (ТЭЦ).",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Пензенська область, Пенза",
      "target": "Нафтобаза «Пензанафтопродукт» та ТЕЦ",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Потужна пожежа на нафтобазі, а також зафіксовано наслідки удару по місцевому енергооб'єкту (ТЕЦ).",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Penza Oblast, Penza",
      "target": "Fuel Depot \"Penzanefteprodukt\" i Heat & Power Plant",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "powerful fire na fuel depot, a takzhe zafiksirovany posledstviya of the strike po mestnomu energofacilityu (heat & power plant).",
      "source": "AFU General Staff"
    },
    "id": 12
  },
  {
    "date": "24.01.2026",
    "lat": 44.1086,
    "lng": 39.0911,
    "distance": 515,
    "ru": {
      "region": "Краснодарский край, Туапсе",
      "target": "Туапсинский НПЗ («Роснефть»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Успешная операция СБУ. Масштабный пожар на вакуумной установке, завод временно полностью остановил переработку нефти.",
      "source": "SBU, OSINT"
    },
    "uk": {
      "region": "Краснодарський край, Туапсе",
      "target": "Туапсинський НПЗ («Роснефть»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Успішна операція СБУ. Масштабна пожежа на вакуумній установці, завод тимчасово повністю зупинив переробку нафти.",
      "source": "SBU, OSINT"
    },
    "en": {
      "region": "Krasnodar Krai, Tuapse",
      "target": "Tuapsinskiy Oil Refinery (\"Rosneft\")",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "successful operation SBU. large-scale fire na vakuumnoy ustanovke, plant vremenno polnostyu ostanovil pererabotku oil.",
      "source": "SBU, OSINT"
    },
    "id": 13
  },
  {
    "date": "28.01.2026",
    "lat": 51.5863,
    "lng": 38.7625,
    "distance": 251,
    "ru": {
      "region": "Воронежская область, Хохольский район",
      "target": "Нефтебаза «Хохольская»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Подтверждено возгорание нефтепродуктов на ключевой базе обеспечения северной группировки войск РФ.",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Воронезька область, Хохольський район",
      "target": "Нафтобаза «Хохольська»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Підтверджено загоряння нафтопродуктів на ключовій базі забезпечення північного угруповання військ РФ.",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Voronezh Oblast, Хохольский район",
      "target": "Fuel Depot \"Khokholskaya\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "confirmed fire outbreak petroleum products na klyuchevoy baze obespecheniya severnoy gruppirovki voysk RF.",
      "source": "AFU General Staff"
    },
    "id": 14
  },
  {
    "date": "31.01.2026",
    "lat": 59.907,
    "lng": 30.395,
    "distance": 937,
    "ru": {
      "region": "Санкт-Петербург",
      "target": "Завод «Невский мазут»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Операция ГУР. Ударный беспиник успешно преодолел ПВО над городом и упал на территории нефтеперерабатывающего предприятия (Глухоозерское шоссе), повредив пустые резервуары и автомобили.",
      "source": "ГУР, СМИ РФ"
    },
    "uk": {
      "region": "Санкт-Петербург",
      "target": "Завод «Невський мазут»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Операція ГУР. Ударний безпілотник успішно подолав ППО над містом і впав на території нафтопереробного підприємства (Глухоозерське шосе), пошкодивши порожні резервуари та автомобілі.",
      "source": "ГУР, ЗМІ РФ"
    },
    "en": {
      "region": "Санкт-Петербург",
      "target": "Plant \"Nevskiy mazut\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "operation HUR. strikenyy bespinik successfully preodolel air defense nad cityom i upal na territory neftepererabatyvayushchego facility (Glukhoozerskoe shosse), povrediv pustye storage tanks i avtomobili.",
      "source": "HUR, Russian Media"
    },
    "id": 15
  },
  {
    "date": "09.02.2026",
    "lat": 44.85,
    "lng": 38.5769,
    "distance": 424,
    "ru": {
      "region": "Краснодарский край, Северский район",
      "target": "Ильский и Афипский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Серия ударов дронов по двум НПЗ. На Ильском НПЗ повреждена установка первичной переработки нефти мощностью 3,6 млн тонн в год.",
      "source": "СБУ"
    },
    "uk": {
      "region": "Краснодарський край, Сіверський район",
      "target": "Ільський та Афіпський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Серія ударів дронів по двох НПЗ. На Ільському НПЗ пошкоджено установку первинної переробки нафти потужністю 3,6 млн тонн на рік.",
      "source": "СБУ"
    },
    "en": {
      "region": "Krasnodar Krai, Северский район",
      "target": "Ilsky i Afipskiy Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Seriya strikeov droneov po dvum oil refinery. Na Ilskom oil refinery was damageda ustanovka pervichnoy pererabotki oil moshchnostyu 3,6 mln tons v god.",
      "source": "SBU"
    },
    "id": 16
  },
  {
    "date": "11.02.2026",
    "lat": 48.53,
    "lng": 44.58,
    "distance": 514,
    "ru": {
      "region": "Волгоградская область, Волгоград",
      "target": "Волгоградский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В результате массированной атаки дронов на НПЗ вспыхнул масштабный пожар.",
      "source": "OSINT, мониторинговые каналы"
    },
    "uk": {
      "region": "Волгоградська область, Волгоград",
      "target": "Волгоградський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Внаслідок масованої атаки дронів на НПЗ спалахнула масштабна пожежа.",
      "source": "OSINT, моніторингові канали"
    },
    "en": {
      "region": "Volgograd Oblast, Volgograd",
      "target": "Volgogradskiy Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "V rezultate massirovannoy drone strikes na oil refinery vspykhnul large-scale fire.",
      "source": "OSINT, monitoringovye kanaly"
    },
    "id": 17
  },
  {
    "date": "12.02.2026",
    "lat": 48.973,
    "lng": 44.225,
    "distance": 486,
    "ru": {
      "region": "Волгоградская область, пгт Котлубань",
      "target": "Арсенал ГРАУ (В/Ч 57229-51)",
      "category": "Военная инфраструктура / ВПК",
      "weapon": "Дрон",
      "details": "Удар по арсеналу главного ракетно-артиллерийского управления армии РФ. Возник масштабный пожар и началась детонация боеприпасов, местные власти объявляли частичную эвакуацию.",
      "source": "ГУР, OSINT"
    },
    "uk": {
      "region": "Волгоградська область, смт Котлубань",
      "target": "Арсенал ГРАУ (В/Ч 57229-51)",
      "category": "Військова інфраструктура / ВПК",
      "weapon": "Дрон",
      "details": "Удар по арсеналу головного ракетно-артилерійського управління армії РФ. Виникла масштабна пожежа та почалася детонація боєприпасів, місцева влада оголошувала часткову евакуацію.",
      "source": "ГУР, OSINT"
    },
    "en": {
      "region": "Volgograd Oblast, пгт Котлубань",
      "target": "Arsenal GRAU (V/Ch 57229-51)",
      "category": "Military Infrastructure",
      "weapon": "Drone",
      "details": "strike on arsenalu glavnogo raketno-artilleriyskogo upravleniya armii RF. Voznik large-scale fire i nachalas detonation boepripasov, mestnye vlasti obyavlyali hourtichnuyu evakuatsiyu.",
      "source": "HUR, OSINT"
    },
    "id": 18
  },
  {
    "date": "15.02.2026",
    "lat": 51.644,
    "lng": 36.315,
    "distance": 134,
    "ru": {
      "region": "Курская область, Курский район (д. Полевая)",
      "target": "Нефтебаза ООО «Полевая»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Успешная ночная операция ГУР. Два беспилотника поразили нефтебазу, вспыхнул масштабный пожар — загорелись резервуары с дизельным топливом общим объемом более 1400 кубометров.",
      "source": "ГУР, OSINT"
    },
    "uk": {
      "region": "Курська область, Курський район (с. Польова)",
      "target": "Нафтобаза ТОВ «Польова»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Успішна нічна операція ГУР. Два безпілотники уразили нафтобазу, спалахнула масштабна пожежа — загорілися резервуари з дизельним пальним загальним об'ємом понад 1400 кубометрів.",
      "source": "ГУР, OSINT"
    },
    "en": {
      "region": "Kursk Oblast, Kurskий район (д. Полевая)",
      "target": "Fuel Depot OOO \"Polevaya\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Uspeshnaya nochnaya operation HUR. Dva drone porazili fuel depot, vspykhnul large-scale fire — zaburnedis storage tanks s dizelnym fuelm obshchim obemom bolee 1400 cubic meters.",
      "source": "HUR, OSINT"
    },
    "id": 19
  },
  {
    "date": "17.02.2026",
    "lat": 45.1338,
    "lng": 36.673,
    "distance": 323,
    "ru": {
      "region": "Краснодарский край, Волна",
      "target": "Терминал «Таманьнефтегаз»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Повторный за месяц удар по крупнейшему на юге РФ нефтеперевалочному комплексу, зафиксирован пожар.",
      "source": "СБУ"
    },
    "uk": {
      "region": "Краснодарський край, Волна",
      "target": "Термінал «Таманьнафтогаз»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Повторний за місяць удар по найбільшому на півдні РФ нафтоперевалочному комплексу, зафіксовано пожежу.",
      "source": "СБУ"
    },
    "en": {
      "region": "Krasnodar Krai, Волна",
      "target": "Terminal \"Tamanneftegaz\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Povtornyy za mesyats strike on krupneyshemu na yuge RF nefteperevalochnomu kompleksu, a fire was recorded.",
      "source": "SBU"
    },
    "id": 20
  },
  {
    "date": "17.02.2026",
    "lat": 45.437,
    "lng": 40.575,
    "distance": 431,
    "ru": {
      "region": "Краснодарский край",
      "target": "НПС «Кропоткинская» / Ильский НПЗ",
      "category": "Топливная логистика / Нефтегаз",
      "weapon": "Дрон",
      "details": "Поражение Ильского НПЗ и крупнейшей станции Каспийского трубопроводного консорциума, остановка нефтеперекачки.",
      "source": "ССО, СБУ, Генштаб ВСУ"
    },
    "uk": {
      "region": "Краснодарський край",
      "target": "НПС «Кропоткінська» / Ільський НПЗ",
      "category": "Паливна логістика / Нафтогаз",
      "weapon": "Дрон",
      "details": "Ураження Ільського НПЗ та найбільшої станції Каспійського трубопровідного консорціуму, зупинка нафтоперекачування.",
      "source": "ССО, СБУ, Генштаб ЗСУ"
    },
    "en": {
      "region": "Krasnodar Krai",
      "target": "NPS \"Kropotkinskaya\" / Ilsky Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "was struckie Ilskogo oil refinery i krupneyshey stantsii Kaspiyskogo truboprovodnogo konsortsiuma, ostanovka nefteperekachki.",
      "source": "SOF, SBU, AFU General Staff"
    },
    "id": 21
  },
  {
    "date": "18.02.2026",
    "lat": 56.1105,
    "lng": 47.2713,
    "distance": 1001,
    "ru": {
      "region": "Чувашская Республика, Чебоксары",
      "target": "Завод «ВНИИР-Прогресс»",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "Удар по оборонному предприятию, производящему компоненты для ракет и дронов.",
      "source": "OSINT"
    },
    "uk": {
      "region": "Чуваська Республіка, Чебоксари",
      "target": "Завод «ВНДІР-Прогрес»",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "Удар по оборонному підприємству, що виробляє компоненти для ракет і дронів.",
      "source": "OSINT"
    },
    "en": {
      "region": "Chuvash Republic, Cheboksary",
      "target": "Plant \"VNIIR-Progress\"",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "strike on oboronnomu predpriyatiyu, proizvodyashchemu komponenty dlya raket i droneov.",
      "source": "OSINT"
    },
    "id": 22
  },
  {
    "date": "19.02.2026",
    "lat": 56.3366,
    "lng": 30.5838,
    "distance": 540,
    "ru": {
      "region": "Псковская область, Великие Луки",
      "target": "Великолукская нефтебаза",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Минимум четыре взрыва, масштабный пожар резервуаров (объект принадлежит ООО «Псковнефтепродукт»), эвакуация сотрудников.",
      "source": "СБУ"
    },
    "uk": {
      "region": "Псковська область, Великі Луки",
      "target": "Великолуцька нафтобаза",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Щонайменше чотири вибухи, масштабна пожежа резервуарів (об'єкт належить ТОВ «Псковнафтопродукт»), евакуація співробітників.",
      "source": "СБУ"
    },
    "en": {
      "region": "Pskov Oblast, Великие Луки",
      "target": "Velikolukskaya Fuel Depot",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "at least chetyre explosiona, large-scale fire storage tankov (facility prinadlezhit OOO \"Pskovnefteprodukt\"), evacuation sotrudnikov.",
      "source": "SBU"
    },
    "id": 23
  },
  {
    "date": "19.02.2026",
    "lat": 44.685,
    "lng": 33.566,
    "distance": 229,
    "ru": {
      "region": "АР Крым, Севастополь",
      "target": "Аэродром «Бельбек»",
      "category": "Военная infraestructura / Авиация",
      "weapon": "Дрон",
      "details": "Ночная атака дронов на военный объект. Местные власти подтверждали работу ПВО и падение обломков в периметре аэродрома.",
      "source": "OSINT"
    },
    "uk": {
      "region": "АР Крим, Севастополь",
      "target": "Аеродром «Бельбек»",
      "category": "Військова інфраструктура / Авіація",
      "weapon": "Дрон",
      "details": "Нічна атака дронів на військовий об'єкт. Місцева влада підтверджувала роботу ППО та падіння уламків у периметрі аеродрому.",
      "source": "OSINT"
    },
    "en": {
      "region": "AR Crimea, Sevastopol",
      "target": "Airfield \"Belbek\"",
      "category": "Voennaya infraestructura / Aviatsiya",
      "weapon": "Drone",
      "details": "Nochnaya drone strike na military facility. Mestnye vlasti podtverzhdali rabotu air defense i padenie debris v perimetre aerodroma.",
      "source": "OSINT"
    },
    "id": 24
  },
  {
    "date": "21.02.2026",
    "lat": 52.78,
    "lng": 51.16,
    "distance": 1053,
    "ru": {
      "region": "Самарская область, Нефтегорск",
      "target": "Нефтегорский ГПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Масштабный пожар на газоперерабатывающем заводе, вспыхнуло минимум 5 резервуаров, тепловые аномалии зафиксированы спутниками NASA.",
      "source": "OSINT"
    },
    "uk": {
      "region": "Самарська область, Нєфтєгорськ",
      "target": "Нєфтєгорський ГПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Масштабна пожежа на газопереробному заводі, спалахнуло щонайменше 5 резервуарів, теплові аномалії зафіксовано супутниками NASA.",
      "source": "OSINT"
    },
    "en": {
      "region": "Samara Oblast, Нефтегорск",
      "target": "Neftegorskiy GPZ",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "large-scale fire na gasopererabatyvayushchem plante, vspykhnulo at least 5 storage tankov, teplovye anomalii zafiksirovany sputnikami NASA.",
      "source": "OSINT"
    },
    "id": 25
  },
  {
    "date": "05.03.2026",
    "lat": 51.196,
    "lng": 37.753,
    "distance": 172,
    "ru": {
      "region": "Белгородская область, Губкинский ГО (с. Долгое)",
      "target": "Губкинская нефтебаза (АО «Белгороднефтепродукт»)",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Успешная операция ГУР МОУ. В результате атаки дронов вспыхнул масштабный пожар, горело от одного до трех резервуаров с топливом.",
      "source": "ГУР, OSINT"
    },
    "uk": {
      "region": "Бєлгородська область, Губкінський МО (с. Довге)",
      "target": "Губкінська нафтобаза (АТ «Бєлгороднафтопродукт»)",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Успішна операція ГУР МОУ. Внаслідок атаки дронів спалахнула масштабна пожежа, горіло від одного до трьох резервуарів з пальним.",
      "source": "ГУР, OSINT"
    },
    "en": {
      "region": "Belgorod Oblast, Gubkinский ГО (с. Долгое)",
      "target": "Gubkinskaya Fuel Depot (AO \"Belgorodnefteprodukt\")",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "successful operation HUR MoDU. As a result of the strike droneov vspykhnul large-scale fire, burned ot odnogo do trekh storage tankov s fuelm.",
      "source": "HUR, OSINT"
    },
    "id": 26
  },
  {
    "date": "06.03.2026",
    "lat": 51.4913,
    "lng": 40.43,
    "distance": 339,
    "ru": {
      "region": "Воронежская область, пгт Анна",
      "target": "Нефтебаза ООО «Аннанефтепродукт»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Атака беспилотников на резервуары с топливом. В этот же день фиксировались повторные попытки дронов атаковать военный аэродром «Балтимор» в Воронеже.",
      "source": "OSINT"
    },
    "uk": {
      "region": "Воронезька область, смт Анна",
      "target": "Нафтобаза ТОВ «Аннанафтопродукт»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Атака безпілотників на резервуари з пальним. Цього ж дня фіксувалися повторні спроби дронів атакувати військовий аеродром «Балтимор» у Воронежі.",
      "source": "OSINT"
    },
    "en": {
      "region": "Voronezh Oblast, пгт Анна",
      "target": "Fuel Depot OOO \"Annanefteprodukt\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "drone strike na fuel tanks. V etot zhe den fiksirovalis povtornye popytki droneov strikesovat military airfield \"Baltimor\" v Voronezhe.",
      "source": "OSINT"
    },
    "id": 27
  },
  {
    "date": "06.03.2026",
    "lat": 52.3333,
    "lng": 35.35,
    "distance": 163,
    "ru": {
      "region": "Курская область, Железногорск",
      "target": "Михайловский ГОК им. А.В. Варичева",
      "category": "Промышленность / ВПК",
      "weapon": "Дрон",
      "details": "Спецоперация ГУР. Два беспилотника с интервалом во времени атаковали склад горюче-смазочных материалов одного из крупнейших в РФ предприятий по обогащению железной руды (поставляет сырье для производителей бронетехники).",
      "source": "ГУР, OSINT"
    },
    "uk": {
      "region": "Курська область, Желєзногорськ",
      "target": "Михайлівський ГЗК ім. А.В. Варичева",
      "category": "Промисловість / ВПК",
      "weapon": "Дрон",
      "details": "Спецоперація ГУР. Два безпілотники з інтервалом у часі атакували склад паливно-мастильних матеріалів одного з найбільших у РФ підприємств зі збагачення залізної руди (постачає сировину для виробників бронетехніки).",
      "source": "ГУР, OSINT"
    },
    "en": {
      "region": "Kursk Oblast, Железногорск",
      "target": "Mikhaylovskiy GOK named after A.V. Varicheva",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "Spetsoperation HUR. Dva drone s intervalom vo vremeni strikesovali warehouse fuel and lubricants odnogo iz krupneyshikh v RF facilities po obogashcheniyu zheleznoy rudy (postavlyaet syre dlya produceseley bronetekhniki).",
      "source": "HUR, OSINT"
    },
    "id": 28
  },
  {
    "date": "09.03.2026",
    "lat": 47.2015,
    "lng": 38.8663,
    "distance": 196,
    "ru": {
      "region": "Ростовская область, Таганрог",
      "target": "Авиазавод им. Г. М. Бериева (ТАНТК)",
      "category": "ВПК / Авиация",
      "weapon": "Дрон",
      "details": "Массированная атака беспилотников на завод, где ремонтируют и модернизируют стратегические бомбардировщики Ту-95 и уникальные самолеты-разведчики А-50.",
      "source": "OSINT, Генштаб ВСУ"
    },
    "uk": {
      "region": "Ростовська область, Таганрог",
      "target": "Авіазавод ім. Г. М. Берієва (ТАНТК)",
      "category": "ВПК / Авіація",
      "weapon": "Дрон",
      "details": "Масована атака безпілотників на завод, де ремонтують і модернізують стратегічні бомбардувальники Ту-95 та унікальні літаки-розвідники А-50.",
      "source": "OSINT, Генштаб ЗСУ"
    },
    "en": {
      "region": "Rostov Oblast, Taganrog",
      "target": "AviaPlant named after G. M. Berieva (TANTK)",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "massive strike droneov na plant, gde remontiruyut i moderniziruyut strategic bombers Tu-95 i unikalnye aircrafty-razvedchiki A-50.",
      "source": "OSINT, AFU General Staff"
    },
    "id": 29
  },
  {
    "date": "10.03.2026",
    "lat": 51.7308,
    "lng": 36.193,
    "distance": 133,
    "ru": {
      "region": "Курская область, Курск",
      "target": "Нефтебаза ООО «Курскоблнефтепродукт»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Ударный беспилотник прорвал ПВО и сдетонировал на территории нефтебазы in самом Курске, вызвав пожар in резервуарном парке.",
      "source": "СМИ РФ, местные власти"
    },
    "uk": {
      "region": "Курська область, Курськ",
      "target": "Нафтобаза ТОВ «Курськоблнафтопродукт»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Ударний безпілотник прорвав ППО та здетонував на території нафтобази в самому Курську, викликавши пожежу в резервуарному парку.",
      "source": "ЗМІ РФ, місцева влада"
    },
    "en": {
      "region": "Kursk Oblast, Kursk",
      "target": "Fuel Depot OOO \"Kurskoblnefteprodukt\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "strike drone prorval air defense i sdetonated na territory fuel depot in samom Kurske, vyzvav fire in storage tanknom parke.",
      "source": "Russian Media, mestnye vlasti"
    },
    "id": 30
  },
  {
    "date": "12.03.2026",
    "lat": 44.733,
    "lng": 33.549,
    "distance": 224,
    "ru": {
      "region": "АР Крым, Севастополь (Кача)",
      "target": "Аэродром «Кача»",
      "category": "Военная инфраструктура / Авиация",
      "weapon": "Дрон",
      "details": "Серия мощных взрывов на территории базы военно-морской авиации РФ в результате ночного налета дронов.",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "АР Крим, Севастополь (Кача)",
      "target": "Аеродром «Кача»",
      "category": "Військова інфраструктура / Авіація",
      "weapon": "Дрон",
      "details": "Серія потужних вибухів на території бази військово-морської авіації РФ внаслідок нічного нальоту дронів.",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "AR Crimea, Sevastopol (Кача)",
      "target": "Airfield \"Kacha\"",
      "category": "Military Infrastructure / Aviation",
      "weapon": "Drone",
      "details": "Seriya moshchnykh explosionov on the base's territory voenno-morskoy aviatsii RF v rezultate nochnogo naleta droneov.",
      "source": "AFU General Staff"
    },
    "id": 31
  },
  {
    "date": "12.03.2026",
    "lat": 59.467,
    "lng": 32.066,
    "distance": 887,
    "ru": {
      "region": "Ленинградская область, Кириши",
      "target": "НПЗ «КИНЕФ» (Киришинефтеоргсинтез)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Атака беспилотников на второй по объемам переработки нефти завод в России. Местные власти заявили о сбитии дрона самолетного типа на подлете к объекту, однако сам факт удара заставил РФ усиливать ПВО региона.",
      "source": "OSINT"
    },
    "uk": {
      "region": "Ленінградська область, Кіріши",
      "target": "НПЗ «КІНЕФ» (Кірішинафтооргсинтез)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Атака безпілотників на другий за обсягами переробки нафти завод у Росії. Місцева влада заявила про збиття дрона літакового типу на підльоті до об'єкта, однак сам факт удару змусив РФ посилювати ППО регіону.",
      "source": "OSINT"
    },
    "en": {
      "region": "Leningrad Oblast, Кириши",
      "target": "Oil Refinery \"KINEF\" (Kirishinefteorgsintez)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "drone strike na vtoroy po obemam pererabotki oil plant v Rossii. Mestnye vlasti zayavili o sbitii dronea aircraftnogo tipa na podlete k facilityu, odnako sam fakt of the strike zastavil RF usilivat air defense region.",
      "source": "OSINT"
    },
    "id": 32
  },
  {
    "date": "13.03.2026",
    "lat": 47.782,
    "lng": 39.851,
    "distance": 199,
    "ru": {
      "region": "Ростовская область, Новошахтинск",
      "target": "Новошахтинский завод нефтепродуктов (НЗНП)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Атака дронов-камикадзе привела к аварийной остановке технологических установок крупнейшего на юге РФ нефтеперерабатывающего предприятия.",
      "source": "СМИ РФ, OSINT"
    },
    "uk": {
      "region": "Ростовська область, Новошахтинськ",
      "target": "Новошахтинський завод нафтопродуктів (НЗНП)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Атака дронів-камікадзе призвела до аварійної зупинки технологічних установок найбільшого на півдні РФ нафтопереробного підприємства.",
      "source": "ЗМІ РФ, OSINT"
    },
    "en": {
      "region": "Rostov Oblast, Новошахтинск",
      "target": "Novoshakhtinskiy Plant nefteproduktov (NZNP)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "drone strike-kamikadze privela k avariynoy ostanovke tekhnologicheskikh ustanovok krupneyshego na yuge RF neftepererabatyvayushchego facility.",
      "source": "Russian Media, OSINT"
    },
    "id": 33
  },
  {
    "date": "13.03.2026",
    "lat": 44.68,
    "lng": 39.956,
    "distance": 486,
    "ru": {
      "region": "Республика Адыгея, ст. Ханская",
      "target": "Аэродром «Ханская»",
      "category": "Военная инфраструктура / Авиация",
      "weapon": "Дрон",
      "details": "Атака ударных беспилотников на военный аэродром под Майкопом, где базируется учебная авиационная база и боевые самолеты. Местные жители фиксировали серию взрывов в районе взлетной полосы.",
      "source": "OSINT, СМИ РФ"
    },
    "uk": {
      "region": "Республіка Адигея, ст. Ханська",
      "target": "Аеродром «Ханська»",
      "category": "Військова інфраструктура / Авіація",
      "weapon": "Дрон",
      "details": "Атака ударних безпілотників на військовий аеродром под Майкопом, де базується навчальна авіаційна база та бойові літаки. Місцеві жителі фіксували серію вибухів у районі злітної смуги.",
      "source": "OSINT, ЗМІ РФ"
    },
    "en": {
      "region": "Республика Адыгея, ст. Ханская",
      "target": "Airfield \"Khanskaya\"",
      "category": "Military Infrastructure / Aviation",
      "weapon": "Drone",
      "details": "strikesa strikenykh droneov na military airfield pod Maykopom, gde baziruetsya uchebnaya airbase i boevye aircrafty. Mestnye residents fiksirovali seriyu explosionov v districte vzletnoy polosy.",
      "source": "OSINT, Russian Media"
    },
    "id": 34
  },
  {
    "date": "14.03.2026",
    "lat": 44.8717,
    "lng": 38.8336,
    "distance": 435,
    "ru": {
      "region": "Краснодарский край, Афипский",
      "target": "Афипский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Повреждена установка первичной переработки нефти АТ-22/4 (ключевой узел). Зафиксирован масштабный пожар.",
      "source": "Сводка Генштаба ВСУ, заявления СБУ"
    },
    "uk": {
      "region": "Краснодарський край, Афіпський",
      "target": "Афіпський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Пошкоджено встановлення первинної переробки нафти АТ-22/4 (ключовий вузол). Зафіксовано масштабну пожежу.",
      "source": "Зведення Генштабу ЗСУ, заяви СБУ"
    },
    "en": {
      "region": "Krasnodar Krai, Афипский",
      "target": "Afipskiy Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "was damageda ustanovka pervichnoy pererabotki oil AT-22/4 (klyuchevoy uzel). Zafiksirovan large-scale fire.",
      "source": "Svodka Genshtaba AFU, zayavleniya SBU"
    },
    "id": 35
  },
  {
    "date": "17.03.2026",
    "lat": 45.242,
    "lng": 38.106,
    "distance": 367,
    "ru": {
      "region": "Краснодарский край, Славянск-на-Кубани",
      "target": "Славянский НПЗ («Славянск-ЭКО»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Совместная операция СБУ, ССО и СБС. Зафиксирован точный прилет по атмосферным и вакуумным блокам завода, сильный пожар.",
      "source": "СБУ, ССО"
    },
    "uk": {
      "region": "Краснодарський край, Слов'янськ-на-Кубані",
      "target": "Слов'янський НПЗ («Слов'янськ-ЕКО»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Спільна операція СБУ, ССО та СБС. Зафіксовано точний приліт по атмосферних та вакуумних блоках заводу, сильна пожежа.",
      "source": "СБУ, ССО"
    },
    "en": {
      "region": "Krasnodar Krai, Славянск-на-Кубани",
      "target": "Slavyanskiy Oil Refinery (\"Slavyansk-EKO\")",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Sovmestnaya operation SBU, SOF i SBS. Zafiksirovan tochnyy prilet po atmosfernym i vakuumnym blokam planta, silnyy fire.",
      "source": "SBU, SOF"
    },
    "id": 36
  },
  {
    "date": "19.03.2026",
    "lat": 44.666,
    "lng": 41.936,
    "distance": 561,
    "ru": {
      "region": "Ставропольский край, Невинномысск",
      "target": "Промзона / Химкомбинат «Невинномысский Азот»",
      "category": "Промышленность / ВПК",
      "weapon": "Дрон",
      "details": "Первая крупная попытка массированного налета беспилотников на промышленную зону химического предприятия. Зафиксированы взрывы и работа ПВО над городом.",
      "source": "СМИ РФ, местные власти"
    },
    "uk": {
      "region": "Ставропольський край, Невинномиськ",
      "target": "Промзона / Хімкомбінат «Невинномиський Азот»",
      "category": "Промисловість / ВПК",
      "weapon": "Дрон",
      "details": "Перша велика спроба масованого нальоту безпілотників на промислову зону хімічного підприємства. Зафіксовано вибухи та роботу ППО над містом.",
      "source": "ЗМІ РФ, місцева влада"
    },
    "en": {
      "region": "Stavropol Krai, Невинномысск",
      "target": "Promzona / Khimkombinat \"Nevinnomysskiy Azot\"",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "Pervaya krupnaya popytka massirovannogo naleta droneov na promyshlennuyu zonu khimicheskogo facility. explosions were recorded i rabota air defense nad cityom.",
      "source": "Russian Media, mestnye vlasti"
    },
    "id": 37
  },
  {
    "date": "21.03.2026",
    "lat": 51.5406,
    "lng": 46.0086,
    "distance": 676,
    "ru": {
      "region": "Саратовская обл., Саратов",
      "target": "Саратовский НПЗ (Роснефть)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Повреждены блок вторичной переработки и резервуар РВС-10000. Крупный пожар, горевший минимум двое суток.",
      "source": "Сводка Генштаба ВСУ, NASA FIRMS"
    },
    "uk": {
      "region": "Саратовська обл., Саратов",
      "target": "Саратовський НПЗ (Роснефть)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Пошкоджено блок вторинної переробки та резервуар РВС-10000. Велика пожежа, що горіла щонайменше дві доби.",
      "source": "Зведення Генштабу ЗСУ, NASA FIRMS"
    },
    "en": {
      "region": "Saratovская обл., Saratov",
      "target": "Saratovskiy Oil Refinery (Rosneft)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "was damagedy blok vtorichnoy pererabotki i storage tank RVS-10000. major fire, gorevshiy at least dvoe days.",
      "source": "Svodka Genshtaba AFU, NASA FIRMS"
    },
    "id": 38
  },
  {
    "date": "23.03.2026",
    "lat": 54.847,
    "lng": 56.071,
    "distance": 1435,
    "ru": {
      "region": "Башкортостан, Уфа",
      "target": "НПЗ «Башнефть-Уфанефтехим»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Поражен топливно-энергетический объект, зафиксирован пожар на территории предприятия.",
      "source": "Militarnyi, Минобороны Украины"
    },
    "uk": {
      "region": "Башкортостан, Уфа",
      "target": "НПЗ «Башнефть-Уфанефтехім»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Уражено паливно-енергетичний об'єкт, зафіксовано пожежу на території підприємства.",
      "source": "Militarnyi, Міноборони України"
    },
    "en": {
      "region": "Башкортостан, Ufa",
      "target": "Oil Refinery \"Bashneft-Ufaneftekhim\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "was struck toplivno-energeticheskiy facility, a fire was recorded on the facility's territory.",
      "source": "Militarnyi, MoD Ukrainy"
    },
    "id": 39
  },
  {
    "date": "23.03.2026",
    "lat": 60.3347,
    "lng": 28.7167,
    "distance": 995,
    "ru": {
      "region": "Ленинградская обл., Приморск",
      "target": "Терминал «Транснефть – порт Приморск»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Удар по объекту перевалки нефти, обеспечивающему экспорт через Балтику; пожар на территории.",
      "source": "Militarnyi, Минобороны Украины"
    },
    "uk": {
      "region": "Ленинградская обл., Приморськ",
      "target": "Термінал «Транснафта – порт Приморськ»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "удар по об'єкту перевалки нафти, що забезпечує експорт через Балтику; пожежі на території.",
      "source": "Militarnyi, Міноборони України"
    },
    "en": {
      "region": "Ленинградская обл., Приморск",
      "target": "Terminal \"Transneft – port Primorsk\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "strike on the facility perevalki oil, obespechivayushchemu eksport cherez Baltiku; fire na territory.",
      "source": "Militarnyi, MoD Ukrainy"
    },
    "id": 40
  },
  {
    "date": "23.03.2026",
    "lat": 51.1444,
    "lng": 37.8931,
    "distance": 174,
    "ru": {
      "region": "Белгородская область, Старый Оскол",
      "target": "Оскольский электрометаллургический комбинат (ОЭМК)",
      "category": "ВПК / Промышленность",
      "weapon": "Дрон",
      "details": "Атака БПЛА на предприятие полного цикла, производящее высококачественный металл, используемый для нужд российской военной техники. Зафиксированы повреждения цехов.",
      "source": "ССО, мониторинговые каналы"
    },
    "uk": {
      "region": "Бєлгородська область, Старий Оскол",
      "target": "Оскольський електрометалургійний комбінат (ОЕМК)",
      "category": "ВПК / Промисловість",
      "weapon": "Дрон",
      "details": "Атака БПЛА на підприємство повного циклу, що виробляє високоякісний метал, який використовується для потреб російської військової техніки. Зафіксовано пошкодження цехів.",
      "source": "ССО, моніторингові канали"
    },
    "en": {
      "region": "Belgorod Oblast, Stary Oskol",
      "target": "Oskolskiy elektrometallurgicheskiy kombinat (OEMK)",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "strikesa UAV na facility polnogo tsikla, proizvodyashchee vysokokachestvennyy metall, ispolzuemyy dlya nuzhd rossiyskoy voennoy tekhniki. damage was recorded tsekhov.",
      "source": "SOF, monitoringovye kanaly"
    },
    "id": 41
  },
  {
    "date": "26.03.2026",
    "lat": 59.4891,
    "lng": 32.0772,
    "distance": 890,
    "ru": {
      "region": "Ленинградская обл., Кириши",
      "target": "Киришский НПЗ (КИНЕФ)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Пожар с возгоранием; повреждение установок ELOU-АВТ-2 и ELOU-АВТ-6, битумного производства, гидроочистки.",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Ленинградская обл., Кириші",
      "target": "Кірішський НПЗ (КІНЕФ)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Пожежа з горінням; пошкодження установок ЕЛОУ-АВТ-2 та ЕЛОУ-АВТ-6, виробництво бітуму, гідроочищення.",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Ленинградская обл., Кириши",
      "target": "Kirishskiy Oil Refinery (KINEF)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "fire s fire outbreakm; was damagedie ustanovok ELOU-AVT-2 i ELOU-AVT-6, bitumnogo production, gidroochistki.",
      "source": "AFU General Staff"
    },
    "id": 42
  },
  {
    "date": "26.03.2026",
    "lat": 54.823,
    "lng": 32.028,
    "distance": 373,
    "ru": {
      "region": "Смоленская область, Смоленск",
      "target": "Смоленский авиационный завод (СмАЗ)",
      "category": "ВПК / Авиация",
      "weapon": "Дрон",
      "details": "Повторная атака дронов на территорию предприятия, которая совпала с инспекционным визитом высокопоставленных лиц из Совбеза РФ. Зафиксировано падение обломков у проходной завода, куда массово съезжались скорые и МЧС.",
      "source": "OSINT, мониторинговые каналы"
    },
    "uk": {
      "region": "Смоленська область, Смоленськ",
      "target": "Смоленський авіаційний завод (СмАЗ)",
      "category": "ВПК / Авіація",
      "weapon": "Дрон",
      "details": "Повторна атака дронів на територію підприємства, яка збіглася з инспекційним візитом високопосадовців із Радбезу РФ. Зафіксовано падіння уламків біля прохідної заводу, куди масово з'їжджалися швидкі та МНС.",
      "source": "OSINT, моніторингові канали"
    },
    "en": {
      "region": "Smolensk Oblast, Smolensk",
      "target": "Smolenskiy aviatsionnyy Plant (SmAZ)",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "Povtornaya drone strike na territory facility, kotoraya sovpala s inspektsionnym vizitom vysokopostavlennykh lits iz Sovbeza RF. Zafiksirovano padenie debris u prokhodnoy planta, kuda massovo sezzhalis skorye i EMERCOM.",
      "source": "OSINT, monitoringovye kanaly"
    },
    "id": 43
  },
  {
    "date": "28.03.2026",
    "lat": 57.5501,
    "lng": 39.7917,
    "distance": 806,
    "ru": {
      "region": "Ярославская обл., Ярославль",
      "target": "Ярославский НПЗ «Славнефть-ЯНОС»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Множественные попадания FP-1-дронами; крупный пожар, аномальные тепловые сигналы по всей промзоне.",
      "source": "Militarnyi, NASA FIRMS"
    },
    "uk": {
      "region": "Ярославська обл., Ярославль",
      "target": "Ярославський НПЗ «Славнафта-ЯНОС»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Множинні влучення FP-1-дронами; велика пожежа, аномальні теплові сигнали по всій промзоні.",
      "source": "Militarnyi, NASA FIRMS"
    },
    "en": {
      "region": "Ярославская обл., Yaroslavl",
      "target": "Yaroslavskiy Oil Refinery \"Slavneft-YaNOS\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Mnozhestvennye direct hits FP-1-droneami; major fire, anomalnye teplovye signaly po vsey promzone.",
      "source": "Militarnyi, NASA FIRMS"
    },
    "id": 44
  },
  {
    "date": "03.04.2026",
    "lat": 54.83,
    "lng": 56.12,
    "distance": 1438,
    "ru": {
      "region": "Башкортостан, Уфа",
      "target": "Ново-Уфимский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Поражена и остановлена установка первичной переработки CDU-5, обеспечивающая 28% продукции завода.",
      "source": "Украинские СМИ, Reuters"
    },
    "uk": {
      "region": "Башкортостан, Уфа",
      "target": "Ново-Уфимський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Уражено та зупинено встановлення первинної переробки CDU-5, що забезпечує 28% продукції заводу.",
      "source": "Українські ЗМІ, Reuters"
    },
    "en": {
      "region": "Башкортостан, Ufa",
      "target": "Novo-Ufimskiy Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "was strucka i ostanovlena ustanovka pervichnoy pererabotki CDU-5, obespechivayushchaya 28% produktsii planta.",
      "source": "Ukrainskie Media, Reuters"
    },
    "id": 45
  },
  {
    "date": "05.04.2026",
    "lat": 56.1072,
    "lng": 44.1549,
    "distance": 846,
    "ru": {
      "region": "Нижегородская обл., Кстово",
      "target": "НПЗ «Лукойл-Нижегороднефтеоргсинтез»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Повреждены как минимум два технологических объекта, крупномасштабный пожар (мощный очаг на NASA FIRMS).",
      "source": "Украинские СМИ, OSINT"
    },
    "uk": {
      "region": "Нижегородська обл., Кстово",
      "target": "НПЗ «Лукойл-Нижегороднафтооргсинтез»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Пошкоджено як мінімум два технологічні об'єкти, великомасштабну пожежу (потужний осередок на NASA FIRMS).",
      "source": "Українські ЗМІ, OSINT"
    },
    "en": {
      "region": "Нижегородская обл., Кстово",
      "target": "Oil Refinery \"Lukoyl-Nizhegorodnefteorgsintez\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "was damagedy kak at least dva tekhnologicheskikh facilitya, krupnolarge-scale fire (powerful ochag na NASA FIRMS).",
      "source": "Ukrainskie Media, OSINT"
    },
    "id": 46
  },
  {
    "date": "05.04.2026",
    "lat": 60.3347,
    "lng": 28.7167,
    "distance": 995,
    "ru": {
      "region": "Ленинградская обл., Приморск",
      "target": "Участок нефтепровода (порт Приморск)",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Повреждён участок трубопровода, ведётся «контролируемый факельный прожиг» после срабатывания отсечных устройств.",
      "source": "Региональные власти, OSINT"
    },
    "uk": {
      "region": "Ленинградская обл., Приморськ",
      "target": "Ділянка нафтопроводу (порт Приморськ)",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Пошкоджено ділянку трубопроводу, ведеться «контрольований факельний пропал» після спрацьовування відсікових пристроїв.",
      "source": "Регіональна влада, OSINT"
    },
    "en": {
      "region": "Ленинградская обл., Приморск",
      "target": "Uchastok Oil Pipelinea (port Primorsk)",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Povrezhdyon uhourtok truboprovoda, vedyotsya \"kontroliruemyy fakelnyy prozhig\" posle srabatyvaniya otsechnykh ustroystv.",
      "source": "Regionalnye vlasti, OSINT"
    },
    "id": 47
  },
  {
    "date": "05.04.2026",
    "lat": 48.313,
    "lng": 41.793,
    "distance": 313,
    "ru": {
      "region": "Ростовская область, Морозовск",
      "target": "Аэродром «Морозовск»",
      "category": "Военная инфраструктура / Авиация",
      "weapon": "Дрон",
      "details": "Масштабный удар по аэродрому, где базировались десятки бомбардировщиков Су-34. Успешная совместная операция СБУ и Сил обороны.",
      "source": "СБУ"
    },
    "uk": {
      "region": "Ростовська область, Морозовськ",
      "target": "Аеродром «Морозовськ»",
      "category": "Військова інфраструктура / Авіація",
      "weapon": "Дрон",
      "details": "Масштабний удар по аеродрому, де базувалися десятки бомбардувальників Су-34. Успішна спільна операція СБУ та Сил оборони.",
      "source": "СБУ"
    },
    "en": {
      "region": "Rostov Oblast, Morozovsk",
      "target": "Airfield \"Morozovsk\"",
      "category": "Military Infrastructure / Aviation",
      "weapon": "Drone",
      "details": "large-scale strike on aerodromu, gde bazirovalis desyatki bombardirovshchikov Su-34. Uspeshnaya sovmestnaya operation SBU i Sil oborony.",
      "source": "SBU"
    },
    "id": 48
  },
  {
    "date": "05.04.2026",
    "lat": 53.361,
    "lng": 34.098,
    "distance": 277,
    "ru": {
      "region": "Брянская область, Сельцо",
      "target": "Брянский химический завод имени 50-летия СССР",
      "category": "ВПК / Промышленность",
      "weapon": "Дрон",
      "details": "Два беспилотника атаковали предприятие, входящее в холдинг «Техмаш» (Ростех). Завод специализируется на производстве промышленных взрывчатых веществ и боеприпасов. Зафиксирован прорыв кровли одного из цехов и возгорание.",
      "source": "OSINT (Astra)"
    },
    "uk": {
      "region": "Брянська область, Сільце",
      "target": "Брянський хімічний завод імені 50-річчя СРСР",
      "category": "ВПК / Промисловість",
      "weapon": "Дрон",
      "details": "Два безпілотники атакували підприємство, що входить до холдингу «Техмаш» (Ростех). Завод спеціалізується на виробництві промислових вибухових речовин та боєприпасів. Зафіксовано пробиття покрівлі одного з цехів та займання.",
      "source": "OSINT (Astra)"
    },
    "en": {
      "region": "Bryansk Oblast, Сельцо",
      "target": "Bryanskiy khimicheskiy Plant named after 50-letiya SSSR",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "Dva drone strikesovali facility, vkhodyashchee v kholding \"Tekhmash\" (Rostekh). plant spetsializiruetsya na proizvodstve promyshlennykh explosionchatykh veshchestv i boepripasov. Zafiksirovan proryv krovli odnogo iz tsekhov i fire outbreak.",
      "source": "OSINT (Astra)"
    },
    "id": 49
  },
  {
    "date": "09.04.2026",
    "lat": 51.3653,
    "lng": 42.0683,
    "distance": 433,
    "ru": {
      "region": "Воронежская область, Борисоглебск",
      "target": "711-й авиационный ремонтный завод (711 АРЗ)",
      "category": "ВПК / Авиация",
      "weapon": "Дрон",
      "details": "Успешная спецоперация ГУР МО. Ударные дроны поразили главный производственный цех предприятия, которое занимается ремонтом авиационных ракет и радиотехники для ВВС РФ.",
      "source": "ГУР"
    },
    "uk": {
      "region": "Воронезька область, Борисоглєбськ",
      "target": "711-й авіаційний ремонтний завод (711 АРЗ)",
      "category": "ВПК / Авіація",
      "weapon": "Дрон",
      "details": "Успішна спецоперація ГУР МО. Ударні дрони уразили головний виробничий цех підприємства, що займається ремонтом авіаційних ракет і радіотехніки для ВПС РФ.",
      "source": "ГУР"
    },
    "en": {
      "region": "Voronezh Oblast, Борисоглебск",
      "target": "711-y aviatsionnyy remontnyy Plant (711 ARZ)",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "Uspeshnaya spetsoperation HUR MoD. strike drones porazili glavnyy proizvodstvennyy tsekh facility, kotoroe zanimaetsya remontom aviatsionnykh raket i radiotekhniki dlya VVS RF.",
      "source": "HUR"
    },
    "id": 50
  },
  {
    "date": "11.04.2026",
    "lat": 48.5833,
    "lng": 45.8,
    "distance": 603,
    "ru": {
      "region": "Астраханская область, Знаменск",
      "target": "Полигон «Капустин Яр»",
      "category": "Военная инфраструктура / ВПК",
      "weapon": "Дрон",
      "details": "Массированная атака беспилотников на 4-й государственный центральный межвидовой полигон РФ, где испытываются ракетные комплексы. Из-за налета временно закрывали воздушное пространство и аэропорт в Астрахани.",
      "source": "OSINT, СМИ РФ"
    },
    "uk": {
      "region": "Астраханська область, Знаменськ",
      "target": "Полігон «Капустін Яр»",
      "category": "Військова інфраструктура / ВПК",
      "weapon": "Дрон",
      "details": "Масова атака безпілотників на 4-й державний центральний межвидовий полігон РФ, де випробовуються ракетні комплекси. Через наліт тимчасово закривали повітряний простір та аеропорт в Астрахані.",
      "source": "OSINT, ЗМІ РФ"
    },
    "en": {
      "region": "Astrakhan Oblast, Знаменск",
      "target": "Poligon \"Kapustin Yar\"",
      "category": "Military Infrastructure",
      "weapon": "Drone",
      "details": "massive strike droneov na 4-y gosstrikestvennyy tsentralnyy mezhvidovoy poligon RF, gde ispytyvayutsya raketnye kompleksy. Iz-za naleta vremenno zakryvali vozdushnoe prostranstvo i aeroport v Astrakhani.",
      "source": "OSINT, Russian Media"
    },
    "id": 51
  },
  {
    "date": "12.04.2026",
    "lat": 50.6433,
    "lng": 36.59,
    "distance": 77,
    "ru": {
      "region": "Белгородская область, Белгород",
      "target": "Аэродром «Белгород»",
      "category": "Военная инфраструктура / Авиация",
      "weapon": "Дрон",
      "details": "Российские власти скрыли атаку, однако OSINT-источники подтвердили падение БПЛА на взлетно-посадочную полосу аэропорта, который используется для военных нужд. Возник пожар.",
      "source": "OSINT (Astra)"
    },
    "uk": {
      "region": "Бєлгородська область, Бєлгород",
      "target": "Аеродром «Бєлгород»",
      "category": "Військова інфраструктура / Авіація",
      "weapon": "Дрон",
      "details": "Російська влада приховала атаку, проте OSINT-джерела підтвердили падіння БПЛА на злітно-посадкову смугу аеропорту, що використовується для військових потреб. Виникла пожежа.",
      "source": "OSINT (Astra)"
    },
    "en": {
      "region": "Belgorod Oblast, Belgorod",
      "target": "Airfield \"Belgorod\"",
      "category": "Military Infrastructure / Aviation",
      "weapon": "Drone",
      "details": "Russian vlasti skryli strike, odnako OSINT-sources podtverdili padenie UAV na vzletno-posadochnuyu polosu aeroporta, kotoryy ispolzuetsya dlya voennykh nuzhd. Voznik fire.",
      "source": "OSINT (Astra)"
    },
    "id": 52
  },
  {
    "date": "12.04.2026",
    "lat": 50.6385,
    "lng": 36.5645,
    "distance": 76,
    "ru": {
      "region": "Белгородская область, Белгород",
      "target": "Административное здание «Газпром»",
      "category": "Нефтегаз / Промышленность",
      "weapon": "Дрон",
      "details": "Ударный беспилотник врезался в здание ресурсоснабжающего предприятия «Газпрома» (5-й Заводской переулок), нанесены повреждения фасаду.",
      "source": "СМИ РФ"
    },
    "uk": {
      "region": "Бєлгородська область, Бєлгород",
      "target": "Адміністративна будівля «Газпром»",
      "category": "Нафтогаз / Промисловість",
      "weapon": "Дрон",
      "details": "Ударний безпілотник врізався в будівлю ресурсопостачального підприємства «Газпрому» (5-й Заводський провулок), завдано пошкоджень фасаду.",
      "source": "ЗМІ РФ"
    },
    "en": {
      "region": "Belgorod Oblast, Belgorod",
      "target": "Administrativnoe zdanie \"Gazprom\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "strike drone vrezalsya v zdanie resursosnabzhayushchego facility \"gasproma\" (5-y plantskoy pereulok), naneseny was damagediya fasadu.",
      "source": "Russian Media"
    },
    "id": 53
  },
  {
    "date": "16.04.2026",
    "lat": 44.05,
    "lng": 39.18,
    "distance": 524,
    "ru": {
      "region": "Краснодарский край, Туапсе",
      "target": "Туапсинский НПЗ и портовая инфраструктура",
      "category": "Нефтегаз / Логистика",
      "weapon": "Дрон",
      "details": "Горели резервуары и инфраструктура НПЗ; серия ударов вывела из строя значительную часть танк-парка.",
      "source": "СБУ, СБС, Militarnyi"
    },
    "uk": {
      "region": "Краснодарський край, Туапс",
      "target": "Туапсинський НПЗ та портова інфраструктура",
      "category": "Нафтогаз / Логістика",
      "weapon": "Дрон",
      "details": "Горіли резервуари та інфраструктура НПЗ; серія ударів вивела з ладу значну частину танк-парку.",
      "source": "СБУ, СБС, Militarnyi"
    },
    "en": {
      "region": "Krasnodar Krai, Tuapse",
      "target": "Tuapsinskiy Oil Refinery i portovaya infrastruktura",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "burnedi storage tanks i infrastructure oil refinery; seriya strikeov vyvela iz stroya znachitelnuyu hourt tank-parka.",
      "source": "SBU, SBS, Militarnyi"
    },
    "id": 54
  },
  {
    "date": "18.04.2026",
    "lat": 53.1258,
    "lng": 49.9086,
    "distance": 990,
    "ru": {
      "region": "Самарская обл., Новокуйбышевск",
      "target": "Новокуйбышевский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Совместная операция сил глубинного поражения; масштабный пожар на территории предприятия.",
      "source": "Генштаб ВСУ, СБС"
    },
    "uk": {
      "region": "Самарська обл., Новокуйбишевськ",
      "target": "Новокуйбишевський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Спільна операція сил глибинної поразки; масштабна пожежа на території підприємства",
      "source": "Генштаб ЗСУ, СБС"
    },
    "en": {
      "region": "Самарская обл., Novokuybyshevsk",
      "target": "Novokuybyshevskiy Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Sovmestnaya operation sil glubinnogo was struckiya; large-scale fire on the facility's territory.",
      "source": "AFU General Staff, SBS"
    },
    "id": 55
  },
  {
    "date": "18.04.2026",
    "lat": 53.18,
    "lng": 48.4,
    "distance": 903,
    "ru": {
      "region": "Самарская обл., Сызрань",
      "target": "Сызранский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Синхронный налёт; сильные пожары на территории предприятия после ударов БПЛА.",
      "source": "Генштаб ВСУ, СБС"
    },
    "uk": {
      "region": "Самарська обл., Сизрань",
      "target": "Сизранський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Синхронізований рейд; сильні пожежі на території підприємства після ударів БПЛА.",
      "source": "Генштаб ЗСУ, СБС"
    },
    "en": {
      "region": "Самарская обл., Syzran",
      "target": "Syzranskiy Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Sinkhronnyy nalyot; silnye firey on the facility's territory posle strikeov UAV.",
      "source": "AFU General Staff, SBS"
    },
    "id": 56
  },
  {
    "date": "18.04.2026",
    "lat": 60.619,
    "lng": 28.567,
    "distance": 1028,
    "ru": {
      "region": "Ленинградская обл., Высоцк",
      "target": "Терминал «РПК-Высоцк Лукойл-2»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Пожар в резервуарном парке нефтеналивного экспортного морского терминала на Балтике.",
      "source": "Генштаб ВСУ, СБС"
    },
    "uk": {
      "region": "Ленінградська обл., Висоцьк",
      "target": "Термінал «РПК-Висок Лукойл-2»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Пожежа у резервуарному парку нафтоналивного експортного морського терміналу на Балтиці.",
      "source": "Генштаб ЗСУ, СБС"
    },
    "en": {
      "region": "Ленинградская обл., Высоцк",
      "target": "Terminal \"RPK-Vysotsk Lukoyl-2\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "fire v storage tanknom parke neftenalivnogo eksportnogo morskogo terminala na Baltike.",
      "source": "AFU General Staff, SBS"
    },
    "id": 57
  },
  {
    "date": "18.04.2026",
    "lat": 45.85,
    "lng": 40.12,
    "distance": 374,
    "ru": {
      "region": "Краснодарский край, Тихорецк",
      "target": "НПС «Тихорецк»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Поражена стратегическая нефтеперекачивающая станция (транспорт нефти по южному направлению), пожар.",
      "source": "Генштаб ВСУ, СБС"
    },
    "uk": {
      "region": "Краснодарський край, Тихорецьк",
      "target": "НПС «Тихорєцьк»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Вражена стратегічна нафтоперекачувальна станція (транспорт нафти за південним напрямом), пожежа.",
      "source": "Генштаб ЗСУ, СБС"
    },
    "en": {
      "region": "Krasnodar Krai, Tikhoretsk",
      "target": "NPS \"Tikhoretsk\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "was strucka strategicheskaya neftepumping station (transport oil po yuzhnomu napravleniyu), fire.",
      "source": "AFU General Staff, SBS"
    },
    "id": 58
  },
  {
    "date": "19.04.2026",
    "lat": 44.05,
    "lng": 39.18,
    "distance": 524,
    "ru": {
      "region": "Краснодарский край, Туапсе",
      "target": "Туапсинский НПЗ и морской порт",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Около 10 точек горения, повреждены резервуары, установка АВТ-12, повреждено судно у причала.",
      "source": "OSINT Astra"
    },
    "uk": {
      "region": "Краснодарський край, Туапс",
      "target": "Туапсинський НПЗ та морський порт",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Близько 10 точок горіння, пошкоджено резервуари, встановлення АВТ-12, пошкоджено судно біля причалу.",
      "source": "OSINT Astra"
    },
    "en": {
      "region": "Krasnodar Krai, Tuapse",
      "target": "Tuapsinskiy Oil Refinery i morskoy port",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Okolo 10 tochek goreniya, was damagedy storage tanks, ustanovka AVT-12, was damagedo sudno u prichala.",
      "source": "OSINT Astra"
    },
    "id": 59
  },
  {
    "date": "20.04.2026",
    "lat": 54.882,
    "lng": 32.443,
    "distance": 384,
    "ru": {
      "region": "Смоленская область, Кардымово",
      "target": "Нефтебаза ООО «ЛУКОЙЛ-Центрнефтепродукт»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Масштабная ночная атака на перевалочную базу горючего. В результате прилетов началось сильное и продолжительное возгорание крупных резервуаров с горюче-смазочными материалами.",
      "source": "СМИ РФ, OSINT"
    },
    "uk": {
      "region": "Смоленська область, Кардимове",
      "target": "Нафтобаза ТОВ «ЛУКОЙЛ-Центрнафтопродукт»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Масштабна нічна атака на перевалочну базу пального. Внаслідок прильотів почалося сильне і тривале загоряння великих резервуарів з паливно-мастильними матеріалами.",
      "source": "ЗМІ РФ, OSINT"
    },
    "en": {
      "region": "Smolensk Oblast, Кардымово",
      "target": "Fuel Depot OOO \"LUKOYL-Tsentrnefteprodukt\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Masshtabnaya nochnaya strikesa na perevalochnuyu bazu fuel. V rezultate priletov nachalos silnoe i prodolzhitelnoe fire outbreak krupnykh storage tankov s goryuche-smazochnymi materialami.",
      "source": "Russian Media, OSINT"
    },
    "id": 60
  },
  {
    "date": "21.04.2026",
    "lat": 53.1,
    "lng": 50.1,
    "distance": 1000,
    "ru": {
      "region": "Самарская обл., Самара",
      "target": "ЛПДС «Самара» (Транснефть)",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Повреждены пять резервуаров по 20 тыс. м³ сырой нефти, зафиксирован масштабный пожар.",
      "source": "Пресс-служба СБУ"
    },
    "uk": {
      "region": "Самарська обл., Самара",
      "target": "ЛВДС «Самара» (Транснафта)",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Пошкоджено п'ять резервуарів по 20 тис. м³ сирої нафти, зафіксовано масштабну пожежу.",
      "source": "Прес-служба СБУ"
    },
    "en": {
      "region": "Самарская обл., Samara",
      "target": "LPDS \"Samara\" (Transneft)",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "was damagedy pyat storage tankov po 20 tys. m³ syroy oil, zafiksirovan large-scale fire.",
      "source": "Press-sluzhba SBU"
    },
    "id": 61
  },
  {
    "date": "21.04.2026",
    "lat": 56.3366,
    "lng": 30.5838,
    "distance": 540,
    "ru": {
      "region": "Псковская область, Великие Луки",
      "target": "Великолукская нефтебаза",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Повторная атака украинских беспилотников. Местные власти и ПВО пытались защитить объект сетками, однако дроны пробили ограждение и упали на территории предприятия.",
      "source": "СМИ РФ, OSINT"
    },
    "uk": {
      "region": "Псковська область, Великі Луки",
      "target": "Великолуцька нафтобаза",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Повторна атака українських безпілотників. Місцева влада і ППО намагалися захистити об'єкт сітками, проте дрони пробили огорожу і впали на території підприємства.",
      "source": "ЗМІ РФ, OSINT"
    },
    "en": {
      "region": "Pskov Oblast, Великие Луки",
      "target": "Velikolukskaya Fuel Depot",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Povtornaya strikesa ukrainskikh droneov. Mestnye vlasti i air defense pytalis zashchitit facility setkami, odnako drones probili ograzhdenie i upali on the facility's territory.",
      "source": "Russian Media, OSINT"
    },
    "id": 62
  },
  {
    "date": "24.04.2026",
    "lat": 55.074,
    "lng": 32.684,
    "distance": 408,
    "ru": {
      "region": "Смоленская область, Ярцево и Раздорово",
      "target": "Нефтебазы компании «Роснефть»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Успешная спецоперация СБУ. Одновременно атакованы две важные базы для хранения и перекачки ГСМ, на которых находилось около 26 тысяч кубометров российского горючего. Начались масштабные пожары, проведена экстренная эвакуация персонала.",
      "source": "СБУ, спутниковые снимки"
    },
    "uk": {
      "region": "Смоленська область, Ярцево та Раздорово",
      "target": "Нафтобази компанії «Роснефть»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Успішна спецоперація СБУ. Одночасно атаковано дві важливі бази для зберігання і перекачування ПММ, на яких знаходилося близько 26 тисяч кубометрів російського пального. Почалися масштабні пожежі, проведено екстрену евакуацію персоналу.",
      "source": "СБУ, супутникові знімки"
    },
    "en": {
      "region": "Smolensk Oblast, Ярцево и Раздорово",
      "target": "Neftebazy kompanii \"Rosneft\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Uspeshnaya spetsoperation SBU. simultaneously strikesovany dve vazhnye bazy dlya khraneniya i perekachki GSM, na kotorykh nakhodilos okolo 26 thousand cubic meters Russian fuel. Nachalis masshtabnye firey, provedena ekstrennaya evacuation personnela.",
      "source": "SBU, sputnikovye snimki"
    },
    "id": 63
  },
  {
    "date": "26.04.2026",
    "lat": 45.093,
    "lng": 33.599,
    "distance": 188,
    "ru": {
      "region": "АР Крым, Новофедоровка",
      "target": "Аэродром «Саки»",
      "category": "Военная инфраструктура / Авиация",
      "weapon": "Ракета / Дрон",
      "details": "Массированный комбинированный удар по инфраструктуре базирования самолетов. Оккупанты экстренно поднимали авиацию в воздух.",
      "source": "СБУ, OSINT"
    },
    "uk": {
      "region": "АР Крим, Новофедорівка",
      "target": "Аеродром «Саки»",
      "category": "Військова інфраструктура / Авіація",
      "weapon": "Ракета / Дрон",
      "details": "Масований комбінований удар по інфраструктурі базування літаків. Окупанти екстрено піднімали авіацію в повітря.",
      "source": "СБУ, OSINT"
    },
    "en": {
      "region": "AR Crimea, Новофедоровка",
      "target": "Airfield \"Saki\"",
      "category": "Military Infrastructure / Aviation",
      "weapon": "Missile / Drone",
      "details": "massive kombinirovannyy strike on infrastrukture bazirovaniya aircraftov. Okkupanty ekstrenno podnimali aviatsiyu v vozdukh.",
      "source": "SBU, OSINT"
    },
    "id": 64
  },
  {
    "date": "27.04.2026",
    "lat": 46.54,
    "lng": 39.54,
    "distance": 285,
    "ru": {
      "region": "Краснодарский край, Кущёвская",
      "target": "Кущёвский аэродром",
      "category": "Авиабаза",
      "weapon": "Дрон",
      "details": "Поражение инфраструктуры аэродрома (направлено 38 БПЛА).",
      "source": "OSINT, Mash"
    },
    "uk": {
      "region": "Краснодарський край, Кущівська",
      "target": "Кущівський аеродром",
      "category": "Авіабаза",
      "weapon": "Дрон",
      "details": "Поразка інфраструктури аеродрому (направлено 38 БПЛА).",
      "source": "OSINT, Mash"
    },
    "en": {
      "region": "Krasnodar Krai, Кущёвская",
      "target": "Kushchyovskiy Airfield",
      "category": "Airbase",
      "weapon": "Drone",
      "details": "was struckie infrastructure aerodroma (napravleno 38 UAV).",
      "source": "OSINT, Mash"
    },
    "id": 65
  },
  {
    "date": "27.04.2026",
    "lat": 44.85,
    "lng": 38.66,
    "distance": 428,
    "ru": {
      "region": "Краснодарский край, Ильский",
      "target": "Ильский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Падение обломков БПЛА на территорию НПЗ.",
      "source": "OSINT, Mash"
    },
    "uk": {
      "region": "Краснодарський край, Ільський",
      "target": "Ільський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Падіння уламків БПЛА на території НПЗ.",
      "source": "OSINT, Mash"
    },
    "en": {
      "region": "Krasnodar Krai, Ilsky",
      "target": "Ilsky Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Padenie debris UAV na territory oil refinery.",
      "source": "OSINT, Mash"
    },
    "id": 66
  },
  {
    "date": "29.04.2026",
    "lat": 58,
    "lng": 56.2,
    "distance": 1571,
    "ru": {
      "region": "Пермский край, Пермь",
      "target": "ЛПДС «Пермь» (Транснефть)",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Серия взрывов; почти все резервуары с нефтепродуктами охвачены огнём. Объект находится более чем в 1500 км от Украины.",
      "source": "СБУ (Telegram)"
    },
    "uk": {
      "region": "Пермський край, Перм",
      "target": "ЛВДС «Пермь» (Транснафта)",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Серія вибухів; Багато резервуари з нафтопродуктами охоплені вогнем. Об'єкт знаходиться більш ніж за 1500 км від України.",
      "source": "СБУ (Telegram)"
    },
    "en": {
      "region": "Perm Krai, Perm",
      "target": "LPDS \"Perm\" (Transneft)",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Seriya explosionov; pochti vse storage tanks s nefteproduktami okhvacheny ognyom. facility nakhoditsya bolee chem v 1500 km ot Ukrainy.",
      "source": "SBU (Telegram)"
    },
    "id": 67
  },
  {
    "date": "30.04.2026",
    "lat": 57.925,
    "lng": 56.136,
    "distance": 1564,
    "ru": {
      "region": "Пермский край, Пермь",
      "target": "НПЗ «Лукойл-Пермнефтеоргсинтез»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Поражена установка АВТ-4 (узел первичной переработки); загорелись вакуумная и атмосферная колонны.",
      "source": "СБУ (Telegram)"
    },
    "uk": {
      "region": "Пермський край, Перм",
      "target": "НПЗ «Лукойл-Пермнафтооргсинтез»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Вражена установка АВТ-4 (вузол первинної переробки); спалахнули вакуумна та атмосферна колони.",
      "source": "СБУ (Telegram)"
    },
    "en": {
      "region": "Perm Krai, Perm",
      "target": "Oil Refinery \"Lukoyl-Permnefteorgsintez\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "was strucka ustanovka AVT-4 (uzel pervichnoy pererabotki); zaburnedis vakuumnaya i atmosfernaya kolonny.",
      "source": "SBU (Telegram)"
    },
    "id": 68
  },
  {
    "date": "30.04.2026",
    "lat": 58,
    "lng": 56.2,
    "distance": 1571,
    "ru": {
      "region": "Пермский край, Пермь",
      "target": "ЛПДС «Пермь» (Транснефть)",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Повреждены резервуары на станции; возник новый очаг пожара (повторный удар).",
      "source": "СБУ (Telegram)"
    },
    "uk": {
      "region": "Пермський край, Перм",
      "target": "ЛВДС «Пермь» (Транснафта)",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Пошкоджено резервуари на станції; виникло нове вогнище пожежі (повторний удар).",
      "source": "СБУ (Telegram)"
    },
    "en": {
      "region": "Perm Krai, Perm",
      "target": "LPDS \"Perm\" (Transneft)",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "was damagedy storage tanks na stantsii; voznik novyy ochag firea (povtornyy strike).",
      "source": "SBU (Telegram)"
    },
    "id": 69
  },
  {
    "date": "01.05.2026",
    "lat": 44.05,
    "lng": 39.18,
    "distance": 524,
    "ru": {
      "region": "Краснодарский край, Туапсе",
      "target": "Туапсинский НПЗ и портовый терминал",
      "category": "Нефтегаз / Логистика",
      "weapon": "Дрон",
      "details": "Пожар в резервуарах с нефтью и мазутом; черный дым; уничтожено 52% парка (24 резервуара), работа завода остановлена.",
      "source": "Генштаб ВСУ, СБУ, СБС"
    },
    "uk": {
      "region": "Краснодарський край, Туапс",
      "target": "Туапсинський НПЗ та портовий термінал",
      "category": "Нафтогаз / Логістика",
      "weapon": "Дрон",
      "details": "Пожежа в резервуарах з нафтою та мазутом; чорний дим; знищено 52% парку (24 резервуари), роботу заводу зупинено.",
      "source": "Генштаб ЗСУ, СБУ, СБС"
    },
    "en": {
      "region": "Krasnodar Krai, Tuapse",
      "target": "Tuapsinskiy Oil Refinery i portovyy Terminal",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "fire v storage tankakh s oilyu i mazutom; chernyy dym; was destroyedo 52% parka (24 storage tanka), rabota planta ostanovlena.",
      "source": "AFU General Staff, SBU, SBS"
    },
    "id": 70
  },
  {
    "date": "01.05.2026",
    "lat": 55.26,
    "lng": 61.3,
    "distance": 1767,
    "ru": {
      "region": "Челябинская обл., Челябинск",
      "target": "Военный аэродром «Шагол»",
      "category": "Авиабаза",
      "weapon": "Дрон",
      "details": "Повреждены бомбардировщики Су-34 и истребитель Су-57 (суммарно поражено 4 борта).",
      "source": "OSINT-аналитика"
    },
    "uk": {
      "region": "Челябінська обл., Челябінськ",
      "target": "Військовий аеродром «Шагол»",
      "category": "Авіабаза",
      "weapon": "Дрон",
      "details": "Пошкоджено бомбардувальники Су-34 та винищувач Су-57 (сумарно уражено 4 борти).",
      "source": "OSINT-аналітика"
    },
    "en": {
      "region": "Chelyabinskая обл., Chelyabinsk",
      "target": "Voennyy Airfield \"Shagol\"",
      "category": "Airbase",
      "weapon": "Drone",
      "details": "was damagedy bombardirovshchiki Su-34 i fighter jet Su-57 (summarno was strucko 4 borta).",
      "source": "OSINT-analitika"
    },
    "id": 71
  },
  {
    "date": "01.05.2026",
    "lat": 51.647,
    "lng": 39.274,
    "distance": 282,
    "ru": {
      "region": "Воронежская область, Воронеж",
      "target": "Нефтебаза АО «Воронежнефтепродукт»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "В результате ночной спецоперации ГУР беспилотники атаковали территорию нефтехранилища, обеспечивающего нужды российской армии.",
      "source": "ГУР, OSINT"
    },
    "uk": {
      "region": "Воронезька область, Воронеж",
      "target": "Нафтобаза АТ «Воронежнафтопродукт»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Унаслідок нічної спецоперації ГУР безпілотники атакували територію нафтосховища, що забезпечує потреби російської армії.",
      "source": "ГУР, OSINT"
    },
    "en": {
      "region": "Voronezh Oblast, Voronezh",
      "target": "Fuel Depot AO \"Voronezhnefteprodukt\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "V rezultate nochnoy spetsoperation HUR drones strikesovali territory oil storage facility, obespechivayushchego nuzhdy rossiyskoy armii.",
      "source": "HUR, OSINT"
    },
    "id": 72
  },
  {
    "date": "05.05.2026",
    "lat": 59.4891,
    "lng": 32.0772,
    "distance": 890,
    "ru": {
      "region": "Ленинградская обл., Кириши",
      "target": "Киришский НПЗ (КИНЕФ)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Попадания по 3 установкам АВТ. Завод (7% переработки РФ) полностью остановлен, продолжается пожар.",
      "source": "СБУ, Reuters"
    },
    "uk": {
      "region": "Ленинградская обл., Кириші",
      "target": "Кірішський НПЗ (КІНЕФ)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Влучення по 3 установкам АВТ. Завод (7% переробки РФ) повністю зупинено, триває пожежа.",
      "source": "СБУ, Reuters"
    },
    "en": {
      "region": "Ленинградская обл., Кириши",
      "target": "Kirishskiy Oil Refinery (KINEF)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "direct hits po 3 ustanovkam AVT. plant (7% pererabotki RF) polnostyu ostanovlen, prodolzhaetsya fire.",
      "source": "SBU, Reuters"
    },
    "id": 73
  },
  {
    "date": "05.05.2026",
    "lat": 59.4891,
    "lng": 32.0772,
    "distance": 890,
    "ru": {
      "region": "Ленинградская обл., Кириши",
      "target": "НПС «Кириши»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Поражен резервуар с нефтепродуктами; возник пожар на нефтеперекачивающей станции.",
      "source": "СБУ (соцсети)"
    },
    "uk": {
      "region": "Ленинградская обл., Кириші",
      "target": "НПС «Кіриші»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Уражений резервуар із нафтопродуктами; виникла пожежа на нафтоперекачувальній станції.",
      "source": "СБУ (соцмережі)"
    },
    "en": {
      "region": "Ленинградская обл., Кириши",
      "target": "NPS \"Kirishi\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "A fuel tank was struck s nefteproduktami; voznik fire na nefteperekachivayushchey stantsii.",
      "source": "SBU (sotsseti)"
    },
    "id": 74
  },
  {
    "date": "07-08.05.2026",
    "lat": 57.925,
    "lng": 56.136,
    "distance": 1564,
    "ru": {
      "region": "Пермский край, Пермь",
      "target": "НПЗ «Лукойл-Пермнефтеоргсинтез»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Пожар на территории; поражены резервуары и возгорание ключевой установки АВТ (полная остановка переработки).",
      "source": "Президент Украины, СБУ"
    },
    "uk": {
      "region": "Пермський край, Перм",
      "target": "НПЗ «Лукойл-Пермнафтооргсинтез»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "пожежа на території; уражені резервуари та займання ключової установки АВТ (повна зупинка переробки).",
      "source": "Президент України, СБУ"
    },
    "en": {
      "region": "Perm Krai, Perm",
      "target": "Oil Refinery \"Lukoyl-Permnefteorgsintez\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "fire na territory; Fuel tanks were struck i fire outbreak klyuchevoy ustanovki AVT (polnaya ostanovka pererabotki).",
      "source": "Prezident Ukrainy, SBU"
    },
    "id": 75
  },
  {
    "date": "08.05.2026",
    "lat": 58,
    "lng": 56.2,
    "distance": 1571,
    "ru": {
      "region": "Пермский край, Пермь",
      "target": "ЛПДС «Пермь» (Транснефть)",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Повреждён резервуар на станции – возник новый очаг пожара (третья атака).",
      "source": "СБУ (ЦСО «Альфа»)"
    },
    "uk": {
      "region": "Пермський край, Перм",
      "target": "ЛВДС «Пермь» (Транснафта)",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Пошкоджено резервуар на станції – виникло нове вогнище пожежі (третя атака).",
      "source": "СБУ (ЦСО «Альфа»)"
    },
    "en": {
      "region": "Perm Krai, Perm",
      "target": "LPDS \"Perm\" (Transneft)",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Povrezhdyon storage tank na stantsii – voznik novyy ochag firea (tretya strikesa).",
      "source": "SBU (TsSO \"Alfa\")"
    },
    "id": 76
  },
  {
    "date": "08.05.2026",
    "lat": 57.5501,
    "lng": 39.7917,
    "distance": 806,
    "ru": {
      "region": "Ярославская обл., Ярославль",
      "target": "Ярославский НПЗ и ЛПДС «Ярославль-3»",
      "category": "Нефтегаз / Логистика",
      "weapon": "Дрон",
      "details": "Пожар на предприятии и поражение насосной станции, подающей топливо к Балтике и в Москву.",
      "source": "Минобороны Украины"
    },
    "uk": {
      "region": "Ярославська обл., Ярославль",
      "target": "Ярославський НПЗ та ЛВДС «Ярославль-3»",
      "category": "Нафтогаз / Логістика",
      "weapon": "Дрон",
      "details": "Пожежа на підприємстві та поразка насосної станції, що подає паливо до Балтики та до Москви.",
      "source": "Міноборони України"
    },
    "en": {
      "region": "Ярославская обл., Yaroslavl",
      "target": "Yaroslavskiy Oil Refinery i LPDS \"Yaroslavl-3\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "fire na predpriyatii i was struckie nasosnoy stantsii, podayushchey fuel k Baltike i v Moskvu.",
      "source": "MoD Ukrainy"
    },
    "id": 77
  },
  {
    "date": "09.05.2026",
    "lat": 45.112,
    "lng": 37.418,
    "distance": 350,
    "ru": {
      "region": "Краснодарский край, с. Юровка (Анапа)",
      "target": "Нефтебаза ООО «Темрюкмортранс»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Ударные дроны поразили перевалочную нефтебазу, снабжающую топливом российские войска в Крыму. Повреждены минимум 6 резервуаров.",
      "source": "СБУ, OSINT"
    },
    "uk": {
      "region": "Краснодарський край, с. Юрівка (Анапа)",
      "target": "Нафтобаза ТОВ «Темрюкмортранс»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Ударні дрони уразили перевалочну нафтобазу, що постачає пальне російським військам у Криму. Пошкоджено щонайменше 6 резервуарів.",
      "source": "СБУ, OSINT"
    },
    "en": {
      "region": "Krasnodar Krai, с. Юровка (Anapa)",
      "target": "Fuel Depot OOO \"Temryukmortrans\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "strike drones porazili perevalochnuyu fuel depot, snabzhayushchuyu fuelm Russian troops v Krymu. was damagedy at least 6 storage tankov.",
      "source": "SBU, OSINT"
    },
    "id": 78
  },
  {
    "date": "11.05.2026",
    "lat": 48.435,
    "lng": 44.56,
    "distance": 514,
    "ru": {
      "region": "Волгоградская область, Волгоград",
      "target": "Волгоградский НПЗ («Лукойл»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В результате ночной атаки дронов повреждены установки первичной переработки нефти (АВТ-1 и АВТ-6), а также кабели управления и дымовая труба.",
      "source": "ГУР"
    },
    "uk": {
      "region": "Волгоградська область, Волгоград",
      "target": "Волгоградський НПЗ («Лукойл»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Внаслідок нічної атаки дронів пошкоджено установки первинної переробки нафти (АВТ-1 та АВТ-6), а також кабелі управління та димову трубу.",
      "source": "ГУР"
    },
    "en": {
      "region": "Volgograd Oblast, Volgograd",
      "target": "Volgogradskiy Oil Refinery (\"Lukoyl\")",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "V rezultate nochnoy drone strikes was damagedy ustanovki pervichnoy pererabotki oil (AVT-1 i AVT-6), a takzhe kabeli upravleniya i dymovaya truba.",
      "source": "HUR"
    },
    "id": 79
  },
  {
    "date": "15.05.2026",
    "lat": 54.58,
    "lng": 39.78,
    "distance": 528,
    "ru": {
      "region": "Рязанская обл., Рязань",
      "target": "Рязанский НПЗ (Роснефть)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Масштабный пожар на вакуумных дистилляционных узлах, выпадение осадков в виде «нефтяного дождя».",
      "source": "ССО, СБС, Генштаб ВСУ"
    },
    "uk": {
      "region": "Рязанська обл., Рязань",
      "target": "Рязанський НПЗ (Роснефть)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Масштабна пожежа на вакуумних дистиляційних вузлах, випадання опадів у вигляді нафтового дощу.",
      "source": "СЗГ, СБС, Генштаб ЗСУ"
    },
    "en": {
      "region": "Рязанская обл., Ryazan",
      "target": "Ryazanskiy Oil Refinery (Rosneft)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "large-scale fire na vakuumnykh distillyatsionnykh uzlakh, vypadenie osadkov v vide \"neftyanogo dozhdya\".",
      "source": "SOF, SBS, AFU General Staff"
    },
    "id": 80
  },
  {
    "date": "16.05.2026",
    "lat": 44.64,
    "lng": 41.95,
    "distance": 564,
    "ru": {
      "region": "Ставропольский край, Невинномысск",
      "target": "Химзавод «Невинномысский Азот»",
      "category": "ВПК (химпром)",
      "weapon": "Дрон",
      "details": "Серия взрывов и масштабный пожар в промышленной зоне стратегического химического предприятия.",
      "source": "OSINT Astra"
    },
    "uk": {
      "region": "Ставропольський край, Невинномиськ",
      "target": "Хімзавод «Невинномиський Азот»",
      "category": "ВПК (хімпром)",
      "weapon": "Дрон",
      "details": "Серія вибухів та масштабна пожежа у промисловій зоні стратегічного хімічного підприємства.",
      "source": "OSINT Astra"
    },
    "en": {
      "region": "Stavropol Krai, Невинномысск",
      "target": "KhimPlant \"Nevinnomysskiy Azot\"",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "Seriya explosionov i large-scale fire v promyshlennoy zone strategicheskogo khimicheskogo facility.",
      "source": "OSINT Astra"
    },
    "id": 81
  },
  {
    "date": "16.05.2026",
    "lat": 46.7005,
    "lng": 38.2475,
    "distance": 232,
    "ru": {
      "region": "Краснодарский край, Ейск",
      "target": "Военный аэродром «Ейск»",
      "category": "Авиабаза",
      "weapon": "Дрон",
      "details": "Уничтожены уникальный самолет-амфибия Бе-200 и морской вертолет Ка-27. Подтверждено спутниками.",
      "source": "СБС, Генштаб ВСУ"
    },
    "uk": {
      "region": "Краснодарський край, Єйськ",
      "target": "Військовий аеродром «Єйськ»",
      "category": "Авіабаза",
      "weapon": "Дрон",
      "details": "Знищено унікальний літак-амфібія Бе-200 та морський вертоліт Ка-27. Підтверджено супутниками.",
      "source": "СБС, Генштаб ЗСУ"
    },
    "en": {
      "region": "Krasnodar Krai, Yeisk",
      "target": "Voennyy Airfield \"Yeisk\"",
      "category": "Airbase",
      "weapon": "Drone",
      "details": "were destroyed unikalnyy aircraft-amfibiya Be-200 i morskoy helicopter Ka-27. confirmed sputnikami.",
      "source": "SBS, AFU General Staff"
    },
    "id": 82
  },
  {
    "date": "16.05.2026",
    "lat": 53.4,
    "lng": 34,
    "distance": 280,
    "ru": {
      "region": "Брянская обл., Лесное",
      "target": "Станция контроля воздушного пространства",
      "category": "ВПК",
      "weapon": "Неизвестно",
      "details": "Точное поражение и выведение из строя радиолокационной станции слежения.",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Брянська обл., Лісове",
      "target": "Станція контролю повітряного простору",
      "category": "ВПК",
      "weapon": "Невідомо",
      "details": "Точне ураження та виведення з ладу радіолокаційної станції стеження.",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Bryanskая обл., Лесное",
      "target": "Stantsiya kontrolya vozdushnogo prostranstva",
      "category": "Defense Industry",
      "weapon": "Unknown",
      "details": "Tochnoe was struckie i vyvedenie iz stroya radiolokatsionnoy stantsii slezheniya.",
      "source": "AFU General Staff"
    },
    "id": 83
  },
  {
    "date": "17.05.2026",
    "lat": 55.638,
    "lng": 37.794,
    "distance": 562,
    "ru": {
      "region": "Москва, Капотня",
      "target": "Московский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Завод полностью остановил переработку для минимизации рисков после падения БПЛА у проходной.",
      "source": "Власти РФ, Reuters"
    },
    "uk": {
      "region": "Москва, Капотня",
      "target": "Московський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Завод повністю зупинив переробку для мінімізації ризиків після падіння БПЛА біля прохідної.",
      "source": "Влада РФ, Reuters"
    },
    "en": {
      "region": "Moscow, Капотня",
      "target": "Moskovskiy Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "plant polnostyu ostanovil pererabotku dlya minimizatsii riskov posle padeniya UAV u prokhodnoy.",
      "source": "Vlasti RF, Reuters"
    },
    "id": 84
  },
  {
    "date": "17.05.2026",
    "lat": 44.685,
    "lng": 33.566,
    "distance": 229,
    "ru": {
      "region": "АР Крым, Севастополь",
      "target": "Аэродром «Бельбек»",
      "category": "Военная инфраструктура / ПВО",
      "weapon": "Ракета",
      "details": "Уничтожены ЗРК «Панцирь-С2», радар С-400, пункты управления беспилотниками и диспетчерская вышка.",
      "source": "СБУ, Силы обороны"
    },
    "uk": {
      "region": "АР Крим, Севастополь",
      "target": "Аеродром «Бельбек»",
      "category": "Військова інфраструктура / ППО",
      "weapon": "Ракета",
      "details": "Знищено ЗРК «Панцир-С2», радар С-400, пункти управління безпілотниками та диспетчерську вежу.",
      "source": "СБУ, Сили оборони"
    },
    "en": {
      "region": "AR Crimea, Sevastopol",
      "target": "Airfield \"Belbek\"",
      "category": "Military Infrastructure",
      "weapon": "Missile",
      "details": "were destroyed air defense system \"Pantsir-S2\", radar S-400, punkty upravleniya dronemi i dispetcherskaya vyshka.",
      "source": "SBU, Sily oborony"
    },
    "id": 85
  },
  {
    "date": "17.05.2026",
    "lat": 44.734,
    "lng": 37.796,
    "distance": 401,
    "ru": {
      "region": "Краснодарский край, Новороссийск",
      "target": "Мазутный терминал / Порт Новороссийска",
      "category": "Топливная логистика / Инфраструктура",
      "weapon": "Дрон",
      "details": "Массированная комбинированная атака (около 100 дронов на регион). Поражены объекты инфраструктуры в порту (терминал, ж/д станция), а также нанесен повторный удар по Туапсинскому НПЗ.",
      "source": "СБУ, ГУР"
    },
    "uk": {
      "region": "Краснодарський край, Новоросійськ",
      "target": "Мазутний термінал / Порт Новоросійська",
      "category": "Паливна логістика / Інфраструктура",
      "weapon": "Дрон",
      "details": "Масована комбінована атака (близько 100 дронів на регіон). Уражено об'єкти інфраструктури в порту (термінал, залізнична станція), а також завдано повторного удару по Туапсинському НПЗ.",
      "source": "СБУ, ГУР"
    },
    "en": {
      "region": "Krasnodar Krai, Novorossiysk",
      "target": "Mazutnyy Terminal / Port Novorossiyska",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Massirovannaya kombinirovannaya strikesa (okolo 100 droneov na region). were struck facilityy infrastructure v portu (terminal, zh/d stantsiya), a takzhe nanesen povtornyy strike on Tuapsinskomu oil refinery.",
      "source": "SBU, HUR"
    },
    "id": 86
  },
  {
    "date": "19.05.2026",
    "lat": 45.242,
    "lng": 38.106,
    "distance": 367,
    "ru": {
      "region": "Краснодарский край, Славянск-на-Кубани / ст. Кущевская",
      "target": "Славянский НПЗ / Аэродром «Кущевская»",
      "category": "Нефтегаз / Авиация",
      "weapon": "Дрон",
      "details": "Очередная ночная атака на аэродром и НПЗ. Завод в Славянске-на-Кубани был вынужден вновь приостановить работу после падения дронов на его территории.",
      "source": "СБУ, OSINT"
    },
    "uk": {
      "region": "Краснодарський край, Слов'янськ-на-Кубані / ст. Кущевська",
      "target": "Слов'янський НПЗ / Аеродром «Кущевська»",
      "category": "Нафтогаз / Авіація",
      "weapon": "Дрон",
      "details": "Чергова нічна атака на аеродром та НПЗ. Завод у Слов'янську-на-Кубані був змушений знову призупинити роботу після падіння дронів на його території.",
      "source": "СБУ, OSINT"
    },
    "en": {
      "region": "Krasnodar Krai, Славянск-на-Кубани / ст. Кущевская",
      "target": "Slavyanskiy Oil Refinery / Airfield \"Kushchevskaya\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Ocherednaya nochnaya strikesa na aerodrom i oil refinery. plant v Slavyanske-na-Kubani byl vynuzhden vnov priostanovit rabotu posle padeniya droneov na ego territory.",
      "source": "SBU, OSINT"
    },
    "id": 87
  },
  {
    "date": "20.05.2026",
    "lat": 45.0428,
    "lng": 41.9734,
    "distance": 529,
    "ru": {
      "region": "Ставропольский край, Ставрополь",
      "target": "Военно-инфраструктурные объекты",
      "category": "Военная инфраструктура",
      "weapon": "Дрон",
      "details": "Украинский беспилотник прорвался непосредственно к краевому центру. После падения и детонации его обломки были обнаружены в черте Ставрополя.",
      "source": "СМИ РФ"
    },
    "uk": {
      "region": "Ставропольський край, Ставрополь",
      "target": "Військово-інфраструктурні об'єкти",
      "category": "Військова інфраструктура",
      "weapon": "Дрон",
      "details": "Український безпілотник прорвався безпосередньо до крайового центру. Після падіння та детонації його уламки були виявлені в межах Ставрополя.",
      "source": "ЗМІ РФ"
    },
    "en": {
      "region": "Stavropol Krai, Stavropol",
      "target": "Voenno-infrastrukturnye obekty",
      "category": "Military Infrastructure",
      "weapon": "Drone",
      "details": "Ukrainian drone prorvalsya neposredstvenno k kraevomu tsentru. Posle padeniya i detonation ego debris byli obnaruzheny v cherte Stavropolya.",
      "source": "Russian Media"
    },
    "id": 88
  },
  {
    "date": "21.05.2026",
    "lat": 53.18,
    "lng": 48.4,
    "distance": 903,
    "ru": {
      "region": "Самарская обл., Сызрань",
      "target": "Сызранский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Повреждена установка АВТ-6, обеспечивающая свыше 70% мощности завода (серьезное снижение переработки).",
      "source": "Минобороны Украины, Reuters"
    },
    "uk": {
      "region": "Самарська обл., Сизрань",
      "target": "Сизранський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Пошкоджено установку АВТ-6, що забезпечує понад 70% потужності заводу (серйозне зниження переробки).",
      "source": "Міноборони України, Reuters"
    },
    "en": {
      "region": "Самарская обл., Syzran",
      "target": "Syzranskiy Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "was damageda ustanovka AVT-6, obespechivayushchaya svyshe 70% moshchnosti planta (sereznoe snizhenie pererabotki).",
      "source": "MoD Ukrainy, Reuters"
    },
    "id": 89
  },
  {
    "date": "22.05.2026",
    "lat": 49.2786,
    "lng": 38.9105,
    "distance": 114,
    "ru": {
      "region": "Луганская обл., Старобельск",
      "target": "Склад боеприпасов / база БПЛА",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Поражение складов боеприпасов, средств ПВО и штаба отряда БПЛА «Рубикон».",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Луганська обл., Старобільськ",
      "target": "Склад боєприпасів / база БПЛА",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Поразка складів боєприпасів, засобів ППО та штабу загону БПЛА «Рубікон».",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Luhanskая обл., Старобельск",
      "target": "Warehouse boepripasov / baza BPLA",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "was struckie warehouseov boepripasov, sredstv air defense i shtaba otryada UAV \"Rubikon\".",
      "source": "AFU General Staff"
    },
    "id": 90
  },
  {
    "date": "22-23.05.2026",
    "lat": 44.75,
    "lng": 37.81,
    "distance": 400,
    "ru": {
      "region": "Краснодарский край, Новороссийск",
      "target": "Нефтебаза «Грушовая балка» / терминал «Шесхарис»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Возгорание технических/административных зданий и пожары в резервуарном парке крупнейшего терминала Юга РФ.",
      "source": "Минобороны Украины, OSINT"
    },
    "uk": {
      "region": "Краснодарський край, Новоросійськ",
      "target": "Нафтобаза «Грушова балка» / термінал «Шесхаріс»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Займання технічних/адміністративних будівель та пожежі у резервуарному парку найбільшого терміналу Півдня РФ.",
      "source": "Міноборони України, OSINT"
    },
    "en": {
      "region": "Krasnodar Krai, Novorossiysk",
      "target": "Fuel Depot \"Grushovaya balka\" / Terminal \"Sheskharis\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "fire outbreak tekhnicheskikh/administrativnykh zdaniy i firey v storage tanknom parke krupneyshego terminala Yuga RF.",
      "source": "MoD Ukrainy, OSINT"
    },
    "id": 91
  },
  {
    "date": "23.05.2026",
    "lat": 58.85,
    "lng": 57.58,
    "distance": 1684,
    "ru": {
      "region": "Пермский край, Губаха",
      "target": "Завод Metafrax Chemicals",
      "category": "ВПК (химпром)",
      "weapon": "Дрон",
      "details": "Удар по химическому предприятию, производящему важное сырье для оборонной промышленности.",
      "source": "Минобороны Украины"
    },
    "uk": {
      "region": "Пермський край, Губаха",
      "target": "Metafrax Chemicals",
      "category": "ВПК (хімпром)",
      "weapon": "Дрон",
      "details": "Удар по хімічному підприємству, що виробляє важливу сировину для оборонної промисловості.",
      "source": "Міноборони України"
    },
    "en": {
      "region": "Perm Krai, Губаха",
      "target": "Plant Metafrax Chemicals",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "strike on khimicheskomu predpriyatiyu, proizvodyashchemu vazhnoe syre dlya oboronnoy promyshlennosti.",
      "source": "MoD Ukrainy"
    },
    "id": 92
  },
  {
    "date": "24.05.2026",
    "lat": 56.28,
    "lng": 40.85,
    "distance": 718,
    "ru": {
      "region": "Владимирская обл., Камешковский р-н",
      "target": "ЛПДС «Второво» (Транснефть)",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Масштабный пожар (ок. 800 кв. м) на объекте, снабжающем московские аэропорты и экспортные порты.",
      "source": "СБУ (Telegram)"
    },
    "uk": {
      "region": "Володимирська обл., Камешківський р-н",
      "target": "ЛВДС «Второво» (Транснафта)",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Масштабна пожежа (бл. 800 кв. м) на об'єкті, що забезпечує московські аеропорти та експортні порти.",
      "source": "СБУ (Telegram)"
    },
    "en": {
      "region": "Владимирская обл., Камешковский р-н",
      "target": "LPDS \"Vtorovo\" (Transneft)",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "large-scale fire (ok. 800 kv. m) na facilitye, snabzhayushchem moskovskie aeroporty i eksportnye porty.",
      "source": "SBU (Telegram)"
    },
    "id": 93
  },
  {
    "date": "27.05.2026",
    "lat": 47.204,
    "lng": 38.859,
    "distance": 195,
    "ru": {
      "region": "Ростовская область, Таганрог",
      "target": "325-й авиаремонтный завод",
      "category": "ВПК / Авиация",
      "weapon": "Дрон",
      "details": "Повторный удар по авиастроительной инфраструктуре Таганрога. Зафиксирован крупный пожар на территории завода, занимающегося ремонтом транспортной авиации.",
      "source": "OSINT (Astra)"
    },
    "uk": {
      "region": "Ростовська область, Таганрог",
      "target": "325-й авіаремонтний завод",
      "category": "ВПК / Авіація",
      "weapon": "Дрон",
      "details": "Повторний удар по авіабудівній інфраструктурі Таганрога. Зафіксовано велику пожежу на території заводу, що займається ремонтом транспортної авіації.",
      "source": "OSINT (Astra)"
    },
    "en": {
      "region": "Rostov Oblast, Taganrog",
      "target": "325-y aviaremontnyy Plant",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "Povtornyy strike on aviastroitelnoy infrastrukture Taganroga. Zafiksirovan major fire on the plant's territory, zanimayushchegosya remontom transportnoy aviatsii.",
      "source": "OSINT (Astra)"
    },
    "id": 94
  },
  {
    "date": "29.05.2026",
    "lat": 48.51,
    "lng": 44.57,
    "distance": 514,
    "ru": {
      "region": "Волгоградская обл., Волгоград",
      "target": "Волгоградский НПЗ «Лукойл»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Остановлены установки первичной переработки нефти АВТ-1, АВТ-5 и АВТ-6; полная остановка переработки.",
      "source": "Генштаб ВСУ, ССО"
    },
    "uk": {
      "region": "Волгоградська обл., Волгоград",
      "target": "Волгоградський НПЗ «Лукойл»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Зупинено установки первинної переробки нафти АВТ-1, АВТ-5 та АВТ-6; повна зупинка переробки.",
      "source": "Генштаб ЗСУ, СЗГ"
    },
    "en": {
      "region": "Volgogradская обл., Volgograd",
      "target": "Volgogradskiy Oil Refinery \"Lukoyl\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Ostanovleny ustanovki pervichnoy pererabotki oil AVT-1, AVT-5 i AVT-6; polnaya ostanovka pererabotki.",
      "source": "AFU General Staff, SOF"
    },
    "id": 95
  },
  {
    "date": "29.05.2026",
    "lat": 45.068,
    "lng": 35.395,
    "distance": 277,
    "ru": {
      "region": "АР Крым, Феодосия",
      "target": "Морской нефтяной терминал",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Удар по крупнейшей нефтебазе полуострова. Зафиксированы два крупных очага возгорания, шлейф дыма ушел в сторону моря.",
      "source": "СБС"
    },
    "uk": {
      "region": "АР Крим, Феодосія",
      "target": "Морський нафтовий термінал",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Удар по найбільшій нафтобазі півострова. Зафіксовано два великих осередки займання, шлейф диму пішов у бік моря.",
      "source": "СБС"
    },
    "en": {
      "region": "AR Crimea, Феодосия",
      "target": "Morskoy neftyanoy Terminal",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "strike on krupneyshey fuel depot poluostrova. Zafiksirovany dva krupnykh ochaga vozgoraniya, shleyf dyma ushel v storonu morya.",
      "source": "SBS"
    },
    "id": 96
  },
  {
    "date": "31.05.2026",
    "lat": 51.5406,
    "lng": 46.0086,
    "distance": 676,
    "ru": {
      "region": "Саратовская обл., Саратов",
      "target": "Саратовский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Повторный удар; зафиксировано как минимум 3 очага горения на территории завода, мощные столбы дыма.",
      "source": "NASA FIRMS, OSINT"
    },
    "uk": {
      "region": "Саратовська обл., Саратов",
      "target": "Саратовський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Повторний удар; зафіксовано щонайменше 3 вогнища горіння на території заводу, потужні стовпи диму.",
      "source": "NASA FIRMS, OSINT"
    },
    "en": {
      "region": "Saratovская обл., Saratov",
      "target": "Saratovskiy Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Povtornyy strike; zafiksirovano kak at least 3 ochaga goreniya on the plant's territory, moshchnye stolby dyma.",
      "source": "NASA FIRMS, OSINT"
    },
    "id": 97
  },
  {
    "date": "31.05.2026",
    "lat": 47.56,
    "lng": 38.86,
    "distance": 162,
    "ru": {
      "region": "Ростовская обл., Матвеев Курган",
      "target": "Частная нефтебаза",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Пожар на крупном топливном хранилище, потребовалась эвакуация населения и пожарный поезд.",
      "source": "Данные OSINT"
    },
    "uk": {
      "region": "Ростовська обл., Матвєєв Курган",
      "target": "Приватна нафтобаза",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Пожежа на великому паливному сховищі, була потрібна евакуація населення та пожежний поїзд.",
      "source": "Дані OSINT"
    },
    "en": {
      "region": "Ростовская обл., Матвеев Курган",
      "target": "Chastnaya Fuel Depot",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "fire na krupnom toplivnom storage facility, potrebovalas evacuation of the population i firenyy poezd.",
      "source": "Dannye OSINT"
    },
    "id": 98
  },
  {
    "date": "31.05.2026",
    "lat": 57.17,
    "lng": 49.92,
    "distance": 1202,
    "ru": {
      "region": "Кировская обл., Уржумский р-н",
      "target": "ЛПДС «Лазарево» (Транснефть)",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Точный удар по линейной производственно-диспетчерской станции системы магистральных нефтепроводов.",
      "source": "OSINT, Стерненко"
    },
    "uk": {
      "region": "Кіровська обл., Уржумський р-н",
      "target": "ЛВДС «Лазарєво» (Транснафта)",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Точний удар по лінійній виробничо-диспетчерській станції системи магістральних нафтопроводів.",
      "source": "OSINT, Стерненко"
    },
    "en": {
      "region": "Kirovская обл., Уржумский р-н",
      "target": "LPDS \"Lazarevo\" (Transneft)",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Tochnyy strike on lineynoy proizvodstvenno-dispetcherskoy stantsii sistemy magistralnykh oil pipelineov.",
      "source": "OSINT, Sternenko"
    },
    "id": 99
  },
  {
    "date": "31.05.2026",
    "lat": 47.78,
    "lng": 39.9,
    "distance": 202,
    "ru": {
      "region": "Ростовская обл., Новошахтинск",
      "target": "Новошахтинский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Ракета",
      "details": "Уничтожены/выведены из строя две установки первичной переработки мощностью до 2,5 млн тонн каждая.",
      "source": "ВМС ВСУ"
    },
    "uk": {
      "region": "Ростовська обл., Новошахтинськ",
      "target": "Новошахтинський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Ракета",
      "details": "Знищено/виведено з ладу дві установки первинної переробки потужністю до 2,5 млн тонн кожна.",
      "source": "ВМС ЗСУ"
    },
    "en": {
      "region": "Ростовская обл., Новошахтинск",
      "target": "Novoshakhtinskiy Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Missile",
      "details": "were destroyed/vyvedeny iz stroya dve ustanovki pervichnoy pererabotki moshchnostyu do 2,5 mln tons kazhdaya.",
      "source": "VMS AFU"
    },
    "id": 100
  },
  {
    "date": "31.05.2026",
    "lat": 45.34,
    "lng": 36.674,
    "distance": 302,
    "ru": {
      "region": "Краснодарский край, Темрюкский район",
      "target": "Порт «Кавказ» / Нефтебаза в Темрюке",
      "category": "Топливная логистика",
      "weapon": "Ракета / Дрон",
      "details": "Успешная операция ВМС и Сил обороны с применением противокорабельных ракет «Нептун». Поражены резервуары с топливом в порту и инфраструктура паромной переправы.",
      "source": "ВМС ВСУ, Генштаб ВСУ"
    },
    "uk": {
      "region": "Краснодарський край, Темрюкський район",
      "target": "Порт «Кавказ» / Нафтобаза в Темрюці",
      "category": "Паливна логістика",
      "weapon": "Ракета / Дрон",
      "details": "Успішна операція ВМС та Сил оборони із застосуванням протикорабельних ракет «Нептун». Уражено резервуари з пальним у порту та інфраструктуру поромної переправи.",
      "source": "ВМС ЗСУ, Генштаб ЗСУ"
    },
    "en": {
      "region": "Krasnodar Krai, Темрюкский район",
      "target": "Port \"Kavkaz\" / Fuel Depot v Temryuke",
      "category": "Fuel Logistics",
      "weapon": "Missile / Drone",
      "details": "successful operation VMS i Sil oborony s primeneniem protivokorabelnykh raket \"Neptun\". Fuel tanks were struck s fuelm v portu i infrastructure paromnoy perepravy.",
      "source": "VMS AFU, AFU General Staff"
    },
    "id": 101
  },
  {
    "date": "02.06.2026",
    "lat": 45.24,
    "lng": 38,
    "distance": 362,
    "ru": {
      "region": "Краснодарский край, Славянск",
      "target": "Славянский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Возгорание ж/д цистерн с топливом, пожар на объектах НПЗ после прямых попаданий.",
      "source": "OSINT Astra"
    },
    "uk": {
      "region": "Краснодарський край, Слов'янськ",
      "target": "Слов'янський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Загоряння залізничних цистерн з паливом, пожежа на об'єктах НПЗ після прямих влучень.",
      "source": "OSINT Astra"
    },
    "en": {
      "region": "Krasnodar Krai, Славянск",
      "target": "Slavyanskiy Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "fire outbreak zh/d tsistern s fuelm, fire na facilityakh oil refinery posle pryamykh direct hits.",
      "source": "OSINT Astra"
    },
    "id": 102
  },
  {
    "date": "02.06.2026",
    "lat": 44.85,
    "lng": 38.66,
    "distance": 428,
    "ru": {
      "region": "Краснодарский край, Ильский",
      "target": "Ильский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Пожар на объектах НПЗ после прямых попаданий.",
      "source": "OSINT Astra"
    },
    "uk": {
      "region": "Краснодарський край, Ільський",
      "target": "Ільський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Пожежа на об'єктах НПЗ після прямих влучень.",
      "source": "OSINT Astra"
    },
    "en": {
      "region": "Krasnodar Krai, Ilsky",
      "target": "Ilsky Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "fire na facilityakh oil refinery posle pryamykh direct hits.",
      "source": "OSINT Astra"
    },
    "id": 103
  },
  {
    "date": "03.06.2026",
    "lat": 59.87,
    "lng": 30.17,
    "distance": 934,
    "ru": {
      "region": "Санкт-Петербург",
      "target": "Петербургский нефтяной терминал",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Поражение крупнейшего перевалочного комплекса на Балтике (31 резервуар, емкость 324 тыс. м³).",
      "source": "Президент Украины, ССО"
    },
    "uk": {
      "region": "Санкт-Петербург",
      "target": "Петербурзький нафтовий термінал",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Поразка найбільшого перевалочного комплексу на Балтиці (31 резервуар, ємність 324 тис. м3).",
      "source": "Президент Украины, ССО"
    },
    "en": {
      "region": "Санкт-Петербург",
      "target": "Peterburgskiy neftyanoy Terminal",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "was struckie krupneyshego perevalochnogo kompleksa na Baltike (31 storage tank, emkost 324 tys. m³).",
      "source": "Prezident Ukrainy, SOF"
    },
    "id": 104
  },
  {
    "date": "03.06.2026",
    "lat": 52.89,
    "lng": 40.48,
    "distance": 436,
    "ru": {
      "region": "Тамбовская обл., Мичуринск",
      "target": "Оборонный завод «Прогресс»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Пожар на территории завода, выпускающего гиромоторы и автопилоты для ракет Х-101 и Х-59.",
      "source": "Президент Украины"
    },
    "uk": {
      "region": "Тамбовська обл., Мічуринськ",
      "target": "Оборонний завод «Прогрес»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Пожежа на території заводу, що випускає гіромотори та автопілоти для ракет Х-101 та Х-59.",
      "source": "Президент України"
    },
    "en": {
      "region": "Tambovская обл., Мичуринск",
      "target": "Oboronnyy Plant \"Progress\"",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "fire on the plant's territory, vypuskayushchego giromotory i avtopiloty dlya raket Kh-101 i Kh-59.",
      "source": "Prezident Ukrainy"
    },
    "id": 105
  },
  {
    "date": "03.06.2026",
    "lat": 45.0911,
    "lng": 33.5877,
    "distance": 187,
    "ru": {
      "region": "Крым, Новофедоровка",
      "target": "Аэродром «Саки»",
      "category": "Авиабаза",
      "weapon": "Дрон",
      "details": "Точное поражение радиотехнической системы ближней навигации РБСН-4Н на территории авиабазы.",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Крим, Новофедорівка",
      "target": "Аеродром «Сакі»",
      "category": "Авіабаза",
      "weapon": "Дрон",
      "details": "Точне ураження радіотехнічної системи ближньої навігації РБСН-4Н біля авіабази.",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Крым, Новофедоровка",
      "target": "Airfield \"Saki\"",
      "category": "Airbase",
      "weapon": "Drone",
      "details": "Tochnoe was struckie radiotekhnicheskoy sistemy blizhney navigatsii RBSN-4N na territory aviabazy.",
      "source": "AFU General Staff"
    },
    "id": 106
  },
  {
    "date": "03.06.2026",
    "lat": 49.52,
    "lng": 44.02,
    "distance": 476,
    "ru": {
      "region": "Волгоградская обл., Зензеватка",
      "target": "НПС «Зензеватка»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Поражение станции, привевшее к остановке перекачки сырой нефти по трубопроводу.",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Волгоградська обл., Зензеватка",
      "target": "НПС «Зензеватка»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Поразка станції, що призвела до зупинки перекачування сирої нафти трубопроводом.",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Volgogradская обл., Зензеватка",
      "target": "NPS \"Zenzevatka\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "was struckie stantsii, privevshee k ostanovke perekachki syroy oil po truboprovodu.",
      "source": "AFU General Staff"
    },
    "id": 107
  },
  {
    "date": "03.06.2026",
    "lat": 45.016,
    "lng": 34.033,
    "distance": 211,
    "ru": {
      "region": "АР Крым, Симферополь",
      "target": "Топливная база (ГРЭС)",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Прилеты по объектам хранения горючего в черте города (район ж/д станции), возник крупный пожар.",
      "source": "OSINT, Генштаб ВСУ"
    },
    "uk": {
      "region": "АР Крим, Сімферополь",
      "target": "Паливна база (ГРЕС)",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Прильоти по об'єктах зберігання пального в межах міста (район залізничної станції), виникла велика пожежа.",
      "source": "OSINT, Генштаб ЗСУ"
    },
    "en": {
      "region": "AR Crimea, Simferopol",
      "target": "Toplivnaya baza (State Power Plant)",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Prilety po facilityam khraneniya fuel v cherte city (district zh/d stantsii), voznik major fire.",
      "source": "OSINT, AFU General Staff"
    },
    "id": 108
  },
  {
    "date": "05.06.2026",
    "lat": 47.05,
    "lng": 37.5,
    "distance": 188,
    "ru": {
      "region": "Донецкая обл., Мариуполь",
      "target": "Портовая нефтебаза",
      "category": "Топливная логистика",
      "weapon": "Неизвестно",
      "details": "Подтверждено уничтожение восьми и повреждение девяти резервуаров для хранения топлива в порту.",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Донецька обл., Маріуполь",
      "target": "Портова нафтобаза",
      "category": "Паливна логістика",
      "weapon": "Невідомо",
      "details": "Підтверджено знищення восьми та пошкодження дев'яти резервуарів для зберігання палива в порту.",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Donetskая обл., Мариуполь",
      "target": "Portovaya Fuel Depot",
      "category": "Fuel Logistics",
      "weapon": "Unknown",
      "details": "confirmed was destroyedie vosmi i was damagedie devyati storage tankov dlya khraneniya topliva v portu.",
      "source": "AFU General Staff"
    },
    "id": 109
  },
  {
    "date": "06.06.2026",
    "lat": 45.21,
    "lng": 39.68,
    "distance": 423,
    "ru": {
      "region": "Краснодарский край, Усть-Лабинск",
      "target": "Нефтебаза «Усть-Лабинск»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Серия взрывов; масштабный пожар на площади 5000 кв. м, охвативший не менее трех резервуаров.",
      "source": "СБУ, ВСУ, ГУР, OSINT"
    },
    "uk": {
      "region": "Краснодарський край, Усть-Лабінськ",
      "target": "Нафтобаза «Усть-Лабінськ»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Серія вибухів; масштабна пожежа на площі 5000 кв. м, який охопив щонайменше трьох резервуарів.",
      "source": "СБУ, ЗСУ, ГУР, OSINT"
    },
    "en": {
      "region": "Krasnodar Krai, Усть-Лабинск",
      "target": "Fuel Depot \"Ust-Labinsk\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Seriya explosionov; large-scale fire na ploshchadi 5000 kv. m, okhvativshiy ne menee trekh storage tankov.",
      "source": "SBU, AFU, HUR, OSINT"
    },
    "id": 110
  },
  {
    "date": "06.06.2026",
    "lat": 59.99,
    "lng": 29.77,
    "distance": 949,
    "ru": {
      "region": "Ленинградская обл., Кронштадт",
      "target": "ВМБ Кронштадт / 15-й арсенал ВМФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Пожар и вторичные детонации боеприпасов на складе арсенала после преодоления дронами ~1000 км.",
      "source": "ССО, СБС, СБУ, ГУР"
    },
    "uk": {
      "region": "Ленинградская обл., Кронштадт",
      "target": "Військово-морська база Кронштадт / 15-й арсенал ВМФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Пожежа та вторинні детонації боєприпасів на складі арсеналу після подолання дронами ~1000 км.",
      "source": "СЗГ, СБС, СБУ, ГУР"
    },
    "en": {
      "region": "Ленинградская обл., Кронштадт",
      "target": "VMB Kronshtadt / 15-y arsenal VMF",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "fire i vtorichnye detonation boepripasov na warehousee arsenala posle preodoleniya droneami ~1000 km.",
      "source": "SOF, SBS, SBU, HUR"
    },
    "id": 111
  },
  {
    "date": "06.06.2026",
    "lat": 51.27,
    "lng": 37.84,
    "distance": 182,
    "ru": {
      "region": "Белгородская область, Старооскольский ГО",
      "target": "Нефтебаза Старого Оскола",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Успешная плановая атака беспилотников ГУР. Произошел взрыв, за которым последовало возгорание минимум одного топливного резервуара. Здание охраны было повреждено взрывной волной.",
      "source": "ГУР, местные власти"
    },
    "uk": {
      "region": "Бєлгородська область, Старооскольський МО",
      "target": "Нафтобаза Старого Оскола",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Успішна планова атака безпілотників ГУР. Стався вибух, за яким послідувало загоряння щонайменше одного паливного резервуара. Будівлю охорони було пошкоджено вибуховою хвилею.",
      "source": "ГУР, місцева влада"
    },
    "en": {
      "region": "Belgorod Oblast, Старооскольский ГО",
      "target": "Fuel Depot Starogo Oskola",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Uspeshnaya planovaya drone strike HUR. Proizoshel explosion, za kotorym posledovalo fire outbreak at least odnogo toplivnogo storage tanka. Zdanie okhrany bylo was damagedo explosionnoy volnoy.",
      "source": "HUR, mestnye vlasti"
    },
    "id": 112
  },
  {
    "date": "06.06.2026",
    "lat": 47.782,
    "lng": 39.851,
    "distance": 199,
    "ru": {
      "region": "Ростовская область, Новошахтинск",
      "target": "Новошахтинский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Ракета / Дрон",
      "details": "Мощный удар (предположительно комбинированный, ракетами «Нептун» и дронами), вызвавший масштабный пожар. Серьезно повреждены установки первичной переработки нефти.",
      "source": "ВМС ВСУ"
    },
    "uk": {
      "region": "Ростовська область, Новошахтинськ",
      "target": "Новошахтинський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Ракета / Дрон",
      "details": "Потужний удар (імовірно комбінований, ракетами «Нептун» та дронами), що спричинив масштабну пожежу. Серйозно пошкоджено установки первинної переробки нафти.",
      "source": "ВМС ЗСУ"
    },
    "en": {
      "region": "Rostov Oblast, Новошахтинск",
      "target": "Novoshakhtinskiy Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Missile / Drone",
      "details": "powerful strike (presumably kombinirovannyy, missilemi \"Neptun\" i droneami), vyzvavshiy large-scale fire. Serezno was damagedy ustanovki pervichnoy pererabotki oil.",
      "source": "VMS AFU"
    },
    "id": 113
  },
  {
    "date": "07.06.2026",
    "lat": 45.297,
    "lng": 35.772,
    "distance": 286,
    "ru": {
      "region": "АР Крым, Ленино (Еды-Кую)",
      "target": "Нефтебаза «Семиколодезянская»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Поражены резервуары базы, обеспечивающей топливом восточную группировку РФ.",
      "source": "ССО, СБС"
    },
    "uk": {
      "region": "АР Крим, Леніне (Єди-Кую)",
      "target": "Нафтобаза «Семиколодязянська»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Уражено резервуари бази, що забезпечує пальним східне угруповання РФ.",
      "source": "ССО, СБС"
    },
    "en": {
      "region": "AR Crimea, Ленино (Еды-Кую)",
      "target": "Fuel Depot \"Semikolodezyanskaya\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Fuel tanks were struck bazy, obespechivayushchey fuelm vostochnuyu gruppirovku RF.",
      "source": "SOF, SBS"
    },
    "id": 114
  },
  {
    "date": "08.06.2026",
    "lat": 51.03,
    "lng": 36.73,
    "distance": 121,
    "ru": {
      "region": "Белгородская обл., Прохоровка",
      "target": "Склад боеприпасов",
      "category": "ВПК",
      "weapon": "Неизвестно",
      "details": "Точное поражение передового склада, масштабная вторичная детонация боеприпасов.",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Білгородська обл., Прохорівка",
      "target": "Склад боєприпасів",
      "category": "ВПК",
      "weapon": "Невідомо",
      "details": "Точна поразка передового складу, масштабна вторинна детонація боєприпасів.",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Belgorodская обл., Prokhorovka",
      "target": "Warehouse boepripasov",
      "category": "Defense Industry",
      "weapon": "Unknown",
      "details": "Tochnoe was struckie peredovogo warehousea, masshtabnaya vtorichnaya detonation boepripasov.",
      "source": "AFU General Staff"
    },
    "id": 115
  },
  {
    "date": "08.06.2026",
    "lat": 59.95,
    "lng": 30.37,
    "distance": 942,
    "ru": {
      "region": "Санкт-Петербург",
      "target": "Завод «Арсенал»",
      "category": "ВПК",
      "weapon": "Неизвестно",
      "details": "Взрыв и пожар в ангаре химреагентов, нанесен ущерб оборонному производству ВМФ.",
      "source": "OSINT, службы спасения"
    },
    "uk": {
      "region": "Санкт-Петербург",
      "target": "Завод «Арсенал»",
      "category": "ВПК",
      "weapon": "Невідомо",
      "details": "Вибух і пожежа в ангарі хімреагентів завдано шкоди оборонному виробництву ВМФ.",
      "source": "OSINT, служби порятунку"
    },
    "en": {
      "region": "Санкт-Петербург",
      "target": "Plant \"Arsenal\"",
      "category": "Defense Industry",
      "weapon": "Unknown",
      "details": "explosion i fire v angare khimreagentov, nanesen ushcherb oboronnomu proizvodstvu VMF.",
      "source": "OSINT, sluzhby spaseniya"
    },
    "id": 116
  },
  {
    "date": "08.06.2026",
    "lat": 50.605,
    "lng": 36.65,
    "distance": 74,
    "ru": {
      "region": "Белгородская область, Белгородский район",
      "target": "Логистический хаб / Склад боеприпасов",
      "category": "Военная инфраструктура",
      "weapon": "Дрон / Ракета",
      "details": "Официально подтвержденный Генштабом ВСУ удар. Масштабный взрыв (шлейф в виде «гриба» был виден из Белгорода) с длительной вторичной детонацией на складах в районе н.п. Новосадовый и Беловское.",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Бєлгородська область, Бєлгородський район",
      "target": "Логістичний хаб / Склад боєприпасів",
      "category": "Військова інфраструктура",
      "weapon": "Дрон / Ракета",
      "details": "Офіційно підтверджений Генштабом ЗСУ удар. Масштабний вибух (шлейф у вигляді «гриба» було видно з Бєлгорода) з тривалою вторинною детонацією на складах у районі н.п. Новосадовий та Білівське.",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Belgorod Oblast, Belgorodский район",
      "target": "Logisticheskiy khab / Warehouse boepripasov",
      "category": "Military Infrastructure",
      "weapon": "Drone / Missile",
      "details": "Ofitsialno podtverzhdennyy Genshtabom AFU strike. large-scale explosion (shleyf v vide \"griba\" byl viden iz Belcity) s dlitelnoy vtorichnoy detonatsiey na warehouseakh v districte n.p. Novosadovyy i Belovskoe.",
      "source": "AFU General Staff"
    },
    "id": 117
  },
  {
    "date": "08.06.2026",
    "lat": 43.788,
    "lng": 44.599,
    "distance": 770,
    "ru": {
      "region": "Республика Северная Осетия, Моздок",
      "target": "Аэродром «Моздок»",
      "category": "Военная инфраструктура / Авиация",
      "weapon": "Дрон",
      "details": "Историческая спецоперация ГУР. Украинские беспилотники впервые с начала полномасштабной войны преодолели около 1000 км и атаковали аэродром базирования стратегических бомбардировщиков Ту-22М3 и носителей «Кинжалов» МиГ-31К.",
      "source": "ГУР"
    },
    "uk": {
      "region": "Республіка Північна Осетія, Моздок",
      "target": "Аеродром «Моздок»",
      "category": "Військова інфраструктура / Авіація",
      "weapon": "Дрон",
      "details": "Історична спецоперація ГУР. Українські безпілотники вперше з початку повномасштабної війни подолали близько 1000 км і атакували аеродром базування стратегічних бомбардувальників Ту-22М3 та носіїв «Кинджалів» МіГ-31К.",
      "source": "ГУР"
    },
    "en": {
      "region": "Республика Северная Осетия, Моздок",
      "target": "Airfield \"Mozdok\"",
      "category": "Military Infrastructure / Aviation",
      "weapon": "Drone",
      "details": "Istoricheskaya spetsoperation HUR. Ukrainian drones For the first time since the start of the full-scale war preodoleli okolo 1000 km i strikesovali aerodrom bazirovaniya strategicallykh bombardirovshchikov Tu-22M3 i nositeley \"Kinzhalov\" MiG-31K.",
      "source": "HUR"
    },
    "id": 118
  },
  {
    "date": "08.06.2026",
    "lat": 48.308,
    "lng": 46.204,
    "distance": 636,
    "ru": {
      "region": "Астраханская область, Ахтубинск",
      "target": "Аэродром «Ахтубинск»",
      "category": "Военная инфраструктура / Авиация",
      "weapon": "Дрон",
      "details": "Выдающаяся операция ГУР МО (Астраханская область географически примыкает к северокавказскому узлу). Впервые в истории зафиксировано поражение новейших российских истребителей пятого поколения Су-57. Спутниковые снимки подтвердили повреждение минимум одного (по уточненным данным — двух) бортов.",
      "source": "ГУР"
    },
    "uk": {
      "region": "Астраханська область, Ахтубінськ",
      "target": "Аеродром «Ахтубінськ»",
      "category": "Військова інфраструктура / Авіація",
      "weapon": "Дрон",
      "details": "Видатна операція ГУР МО (Астраханська область географічно примикає до північнокавказького вузла). Вперше в історії зафіксовано ураження найновіших російських винищувачів п'ятого покоління Су-57. Супутникові знімки підтвердили пошкодження щонайменше одного (за уточненими даними — двох) бортів.",
      "source": "ГУР"
    },
    "en": {
      "region": "Astrakhan Oblast, Ахтубинск",
      "target": "Airfield \"Akhtubinsk\"",
      "category": "Military Infrastructure / Aviation",
      "weapon": "Drone",
      "details": "Vydayushchayasya operation HUR MoD (Astrakhan Oblast geograficheski primykaet k severokavkazskomu uzlu). For the first time v istorii zafiksirovano was struckie noveyshikh Russian istrebiteley pyatogo pokoleniya Su-57. satellite images podtverdili was damagedie at least odnogo (po utochnennym dannym — dvukh) bortov.",
      "source": "HUR"
    },
    "id": 119
  },
  {
    "date": "09-10.06.2026",
    "lat": 56.12,
    "lng": 47.26,
    "distance": 1002,
    "ru": {
      "region": "Чувашия, Чебоксары",
      "target": "Оборонный завод АО «ВНИИР-Прогресс»",
      "category": "ВПК (НИИ)",
      "weapon": "Ракета",
      "details": "Повторный результативный удар дальнобойной крылатой ракетой FP-5 «Фламинго»; пожар, повреждены объекты навигации.",
      "source": "Генштаб ВСУ, Президент"
    },
    "uk": {
      "region": "Чувашія, Чебоксари",
      "target": "Оборонний завод АТ «ВНДІР-Прогрес»",
      "category": "ВПК (НДІ)",
      "weapon": "Ракета",
      "details": "Повторний результативний удар далекобійною крилатою ракетою FP-5 \"Фламінго\"; пожежа, пошкоджені навігаційні об'єкти.",
      "source": "Генштаб ЗСУ, Президент"
    },
    "en": {
      "region": "Чувашия, Cheboksary",
      "target": "Oboronnyy Plant AO \"VNIIR-Progress\"",
      "category": "Defense Industry",
      "weapon": "Missile",
      "details": "Povtornyy rezultativnyy strike dalnoboynoy krylatoy missile FP-5 \"Flamingo\"; fire, was damagedy facilityy navigatsii.",
      "source": "AFU General Staff, Prezident"
    },
    "id": 120
  },
  {
    "date": "09-10.06.2026",
    "lat": 53.1,
    "lng": 50.08,
    "distance": 999,
    "ru": {
      "region": "Самарская обл., Самара",
      "target": "Куйбышевский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Остановлены две критические установки первичной переработки нефти (CDU-4, CDU-5) на Куйбышевском НПЗ.",
      "source": "Reuters, Telegram Astra"
    },
    "uk": {
      "region": "Самарська обл., Самара",
      "target": "Куйбишевський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Зупинено дві критичні установки первинної переробки нафти (CDU-4, CDU-5) на Куйбишевському НПЗ.",
      "source": "Reuters, Telegram Astra"
    },
    "en": {
      "region": "Самарская обл., Samara",
      "target": "Kuybyshevskiy Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Ostanovleny dve kriticheskie ustanovki pervichnoy pererabotki oil (CDU-4, CDU-5) na Kuybyshevskom oil refinery.",
      "source": "Reuters, Telegram Astra"
    },
    "id": 121
  },
  {
    "date": "10.06.2026",
    "lat": 56.28,
    "lng": 40.85,
    "distance": 718,
    "ru": {
      "region": "Владимирская обл., Камешковский р-н",
      "target": "НПС «Второво» и «Лобково»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Зафиксированы пожары на территории критически важных нефтеперекачивающих станций.",
      "source": "Meduza, Supernova+"
    },
    "uk": {
      "region": "Володимирська обл., Камешківський р-н",
      "target": "НПС «Второво» та «Лобкове»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Зафіксовано пожежі на території критично важливих нафтоперекачувальних станцій.",
      "source": "Meduza, Supernova+"
    },
    "en": {
      "region": "Владимирская обл., Камешковский р-н",
      "target": "NPS \"Vtorovo\" i \"Lobkovo\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Zafiksirovany firey na territory kriticheski vazhnykh nefteperekachivayushchikh stantsiy.",
      "source": "Meduza, Supernova+"
    },
    "id": 122
  },
  {
    "date": "11.06.2026",
    "lat": 44.8717,
    "lng": 38.8336,
    "distance": 435,
    "ru": {
      "region": "Краснодарский край, Афипский",
      "target": "Афипский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Повторное масштабное возгорание на заводе, перерабатывающем около 2% всей сырой нефти РФ.",
      "source": "Генштаб ВСУ, Exilenova+"
    },
    "uk": {
      "region": "Краснодарський край, Афіпський",
      "target": "Афіпський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Повторне масштабне спалах на заводі, що переробляє близько 2% усієї сирої нафти РФ.",
      "source": "Генштаб ЗСУ, Exilenova+"
    },
    "en": {
      "region": "Krasnodar Krai, Афипский",
      "target": "Afipskiy Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Povtornoe masshtabnoe fire outbreak na plante, pererabatyvayushchem okolo 2% vsey syroy oil RF.",
      "source": "AFU General Staff, Exilenova+"
    },
    "id": 123
  },
  {
    "date": "12.06.2026",
    "lat": 53.5339,
    "lng": 49.4479,
    "distance": 983,
    "ru": {
      "region": "Самарская область, Тольятти",
      "target": "Завод «Тольяттикаучук»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "На территории химического завода, производящего компоненты для твердого ракетного топлива и добавки к бензину, вспыхнул пожар.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Самарська область, Тольятті",
      "target": "Завод «Тольяттікаучук»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "На території хімічного заводу, що виробляє компоненти для твердого ракетного палива та добавки до бензину, спалахнула пожежа.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Samara Oblast, Тольятти",
      "target": "Plant \"Tolyattikauchuk\"",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "Na territory khimicheskogo planta, proizvodyashchego komponenty dlya tverdogo raketnogo topliva i dobavki k benzinu, a fire broke out.",
      "source": "AFU General Staff, OSINT"
    },
    "id": 124
  },
  {
    "date": "12.06.2026",
    "lat": 53.5115,
    "lng": 49.4203,
    "distance": 980,
    "ru": {
      "region": "Самарская область, Тольятти",
      "target": "Тольяттиазот (химический комбинат)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Генштаб ВСУ подтвердил поражение химического комбината и связанных логистических объектов.",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Самарська область, Тольятті",
      "target": "Тольяттіазот",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Генштаб ЗСУ підтвердив ураження хімічного комбінату та пов'язаних логістичних об'єктів.",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Samara Oblast, Тольятти",
      "target": "Tolyattiazot (khimicheskiy kombinat)",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "AFU General Staff podtverdil was struckie khimicheskogo kombinata i svyazannykh logisticheskikh facilityov.",
      "source": "AFU General Staff"
    },
    "id": 125
  },
  {
    "date": "12.06.2026",
    "lat": 45.0931,
    "lng": 33.595,
    "distance": 187,
    "ru": {
      "region": "Крым, Новофедоровка",
      "target": "Аэродром «Саки»",
      "category": "Авиабаза",
      "weapon": "Дрон",
      "details": "Зафиксированы взрывы и стрельба в районе военного аэродрома во время ночной атаки.",
      "source": "Мониторинговые паблики"
    },
    "uk": {
      "region": "Крим, Новофедорівка",
      "target": "Аеродром «Саки»",
      "category": "Авіабаза",
      "weapon": "Дрон",
      "details": "Зафіксовано вибухи та стрілянину в районі військового аеродрому під час нічної атаки.",
      "source": "Моніторингові пабліки"
    },
    "en": {
      "region": "Крым, Новофедоровка",
      "target": "Airfield \"Saki\"",
      "category": "Airbase",
      "weapon": "Drone",
      "details": "explosions were recorded i strelba v districte military airfield vo vremya nochnoy strikes.",
      "source": "Monitoringovye pabliki"
    },
    "id": 126
  },
  {
    "date": "12.06.2026",
    "lat": 55.6317,
    "lng": 51.814,
    "distance": 1217,
    "ru": {
      "region": "Республика Татарстан, Нижнекамск",
      "target": "ТАНЕКО",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Подтверждено поражение нефтеперерабатывающего комплекса ТАНЕКО. Зафиксирован пожар на территории предприятия.",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Республіка Татарстан, Нижньокамськ",
      "target": "ТАНЕКО",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Підтверджено ураження нафтопереробного комплексу ТАНЕКО. Зафіксовано пожежу на території підприємства.",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Republic of Tatarstan, Nizhnekamsk",
      "target": "TANEKO",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "confirmed was struckie neftepererabatyvayushchego kompleksa TANEKO. a fire was recorded on the facility's territory.",
      "source": "AFU General Staff"
    },
    "id": 127
  },
  {
    "date": "12.06.2026",
    "lat": 55.615,
    "lng": 51.827,
    "distance": 1217,
    "ru": {
      "region": "Республика Татарстан, Нижнекамск",
      "target": "ТАИФ-НК",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Подтверждено поражение НПЗ ТАИФ-НК. На объекте возник пожар после удара.",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Республіка Татарстан, Нижньокамськ",
      "target": "ТАІФ-НК",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Підтверджено ураження НПЗ ТАІФ-НК. На об'єкті виникла пожежа після удару.",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Republic of Tatarstan, Nizhnekamsk",
      "target": "TAIF-NK",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "confirmed was struckie oil refinery TAIF-NK. Na facilitye voznik fire posle of the strike.",
      "source": "AFU General Staff"
    },
    "id": 128
  },
  {
    "date": "13.06.2026",
    "lat": 45.1338,
    "lng": 36.673,
    "distance": 323,
    "ru": {
      "region": "Краснодарский край, Волна",
      "target": "Терминал «Таманьнефтегаз»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Возник масштабный пожар возле складской инфраструктуры и стоянки, также поражены системы ПВО, прикрывавшие объект.",
      "source": "СБУ, ССО, ГУР МО"
    },
    "uk": {
      "region": "Краснодарський край, Волна",
      "target": "Термінал «Таманьнафтогаз»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Виникла масштабна пожежа біля складської інфраструктури та стоянки, також уражено системи ППО, що прикривали об'єкт.",
      "source": "СБУ, ССО, ГУР МО"
    },
    "en": {
      "region": "Krasnodar Krai, Волна",
      "target": "Terminal \"Tamanneftegaz\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Voznik large-scale fire vozle warehouseskoy infrastructure i stoyanki, takzhe were struck sistemy air defense, prikryvavshie facility.",
      "source": "SBU, SOF, HUR MoD"
    },
    "id": 129
  },
  {
    "date": "13.06.2026",
    "lat": 50.321,
    "lng": 44.801,
    "distance": 549,
    "ru": {
      "region": "Волгоградская область, Котово",
      "target": "Цех подготовки и перекачки нефти / Нефтеперерабатывающий узел",
      "category": "Топливная логистика / Нефтегаз",
      "weapon": "Дрон",
      "details": "Подтверждено поражение объекта обработки, транспортировки и перекачки нефти. Возник пожар на предприятии, обеспечивающем транспортировку по магистральным трубопроводам.",
      "source": "Генштаб ВСУ, Reuters"
    },
    "uk": {
      "region": "Волгоградська область, Котове",
      "target": "Цех підготовки та перекачування нафти / Нафтопереробний вузол",
      "category": "Паливна логістика / Нафтогаз",
      "weapon": "Дрон",
      "details": "Підтверджено ураження об'єкта обробки, транспортування та перекачування нафти. Виникла пожежа на підприємстві, що забезпечує транспортування магістральними трубопроводами.",
      "source": "Генштаб ЗСУ, Reuters"
    },
    "en": {
      "region": "Volgograd Oblast, Котово",
      "target": "Tsekh podgotovki i perekachki nefti / Neftepererabatyvayushchiy uzel",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "confirmed was struckie facilitya obrabotki, transportirovki i perekachki oil. Voznik fire na predpriyatii, obespechivayushchem transportirovku po magistralnym truboprovodam.",
      "source": "AFU General Staff, Reuters"
    },
    "id": 130
  },
  {
    "date": "13.06.2026",
    "lat": 46.1989,
    "lng": 33.6658,
    "distance": 94,
    "ru": {
      "region": "Крым, Армянск",
      "target": "Химзавод «Крымский Титан»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Зафиксировано 23 попадания, пострадали все цеха предприятия, производящего сырье для пороха и взрывчатки. Производство остановлено.",
      "source": "СБС"
    },
    "uk": {
      "region": "Крим, Армянськ",
      "target": "Хімзавод «Кримський Титан»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Зафіксовано 23 влучання, постраждали всі цехи підприємства, що виробляє сировину для пороху та вибухівки. Виробництво зупинено.",
      "source": "СБС"
    },
    "en": {
      "region": "Крым, Армянск",
      "target": "KhimPlant \"Krymskiy Titan\"",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "Zafiksirovano 23 direct hits, postradali vse tsekha facility, proizvodyashchego syre dlya porokha i explosionchatki. production ostanovleno.",
      "source": "SBS"
    },
    "id": 131
  },
  {
    "date": "14.06.2026",
    "lat": 58.0478,
    "lng": 38.8524,
    "distance": 836,
    "ru": {
      "region": "Ярославская область, Рыбинск",
      "target": "Комбинат «Темп» (нефтебаза Росрезерва)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Поражён объект Росрезерва, используемый для хранения стратегических запасов топлива и нефтепродуктов. После попаданий зафиксирован пожар на территории нефтебазы.",
      "source": "Президент Украины, СБУ, Exilenova+"
    },
    "uk": {
      "region": "Ярославська область, Рибінськ",
      "target": "Комбінат «Темп» (нафтобаза Росрезерву)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Уражено об'єкт Росрезерву, що використовується для зберігання стратегічних запасів пального та нафтопродуктів. Після влучань зафіксовано пожежу на території нафтобази.",
      "source": "Президент України, СБУ, Exilenova+"
    },
    "en": {
      "region": "Yaroslavl Oblast, Рыбинск",
      "target": "Kombinat \"Temp\" (Fuel Depot Rosrezerva)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Porazhyon facility Rosrezerva, ispolzuemyy dlya khraneniya strategicallykh zapasov topliva i petroleum products. Posle direct hits a fire was recorded na territory fuel depot.",
      "source": "Prezident Ukrainy, SBU, Exilenova+"
    },
    "id": 132
  },
  {
    "date": "14.06.2026",
    "lat": 54.0388,
    "lng": 38.2747,
    "distance": 420,
    "ru": {
      "region": "Тульская область, Новомосковск",
      "target": "Новомосковский химический комбинат «Азот»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Зафиксированы многочисленные попадания по территории химического предприятия. Возник пожар. Завод производит аммиак, аммиачную селитру и химические компоненты, используемые в производстве взрывчатых веществ.",
      "source": "Exilenova+, Obozrevatel, местные власти"
    },
    "uk": {
      "region": "Тульська область, Новомосковськ",
      "target": "Новомосковський хімічний комбінат «Азот»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Зафіксовано численні влучання по території хімічного підприємства. Виникла пожежа. Завод виробляє аміак, аміачну селітру та хімічні компоненти, що використовуються у виробництві вибухових речовин.",
      "source": "Exilenova+, Obozrevatel, місцева влада"
    },
    "en": {
      "region": "Tula Oblast, Новомосковск",
      "target": "Novomoskovskiy khimicheskiy kombinat \"Azot\"",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "Zafiksirovany mnogochislennye direct hits po territory khimicheskogo facility. Voznik fire. plant produces ammiak, ammiachnuyu selitru i khimicheskie komponenty, ispolzuemye v proizvodstve explosionchatykh veshchestv.",
      "source": "Exilenova+, Obozrevatel, mestnye vlasti"
    },
    "id": 133
  },
  {
    "date": "14.06.2026",
    "lat": 48.313,
    "lng": 41.793,
    "distance": 313,
    "ru": {
      "region": "Ростовская область, Морозовск",
      "target": "Аэродром «Морозовск»",
      "category": "Военная infraestructura / Авиация",
      "weapon": "Дрон",
      "details": "Массированный ночной налет (ГУР использовало около 70 беспилотников). Подтверждено поражение инфраструктуры базы и авиационной техники.",
      "source": "ГУР"
    },
    "uk": {
      "region": "Ростовська область, Морозовськ",
      "target": "Аеродром «Морозовськ»",
      "category": "Військова інфраструктура / Авіація",
      "weapon": "Дрон",
      "details": "Масований нічний наліт (ГУР використало близько 70 безпілотників). Подтверждено ураження інфраструктури бази та авіаційної техніки.",
      "source": "ГУР"
    },
    "en": {
      "region": "Rostov Oblast, Morozovsk",
      "target": "Airfield \"Morozovsk\"",
      "category": "Voennaya infraestructura / Aviatsiya",
      "weapon": "Drone",
      "details": "massive nochnoy nalet (HUR ispolzovalo okolo 70 droneov). confirmed was struckie infrastructure bazy i aviatsionnoy tekhniki.",
      "source": "HUR"
    },
    "id": 134
  },
  {
    "date": "14.06.2026",
    "lat": 51.0027,
    "lng": 39.5136,
    "distance": 258,
    "ru": {
      "region": "Воронежская область, Лискинский район (х. Старая Покровка)",
      "target": "Лискинская нефтебаза",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Ночная атака ударных беспилотников. В результате прилета и детонации обломков был поврежден резервуар крупнейшей в районе нефтебазы.",
      "source": "СМИ РФ, OSINT"
    },
    "uk": {
      "region": "Воронезька область, Ліскінський район (х. Стара Покровка)",
      "target": "Ліскінська нафтобаза",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Нічна атака ударних безпілотників. Унаслідок прильоту та детонації уламків було пошкоджено резервуар найбільшої в районі нафтобази.",
      "source": "ЗМІ РФ, OSINT"
    },
    "en": {
      "region": "Voronezh Oblast, Лискинский район (х. Старая Покровка)",
      "target": "Liskinskaya Fuel Depot",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Nochnaya strikesa strikenykh droneov. V rezultate prileta i detonation debris byl was damaged storage tank krupneyshey v districte fuel depot.",
      "source": "Russian Media, OSINT"
    },
    "id": 135
  },
  {
    "date": "14.06.2026",
    "lat": 52.184,
    "lng": 34.382,
    "distance": 145,
    "ru": {
      "region": "Брянская область, Севский район (д. Некислица)",
      "target": "Командно-наблюдательный пункт ВС РФ",
      "category": "Воненая инфраструктура",
      "weapon": "Ракета / Дрон",
      "details": "Официально подтвержденный в утренней сводке Генштаба ВСУ удар по ключевому командному пункту, координировавшему действия приграничной группировки российских войск на Брянском направлении.",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Брянська область, Севський район (s. Некислиця)",
      "target": "Командно-спостережний пункт ЗС РФ",
      "category": "Військова інфраструктура",
      "weapon": "Ракета / Дрон",
      "details": "Офіційно підтверджений у ранковій зведенні Генштабу ЗСУ удар по ключовому командному пункту, який координував дії прикордонного угруповання російських військ на Брянському напрямку.",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Bryansk Oblast, Sevskий район (д. Некислица)",
      "target": "Komandno-nablyudatelnyy punkt VS RF",
      "category": "Vonenaya infrastruktura",
      "weapon": "Missile / Drone",
      "details": "Ofitsialno podtverzhdennyy v utrenney svodke Genshtaba AFU strike on klyuchevomu komandnomu punktu, koordinirovavshemu deystviya prigranichnoy gruppirovki Russian voysk na Bryanskom napravlenii.",
      "source": "AFU General Staff"
    },
    "id": 136
  },
  {
    "date": "14.06.2026",
    "lat": 44.666,
    "lng": 41.936,
    "distance": 561,
    "ru": {
      "region": "Ставропольский край, Невинномысск",
      "target": "Химкомбинат «Невинномысский Азот»",
      "category": "Промышленность / ВПК",
      "weapon": "Дрон",
      "details": "Массированная атака БПЛА на ключевое химическое предприятие РФ, производящее аммиачную селитру, аммиак и уксусную кислоту (используются при создании взрывчатки и ракетного топлива). Повреждены цеха, производство временно останавливалось.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Ставропольський край, Невинномиськ",
      "target": "Хімкомбінат «Невинномиський Азот»",
      "category": "Промисловість / ВПК",
      "weapon": "Дрон",
      "details": "Масована атака БПЛА на ключове хімічне підприємство РФ, що виробляє аміачну селітру, аміак та оцтову кислоту (використовуються під час створення вибухівки та ракетного палива). Пошкоджено цехи, виробництво тимчасово зупинялося.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Stavropol Krai, Невинномысск",
      "target": "Khimkombinat \"Nevinnomysskiy Azot\"",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "massive strike UAV na klyuchevoe khimicheskoe facility RF, proizvodyashchee ammiachnuyu selitru, ammiak i uksusnuyu kislotu (ispolzuyutsya pri sozdanii explosionchatki i raketnogo topliva). was damagedy tsekha, production vremenno ostanavlivalos.",
      "source": "AFU General Staff, OSINT"
    },
    "id": 137
  },
  {
    "date": "15.06.2026",
    "lat": 48.3228,
    "lng": 40.2431,
    "distance": 201,
    "ru": {
      "region": "Ростовская область, Каменск-Шахтинский",
      "target": "Химический комбинат «Каменский»",
      "category": "ВПК / Промышленность",
      "weapon": "Дрон",
      "details": "Ночная атака беспилотников на одно из крупнейших химических предприятий юга РФ, где производится твердое топливо для межконтинентальных баллистических ракет. Зафиксировано падение обломков на территории промплощадки.",
      "source": "OSINT, СМИ РФ"
    },
    "uk": {
      "region": "Ростовська область, Каменськ-Шахтинський",
      "target": "Хімічний комбінат «Каменський»",
      "category": "ВПК / Промисловість",
      "weapon": "Дрон",
      "details": "Нічна атака безпілотників на одне з найбільших хімічних підприємств півдня РФ, де виробляється тверде паливо для міжконтинентальних балістичних ракет. Зафіксовано падіння уламків на території проммайданчика.",
      "source": "OSINT, ЗМІ РФ"
    },
    "en": {
      "region": "Rostov Oblast, Каменск-Шахтинский",
      "target": "Khimicheskiy kombinat \"Kamenskiy\"",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "Nochnaya drone strike na odno iz krupneyshikh khimicheskikh facilities yuga RF, gde producessya tverdoe fuel dlya mezhkontinentalnykh ballisticheskikh raket. Zafiksirovano padenie debris na territory promploshchadki.",
      "source": "OSINT, Russian Media"
    },
    "id": 138
  },
  {
    "date": "16.06.2026",
    "lat": 45.3664,
    "lng": 38.2234,
    "distance": 362,
    "ru": {
      "region": "Краснодарский край, ст. Полтавская",
      "target": "Полтавская нефтебаза",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Ударные БПЛА успешно атаковали перевалочную базу горючего, обеспечивающую сети заправок компании «Лукойл». На территории вспыхнул масштабный пожар (подтверждено спутниками NASA FIRMS), была перекрыта трасса.",
      "source": "OSINT, Оперативный штаб Краснодарского края"
    },
    "uk": {
      "region": "Краснодарський край, ст. Полтавська",
      "target": "Полтавська нафтобаза",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Ударні БПЛА успішно атакували перевалочну базу пального, що забезпечує мережі заправок компанії «Лукойл». На території спалахнула масштабна пожежа (підтверджено супутниками NASA FIRMS), було перекрито трасу.",
      "source": "OSINT, Оперативний штаб Краснодарського краю"
    },
    "en": {
      "region": "Krasnodar Krai, ст. Полтавская",
      "target": "Poltavskaya Fuel Depot",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "strikenye UAV successfully strikesovali perevalochnuyu bazu fuel, obespechivayushchuyu seti zapravok kompanii \"Lukoyl\". Na territory vspykhnul large-scale fire (confirmed sputnikami NASA FIRMS), byla perekryta trassa.",
      "source": "OSINT, Operativnyy shtab Krasnodarskogo kraya"
    },
    "id": 139
  },
  {
    "date": "16.06.2026",
    "lat": 52.57,
    "lng": 39.638,
    "distance": 372,
    "ru": {
      "region": "Липецкая область, Липецк",
      "target": "Новолипецкий металлургический комбинат (НЛМК) и Тракторный завод",
      "category": "ВПК / Промышленность",
      "weapon": "Дрон",
      "details": "Спецоперация ГУР МОУ. Массированная атака на промышленную территорию Липецка. Зафиксированы взрывы и задымления над комбинатом и тракторным заводом, продукция которых напрямую используется российским ОПК.",
      "source": "ГУР, OSINT (Astra)"
    },
    "uk": {
      "region": "Липецька область, Липецьк",
      "target": "Новолипецький металургійний комбінат (НЛМК) та Тракторний завод",
      "category": "ВПК / Промисловість",
      "weapon": "Дрон",
      "details": "Спецоперація ГУР МОУ. Масована атака на промислову територію Липецька. Зафіксовано вибухи та задимлення над комбінатом і тракторним заводом, продукція яких безпосередньо використовується російским ОПК.",
      "source": "ГУР, OSINT (Astra)"
    },
    "en": {
      "region": "Lipetsk Oblast, Lipetsk",
      "target": "Novolipetskiy metallurgicheskiy kombinat (NLMK) i Traktornyy Plant",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "Spetsoperation HUR MoDU. massive strike na promyshlennuyu territory Lipetska. explosions were recorded i zadymleniya nad kombinatom i traktornym plantom, produktsiya kotorykh napryamuyu ispolzuetsya rossiyskim OPK.",
      "source": "HUR, OSINT (Astra)"
    },
    "id": 140
  },
  {
    "date": "15.06.2026",
    "lat": 55.7575,
    "lng": 37.8783,
    "distance": 577,
    "ru": {
      "region": "Московская область, Реутов",
      "target": "АО «ВПК «НПО машиностроения»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В Подмосковье беспилотники нанесли удар в 600 метрах от предприятия, разрабатывающего гиперзвуковые ракеты «Циркон» и стратегический ракетный комплекс «Авангард». Над городом поднимался столб дыма.",
      "source": "OSINT, Telegram-каналы"
    },
    "uk": {
      "region": "Московська область, Реутов",
      "target": "АТ «ВПК «НВО машинобудування»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У Підмосков'ї безпілотники завдали удару за 600 метрів від підприємства, що розробляє гіперзвукові ракети «Циркон» та стратегічний ракетний комплекс «Авангард». Над містом підіймався стовп диму.",
      "source": "OSINT, Telegram-канали"
    },
    "en": {
      "region": "Moscow Oblast, Реутов",
      "target": "AO \"VPK \"NPO mashinostroeniya\"",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "V Podmoskove drones nanesli strike v 600 metrakh ot facility, razrabatyvayushchego giperzvukovye missiles \"Tsirkon\" i strategicallyy missile kompleks \"Avangard\". Nad cityom podnimalsya stolb dyma.",
      "source": "OSINT, Telegram-kanaly"
    },
    "id": 141
  },
  {
    "date": "16.06.2026",
    "lat": 55.638,
    "lng": 37.794,
    "distance": 562,
    "ru": {
      "region": "Москва, Капотня",
      "target": "Московский НПЗ (МНПЗ)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Беспилотники нанесли удар по крупнейшему нефтеперерабатывающему заводу Москвы, покрывающему около 40% потребностей столицы в бензине. В результате попаданий на объекте возник масштабный пожар, в небо поднялся черный столб дыма.",
      "source": "ЦПД при СНБО Украины, OSINT"
    },
    "uk": {
      "region": "Москва, Капотня",
      "target": "Московський НПЗ (МНПЗ)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Безпілотники завдали удару по найбільшому нафтопереробному заводу Москви, який покриває близько 40% потреб столиці у бензині. Внаслідок влучань на об'єкті виникла масштабна пожежа, в небо піднявся чорний стовп диму.",
      "source": "ЦПД при РНБО України, OSINT"
    },
    "en": {
      "region": "Moscow, Капотня",
      "target": "Moskovskiy Oil Refinery (MOil Refinery)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "drones nanesli strike on krupneyshemu neftepererabatyvayushchemu plantu Moskvy, pokryvayushchemu okolo 40% potrebnostey stolitsy v benzine. V rezultate direct hits na facilitye voznik large-scale fire, v nebo podnyalsya chernyy stolb dyma.",
      "source": "TsPD pri SNBO Ukrainy, OSINT"
    },
    "id": 142
  },
  {
    "date": "17.06.2026",
    "lat": 50.4369,
    "lng": 36.9875,
    "distance": 73,
    "ru": {
      "region": "Белгородская область, Шебекинский район, с. Ржевка",
      "target": "Военный склад",
      "category": "Военная инфраструктура",
      "weapon": "Дрон",
      "details": "Удар беспилотников по складским помещениям в промышленной зоне на границе сёл Ржевка и Вознесенка. Возник сильный пожар; по данным OSINT-анализа, склад мог использоваться для хранения военных грузов.",
      "source": "OSINT, местный губернатор"
    },
    "uk": {
      "region": "Бєлгородська область, Шебекинський район, с. Ржівка",
      "target": "Військовий склад",
      "category": "Військова інфраструктура",
      "weapon": "Дрон",
      "details": "Удар безпілотників по складських приміщеннях у промисловій зоні на межі сіл Ржевка та Вознесенка. Виникла сильна пожежа; за даними OSINT-аналізу, склад міг використовуватися для зберігання військових вантажів.",
      "source": "OSINT, місцевий губернатор"
    },
    "en": {
      "region": "Belgorod Oblast, Шебекинский район, с. Ржевка",
      "target": "Voennyy Warehouse",
      "category": "Military Infrastructure",
      "weapon": "Drone",
      "details": "strike droneov po warehouseskim pomeshcheniyam v promyshlennoy zone na granitse syol Rzhevka i Voznesenka. Voznik silnyy fire; according to OSINT-analiza, warehouse mog ispolzovatsya dlya khraneniya voennykh gruzov.",
      "source": "OSINT, mestnyy gubernator"
    },
    "id": 143
  },
  {
    "date": "18.06.2026",
    "lat": 48.0612,
    "lng": 39.9345,
    "distance": 189,
    "ru": {
      "region": "Ростовская область, Гуково",
      "target": "Нефтебаза",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Беспилотники атаковали нефтебазу в Гуково на улице Карла Маркса. Возник крупный пожар, поврежден тепловоз и коммерческие объекты. По информации Генштаба ВСУ, база использовалась для обеспечения российских войск горюче-смазочными материалами.",
      "source": "OSINT, Генштаб ВСУ, местный губернатор"
    },
    "uk": {
      "region": "Ростовська область, Гуково",
      "target": "Нафтобаза",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Безпілотники атакували нафтобазу в Гуково на вулиці Карла Маркса. Виникла велика пожежа, пошкоджено тепловоз та комерційні об'єкти. За інформацією Генштабу ЗСУ, база використовувалася для забезпечення російських військ паливно-мастильними матеріалами.",
      "source": "OSINT, Генштаб ЗСУ, місцевий губернатор"
    },
    "en": {
      "region": "Rostov Oblast, Гуково",
      "target": "Fuel Depot",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "drones strikesovali fuel depot v Gukovo na ulitse Karla Marksa. Voznik major fire, was damaged teplovoz i kommercheskie facilityy. Po informatsii Genshtaba AFU, baza ispolzovalas dlya obespecheniya Russian voysk goryuche-smazochnymi materialami.",
      "source": "OSINT, AFU General Staff, mestnyy gubernator"
    },
    "id": 144
  },
  {
    "date": "18.06.2026",
    "lat": 55.638,
    "lng": 37.794,
    "distance": 562,
    "ru": {
      "region": "Москва, Капотня",
      "target": "Московский НПЗ (МНПЗ)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Повторная массированная атака беспилотников на крупнейший нефтеперерабатывающий завод Москвы. В результате попаданий на объекте возник сильный пожар с несколькими очагами возгорания, пострадали установки переработки нефти и резервуарный парк.",
      "source": "СБУ, ССО, ГУР, Силы беспилотных систем, мэр Москвы"
    },
    "uk": {
      "region": "Москва, Капотня",
      "target": "Московський НПЗ (МНПЗ)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Повторна масована атака безпілотників на найбільший нафтопереробний завод Москви. Внаслідок влучань на об'єкті виникла сильна пожежа з кількома осередками загоряння, постраждали установки переробки нафти та резервуарний парк.",
      "source": "СБУ, ССО, ГУР, Сили безпілотних систем, мер Москви"
    },
    "en": {
      "region": "Moscow, Капотня",
      "target": "Moskovskiy Oil Refinery (MOil Refinery)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Povtornaya massive strike droneov na krupneyshiy oil refinery Moskvy. V rezultate direct hits na facilitye voznik silnyy fire s neskolkimi ochagami vozgoraniya, postradali ustanovki pererabotki oil i storage tanknyy park.",
      "source": "SBU, SOF, HUR, Sily bespilotnykh sistem, mer Moskvy"
    },
    "images": [
      "images/mnpz_explosion.jpg",
      "images/mnpz_explosion1.jpg",
      "images/mnpz_explosion2.jpg",
      "images/mnpz_explosion3.jpg"
    ],
    "id": 145
  },
  {
    "date": "20.06.2026",
    "lat": 45.1642,
    "lng": 34.025,
    "distance": 197,
    "ru": {
      "region": "Крым, Симферопольский район (с. Журавлевка)",
      "target": "Газораспределительная станция и хранилище «ТЕС»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ходе ночной атаки зафиксированы очаги возгорания на газораспределительной станции и нефтегазовом хранилище, подтвержденные спутниками NASA FIRMS.",
      "source": "NASA FIRMS, OSINT"
    },
    "uk": {
      "region": "Крим, Сімферопольський район (с. Журавлівка)",
      "target": "Газорозподільна станція та сховище «ТЕС»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Під час нічної атаки зафіксовано осередки займання на газорозподільній станції та нафтогазовому сховищі, підтверджені супутниками NASA FIRMS.",
      "source": "NASA FIRMS, OSINT"
    },
    "en": {
      "region": "Крым, Simferopolский район (с. Журавлевка)",
      "target": "Gazoraspredelitelnaya stantsiya i Storage \"TES\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "V khode nochnoy strikes zafiksirovany ochagi vozgoraniya na gasoraspredelitelnoy stantsii i neftegasovom storage facility, podtverzhdennye sputnikami NASA FIRMS.",
      "source": "NASA FIRMS, OSINT"
    },
    "id": 146
  },
  {
    "date": "20.06.2026",
    "lat": 45.2881,
    "lng": 34.8031,
    "distance": 226,
    "ru": {
      "region": "Крым, Советский район (с. Лоховка)",
      "target": "Газопровод",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Зафиксировано 5 попаданий дронов в газопровод. С третьей попытки труба была разорвана, возник масштабный пожар на прилегающей территории.",
      "source": "Крымский ветер, OSINT"
    },
    "uk": {
      "region": "Крим, Совєтський район (с. Лохівка)",
      "target": "Газопровід",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Зафіксовано 5 влучань дронів у газопровід. З третьої спроби трубу було розірвано, виникла масштабна пожежа на прилеглій території.",
      "source": "Кримський вітер, OSINT"
    },
    "en": {
      "region": "Крым, Советский район (с. Лоховка)",
      "target": "Gas Pipeline",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Zafiksirovano 5 direct hits droneov v gas pipeline. S tretey popytki truba byla razorvana, voznik large-scale fire na prilegayushchey territory.",
      "source": "Krymskiy veter, OSINT"
    },
    "id": 147
  },
  {
    "date": "20.06.2026",
    "lat": 44.685,
    "lng": 33.566,
    "distance": 229,
    "ru": {
      "region": "Крым, Севастополь",
      "target": "Аэродром «Бельбек» (мобильная огневая группа)",
      "category": "Авиабаза",
      "weapon": "Дрон",
      "details": "В ходе атаки зафиксированы попадания и кратковременная детонация на позициях мобильной огневой группы, прикрывавшей военный аэродром.",
      "source": "Крымский ветер, OSINT"
    },
    "uk": {
      "region": "Крим, Севастополь",
      "target": "Аеродром «Бельбек» (мобільна вогнева група)",
      "category": "Авіабаза",
      "weapon": "Дрон",
      "details": "Під час атаки зафіксовано влучання та короткочасну детонацію на позиціях мобільної вогневої групи, що прикривала військовий аеродром.",
      "source": "Кримський вітер, OSINT"
    },
    "en": {
      "region": "Крым, Sevastopol",
      "target": "Airfield \"Belbek\" (mobilnaya ognevaya gruppa)",
      "category": "Airbase",
      "weapon": "Drone",
      "details": "V khode strikes direct hits were recorded i kratkovremennaya detonation na pozitsiyakh mobilnoy ognevoy gruppy, prikryvavshey military airfield.",
      "source": "Krymskiy veter, OSINT"
    },
    "id": 148
  },
  {
    "date": "20.06.2026",
    "lat": 47.1998,
    "lng": 38.8815,
    "distance": 197,
    "ru": {
      "region": "Ростовская область, Таганрог",
      "target": "Завод «Атлант-Аэро»",
      "category": "ВПК",
      "weapon": "Неизвестно (Диверсия)",
      "details": "Обесточена подстанция, питающая оборонный завод, собирающий дроны «Молния» и компоненты к БПЛА «Орион». Из-за отсутствия электричества производство полностью остановлено.",
      "source": "АТЕШ"
    },
    "uk": {
      "region": "Ростовська область, Таганрог",
      "target": "Завод «Атлант-Аеро»",
      "category": "ВПК",
      "weapon": "Невідомо (Диверсія)",
      "details": "Знеструмлено підстанцію, що живить оборонний завод, який збирає дрони «Молнія» та компоненти до БПЛА «Оріон». Через відсутність електрики виробництво повністю зупинено.",
      "source": "АТЕШ"
    },
    "en": {
      "region": "Rostov Oblast, Taganrog",
      "target": "Plant \"Atlant-Aero\"",
      "category": "Defense Industry",
      "weapon": "Unknown (Diversiya)",
      "details": "Obestochena podstantsiya, pitayushchaya oboronnyy plant, sobirayushchiy drones \"Molniya\" i komponenty k UAV \"Orion\". Iz-za otsutstviya elektrichestva production polnostyu ostanovleno.",
      "source": "ATESh"
    },
    "id": 149
  },
  {
    "date": "20.06.2026",
    "lat": 57.1086,
    "lng": 65.6583,
    "distance": 2078,
    "ru": {
      "region": "Тюменская область, Тюмень (мкр-н Антипино)",
      "target": "Тюменский НПЗ (бывший Антипинский НПЗ)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Атака украинских ударных БПЛА на рекордном расстоянии (около 2000 км от границы). Зафиксированы взрывы и густое задымление над территорией нефтеперерабатывающего завода, приостанавливалась работа местного аэропорта «Рощино».",
      "source": "OSINT (Astra), СМИ РФ"
    },
    "uk": {
      "region": "Тюменська область, Тюмень (мкр-н Антипіне)",
      "target": "Тюменський НПЗ (колишній Антипінський НПЗ)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Атака українських ударних БПЛА на рекордній відстані (близько 2000 км від кордону). Зафіксовано вибухи та густе задимлення над територією нафтопереробного заводу, призупинялася робота місцевого аеропорту «Рощино».",
      "source": "OSINT (Astra), ЗМІ РФ"
    },
    "en": {
      "region": "Tyumen Oblast, Tyumen (мкр-н Антипино)",
      "target": "Tyumenskiy Oil Refinery (byvshiy Antipinskiy Oil Refinery)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "strikesa ukrainskikh strikenykh UAV na rekordnom rasstoyanii (okolo 2000 km ot granitsy). explosions were recorded i gustoe zadymlenie nad territoriey oil refinery, priostanavlivalas rabota mestnogo aeroporta \"Roshchino\".",
      "source": "OSINT (Astra), Russian Media"
    },
    "id": 150
  },
  {
    "date": "21.06.2026",
    "lat": 46.68,
    "lng": 38.21,
    "distance": 234,
    "ru": {
      "region": "Краснодарский край, Ейск",
      "target": "Аэродром «Ейск»",
      "category": "Военная инфраструктура / Авиация",
      "weapon": "Дрон",
      "details": "Массированная ночная атака украинских БПЛА. Спутниковые снимки NASA FIRMS и данные OSINT-аналитиков подтверждают несколько сильных очагов пожара в районе зданий у восточной части взлетно-посадочной полосы аэродрома базирования тактической авиации РФ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Краснодарський край, Єйськ",
      "target": "Аеродром «Єйськ»",
      "category": "Військова інфраструктура / Авіація",
      "weapon": "Дрон",
      "details": "Масована нічна атака українських БПЛА. Супутникові знімки NASA FIRMS та дані OSINT-аналітиків підтверджують кілька сильних осередків пожежі в районі будівель біля східної частини злітно-посадкової смуги аеродрому базування тактичної авіації РФ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Krasnodar Krai, Yeisk",
      "target": "Airfield \"Yeisk\"",
      "category": "Military Infrastructure / Aviation",
      "weapon": "Drone",
      "details": "Massirovannaya nochnaya strikesa ukrainskikh UAV. satellite images NASA FIRMS i data OSINT-analitikov confirm neskolko silnykh ochagov firea v districte zdaniy u vostochnoy hourti vzletno-posadochnoy polosy aerodroma bazirovaniya takticheskoy aviatsii RF.",
      "source": "AFU General Staff, OSINT"
    },
    "id": 151
  },
  {
    "date": "21.06.2026",
    "lat": 45.34,
    "lng": 36.674,
    "distance": 302,
    "ru": {
      "region": "Краснодарский край, Темрюкский район (п. Чушка)",
      "target": "Нефтяной терминал порта «Кавказ»",
      "category": "Топливная логистика",
      "weapon": "Дрон / Ракета",
      "details": "Успешная совместная операция Сил обороны. Поражен комплекс перевалки нефтепродуктов, обеспечивающий топливом военную группировку РФ в Крыму. Подтвержден масштабный пожар, паромная переправа была полностью остановлена.",
      "source": "СБС, Генштаб ВСУ"
    },
    "uk": {
      "region": "Краснодарський край, Темрюкський район (с-ще Чушка)",
      "target": "Нафтовий термінал порту «Кавказ»",
      "category": "Паливна логістика",
      "weapon": "Дрон / Ракета",
      "details": "Успішна спільна операція Сил оборони. Уражено комплекс перевалки нафтопродуктів, що забезпечує пальним військову угруповання РФ у Криму. Підтверджено масштабну пожежу, поромна переправа була повністю зупинена.",
      "source": "СБС, Генштаб ЗСУ"
    },
    "en": {
      "region": "Krasnodar Krai, Темрюкский район (п. Чушка)",
      "target": "Neftyanoy Terminal porta \"Kavkaz\"",
      "category": "Fuel Logistics",
      "weapon": "Drone / Missile",
      "details": "Uspeshnaya sovmestnaya operation Sil oborony. was struck kompleks perevalki petroleum products, obespechivayushchiy fuelm voennuyu gruppirovku RF v Krymu. Podtverzhden large-scale fire, paromnaya pereprava byla polnostyu ostanovlena.",
      "source": "SBS, AFU General Staff"
    },
    "id": 152
  },
  {
    "date": "21.06.2026",
    "lat": 45.343,
    "lng": 36.444,
    "distance": 295,
    "ru": {
      "region": "АР Крым, Керчь",
      "target": "Нефтяной терминал («ТЭС-Терминал-1» / Морской рыбный порт)",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Удары ударных БПЛА Сил беспилотных систем (СБС) по объектам перевалки нефтепродуктов и сжиженного газа («АЕГАЗ-Терминал» и «ТЭС»). Зафиксировано значительное количество тепловых аномалий и пожаров.",
      "source": "СБС, Генштаб ВСУ"
    },
    "uk": {
      "region": "АР Крим, Керч",
      "target": "Нафтовий термінал («ТЕС-Термінал-1» / Морський рибний порт)",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Удари ударних БПЛА Сил безпілотних систем (СБС) по об'єктах перевалки нафтопродуктів та скрапленого газу («АЕГАЗ-Термінал» та «ТЕС»). Зафіксовано значну кількість теплових аномалій та пожеж.",
      "source": "СБС, Генштаб ЗСУ"
    },
    "en": {
      "region": "AR Crimea, Керчь",
      "target": "Neftyanoy Terminal (\"Thermal Power Station-Terminal-1\" / Morskoy rybnyy port)",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "strikes strikenykh UAV Sil bespilotnykh sistem (SBS) po facilityam perevalki petroleum products i szhizhennogo gasa (\"AEgas-Terminal\" i \"thermal power station\"). Zafiksirovano znachitelnoe kolichestvo teplovykh anomaliy i fireov.",
      "source": "SBS, AFU General Staff"
    },
    "images": [
      "images/26_21-06_kerch.jpg",
      "images/26_21-06_kerch1.jpg",
      "images/26_21-06_kerch2.jpg",
      "images/26_21-06_kerch3.jpg"
    ],
    "id": 153
  },
  {
    "date": "21.06.2026",
    "lat": 44.85,
    "lng": 38.5769,
    "distance": 424,
    "ru": {
      "region": "Краснодарский край, Северский район (пгт Ильский)",
      "target": "Ильский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Официально подтвержденный Генштабом ВСУ ночной налет на инфраструктуру нефтеперерабатывающего завода. Зафиксированы падения дронов, повреждения и возгорания на территории предприятия.",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Краснодарський край, Сіверський район (смт Ільський)",
      "target": "Ільський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Офіційно підтверджений Генштабом ЗСУ нічний наліт на інфраструктуру нафтопереробного заводу. Зафіксовано падіння дронів, пошкодження та займання на території підприємства.",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Krasnodar Krai, Северский район (пгт Ilsky)",
      "target": "Ilsky Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Ofitsialno podtverzhdennyy Genshtabom AFU nochnoy nalet na infrastrukturu oil refinery. Zafiksirovany padeniya droneov, was damagediya i vozgoraniya on the facility's territory.",
      "source": "AFU General Staff"
    },
    "id": 154
  },
  {
    "date": "21.06.2026",
    "lat": 44.8717,
    "lng": 38.8336,
    "distance": 435,
    "ru": {
      "region": "Краснодарский край, Северский район (пгт Афипский)",
      "target": "Афипский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Ночная атака ударных беспилотников в рамках масштабной комбинированной операции Сил обороны Украины по выжиганию топливной базы ВС РФ на юге. Удар подтвержден официальной сводкой Генштаба.",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Краснодарський край, Сіверський район (смт Афіпський)",
      "target": "Афіпський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Нічна атака ударних безпілотників у рамках масштабної комбінованої операції Сил оборони Украины щодо випалювання паливної бази ЗС РФ на півдні. Удар підтверджено офіційним зведенням Генштабу.",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Krasnodar Krai, Северский район (пгт Афипский)",
      "target": "Afipskiy Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Nochnaya strikesa strikenykh droneov v ramkakh masshtabnoy kombinirovannoy operation Sil oborony Ukrainy po vyzhiganiyu toplivnoy bazy VS RF na yuge. strike ondtverzhden ofitsialnoy svodkoy Genshtaba.",
      "source": "AFU General Staff"
    },
    "id": 155
  },
  {
    "date": "21.06.2026",
    "lat": 46.7736,
    "lng": 48.1139,
    "distance": 816,
    "ru": {
      "region": "Астраханская область, Аксарайский",
      "target": "Астраханский НПЗ / Газоперерабатывающий завод",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Атака дронов на газоперерабатывающий комплекс («Газпром добыча Астрахань»). Информация об успешном ударе включена в официальную утреннюю сводку Генштаба ВСУ.",
      "source": "Генштаб ВСУ"
    },
    "uk": {
      "region": "Астраханська область, Аксарайський",
      "target": "Астраханський НПЗ / Газопереробний завод",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Атака дронів на газопереробний комплекс («Газпром видобуток Астрахань»). Інформація про успішний удар включена до офіційного ранкового зведення Генштабу ЗСУ.",
      "source": "Генштаб ЗСУ"
    },
    "en": {
      "region": "Astrakhan Oblast, Аксарайский",
      "target": "Astrakhanskiy Oil Refinery / Gazopererabatyvayushchiy Plant",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "drone strike na gasopererabatyvayushchiy kompleks (\"gasprom dobycha Astrakhan\"). information ob successfullym strikee vklyuchena v ofitsialnuyu utrennyuyu svodku Genshtaba AFU.",
      "source": "AFU General Staff"
    },
    "id": 156
  },
  {
    "date": "22.06.2026",
    "lat": 51.6784,
    "lng": 39.2582,
    "distance": 283,
    "ru": {
      "region": "Воронежская область, Воронеж",
      "target": "Завод полупроводниковых приборов «Сборка» (АО «ВЗПП-С»)",
      "category": "ВПК / Промышленность",
      "weapon": "Крылатая ракета (вероятно Storm Shadow)",
      "details": "Массированный дневной ракетный удар по предприятию, находящемуся под западными санкциями. Завод является ведущим производителем электроники (матриц и транзисторов) для российских ракет «Искандер-К», Х-101 и зенитных комплексов «Панцирь-С1». Зафиксировано 4 точных попадания, обрушение крыши главного корпуса и сильный пожар. Атака официально подтверждена Генштабом ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Воронезька область, Воронеж",
      "target": "Завод напівпровідникових приладів «Сборка» (АТ «ВЗПП-С»)",
      "category": "ВПК / Промисловість",
      "weapon": "Крилата ракета (ймовірно Storm Shadow)",
      "details": "Масований денний ракетний удар по підприємству, що перебуває під західними санкціями. Завод є провідним виробником електроніки (матриць і транзисторів) для російських ракет «Іскандер-К», Х-101 та зенітних комплексів «Панцир-С1». Зафіксовано 4 точні влучання, обвал даху головного корпусу та сильну пожежу. Атака офіційно підтверджена Генштабом ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Voronezh Oblast, Voronezh",
      "target": "Plant poluprovodnikovykh priborov \"Sborka\" (AO \"VZPP-S\")",
      "category": "Defense Industry",
      "weapon": "Cruise Missile (veroyatno Storm Shadow)",
      "details": "massive dnevnoy missile strike on predpriyatiyu, nakhodyashchemusya pod zapadnymi sanktsiyami. plant yavlyaetsya vedushchim produceselem elektroniki (matrits i tranzistorov) dlya Russian raket \"Iskander-K\", Kh-101 i zenitnykh kompleksov \"Pantsir-S1\". Zafiksirovano 4 tochnykh direct hits, obrushenie kryshi glavnogo korpusa i silnyy fire. strikesa ofitsialno podtverzhdena Genshtabom AFU.",
      "source": "AFU General Staff, OSINT"
    },
    "images": [
      "images/26-2206-voronezh.jpg",
      "images/26-2206-voronezh1.jpg",
      "images/26-2206-voronezh2.jpg",
      "images/26-2206-voronezh3.jpg",
      "images/26-2206-voronezh4.jpg"
    ],
    "id": 157
  },
  {
    "date": "22.06.2026",
    "lat": 56.7378,
    "lng": 37.2511,
    "distance": 668,
    "ru": {
      "region": "Московская область, Дубна",
      "target": "Центр космической связи (ЦКС) «Дубна»",
      "category": "Военная инфраструктура / ВПК",
      "weapon": "Дрон",
      "details": "Успешная атака ударных БПЛА на крупнейшую станцию космической связи в РФ, обеспечивающую обмен военной информацией и связь с орбитальной спутниковой группировкой. Генштаб ВСУ и российская пресс-служба предприятия подтвердили массированный налет, на объекте было зафиксировано масштабное задымление.",
      "source": "Генштаб ВСУ, СМИ РФ"
    },
    "uk": {
      "region": "Московська область, Дубна",
      "target": "Центр космічного зв'язку (ЦКЗ) «Дубна»",
      "category": "Військова інфраструктура / ВПК",
      "weapon": "Дрон",
      "details": "Успішна атака ударних БПЛА на найбільшу станцію космічного зв'язку в РФ, що забезпечує обмін військовою інформацією та зв'язок з орбітальним супутниковим угрупованням. Генштаб ЗСУ та російська пресслужба підприємства підтвердили масований наліт, на об'єкті було зафіксовано масштабне задимлення.",
      "source": "Генштаб ЗСУ, ЗМІ РФ"
    },
    "en": {
      "region": "Moscow Oblast, Дубна",
      "target": "Tsentr kosmicheskoy svyazi (TsKS) \"Dubna\"",
      "category": "Military Infrastructure",
      "weapon": "Drone",
      "details": "successful strike strikenykh UAV na krupneyshuyu stantsiyu kosmicheskoy svyazi v RF, obespechivayushchuyu obmen voennoy informatsiey i svyaz s orbitalnoy sputnikovoy gruppirovkoy. AFU General Staff i Russian press-sluzhba facility podtverdili massive nalet, na facilitye bylo zafiksirovano masshtabnoe zadymlenie.",
      "source": "AFU General Staff, Russian Media"
    },
    "id": 158
  },
  {
    "date": "23.06.2026",
    "lat": 51.737,
    "lng": 54.85,
    "distance": 1269,
    "ru": {
      "region": "Оренбургская область, Оренбург",
      "target": "Оренбургский газоперерабатывающий завод (ГПЗ) и Гелиевый завод",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Массированная атака на стратегические газоперерабатывающие предприятия ПАО «Газпром». В промышленной зоне зафиксировано несколько крупных точек горения. Информацию об атаке подтвердили местные власти и OSINT-ресурсы.",
      "source": "OSINT, СМИ РФ"
    },
    "uk": {
      "region": "Оренбурзька область, Оренбург",
      "target": "Оренбурзький газопереробний завод (ГПЗ) та Гелієвий завод",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Масована атака на стратегічні газопереробні підприємства ПАТ «Газпром». У промисловій зоні зафіксовано кілька великих осередків горіння. Інформацію про атаку підтвердила місцева влада та OSINT-ресурси.",
      "source": "OSINT, ЗМІ РФ"
    },
    "en": {
      "region": "Orenburg Oblast, Orenburg",
      "target": "Orenburgskiy gazopererabatyvayushchiy Plant (GPZ) i Gelievyy Plant",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "massive strike na strategicallye gasopererabatyvayushchie facility PAO \"gasprom\". V promyshlennoy zone zafiksirovano neskolko krupnykh tochek goreniya. Informatsiyu ob strikese podtverdili mestnye vlasti i OSINT-resursy.",
      "source": "OSINT, Russian Media"
    },
    "id": 159
  },
  {
    "date": "23.06.2026",
    "lat": 45.343,
    "lng": 36.444,
    "distance": 295,
    "ru": {
      "region": "АР Крым, Керчь",
      "target": "Нефтебаза / Комплекс перевалки «ТЭС-Терминал»",
      "category": "Нефтегаз / Топливная логистика",
      "weapon": "Дрон",
      "details": "Повторный и результативный удар украинских БПЛА по морскому порту Керчи. Поражен крупный логистический комплекс, предназначенный для хранения и перевалки нефтепродуктов и сжиженного газа.",
      "source": "СБС, OSINT (Крымский ветер)"
    },
    "uk": {
      "region": "АР Крим, Керч",
      "target": "Нафтобаза / Комплекс перевалки «ТЕС-Термінал»",
      "category": "Нафтогаз / Паливна логістика",
      "weapon": "Дрон",
      "details": "Повторний і результативний удар українських БПЛА по морському порту Керчі. Уражено великий логістичний комплекс, призначений для зберігання та перевалки нафтопродуктів і скрапленого газу.",
      "source": "СБС, OSINT (Кримський вітер)"
    },
    "en": {
      "region": "AR Crimea, Керчь",
      "target": "Fuel Depot / Kompleks perevalki \"Thermal Power Station-Terminal\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Povtornyy i rezultativnyy strike ukrainskikh UAV po morskomu portu Kerchi. was struck major logisticheskiy kompleks, prednaznachennyy dlya khraneniya i perevalki petroleum products i szhizhennogo gasa.",
      "source": "SBS, OSINT (Krymskiy veter)"
    },
    "id": 160
  },
  {
    "date": "23.06.2026",
    "lat": 45.289,
    "lng": 36.422,
    "distance": 300,
    "ru": {
      "region": "АР Крым, Керчь (мкр-н Аршинцево)",
      "target": "Резервуары мазутохранилища (Камыш-Бурунская ТЭЦ)",
      "category": "Нефтегаз / Топливная логистика",
      "weapon": "Дрон",
      "details": "Точное попадание ударного беспилотника в нефтяной резервуар мазутохранилища. Возник масштабный пожар, шлейф черного дыма растянулся над полуостровом почти на 50 километров.",
      "source": "OSINT, мониторинговые каналы"
    },
    "uk": {
      "region": "АР Крим, Керч (мкр-н Аршинцеве)",
      "target": "Резервуари мазутосховища (Камиш-Бурунська ТЕЦ)",
      "category": "Нафтогаз / Паливна логістика",
      "weapon": "Дрон",
      "details": "Точне влучання ударного безпілотника в нафтовий резервуар мазутосховища. Виникла масштабна пожежа, шлейф чорного диму розтягнувся над півостровом майже на 50 кілометрів.",
      "source": "OSINT, моніторингові канали"
    },
    "en": {
      "region": "AR Crimea, Керчь (мкр-н Аршинцево)",
      "target": "Rezervuary mazutokhranilishcha (Kamysh-Burunskaya Heat & Power Plant)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Tochnoe direct hit strikenogo drone v neftyanoy storage tank mazutostorage facility. Voznik large-scale fire, shleyf chernogo dyma rastyanulsya nad poluostrovom pochti na 50 kilometers.",
      "source": "OSINT, monitoringovye kanaly"
    },
    "id": 161
  },
  {
    "date": "23.06.2026",
    "lat": 45.34,
    "lng": 36.674,
    "distance": 302,
    "ru": {
      "region": "Краснодарский край, Темрюкский район",
      "target": "Нефтетерминал в порту «Кавказ»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Повторная атака на топливную инфраструктуру кубанского порта, который обеспечивает перевалку горючего для российских оккупационных сил в Крыму. Зафиксировано возгорание на территории терминала.",
      "source": "СБС, OSINT"
    },
    "uk": {
      "region": "Краснодарський край, Темрюкський район",
      "target": "Нафтотермінал у порту «Кавказ»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Повторна атака на паливну інфраструктуру кубанського порту, який забезпечує перевалку пального для російських окупаційних сил у Криму. Зафіксовано загоряння на території термінала.",
      "source": "СБС, OSINT"
    },
    "en": {
      "region": "Krasnodar Krai, Темрюкский район",
      "target": "NefteTerminal v portu \"Kavkaz\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Povtornaya strikesa na toplivnuyu infrastrukturu kubanskogo porta, kotoryy obespechivaet perevalku fuel dlya Russian okkupatsionnykh sil v Krymu. a fire outbreak was recorded na territory terminala.",
      "source": "SBS, OSINT"
    },
    "id": 162
  },
  {
    "date": "24.06.2026",
    "lat": 44.6167,
    "lng": 33.5254,
    "distance": 235,
    "ru": {
      "region": "г. Севастополь (временно оккупированный Крым)",
      "target": "Главная электрическая подстанция «Севастополь» (330/220/110/35 кВ)",
      "category": "Энергетическая инфраструктура",
      "weapon": "Дрон",
      "details": "По заявлению командования Сил беспилотных систем Украины, ударом была поражена главная распределительная подстанция, обеспечивающая передачу электроэнергии от Балаклавской ТЭС. После атаки в городе произошли масштабные отключения электроэнергии.",
      "source": "Силы беспилотных систем ВСУ, Reuters"
    },
    "uk": {
      "region": "м. Севастополь (тимчасово окупований Крим)",
      "target": "Головна електропідстанція «Севастополь» (330/220/110/35 кВ)",
      "category": "Енергетична інфраструктура",
      "weapon": "Дрон",
      "details": "За повідомленням Сил безпілотних систем України, уражено головну розподільчу підстанцію, яка передає електроенергію від Балаклавської ТЕС. Після удару в місті відбулися масштабні відключення електропостачання.",
      "source": "Сили безпілотних систем ЗСУ, Reuters"
    },
    "en": {
      "region": "г. Sevastopol (временно оккупированный Крым)",
      "target": "Glavnaya elektricheskaya podstantsiya \"Sevastopol\" (330/220/110/35 kV)",
      "category": "Energeticheskaya infrastruktura",
      "weapon": "Drone",
      "details": "Po zayavleniyu komandovaniya Sil bespilotnykh sistem Ukrainy, by a strike byla was strucka glavnaya raspredelitelnaya podstantsiya, obespechivayushchaya peredachu elektroenergii ot Balaklavskoy thermal power station. Posle strikes v citye proizoshli masshtabnye otklyucheniya elektroenergii.",
      "source": "Sily bespilotnykh sistem AFU, Reuters"
    },
    "id": 163
  },
  {
    "date": "24.06.2026",
    "lat": 45.0925,
    "lng": 33.5958,
    "distance": 188,
    "ru": {
      "region": "АР Крым, Новофёдоровка (временно оккупированный Крым)",
      "target": "Военный аэродром «Саки»",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "СБУ сообщила об ударе по инфраструктуре аэродрома. По предварительным данным поражены четыре ангара для хранения авиационной техники.",
      "source": "СБУ"
    },
    "uk": {
      "region": "АР Крим, Новофедорівка (тимчасово окупований Крим)",
      "target": "Військовий аеродром «Саки»",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "СБУ повідомила про ураження інфраструктури аеродрому. За попередніми даними уражено чотири ангари для зберігання авіаційної техніки.",
      "source": "СБУ"
    },
    "en": {
      "region": "AR Crimea, Новофёдоровка (временно оккупированный Крым)",
      "target": "Voennyy Airfield \"Saki\"",
      "category": "Voennyy aerodrom",
      "weapon": "Drone",
      "details": "SBU soobshchila ob strikee po infrastrukture aerodroma. Po predvaritelnym dannym were struck chetyre angara dlya khraneniya aviatsionnoy tekhniki.",
      "source": "SBU"
    },
    "id": 164
  },
  {
    "date": "24.06.2026",
    "lat": 45.1165,
    "lng": 34.0213,
    "distance": 201,
    "ru": {
      "region": "АР Крым, Гвардейское (временно оккупированный Крым)",
      "target": "Военный аэродром «Гвардейское»",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "СБУ официально подтвердила удар по инфраструктуре военного аэродрома в рамках комплексной операции против российских военных объектов в Крыму.",
      "source": "СБУ"
    },
    "uk": {
      "region": "АР Крим, Гвардійське (тимчасово окупований Крим)",
      "target": "Військовий аеродром «Гвардійське»",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "СБУ офіційно підтвердила ураження інфраструктури військового аеродрому в межах комплексної операції проти російських військових об'єктів у Криму.",
      "source": "СБУ"
    },
    "en": {
      "region": "AR Crimea, Gvardeyskoe (временно оккупированный Крым)",
      "target": "Voennyy Airfield \"Gvardeyskoe\"",
      "category": "Voennyy aerodrom",
      "weapon": "Drone",
      "details": "SBU ofitsialno podtverdila strike on infrastrukture military airfield v ramkakh kompleksnoy operation protiv Russian voennykh facilityov v Krymu.",
      "source": "SBU"
    },
    "id": 165
  },
  {
    "date": "24.06.2026",
    "lat": 47.1993,
    "lng": 39.7335,
    "distance": 234,
    "ru": {
      "region": "Ростовская область, Ростов-на-Дону (Промзона на левом берегу Дона)",
      "target": "Филиал Новошахтинского завода нефтепродуктов (ОАО «НЗНП» филиал «Ростовский»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ходе ночной атаки несколько ударных беспилотников атаковали промышленную зону на левом берегу Дона (ул. 1-я Луговая). Местные власти подтвердили прорыв ПВО и падение обломков БПЛА самолетного типа на территорию промышленного предприятия, являющегося филиалом крупнейшего НПЗ региона.",
      "source": "OSINT (Astra), заявления руководства региона"
    },
    "uk": {
      "region": "Ростовська область, Ростов-на-Дону (Промзона на лівому березі Дону)",
      "target": "Філіал Новошахтинського заводу нафтопродуктів (ВАТ «НЗНП» філіал «Ростовський»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Під час нічної атаки кілька ударних безпілотників атакували промислову зону на лівому березі Дону (вул. 1-ша Лугова). Місцева влада підтвердила прорив ППО і падіння уламків БПЛА літакового типу на територію промислового підприємства, що є філіалом найбільшого НПЗ регіону.",
      "source": "OSINT (Astra), заяви керівництва регіону"
    },
    "en": {
      "region": "Rostov Oblast, Rostov-on-Don (Промзона на левом берегу Дона)",
      "target": "Filial Novoshakhtinskogo Planta nefteproduktov (OAO \"NZNP\" filial \"Rostovskiy\")",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "V khode nochnoy strikes neskolko strikenykh droneov strikesovali promyshlennuyu zonu na levom beregu Dona (ul. 1-ya Lugovaya). Mestnye vlasti podtverdili proryv air defense i padenie debris UAV aircraftnogo tipa na territory promyshlennogo facility, yavlyayushchegosya filialom krupneyshego oil refinery region.",
      "source": "OSINT (Astra), zayavleniya rukovodstva regiona"
    },
    "id": 166
  },
  {
    "date": "25.06.2026",
    "lat": 54.843,
    "lng": 56.079,
    "distance": 1436,
    "ru": {
      "region": "Республика Башкортостан, Уфа (мкр-н Черниковка)",
      "target": "Нефтеперерабатывающие заводы «Башнефть» («Башнефть-Новойл» и «Башнефть-Уфанефтехим»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Украинские дальнобойные БПЛА атаковали крупнейший нефтеперерабатывающий узел России на расстоянии около 1400-1500 км от границы Украины. Зафиксированы прилеты, пожары и густой черный дым над территориями предприятий «Башнефть-Новойл» и «Башнефть-Уфанефтехим». Украинские источники сообщали о поражении установок первичной переработки нефти.",
      "source": "Президент Украины, СБУ, Exilenova+, ASTRA, украинские и российские СМИ"
    },
    "uk": {
      "region": "Республіка Башкортостан, Уфа (мкр-н Черніковка)",
      "target": "Нафтопереробні заводи «Башнєфть» («Башнєфть-Новойл» та «Башнєфть-Уфанафтохім»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Українські далекобійні БПЛА атакували найбільший нафтопереробний вузол Росії на відстані близько 1400-1500 км від кордону України. Зафіксовано прильоти, пожежі та густий чорний дим над територіями підприємств «Башнєфть-Новойл» та «Башнєфть-Уфанафтохім». Українські джерела повідомляли про ураження установок первинної переробки нафти.",
      "source": "Президент України, СБУ, Exilenova+, ASTRA, українські та російські ЗМІ"
    },
    "en": {
      "region": "Republic of Bashkortostan, Ufa (мкр-н Черниковка)",
      "target": "Neftepererabatyvayushchie Planty \"Bashneft\" (\"Bashneft-Novoyl\" i \"Bashneft-Ufaneftekhim\")",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Ukrainian dalnoboynye UAV strikesovali krupneyshiy neftepererabatyvayushchiy uzel Rossii na rasstoyanii okolo 1400-1500 km ot granitsy Ukrainy. Zafiksirovany prilety, firey i gustoy chernyy dym nad territorymi facilities \"Bashoil-Novoyl\" i \"Bashoil-Ufaneftekhim\". Ukrainian sources soobshchali o was struckii ustanovok pervichnoy pererabotki oil.",
      "source": "Prezident Ukrainy, SBU, Exilenova+, ASTRA, ukrainskie i rossiyskie Media"
    },
    "images": [
      "images/26_25-06_bashneft1.jpg",
      "images/26_25-06_bashneft2.jpg",
      "images/26_25-06_bashneft3.jpg"
    ],
    "id": 167
  },
  {
    "date": "25.06.2026",
    "lat": 54.048,
    "lng": 38.256,
    "distance": 420,
    "ru": {
      "region": "Тульская область, Новомосковск",
      "target": "Химический комбинат «Новомосковский Азот» (ЕвроХим)",
      "category": "ВПК / Химическая промышленность",
      "weapon": "Дрон",
      "details": "Массированная атака БПЛА на одного из крупнейших производителей аммиака и азотной кислоты в РФ. Продукция предприятия используется в цепочках производства взрывчатых веществ и поставляется на смежные предприятия оборонно-промышленного комплекса. Местные жители сообщали о серии взрывов и запахе аммиака.",
      "source": "OSINT (ASTRA, Exilenova+), российские СМИ и местные власти"
    },
    "uk": {
      "region": "Тульська область, Новомосковськ",
      "target": "Хімічний комбінат «Новомосковський Азот» (ЄвроХім)",
      "category": "ВПК / Хімічна промисловість",
      "weapon": "Дрон",
      "details": "Масована атака БПЛА на одного з найбільших виробників аміаку та азотної кислоти в РФ. Продукція підприємства використовується у ланцюгах виробництва вибухових речовин і постачається на суміжні підприємства оборонно-промислового комплексу. Місцеві жителі повідомляли про серію вибухів і запах аміаку.",
      "source": "OSINT (ASTRA, Exilenova+), російські ЗМІ та місцева влада"
    },
    "en": {
      "region": "Tula Oblast, Новомосковск",
      "target": "Khimicheskiy kombinat \"Novomoskovskiy Azot\" (EvroKhim)",
      "category": "Defense Industry / Chemical Industry",
      "weapon": "Drone",
      "details": "massive strike UAV na odnogo iz krupneyshikh produceseley ammiaka i azotnoy kisloty v RF. Produktsiya facility ispolzuetsya v tsepochkakh production explosionchatykh veshchestv i postavlyaetsya na smezhnye facility oboronno-promyshlennogo kompleksa. Mestnye residents soobshchali o serii explosionov i zapakhe ammiaka.",
      "source": "OSINT (ASTRA, Exilenova+), rossiyskie Media i mestnye vlasti"
    },
    "id": 168
  },
  {
    "date": "25.06.2026",
    "lat": 45.3664,
    "lng": 38.2234,
    "distance": 362,
    "ru": {
      "region": "Краснодарский край, станица Полтавская",
      "target": "Полтавская нефтебаза",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Повторная атака на ключевую нефтебазу юга России. После удара возникло масштабное возгорание как минимум трех резервуаров с топливом. Объект используется для хранения и распределения нефтепродуктов, имеющих значение для военной и гражданской логистики.",
      "source": "OSINT (ASTRA, Exilenova+), Оперативный штаб Краснодарского края, СМИ РФ"
    },
    "uk": {
      "region": "Краснодарський край, станиця Полтавська",
      "target": "Полтавська нафтобаза",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Повторна атака на ключову нафтобазу півдня Росії. Після удару виникла масштабна пожежа щонайменше трьох резервуарів із пальним. Об'єкт використовується для зберігання та розподілу нафтопродуктів, що мають значення для військової та цивільної логістики.",
      "source": "OSINT (ASTRA, Exilenova+), Оперативний штаб Краснодарського краю, ЗМІ РФ"
    },
    "en": {
      "region": "Krasnodar Krai, станица Полтавская",
      "target": "Poltavskaya Fuel Depot",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Povtornaya strikesa na klyuchevuyu fuel depot yuga Rossii. Posle of the strike vozniklo masshtabnoe fire outbreak kak at least trekh storage tankov s fuelm. facility ispolzuetsya dlya khraneniya i raspredeleniya petroleum products, imeyushchikh znachenie dlya voennoy i grazhdanskoy logistiki.",
      "source": "OSINT (ASTRA, Exilenova+), Operativnyy shtab Krasnodarskogo kraya, Russian Media"
    },
    "id": 169
  },
  {
    "date": "26.06.2026",
    "lat": 56.1264,
    "lng": 44.1528,
    "distance": 847,
    "ru": {
      "region": "Нижегородская область, Кстово",
      "target": "НПЗ «Нижегороднефтеоргсинтез» (НОРСИ, компания «Лукойл»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ходе сверхмассированного налета беспилотников поражен один из крупнейших в РФ нефтеперерабатывающих заводов, входящий в топ-4 по мощности. Международное агентство Reuters со ссылкой на источники сообщило, что успешный удар привел к повреждениям и принудительной остановке стратегически важной установки первичной переработки нефти (CDU-5).",
      "source": "Reuters, OSINT"
    },
    "uk": {
      "region": "Нижегородська область, Кстово",
      "target": "НПЗ «Нижегороднефтеоргсинтез» (НОРСІ, компанія «Лукойл»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Під час надмасованого нальоту безпілотників уражено один із найбільших у РФ нафтопереробних заводів, що входить до топ-4 за потужністю. Міжнародне агентство Reuters із посиланням на джерела повідомило, що успішний удар призвів до пошкоджень та примусової зупинки стратегічно важливої установки первинної переробки нафти (CDU-5).",
      "source": "Reuters, OSINT"
    },
    "en": {
      "region": "Nizhny Novgorod Oblast, Kstovo",
      "target": "Nizhny Novgorodnefteorgsintez Oil Refinery (NORSI, Lukoil company)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "During a super-massive drone raid, one of the largest oil refineries in Russia, ranking in the top 4 in terms of capacity, was hit. Reuters agency, citing sources, reported that the successful strike caused damage and a forced shutdown of the strategically important primary oil refining unit (CDU-5).",
      "source": "Reuters, OSINT"
    },
    "id": 170
  },
  {
    "date": "26.06.2026",
    "lat": 56.6385,
    "lng": 36.2737,
    "distance": 645,
    "ru": {
      "region": "Тверская область, пгт Редкино",
      "target": "«Редкинский опытный завод»",
      "category": "ВПК / Химическая промышленность",
      "weapon": "Дрон",
      "details": "Беспилотники атаковали крупнейшее в регионе химическое предприятие. На территории зафиксированы взрывы и масштабный пожар. Этот опытный завод плотно интегрирован в военно-промышленный комплекс России, поскольку выпускает широкий спектр спецхимии и компоненты специализированного авиационного топлива для нужд ВКС РФ.",
      "source": "OSINT (Astra, Baza)"
    },
    "uk": {
      "region": "Тверська область, смт Редкіно",
      "target": "«Редкінський дослідний завод»",
      "category": "ВПК / Хімічна промисловість",
      "weapon": "Дрон",
      "details": "Безпілотники атакували найбільше в регіоні хімічне підприємство. На території зафіксовано вибухи та масштабну пожежу. Цей дослідний завод тісно інтегрований у військово-промисловий комплекс Росії, оскільки випускає широкий спектр спецхимии та компоненти спеціалізованого авіаційного палива для потреб ПКС РФ.",
      "source": "OSINT (Astra, Baza)"
    },
    "en": {
      "region": "Tver Oblast, pgt Redkino",
      "target": "Redkinsky Experimental Plant",
      "category": "Defense Industry / Chemical Industry",
      "weapon": "Drone",
      "details": "Drones attacked the largest chemical enterprise in the region. Explosions and a large-scale fire were recorded on the territory. This experimental plant is closely integrated into the military-industrial complex of Russia, as it produces a wide range of specialty chemicals and components of specialized aviation fuel for the needs of the Russian Aerospace Forces.",
      "source": "OSINT (Astra, Baza)"
    },
    "id": 171
  },
  {
    "date": "27.06.2026",
    "lat": 56.634,
    "lng": 36.311,
    "ru": {
      "region": "Тверская область, пгт Редкино",
      "target": "ОАО «Редкинский опытный завод» (РОЗ)",
      "category": "ВПК / Химическая промышленность",
      "weapon": "Дрон",
      "details": "В ночное время суток территорию предприятия атаковало несколько дронов-камикадзе (эксперты идентифицировали применение дальнобойных БПЛА «Лютый»). Зафиксировано поражение крыши одного из ключевых цехов (№4), а также повреждение трубопровода в зоне с легковоспламеняющимися жидкостями, вызвавшее мощный пожар и взрывы. Завод производит для ОПК критически важное специализированное ракетное и авиационное топливо (децилин) для авиации ВВС РФ.",
      "source": "OSINT (ASTRA, Baza, Мілітарний), сообщения местных жителей"
    },
    "uk": {
      "region": "Тверська область, смт Редкіно",
      "target": "ВАТ «Редкінський дослідний завод» (РОЗ)",
      "category": "ВПК / Хімічна промисловість",
      "weapon": "Дрон",
      "details": "У нічний час територію підприємства атакували кілька дронів-камікадзе (експерти ідентифікували застосування далекобійних БПЛА «Лютий»). Зафіксовано ураження даху одного з ключових цехів (№4), а також пошкодження трубопроводу в зоні з легкозаймистими рідинами, що викликало потужну пожежу і вибухи. Завод виробляє для ОПК критично важливе спеціалізоване ракетне та авіаційне паливо (децилін) для авіації ВПС РФ.",
      "source": "OSINT (ASTRA, Baza, Мілітарний), повідомлення місцевих мешканців"
    },
    "en": {
      "region": "Tver Oblast, pgt Redkino",
      "target": "Redkinsky Experimental Plant (ROZ)",
      "category": "Defense Industry / Chemical Industry",
      "weapon": "Drone",
      "details": "At night, the enterprise's territory was attacked by several kamikaze drones (experts identified the use of long-range Lyutyi UAVs). A hit on the roof of one of the key workshops (No. 4) was recorded, as well as damage to a pipeline in the zone with flammable liquids, causing a powerful fire and explosions. The plant produces critically important specialized missile and aviation fuel (decilin) for the Russian Air Force.",
      "source": "OSINT (ASTRA, Baza, Militarnyi), local residents' reports"
    },
    "distance": 644,
    "id": 172
  },
  {
    "date": "27.06.2026",
    "lat": 56.1778,
    "lng": 40.5748,
    "ru": {
      "region": "Владимирская область, Камешковский район (район села Второво)",
      "target": "Промежуточная нефтеперекачивающая станция (ППС) «Второво» (АО «Транснефть – Верхняя Волга»)",
      "category": "Топливная логистика / Нефтегаз",
      "weapon": "Дрон",
      "details": "СБУ заявила о повторном ударе по нефтеперекачивающей станции «Второво», обеспечивающей поставки топлива в Московский регион. По предварительным данным украинской стороны, поражено техническое здание станции, после чего произошёл взрыв. Российские региональные источники и OSINT-сообщества сообщали о возгорании и работе ПВО в районе объекта.",
      "source": "СБУ, OSINT (ASTRA), российские региональные источники"
    },
    "uk": {
      "region": "Володимирська область, Камешковський район (район села Второво)",
      "target": "Проміжна нафтоперекачувальна станція (ППС) «Второво» (АТ «Транснєфть – Верхня Волга»)",
      "category": "Паливна логістика / Нафтогаз",
      "weapon": "Дрон",
      "details": "СБУ заявила про повторний удар по нафтоперекачувальній станції «Второво», яка забезпечує постачання пального до Московського регіону. За попередніми даними української сторони, уражено технічну будівлю станції, після чого стався вибух. Російські регіональні джерела та OSINT-спільноти повідомляли про пожежу та роботу ППО в районі об'єкта.",
      "source": "СБУ, OSINT (ASTRA), російські регіональні джерела"
    },
    "en": {
      "region": "Vladimir Oblast, Kameshkovsky District (near Vtorovo)",
      "target": "Vtorovo Intermediate Oil Pumping Station (Transneft - Verkhnyaya Volga)",
      "category": "Fuel Logistics / Oil & Gas",
      "weapon": "Drone",
      "details": "The SBU announced a repeated strike on the Vtorovo oil pumping station, which supplies fuel to the Moscow region. According to preliminary Ukrainian data, the station's technical building was hit, followed by an explosion. Russian regional sources and OSINT communities reported a fire and air defense activity near the facility.",
      "source": "SBU, OSINT (ASTRA), Russian regional sources"
    },
    "distance": 699,
    "id": 173
  },
  {
    "date": "27.06.2026",
    "lat": 48.7845,
    "lng": 44.5912,
    "ru": {
      "region": "Волгоградская область, Волгоград",
      "target": "ФНПЦ «Титан-Баррикады»",
      "category": "ВПК / Оборонная промышленность",
      "weapon": "Ракета FP-5 «Flamingo»",
      "details": "Беспрецедентный и исторический удар новейшей дальнобойной ракетой FP-5 «Flamingo» по стратегическому предприятию российского ОПК, которое занимается производством компонентов и пусковых установок для ОТРК «Искандер» и ядерных комплексов («Тополь-М», «Ярс»). Точное поражение цехов вызвало масштабные разрушения производственной инфраструктуры и вторичные детонации. Операция подтверждена представителями украинского военного командования и нанесла серьезный ущерб российскому ракетному производству.",
      "source": "Генштаб ВСУ, ГУР, OSINT (мониторинговые группы), сообщения властей Волгограда"
    },
    "uk": {
      "region": "Волгоградська область, Волгоград",
      "target": "ФНВЦ «Титан-Барикади»",
      "category": "ВПК / Оборонна промисловість",
      "weapon": "Ракета FP-5 «Flamingo»",
      "details": "Безпрецедентний та історичний удар новітньою далекобійною ракетою FP-5 «Flamingo» по стратегічному підприємству російського ОПК, що займається виробництвом компонентів і пускових установок для ОТРК «Іскандер» та ядерних комплексів («Тополь-М», «Ярс»). Точне ураження цехів викликало масштабні руйнування виробничої інфраструктури та вторинні детонації. Операція підтверджена представниками українського військового командування і завдала серйозної шкоди російському ракетному виробництву.",
      "source": "Генштаб ЗСУ, ГУР, OSINT (моніторингові групи), повідомлення влади Волгограда"
    },
    "en": {
      "region": "Volgograd Oblast, Volgograd",
      "target": "Federal Research and Production Center Titan-Barrikady",
      "category": "Defense Industry",
      "weapon": "FP-5 Flamingo Missile",
      "details": "An unprecedented and historic strike by the newest long-range FP-5 Flamingo missile on a strategic Russian defense enterprise that manufactures components and launchers for the Iskander missile systems and nuclear complexes (Topol-M, Yars). The precise hit on the workshops caused massive destruction of the production infrastructure and secondary detonations. The operation was confirmed by the Ukrainian military command and caused serious damage to Russian missile production.",
      "source": "General Staff of the Armed Forces of Ukraine, GUR, OSINT, local authorities"
    },
    "distance": 513,
    "images": [
      "video/26-2706-titan-barikady.MP4",
      "images/26_27-06_titan0.jpg",
      "images/26_27-06_titan1.jpg",
      "images/26_27-06_titan2.jpg"
    ],
    "id": 174
  },
  {
    "date": "28.06.2026",
    "lat": 45.242,
    "lng": 38.106,
    "distance": 367,
    "ru": {
      "region": "Краснодарский край, Славянск-на-Кубани",
      "target": "Славянский НПЗ (ООО «Славянск ЭКО»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В результате беспрецедентно массовой комбинированной атаки Сил обороны успешно поражен стратегический Славянский НПЗ. Раздалась серия мощных взрывов, после чего на объекте вспыхнул масштабный пожар в резервуарном парке. Местный оперштаб и губернатор признали прямое возгорание нескольких нефтеналивных емкостей, а также повреждение прилегающего газопровода и сопутствующей инфраструктуры.",
      "source": "Президент Украины, Генштаб ВСУ, OSINT (Exilenova+, Supernova+), Оперштаб Кубани"
    },
    "uk": {
      "region": "Краснодарський край, Слов'янськ-на-Кубані",
      "target": "Слов'янський НПЗ (ТОВ «Слов'янськ ЕКО»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Унаслідок безпрецедентно масової комбінованої атаки Сил оборони успішно уражено стратегічний Слов'янський НПЗ. Пролунала серія потужних вибухів, після чого на об'єкті спалахнула масштабна пожежа в резервуарному парку. Місцевий оперштаб і губернатор визнали пряме загоряння кількох нафтоналивних ємностей, а також пошкодження прилеглого газопроводу та супутньої інфраструктури.",
      "source": "Президент України, Генштаб ЗСУ, OSINT (Exilenova+, Supernova+), Оперштаб Кубані"
    },
    "en": {
      "region": "Krasnodar Krai, Slavyansk-na-Kubani",
      "target": "Slavyansk Oil Refinery (LLC Slavyansk ECO)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "As a result of an unprecedentedly massive combined attack by the Defense Forces, the strategic Slavyansk Oil Refinery was successfully struck. A series of powerful explosions rang out, after which a large-scale fire broke out in the tank farm at the facility. The local operational headquarters and the governor acknowledged the direct ignition of several oil storage tanks, as well as damage to the adjacent gas pipeline and accompanying infrastructure.",
      "source": "President of Ukraine, General Staff of the Armed Forces of Ukraine, OSINT (Exilenova+, Supernova+), Operational Headquarters of Kuban"
    },
    "images": [
      "video/26-2806-NPZ_slavansk-na-kubani.mp4",
      "images/26-2806-na-kubani1.jpg",
      "images/26-2806-na-kubani2.jpg",
      "images/26-2806-na-kubani3.jpg",
      "images/26-2806-na-kubani4.jpg",
      "images/26-2806-na-kubani5.jpg"
    ],
    "id": 175
  },
  {
    "date": "28.06.2026",
    "lat": 57.5683,
    "lng": 39.8519,
    "distance": 810,
    "ru": {
      "region": "Ярославская область, Ярославль",
      "target": "Ярославский НПЗ (ПАО «Славнефть-ЯНОС»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Синхронно со Славянском дальнобойные украинские беспилотники атаковали один из крупнейших в центральной РФ нефтеперерабатывающих заводов в Ярославле (глубина удара около 800 км от границы). Из-за прорыва БПЛА российские власти экстренно останавливали транспортную логистику и полностью перекрыли движение автотранспорта в радиусе завода.",
      "source": "СБУ, Генштаб ВСУ, мониторинговые каналы, местные СМИ РФ"
    },
    "uk": {
      "region": "Ярославська область, Ярославль",
      "target": "Ярославський НПЗ (ПАТ «Славнефть-ЯНОС»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Синхронно зі Слов'янськом далекобійні українські безпілотники атакували один з найбільших у центральній РФ нафтопереробних заводів у Ярославлі (глибина удару близько 800 км від кордону). Через прорив БПЛА російська влада екстрено зупиняла транспортну логістику та повністю перекрила рух автотранспорту в радіусі заводу.",
      "source": "СБУ, Генштаб ЗСУ, моніторингові канали, місцеві ЗМІ РФ"
    },
    "en": {
      "region": "Yaroslavl Oblast, Yaroslavl",
      "target": "Yaroslavl Oil Refinery (PJSC Slavneft-YANOS)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Synchronously with Slavyansk, long-range Ukrainian drones attacked one of the largest oil refineries in central Russia, located in Yaroslavl (strike depth about 800 km from the border). Due to the UAV breakthrough, Russian authorities urgently halted transport logistics and completely blocked road traffic within the refinery's radius.",
      "source": "SBU, General Staff of the Armed Forces of Ukraine, monitoring channels, local Russian media"
    },
    "id": 176
  },
  {
    "date": "29.06.2026",
    "lat": 52.8832,
    "lng": 40.4851,
    "ru": {
      "region": "Тамбовская область, Мичуринский муниципальный округ (с. Новоникольское)",
      "target": "Линейно-производственная диспетчерская станция (ЛПДС) «Никольское» / Нефтебаза (АО «Транснефть-Дружба»)",
      "category": "Нефтегаз / Топливная логистика",
      "weapon": "Дрон",
      "details": "Ранним утром беспилотник-камикадзе успешно поразил территорию стратегической нефтеперекачивающей станции, интегрированной в нефтепроводную магистраль «Дружба». Зафиксировано возгорание резервуара. Этот объект играет критическую роль в распределении горюче-смазочных материалов по Центральному федеральному округу РФ и бесперебойном обеспечении логистических цепей снабжения российских войск.",
      "source": "OSINT (ASTRA), подтверждено губернатором Тамбовской области"
    },
    "uk": {
      "region": "Тамбовська область, Мічурінський муніципальний округ (с. Новонікольське)",
      "target": "Лінійно-виробнича диспетчерська станція (ЛВДС) «Нікольське» / Нафтобаза (АТ «Транснєфть-Дружба»)",
      "category": "Нафтогаз / Паливна логістика",
      "weapon": "Дрон",
      "details": "Рано вранці безпілотник-камікадзе успішно вразив територію стратегічної нафтоперекачувальної станції, що інтегрована у нафтопровідну магістраль «Дружба». Зафіксовано загоряння резервуара. Цей об'єкт відіграє критичну роль у розподілі паливно-мастильних матеріалів Центральним федеральним округом РФ і безперебійному забезпеченні логістичних ланцюгів постачання російських військ.",
      "source": "OSINT (ASTRA), підтверджено губернатором Тамбовської області"
    },
    "en": {
      "region": "Tambov Oblast, Michurinsky Municipal District (Novonikolskoye village)",
      "target": "Nikolskoye Line Production and Junction Station (LPDS) / Fuel Depot (JSC Transneft-Druzhba)",
      "category": "Oil & Gas / Fuel Logistics",
      "weapon": "Drone",
      "details": "In the early morning, a kamikaze drone successfully struck the territory of a strategic oil pumping station integrated into the Druzhba oil pipeline network. A fire outbreak in a storage tank was recorded. This facility plays a critical role in the distribution of fuel and lubricants across the Central Federal District of the Russian Federation and in the uninterrupted supply of logistics chains for Russian troops.",
      "source": "OSINT (ASTRA), confirmed by the governor of Tambov Oblast"
    },
    "id": 177,
    "distance": 436
  },
  {
    "date": "29.06.2026",
    "lat": 53.2458,
    "lng": 34.3302,
    "ru": {
      "region": "Брянская область, Брянск",
      "target": "Завод микроэлектроники «Кремний Эл» (АО «ГРУППА КРЕМНИЙ ЭЛ»)",
      "category": "ВПК / Промышленность",
      "weapon": "Дрон",
      "details": "Очередной успешный налет на одно из крупнейших микроэлектронных предприятий России (входит в госхолдинги ВПК), которое выпускает военные радиоэлектронные компоненты, микросхемы для радаров ПВО, ракет систем «Искандер» и ударных беспилотников РФ. Местные жители зафиксировали мощные взрывы, вспышку и последующий пожар в одном из производственных и административных цехов.",
      "source": "OSINT (сообщения жителей Брянска, видеоматериалы прилетов)"
    },
    "uk": {
      "region": "Брянська область, Брянськ",
      "target": "Завод мікроелектроніки «Кремній Ел» (АТ «ГРУППА КРЕМНІЙ ЕЛ»)",
      "category": "ВПК / Промисловість",
      "weapon": "Дрон",
      "details": "Черговий успішний наліт на одне з найбільших мікроелектронних підприємств Росії (входить у держхолдинги ВПК), що випускає військові радіоелектронні компоненти, мікросхеми для радарів ППО, ракет систем «Іскандер» та ударних безпілотників РФ. Місцеві мешканці зафіксували потужні вибухи, спалах і подальшу пожежу в одному з виробничих та административних цехів.",
      "source": "OSINT (повідомлення мешканців Брянська, відеоматеріали прильотів)"
    },
    "en": {
      "region": "Bryansk Oblast, Bryansk",
      "target": "Kremny El Microelectronics Plant (JSC Kremny El Group)",
      "category": "Defense Industry / Manufacturing",
      "weapon": "Drone",
      "details": "Another successful raid on one of Russia's largest microelectronics enterprises (part of state-owned defense holdings), which manufactures military radio-electronic components, microchips for air defense radars, Iskander missile systems, and Russian strike drones. Local residents recorded powerful explosions, a bright flash, and a subsequent fire in one of the production and administrative workshops.",
      "source": "OSINT (reports from Bryansk residents, arrival footage)"
    },
    "id": 178,
    "distance": 262
  },
  {
    "date": "30.06.2026",
    "lat": 56.7378,
    "lng": 37.2511,
    "ru": {
      "region": "Московская область, Дубна",
      "target": "ЦКС «Дубна» / Оборонные заводы «Радуга» и «Кронштадт»",
      "category": "ВПК / Инфраструктура военной связи",
      "weapon": "Дрон",
      "details": "Повторная массированная атака беспилотников. В своем обращении Президент Украины подтвердил системный удар по крупнейшему узлу спутниковой космической связи ВС РФ. Также OSINT-ресурсы, подтверждая слова местных жителей, сообщили о попаданиях и пожаре в непосредственной близости от оборонных производств города: ракетного конструкторского бюро ГосМКБ «Радуга» (производители Х-101/Х-69) и завода по сборке БПЛА «Кронштадт».",
      "source": "Президент Украины, OSINT (Astra, Exilenova+)"
    },
    "uk": {
      "region": "Московська область, Дубна",
      "target": "ЦКЗ «Дубна» / Оборонні заводи «Радуга» та «Кронштадт»",
      "category": "ВПК / Інфраструктура військового зв'язку",
      "weapon": "Дрон",
      "details": "Повторна масована атака безпілотників. У своєму зверненні Президент України підтвердив системний удар по найбільшому вузлу супутникового космічного зв'язку ЗС РФ. Також OSINT-ресурси, підтверджуючи слова місцевих мешканців, повідомили про влучання та пожежу в безпосередній близькості від оборонних виробництв міста: ракетного конструкторського бюро ДержМКБ «Радуга» (виробники Х-101/Х-69) і заводу зі складання БПЛА «Кронштадт».",
      "source": "Президент України, OSINT (Astra, Exilenova+)"
    },
    "en": {
      "region": "Moscow Oblast, Dubna",
      "target": "SCC \"Dubna\" / Defense Plants \"Raduga\" and \"Kronshtadt\"",
      "category": "Defense Industry / Military Communications Infrastructure",
      "weapon": "Drone",
      "details": "Repeated massive drone attack. In his address, the President of Ukraine confirmed a systematic strike on the largest satellite space communications hub of the Russian Armed Forces. Also, OSINT resources, confirming the words of local residents, reported hits and a fire in the immediate vicinity of the city's defense production facilities: the Raduga State Machine-Building Design Bureau (manufacturers of Kh-101/Kh-69) and the Kronshtadt UAV assembly plant.",
      "source": "President of Ukraine, OSINT (Astra, Exilenova+)"
    },
    "id": 179,
    "distance": 668
  },
  {
    "date": "30.06.2026",
    "lat": 52.57,
    "lng": 39.638,
    "ru": {
      "region": "Липецкая область, Липецк",
      "target": "Новолипецкий металлургический комбинат (НЛМК)",
      "category": "ВПК / Промышленность",
      "weapon": "Дрон",
      "details": "Группа БПЛА-камикадзе (более семи единиц) преодолела российское ПВО и вновь нанесла удар по производственным площадям сталелитейного предприятия НЛМК, которое играет значимую роль в производстве сырья для военно-промышленного комплекса. Зафиксированы мощные взрывы и прямое поражение станции разделения кислорода, в связи с чем возник сильный пожар.",
      "source": "OSINT (Baza), мониторинговые группы"
    },
    "uk": {
      "region": "Липецька область, Липецьк",
      "target": "Новолипецький металургійний комбінат (НЛМК)",
      "category": "ВПК / Промисловість",
      "weapon": "Дрон",
      "details": "Група БПЛА-камікадзе (більше ніж сім одиниць) подолала російську ППО і знову завдала удару по виробничих площах сталеливарного підприємства НЛМК, яке відіграє значну роль у виробництві сировини для військово-промислового комплексу. Зафіксовані потужні вибухи і пряме ураження станції розділення кисню, в зв'язку з чим виникла сильна пожежа.",
      "source": "OSINT (Baza), моніторингові групи"
    },
    "en": {
      "region": "Lipetsk Oblast, Lipetsk",
      "target": "Novolipetsk Metallurgical Plant (NLMK)",
      "category": "Defense Industry / Manufacturing",
      "weapon": "Drone",
      "details": "A group of kamikaze UAVs (more than seven units) bypassed Russian air defense and once again struck the production areas of the NLMK steel plant, which plays a significant role in the production of raw materials for the military-industrial complex. Powerful explosions and a direct hit on the oxygen separation station were recorded, causing a severe fire.",
      "source": "OSINT (Baza), monitoring groups"
    },
    "id": 180,
    "distance": 372
  },
  {
    "date": "01.07.2026",
    "lat": 53.1812,
    "lng": 45.021,
    "ru": {
      "region": "Пензенская область, Пенза",
      "target": "Завод АО «Маяк» / АО «НИИФИ» / Государственный подшипниковый завод",
      "category": "ВПК / НИИ",
      "weapon": "Дрон",
      "details": "Крайне результативный удар Сил обороны сразу по нескольким предприятиям из структур ВПК и «Роскосмоса». Атакован НИИ Физических измерений (занимается бортовыми компонентами и датчиками для новейших самолетов Су-57 и стратегических ракет) и ОАО «Маяк» (разработка приборов систем связи и радиоэлектроники для боевой техники). Информацию об успешном ударе по этому стратегическому узлу электроники подтвердили Президент Украины, а также сводки ГШ ВСУ. Местные зафиксировали густое облако черного дыма и вторичную детонацию.",
      "source": "Президент Украины, Генштаб ВСУ, OSINT (Astra, Supernova+)"
    },
    "uk": {
      "region": "Пензенська область, Пенза",
      "target": "Завод АТ «Маяк» / АТ «НДІФВ» / Державний підшипниковий завод",
      "category": "ВПК / НДІ",
      "weapon": "Дрон",
      "details": "Вкрай результативний удар Сил оборони відразу по декількох підприємствах зі структур ВПК і «Роскосмосу». Атаковано НДІ Фізичних вимірювань (займається бортовими компонентами та датчиками для новітніх літаків Су-57 і стратегічних ракет) і ВАТ «Маяк» (розробка приладів систем зв'язку та радіоелектроніки для бойової техніки). Інформацію про успішний удар по цьому стратегічному вузлу електроніки підтвердили Президент України, а також зведення ГШ ЗСУ. Місцеві зафіксували густу хмару чорного диму і вторинну детонацію.",
      "source": "Президент України, Генштаб ЗСУ, OSINT (Astra, Supernova+)"
    },
    "en": {
      "region": "Penza Oblast, Penza",
      "target": "Plant JSC \"Mayak\" / JSC \"NIIFI\" / State Bearing Plant",
      "category": "Defense Industry / Research Institute",
      "weapon": "Drone",
      "details": "An extremely effective strike by the Defense Forces simultaneously on several enterprises of the military-industrial complex and \"Roscosmos\" structures. The Research Institute of Physical Measurements (engaged in onboard components and sensors for the latest Su-57 aircraft and strategic missiles) and OJSC \"Mayak\" (development of communication systems and radio electronics for military equipment) were attacked. Information about a successful strike on this strategic electronics hub was confirmed by the President of Ukraine, as well as the summary of the General Staff of the Armed Forces of Ukraine. Locals recorded a thick cloud of black smoke and secondary detonation.",
      "source": "President of Ukraine, AFU General Staff, OSINT (Astra, Supernova+)"
    },
    "id": 181,
    "distance": 702
  },
  {
    "date": "01.07.2026",
    "lat": 54.843,
    "lng": 56.079,
    "ru": {
      "region": "Республика Башкортостан, Уфа",
      "target": "НПЗ «Башнефть» (маслопромышленный и перерабатывающий узел)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Сверхдальняя и синхронная (наряду с Пензой) ночная атака на объекты топливной системы противника. Силы обороны второй раз нанесли точечные попадания по инфраструктуре одного из крупнейших в РФ производителей масел и переработки топлива на Урале («Башнефть»). Температурные аномалии от пожаров были идентифицированы сервисом NASA FIRMS, удар официально внесен в список достижений дальнобойного вооружения в речи президента.",
      "source": "Президент Украины, спутниковые данные FIRMS, мониторинговые каналы"
    },
    "uk": {
      "region": "Республіка Башкортостан, Уфа",
      "target": "НПЗ «Башнєфть» (маслопромисловий і переробний вузол)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Наддалека і синхронна (разом із Пензою) нічна атака на об'єкти паливної системи противника. Сили оборони вдруге завдали точкових влучань по інфраструктурі одного з найбільших у РФ виробників мастил і перероблення палива на Уралі («Башнєфть»). Температурні аномалії від пожеж були ідентифіковані сервісом NASA FIRMS, удар офіційно внесено до списку досягнень далекобійного озброєння в промові президента.",
      "source": "Президент України, супутникові дані FIRMS, моніторингові канали"
    },
    "en": {
      "region": "Republic of Bashkortostan, Ufa",
      "target": "Bashneft Refinery (oil and processing hub)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "An ultra-long-range and synchronous (along with Penza) night attack on enemy fuel system facilities. For the second time, the Defense Forces inflicted pinpoint hits on the infrastructure of one of the largest oil producers and fuel processing plants in the Urals in the Russian Federation (\"Bashneft\"). Temperature anomalies from the fires were identified by the NASA FIRMS service, and the strike was officially added to the list of long-range weapons achievements in the president's speech.",
      "source": "President of Ukraine, NASA FIRMS satellite data, monitoring channels"
    },
    "id": 182,
    "distance": 1436
  },
  {
    "date": "01.07.2026",
    "lat": 45.093,
    "lng": 33.599,
    "ru": {
      "region": "АР Крым, Новофедоровка",
      "target": "Военный аэродром «Саки»",
      "category": "Военная инфраструктура / Авиабаза",
      "weapon": "Дрон",
      "details": "Разрушительный налет БПЛА Службы Безопасности Украины. В результате 5 зафиксированных прямых попаданий уничтожены/сильно повреждены ангары с авиационной техникой ВКС РФ. Сообщалось о нахождении там ценных истребителей Су-30, оцениваемых в сотни миллионов долларов. Над аэродромом несколько часов продолжался масштабный пожар и раздавались взрывы, о чем массово писали крымчане.",
      "source": "СБУ, OSINT (Крымский Ветер), Генштаб ВСУ"
    },
    "uk": {
      "region": "АР Крим, Новофедорівка",
      "target": "Військовий аеродром «Саки»",
      "category": "Військова інфраструктура / Авіабаза",
      "weapon": "Дрон",
      "details": "Руйнівний наліт БПЛА Служби Безпеки України. Внаслідок 5 зафіксованих прямих влучань знищені/сильно пошкоджені ангари з авіаційною технікою ПКС РФ. Повідомлялося про знаходження там цінних винищувачів Су-30, які оцінюються в сотні мільйонів доларів. Над аеродромом декілька годин тривала масштабна пожежа та лунали вибухи, про що масово писали кримчани.",
      "source": "СБУ, OSINT (Кримський Вітер), Генштаб ЗСУ"
    },
    "en": {
      "region": "AR Crimea, Novofedorivka",
      "target": "Military Airfield \"Saki\"",
      "category": "Military Infrastructure / Airbase",
      "weapon": "Drone",
      "details": "A devastating UAV raid by the Security Service of Ukraine. As a result of 5 recorded direct hits, hangars with aviation equipment of the Russian Aerospace Forces were destroyed/severely damaged. It was reported that valuable Su-30 fighters, estimated at hundreds of millions of dollars, were located there. A large-scale fire and explosions continued over the airfield for several hours, as massively reported by Crimeans.",
      "source": "SBU, OSINT (Crimean Wind), AFU General Staff"
    },
    "id": 183,
    "distance": 188
  },
  {
    "date": "02.07.2026",
    "lat": 56.1264,
    "lng": 44.1528,
    "distance": 847,
    "ru": {
      "region": "Нижегородская область, Кстово",
      "target": "НПЗ «Нижегороднефтеоргсинтез» (Лукойл)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Успешная дальнобойная атака ударными БПЛА. Зафиксирован точный прилет по инфраструктуре завода, вызвавший возгорание на критически важной установке первичной переработки нефти АВТ-6. Это мощнейший удар по одному из ведущих предприятий нефтеперерабатывающей промышленности РФ.",
      "source": "OSINT, сообщения местных жителей, спутниковый мониторинг"
    },
    "uk": {
      "region": "Нижегородська область, Кстово",
      "target": "НПЗ «Нижегороднефтеоргсинтез» (Лукойл)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Успішна далекобійна атака ударними БПЛА. Зафіксовано точний приліт по інфраструктурі заводу, що спричинив загоряння на критично важливій установці первинної переробки нафти АВТ-6. Це надзвичайно потужний удар по одному з провідних підприємств нафтопереробної промисловості РФ.",
      "source": "OSINT, повідомлення місцевих мешканців, супутниковий моніторинг"
    },
    "en": {
      "region": "Nizhny Novgorod Oblast, Kstovo",
      "target": "Oil Refinery «Nizhegorodnefteorgsintez» (Lukoil)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Successful long-range attack by strike UAVs. A precise hit was recorded on the refinery's infrastructure, causing a fire at a critically important primary oil refining unit AVT-6. This is a very powerful strike against one of the leading enterprises of the Russian oil refining industry.",
      "source": "OSINT, local residents' reports, satellite monitoring"
    },
    "images": [
      "images/kstovo1.jpg",
      "images/kstovo2.jpg",
      "images/kstovo3.jpg",
      "video/kstovo.mp4"
    ],
    "id": 184
  },
  {
    "date": "03.07.2026",
    "lat": 45.7008,
    "lng": 34.4258,
    "distance": 174,
    "ru": {
      "region": "АР Крым, Джанкой",
      "target": "Военный аэродром «Джанкой»",
      "category": "Военный аэродром",
      "weapon": "Ракета / Дрон",
      "details": "Во время массированной ночной атаки на энергетику полуострова спутниковая система NASA FIRMS зафиксировала дополнительные температурные аномалии и очаги пожаров непосредственно на территории военного аэродрома Джанкой (места базирования 39-го вертолетного полка РФ).",
      "source": "NASA FIRMS, OSINT (Крымский ветер)"
    },
    "uk": {
      "region": "АР Крим, Джанкой",
      "target": "Військовий аеродром «Джанкой»",
      "category": "Військовий аеродром",
      "weapon": "Ракета / Дрон",
      "details": "Під час масованої нічної атаки на енергетику півострова супутникова система NASA FIRMS зафіксувала додаткові температурні аномалії та осередки пожеж безпосередньо на території військового аеродрому Джанкой (місця базування 39-го вертолітного полку РФ).",
      "source": "NASA FIRMS, OSINT (Кримський вітер)"
    },
    "en": {
      "region": "AR Crimea, Dzhankoi",
      "target": "Military Airfield «Dzhankoi»",
      "category": "Military Airfield",
      "weapon": "Missile / Drone",
      "details": "During a massive night attack on the peninsula's energy infrastructure, the NASA FIRMS satellite system recorded additional temperature anomalies and fire outbreaks directly on the territory of the Dzhankoi military airfield (base of the 39th Helicopter Regiment of the Russian Federation).",
      "source": "NASA FIRMS, OSINT (Crimean Wind)"
    },
    "images": [],
    "id": 185
  },
  {
    "date": "04.07.2026",
    "lat": 59.879,
    "lng": 30.188,
    "distance": 934,
    "ru": {
      "region": "Санкт-Петербург (Угольная гавань)",
      "target": "Петербургский нефтяной терминал",
      "category": "Топливная логистика / Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 4 июля дальнобойные украинские беспилотники атаковали крупнейший российский комплекс по перевалке нефтепродуктов в Балтийском регионе (расстояние около 900-1000 км от границы). В результате попадания на инфраструктурном объекте возник масштабный пожар. Факт поражения логистического терминала официально подтвердил Генштаб ВСУ и Президент Украины в своем обращении.",
      "source": "Президент Украины, Генштаб ВСУ, OSINT-ресурсы, СМИ РФ"
    },
    "uk": {
      "region": "Санкт-Петербург (Вугільна гавань)",
      "target": "Петербурзький нафтовий термінал",
      "category": "Паливна логістика / Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 4 липня далекобійні українські безпілотники атакували найбільший російський комплекс з перевалки нафтопродуктів у Балтійському регіоні (відстань близько 900-1000 км від кордону). Внаслідок влучання на інфраструктурному об'єкті виникла масштабна пожежа. Факт ураження логістичного термінала офіційно підтвердив Генштаб ЗСУ та Президент України у своєму зверненні.",
      "source": "Президент України, Генштаб ЗСУ, OSINT-ресурси, ЗМІ РФ"
    },
    "en": {
      "region": "St. Petersburg (Ugolnaya Gavan)",
      "target": "Petersburg Oil Terminal",
      "category": "Fuel Logistics / Oil and Gas",
      "weapon": "Drone",
      "details": "On the night of July 4, long-range Ukrainian drones attacked the largest Russian oil products transshipment complex in the Baltic region (distance about 900-1000 km from the border). A massive fire broke out at the infrastructure facility as a result of the hit. The fact of hitting the logistics terminal was officially confirmed by the General Staff of the Armed Forces of Ukraine and the President of Ukraine in his address.",
      "source": "President of Ukraine, General Staff of the Armed Forces of Ukraine, OSINT resources, Russian mass media"
    },
    "images": [
      "images/piter-4iyulya.jpg",
      "video/piter-4iyulya.mp4"
    ],
    "id": 186
  },
  {
    "date": "04.07.2026",
    "lat": 44.685,
    "lng": 33.566,
    "distance": 229,
    "ru": {
      "region": "АР Крым, Севастополь",
      "target": "Военный аэродром «Бельбек» (истребитель МиГ-29)",
      "category": "Военная инфраструктура / Авиабаза",
      "weapon": "Дрон",
      "details": "Главное управление разведки (ГУР) МОУ опубликовало официальное подтверждение результативности операции Департамента беспилотных систем. Одним точным ударом по аэродрому был полностью сожжен российский истребитель МиГ-29, а также поражена аэродромная пусковая установка, которая в момент атаки обслуживала авиационную технику. Ущерб оценен в десятки миллионов долларов.",
      "source": "ГУР МОУ, Силы обороны Украины"
    },
    "uk": {
      "region": "АР Крим, Севастополь",
      "target": "Військовий аеродром «Бельбек» (винищувач МіГ-29)",
      "category": "Військова інфраструктура / Авіабаза",
      "weapon": "Дрон",
      "details": "Головне управління розвідки (ГУР) МОУ опублікувало офіційне підтвердження результативності операції Департаменту безпілотних систем. Одним точним ударом по аеродрому було повністю спалено російський винищувач МіГ-29, а також уражено аеродромну пускову установку, яка в момент атаки обслуговувала авіаційну техніку. Збитки оцінено в десятки мільйонів доларів.",
      "source": "ГУР МОУ, Сили оборони України"
    },
    "en": {
      "region": "AR Crimea, Sevastopol",
      "target": "Military airfield «Belbek» (MiG-29 fighter)",
      "category": "Military Infrastructure / Airbase",
      "weapon": "Drone",
      "details": "The Main Intelligence Directorate (HUR) of the Ministry of Defense of Ukraine published an official confirmation of the success of the Unmanned Systems Department operation. With one precise strike on the airfield, a Russian MiG-29 fighter was completely burned, and an airfield launcher, which was servicing aviation equipment at the time of the attack, was also hit. The damage is estimated at tens of millions of dollars.",
      "source": "HUR MOU, Defense Forces of Ukraine"
    },
    "images": [],
    "id": 187
  },
  {
    "date": "05.07.2026",
    "lat": 45.1167,
    "lng": 33.976,
    "distance": 199,
    "ru": {
      "region": "АР Крым, пгт Гвардейское",
      "target": "Военный аэродром «Гвардейское»",
      "category": "Военная инфраструктура / Авиабаза",
      "weapon": "Дрон",
      "details": "В ночь на 5 июля подразделения Сил обороны Украины нанесли массированный удар по военному аэродрому Воздушно-космических сил РФ. Эта авиабаза используется противником как один из главных логистических узлов полуострова для обеспечения боевых вылетов самолетов оперативно-тактической авиации, а также как пункт технического обслуживания штурмовиков. Атака подтверждена утренней сводкой Генштаба.",
      "source": "Генштаб ВСУ, OSINT (Крымский ветер)"
    },
    "uk": {
      "region": "АР Крим, смт Гвардійське",
      "target": "Військовий аеродром «Гвардійське»",
      "category": "Військова інфраструктура / Авіабаза",
      "weapon": "Дрон",
      "details": "У ніч проти 5 липня підрозділи Сил оборони України завдали масованого удару по військовому аеродрому Повітряно-космічних сил РФ. Ця авіабаза використовується противником як один із головних логістичних вузлів півострова для забезпечення бойових вильотів літаків оперативно-тактичної авіації, а також як пункт технічного обслуговування штурмовиків. Атака підтверджена ранковим зведенням Генштабу.",
      "source": "Генштаб ЗСУ, OSINT (Кримський вітер)"
    },
    "en": {
      "region": "AR Crimea, Hvardiiske settlement",
      "target": "Military airfield «Hvardiiske»",
      "category": "Military Infrastructure / Airbase",
      "weapon": "Drone",
      "details": "On the night of July 5, units of the Defense Forces of Ukraine launched a massive strike on the military airfield of the Russian Aerospace Forces. This airbase is used by the enemy as one of the main logistics hubs of the peninsula to ensure combat sorties of operational-tactical aviation aircraft, as well as a maintenance point for attack aircraft. The attack was confirmed by the morning report of the General Staff.",
      "source": "General Staff of the Armed Forces of Ukraine, OSINT (Crimean Wind)"
    },
    "images": [],
    "id": 188
  },
  {
    "date": "06.07.2026",
    "lat": 57.57,
    "lng": 39.81,
    "distance": 809,
    "ru": {
      "region": "Ярославская область, Ярославль",
      "target": "Ярославский НПЗ (Славнефть-ЯНОС)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "source": "OSINT",
      "details": "Ярославский нефтеперерабатывающий завод (Славнефть-ЯНОС) — одно из крупнейших предприятий России по производству нефтепродуктов, играющее ключевую роль в обеспечении топливом центральных регионов и нужд ВПК РФ. Завод перерабатывает миллионы тонн нефти ежегодно, выпуская бензин, дизельное и авиационное топливо. Успешная атака беспилотников на объекты НПЗ привела к повреждениям критической инфраструктуры переработки, что значительно снизило производственные мощности предприятия. Это событие стало серьезным логистическим и экономическим ударом, так как завод напрямую вовлечен в снабжение российских войск."
    },
    "uk": {
      "region": "Ярославська область, Ярославль",
      "target": "Ярославський НПЗ (Славнефть-ЯНОС)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "source": "OSINT",
      "details": "Ярославський нафтопереробний завод (Славнєфть-ЯНОС) — одне з найбільших підприємств Росії з виробництва нафтопродуктів, що відіграє ключову роль у забезпеченні паливом центральних регіонів і потреб ВПК РФ. Завод переробляє мільйони тонн нафти щорічно, випускаючи бензин, дизельне та авіаційне паливо. Успішна атака безпілотників на об'єкти НПЗ призвела до пошкоджень критичної інфраструктури переробки, що значно знизило виробничі потужності підприємства. Ця подія стала серйозним логістичним та економічним ударом, оскільки завод безпосередньо залучений до постачання російських військ."
    },
    "en": {
      "region": "Yaroslavl Oblast, Yaroslavl",
      "target": "Yaroslavl Refinery (Slavneft-YANOS)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "source": "OSINT",
      "details": "The Yaroslavl Oil Refinery (Slavneft-YANOS) is one of Russia's largest petroleum product manufacturers, playing a key role in supplying fuel to central regions and the Russian military-industrial complex. The plant processes millions of tons of oil annually, producing gasoline, diesel, and aviation fuel. A successful drone attack on the refinery's facilities caused damage to critical processing infrastructure, significantly reducing the plant's production capacity. This event was a major logistical and economic blow, as the plant is directly involved in supplying the Russian military."
    },
    "id": 189,
    "images": []
  },
  {
    "date": "06.07.2026",
    "lat": 45.3586,
    "lng": 36.4839,
    "distance": 294,
    "ru": {
      "region": "АР Крым, Керчь",
      "target": "Морской порт Керчь",
      "category": "ВПК / Логистика",
      "weapon": "Неизвестно",
      "source": "OSINT, местные СМИ",
      "details": "Морской порт в оккупированной Керчи является одним из главных логистических узлов для переброски военной техники, боеприпасов и топлива на Крымский полуостров. Инфраструктура порта активно используется российской армией для снабжения своей группировки на юге Украины. В результате точечного удара были поражены портовые сооружения и складские помещения. Выведение из строя этих объектов усложняет оккупантам морскую логистику и ослабляет их возможности по быстрому восполнению резервов через Керченский пролив."
    },
    "uk": {
      "region": "АР Крим, Керч",
      "target": "Морський порт Керч",
      "category": "ВПК / Логістика",
      "weapon": "Невідомо",
      "source": "OSINT, місцеві ЗМІ",
      "details": "Морський порт в окупованій Керчі є одним із головних логістичних вузлів для перекидання військової техніки, боєприпасів і палива на Кримський півострів. Інфраструктура порту активно використовується російською армією для постачання свого угруповання на півдні України. Внаслідок точкового удару було уражено портові споруди та складські приміщення. Виведення з ладу цих об'єктів ускладнює окупантам морську логістику та послаблює їхні можливості щодо швидкого поповнення резервів через Керченську протоку."
    },
    "en": {
      "region": "AR Crimea, Kerch",
      "target": "Kerch Sea Port",
      "category": "Military-Industrial Complex / Logistics",
      "weapon": "Unknown",
      "source": "OSINT, local media",
      "details": "The seaport in occupied Kerch is one of the main logistical hubs for the transfer of military equipment, ammunition, and fuel to the Crimean peninsula. The port's infrastructure is actively used by the Russian army to supply its forces in southern Ukraine. A targeted strike hit port facilities and warehouses. Disabling these facilities complicates the occupiers' maritime logistics and weakens their ability to quickly replenish reserves through the Kerch Strait."
    },
    "id": 190,
    "images": []
  },
  {
    "date": "06.07.2026",
    "lat": 46.7753,
    "lng": 36.7469,
    "distance": 169,
    "ru": {
      "region": "Запорожская область, Бердянск",
      "target": "Завод «Азовкабель»",
      "category": "ВПК",
      "weapon": "Неизвестно",
      "source": "OSINT",
      "details": "Завод «Азовкабель» во временно оккупированном Бердянске был превращен российскими войсками в укрепленную военную базу и ремонтную зону для армейской техники. Обширные производственные площади использовались оккупантами для скрытного размещения личного состава, складирования боеприпасов и восстановления поврежденных в боях машин. Мощный удар по территории завода привел к детонации боекомплекта и уничтожению значительного количества военной техники. Это успешное поражение лишило противника важной тыловой ремонтной базы на Запорожском направлении."
    },
    "uk": {
      "region": "Запорізька область, Бердянськ",
      "target": "Завод «Азовкабель»",
      "category": "ВПК",
      "weapon": "Невідомо",
      "source": "OSINT",
      "details": "Завод «Азовкабель» у тимчасово окупованому Бердянську був перетворений російськими військами на укріплену військову базу та ремонтну зону для армійської техніки. Великі виробничі площі використовувалися окупантами для прихованого розміщення особового складу, складування боєприпасів та відновлення пошкоджених у боях машин. Потужний удар по території заводу призвів до детонації боєкомплекту та знищення значної кількості військової техніки. Це успішне ураження позбавило противника важливої тилової ремонтної бази на Запорізькому напрямку."
    },
    "en": {
      "region": "Zaporizhzhia Oblast, Berdyansk",
      "target": "Azovkabel Factory",
      "category": "Military-Industrial Complex",
      "weapon": "Unknown",
      "source": "OSINT",
      "details": "The Azovkabel factory in temporarily occupied Berdyansk was turned into a fortified military base and repair zone for army equipment by Russian troops. The vast production areas were used by the occupiers to covertly house personnel, store ammunition, and restore battle-damaged vehicles. A powerful strike on the factory territory led to the detonation of ammunition and the destruction of a significant amount of military equipment. This successful hit deprived the enemy of an important rear repair base in the Zaporizhzhia direction."
    },
    "id": 191,
    "images": []
  },
  {
    "date": "06.07.2026",
    "lat": 59.6811,
    "lng": 28.3655,
    "distance": 928,
    "ru": {
      "region": "Ленинградская область, Усть-Луга",
      "target": "Морской порт Усть-Луга",
      "category": "Логистика / ВПК",
      "weapon": "Дрон",
      "source": "СБУ / ГУР МО, OSINT",
      "details": "Порт Усть-Луга в Ленинградской области — крупнейший морской порт на Балтике и важнейший транспортный хаб России для экспорта углеводородов. На территории порта расположены крупные газовые и нефтяные терминалы, приносящие миллиардные доходы в бюджет страны-агрессора. Атака ударными БПЛА привела к остановке работы ключевых терминалов и сильному пожару на объектах топливно-энергетического комплекса. Данная операция СБУ и ГУР МО стала не только экономическим ударом, но и продемонстрировала уязвимость стратегических портов РФ в глубоком тылу."
    },
    "uk": {
      "region": "Ленінградська область, Усть-Луга",
      "target": "Морський порт Усть-Луга",
      "category": "Логістика / ВПК",
      "weapon": "Дрон",
      "source": "СБУ / ГУР МО, OSINT",
      "details": "Порт Усть-Луга в Ленінградській області — найбільший морський порт на Балтиці та найважливіший транспортний хаб Росії для експорту вуглеводнів. На території порту розташовані великі газові та нафтові термінали, що приносять мільярдні доходи до бюджету країни-агресора. Атака ударними БПЛА призвела до зупинки роботи ключових терміналів і сильної пожежі на об'єктах паливно-енергетичного комплексу. Ця операція СБУ та ГУР МО стала не лише економічним ударом, а й продемонструвала вразливість стратегічних портів РФ у глибокому тилу."
    },
    "en": {
      "region": "Leningrad Oblast, Ust-Luga",
      "target": "Ust-Luga Sea Port",
      "category": "Logistics / Military-Industrial Complex",
      "weapon": "Drone",
      "source": "SBU / HUR MO, OSINT",
      "details": "The Ust-Luga port in the Leningrad Oblast is the largest seaport on the Baltic and Russia's most important transport hub for hydrocarbon exports. The port houses large gas and oil terminals that bring billions in revenue to the aggressor state's budget. The strike by attack UAVs led to the shutdown of key terminals and a severe fire at fuel and energy complex facilities. This joint operation by the SBU and HUR MO was not only an economic blow but also demonstrated the vulnerability of Russia's strategic ports deep in the rear."
    },
    "id": 192,
    "images": []
  },
  {
    "date": "06.07.2026",
    "lat": 58.7539,
    "lng": 29.5662,
    "distance": 814,
    "ru": {
      "region": "Ленинградская область, Лужский район",
      "target": "Лужский артиллерийский полигон",
      "category": "Военный объект",
      "weapon": "Дрон",
      "source": "OSINT",
      "details": "Лужский артиллерийский полигон (33-й полигон) является одним из главных центров боевой подготовки войск Западного военного округа РФ. Здесь проходят слаживание артиллерийские и ракетные подразделения перед отправкой на фронт, а также тестируются новые образцы вооружений. Точный удар беспилотников по территории полигона пришелся по скоплению личного состава и техники противника. Поражение этого объекта нарушает графики подготовки резервов и наносит существенный урон боеспособности подразделений, готовящихся к переброске в Украину."
    },
    "uk": {
      "region": "Ленінградська область, Лузький район",
      "target": "Лузький артилерійський полігон",
      "category": "Військовий об'єкт",
      "weapon": "Дрон",
      "source": "OSINT",
      "details": "Лузький артилерійський полігон (33-й полігон) є одним із головних центрів бойової підготовки військ Західного військового округу РФ. Тут проходять злагодження артилерійські та ракетні підрозділи перед відправкою на фронт, а також тестуються нові зразки озброєнь. Точний удар безпілотників по території полігону припав на скупчення особового складу та техніки противника. Ураження цього об'єкта порушує графіки підготовки резервів і завдає суттєвої шкоди боєздатності підрозділів, що готуються до перекидання в Україну."
    },
    "en": {
      "region": "Leningrad Oblast, Luzhsky District",
      "target": "Luzhsky Artillery Range",
      "category": "Military Facility",
      "weapon": "Drone",
      "source": "OSINT",
      "details": "The Luzhsky artillery range (33rd range) is one of the main combat training centers for the forces of Russia's Western Military District. It is here that artillery and missile units undergo combat coordination before being sent to the front, and new types of weapons are tested. A precise drone strike on the range hit a concentration of enemy personnel and equipment. The destruction of this facility disrupts the training schedules of reserves and inflicts significant damage on the combat readiness of units preparing for deployment to Ukraine."
    },
    "id": 193,
    "images": []
  },
  {
    "date": "06.07.2026",
    "lat": 58.73,
    "lng": 29.84,
    "distance": 809,
    "ru": {
      "region": "Ленинградская область, Луга",
      "target": "ППД 26-й ракетной бригады",
      "category": "Военный объект",
      "weapon": "Дрон",
      "source": "Силы Обороны Украины, OSINT",
      "details": "В городе Луга Ленинградской области располагается пункт постоянной дислокации 26-й ракетной бригады (в/ч 54006) сухопутных войск РФ. На вооружении этой бригады стоят оперативно-тактические ракетные комплексы «Искандер», которые регулярно используются для террористических ударов по мирным городам и инфраструктуре Украины. Атака Сил Обороны по месту базирования бригады была направлена на уничтожение пусковых установок, складов с ракетами и обслуживающего персонала. Данная операция имеет важнейшее стратегическое значение для снижения ракетного потенциала врага и защиты украинских населенных пунктов."
    },
    "uk": {
      "region": "Ленінградська область, Луга",
      "target": "ППД 26-ї ракетної бригади",
      "category": "Військовий об'єкт",
      "weapon": "Дрон",
      "source": "Сили Оборони України, OSINT",
      "details": "У місті Луга Ленінградської області розташований пункт постійної дислокації 26-ї ракетної бригади (в/ч 54006) сухопутних військ РФ. На озброєнні цієї бригади стоять оперативно-тактичні ракетні комплекси «Іскандер», які регулярно використовуються для терористичних ударів по мирних містах та інфраструктурі України. Атака Сил Оборони по місцю базування бригади була спрямована на знищення пускових установок, складів із ракетами та обслуговуючого персоналу. Ця операція має найважливіше стратегічне значення для зниження ракетного потенціалу ворога та захисту українських населених пунктів."
    },
    "en": {
      "region": "Leningrad Oblast, Luga",
      "target": "Base of the 26th Missile Brigade",
      "category": "Military Facility",
      "weapon": "Drone",
      "source": "Ukrainian Defense Forces, OSINT",
      "details": "The city of Luga in the Leningrad Oblast houses the permanent deployment point of the 26th Missile Brigade (Military Unit 54006) of the Russian Ground Forces. This brigade is armed with Iskander operational-tactical missile systems, which are regularly used for terrorist strikes on peaceful cities and infrastructure in Ukraine. The Defense Forces' attack on the brigade's base was aimed at destroying launchers, missile depots, and maintenance personnel. This operation is of vital strategic importance in reducing the enemy's missile potential and protecting Ukrainian settlements."
    },
    "id": 194,
    "images": []
  },
  {
    "date": "06.07.2026",
    "lat": 55.0417,
    "lng": 73.3056,
    "distance": 2519,
    "ru": {
      "region": "Омская область, Омск",
      "target": "Омский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "source": "Силы Обороны Украины",
      "details": "Омский нефтеперерабатывающий завод — это гигантское предприятие, являющееся крупнейшим НПЗ в России по объему переработки нефти (свыше 21 млн тонн в год). Завод выступает критически важным звеном в производстве бензина, авиационного керосина и дизельного топлива, снабжая как гражданский сектор, так и огромную долю военной машины РФ. Точный и дальнобойный удар украинских сил (на расстоянии более 2200 км) по Омскому НПЗ вызвал масштабный пожар на технологических установках первичной переработки. Поражение столь важного и глубоко расположенного объекта в Сибири наносит колоссальный ущерб российской экономике и существенно усложняет обеспечение топливом оккупационных войск."
    },
    "uk": {
      "region": "Омська область, Омськ",
      "target": "Омський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "source": "Сили Оборони України",
      "details": "Омський нафтопереробний завод — це гігантське підприємство, що є найбільшим НПЗ у Росії за обсягом переробки нафти (понад 21 млн тонн на рік). Завод виступає критично важливою ланкою у виробництві бензину, авіаційного гасу та дизельного палива, постачаючи як цивільний сектор, так і величезну частку військової машини РФ. Точний і далекобійний удар українських сил (на відстані понад 2200 км) по Омському НПЗ викликав масштабну пожежу на технологічних установках первинної переробки. Ураження такого важливого і глибоко розташованого об'єкта в Сибіру завдає колосальної шкоди російській економіці та суттєво ускладнює забезпечення паливом окупаційних військ."
    },
    "en": {
      "region": "Omsk Oblast, Omsk",
      "target": "Omsk Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "source": "Ukrainian Defense Forces",
      "details": "The Omsk Oil Refinery is a massive enterprise, being the largest oil refinery in Russia by refining volume (over 21 million tons per year). The plant acts as a critical link in the production of gasoline, aviation kerosene, and diesel fuel, supplying both the civilian sector and a huge portion of the Russian military machine. A precise and long-range strike by Ukrainian forces (at a distance of over 2200 km) on the Omsk Refinery caused a large-scale fire at primary processing technological units. Striking such an important and deeply located target in Siberia inflicts colossal damage on the Russian economy and significantly complicates the supply of fuel to the occupying forces."
    },
    "id": 195,
    "images": [
      "video/070626 omsk.MP4",
      "video/070626 omsk1.mp4",
      "video/070626 omsk2.mp4",
      "video/omsk-60726.MP4"
    ]
  },
  {
    "date": "07.07.2026",
    "lat": 50.6165,
    "lng": 36.5478,
    "distance": 73,
    "ru": {
      "region": "Белгородская область, Белгород",
      "target": "Белгородское ЛПУМГ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Белгородское линейное производственное управление магистральных газопроводов является важнейшим узлом газотранспортной системы региона. Оно отвечает за распределение и бесперебойную подачу газа как гражданским, так и промышленным потребителям, включая предприятия ВПК. Поражение такого объекта нарушает логистику энергоносителей, усложняя работу местной промышленности. Кроме того, пожары на газовой инфраструктуре требуют значительных ресурсов для ликвидации и наносят ощутимый экономический ущерб государству-агрессору.",
      "source": "СМИ, OSINT"
    },
    "uk": {
      "region": "Бєлгородська область, Бєлгород",
      "target": "Бєлгородське ЛВУМГ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Бєлгородське лінійне виробниче управління магістральних газопроводів є найважливішим вузлом газотранспортної системи регіону. Воно відповідає за розподіл і безперебійне постачання газу як цивільним, так і промисловим споживачам, включаючи підприємства ВПК. Ураження такого об'єкта порушує логістику енергоносіїв, ускладнюючи роботу місцевої промисловості. Крім того, пожежі на газовій інфраструктурі вимагають значних ресурсів для ліквідації та завдають відчутних економічних збитків державі-агресору.",
      "source": "ЗМІ, OSINT"
    },
    "en": {
      "region": "Belgorod Oblast, Belgorod",
      "target": "Belgorod LPU MG (Gas Pipeline Admin)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "The Belgorod linear production department of main gas pipelines is a crucial node in the region's gas transmission system. It is responsible for the distribution and uninterrupted supply of gas to both civilian and industrial consumers, including military-industrial complex enterprises. Striking such a facility disrupts energy logistics, complicating the operation of local industry. Furthermore, fires at gas infrastructure facilities require significant resources to extinguish and cause substantial economic damage to the aggressor state.",
      "source": "Media, OSINT"
    },
    "id": 196,
    "images": []
  },
  {
    "date": "07.07.2026",
    "lat": 45.45,
    "lng": 36.5,
    "distance": 285,
    "ru": {
      "region": "Крым, Керчь (акватория)",
      "target": "Судно / Морская цель",
      "category": "Флот",
      "weapon": "БЭК/Дрон",
      "details": "Акватория севернее Керчи является критически важной для российской военной логистики. Через этот район проходят маршруты снабжения оккупационной группировки в Крыму и на юге Украины. Поражение морских целей в этой зоне ограничивает возможности Черноморского флота РФ и усложняет транспортировку топлива и боеприпасов. Подобные инциденты также создают дополнительное напряжение для российских сил ПВО и береговой охраны, вынуждая их отвлекать ресурсы на защиту морских путей.",
      "source": "СМИ, OSINT"
    },
    "uk": {
      "region": "Крим, Керч (акваторія)",
      "target": "Судно / Морська ціль",
      "category": "Флот",
      "weapon": "БЕК/Дрон",
      "details": "Акваторія на північ від Керчі є критично важливою для російської військової логістики. Через цей район проходять маршрути постачання окупаційного угруповання в Криму та на півдні України. Ураження морських цілей у цій зоні обмежує можливості Чорноморського флоту РФ та ускладнює транспортування палива й боєприпасів. Подібні інциденти також створюють додаткову напругу для російських сил ППО та берегової охорони, змушуючи їх відволікати ресурси на захист морських шляхів.",
      "source": "ЗМІ, OSINT"
    },
    "en": {
      "region": "Crimea, Kerch (waters)",
      "target": "Vessel / Naval Target",
      "category": "Fleet",
      "weapon": "USV/Drone",
      "details": "The waters north of Kerch are critically important for Russian military logistics. Supply routes for the occupying forces in Crimea and southern Ukraine pass through this area. Striking naval targets in this zone limits the capabilities of the Russian Black Sea Fleet and complicates the transportation of fuel and ammunition. Such incidents also create additional strain on Russian air defense and coast guard forces, forcing them to divert resources to protect sea lanes.",
      "source": "Media, OSINT"
    },
    "id": 197,
    "images": []
  },
  {
    "date": "07.07.2026",
    "lat": 54.7312,
    "lng": 35.9719,
    "distance": 432,
    "ru": {
      "region": "Калужская область, Полотняный Завод",
      "target": "Мини-НПЗ «Первый Завод»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "«Первый Завод» — крупнейшее нефтеперерабатывающее предприятие Калужской области. Завод специализируется на переработке товарной нефти и газового конденсата, производя дизельное топливо, мазут и другие нефтепродукты. Продукция предприятия активно используется для обеспечения нужд российской армии, в том числе для заправки военной техники. Регулярные удары по таким мини-НПЗ снижают общие мощности переработки в РФ, создавая дефицит топлива на внутреннем рынке и нарушая ритмичность военных поставок. Успешная атака вызвала масштабный пожар, надолго остановивший технологический процесс.",
      "source": "СБС, Генштаб ВСУ, ГУР"
    },
    "uk": {
      "region": "Калузька область, Полотняний Завод",
      "target": "Міні-НПЗ «Первый Завод»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "«Первый Завод» — найбільше нафтопереробне підприємство Калузької області. Завод спеціалізується на переробці товарної нафти та газового конденсату, виробляючи дизельне паливо, мазут та інші нафтопродукти. Продукція підприємства активно використовується для забезпечення потреб російської армії, зокрема для заправки військової техніки. Регулярні удари по таких міні-НПЗ знижують загальні потужності переробки в РФ, створюючи дефіцит палива на внутрішньому ринку та порушуючи ритмічність військових поставок. Успішна атака спричинила масштабну пожежу, що надовго зупинила технологічний процес.",
      "source": "СБС, Генштаб ЗСУ, ГУР"
    },
    "en": {
      "region": "Kaluga Oblast, Polotnyaniy Zavod",
      "target": "Mini-Refinery \"Perviy Zavod\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "\"Perviy Zavod\" is the largest oil refinery in the Kaluga region. The plant specializes in processing commercial oil and gas condensate, producing diesel fuel, fuel oil, and other petroleum products. The enterprise's output is actively used to meet the needs of the Russian army, including fueling military equipment. Regular strikes on such mini-refineries reduce overall refining capacity in the Russian Federation, creating a fuel shortage in the domestic market and disrupting the rhythm of military supplies. The successful attack caused a large-scale fire, halting the technological process for a long time.",
      "source": "SBS, AFU General Staff, GUR"
    },
    "id": 198,
    "images": [
      "images/miniNPZ-070726.jpg"
    ]
  },
  {
    "date": "07.07.2026",
    "lat": 56.4434,
    "lng": 38.2294,
    "distance": 656,
    "ru": {
      "region": "Московская область, Краснозаводск",
      "target": "Краснозаводский химический завод",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Краснозаводский химический завод (КХЗ) — одно из старейших и важнейших предприятий оборонно-промышленного комплекса России. Завод специализируется на выпуске боеприпасов, сигнальных и осветительных средств, а также компонентов для ракетного вооружения. Продукция КХЗ напрямую поставляется на фронт для использования оккупационными войсками. Удар по производственным цехам завода нарушает цепочки поставок взрывчатых веществ и боеприпасов. Это снижает огневую мощь российской артиллерии и авиации, оказывая непосредственное влияние на боеспособность армии РФ.",
      "source": "СМИ, OSINT"
    },
    "uk": {
      "region": "Московська область, Краснозаводськ",
      "target": "Краснозаводський хімічний завод",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Краснозаводський хімічний завод (КХЗ) — одне з найстаріших і найважливіших підприємств оборонно-промислового комплексу Росії. Завод спеціалізується на випуску боєприпасів, сигнальних і освітлювальних засобів, а також компонентів для ракетного озброєння. Продукція КХЗ безпосередньо постачається на фронт для використання окупаційними військами. Удар по виробничих цехах заводу порушує ланцюжки постачання вибухових речовин і боєприпасів. Це знижує вогневу міць російської артилерії та авіації, безпосередньо впливаючи на боєздатність армії РФ.",
      "source": "ЗМІ, OSINT"
    },
    "en": {
      "region": "Moscow Oblast, Krasnozavodsk",
      "target": "Krasnozavodsk Chemical Plant",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "The Krasnozavodsk Chemical Plant (KhZ) is one of the oldest and most important enterprises of Russia's military-industrial complex. The plant specializes in the production of ammunition, signal and illumination devices, as well as components for rocket armaments. KhZ products are supplied directly to the front for use by the occupying forces. Striking the plant's production workshops disrupts the supply chains for explosives and ammunition. This reduces the firepower of Russian artillery and aviation, directly impacting the combat capability of the Russian army.",
      "source": "Media, OSINT"
    },
    "id": 199,
    "images": [
      "images/photo1.jpg"
    ]
  },
  {
    "date": "07.07.2026",
    "lat": 55.3801,
    "lng": 37.5495,
    "distance": 530,
    "ru": {
      "region": "Московская область, Климовск",
      "target": "ЦНИИТОЧМАШ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Центральный научно-исследовательский институт точного машиностроения (ЦНИИТОЧМАШ) в Климовске — ключевой центр разработки и испытаний стрелкового оружия, экипировки (включая комплект «Ратник») и артиллерийских систем. Именно здесь проектируются новые виды вооружений, которые затем массово применяются российской армией в войне против Украины. Институт обладает уникальной испытательной базой и научно-техническим потенциалом. Удар по ЦНИИТОЧМАШ не только наносит физический урон лабораториям и цехам, но и тормозит перспективные разработки в сфере ВПК, лишая российскую пехоту современных технологических решений.",
      "source": "СМИ, OSINT"
    },
    "uk": {
      "region": "Московська область, Клімовськ",
      "target": "ЦНДІТОЧМАШ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Центральний науково-дослідний інститут точного машинобудування (ЦНДІТОЧМАШ) у Клімовську — ключовий центр розробки та випробувань стрілецької зброї, екіпіровки (включаючи комплект «Ратнік») та артилерійських систем. Саме тут проєктуються нові види озброєнь, які згодом масово застосовуються російською армією у війні проти України. Інститут володіє унікальною випробувальною базою та науково-технічним потенціалом. Удар по ЦНДІТОЧМАШ не лише завдає фізичної шкоди лабораторіям і цехам, а й гальмує перспективні розробки у сфері ВПК, позбавляючи російську піхоту сучасних технологічних рішень.",
      "source": "ЗМІ, OSINT"
    },
    "en": {
      "region": "Moscow Oblast, Klimovsk",
      "target": "TsNIITochMash",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "The Central Research Institute of Precision Machine Building (TsNIITochMash) in Klimovsk is a key center for the development and testing of small arms, equipment (including the \"Ratnik\" combat gear), and artillery systems. It is here that new types of weapons are designed, which are then used en masse by the Russian army in the war against Ukraine. The institute has a unique testing base and scientific and technical potential. A strike on TsNIITochMash not only causes physical damage to laboratories and workshops but also slows down advanced developments in the military-industrial complex, depriving Russian infantry of modern technological solutions.",
      "source": "Media, OSINT"
    },
    "id": 200,
    "images": [
      "video/video2_opt.mp4"
    ]
  },
  {
    "date": "07.07.2026",
    "lat": 56.262,
    "lng": 37.9762,
    "distance": 631,
    "ru": {
      "region": "Московская область, Хотьково",
      "target": "ЦНИИСМ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Центральный научно-исследовательский институт специального машиностроения (ЦНИИСМ) в Хотьково является ведущим российским разработчиком конструкций из современных композитных материалов для ракетно-космической техники и бронетанкового вооружения. Институт участвует в создании элементов для ракетных комплексов, в том числе межконтинентальных баллистических ракет и систем ПВО. Это предприятие критически важно для высокотехнологичной части российского ВПК, поскольку композитные материалы определяют вес, прочность и дальность полета современных ракет. Успешная атака дронов на этот объект замедляет производство современных систем вооружения и наносит невосполнимый ущерб стратегическим военным программам РФ.",
      "source": "СМИ, OSINT"
    },
    "uk": {
      "region": "Московська область, Хотьково",
      "target": "ЦНДІСМ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Центральний науково-дослідний інститут спеціального машинобудування (ЦНДІСМ) у Хотьково є провідним російським розробником конструкцій із сучасних композитних матеріалів для ракетно-космічної техніки та бронетанкового озброєння. Інститут бере участь у створенні елементів для ракетних комплексів, зокрема міжконтинентальних балістичних ракет і систем ППО. Це підприємство є критично важливим для високотехнологічної частини російського ВПК, оскільки композитні матеріали визначають вагу, міцність і дальність польоту сучасних ракет. Успішна атака дронів на цей об'єкт уповільнює виробництво сучасних систем озброєння та завдає непоправної шкоди стратегічним військовим програмам РФ.",
      "source": "ЗМІ, OSINT"
    },
    "en": {
      "region": "Moscow Oblast, Khotkovo",
      "target": "TsNIISM",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "The Central Research Institute of Special Machine Building (TsNIISM) in Khotkovo is a leading Russian developer of structures made of advanced composite materials for aerospace equipment and armored vehicles. The institute participates in the creation of components for missile systems, including intercontinental ballistic missiles and air defense systems. This enterprise is critically important for the high-tech segment of the Russian military-industrial complex, as composite materials determine the weight, strength, and flight range of modern missiles. A successful drone attack on this facility slows down the production of modern weapon systems and causes irreparable damage to Russia's strategic military programs.",
      "source": "Media, OSINT"
    },
    "id": 201,
    "images": [
      "video/video3_opt.mp4"
    ]
  },
  {
    "date": "07.07.2026",
    "lat": 46,
    "lng": 37,
    "distance": 249,
    "ru": {
      "region": "Азовское море (акватория)",
      "target": "8 танкеров теневого флота РФ",
      "category": "Флот / Топливная логистика",
      "weapon": "Дрон",
      "details": "Теневой флот РФ является главным инструментом обхода международных санкций, позволяющим Москве продолжать экспортировать нефть и нефтепродукты, финансируя тем самым ведение агрессивной войны. Выявление и поражение сразу 8 танкеров (среди которых «Венера-3», «Санар-1», «Санар-17», «Климена», «Тети», «Алексей Саврасов», «Пенелопа») дедвейтом по 7000 тонн каждый — это колоссальный удар по теневой логистике. Операция в Азовском море не только уничтожает дорогостоящие суда и грузы, но и посылает четкий сигнал покупателям российской нефти о высоких рисках. Потеря таких судов существенно усложняет экспорт углеводородов из портов Азово-Черноморского бассейна, снижая приток валюты в военный бюджет РФ.",
      "source": "ВМС ВСУ, СМИ, OSINT"
    },
    "uk": {
      "region": "Азовське море (акваторія)",
      "target": "8 танкерів тіньового флоту РФ",
      "category": "Флот / Паливна логістика",
      "weapon": "Дрон",
      "details": "Тіньовий флот РФ є головним інструментом обходу міжнародних санкцій, що дозволяє Москві продовжувати експортувати нафту й нафтопродукти, фінансуючи тим самим ведення агресивної війни. Виявлення та ураження відразу 8 танкерів (серед яких «Венера-3», «Санар-1», «Санар-17», «Климена», «Теті», «Алексей Саврасов», «Пенелопа») дедвейтом по 7000 тонн кожен — це колосальний удар по тіньовій логістиці. Операція в Азовському морі не лише знищує дорогі судна і вантажі, а й надсилає чіткий сигнал покупцям російської нафти про високі ризики. Втрата таких суден суттєво ускладнює експорт вуглеводнів з портів Азово-Чорноморського басейну, знижуючи приплив валюти у військовий бюджет РФ.",
      "source": "ВМС ЗСУ, ЗМІ, OSINT"
    },
    "en": {
      "region": "Sea of Azov (waters)",
      "target": "8 Shadow Fleet Tankers",
      "category": "Fleet / Fuel Logistics",
      "weapon": "Drone",
      "details": "The Russian shadow fleet is the main tool for bypassing international sanctions, allowing Moscow to continue exporting oil and petroleum products, thereby financing its aggressive war. The identification and targeting of 8 tankers simultaneously (including \"Venera-3\", \"Sanar-1\", \"Sanar-17\", \"Klimena\", \"Teti\", \"Aleksey Savrasov\", and \"Penelopa\"), each with a deadweight of 7,000 tons, is a colossal blow to this shadow logistics network. The operation in the Sea of Azov not only destroys expensive vessels and cargo but also sends a clear signal to buyers of Russian oil about the high risks involved. The loss of such vessels significantly complicates hydrocarbon exports from the ports of the Azov-Black Sea basin, reducing foreign currency inflows into the Russian military budget.",
      "source": "Ukrainian Navy, Media, OSINT"
    },
    "id": 202,
    "images": [
      "video/tenevoy_flot2_opt.mp4",
      "video/tenevoy flot1-070726.mp4"
    ]
  },
  {
    "date": "07.07.2026",
    "lat": 44.7558,
    "lng": 38.7589,
    "distance": 441,
    "ru": {
      "region": "Краснодарский край, Северский район",
      "target": "Компрессорная станция «Краснодарская»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Компрессорная станция «Краснодарская» — стратегически важный инфраструктурный объект газотранспортной сети на юге России. Станция обеспечивает поддержание давления в магистральных газопроводах, включая маршруты, по которым осуществляется экспорт газа (в частности, «Голубой поток»). Выведение из строя компрессорных агрегатов приводит к падению давления в системе, срыву поставок и огромным финансовым потерям. Удар дронов по таким объектам демонстрирует уязвимость российской нефтегазовой инфраструктуры в глубоком тылу и способность Сил обороны Украины системно разрушать экономическую базу агрессора.",
      "source": "СМИ, OSINT"
    },
    "uk": {
      "region": "Краснодарський край, Сіверський район",
      "target": "Компресорна станція «Краснодарська»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Компресорна станція «Краснодарська» — стратегічно важливий інфраструктурний об'єкт газотранспортної мережі на півдні Росії. Станція забезпечує підтримання тиску в магістральних газопроводах, включаючи маршрути, якими здійснюється експорт газу (зокрема, «Блакитний потік»). Виведення з ладу компресорних агрегатів призводить до падіння тиску в системі, зриву поставок і величезних фінансових втрат. Удар дронів по таких об'єктах демонструє вразливість російської нафтогазової інфраструктури в глибокому тилу і здатність Сил оборони України системно руйнувати економічну базу агресора.",
      "source": "ЗМІ, OSINT"
    },
    "en": {
      "region": "Krasnodar Krai, Seversky District",
      "target": "Compressor Station \"Krasnodar\"",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "The \"Krasnodar\" compressor station is a strategically important infrastructure facility of the gas transmission network in southern Russia. The station ensures pressure maintenance in main gas pipelines, including routes used for gas exports (such as the Blue Stream). Taking compressor units out of service leads to a pressure drop in the system, supply disruptions, and massive financial losses. Drone strikes on such facilities demonstrate the vulnerability of Russian oil and gas infrastructure deep in the rear and the ability of the Ukrainian Defense Forces to systematically destroy the aggressor's economic base.",
      "source": "Media, OSINT"
    },
    "id": 203,
    "images": [
      "video/krasnodar_opt.mp4"
    ]
  },
  {
    "date": "08.07.2026",
    "lat": 45.4,
    "lng": 36.5,
    "distance": null,
    "ru": {
      "region": "Азовское море (акватория)",
      "target": "9 судов теневого флота (5 танкеров, 4 сухогруза)",
      "category": "Флот / Логистика",
      "weapon": "Дрон",
      "details": "В акватории Азовского моря и вблизи Крымского моста украинские ударные дроны атаковали скопление судов. Поражены 9 судов, среди которых 5 танкеров теневого флота РФ, нелегально перевозящих нефтепродукты, и 4 сухогруза. Подобные операции серьезно нарушают логистику оккупантов на юге и блокируют морские поставки топлива для нужд агрессора.",
      "source": "СБС, ВМС ВСУ, OSINT"
    },
    "uk": {
      "region": "Азовське море (акваторія)",
      "target": "9 суден тіньового флоту (5 танкерів, 4 суховантажі)",
      "category": "Флот / Логістика",
      "weapon": "Дрон",
      "details": "В акваторії Азовського моря та поблизу Кримського мосту українські ударні дрони атакували скупчення суден. Уражено 9 суден, серед яких 5 танкерів тіньового флоту РФ, що нелегально перевозять нафтопродукти, та 4 суховантажі. Подібні операції серйозно порушують логістику окупантів на півдні та блокують морські поставки пального для потреб агресора.",
      "source": "СБС, ВМС ЗСУ, OSINT"
    },
    "en": {
      "region": "Sea of Azov (waters)",
      "target": "9 shadow fleet vessels (5 tankers, 4 dry cargo ships)",
      "category": "Fleet / Logistics",
      "weapon": "Drone",
      "details": "In the Sea of Azov and near the Crimean Bridge, Ukrainian attack drones targeted a concentration of vessels. Nine ships were hit, including five Russian shadow fleet tankers illegally transporting petroleum products, and four dry cargo ships. Such operations seriously disrupt the occupiers' logistics in the south and block maritime fuel supplies for the aggressor's needs.",
      "source": "SBS, Ukrainian Navy, OSINT"
    },
    "id": 204
  },
  {
    "date": "08.07.2026",
    "lat": 51.361661,
    "lng": 42.190028,
    "distance": null,
    "ru": {
      "region": "Воронежская область, Борисоглебск",
      "target": "Военный аэродром «Борисоглебск»",
      "category": "Аэродром",
      "weapon": "Дрон",
      "details": "Военный аэродром Борисоглебск активно используется авиацией ВКС РФ для нанесения бомбовых ударов по территории Украины. На базе размещаются истребители-бомбардировщики Су-34, многоцелевые Су-35, Су-30СМ. В результате атаки дронов на территории авиабазы прогремели взрывы. Поражение таких объектов существенно снижает боевые возможности российской авиации и интенсивность ударов КАБами.",
      "source": "ССО, OSINT"
    },
    "uk": {
      "region": "Воронезька область, Борисоглєбськ",
      "target": "Військовий аеродром «Борисоглєбськ»",
      "category": "Аеродром",
      "weapon": "Дрон",
      "details": "Військовий аеродром Борисоглєбськ активно використовується авіацією ПКС РФ для нанесення бомбових ударів по території України. На базі розміщуються винищувачі-бомбардувальники Су-34, багатоцільові Су-35, Су-30СМ. Внаслідок атаки дронів на території авіабази пролунали вибухи. Ураження таких об'єктів суттєво знижує бойові можливості російської авіації та інтенсивність ударів КАБами.",
      "source": "ССО, OSINT"
    },
    "en": {
      "region": "Voronezh Oblast, Borisoglebsk",
      "target": "Borisoglebsk Military Airbase",
      "category": "Airbase",
      "weapon": "Drone",
      "details": "The Borisoglebsk military airfield is actively used by the Russian Aerospace Forces to launch bomb strikes on Ukrainian territory. Su-34 fighter-bombers, multirole Su-35s, and Su-30SMs are stationed at the base. As a result of a drone attack, explosions rocked the airbase territory. Striking such targets significantly reduces the combat capabilities of Russian aviation and the intensity of glide bomb attacks.",
      "source": "SSO, OSINT"
    },
    "id": 205,
    "image": "images/borisoglebsk1.jpg"
  },
  {
    "date": "08.07.2026",
    "lat": 51.456835,
    "lng": 45.940629,
    "distance": null,
    "ru": {
      "region": "Саратов",
      "target": "Саратовский НПЗ",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Саратовский нефтеперерабатывающий завод входит в число важнейших предприятий нефтегазового сектора России. Целью удара стала установка изомеризации пентан-гексановой фракции. Успешное поражение таких высокотехнологичных установок надолго выводит мощности завода из строя, нанося значительный ущерб и снижая объемы производства топлива для нужд российской армии.",
      "source": "ГУР, OSINT"
    },
    "uk": {
      "region": "Саратов",
      "target": "Саратовський НПЗ",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Саратовський нафтопереробний завод входить до числа найважливіших підприємств нафтогазового сектору Росії. Ціллю удару стала установка ізомеризації пентан-гексанової фракції. Успішне ураження таких високотехнологічних установок надовго виводить потужності заводу з ладу, завдаючи значної шкоди та знижуючи обсяги виробництва пального для потреб російської армії.",
      "source": "ГУР, OSINT"
    },
    "en": {
      "region": "Saratov",
      "target": "Saratov Oil Refinery",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "The Saratov Oil Refinery is among the most important enterprises in Russia's oil and gas sector. The target of the strike was the pentane-hexane fraction isomerization unit. Successfully hitting such high-tech units disables the plant's capacities for a long time, causing significant damage and reducing fuel production volumes for the needs of the Russian army.",
      "source": "GUR, OSINT"
    },
    "id": 206,
    "image": "video/saratov-2.MP4"
  },
  {
    "date": "08.07.2026",
    "lat": 55.604904,
    "lng": 51.955749,
    "distance": null,
    "ru": {
      "region": "Республика Татарстан, Нижнекамск",
      "target": "Нижнекамский НПЗ (ТАИФ-НК)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Одно из крупнейших нефтехимических предприятий РФ («Нижнекамскнефтехим»), расположенное на удалении более 1000 км от границы. Атаке подверглась установка первичной переработки нефти ЕЛОУ-АВТ-7. Вывод из строя данного комплекса парализует значительную часть производственного цикла, нанося мощный удар по доходам агрессора и демонстрируя растущие возможности украинских дальнобойных систем.",
      "source": "ГУР, СБУ, OSINT"
    },
    "uk": {
      "region": "Республіка Татарстан, Нижньокамськ",
      "target": "Нижньокамський НПЗ (ТАІФ-НК)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Одне з найбільших нафтохімічних підприємств РФ («Нижньокамськнафтохім»), розташоване на відстані понад 1000 км від кордону. Атаці піддалася установка первинної переробки нафти ЕЛОУ-АВТ-7. Виведення з ладу цього комплексу паралізує значну частину виробничого циклу, завдаючи потужного удару по доходах агресора та демонструючи зростаючі можливості українських далекобійних систем.",
      "source": "ГУР, СБУ, OSINT"
    },
    "en": {
      "region": "Republic of Tatarstan, Nizhnekamsk",
      "target": "Nizhnekamsk Refinery (TAIF-NK)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "One of the largest petrochemical enterprises in the Russian Federation (\"Nizhnekamskneftekhim\"), located more than 1000 km from the border. The ELOU-AVT-7 primary oil processing unit was attacked. Disabling this complex paralyzes a significant part of the production cycle, dealing a powerful blow to the aggressor's revenues and demonstrating the growing capabilities of Ukrainian long-range systems.",
      "source": "GUR, SBU, OSINT"
    },
    "id": 207,
    "image": "video/nizhnekamsk-4.mp4"
  },
  {
    "date": "08.07.2026",
    "lat": 47.1,
    "lng": 39.4,
    "distance": null,
    "ru": {
      "region": "Ростовская область",
      "target": "2 танкера",
      "category": "Флот / Логистика",
      "weapon": "Дрон",
      "details": "Местные власти сообщили об атаке на два танкера. Удары по наливным судам противника направлены на разрушение логистических цепочек доставки нефтепродуктов. Танкерный флот РФ активно используется как для экспорта в обход санкций, так и для обеспечения топливом южной группировки оккупационных войск.",
      "source": "СМИ РФ, OSINT"
    },
    "uk": {
      "region": "Ростовська область",
      "target": "2 танкери",
      "category": "Флот / Логістика",
      "weapon": "Дрон",
      "details": "Місцева влада повідомила про атаку на два танкери. Удари по наливних суднах противника спрямовані на руйнування логістичних ланцюжків доставки нафтопродуктів. Танкерний флот РФ активно використовується як для експорту в обхід санкцій, так і для забезпечення паливом південного угруповання окупаційних військ.",
      "source": "ЗМІ РФ, OSINT"
    },
    "en": {
      "region": "Rostov Oblast",
      "target": "2 tankers",
      "category": "Fleet / Logistics",
      "weapon": "Drone",
      "details": "Local authorities reported an attack on two tankers. Strikes on enemy liquid cargo vessels are aimed at destroying the logistical chains of petroleum product delivery. The Russian tanker fleet is actively used both for export circumventing sanctions and for supplying fuel to the southern group of occupying forces.",
      "source": "Russian Media, OSINT"
    },
    "id": 208,
    "image": "images/tanker-rosnjv.jpg"
  },
  {
    "date": "08.07.2026",
    "lat": 54.906976,
    "lng": 56.167804,
    "distance": null,
    "ru": {
      "region": "Республика Башкортостан, Уфа",
      "target": "ЛПДС «Черкассы-ПП»",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "ЛПДС «Черкассы-ПП» является важнейшим узлом трубопроводного транспорта и крупным хранилищем нефтепродуктов в районе Уфы. Рекордный удар на расстояние свыше 1400 км поразил резервуарный парк, что вызвало масштабный пожар. Уничтожение таких баз хранения нарушает стабильность распределения топлива внутри России.",
      "source": "СБУ, OSINT"
    },
    "uk": {
      "region": "Республіка Башкортостан, Уфа",
      "target": "ЛВДС «Черкаси-ПП»",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "ЛВДС «Черкаси-ПП» є найважливішим вузлом трубопровідного транспорту та великим сховищем нафтопродуктів у районі Уфи. Рекордний удар на відстань понад 1400 км вразив резервуарний парк, що викликало масштабну пожежу. Знищення таких баз зберігання порушує стабільність розподілу пального всередині Росії.",
      "source": "СБУ, OSINT"
    },
    "en": {
      "region": "Republic of Bashkortostan, Ufa",
      "target": "LPDS \"Cherkassy-PP\"",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "LPDS \"Cherkassy-PP\" is a crucial pipeline transport hub and a large storage facility for petroleum products in the Ufa area. A record strike at a distance of over 1400 km hit the tank farm, causing a large-scale fire. The destruction of such storage bases disrupts the stability of fuel distribution within Russia.",
      "source": "SBU, OSINT"
    },
    "id": 209,
    "image": "video/ufa1.mp4"
  },
  {
    "date": "09.07.2026",
    "lat": 45.4625,
    "lng": 36.64018,
    "distance": null,
    "ru": {
      "region": "Азовское море (акватория)",
      "target": "14 судов обеспечения РФ",
      "category": "Флот / Логистика",
      "weapon": "Дрон / БЭК",
      "details": "Масштабная операция по ликвидации теневого флота РФ. Сервис NASA FIRMS зафиксировал мощные термические аномалии. Поражены 14 судов: 12 танкеров (включая «Челси-6», «Аура», «Сонар-1», «Илья Репин»), один сухогруз и буксир. Систематические удары по морской логистике лишают оккупантов возможности безопасно снабжать крымскую группировку.",
      "source": "OSINT, NASA FIRMS"
    },
    "uk": {
      "region": "Азовське море (акваторія)",
      "target": "14 суден забезпечення РФ",
      "category": "Флот / Логістика",
      "weapon": "Дрон / БЕК",
      "details": "Масштабна операція з ліквідації тіньового флоту РФ. Сервіс NASA FIRMS зафіксував потужні термічні аномалії. Уражено 14 суден: 12 танкерів (включно з «Челси-6», «Аура», «Сонар-1», «Илья Репин»), один суховантаж та буксир. Систематичні удари по морській логістиці позбавляють окупантів можливості безпечно постачати кримське угруповання.",
      "source": "OSINT, NASA FIRMS"
    },
    "en": {
      "region": "Sea of Azov (waters)",
      "target": "14 Russian supply vessels",
      "category": "Fleet / Logistics",
      "weapon": "Drone / USV",
      "details": "A large-scale operation to eliminate the Russian shadow fleet. The NASA FIRMS service recorded powerful thermal anomalies. 14 vessels were hit: 12 tankers (including \"Chelsea-6\", \"Aura\", \"Sonar-1\", \"Ilya Repin\"), one dry cargo ship, and a tugboat. Systematic strikes on maritime logistics deprive the occupiers of the ability to safely supply their Crimean grouping.",
      "source": "OSINT, NASA FIRMS"
    },
    "id": 210
  },
  {
    "date": "09.07.2026",
    "lat": 47.1,
    "lng": 39.4,
    "distance": null,
    "ru": {
      "region": "Ростовская область, Азов",
      "target": "Портовая инфраструктура / Нефтебаза",
      "category": "Нефтегаз / Логистика",
      "weapon": "Дрон",
      "details": "Город Азов играет важную роль в перевалке нефтепродуктов из внутренних регионов РФ в Черное море. Атака на местные объекты направлена на паралич портовой инфраструктуры, через которую оккупанты осуществляют логистическое обеспечение своих войск на южном фронте.",
      "source": "СМИ РФ, OSINT"
    },
    "uk": {
      "region": "Ростовська область, Азов",
      "target": "Портова інфраструктура / Нафтобаза",
      "category": "Нафтогаз / Логістика",
      "weapon": "Дрон",
      "details": "Місто Азов відіграє важливу роль у перевалці нафтопродуктів із внутрішніх регіонів РФ у Чорне море. Атака на місцеві об'єкти спрямована на параліч портової інфраструктури, через яку окупанти здійснюють логістичне забезпечення своїх військ на південному фронті.",
      "source": "ЗМІ РФ, OSINT"
    },
    "en": {
      "region": "Rostov Oblast, Azov",
      "target": "Port infrastructure / Oil Depot",
      "category": "Oil & Gas / Logistics",
      "weapon": "Drone",
      "details": "The city of Azov plays an important role in the transshipment of petroleum products from the internal regions of the Russian Federation to the Black Sea. The attack on local facilities is aimed at paralyzing the port infrastructure through which the occupiers provide logistical support to their troops on the southern front.",
      "source": "Russian Media, OSINT"
    },
    "id": 211
  },
  {
    "date": "09.07.2026",
    "lat": 45.105562,
    "lng": 41.951864,
    "distance": null,
    "ru": {
      "region": "Ставропольский край, Михайловск",
      "target": "Нефтебаза",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "В городе Михайловск ударные дроны поразили крупную местную нефтебазу. Попадание привело к масштабному возгоранию резервуаров с ГСМ. Уничтожение топливных запасов в этом регионе усложняет снабжение российской военной техники на фронте и заставляет агрессора растягивать свои логистические линии.",
      "source": "OSINT"
    },
    "uk": {
      "region": "Ставропольський край, Михайловськ",
      "target": "Нафтобаза",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "У місті Михайловськ ударні дрони вразили велику місцеву нафтобазу. Влучання призвело до масштабного займання резервуарів з ПММ. Знищення паливних запасів у цьому регіоні ускладнює постачання російської військової техніки на фронті та змушує агресора розтягувати свої логістичні лінії.",
      "source": "OSINT"
    },
    "en": {
      "region": "Stavropol Krai, Mikhaylovsk",
      "target": "Oil Depot",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "In the city of Mikhaylovsk, attack drones hit a large local oil depot. The strike led to a massive fire in fuel and lubricant tanks. The destruction of fuel reserves in this region complicates the supply of Russian military equipment at the front and forces the aggressor to stretch its logistical lines.",
      "source": "OSINT"
    },
    "id": 212,
    "image": "video/miha1.mp4"
  },
  {
    "date": "09.07.2026",
    "lat": 56.85,
    "lng": 35.9,
    "distance": null,
    "ru": {
      "region": "Тверь",
      "target": "Тверская нефтебаза (Тверьнефтепродукт)",
      "category": "Топливная логистика",
      "weapon": "Дрон",
      "details": "Беспилотники атаковали нефтебазу «Тверьнефтепродукт», что привело к сильному пожару. Эта инфраструктура используется для снабжения топливом центральных и северо-западных регионов России, а также военных баз. Систематическое уничтожение объектов хранения ГСМ истощает ресурсы агрессора.",
      "source": "СМИ, OSINT"
    },
    "uk": {
      "region": "Твер",
      "target": "Тверська нафтобаза (Твернафтопродукт)",
      "category": "Паливна логістика",
      "weapon": "Дрон",
      "details": "Безпілотники атакували нафтобазу «Твернафтопродукт», що призвело до сильної пожежі. Ця інфраструктура використовується для постачання пального центральним і північно-західним регіонам Росії, а також військовим базам. Систематичне знищення об'єктів зберігання ПММ виснажує ресурси агресора.",
      "source": "ЗМІ, OSINT"
    },
    "en": {
      "region": "Tver",
      "target": "Tver Oil Depot (Tvernefteprodukt)",
      "category": "Fuel Logistics",
      "weapon": "Drone",
      "details": "Drones attacked the Tvernefteprodukt oil depot, leading to a massive fire. This infrastructure is used to supply fuel to the central and northwestern regions of Russia, as well as military bases. The systematic destruction of fuel storage facilities depletes the aggressor's resources.",
      "source": "Media, OSINT"
    },
    "id": 213,
    "image": "video/tver2.mp4"
  }
];
