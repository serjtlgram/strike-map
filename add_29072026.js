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
    "date": "29.07.2026",
    "lat": 54.5422,
    "lng": 39.7719,
    "distance": null,
    "ru": {
      "region": "Рязанская область, Рязань (Южный промышленный узел)",
      "target": "Рязанский НПЗ (АО «Рязанская нефтеперерабатывающая компания»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "29 июля 2026 года Силы обороны Украины нанесли массированный удар дальнобойными БПЛА по Рязанскому нефтеперерабатывающему заводу — одному из крупнейших в России. Генштаб ВСУ и Служба безопасности Украины официально подтвердили поражение технологической инфраструктуры НПЗ. В результате прямых попаданий на территории завода в Южном промузле вспыхнул масштабный пожар, густые столбы чёрного дыма наблюдались со всех районов города. По данным губернатора Рязанской области Павла Малкова, в ходе атаки и ликвидации последствий пострадали и были госпитализированы 6 человек. НПЗ производит значительную долю автомобильного бензина, дизеля и авиакеросина для центральных регионов РФ и группировок российских войск. Удар на расстоянии свыше 470 км от линии фронта существенно нанёс урон топливному обеспечению оккупационных сил.",
      "source": "Генштаб ВСУ, СБУ, OSINT (Astra), губернатор Малков, СМИ"
    },
    "uk": {
      "region": "Рязанська область, Рязань (Південний промисловий вузол)",
      "target": "Рязанський НПЗ (АТ «Рязанська нафтопереробна компанія»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "29 липня 2026 року Сили оборони України завдали масованого удару далекобійними БПЛА по Рязанському нафтопереробному заводу — одному з найбільших у Росії. Генштаб ЗСУ та Служба безпеки України офіційно підтвердили ураження технологічної інфраструктури НПЗ. Унаслідок прямих влучань на території заводу в Південному промвузлі спалахнула масштабна пожежа, густі стовпи чорного диму спостерігалися з усіх районів міста. За даними губернатора Рязанської області Павла Малкова, під час атаки та ліквідації наслідків постраждали й були госпіталізовані 6 осіб. НПЗ виробляє значну частку автомобільного бензину, дизеля та авіагасу для центральних регіонів РФ і угруповань російських військ. Удар на відстані понад 470 км від лінії фронту завдав суттєвої шкоди паливному забезпеченню окупаційних сил.",
      "source": "Генштаб ЗСУ, СБУ, OSINT (Astra), губернатор Малков, ЗМІ"
    },
    "en": {
      "region": "Ryazan Oblast, Ryazan (Southern Industrial Hub)",
      "target": "Ryazan Oil Refinery (JSC Ryazan Oil Refining Company / Rosneft)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On July 29, 2026, Ukrainian Defense Forces launched a massive long-range drone attack against the Ryazan Oil Refinery, one of the largest petroleum refining facilities in Russia. The AFU General Staff and the Security Service of Ukraine (SBU) officially confirmed successful strikes on the plant's industrial infrastructure. Direct hits triggered a high-intensity fire across the facility in the Southern Industrial Zone, sending thick black smoke visible throughout the city. According to Ryazan Oblast Governor Pavel Malkov, six people sustained injuries and were hospitalized during the raid and emergency response. The refinery generates a substantial portion of gasoline, diesel, and jet fuel supplying central Russia and frontline military units. Striking over 470 km from the Ukrainian border, the operation dealt a heavy blow to Russian military fuel logistics.",
      "source": "AFU General Staff, SBU, OSINT (Astra), Governor Malkov, Media"
    }
  },
  {
    "date": "29.07.2026",
    "lat": 54.6750,
    "lng": 39.5870,
    "distance": null,
    "ru": {
      "region": "Рязанская область, Рязанский район (д. Тюшево, инд. парк «Рязанский»)",
      "target": "Логистический центр 3PL / Wildberries (индустриальный парк «Рязанский»)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "29 июля 2026 года в ходе ночной атаки беспилотников на Рязанскую область под удар попал крупный логистический хаб Wildberries в индустриальном парке «Рязанский» возле деревни Тюшево. Беспилотники поразили складские блоки и инфраструктуру распределительного центра, обслуживающего центральные регионы РФ. На объекте вспыхнул масштабный пожар, в результате чего компания объявила экстренную эвакуацию сотрудников и временно закрыла склад для операций. Представители Wildberries и оперативные службы региона подтвердили возгорание на промышленных площадках и повреждение фасадных конструкций. Данный хаб используется для 3PL-логистики и распределения грузов двойного назначения. Удар на расстоянии 460 км от границы нанёс дезорганизацию в систему снабжения и товарной логистики под Рязанью.",
      "source": "OSINT (Astra), Wildberries, Губернатор Малков, СМИ РФ"
    },
    "uk": {
      "region": "Рязанська область, Рязанський район (с. Тюшево, інд. парк «Рязанський»)",
      "target": "Логістичний центр 3PL / Wildberries (індустріальний парк «Рязанський»)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "29 липня 2026 року під час нічної атаки безпілотників на Рязанську область під удар потрапив великий логістичний хаб Wildberries в індустріальному парку «Рязанський» біля села Тюшево. Безпілотники уразили складські блоки та інфраструктуру розподільчого центру, що обслуговує центральні регіони РФ. На об'єкті спалахнула масштабна пожежа, унаслідок чого компанія оголосила екстрену евакуацію співробітників і тимчасово закрила склад для операцій. Представники Wildberries та оперативні служби регіону підтвердили займання на промислових майданчиках і пошкодження фасадних конструкцій. Цей хаб використовується для 3PL-логістики та розподілу вантажів подвійного призначення. Удар на відстані 460 км від кордону спричинив дезорганізацію в системі забезпечення та товарної логістики під Рязанню.",
      "source": "OSINT (Astra), Wildberries, Губернатор Малков, ЗМІ РФ"
    },
    "en": {
      "region": "Ryazan Oblast, Ryazan District (Tyushevo village, Ryazansky Industrial Park)",
      "target": "Wildberries Logistics & Warehouse Center (Ryazansky Industrial Park)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On July 29, 2026, during an overnight UAV attack on Ryazan Oblast, long-range Ukrainian drones struck the major Wildberries logistics hub in the Ryazansky Industrial Park near Tyushevo village. Drones hit warehouse modules and distribution infrastructure serving central Russian commercial and military supply networks. A large-scale fire erupted at the complex, forcing Wildberries to order an emergency evacuation of staff and temporarily suspend warehouse operations. Company officials and regional emergency services confirmed fires across industrial sections and damage to warehouse structures. The facility acts as a critical 3PL logistics node for general goods and dual-use supply chains. Striking 460 km from the front line, the raid disrupted regional distribution channels and logistical operations around Ryazan.",
      "source": "OSINT (Astra), Wildberries, Governor Malkov, Russian media"
    }
  },
  {
    "date": "29.07.2026",
    "lat": 52.8580,
    "lng": 33.4560,
    "distance": null,
    "ru": {
      "region": "Брянская область, Почепский район (г. Почеп)",
      "target": "Радиолокационная станция (РЛС) ПВО/ПРО в районе Почепа",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 29 июля 2026 года Силы обороны Украины нанесли высокоточный удар по радиолокационной станции (РЛС) противовоздушной и противоракетной обороны в районе города Почеп Брянской области. Генштаб ВСУ официально подтвердил успешное поражение объекта. В результате детонации боевых частей ударных дронов антенна и радиоэлектронное оборудование станции получили критические повреждения, на позиции зафиксирован пожар. Почепская РЛС обеспечивала мониторинг воздушного пространства и целеуказание для комплексов ПВО, прикрывающих западный фланг группировки войск РФ. Удар на расстоянии 160 км от линии фронта ослепил ключевой участок ПВО противника в Брянской области, облегчив пролёт украинских БПЛА вглубь территории РФ.",
      "source": "Генштаб ВСУ, OSINT (Astra), СМИ РФ"
    },
    "uk": {
      "region": "Брянська область, Почепський район (м. Почеп)",
      "target": "Радіолокаційна станція (РЛС) ППО/ПРО в районі Почепа",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 29 липня 2026 року Сили оборони України завдали високоточного удару по радіолокаційній станції (РЛС) протиповітряної та протиракетної оборони в районі міста Почеп Брянської області. Генштаб ЗСУ офіційно підтвердив успішне ураження об'єкта. Унаслідок детонації бойових частин ударних дронів антена та радіоелектронне обладнання станції зазнали критичних пошкоджень, на позиції зафіксовано пожежу. Почепська РЛС забезпечувала моніторинг повітряного простору та цілевказання для комплексів ППО, що прикривають західний фланг угруповання військ РФ. Удар на відстані 160 км від лінії фронту засліпив ключову ділянку ППО противника в Брянській області, полегшивши проліт українських БПЛА вглиб території РФ.",
      "source": "Генштаб ЗСУ, OSINT (Astra), ЗМІ РФ"
    },
    "en": {
      "region": "Bryansk Oblast, Pochep District (Pochep)",
      "target": "Air Defense Radar Station (Pochep, Bryansk Oblast)",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On the night of July 29, 2026, the Ukrainian Defense Forces carried out a precision strike on an air defense radar station (Radar) near Pochep, Bryansk Oblast. The AFU General Staff officially confirmed the successful hit on the military radar installation. Explosions caused by attacking drones inflicted critical damage on the radar antenna array and electronic systems, triggering a fire at the position. The Pochep radar site provided airspace monitoring and target tracking for Russian SAM systems defending the western border region. Positioned 160 km from the frontline, destroying this radar node blinded a vital sector of Russian air defense coverage in Bryansk Oblast, facilitating further deep UAV penetrations into Russian airspace.",
      "source": "AFU General Staff, OSINT (Astra), Russian media"
    }
  },
  {
    "date": "29.07.2026",
    "lat": 57.9150,
    "lng": 56.1750,
    "distance": null,
    "ru": {
      "region": "Пермский край, Пермь (промзона Осенцы)",
      "target": "НПЗ «ЛУКОЙЛ-Пермнефтеоргсинтез» (установка первичной переработки АВТ-5)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "29 июля 2026 года украинские БПЛА дальнего радиуса действия атаковали один из крупнейших нефтеперерабатывающих заводов Урала — «ЛУКОЙЛ-Пермнефтеоргсинтез» в Перми. Служба безопасности Украины (СБУ) официально подтвердила успешное поражение объекта. Удар пришёлся прямо по ключевой установке первичной переработки нефти ЭЛОУ-АВТ-5 (CDU-5), вызвав сильный пожар и вынудив полностью остановить её работу. По данным международной аналитики Reuters, выведение АВТ-5 из строя лишило завод около 34% суммарных мощностей переработки. Губернатор Пермского края Дмитрий Махонин подтвердил массированный налёт БПЛА на регион. Удар на рекордном расстоянии около 1500 км от линии фронта существенно снизил производство дизельного и авиационного топлива для нужд армии РФ.",
      "source": "СБУ, Reuters, OSINT (Astra), губернатор Махонин, СМИ"
    },
    "uk": {
      "region": "Пермський край, Перм (промзона Осенці)",
      "target": "НПЗ «ЛУКОЙЛ-Пермнафтооргсинтез» (установка первинної переробки АВТ-5)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "29 липня 2026 року українські БПЛА далекого радіуса дії атакували один із найбільших нафтопереробних заводів Уралу — «ЛУКОЙЛ-Пермнафтооргсинтез» у Пермі. Служба безпеки України (СБУ) офіційно підтвердила успішне ураження об'єкта. Удар припав безпосередньо по ключовій установці первинної переробки нафти ЕЛОУ-АВТ-5 (CDU-5), спричинивши сильну пожежу та змусивши повністю зупинити її роботу. За даними міжнародної аналітики Reuters, виведення АВТ-5 з ладу позбавило завод близько 34% сумарних потужностей переробки. Губернатор Пермського краю Дмитро Махонін підтвердив масований наліт БПЛА на регіон. Удар на рекордному віддаленні близько 1500 км від лінії фронту суттєво знизив виробництво дизельного та авіаційного пального для потреб армії РФ.",
      "source": "СБУ, Reuters, OSINT (Astra), губернатор Махонін, ЗМІ"
    },
    "en": {
      "region": "Perm Krai, Perm (Osentsy industrial area)",
      "target": "Perm Lukoil Oil Refinery (CDU-5 primary refining unit)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On July 29, 2026, Ukrainian long-range strike drones targeted the LUKOIL-Permnefteorgsintez oil refinery in Perm, one of the largest petroleum complexes in the Urals. The Security Service of Ukraine (SBU) officially confirmed the successful strike on the energy infrastructure. The attack directly damaged the primary crude distillation unit CDU-5 (ELOU-AVT-5), igniting a heavy fire and forcing an emergency shutdown. According to Reuters analysis, disabling CDU-5 wiped out roughly 34% of the refinery's total processing capacity. Perm Krai Governor Dmitry Makhonin acknowledged the massive drone raid over the region. Striking at a record distance of nearly 1,500 km from the Ukrainian border, the operation delivered a major blow to Russian military diesel and aviation fuel supplies.",
      "source": "SBU, Reuters, OSINT (Astra), Governor Makhonin, Media"
    }
  }
];

// Validate sentence count & character length
console.log('--- VALIDATING ITEMS ---');
let hasError = false;
items.forEach((item, idx) => {
    item.distance = calcMinDistance(item.lat, item.lng);
    ['ru', 'uk', 'en'].forEach(lang => {
        const text = item[lang].details;
        const charLen = text.length;
        const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);
        const sentenceCount = sentences.length;
        console.log(`Item #${idx+1} [${lang}] Target: "${item[lang].target}": ${charLen} chars, ${sentenceCount} sentences, dist=${item.distance}km.`);
        if (charLen < 600 || charLen > 1000) {
            console.error(`ERROR: Item #${idx+1} [${lang}] char length ${charLen} is outside [600, 1000] range!`);
            hasError = true;
        }
        if (sentenceCount < 4 || sentenceCount > 8) {
            console.error(`ERROR: Item #${idx+1} [${lang}] sentence count ${sentenceCount} is outside [4, 8] range!`);
            hasError = true;
        }
    });
});

if (hasError) {
    console.error('Validation failed!');
    process.exit(1);
}

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
  data.unshift(item);
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully added ${items.length} items for date 29.07.2026 into data.js`);
