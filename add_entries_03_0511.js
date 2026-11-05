const fs = require('fs');

const content = fs.readFileSync('data.js', 'utf8');
const dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
const data = new Function('return ' + dataStr)();

const newEntries = [
  {
    "date": "05.11.2026",
    "lat": 54.5422,
    "lng": 39.7719,
    "distance": null,
    "ru": {
      "region": "Рязанская область, г. Рязань",
      "target": "Рязанский НПЗ (АО «РНПК», ПАО «НК «Роснефть») — нефтеперерабатывающий завод",
      "category": "Нефтегаз",
      "weapon": "Дальнобойные БПЛА",
      "details": "В ночь на 5 ноября 2026 года Силы обороны Украины осуществили комбинированный налет ударных дронов на Рязанский нефтеперерабатывающий завод (АО «РНПК», дочернее предприятие «Роснефти»). Предприятие с годовой переработкой более 17 млн тонн нефти занимает четвертое место в стране и является главным поставщиком автомобильного бензина, дизеля и авиакеросина ТС-1 для столичного узла и соединений ВС РФ. Волна украинских БПЛА преодолела огонь мобильных огневых групп ПВО над Южным промузлом Рязани. Прилеты пришлись по ключевым установкам первичной переработки нефти АВТ-1, АВТ-4, АТ-6 и АВТ-3, а также секциям гидроочистки вакуумного газойля. На объекте начался пожар высшего ранга сложности с серией детонаций и образованием плотного дымового столба, видимого из соседних районов. Губернатор области признал факты возгораний на промышленных объектах. В результате полученных разрушений завод был вынужден полностью остановить технологический процесс переработки сырья.",
      "source": "Губернатор Рязанской области, ASTRA, @ASupersharij, Supernova+, Exilenova+, ТАСС"
    },
    "uk": {
      "region": "Рязанська область, м. Рязань",
      "target": "Рязанський НПЗ (АТ «РНПК», ПАТ «НК «Роснафта») — нафтопереробний завод",
      "category": "Нафтогаз",
      "weapon": "Далекобійні БпЛА",
      "details": "У ніч проти 5 листопада 2026 року Сили оборони України здійснили комбіновану атаку ударними безпілотниками на Рязанський нафтопереробний завод (АТ «РНПК», що входить до складу «Роснафти»). Підприємство з потужністю переробки понад 17 млн тонн сировини на рік є четвертим за величиною в РФ та виступає основним постачальником авіагасу ТС-1, дизельного пального та автобензинів для московського вузла і військ загарбників. Група далекобійних БпЛА подолала систему ППО навколо Південного промвузла міста. Влучання зафіксовано по установках первинної переробки АВТ-1, АВТ-4, АТ-6 та АВТ-3, а також по блоках вторинної переробки, зокрема гідроочищення вакуумного газойлю. На території підприємства спалахнула масштабна пожежа підвищеного рангу небезпеки з детонацією технологічного обладнання. Губернатор регіону підтвердив факти пожеж на промислових об'єктах. Через масштабні руйнування технологічних вузлів роботу переробних потужностей заводу було паралізовано.",
      "source": "Губернатор Рязанської області, ASTRA, @ASupersharij, Supernova+, Exilenova+, ТАРС"
    },
    "en": {
      "region": "Ryazan Oblast, Ryazan",
      "target": "Ryazan Oil Refinery (RNPC, Rosneft PJSC) — crude oil refinery",
      "category": "Oil & Gas",
      "weapon": "Long-range UAVs",
      "details": "On the night of November 5, 2026, the Ukrainian Defense Forces carried out a concentrated long-range UAV attack on the Ryazan Oil Refinery (RNPC, a subsidiary of Rosneft) in Ryazan. Processing over 17 million tons of crude annually, it ranks as Russia's fourth-largest refinery and serves as the strategic provider of TS-1 jet fuel, motor gasolines, and diesel to the Moscow metropolitan region and Russian armed forces. Strike drones evaded heavy anti-air fire over the Southern industrial zone, delivering precision impacts on primary distillation units AVT-1, AVT-4, AT-6, and AVT-3, as well as secondary vacuum gasoil hydrotreating units. Direct hits provoked a major industrial disaster with secondary explosions and massive flames visible across the entire city. The regional governor confirmed multiple fires across industrial sites. Devastating technological damage forced the refinery to initiate an emergency total shutdown of crude refining operations.",
      "source": "Governor of Ryazan Oblast, ASTRA, @ASupersharij, Supernova+, Exilenova+, TASS"
    },
    "images": [
      "video/ryazan_rnpk_0511_vid1.mp4",
      "video/ryazan_rnpk_0511_vid2.mp4",
      "images/ryazan_rnpk_0511_img1.jpg",
      "images/ryazan_rnpk_0511_img2.jpg",
      "images/ryazan_rnpk_0511_img3.jpg"
    ],
    "id": 570
  },
  {
    "date": "05.11.2026",
    "lat": 54.6750,
    "lng": 39.5870,
    "distance": null,
    "ru": {
      "region": "Рязанская область, Рязанский район, с. Тюшево",
      "target": "Логистический комплекс Wildberries («Рязань: Тюшевская») и технопарк «Рязанский»",
      "category": "Логистика",
      "weapon": "Дальнобойные БПЛА",
      "details": "В ночь на 5 ноября 2026 года в ходе скоординированного налета украинских БПЛА на промышленные объекты Рязанской области был поражен логистический комплекс Wildberries («Рязань: Тюшевская»), расположенный в индустриальном парке «Рязанский» у села Тюшево. Новый распределительный хаб площадью 173 тысячи квадратных метров обеспечивал бесперебойное снабжение центральных областей РФ и поставки грузов двойного назначения, компонентов электроники и экипировки для российской армии. В результате попаданий дронов-камикадзе начался сильный пожар в секциях хранения товаров и сортировочных терминалах, а также загорелись производственные мощности компании OpenYard по сборке серверов в Центре открытых разработок. Губернатор региона подтвердил падение обломков БПЛА и возгорания в промышленном секторе. Масштабные повреждения кровли и складских зон привели к полной остановке операций распределительного центра и срыву логистических маршрутов.",
      "source": "Губернатор Рязанской области, ASTRA, Supernova+, Exilenova+, ТАСС"
    },
    "uk": {
      "region": "Рязанська область, Рязанський район, с. Тюшево",
      "target": "Логістичний комплекс Wildberries («Рязань: Тюшевська») та технопарк «Рязанський»",
      "category": "Логістика",
      "weapon": "Далекобійні БпЛА",
      "details": "У ніч проти 5 листопада 2026 року під час скоординованого удару українських безпілотників по промислових об'єктах Рязанщини було уражено логістичний комплекс маркетплейса Wildberries («Рязань: Тюшевська») в індустріальному парку «Рязанський» біля села Тюшево. Масштабний сортувальний хаб площею 173 тисячі квадратних метрів відігравав критичну роль у постачанні столичного регіону, обробляючи значні партії електроніки, амуніції та товарів подвійного призначення для окупаційної армії. Унаслідок точних влучань дронів-камікадзе спалахнула масштабна пожежа на складських терміналах, а також загорілося розташоване поруч виробництво серверного обладнання OpenYard у приміщенні Центру відкритих розробок. Губернатор підтвердив падіння уламків та спалахи на промислових майданчиках. Серйозні пошкодження покрівлі та конструкцій спричинили повну зупинку роботи розподільчого центру і заблокували ключові логістичні ланцюги.",
      "source": "Губернатор Рязанської області, ASTRA, Supernova+, Exilenova+, ТАРС"
    },
    "en": {
      "region": "Ryazan Oblast, Ryazan District, Tyushevo village",
      "target": "Wildberries Distribution Center (Ryazan: Tyushevskaya) and Ryazansky Industrial Park",
      "category": "Logistics",
      "weapon": "Long-range UAVs",
      "details": "On the night of November 5, 2026, during a coordinated drone assault against industrial infrastructure in Ryazan Oblast, Ukrainian strike UAVs hit the Wildberries distribution complex (Ryazan: Tyushevskaya) located inside the Ryazansky Industrial Park near Tyushevo. Covering 173,000 square meters, this mega-hub operated as a critical logistics center serving Moscow and central regions, processing high volumes of dual-use goods, tactical gear, and communications electronics for military logistics. Direct drone strikes ignited extensive fires across the warehouse storage terminals and engulfed the adjacent OpenYard server manufacturing line within the Open Development Center. Regional authorities confirmed fires across industrial zones and localized damage to surrounding infrastructure. Severe structural roof damage and fires forced an immediate total suspension of distribution hub operations, disrupting regional commercial and military supply chains.",
      "source": "Governor of Ryazan Oblast, ASTRA, Supernova+, Exilenova+, TASS"
    },
    "images": [
      "video/ryazan_wb_0511_vid1.mp4",
      "images/ryazan_wb_0511_img1.jpg",
      "images/ryazan_wb_0511_img2.jpg"
    ],
    "id": 569
  },
  {
    "date": "04.11.2026",
    "lat": 44.9082,
    "lng": 39.1865,
    "distance": null,
    "ru": {
      "region": "Республика Адыгея, Теучежский район, г. Адыгейск",
      "target": "Логистический комплекс маркетплейса Ozon (РФЦ «Адыгейск»)",
      "category": "Логистика",
      "weapon": "Дальнобойные БПЛА",
      "details": "В ночь на 4 ноября 2026 года дальнобойные украинские дроны атаковали ключевой логистический хаб южного региона РФ — распределительный центр маркетплейса Ozon в Адыгейске («Адыгейск_РФЦ»). Складской комплекс общей площадью более 105 тысяч квадратных метров служил важнейшим транзитным узлом снабжения юга России и прифронтовых группировок, обеспечивая сортировку оборудования, электроники, экипировки и грузов двойного назначения. Несколько беспилотников спикировали на первый блок комплекса, вызвав мощные взрывы и детонацию части упакованных отправлений. Прямой удар пробил перекрытия здания, в результате чего обрушилась значительная часть кровли и разгорелся сильный пожар в секциях хранения. Руководство компании объявило экстренную эвакуацию всего персонала, полностью остановило отгрузки и скрыло товары комплекса из каталога. Поражение терминала парализовало логистику онлайн-ритейла в регионе и нарушило цепи поставок военного снаряжения.",
      "source": "Пресс-служба Ozon, ASTRA, @ASupersharij, Supernova+, Exilenova+, ТАСС"
    },
    "uk": {
      "region": "Республіка Адигея, Теучезький район, м. Адигейськ",
      "target": "Логістичний комплекс маркетплейса Ozon (РФЦ «Адигейськ»)",
      "category": "Логістика",
      "weapon": "Далекобійні БпЛА",
      "details": "У ніч проти 4 листопада 2026 року далекобійні українські безпілотники атакували стратегічний логістичний хаб на півдні РФ — розподільчий фулфілмент-центр маркетплейса Ozon у місті Адигейськ («Адигейськ_РФЦ»). Логістичний комплекс площею понад 105 тисяч квадратних метрів відігравав ключову роль у матеріально-технічному забезпеченні південних регіонів та окупаційних військ, обробляючи великі партії електроніки, амуніції та товарів подвійного використання. Група ударних дронів влучила в перший корпус об'єкта, пробивши капітальні перекриття. Внаслідок влучань обвалилася значна ділянка покрівлі, а всередині складських терміналів спалахнула сильна пожежа. Менеджмент компанії провів негайну евакуацію змінних працівників, скасував поточні замовлення та приховав позиції складу з публічної вітрини. Удари вивели з ладу основні сортувальні лінії, завдавши значних збитків мережевій логістиці агресора.",
      "source": "Пресслужба Ozon, ASTRA, @ASupersharij, Supernova+, Exilenova+, ТАРС"
    },
    "en": {
      "region": "Republic of Adygea, Teuchezhsky District, Adygeysk",
      "target": "Ozon Marketplace Fulfillment Center (Adygeysk RFC)",
      "category": "Logistics",
      "weapon": "Long-range UAVs",
      "details": "On the night of November 4, 2026, Ukrainian long-range strike UAVs hit the primary southern distribution hub of the Ozon marketplace in Adygeysk (Adygeysk RFC), Republic of Adygea. Spanning over 105,000 square meters, the fulfillment center served as a vital logistics node supplying southern Russia and military formations with dual-use goods, communications gear, and tactical equipment. Multiple attack drones struck the complex's main building, penetrating the structural roof sections. The impacts caused an immediate partial roof collapse and triggered an intense fire across storage block one and high-bay racking systems. Company management ordered an immediate emergency evacuation of all warehouse personnel, canceled thousands of processed shipments, and withdrew affected stock from the marketplace. The severe damage to automated sorting lines and warehouse infrastructure crippled regional distribution and disrupted military logistics channels.",
      "source": "Ozon Press Service, ASTRA, @ASupersharij, Supernova+, Exilenova+, TASS"
    },
    "images": [
      "video/ozon_adygeysk_0411_vid1.mp4",
      "video/ozon_adygeysk_0411_vid2.mp4",
      "images/ozon_adygeysk_0411_img1.jpg",
      "images/ozon_adygeysk_0411_img2.jpg"
    ],
    "id": 568
  },
  {
    "date": "03.11.2026",
    "lat": 57.6012,
    "lng": 39.8745,
    "distance": null,
    "ru": {
      "region": "Ярославская область, г. Ярославль",
      "target": "Ярославский НПЗ (ПАО «Славнефть-ЯНОС») — нефтеперерабатывающий завод",
      "category": "Нефтегаз",
      "weapon": "Дальнобойные БПЛА",
      "details": "В ночь на 3 ноября 2026 года подразделения Сил обороны Украины провели массированную воздушную атаку на Ярославский нефтеперерабатывающий завод (ПАО «Славнефть-ЯНОС»). Завод входит в пятерку крупнейших НПЗ России с проектной мощностью первичной переработки до 15 млн тонн нефти в год и выступает ключевым поставщиком моторного и авиационного топлива для нужд группировок ВС РФ. На подступах к предприятию и над промышленной зоной российские радары зафиксировали прорыв десятков ударных БПЛА самолетного типа. Несмотря на плотный заградительный огонь ПВО, не менее шести дронов нанесли точные удары по технологическим секторам завода. В результате взрывов на территории предприятия возникло как минимум пять очагов возгорания, повреждения получили производственная инфраструктура и аппараты переработки сырья, ранения получили двое сотрудников смены. Пожарные расчеты несколько часов локализовали огонь, а переработка нефти на ряде установок была экстренно остановлена.",
      "source": "Губернатор Ярославской области, ASTRA, @ASupersharij, Supernova+, Exilenova+, ТАСС"
    },
    "uk": {
      "region": "Ярославська область, м. Ярославль",
      "target": "Ярославський НПЗ (ПАТ «Славнафта-ЯНОС») — нафтопереробний завод",
      "category": "Нафтогаз",
      "weapon": "Далекобійні БпЛА",
      "details": "У ніч проти 3 листопада 2026 року підрозділи Сил оборони України здійснили масовану повітряну атаку далекобійними дронами-камікадзе на Ярославський нафтопереробний завод (ПАТ «Славнафта-ЯНОС»). Підприємство входить до п'ятірки найпотужніших НПЗ ворога із річним обсягом переробки близько 15 млн тонн нафти та є критично важливим постачальником дизелю й авіапального для армії окупантів. Під час нічного рейду радарні системи противника фіксували хвилі ударних безпілотників, що прямували до заводських споруд. Попри роботу стрілецьких груп та зенітних комплексів, щонайменше шість БпЛА успішно прорвали протиповітряний щит і влучили в технологічні майданчики. На території заводу виникло п'ять масштабних осередків пожежі, суттєвих пошкоджень зазнали виробнича інфраструктура й колони переробки, поранень дістали двоє робітників. Через загрозу подальших вибухів технологічний цикл частини установок було терміново призупинено.",
      "source": "Губернатор Ярославської області, ASTRA, @ASupersharij, Supernova+, Exilenova+, ТАРС"
    },
    "en": {
      "region": "Yaroslavl Oblast, Yaroslavl",
      "target": "Yaroslavl Oil Refinery (Slavneft-YANOS PJSC) — crude oil refinery",
      "category": "Oil & Gas",
      "weapon": "Long-range UAVs",
      "details": "On the night of November 3, 2026, Ukrainian Defense Forces carried out a large-scale long-range drone attack against the Yaroslavl Oil Refinery (Slavneft-YANOS) in Yaroslavl. Ranking among Russia's top five refining facilities with an annual throughput of 15 million metric tons, the plant is a critical supplier of diesel and aviation kerosene for Russian military forces. During the overnight strike, dozens of loitering munitions penetrated layered air defenses around the industrial district. At least six strike UAVs achieved direct hits across the refinery's operational perimeter, igniting five distinct blazes and causing extensive damage to technological infrastructure and crude processing units. Regional authorities confirmed that two refinery workers were injured during the blasts. Emergency response crews spent hours battling the flames, forcing plant management to halt operations across primary processing units to contain the damage.",
      "source": "Governor of Yaroslavl Oblast, ASTRA, @ASupersharij, Supernova+, Exilenova+, TASS"
    },
    "images": [
      "video/yaroslavl_yanos_0311_vid1.mp4",
      "video/yaroslavl_yanos_0311_vid2.mp4",
      "images/yaroslavl_yanos_0311_img1.jpg",
      "images/yaroslavl_yanos_0311_img2.jpg",
      "images/yaroslavl_yanos_0311_img3.jpg"
    ],
    "id": 567
  }
];

// Combine and update
const updated = [...newEntries, ...data];
const newContent = 'const strikeData = ' + JSON.stringify(updated, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent, 'utf8');
console.log('Successfully prepended 4 new strike events! Total items:', updated.length);
