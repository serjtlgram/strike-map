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
    "date": "16.08.2026",
    "lat": 48.3228,
    "lng": 40.2431,
    "distance": calcMinDistance(48.3228, 40.2431),
    "ru": {
      "region": "Ростовская область, г. Каменск-Шахтинский",
      "target": "ФКП «Комбинат «Каменский» (производство ракетного топлива и взрывчатки)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 16 августа 2026 года Силы обороны Украины нанесли массированный удар дальнобойными дронами по ФКП «Комбинат «Каменский» в Ростовской области на расстоянии около 200 км от фронта. Предприятие является стратегическим объектом военно-промышленного комплекса РФ и специализируется на выпуске твердого ракетного топлива, порохов и взрывчатых составов для РСЗО «Град», «Ураган», «Смерч», «Торнадо-С» и авиационных ракет. В ходе ночной атаки украинские ударные БПЛА преодолели заградительные рубежи ПВО и поразили технологические корпуса завода. По данным сводки Генштаба ВСУ, в результате серии попаданий полностью разрушены два производственных цеха и еще четыре цеха получили тяжелые повреждения. На территории комбината вспыхнул масштабный пожар, зафиксированный спутниковыми термоточками. Поражение мощностей завода сорвало производство ракетного топлива для российской армии.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Ростовська область, м. Каменськ-Шахтинський",
      "target": "ФКП «Комбінат «Каменський» (виробництво ракетного палива та вибухівки)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 16 серпня 2026 року Сили оборони України завдали масованого удару далекобійними дронами по ФКП «Комбінат «Каменський» у Ростовській області на відстані близько 200 км від фронту. Підприємство є стратегічним об'єктом військово-промислового комплексу РФ і спеціалізується на випуску твердого ракетного палива, порохів та вибухових сумішей для РСЗВ «Град», «Ураган», «Смерч», «Торнадо-С» та авіаційних ракет. Під час нічної атаки українські ударні БПЛА подолали загороджувальні рубежі ППО і уразили технологічні корпуси заводу. За даними зведення Генштабу ЗСУ, внаслідок серії влучань повністю зруйновано два виробничі цехи та ще чотири цехи зазнали важких пошкоджень. На території комбінату спалахнула масштабна пожежа, зафіксована супутниковими термоточками. Ураження потужностей заводу зірвало виробництво ракетного палива для армії РФ.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Rostov Oblast, Kamensk-Shakhtinsky",
      "target": "Kamensky Chemical Combine (Solid Rocket Fuel and Explosives Plant)",
      "category": "Military",
      "weapon": "Drone",
      "details": "On the night of August 16, 2026, the Ukrainian Defense Forces launched a massive long-range drone strike against the Federal State Enterprise Kamensky Chemical Combine in Rostov Oblast, roughly 200 km from the front line. The combine is a vital asset of the Russian military-industrial complex, manufacturing solid rocket propellants, specialized gunpowders, and explosive compounds for Grad, Uragan, Smerch, and Tornado-S MLRS systems as well as air-launched missiles. Ukrainian strike UAVs penetrated regional air defense networks, delivering direct hits on main chemical fabrication facilities. According to the General Staff of the AFU, the strikes completely demolished two production workshops and heavily damaged four others. Severe fires erupted across the plant grounds, verified by satellite thermal imaging. The destruction paralyzed solid propellant manufacturing chains for the Russian military.",
      "source": "General Staff of AFU, GUR MO, OSINT (Astra), Media"
    }
  },
  {
    "date": "16.08.2026",
    "lat": 44.4697,
    "lng": 33.6825,
    "distance": calcMinDistance(44.4697, 33.6825),
    "ru": {
      "region": "г. Севастополь, Балаклавский район, с. Резервное (оккупированный Крым)",
      "target": "Стартовые позиции и пункт базирования БРК «Бастион» (15-я ОБРАБР ЧФ РФ)",
      "category": "ВПК",
      "weapon": "Дрон / Ракетное вооружение",
      "details": "В ночь на 16 августа 2026 года подразделения ВМС Украины во взаимодействии с Силами обороны нанесли результативный удар по стартовым позициям и району дислокации берегового ракетного комплекса «Бастион» в районе села Резервное в Балаклавском районе Севастополя. Данная позиция использовалась 15-й отдельной береговой ракетной бригадой ЧФ РФ для регулярных пусков сверхзвуковых противокорабельных ракет П-800 «Оникс» и гиперзвуковых ракет «Циркон» по украинским портам и объектам инфраструктуры. В ходе ночного налета ударные средства точно поразили площадки развертывания мобильных пусковых установок и вспомогательную командно-штабную технику. На объекте прогремели взрывы и начался пожар. По официальным сообщениям ВМС и Генштаба ВСУ, технике и личному составу ракетного дивизиона нанесен существенный урон. Удар сорвал готовящиеся залпы крылатых ракет по городам юга Украины.",
      "source": "ВМС ВСУ, Генштаб ВСУ, OSINT (Крымский ветер), СМИ"
    },
    "uk": {
      "region": "м. Севастополь, Балаклавський район, с. Резервне (окупований Крим)",
      "target": "Стартові позиції та пункт базування БРК «Бастіон» (15-та ОБРАБР ЧФ РФ)",
      "category": "ВПК",
      "weapon": "Дрон / Ракетне озброєння",
      "details": "У ніч проти 16 серпня 2026 року підрозділи ВМС України у взаємодії з Силами оборони завдали результативного удару по стартових позиціях та району дислокації берегового ракетного комплексу «Бастіон» у районі села Резервне в Балаклавському районі Севастополя. Ця позиція використовувалася 15-ю окремою береговою ракетною бригадою ЧФ РФ для регулярних пусків надзвукових протикорабельних ракет П-800 «Онікс» та гіперзвукових ракет «Циркон» по українських портах та об'єктах інфраструктури. Під час нічного нальоту ударні засоби влучно уразили майданчики розгортання мобільних пускових установок та допоміжну командно-штабну техніку. На об'єкті пролунали вибухи та почалася пожежа. За офіційними повідомленнями ВМС і Генштабу ЗСУ, техніці та особовому складу ракетного дивізіону завдано відчутних втрат. Удар зірвав підготовку чергових залпів по містах півдня України.",
      "source": "ВМС ЗСУ, Генштаб ЗСУ, OSINT (Кримський вітер), ЗМІ"
    },
    "en": {
      "region": "Sevastopol, Balaklava District, Rezervne (Occupied Crimea)",
      "target": "Bastion Coastal Defense Missile Launch and Staging Site (15th Missile Brigade)",
      "category": "Military",
      "weapon": "Drone / Strike Missiles",
      "details": "On the night of August 16, 2026, Ukrainian Navy units operating alongside the Defense Forces conducted a precision strike against the launch sites and staging positions of a Russian Bastion coastal defense missile system near Rezervne in the Balaklava District of Sevastopol. The staging area was operated by the 15th Coastal Missile Brigade of the Russian Black Sea Fleet for regular launches of supersonic P-800 Oniks and hypersonic 3M22 Zircon missiles against Ukrainian ports and coastal cities. Precision strike munitions slammed into launcher dispersal points and command-and-control support vehicles, causing secondary explosions and intense fires. The Ukrainian Navy and General Staff confirmed significant damage to combat vehicles and crew casualties. The strike severely degraded Russian coastal missile capabilities and disrupted planned missile salvos against southern Ukraine.",
      "source": "Ukrainian Navy, General Staff of AFU, OSINT, Media"
    }
  },
  {
    "date": "16.08.2026",
    "lat": 48.1139,
    "lng": 37.4967,
    "distance": calcMinDistance(48.1139, 37.4967),
    "ru": {
      "region": "Донецкая область, Покровский район, с. Карловка (оккупированная территория)",
      "target": "Склад боеприпасов и материально-технических средств ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "16 августа 2026 года Силы обороны Украины осуществили успешный огневой налет на крупный передовой полевой склад материально-технических средств и боеприпасов российских войск в районе села Карловка в Покровском районе Донецкой области. Данный тыловой узел играл важнейшую роль в материальном обеспечении наступающих российских подразделений, осуществляя накопление и распределение артиллерийских снарядов, выстрелов к минометам, стрелкового вооружения и экипировки. Точный прилет украинских средств поражения вызвал возгорание основных хранилищ и мощную вторичную детонацию складированного боекомплекта, продолжавшуюся несколько часов. По данным официальной сводки Генштаба ВСУ, складские объекты были полностью ликвидированы. Потеря данного логистического хаба вызвала снарядный голод у передовых подразделений оккупантов и сорвала их наступательные действия.",
      "source": "Генштаб ВСУ, ОСГВ «Хортица», OSINT, СМИ"
    },
    "uk": {
      "region": "Донецька область, Покровський район, с. Карлівка (окупована територія)",
      "target": "Склад боєприпасів та матеріально-технічних засобів ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "16 серпня 2026 року Сили оборони України здійснили успішний вогневий наліт на великий передовий польовий склад матеріально-технічних засобів та боєприпасів російських військ у районі села Карлівка в Покровському районі Донецької області. Цей тиловий вузол відігравав надважливу роль у матеріальному забезпеченні наступальних російських підрозділів, здійснюючи накопичення та розподіл артилерійських снарядів, мінометних пострілів, стрілецької зброї та екіпірування. Влучний приліт українських засобів ураження спричинив займання основних сховищ і потужну вторинну детонацію накопиченого боєкомплекту, що тривала кілька годин. За даними офіційного зведення Генштабу ЗСУ, складські об'єкти були повністю ліквідовані. Втрата цього логістичного хабу спричинила снарядний голод у передових підрозділів окупантів і зірвала їхні наступальні дії.",
      "source": "Генштаб ЗСУ, ОСУВ «Хортиця», OSINT, ЗМІ"
    },
    "en": {
      "region": "Donetsk Oblast, Pokrovsk District, Karlivka (Occupied Territory)",
      "target": "Forward Ammunition and Material-Technical Logistics Supply Depot of Russian Army",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 16, 2026, the Ukrainian Defense Forces carried out an effective precision strike against a major forward ammunition and material-technical logistics depot of Russian forces located near Karlivka in the Pokrovsk District of Donetsk Oblast. The logistical node served as a pivotal replenishment staging base for Russian assault groups, stockpiling artillery shells, mortar rounds, small arms ammunition, and field equipment. A direct hit by Ukrainian strike assets ignited main storage shelters, triggering massive secondary detonations that echoed for hours and leveled the compound. The General Staff of the Armed Forces of Ukraine officially verified the total destruction of the supply base. The loss of this critical ammunition depot created acute supply shortages across enemy assault detachments and stalled their localized offensive operations.",
      "source": "General Staff of AFU, OSGT Khortytsia, OSINT, Media"
    }
  },
  {
    "date": "16.08.2026",
    "lat": 47.0783,
    "lng": 35.4858,
    "distance": calcMinDistance(47.0783, 35.4858),
    "ru": {
      "region": "Запорожская область, Мелитопольский район, с. Светлодолинское (оккупированная территория)",
      "target": "Логистический железнодорожный мост и транспортный узел ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Высокоточный удар",
      "details": "16 августа 2026 года Силы обороны Украины нанесли высокоточный удар по железнодорожному мосту в районе села Светлодолинское в Мелитопольском районе Запорожской области. Данный мостовой переход через реку Молочная являлся стратегической железнодорожной артерией снабжения группировки войск РФ, по которой непрерывно шли эшелоны с тяжелой бронетехникой, боеприпасами, топливом и подкреплениями из Крыма на Запорожское направление. В результате точного попадания средств поражения повреждены несущие пролетные конструкции и ж/д полотно, что вызвало полную остановку железнодорожного трафика. Генштаб ВСУ официально подтвердил успешное поражение объекта. Выведение моста из строя перерезало основной маршрут снабжения передовых частей оккупантов и значительно ослабило их оперативную логистику.",
      "source": "Генштаб ВСУ, СБС ВСУ, OSINT, СМИ"
    },
    "uk": {
      "region": "Запорізька область, Мелітопольський район, с. Світлодолинське (окупована територія)",
      "target": "Логістичний залізничний міст та транспортний вузол ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Високоточний удар",
      "details": "16 серпня 2026 року Сили оборони України завдали високоточного удару по залізничному мосту в районі села Світлодолинське в Мелітопольському районі Запорізької області. Цей мостовий перехід через річку Молочна був стратегічною залізничною артерією постачання угруповання військ РФ, якою безперервно рухалися ешелони з важкою бронетехнікою, боєприпасами, пальним та підкріпленнями з Криму на Запорізький напрямок. У результаті влучного удару засобів ураження пошкоджено опорні прогонові конструкції та залізничне полотно, що спричинило повну зупинку руху потягів. Генштаб ЗСУ офіційно підтвердив успішне ураження об'єкта. Виведення мосту з ладу перерізало основний маршрут забезпечення передових частин окупантів і суттєво послабило їхню оперативну логістику.",
      "source": "Генштаб ЗСУ, СБС ЗСУ, OSINT, ЗМІ"
    },
    "en": {
      "region": "Zaporizhzhia Oblast, Melitopol District, Svitlodolynske (Occupied Territory)",
      "target": "Strategic Military Railway Bridge and Logistics Transit Hub of Russian Army",
      "category": "Military",
      "weapon": "Drone / Precision Strike",
      "details": "On August 16, 2026, the Ukrainian Defense Forces executed a precision strike against a strategic railway bridge near the village of Svitlodolynske in the Melitopol District of Zaporizhzhia Oblast. The bridge spanning the Molochna River served as a vital logistics rail artery for Russian occupying forces, facilitating heavy train traffic carrying armored vehicles, ammunition, fuel, and fresh reinforcements from Crimea to the Zaporizhzhia frontline. Direct precision hits severed the railway tracks and inflicted severe structural damage on the bridge spans, forcing an immediate shutdown of rail logistics. The General Staff of the Armed Forces of Ukraine officially verified the strike. Disabling this railway link cut a primary supply corridor for front-line Russian forces and degraded their theater-level logistics.",
      "source": "General Staff of AFU, SBS of AFU, OSINT, Media"
    }
  }
];

// Check details lengths (must be strictly between 600 and 1000 characters)
let hasErrors = false;
newItems.forEach((item, idx) => {
  ['ru', 'uk', 'en'].forEach(lang => {
    const len = item[lang].details.length;
    console.log(`Item ${idx} [${item[lang].target.substring(0, 35)}...] (${lang}) details length: ${len} chars`);
    if (len < 600 || len > 1000) {
      console.error(`ERROR: Item ${idx} (${lang}) length ${len} is outside 600-1000 range!`);
      hasErrors = true;
    }
  });
});

if (hasErrors) {
  console.error("Length check failed!");
  process.exit(1);
}

// Update data.js
const content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
let data = new Function('return ' + dataStr)();

// Remove existing 16.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '16.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 16 August 2026! Total items in data.js: ${data.length}`);
