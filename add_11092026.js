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
    "date": "11.09.2026",
    "lat": 51.4506,
    "lng": 45.9439,
    "distance": calcMinDistance(51.4506, 45.9439),
    "ru": {
      "region": "Саратовская область, Саратов (Заводской район)",
      "target": "Саратовский НПЗ (ПАО «Саратовский нефтеперерабатывающий завод» — ПАО «НК «Роснефть»)",
      "category": "НПЗ",
      "weapon": "Дрон",
      "details": "В ночь на 11 сентября 2026 года дальнобойные ударные дроны Сил обороны Украины атаковали Саратовский нефтеперерабатывающий завод. Совместную операцию провели бойцы 1-го отдельного центра Сил беспилотных систем во взаимодействии со спецслужбами СБУ и ГУР МО. Предприятие «Роснефти» перерабатывает до семи миллионов тонн сырой нефти ежегодно и снабжает топливом южную группировку войск РФ. По данным объективного спутникового контроля, удар пришелся прямо по технологической установке первичной переработки нефти ЭЛОУ-АВТ-6. На объекте начался крупный пожар, в небо поднялись густые столбы дыма, а заводские службы экстренно приступили к проливке конструкций. Губернатор Роман Бусаргин сообщил об угрозе беспилотников и признал повреждения, а Минобороны РФ заявило о десятках сбитых аппаратов в регионе.",
      "source": "Генштаб ВСУ, СБС ВСУ, СБУ, ГУР МО, ASTRA, росСМИ"
    },
    "uk": {
      "region": "Саратовська область, Саратов (Заводський район)",
      "target": "Саратовський НПЗ (ПАТ «Саратовський нафтопереробний завод» — ПАТ «НК «Роснефть»)",
      "category": "НПЗ",
      "weapon": "Дрон",
      "details": "У ніч проти 11 вересня 2026 року далекобійні дрони Сил оборони України завдали результативного удару по Саратовському нафтопереробному заводу. Операцію успішно реалізували підрозділи 1-го окремого центру Сил безпілотних систем у тісній взаємодії з бійцями СБУ та ГУР МО. Завод компанії «Роснефть» переробляє близько семи мільйонів тонн нафти на рік і безпосередньо забезпечує пальним військові частини окупантів. Супутникові знімки зафіксували влучання в головну установку первинної переробки нафти ЕЛОУ-АВТ-6 та явні сліди її подальшого гасіння. На майданчику підприємства спалахнула сильна пожежа, над Заводським районом міста кілька годин стояв високий стовп диму. Губернатор регіону визнав атаку та роботу протиповітряної оборони, заявивши про пошкодження інфраструктури в межах міста.",
      "source": "Генштаб ЗСУ, СБС ЗСУ, СБУ, ГУР МО, ASTRA, росЗМІ"
    },
    "en": {
      "region": "Saratov Oblast, Saratov (Zavodskoy District)",
      "target": "Saratov Oil Refinery (PJSC Saratov Refinery — PJSC Rosneft Oil Company)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Overnight on September 11, 2026, Ukrainian long-range strike drones hit the Saratov Oil Refinery in southwestern Russia. The successful joint mission was carried out by the 1st Separate Center of the Unmanned Systems Forces alongside the SBU and military intelligence. Owned by Rosneft, the facility processes roughly seven million tons of crude annually, supplying gasoline and diesel to Russian invasion forces. Fresh satellite imagery confirmed direct strikes on the main ELOU-AVT-6 crude distillation unit, showing fire damage and extinguishing foam. The impact sparked a massive fire across the refinery sector, creating heavy black plumes visible across the city until morning. Local governor Roman Busargin confirmed infrastructure damage following air defense sirens, while Russia's defense ministry reported drone interceptions over the oblast.",
      "source": "General Staff of AFU, SBS of AFU, SBU, DIU, ASTRA, Russian Media"
    }
  },
  {
    "date": "11.09.2026",
    "lat": 51.6219,
    "lng": 45.8575,
    "distance": calcMinDistance(51.6219, 45.8575),
    "ru": {
      "region": "Саратовская область, Саратов (Ленинский район, Московское шоссе)",
      "target": "Логистический комплекс Ozon (Фулфилмент-центр Ozon на Московском шоссе)",
      "category": "Логистический центр",
      "weapon": "Дрон",
      "details": "В ночь на 11 сентября 2026 года ударные дроны FP-1 уничтожили крупный распределительный логистический хаб Ozon в Ленинском районе Саратова. Украинская компания-разработчик беспилотников Fire Point подтвердила целенаправленное поражение складского комплекса на Московском шоссе. Логистический гигант площадью около 100 тысяч квадратных метров был введен в строй два года назад и вмещал более 30 миллионов товаров. В результате серии попаданий начался катастрофический пожар, и комплекс практически полностью выгорел, что подтверждают дневные спутниковые кадры. Руководство маркетплейса экстренно эвакуировало персонал и полностью заблокировало доставку и прием любых заказов в Саратовской области. Губернатор Бусаргин объявил о создании оперативного штаба поддержки сотрудников и пообещал налоговые льготы пострадавшему бизнесу.",
      "source": "Fire Point, Радио Свобода, ASTRA, росСМИ, правительство региона"
    },
    "uk": {
      "region": "Саратовська область, Саратов (Ленінський район, Московське шосе)",
      "target": "Логістичний комплекс Ozon (Фулфілмент-центр Ozon на Московському шосе)",
      "category": "Логістичний центр",
      "weapon": "Дрон",
      "details": "У ніч проти 11 вересня 2026 року українські ударні БПЛА FP-1 вщент рознесли великий логістичний комплекс маркетплейсу Ozon у Саратові. Український виробник безпілотних систем Fire Point офіційно підтвердив успішне ураження складського хабу на Московському шосе. Об'єкт площею майже 100 тисяч квадратних метрів збудували два роки тому, він забезпечував зберігання понад 30 мільйонів одиниць різноманітних товарів. Внаслідок точних влучань виникла масштабна пожежа, яка повністю знищила внутрішні приміщення та покрівлю, що зафіксували супутники. Компанія екстрено зупинила прийом і видачу відправлень по всьому регіону, а збитки від знищеного майна оцінюють у сотні мільйонів доларів. Губернатор Саратовської області Бусаргін підтвердив факт руйнування складу та скликав комісію для подолання наслідків атаки.",
      "source": "Fire Point, Радіо Свобода, ASTRA, росЗМІ, влада регіону"
    },
    "en": {
      "region": "Saratov Oblast, Saratov (Leninsky District, Moskovskoye Highway)",
      "target": "Ozon Logistics Hub (Ozon Fulfillment Center on Moskovskoye Highway)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "Overnight on September 11, 2026, Ukrainian FP-1 strike drones destroyed the major Ozon distribution hub in the suburbs of Saratov. Ukrainian drone manufacturer Fire Point publicly verified the successful deep strike against the newly built fulfillment center on Moskovskoye Highway. Spanning nearly 100,000 square meters, the warehouse opened two years ago and held more than 30 million consumer goods and logistics shipments. Direct drone hits triggered an inferno that gutted almost the entire facility, as confirmed by afternoon commercial satellite imagery. Ozon immediately halted all pickup, sorting, and delivery operations across Saratov Oblast, with damages estimated in the hundreds of millions of dollars. Regional governor Roman Busargin acknowledged the destruction of the warehouse and ordered tax relief packages for the affected logistics hub.",
      "source": "Fire Point, Radio Free Europe/Radio Liberty, ASTRA, Russian Media, Regional Authorities"
    }
  },
  {
    "date": "11.09.2026",
    "lat": 59.4000,
    "lng": 56.7356,
    "distance": calcMinDistance(59.4000, 56.7356),
    "ru": {
      "region": "Пермский край, Березники",
      "target": "Химкомбинат «Азот» (Филиал «Азот» АО «ОХК «Уралхим»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Утром 11 сентября 2026 года дальнобойные украинские дроны-камикадзе Ан-196 «Лютий» нанесли удар по химкомбинату «Азот» в Березниках Пермского края. Беспилотники преодолели свыше 1600 километров от линии фронта, обойдя эшелонированные заслоны противовоздушной обороны в глубине РФ. Предприятие занимает площадь 140 гектаров и служит ключевым производителем концентрированной азотной кислоты для военных пороховых заводов. Согласно триангуляции и анализу спутниковых снимков, дрон поразил цех химводоподготовки, питающий агрегаты синтеза аммиака деминерализованной водой. Из-за критических повреждений технологического узла остановился синтез сырья, а к поврежденным установкам стянули строительные краны для ремонта. Губернатор края Махонин подтвердил массированный налет 36 дронов на промышленные объекты региона, в городе выли сирены и отменялись занятия в школах.",
      "source": "OSINT (КиберБорошно, ASTRA), Exilenova+, росСМИ, губернатор региона"
    },
    "uk": {
      "region": "Пермський край, Березники",
      "target": "Хімкомбінат «Азот» (Філія «Азот» АТ «ОХК «Уралхім»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Вранці 11 вересня 2026 року далекобійні українські безпілотники Ан-196 «Лютий» уразили хімічний гігант «Азот» у Березниках Пермського краю. Апарати подолали понад 1600 кілометрів, завдавши удару по критичній сировинній базі російського військово-промислового комплексу. Підприємство площею 140 гектарів виробляє аміак та концентровану азотну кислоту, необхідну для виготовлення порохів і боєприпасів на заводах РФ. За даними супутникової розвідки та геолокації, влучання припало на цех хімічної водопідготовки, що живить парові реформери синтезу аміаку. Удар спричинив зупинку технологічного циклу, один із двох агрегатів синтезу вивели з ладу, на ньому зафіксували роботу ремонтних кранів. Губернатор Пермського краю Махонін заявив про наліт 36 БПЛА на промислові підприємства, тоді як у Березниках вмикали тривожні сирени.",
      "source": "OSINT (КіберБорошно, ASTRA), Exilenova+, росЗМІ, губернатор регіону"
    },
    "en": {
      "region": "Perm Krai, Berezniki",
      "target": "Azot Chemical Plant (Berezniki Branch of JSC UCC Uralchem)",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "On the morning of September 11, 2026, Ukrainian An-196 Liutyi strike drones attacked the Azot chemical production complex in Berezniki, Perm Krai. The drones traveled more than 1,600 kilometers deep into the Russian rear, evading regional radar networks and mobile air defenses. Spanning 140 hectares, Azot is Russia's critical supplier of concentrated nitric acid and ammonium nitrate used to manufacture military explosives and gunpowder. Satellite and visual triangulation revealed an impact on the chemical water treatment workshop that feeds demineralized water to ammonia synthesis reform units. The destruction forced an emergency shutdown of the production cycle, disabling one of the two primary ammonia synthesizers now undergoing crane repairs. Governor Dmitry Makhonin acknowledged a mass swarm of 36 drones hitting industrial targets in northern Perm Krai while air raid sirens blared across town.",
      "source": "OSINT (CyberBoroshno, ASTRA), Exilenova+, Russian Media, Regional Governor"
    }
  },
  {
    "date": "11.09.2026",
    "lat": 58.8938,
    "lng": 57.5671,
    "distance": calcMinDistance(58.8938, 57.5671),
    "ru": {
      "region": "Пермский край, Губаха",
      "target": "Химический комплекс «АКМ» (ПАО «Метафракс Кемикалс»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Утром 11 сентября 2026 года дальнобойные украинские БПЛА атаковали производственные мощности химзавода «Метафракс Кемикалс» в городе Губаха. Это предприятие стало вторым объектом в Пермском крае, попавшим под скоординированный воздушный удар Сил обороны на дистанции почти 1700 километров. Удар пришелся по территории новейшего химического комплекса «АКМ», специализирующегося на производстве аммиака, карбамида и меламина. Завод является крупнейшим производителем метанола, уротропина и пентаэритрита, служащих сырьем для синтеза мощных взрывчатых веществ — гексогена и ТЭНа. В промзоне прогремели взрывы, над установками поднялся шлейф дыма, а в соседней Перми вводились жесткие ограничения на полеты в аэропорту Большое Савино. Губернатор региона Дмитрий Махонин подтвердил прилеты по двум промышленным площадкам края и отчитался об экстренном созыве оперативных служб.",
      "source": "Exilenova+, ASTRA, росСМИ, губернатор Пермского края"
    },
    "uk": {
      "region": "Пермський край, Губаха",
      "target": "Хімічний комплекс «АКМ» (ПАТ «Метафракс Кемікалс»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "Вранці 11 вересня 2026 року ударні українські дрони атакували промисловий майданчик ПАТ «Метафракс Кемікалс» у місті Губаха Пермського краю. Завод став другим промисловим гігантом регіону, ураженим у ході комбінованого нальоту на рекордній відстані майже 1700 кілометрів. Дрони влучили по території новітнього хімічного комплексу «АКМ», що спеціалізується на масштабному випуску аміаку, карбаміду та меламіну. Підприємство виробляє метанол, уротропін та пентаеритрит, які є базовою хімічною сировиною для синтезу вибухових речовин гексогену та ТЕНу для ВПК РФ. У районі комплексу пролунали гучні вибухи, після чого в аеропорту Пермі тимчасово запровадили план «Килим» із забороною рейсів. Керівництво краю офіційно визнало атаку безпілотників на два великі промислові об'єкти та залучення екстрених служб для ліквідації наслідків.",
      "source": "Exilenova+, ASTRA, росЗМІ, губернатор Пермського краю"
    },
    "en": {
      "region": "Perm Krai, Gubakha",
      "target": "AKM Chemical Complex (PJSC Metafrax Chemicals)",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "On the morning of September 11, 2026, long-range Ukrainian drones attacked the production facilities of Metafrax Chemicals in the city of Gubakha, Perm Krai. Metafrax became the second major industrial plant targeted during the coordinated deep-strike drone raid across the Urals, nearly 1,700 km from Ukraine. Strikes targeted the modern AKM chemical complex, which specializes in large-scale output of synthetic ammonia, urea, and melamine. The plant is Russia's foremost producer of methanol, urotropine, and pentaerythritol, foundational components used by the defense sector to synthesize RDX and PETN explosives. Multiple explosions rocked the chemical sector, sending plumes of smoke overhead and prompting emergency air traffic shutdowns at Perm's Bolshoye Savino Airport. Regional governor Dmitry Makhonin officially verified strikes against two northern industrial plants and reported emergency teams working on-site.",
      "source": "Exilenova+, ASTRA, Russian Media, Governor of Perm Krai"
    }
  },
  {
    "date": "11.09.2026",
    "lat": 48.4909,
    "lng": 44.6101,
    "distance": calcMinDistance(48.4909, 44.6101),
    "ru": {
      "region": "Волгоградская область, Волгоград (Красноармейский район)",
      "target": "Химпредприятие «Волгоградпромпроект» (ООО «Волгоградпромпроект»)",
      "category": "ВПК",
      "weapon": "Крылатая ракета FP-5 «Фламинго»",
      "details": "В ночь на 11 сентября 2026 года Силы обороны Украины нанесли удар новейшими крылатыми ракетами FP-5 «Фламинго» по предприятию «Волгоградпромпроект». Украинский производитель вооружения Fire Point официально подтвердил результативное ракетное попадание по производственным мощностям завода. Предприятие находится под санкциями США за обеспечение российского ВПК, выпуская фосфорорганические соединения, антипирены и катализаторы горения с ферроценами. В результате мощного ракетного взрыва в южной промышленной зоне Волгограда вспыхнул пожар, охвативший цеховые постройки предприятия. Взрывной волной повредило остекление соседних жилых домов на улице Героев Малой Земли, двое местных жителей получили осколочные ранения и были госпитализированы. Губернатор Андрей Бочаров подтвердил ракетный налет и падение боевых элементов на территории промышленного завода на юге Волгограда.",
      "source": "Fire Point, Exilenova+, ASTRA, губернатор региона, росСМИ"
    },
    "uk": {
      "region": "Волгоградська область, Волгоград (Красноармійський район)",
      "target": "Хімпідприємство «Волгоградпромпроект» (ТОВ «Волгоградпромпроект»)",
      "category": "ВПК",
      "weapon": "Крилата ракета FP-5 «Фламінго»",
      "details": "У ніч проти 11 вересня 2026 року Сили оборони України атакували завод спеціальної хімії «Волгоградпромпроект» далекобійними крилатими ракетами FP-5 «Фламінго». Українська компанія-розробник ракетного озброєння Fire Point офіційно підтвердила точне влучання крилатих ракет у ціль та виникнення пожежі. Об'єкт перебуває під санкціями США за пряму роботу на ВПК агресора: тут виробляють фероценовмісні каталізатори горіння, смоли та компоненти для ракетних палив. Потужні вибухи на півдні міста спричинили руйнування в цехах та вибили шибки в житлових будинках по вулиці Героїв Малої Землі в Красноармійському районі. Внаслідок детонації двоє чоловіків отримали травми й були доставлені до лікарні, а на проммайданчику тривалий час працювали пожежні розрахунки. Губернатор Волгоградської області Бочаров публічно підтвердив факт ракетної атаки та ураження території промислового підприємства.",
      "source": "Fire Point, Exilenova+, ASTRA, губернатор регіону, росЗМІ"
    },
    "en": {
      "region": "Volgograd Oblast, Volgograd (Krasnoarmeysky District)",
      "target": "Volgogradpromproekt Chemical Plant (Volgogradpromproekt LLC)",
      "category": "Military-Industrial Complex",
      "weapon": "FP-5 \"Flamingo\" Cruise Missile",
      "details": "Overnight on September 11, 2026, Ukrainian defense forces struck the Volgogradpromproekt chemical plant in Volgograd with FP-5 Flamingo cruise missiles. Ukrainian defense contractor Fire Point publicly confirmed that its high-precision cruise missiles successfully penetrated defenses and hit the facility. The company is sanctioned by the United States for assisting the Russian military-industrial complex, manufacturing organophosphorus compounds and ferrocene-based combustion catalysts. The missile impact ignited a sizable blaze across the southern industrial district, producing heavy damage to technical structures and workshop buildings. The supersonic shockwave shattered windows in nearby residential apartments along Geroyev Maloy Zemli Street, wounding two civilians who required hospitalization. Regional governor Andrey Bocharov acknowledged the Ukrainian missile attack, confirming direct strikes and falling wreckage across the southern industrial facility.",
      "source": "Fire Point, Exilenova+, ASTRA, Regional Governor, Russian Media"
    }
  }
];

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
  console.error('\nFAILED VALIDATION!');
  process.exit(1);
} else {
  console.log('\nALL VALIDATION CHECKS PASSED!');
}

// Load existing data
const dataPath = 'd:/_DEV/Map kick/data.js';
let raw = fs.readFileSync(dataPath, 'utf8').trim();

const varMatch = raw.match(/const\s+(\w+)\s*=\s*\[/);
if (!varMatch) { console.error('Cannot detect variable name'); process.exit(1); }
const varName = varMatch[1];

let jsonStr = raw.replace(new RegExp('^const\\s+' + varName + '\\s*=\\s*'), '').replace(/;\s*$/, '').trim();
let items = JSON.parse(jsonStr);

// Filter out any existing 11.09.2026 items
items = items.filter(x => x.date !== '11.09.2026');

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
console.log('Successfully updated data.js with ' + newItems.length + ' items for 11.09.2026. Total items: ' + items.length);
