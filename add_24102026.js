const fs = require('fs');

const newStrikes = [
  {
    "date": "24.10.2026",
    "lat": 53.5433,
    "lng": 49.4556,
    "distance": null,
    "ru": {
      "region": "Самарская обл., г. Тольятти, Новозаводская ул., 8",
      "target": "ООО «Тольяттикаучук» — химкомбинат синтетического каучука и сырья для ракетного топлива",
      "category": "ВПК / Химическая промышленность",
      "weapon": "Дальнобойные БПЛА",
      "details": "В ночь на 24 октября 2026 года Силы беспилотных систем во взаимодействии с другими подразделениями Сил обороны Украины провели спецоперацию по поражению нефтехимического комбината ООО «Тольяттикаучук» в Самарской области. К операции привлекались расчеты 1-го отдельного центра БпС, 412-й бригады Nemesis и 414-й бригады «Птахи Мадяра». Предприятие входит в число крупнейших производителей синтетического каучука в РФ с проектной мощностью свыше 300 тысяч тонн продукции в год. Комбинат выпускает сополимерные и бутилкаучуки, мономеры, а также присадки для высокооктанового бензина. Каучуки завода служат базовым сырьем для изготовления твердого ракетного топлива, применяемого в тактических и баллистических ракетах российской армии. Несколько ударных дронов прорвали противовоздушную оборону и попали по производственным установкам, вызвав серию детонаций и открытые пожары в цехах. Попадания по предприятию официально подтвердили Генштаб ВСУ и мэр Тольятти Илья Сухих.",
      "source": "Генштаб ВСУ, СБС Украины, ASTRA, Supernova+, Exilenova+, @ASupersharij, власти Тольятти"
    },
    "uk": {
      "region": "Самарська обл., м. Тольятті, Новозаводська вул., 8",
      "target": "ТОВ «Тольяттікаучук» — хімкомбінат синтетичного каучуку та сировини для ракетного палива",
      "category": "ВПК / Хімічна промисловість",
      "weapon": "Далекобійні БпЛА",
      "details": "У ніч на 24 жовтня 2026 року Сили безпілотних систем у взаємодії з іншими складовими Сил оборони України провели спецоперацію з ураження нафтохімічного комбінату ТОВ «Тольяттікаучук» у Самарській області. До операції залучалися підрозділи 1-го окремого центру БпС, 412-ї бригади Nemesis та 414-ї бригади «Птахи Мадяра». Підприємство належить до найбільших виробників синтетичного каучуку в РФ із проєктною потужністю понад 300 тисяч тонн продукції на рік. Комбінат виробляє сополімерні та бутилкаучуки, мономери, а також присадки до високооктанового бензину. Каучуки заводу слугують базовою сировиною для виготовлення твердого ракетного палива для тактичних і балістичних ракет ворога. Кілька ударних дронів подолали протиповітряну оборону та поцілили у виробничі установки, що призвело до детонацій і відкритих пожеж у цехах. Ураження об'єкта офіційно підтвердили Генштаб ЗСУ та мер Тольятті Ілля Сухих.",
      "source": "Генштаб ЗСУ, СБС України, ASTRA, Supernova+, Exilenova+, @ASupersharij, влада Тольятті"
    },
    "en": {
      "region": "Samara Oblast, Tolyatti, Novozavodskaya St., 8",
      "target": "Tolyattikauchuk LLC — chemical plant producing synthetic rubber and missile fuel precursors",
      "category": "Military-Industrial Complex / Chemicals",
      "weapon": "Long-range UAVs",
      "details": "On the night of October 24, 2026, Ukraine's Unmanned Systems Forces in coordination with other Defense Forces units executed a precision drone operation against the Tolyattikauchuk petrochemical plant in Samara Oblast. The raid involved operators from the 1st Separate Drone Center, the 412th Nemesis Brigade, and the 414th Magyar Birds Brigade. The complex ranks among Russia's primary synthetic rubber manufacturers with an annual design capacity exceeding 300,000 tons. It produces copolymer and butyl rubbers, monomer fractions, and high-octane gasoline additives. Synthetic polymers from the plant serve as critical precursors in formulating solid rocket propellant for Russian tactical and ballistic missiles. Several strike drones breached regional air defenses, scoring direct hits on processing infrastructure and igniting widespread fires across the production area. The operation was confirmed by the General Staff of the AFU and Tolyatti Mayor Ilya Sukhikh.",
      "source": "General Staff of AFU, SBS of Ukraine, ASTRA, Supernova+, Exilenova+, @ASupersharij, Tolyatti authorities"
    },
    "images": [
      "video/tolyatti_kauchuk_2410_vid1.mp4",
      "video/tolyatti_kauchuk_2410_vid2.mp4",
      "images/tolyatti_kauchuk_2410_img1.jpg",
      "images/tolyatti_kauchuk_2410_img2.jpg",
      "images/tolyatti_kauchuk_2410_img3.jpg"
    ],
    "id": 553
  },
  {
    "date": "24.10.2026",
    "lat": 55.0743,
    "lng": 73.2812,
    "distance": null,
    "ru": {
      "region": "Омская обл., г. Омск, Красноярский тракт, Северный промышленный узел",
      "target": "АО «Омский каучук» (ГК «Титан») — нефтехимический завод компонентов ракетного топлива и МТБЭ",
      "category": "ВПК / Нефтехимия",
      "weapon": "Дальнобойные БПЛА",
      "details": "Днем 24 октября 2026 года дальнобойные украинские беспилотники атаковали нефтехимический завод АО «Омский каучук», входящий в группу компаний «Титан», на рекордном удалении более 2500 км от линии фронта. Предприятие расположено в Северном промышленном узле Омска и является ведущим региональным производителем синтетического каучука, фенола, ацетона и органического синтеза с суточной переработкой около 2000 тонн сырья. Продукция завода критически важна для оборонно-промышленного комплекса РФ: специальные полимеры и мономеры служат связующим компонентом твердого ракетного топлива для комплексов «Искандер-М», «Тополь-М» и «Ярс». По данным OSINT-анализа и видеозаписей очевидцев, ударные дроны поразили технологические установки Д-3 и Д-5, отвечающие за выработку высокооктановой добавки МТБЭ и бутадиена. На территории предприятия начался масштабный пожар с выбросом густого черного дыма. Власти региона признали факт атаки промышленных объектов города.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, губернатор Омской области"
    },
    "uk": {
      "region": "Омська обл., м. Омськ, Красноярський тракт, Північний промисловий вузол",
      "target": "АТ «Омський каучук» (ГК «Титан») — нафтохімічний завод компонентів ракетного палива та МТБЕ",
      "category": "ВПК / Нафтохімія",
      "weapon": "Далекобійні БпЛА",
      "details": "Удень 24 жовтня 2026 року далекобійні українські безпілотники атакували нафтохімічний завод АТ «Омський каучук», що входить до групи компаній «Титан», на рекордній відстані понад 2500 км від лінії фронту. Підприємство розташоване в Північному промисловому вузлі Омська і є провідним регіональним виробником синтетичного каучуку, фенолу, ацетону та продукції органічного синтезу з добовою переробкою близько 2000 тонн сировини. Продукція заводу критично важлива для ВПК ворога: спеціальні полімери та мономери застосовуються як зв'язувальні компоненти твердого ракетного палива для комплексів «Іскандер-М», «Тополь-М» та «Ярс». За даними OSINT-аналізу та відеозаписів очевидців, ударні дрони уразили технологічні установки Д-3 та Д-5, які відповідають за випуск високооктанової добавки МТБЕ та бутадієну. На території комбінату спалахнула масштабна пожежа з викидом густого диму. Влада регіону визнала факт атаки на промзону.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, губернатор Омської області"
    },
    "en": {
      "region": "Omsk Oblast, Omsk, Krasnoyarsky Trakt, Northern Industrial Hub",
      "target": "Omsky Kauchuk JSC (Titan Group) — petrochemical plant producing missile fuel components and MTBE",
      "category": "Military-Industrial Complex / Petrochemicals",
      "weapon": "Long-range UAVs",
      "details": "On the afternoon of October 24, 2026, Ukrainian long-range strike drones hit the Omsky Kauchuk petrochemical plant of the Titan Group in Siberia, traversing over 2,500 km from Ukrainian territory. Located within the Northern Industrial Hub of Omsk, the plant is a premier regional producer of synthetic rubber, phenol, acetone, and organic synthesis products, processing roughly 2,000 tons of feedstock daily. The enterprise plays a strategic role in Russian defense supply chains, delivering specialized binders and synthetic rubbers required for solid-fuel rocket engines of Iskander-M, Topol-M, and Yars missile systems. OSINT analysis and eyewitness videos verified multiple drone impacts in the vicinity of process units D-3 and D-5, which manufacture MTBE fuel blending components and butadiene. The strike triggered a heavy industrial fire with thick black smoke over the compound. Regional authorities confirmed that industrial facilities in Omsk came under UAV attack.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, Omsk Oblast Governor"
    },
    "images": [
      "video/omsk_kauchuk_2410_vid1.mp4",
      "video/omsk_kauchuk_2410_vid2.mp4",
      "images/omsk_kauchuk_2410_img1.jpg",
      "images/omsk_kauchuk_2410_img2.jpg",
      "images/omsk_kauchuk_2410_img3.jpg"
    ],
    "id": 554
  },
  {
    "date": "24.10.2026",
    "lat": 54.9996,
    "lng": 73.1736,
    "distance": null,
    "ru": {
      "region": "Омская обл., г. Омск, ул. Айвазовского, 33 (логопарк «Солнечный»)",
      "target": "Фулфилмент-центр Ozon в Омске — распределительный хаб военной и двойной логистики",
      "category": "Логистика",
      "weapon": "Дальнобойный ударный БПЛА FP-1",
      "details": "Днем 24 октября 2026 года украинский дальнобойный ударный дрон FP-1 нанес прицельный удар по крупнейшему логистическому фулфилмент-центру маркетплейса Ozon в Омске, расположенному на улице Айвазовского в логопарке «Солнечный». Общая площадь складского комплекса составляет 107 тысяч квадратных метров, а мощности рассчитаны на одновременное хранение 30 миллионов единиц грузов и обработку свыше 600 тысяч заказов в сутки. Инвестиции в хаб превысили 4 миллиарда рублей. Объект активно задействовался структурами Министерства обороны РФ для сортировки, накопления и распределения военного снаряжения, форменного обмундирования, электроники двойного назначения и защищенных радиокомпонентов в восточные округа и зону боевых действий. Кадры объективного контроля зафиксировали прямое пикирование дрона в кровлю терминала, мощный взрыв и обширное возгорание внутренних складских помещений. Пресс-служба Ozon и губернатор Виталий Хоценко подтвердили эвакуацию персонала и пожар.",
      "source": "Пресс-служба Ozon, губернатор Омской области, ASTRA, Supernova+, Exilenova+, @ASupersharij"
    },
    "uk": {
      "region": "Омська обл., м. Омськ, вул. Айвазовського, 33 (логопарк «Сонячний»)",
      "target": "Фулфілмент-центр Ozon в Омську — розподільчий хаб військової та подвійної логістики",
      "category": "Логістика",
      "weapon": "Далекобійний ударний БпЛА FP-1",
      "details": "Удень 24 жовтня 2026 року український далекобійний ударний дрон FP-1 завдав точного удару по найбільшому логістичному фулфілмент-центру маркетплейсу Ozon в Омську, розташованому на вулиці Айвазовського в логопарку «Сонячний». Загальна площа складського комплексу становить 107 тисяч квадратних метрів, а потужності розраховані на одночасне розміщення 30 мільйонів одиниць вантажів і обробку понад 600 тисяч замовлень на добу. Інвестиції у цей хаб перевищили 4 мільярди рублів. Об'єкт активно використовувався структурами Міноборони РФ для сортування, накопичення та розподілу військового спорядження, форменого одягу, електроніки подвійного призначення та радіокомпонентів у східні округи й зону бойових дій. Відеозаписи об'єктивного контролю зафіксували пряме пікірування дрона у покрівлю термінала, потужний вибух та масштабне займання складських площ. Пресслужба Ozon і губернатор Віталій Хоценко підтвердили пожежу й евакуацію.",
      "source": "Пресслужба Ozon, губернатор Омської області, ASTRA, Supernova+, Exilenova+, @ASupersharij"
    },
    "en": {
      "region": "Omsk Oblast, Omsk, Aivazovskogo St., 33 (Solnechny Logistics Park)",
      "target": "Ozon Fulfillment Center in Omsk — distribution hub for military and dual-use logistics",
      "category": "Logistics",
      "weapon": "Long-range strike UAV FP-1",
      "details": "On the afternoon of October 24, 2026, a Ukrainian long-range FP-1 strike drone delivered a direct hit against the primary Ozon fulfillment and logistics center in Omsk, situated on Aivazovskogo Street in the Solnechny Logistics Park. Encompassing an area of 107,000 square meters, the automated complex holds capacity for up to 30 million cargo units and processes over 600,000 dispatches daily, representing an investment of over 4 billion rubles. The facility served as a key regional logistics hub utilized by Russian military networks to store, consolidate, and forward tactical gear, uniforms, dual-use electronics, and communications components across eastern military districts. Video recordings showed the drone diving into the facility's roof, causing a large explosion and severe fire throughout the storage halls. Ozon's press office and Governor Vitaly Khotsenko confirmed the evacuation of all warehouse personnel and the resulting facility blaze.",
      "source": "Ozon press service, Omsk Oblast Governor, ASTRA, Supernova+, Exilenova+, @ASupersharij"
    },
    "images": [
      "video/omsk_ozon_2410_vid1.mp4",
      "video/omsk_ozon_2410_vid2.mp4",
      "images/omsk_ozon_2410_img1.jpg",
      "images/omsk_ozon_2410_img2.jpg",
      "images/omsk_ozon_2410_img3.jpg"
    ],
    "id": 555
  },
  {
    "date": "24.10.2026",
    "lat": 46.6806,
    "lng": 38.2514,
    "distance": null,
    "ru": {
      "region": "Краснодарский край, г. Ейск, военный аэродром",
      "target": "Военный аэродром «Ейск» (ВМФ РФ): поражение боевого самолета ударом 1-го ОЦ БпС",
      "category": "Военные аэродромы",
      "weapon": "Ударные БПЛА (1-й ОЦ БпС СБС)",
      "details": "В ночь на 24 октября 2026 года подразделения 1-го отдельного центра беспилотных систем СБС Украины нанесли результативный удар по военному аэродрому совместного базирования «Ейск» в Краснодарском крае. На авиабазе дислоцируется 859-й Центр боевого применения и переучивания летного состава морской авиации ВМФ РФ, а также базируются истребители-бомбардировщики Су-34 и многоцелевые истребители Су-30СМ 1-й смешанной авиадивизии. Аэродром используется противником как передовая база оперативного развертывания для ударов управляемыми авиабомбами КАБ по позициям Сил обороны Украины на южном и запорожском направлениях. В результате точного удара дрона-камикадзе зафиксировано поражение боевого самолета ВКС РФ на открытой стоянке летного поля. Успешную операцию по уничтожению вражеского борта в рамках системных глубоких ударов Deep Strike официально подтвердили Генеральный штаб ВСУ и командование Сил беспилотных систем.",
      "source": "Генштаб ВСУ, Командование Сил беспилотных систем (СБС)"
    },
    "uk": {
      "region": "Краснодарський край, м. Єйськ, військовий аеродром",
      "target": "Військовий аеродром «Єйськ» (ВМФ РФ): ураження бойового літака ударом 1-го ОЦ БпС",
      "category": "Військові аеродроми",
      "weapon": "Ударні БпЛА (1-й ОЦ БпС СБС)",
      "details": "У ніч на 24 жовтня 2026 року підрозділи 1-го окремого центру безпілотних систем СБС України завдали результативного удару по військовому аеродрому спільного базування «Єйськ» у Краснодарському краї. На авіабазі дислокується 859-й Центр бойового застосування та перенавчання льотного складу морської авіації ВМФ РФ, а також базуються винищувачі-бомбардувальники Су-34 та багатоцільові винищувачі Су-30СМ 1-ї змішаної авіадивізії. Аеродром використовується окупантами як передова база оперативного розгортання для ударів керованими авіабомбами КАБ по позиціях Сил оборони України на південному та запорізькому напрямках. Унаслідок точного удару дрона-камікадзе зафіксовано ураження бойового літака противника на відкритій стоянці льотного поля. Успішну операцію в рамках системної роботи Deep Strike офіційно підтвердили Генеральний штаб ЗСУ та командування Сил безпілотних систем.",
      "source": "Генштаб ЗСУ, Командування Сил безпілотних систем (СБС)"
    },
    "en": {
      "region": "Krasnodar Krai, Yeysk, military airfield",
      "target": "Yeysk Military Airfield (Russian Navy): combat aircraft struck by 1st SBS UAV Center",
      "category": "Military Airfields",
      "weapon": "Strike UAVs (1st SBS UAV Center)",
      "details": "On the night of October 24, 2026, operators from the 1st Separate Drone Center of Ukraine's Unmanned Systems Forces (SBS) carried out a strike on the Yeysk military airfield in Krasnodar Krai. The airbase hosts the 859th Combat Application and Aircrew Training Center for Naval Aviation of the Russian Navy, alongside operational detachments of Su-34 strike fighters and Su-30SM multirole jets from the 1st Composite Aviation Division. Russian forces utilize the airfield as a staging facility to conduct guided glide bomb strikes against Ukrainian defensive positions across the southern and Zaporizhzhia fronts. A strike drone struck a parked combat aircraft on the apron, inflicting critical structural damage. The successful strike on the military aircraft was officially confirmed by the General Staff of the Armed Forces of Ukraine and the SBS Command as part of systematic Deep Strike operations against enemy air capabilities.",
      "source": "General Staff of AFU, Ukrainian Unmanned Systems Forces (SBS)"
    },
    "images": [],
    "id": 556
  }
];

// Read current data.js
const content = fs.readFileSync('data.js', 'utf8');
const dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
let data = new Function('return ' + dataStr)();

// Prepend new strikes
data = [...newStrikes, ...data];

// Write updated data.js
const updatedContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', updatedContent, 'utf8');

console.log('Successfully added 4 new strikes for 24.10.2026 to data.js!');
console.log('Total strikes now:', data.length);
