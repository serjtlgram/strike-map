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
    "date": "07.09.2026",
    "lat": 47.2461,
    "lng": 38.8400,
    "distance": calcMinDistance(47.2461, 38.8400),
    "ru": {
      "region": "Ростовская область, Таганрог",
      "target": "Военный аэродром «Таганрог-Центральный» (325-й авиаремонтный завод)",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "В ночь на 7 сентября 2026 года украинские ударные дроны атаковали военный аэродром «Таганрог-Центральный» в Ростовской области. Этот объект играет важную роль в переброске сил на фронт и служит базой 325-го авиаремонтного завода, восстанавливающего военно-транспортные борта Ил-76. Около трех часов ночи на летном поле прогремели взрывы, после чего спутники зафиксировали сильный очаг возгорания на стоянке авиатехники. По данным спутниковых снимков и отчетов OSINT-аналитиков, в результате прилета на стоянке был полностью уничтожен многоцелевой вертолет Ми-8, а находившийся рядом ударный вертолет Ми-35 получил осколочные повреждения. Губернатор региона признал массированный налет беспилотников сразу на семь районов, отчитавшись о перехвате воздушных целей силами ПВО. О потерях авиатехники и ущербе на закрытом военном объекте российские официальные лица предпочли умолчать.",
      "source": "OSINT (Absolutely Reliable), спутниковые снимки, губернатор Ростовской области, росСМИ"
    },
    "uk": {
      "region": "Ростовська область, Таганрог",
      "target": "Військовий аеродром «Таганрог-Центральний» (325-й авіаремонтний завод)",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "У ніч проти 7 вересня 2026 року українські далекобійні дрони завдали удару по військовому аеродрому «Таганрог-Центральний» у Ростовській області. Летовище служить важливим вузлом перекидання живої сили й техніки, а також базою 325-го авіаремонтного заводу, що обслуговує літаки Іл-76 та борти ДРЛВ. Близько третьої години ночі на території бази пролунали вибухи, після чого супутникові системи зафіксували пожежу на стоянці армійської авіації. За результатами супутникової розвідки та висновками аналітиків OSINT, прямим влучанням було повністю знищено гелікоптер Мі-8, а ударний Мі-35 зазнав серйозних уламкових ушкоджень. Губернатор регіону підтвердив масовану атаку дронів на сім районів області, традиційно відзвітувавши про збиття більшості цілей. Водночас фактичне знищення бойової авіації на військовому летовищі російське командування приховало.",
      "source": "OSINT (Absolutely Reliable), супутникові знімки, губернатор Ростовської області, росЗМІ"
    },
    "en": {
      "region": "Rostov Oblast, Taganrog",
      "target": "Taganrog-Centralny Military Airfield (325th Aircraft Repair Plant)",
      "category": "Military Airbase",
      "weapon": "Drone",
      "details": "Overnight into September 7, 2026, Ukrainian strike drones hit the Taganrog-Centralny military airfield in Rostov Oblast. The airbase serves as an important logistical hub for troop deployment and hosts the 325th Aircraft Repair Plant, which overhauls Il-76 transport planes. Explosions rattled the airfield around 02:44 local time, followed by satellite thermal sensors detecting a prominent fire across the aircraft parking apron. Independent OSINT analysis of post-strike satellite imagery confirmed that a Mi-8 multipurpose helicopter was completely destroyed, while an adjacent Mi-35 attack helicopter sustained severe shrapnel damage. Rostov Oblast Governor confirmed a large-scale drone raid across seven districts, claiming defense systems intercepted the incoming targets. Russian military officials withheld any confirmation regarding damaged or destroyed helicopters on the secured airfield tarmac.",
      "source": "OSINT (Absolutely Reliable), Satellite Imagery, Rostov Oblast Governor, Russian Media"
    }
  },
  {
    "date": "07.09.2026",
    "lat": 57.9150,
    "lng": 56.1750,
    "distance": calcMinDistance(57.9150, 56.1750),
    "ru": {
      "region": "Пермский край, Пермь (промузел Осенцы)",
      "target": "Нефтеперерабатывающий завод «ЛУКОЙЛ-Пермнефтеоргсинтез» (ООО «ЛУКОЙЛ-Пермнефтеоргсинтез»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 7 сентября 2026 года украинские беспилотники нанесли дальнобойный удар по нефтеперерабатывающему заводу «ЛУКОЙЛ-Пермнефтеоргсинтез» на расстоянии свыше 1550 километров от фронта. Предприятие в промузле Осенцы является одним из мощнейших НПЗ в стране, перерабатывая более 13 миллионов тонн сырья ежегодно и снабжая топливом военную технику на восточном направлении. Президент Украины Владимир Зеленский в обращении от 7 сентября прямо назвал поражение НПЗ в Пермском регионе среди ключевых успехов операции. Во время налета в пермском аэропорту Большое Савино ввели план «Ковер» и задержали десятки рейсов, а над городом выли сирены воздушной тревоги. Местные жители слышали пролет дронов и серию взрывов со стороны заводских площадок, где поднялся столб дыма. Российское военное ведомство заявило о сбитии БПЛА в небе над Прикамьем, традиционно объяснив задымление последствиями падения обломков.",
      "source": "Официальное обращение Президента Украины, Минобороны РФ, очевидцы, росСМИ"
    },
    "uk": {
      "region": "Пермський край, Перм (промвузол Осенці)",
      "target": "Нафтопереробний завод «ЛУКОЙЛ-Пермнафтооргсинтез» (ТОВ «ЛУКОЙЛ-Пермнафтооргсинтез»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 7 вересня 2026 року українські безпілотники завдали удару по нафтопереробному заводу «ЛУКОЙЛ-Пермнафтооргсинтез» на рекордній дистанції понад 1550 кілометрів від лінії фронту. Завод у промвузлі Осенці є одним із найпотужніших підприємств галузі з обсягом переробки понад 13 мільйонів тонн нафти на рік, виробляючи пальне для військової техніки окупантів. Президент України Володимир Зеленський у своєму зверненні 7 вересня офіційно підтвердив успішне ураження нафтопереробних потужностей у Пермському краї. Через загрозу дронів в аеропорту Велике Савіно оголосили план «Килим» із призупиненням усіх рейсів, а в місті лунали сигнали тривоги. Мешканці фіксували звуки двигунів і вибухи з боку технологічних установок заводу, над якими піднявся дим. Міноборони РФ заявило про відбиття нальоту в повітряному просторі Прикам'я, звично списавши інцидент на локальне падіння уламків.",
      "source": "Офіційне звернення Президента України, Міноборони РФ, очевидці, росЗМІ"
    },
    "en": {
      "region": "Perm Krai, Perm (Osentsy Industrial District)",
      "target": "LUKOIL-Permnefteorgsintez Oil Refinery (LLC LUKOIL-Permnefteorgsintez)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Overnight into September 7, 2026, Ukrainian deep-strike UAVs attacked the LUKOIL-Permnefteorgsintez oil refinery located more than 1,550 kilometers from the frontline. The refinery in the Osentsy industrial zone is among Russia's most advanced facilities, processing over 13 million tons of crude annually and producing specialized fuel for military logistics. Ukrainian President Volodymyr Zelensky explicitly confirmed hits on oil refineries in Perm Krai during his official address on September 7. The raid triggered the 'Kover' emergency air alert at Perm's Bolshoe Savino airport, halting incoming and outgoing flights while air raid sirens sounded across the city. Residents reported the distinct whine of drone engines followed by detonations and rising smoke over the refinery premises. The Russian Defense Ministry claimed its air defenses intercepted drones over the region, attributing ground fires to falling wreckage.",
      "source": "Official Address of the President of Ukraine, Russian MoD, Eyewitnesses, Russian Media"
    }
  },
  {
    "date": "07.09.2026",
    "lat": 58.0041,
    "lng": 55.9763,
    "distance": calcMinDistance(58.0041, 55.9763),
    "ru": {
      "region": "Пермский край, Пермь (Кировский район, мкр-н Закамск)",
      "target": "ФКП «Пермский пороховой завод» и АО «Пермский завод «Машиностроитель»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 7 сентября 2026 года группа украинских ударных дронов атаковала стратегический кластер ВПК в Кировском районе Перми, преодолев более 1550 километров. Главными целями стали Пермский пороховой завод и машиностроительный завод «Машиностроитель», выпускающие ракетные двигатели, заряды к РСЗО «Град» и «Смерч», а также компоненты систем ПВО. Около трех часов ночи жители Закамска сообщили о громких взрывах и густом задымлении над закрытыми площадками оборонных производств. Местная противовоздушная оборона вела огонь по низколетящим целям над городскими кварталами. В результате падения обломков одного из подбитых аппаратов на улице Светлогорской пострадал многоквартирный дом, где погиб один человек и еще четверо были ранены. Региональные власти заявили об отражении налета и перехвате 27 беспилотников, постаравшись скрыть информацию о масштабах поражения оборонных цехов.",
      "source": "ASTRA, оперативные службы Пермского края, губернатор, очевидцы, росСМИ"
    },
    "uk": {
      "region": "Пермський край, Перм (Кіровський район, мкр-н Закамськ)",
      "target": "ФКП «Пермський пороховий завод» та АТ «Пермський завод «Машиностроитель»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 7 вересня 2026 року далекобійні українські безпілотники атакували оборонний кластер у Кіровському районі Пермі на відстані понад 1550 кілометрів. Під ударом опинилися Пермський пороховий завод та завод «Машиностроитель», що виготовляють твердопаливні ракетні двигуни, заряди до систем «Град» і «Смерч» та боєприпаси для ППО. Близько третьої години ночі в Закамську пролунали серійні вибухи, після чого над корпусами оборонних підприємств піднявся густий дим. Російські підрозділи ППО намагалися збивати дрони з великокаліберної зброї безпосередньо над житловими кварталами. Через падіння уламків перехопленого БПЛА на вулиці Світлогірській зазнала пошкоджень житлова багатоповерхівка, внаслідок чого одна людина загинула, а четверо дістали поранення. Влада Прикам'я відзвітувала про знешкодження 27 безпілотників, уникаючи коментарів щодо руйнувань на військових заводах.",
      "source": "ASTRA, оперативні служби Пермського краю, губернатор, очевидці, росЗМІ"
    },
    "en": {
      "region": "Perm Krai, Perm (Kirovsky District, Zakamsk)",
      "target": "Perm Gunpowder Plant & JSC Perm Mashinostroitel Plant",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "Overnight into September 7, 2026, Ukrainian long-range strike drones targeted a major defense production cluster in Perm's Kirovsky District, flying over 1,550 kilometers. The primary targets were the Perm Gunpowder Plant and the Mashinostroitel plant, both producing rocket motors, propellant charges for Grad and Smerch MLRS, and air defense components. Around 03:00 local time, residents in the Zakamsk neighborhood reported heavy explosions and rising plumes of smoke over the defense manufacturing facilities. Local air defense units engaged low-flying drones with anti-aircraft fire over populated city areas. Debris from an intercepted drone struck an apartment building on Svetlogorskaya Street, killing one civilian and injuring four others. Perm regional authorities claimed shooting down 27 drones while concealing information regarding the extent of damage inside the secured military production facilities.",
      "source": "ASTRA, Perm Krai Emergency Services, Governor, Eyewitnesses, Russian Media"
    }
  },
  {
    "date": "07.09.2026",
    "lat": 55.5786,
    "lng": 51.9365,
    "distance": calcMinDistance(55.5786, 51.9365),
    "ru": {
      "region": "Республика Татарстан, Нижнекамск (промышленная зона)",
      "target": "Нефтеперерабатывающий комплекс «ТАНЕКО» (АО «ТАНЕКО», ПАО «Татнефть») / «ТАИФ-НК»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 7 сентября 2026 года украинские ударные дроны совершили налет на Закамский нефтехимический узел в Татарстане, преодолев более 1200 километров. Основной целью стал нефтеперерабатывающий комплекс «ТАНЕКО» компании «Татнефть» и смежное предприятие «ТАИФ-НК» в промзоне Нижнекамска. Данный комплекс входит в число ключевых предприятий отрасли мощностью свыше 16 миллионов тонн нефти в год, обеспечивая армию РФ дизелем и авиационным керосином. Президент Украины Владимир Зеленский в вечернем обращении 7 сентября подтвердил поражение НПЗ в Татарстане силами украинских дальнобойных средств. Из-за налета власти республики с двух часов ночи ввели тревогу в Нижнекамске и Елабуге, а аэропорт Бегишево экстренно закрыл небо. Правительство региона признало факт атаки и повреждения на промышленном объекте, заявив об отсутствии пострадавших и продолжении технологического процесса.",
      "source": "Официальное обращение Президента Украины, власти Республики Татарстан, Росавиация, росСМИ"
    },
    "uk": {
      "region": "Республіка Татарстан, Нижньокамськ (промислова зона)",
      "target": "Нафтопереробний комплекс «ТАНЕКО» (АТ «ТАНЕКО», ПАТ «Татнєфть») / «ТАЇФ-НК»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 7 вересня 2026 року далекобійні українські дрони здійснили наліт на Закамський нафтохімічний вузол у Татарстані, подолавши понад 1200 кілометрів. Головною мішенню став нафтопереробний комплекс «ТАНЕКО» компанії «Татнєфть» та сусідній завод «ТАЇФ-НК» у промисловій зоні Нижньокамська. Цей комплекс є одним із найбільших у Росії з потужністю переробки понад 16 мільйонів тонн нафти на рік, постачаючи моторне пальне окупаційним військам. Президент України Володимир Зеленський у своєму зверненні 7 вересня офіційно підтвердив ураження нафтопереробних потужностей у Татарстані. Через небезпеку дронів влада республіки з другої ночі оголосила повітряну тривогу в Нижньокамську та Єлабузі, а аеропорт Бегішево призупинив роботу. Керівництво Татарстану підтвердило атаку та пошкодження на території промислового підприємства, стверджуючи про відсутність загиблих.",
      "source": "Офіційне звернення Президента України, влада Республіки Татарстан, Росавіація, росЗМІ"
    },
    "en": {
      "region": "Republic of Tatarstan, Nizhnekamsk (Industrial Zone)",
      "target": "TANECO Oil Refining Complex (JSC TANECO, PJSC Tatneft) / TAIF-NK",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Overnight into September 7, 2026, Ukrainian long-range strike drones raided the Zakamye petrochemical cluster in Tatarstan, traversing over 1,200 kilometers. The key objective was the TANECO refining complex operated by Tatneft alongside the neighboring TAIF-NK facility in the Nizhnekamsk industrial district. As one of Russia's largest and most technologically advanced refineries, it processes over 16 million tons of crude annually, supplying diesel and jet fuel to military units. Ukrainian President Volodymyr Zelensky formally acknowledged hitting oil refineries across Tatarstan in his evening address on September 7. The drone intrusion prompted local officials to sound alerts across Nizhnekamsk and Yelabuga at 02:00, while Begishevo airport grounded all flight operations. Tatarstan regional authorities confirmed the raid and physical damage to an industrial facility, claiming no casualties occurred.",
      "source": "Official Address of the President of Ukraine, Tatarstan Authorities, Rosaviatsiya, Russian Media"
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
let raw = fs.readFileSync(dataPath, 'utf8');

const varMatch = raw.match(/const\s+(\w+)\s*=\s*\[/);
if (!varMatch) { console.error('Cannot detect variable name'); process.exit(1); }
const varName = varMatch[1];

let items = JSON.parse(raw.replace(new RegExp('^const\\s+' + varName + '\\s*=\\s*'), '').replace(/;\s*$/, ''));

// Filter out any existing 07.09.2026 items
items = items.filter(x => x.date !== '07.09.2026');

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
console.log('Successfully updated data.js with ' + newItems.length + ' items for 07.09.2026. Total items: ' + items.length);
