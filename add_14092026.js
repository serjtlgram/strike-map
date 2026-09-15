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
    "date": "14.09.2026",
    "lat": 53.0854,
    "lng": 48.3971,
    "distance": calcMinDistance(53.0854, 48.3971),
    "ru": {
      "region": "Самарская область, Сызрань",
      "target": "Сызранский НПЗ (АО «Сызранский нефтеперерабатывающий завод» / ПАО «НК «Роснефть»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Поздно вечером 14 сентября 2026 года дальнобойные украинские дроны атаковали Сызранский нефтеперерабатывающий завод компании «Роснефть» в Самарской области. Мощность этого гиганта составляет 8,5 миллиона тонн нефти в год, он играет критическую роль в снабжении дизелем и авиакеросином группировок оккупационных войск. Часть ударных беспилотников прорвала заградительный огонь ПВО и точно ударила по промышленной площадке. Основной удар пришелся по установке первичной переработки нефти АВТ-6, которую персонал только недавно восстановил после прошлых налетов. Одновременно вспыхнули резервуары с готовым топливом в резервуарном парке, вызвав массивные взрывы и столб пламени. Губернатор Самарской области подтвердил повреждения промышленного предприятия, а Генштаб ВСУ отчитался об успешном поражении объекта. Завод экстренно остановил технологический процесс переработки сырья.",
      "source": "Генштаб ВСУ, ASTRA, Exilenova+, Supernova+, губернатор Самарской области"
    },
    "uk": {
      "region": "Самарська область, Сизрань",
      "target": "Сизранський НПЗ (АТ «Сизранський нафтопереробний завод» / ПАТ «НК «Роснафта»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Пізно ввечері 14 вересня 2026 року далекобійні українські дрони атакували Сизранський нафтопереробний завод компанії «Роснефть» у Самарській області. Потужність цього підприємства сягає 8,5 мільйона тонн нафти на рік, воно забезпечує дизельним пальним та авіагасом війська окупантів. Частина ударних безпілотників прорвала щільний вогонь ППО та влучила безпосередньо у виробничі потужності. Головний удар припав на установку первинної переробки АВТ-6, яку росіяни щойно відновили після попередніх пошкоджень. Водночас спалахнули ємності в резервуарному парку товарної продукції, що спричинило серію потужних вторинних вибухів. Губернатор Самарської області визнав влучання по промисловому об'єкту, а Генеральний штаб ЗСУ офіційно підтвердив успішне ураження заводу. Технологічний цикл первинної перегонки нафти на підприємстві було повністю зупинено.",
      "source": "Генштаб ЗСУ, ASTRA, Exilenova+, Supernova+, губернатор Самарської області"
    },
    "en": {
      "region": "Samara Oblast, Syzran",
      "target": "Syzran Oil Refinery (JSC Syzran Refinery / PJSC Rosneft)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Late in the evening of September 14, 2026, Ukrainian long-range strike drones attacked the Syzran Oil Refinery operated by Rosneft in Samara Oblast. With an annual capacity of 8.5 million tons of crude, this major facility is essential for supplying diesel and aviation fuel to Russian invasion forces. Several strike drones penetrated heavy air defense fire and scored direct hits on critical refining units. The primary impact severely damaged the AVT-6 atmospheric-vacuum crude distillation unit, which had only recently returned to service after prior repairs. Secondary blasts erupted across the tank farm, igniting petroleum reservoirs and triggering massive fires visible from miles away. Samara Oblast Governor Fedorishchev acknowledged damage to an industrial site, while Ukraine's General Staff confirmed the successful operation. The refinery was forced to completely halt crude processing.",
      "source": "General Staff of AFU, ASTRA, Exilenova+, Supernova+, Governor of Samara Oblast"
    },
    "images": [
      "video/syzran_npz_2026-09-14_1.mp4",
      "video/syzran_npz_2026-09-14_2.mp4",
      "images/syzran_npz_1.jpg",
      "images/syzran_npz_2.jpg",
      "images/syzran_npz_3.jpg",
      "images/syzran_npz_4.jpg"
    ]
  },
  {
    "date": "14.09.2026",
    "lat": 47.1983,
    "lng": 38.8617,
    "distance": calcMinDistance(47.1983, 38.8617),
    "ru": {
      "region": "Ростовская область, Таганрог",
      "target": "ТАНТК им. Г. М. Бериева и Завод ударных БПЛА «Атлант-Аэро» (ТагАЗ)",
      "category": "ВПК / Авиация",
      "weapon": "Ракета / Дрон",
      "details": "Поздно вечером 14 сентября 2026 года Силы обороны Украины нанесли массированный комбинированный удар ракетами и дронами по военным заводам Таганрога в Ростовской области. Основными целями стали авиационный научно-технический комплекс имени Бериева и цеха завода «Атлант-Аэро» на территории бывшего ТагАЗа. На мощностях ТАНТК противник проводит ремонт и глубокую модернизацию самолетов дальнего радиолокационного обнаружения А-50У и ракетоносцев Ту-95МС. Площадка «Атлант-Аэро» задействована в серийной сборке ударных дронов типа «Молния» и «Орион» для российской армии. В результате серии точных попаданий вспыхнули масштабные пожары, зафиксированные спутниками теплового мониторинга NASA FIRMS. Повреждены производственные корпуса досборки беспилотников, сборочные ангары и станочное оборудование. Атака нанесла серьезный ущерб авиаремонтному потенциалу и сорвала выпуск ударных дронов.",
      "source": "Генштаб ВСУ, ASTRA, Exilenova+, Supernova+, NASA FIRMS, власти Ростовской области"
    },
    "uk": {
      "region": "Ростовська область, Таганрог",
      "target": "ТАНТК ім. Г. М. Берієва та Завод ударних БПЛА «Атлант-Аеро» (ТагАЗ)",
      "category": "ВПК / Авіація",
      "weapon": "Ракета / Дрон",
      "details": "Пізно ввечері 14 вересня 2026 року Сили оборони України завдали масованого комбінованого удару ракетами та дронами по оборонних підприємствах Таганрога в Ростовській області. Головними цілями атаки стали авіаційний комплекс імені Берієва та потужності підприємства «Атлант-Аеро» на базі колишнього ТагАЗу. На ТАНТК ім. Берієва ворог виконує ремонт та модернізацію літаків дальнього радіолокаційного стеження А-50У та ракетоносців Ту-95МС. Цехи «Атлант-Аеро» серійно виготовляють ударні безпілотники типів «Молнія» та «Оріон» для фронтових підрозділів РФ. Унаслідок прямих влучань спалахнули сильні пожежі, які чітко зафіксували супутники NASA FIRMS. Руйнувань зазнали складальні ангари, виробничі лінії та верстатне обладнання заводу. Успішна операція завдала відчутного удару по військово-промисловому комплексу та призупинила виробництво дронів.",
      "source": "Генштаб ЗСУ, ASTRA, Exilenova+, Supernova+, NASA FIRMS, влада Ростовської області"
    },
    "en": {
      "region": "Rostov Oblast, Taganrog",
      "target": "Beriev Aircraft Company & Atlant-Aero UAV Plant (TagAZ site)",
      "category": "Military-Industrial / Aviation",
      "weapon": "Missile / Drone",
      "details": "Late on September 14, 2026, Ukrainian defense forces launched a major combined missile and drone strike targeting military aviation plants in Taganrog, Rostov Oblast. The primary objectives were the Beriev Aircraft Plant and the Atlant-Aero drone factory located on the grounds of the former TagAZ facility. The Beriev complex serves as the principal facility for servicing and upgrading A-50U radar planes, Tu-95MS strategic bombers, and Be-200 aircraft. Atlant-Aero houses mass production lines for Molniya and Orion combat drones used by Russian troops. Direct hits sparked severe fires across multiple workshops, detected by NASA FIRMS thermal satellites. Structural damage disabled drone final assembly workshops, aircraft maintenance hangars, and precision tooling. The strike dealt a substantial blow to Russian aerospace maintenance and disrupted drone supplies.",
      "source": "General Staff of AFU, ASTRA, Exilenova+, Supernova+, NASA FIRMS, Rostov Oblast authorities"
    },
    "images": [
      "video/taganrog_beriev_2026-09-14_1.mp4",
      "video/taganrog_beriev_2026-09-14_2.mp4",
      "images/taganrog_beriev_1.jpg",
      "images/taganrog_beriev_2.jpg",
      "images/taganrog_beriev_3.jpg"
    ]
  },
  {
    "date": "14.09.2026",
    "lat": 47.2547,
    "lng": 38.8689,
    "distance": calcMinDistance(47.2547, 38.8689),
    "ru": {
      "region": "Ростовская область, Таганрог",
      "target": "Логистический комплекс / Склад Ozon (Таганрог / Ростовская область)",
      "category": "Логистика",
      "weapon": "Дрон / Ракета",
      "details": "Поздно вечером 14 сентября 2026 года в ходе ракетного удара по военной и промышленной инфраструктуре Таганрога был поражен крупный логистический хаб Ozon. Данный распределительный склад играет стратегическую роль в снабжении прифронтовой группировки РФ, выступая ключевым сортировочным центром для экипировки, средств связи и компонентов двойного назначения. Точный ракетный прилет вызвал детонацию и сильный пожар, охвативший складские терминалы на большой площади. В результате удара произошло частичное обрушение несущих конструкций и кровли корпусов, сгорели партии подготовленного к отправке имущества. Губернатор Ростовской области Юрий Слюсарь и мэр Таганрога Светлана Камбулова официально подтвердили повреждение склада Ozon и работу экстренных служб на объекте. Персонал комплекса был экстренно эвакуирован, логистические цепочки доставки на южном направлении временно парализованы.",
      "source": "ASTRA, Supernova+, OperativnoZSU, врио губернатора Ростовской области, администрация Таганрога"
    },
    "uk": {
      "region": "Ростовська область, Таганрог",
      "target": "Логістичний комплекс / Склад Ozon (Таганрог / Ростовська область)",
      "category": "Логістика",
      "weapon": "Дрон / Ракета",
      "details": "Пізно ввечері 14 вересня 2026 року під час ракетного удару по промисловій інфраструктурі Таганрога ураження зазнав великий логістичний хаб Ozon. Цей розподільчий термінал виконує важливу роль у системі забезпечення південного угруповання окупантів, слугуючи сортувальним пунктом військового спорядження, електроніки та товарів подвійного призначення. Влучний ракетний удар спричинив потужний вибух і займання складських площ на значній території. Від вибухової хвилі частково обвалилися покрівля та опорні перекриття корпусів, знищено великі обсяги підготовлених вантажів. Губернатор Ростовської області Юрій Слюсар та мер міста Світлана Камбулова офіційно підтвердили пошкодження складу Ozon та гасіння пожежі підрозділами МНС. Персонал логістичного термінала було евакуйовано, прийом вантажів на хабі наразі повністю заблоковано.",
      "source": "ASTRA, Supernova+, OperativnoZSU, т.в.о. губернатора Ростовської області, мерія Таганрога"
    },
    "en": {
      "region": "Rostov Oblast, Taganrog",
      "target": "Ozon Logistics Complex / Distribution Center (Taganrog / Rostov Oblast)",
      "category": "Logistics",
      "weapon": "Drone / Missile",
      "details": "Late on September 14, 2026, a Ukrainian precision missile attack on logistics and industrial infrastructure in Taganrog struck a major Ozon distribution center. The hub plays an important role in supporting southern front logistics, serving as a transit facility for military gear, communication devices, and dual-use equipment. Direct missile impacts triggered explosions and a severe fire that quickly spread through warehouse sections. Blast forces caused structural collapse of roofs and supporting frameworks, destroying substantial stocks stored on site. Rostov Oblast Governor Yury Slyusar and Taganrog Mayor Svetlana Kambulova formally confirmed the strike on the Ozon warehouse and the deployment of emergency crews. Facility personnel were evacuated immediately, while operations at this southern shipping hub were completely paralyzed.",
      "source": "ASTRA, Supernova+, OperativnoZSU, Acting Governor of Rostov Oblast, Taganrog Administration"
    },
    "images": [
      "video/taganrog_ozon_2026-09-14_1.mp4",
      "images/taganrog_ozon_1.jpg",
      "images/taganrog_ozon_2.jpg"
    ]
  },
  {
    "date": "14.09.2026",
    "lat": 45.0931,
    "lng": 33.5986,
    "distance": calcMinDistance(45.0931, 33.5986),
    "ru": {
      "region": "АР Крым, Новофёдоровка",
      "target": "Военный аэродром «Саки» (43-й отдельный морской штурмовой авиационный полк ЧФ РФ)",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "В ночь на 14 сентября 2026 года Силы обороны Украины осуществили результативную атаку дальнобойными дронами по военному аэродрому «Саки» в оккупированном Крыму. Авиабаза в Новофёдоровке служит постоянным пунктом базирования 43-го отдельного морского штурмового авиаполка Черноморского флота РФ, эксплуатирующего бомбардировщики Су-24М и истребители Су-30СМ. По официальным данным Генерального штаба ВСУ, в результате точного удара беспилотников была поражена радиосистема ближней навигации (РСБН) аэродрома. Этот ключевой радиотехнический комплекс обеспечивает инструментальный заход на посадку боевых самолетов в ночных условиях и при плохой погоде. Местные жители Сакского района сообщали о серии мощных детонаций и интенсивной стрельбе ПВО около трех часов ночи. Вывод из строя навигационной аппаратуры парализовал ночные вылеты морской авиации противника в Черноморской акватории.",
      "source": "Генеральный штаб ВСУ, Крымский ветер, ASTRA, Exilenova+, Supernova+"
    },
    "uk": {
      "region": "АР Крим, Новофедорівка",
      "target": "Військовий аеродром «Саки» (43-й окремий морський штурмовий авіаполк ЧФ РФ)",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "У ніч проти 14 вересня 2026 року Сили оборони України здійснили результативну атаку далекобійними дронами по військовому аеродрому «Саки» в тимчасово окупованому Криму. Авіабаза в Новофедорівці є пунктом постійної дислокації 43-го окремого морського штурмового авіаполку Чорноморського флоту РФ, на озброєнні якого стоять літаки Су-24М та Су-30СМ. За офіційною інформацією Генерального штабу ЗСУ, внаслідок влучання безпілотників було уражено радіосистему ближньої навігації (РСБН) летовища. Цей комплекс є життєво важливим для точного наведення та посадки бойової авіації в нічний час та за складних метеоумов. Мешканці Сакського району чули численні вибухи та роботу зенітного вогню окупантів близько третьої години ночі. Знищення навігаційного вузла суттєво обмежило бойові спроможності російської морської авіації над Чорним морем.",
      "source": "Генеральний штаб ЗСУ, Кримський вітер, ASTRA, Exilenova+, Supernova+"
    },
    "en": {
      "region": "AR of Crimea, Novofedorivka",
      "target": "Saki Military Airfield (43rd Separate Naval Assault Aviation Regiment of the Black Sea Fleet)",
      "category": "Military Airfield",
      "weapon": "Drone",
      "details": "Overnight on September 14, 2026, Ukrainian defense forces executed a successful long-range drone strike on the Saki military airfield in occupied Crimea. Located in Novofedorovka, this airbase is the home station of the Russian Black Sea Fleet's 43rd Independent Naval Assault Aviation Regiment, which operates Su-24M bombers and Su-30SM multirole fighters. According to the official statement of the General Staff of the AFU, the attack scored a direct hit on the airfield's short-range radio navigation system (RSBN). This radio-technical complex is indispensable for instrument-guided nighttime landings and adverse weather flight operations. Local residents in Saksky district reported heavy anti-aircraft fire and several loud explosions around 3:00 AM. Disabling this navigation system sharply constrained Russian naval air operations across the Black Sea operational theater.",
      "source": "General Staff of AFU, Crimean Wind, ASTRA, Exilenova+, Supernova+"
    },
    "images": [
      "images/saki_airfield_1.jpg"
    ]
  }
];

// 1. Validation
let hasErrors = false;
function countSentences(text) {
  const sentences = text.split(/[.!?]+/).filter(x => x.trim().length > 0);
  return sentences.length;
}

newItems.forEach((item, idx) => {
  console.log(`Checking Item ${idx + 1}: ${item.ru.target}`);
  for (const lang of ['ru', 'uk', 'en']) {
    const text = item[lang].details;
    const charLen = text.length;
    const sentCount = countSentences(text);
    console.log(`  ${lang.toUpperCase()}: ${charLen} chars | ${sentCount} sentences | dist: ${item.distance} km`);
    if (charLen < 600 || charLen > 1000) {
      console.error(`  ERROR: ${lang.toUpperCase()} length ${charLen} is outside 600-1000!`);
      hasErrors = true;
    }
    if (sentCount < 4 || sentCount > 8) {
      console.error(`  ERROR: ${lang.toUpperCase()} sentences ${sentCount} is outside 4-8!`);
      hasErrors = true;
    }
  }

  // Check images/videos exist
  for (const media of item.images) {
    if (!fs.existsSync(media)) {
      console.error(`  ERROR: Media file missing: ${media}`);
      hasErrors = true;
    } else {
      const size = fs.statSync(media).size;
      if (media.endsWith('.mp4') && size > 1.9 * 1024 * 1024) {
        console.error(`  ERROR: Video ${media} is > 1.9MB (${size} bytes)`);
        hasErrors = true;
      }
      if ((media.endsWith('.jpg') || media.endsWith('.png')) && size > 100 * 1024) {
        console.error(`  ERROR: Image ${media} is > 100KB (${size} bytes)`);
        hasErrors = true;
      }
    }
  }
});

if (hasErrors) {
  console.error('\nFAILED VALIDATION!');
  process.exit(1);
} else {
  console.log('\nALL VALIDATION CHECKS PASSED!');
}

// 2. Read data.js, update and save
const dataPath = 'data.js';
let raw = fs.readFileSync(dataPath, 'utf8').trim();

const varMatch = raw.match(/const\s+(\w+)\s*=\s*\[/);
if (!varMatch) { console.error('Cannot detect variable name'); process.exit(1); }
const varName = varMatch[1];

let jsonStr = raw.replace(new RegExp('^const\\s+' + varName + '\\s*=\\s*'), '').replace(/;\s*$/, '').trim();
let items = JSON.parse(jsonStr);

// Filter out existing 14.09.2026 if any
items = items.filter(x => x.date !== '14.09.2026');

let maxId = 0;
items.forEach(i => { if (i.id && i.id > maxId) maxId = i.id; });

newItems.forEach((item, idx) => {
  item.id = maxId + 1 + idx;
});

items = newItems.concat(items);

const newContent = 'const ' + varName + ' = ' + JSON.stringify(items, null, 2) + ';';
fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully updated data.js with ' + newItems.length + ' items for 14.09.2026. Total items: ' + items.length);
