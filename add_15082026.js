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
    "date": "15.08.2026",
    "lat": 55.4483,
    "lng": 42.5028,
    "distance": calcMinDistance(55.4483, 42.5028),
    "ru": {
      "region": "Нижегородская область, г.о. Навашинский, п. Саваслейка",
      "target": "Военный аэродром «Саваслейка» (44-й смешанный авиаполк, база МиГ-31К)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 15 августа 2026 года Силы обороны Украины совместно со спецслужбами осуществили массированный налет дальнобойных БПЛА на военный аэродром «Саваслейка» в Нижегородской области на расстоянии около 650 км от границы. Авиабаза является ключевым пунктом базирования истребителей-перехватчиков МиГ-31К, способных нести гиперзвуковые аэробаллистические ракеты Х-47М2 «Кинжал». В ходе ночной атаки украинские ударные дроны прорвали объектовое кольцо ПВО и поразили склады горюче-смазочных материалов и площадку технико-эксплуатационной части (ТЭЧ). На территории объекта произошла серия мощных взрывов и масштабный пожар. Российское командование было вынуждено в экстренном порядке поднимать в воздух дежурные борты МиГ-31К для перебазирования на запасные аэродромы. Поражение инфраструктуры авиабазы сорвало подготовку запланированных ракетных ударов по Украине.",
      "source": "Генштаб ВСУ, ГУР МО, СБУ, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Нижньогородська область, м.о. Навашинський, сел. Саваслейка",
      "target": "Військовий аеродром «Саваслейка» (44-й змішаний авіаполк, база МіГ-31К)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 15 серпня 2026 року Сили оборони України спільно зі спецслужбами здійснили масований наліт далекобійних БПЛА на військовий аеродром «Саваслейка» в Нижньогородській області на відстані близько 650 км від кордону. Авіабаза є ключовим пунктом базування винищувачів-перехоплювачів МіГ-31К, здатних нести гіперзвукові аеробалістичні ракети Х-47М2 «Кинджал». Під час нічної атаки українські ударні дрони прорвали об'єктове кільце ППО та уразили склади пально-мастильних матеріалів і майданчик техніко-експлуатаційної частини (ТЕЧ). На території об'єкта сталася серія потужних вибухів і масштабна пожежа. Російське командування було змушене в екстреному порядку піднімати в повітря чергові борти МіГ-31К для перебазування на запасні аеродроми. Ураження інфраструктури авіабази зірвало підготовку запланованих ракетних ударів по Україні.",
      "source": "Генштаб ЗСУ, ГУР МО, СБУ, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Nizhny Novgorod Oblast, Navashinsky District, Savasleyka",
      "target": "Savasleyka Military Airbase (44th Composite Aviation Regiment, MiG-31K Base)",
      "category": "Military",
      "weapon": "Drone",
      "details": "On the night of August 15, 2026, the Ukrainian Defense Forces in coordination with intelligence agencies launched a massive long-range drone attack against the Savasleyka military airbase in Nizhny Novgorod Oblast, approximately 650 km from the border. The airbase serves as the premier operational staging hub for MiG-31K interceptor jets armed with Kh-47M2 Kinzhal hypersonic aero-ballistic missiles. Ukrainian attack UAVs penetrated point air defenses, striking airfield fuel and lubricants depots and technical maintenance facilities. The strikes triggered secondary explosions and large-scale fires across the military airfield. Russian commanders were forced to scramble multiple MiG-31K aircraft under emergency protocols to disperse them to northern backup airfields. The destruction of base infrastructure disrupted scheduled missile strike preparations against Ukraine.",
      "source": "General Staff of AFU, GUR MO, SBU, OSINT (Astra), Media"
    }
  },
  {
    "date": "15.08.2026",
    "lat": 53.2086,
    "lng": 50.2981,
    "distance": calcMinDistance(53.2086, 50.2981),
    "ru": {
      "region": "Самарская область, г. Самара (Кировский район)",
      "target": "Ракетно-космический центр «Прогресс» (АО «РКЦ «Прогресс», ГК «Роскосмос»)",
      "category": "ВПК",
      "weapon": "Дальнобойные ракеты / дроны («Фламинго»)",
      "details": "В ночь на 15 августа 2026 года Силы обороны Украины нанесли высокоточный ракетный удар новейшими дальнобойными средствами «Фламинго» по флагману российской ракетно-космической индустрии — АО «РКЦ «Прогресс» в Самаре на удалении свыше 900 км от линии фронта. Завод является стратегическим оборонным предприятием, производящим ракеты-носители «Союз-2.1б» и космические аппараты оптической и радиолокационной разведки для Минобороны РФ. В результате прямого попадания повреждены сборочные цеха ракетных ступеней и производственные участки бортовой микроэлектроники, на предприятии вспыхнул сильный пожар. Губернатор Самарской области подтвердил факт удара по промышленному объекту и наличие пострадавших. Поражение завода нанесло существенный урон производственным цепочкам выпуска военной космической техники и спутников связи.",
      "source": "Генштаб ВСУ, ГУР МО, губернатор Федорищев, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Самарська область, м. Самара (Кіровський район)",
      "target": "Ракетно-космічний центр «Прогрес» (АТ «РКЦ «Прогрес», ДК «Роскосмос»)",
      "category": "ВПК",
      "weapon": "Далекобійні ракети / дрони («Фламінго»)",
      "details": "У ніч проти 15 серпня 2026 року Сили оборони України завдали високоточного ракетного удару новітніми далекобійними засобами «Фламінго» по флагману російської ракетно-космічної індустрії — АТ «РКЦ «Прогрес» у Самарі на відстані понад 900 км від лінії фронту. Завод є стратегічним оборонним підприємством, що виготовляє ракети-носії «Союз-2.1б» та космічні апарати оптичної і радіолокаційної розвідки для Міноборони РФ. У результаті прямого влучання пошкоджено складальні цехи ракетних ступенів та виробничі ділянки бортової мікроелектроніки, на підприємстві спалахнула сильна пожежа. Губернатор Самарської області підтвердив факт удару по промисловому об'єкту та наявність постраждалих. Ураження заводу завдало суттєвої шкоди виробничим ланцюжкам випуску військової космічної техніки та супутників зв'язку.",
      "source": "Генштаб ЗСУ, ГУР МО, губернатор Федорищев, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Samara Oblast, Samara (Kirovsky District)",
      "target": "Progress Rocket Space Centre (JSC Progress / Roscosmos State Corporation)",
      "category": "Military",
      "weapon": "Flamingo long-range strike missiles / UAVs",
      "details": "On the night of August 15, 2026, the Ukrainian Defense Forces carried out a precision strike using domestic Flamingo long-range cruise systems against the JSC Progress Rocket Space Centre in Samara, over 900 km from the frontline. As a premier defense contractor, Progress manufactures Soyuz-2.1b carrier rockets and high-resolution optical and radar reconnaissance satellites for the Russian Ministry of Defense. Direct missile hits struck final rocket assembly halls and microelectronics fabrication sections, sparking intense industrial fires. Samara Regional Governor Vyacheslav Fedorishev acknowledged the strike on the industrial facility, confirming injuries among personnel. The damage inflicted a major blow to Russia's military satellite production cycle and strategic orbital launch timelines.",
      "source": "General Staff of AFU, GUR MO, Governor Fedorishev, OSINT (Astra), Media"
    }
  },
  {
    "date": "15.08.2026",
    "lat": 55.3780,
    "lng": 37.5850,
    "distance": calcMinDistance(55.3780, 37.5850),
    "ru": {
      "region": "Московская область, г.о. Подольск, дер. Коледино",
      "target": "Распределительный логистический комплекс Wildberries «Коледино»",
      "category": "Логистический центр",
      "weapon": "Дрон",
      "details": "15 августа 2026 года Силы обороны Украины нанесли удар беспилотными летательными аппаратами по крупнейшему флагманскому распределительному логистическому хабу Wildberries «Коледино» в Подольском районе Московской области. Складской гигант площадью свыше 200 тысяч квадратных метров является центральным узлом распределения товарных потоков, через который активно переправлялись товары двойного назначения, оптические приборы, элементы связи и армейское снаряжение. В результате ночного налета несколько ударных БПЛА пробили кровлю терминала, вызвав масштабный пожар на складских стеллажах, сопровождавшийся густым черным дымом и частичным обрушением металлоконструкций. Экстренные службы провели срочную эвакуацию персонала комплекса. Работа главного логистического распределительного центра в Подмосковье была полностью парализована.",
      "source": "OSINT (Astra), МЧС РФ, пресс-служба Wildberries, СМИ"
    },
    "uk": {
      "region": "Московська область, м.о. Подольськ, присілок Коледіно",
      "target": "Розподільчий логістичний комплекс Wildberries «Коледіно»",
      "category": "Логістичний центр",
      "weapon": "Дрон",
      "details": "15 серпня 2026 року Сили оборони України завдали удару безпілотними літальними апаратами по найбільшому флагманському розподільчому логістичному хабу Wildberries «Коледіно» в Подільському районі Московської області. Складський гігант площею понад 200 тисяч квадратних метрів є центральним вузлом розподілу товарних потоків, через який активно переправлялися товари подвійного призначення, оптичні прилади, елементи зв'язку та армійське спорядження. У результаті нічного нальоту кілька ударних БПЛА пробили покрівлю термінала, спричинивши масштабну пожежу на складських стелажах, що супроводжувалася густим чорним димом і частковим обваленням металоконструкцій. Екстрені служби провели термінову евакуацію персоналу комплексу. Роботу головного логістичного розподільчого центру в Підмосков'ї було повністю паралізовано.",
      "source": "OSINT (Astra), МНС РФ, прес-служба Wildberries, ЗМІ"
    },
    "en": {
      "region": "Moscow Oblast, Podolsk District, Koledino",
      "target": "Wildberries Koledino Mega-Distribution and Logistics Hub",
      "category": "Logistics Hub",
      "weapon": "Drone",
      "details": "On August 15, 2026, Ukrainian attack UAVs struck the flagship Wildberries Koledino mega-distribution logistics hub located in the Podolsk District of Moscow Oblast. Spanning more than 200,000 square meters, the hub serves as Russia's premier freight sorting platform handling substantial throughput of dual-use electronics, optical gear, field gear, and military logistics supplies. Several strike drones penetrated the terminal roof, igniting an extensive fire across high-bay storage racks accompanied by dense smoke columns and partial structural collapses. Emergency responders carried out immediate evacuations of warehouse workers. Operations at the primary central logistics distribution hub in the Moscow region were completely paralyzed, triggering widespread freight processing delays.",
      "source": "OSINT (Astra), EMERCOM of Russia, Wildberries PR, Media"
    }
  },
  {
    "date": "15.08.2026",
    "lat": 48.9050,
    "lng": 38.4300,
    "distance": calcMinDistance(48.9050, 38.4300),
    "ru": {
      "region": "Луганская область, г. Лисичанск (оккупированная территория)",
      "target": "Склад материально-технических средств и ЗРК «Стрела-10» ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "15 августа 2026 года Силы обороны Украины нанесли высокоточный удар ударными дронами по передовой военной базе подразделений ВС РФ в городе Лисичанске на временно оккупированной территории Луганской области. На объекте размещался крупный полевой склад материально-технического обеспечения, питавший российские штурмовые подразделения снаряжением, запасными частями и топливом, а прикрытие позиций обеспечивал зенитно-ракетный комплекс «Стрела-10». Точными попаданиями БПЛА складские строения были охвачены огнем с детонацией хранимого имущества, а пусковая установка ЗРК «Стрела-10» получила прямое попадание и была полностью уничтожена. Генеральный штаб ВСУ официально подтвердил ликвидацию ЗРК и склада МТС. Уничтожение объекта лишило подразделения оккупантов прикрытия от средств воздушного нападения и сорвало тыловое снабжение.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT, СМИ"
    },
    "uk": {
      "region": "Луганська область, м. Лисичанськ (окупована територія)",
      "target": "Склад матеріально-технічних засобів та ЗРК «Стріла-10» ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "15 серпня 2026 року Сили оборони України завдали високоточного удару ударними дронами по передовій військовій базі підрозділів ЗС РФ у місті Лисичанськ на тимчасово окупованій території Луганської області. На об'єкті розміщувався великий польовий склад матеріально-технічного забезпечення, що живив російські штурмові підрозділи спорядженням, запасними частинами та пальним, а прикриття позицій забезпечував зенітно-ракетний комплекс «Стріла-10». Точними влучаннями БПЛА складські споруди були охоплені вогнем із детонацією накопиченого майна, а пускова установка ЗРК «Стріла-10» зазнала прямого влучання і була повністю знищена. Генеральний штаб ЗСУ офіційно підтвердив ліквідацію ЗРК та складу МТЗ. Знищення об'єкта позбавило підрозділи окупантів прикриття від засобів повітряного нападу і зірвало тилове постачання.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT, ЗМІ"
    },
    "en": {
      "region": "Luhansk Oblast, Lysychansk (Occupied Territory)",
      "target": "Military Material-Technical Supply Depot and Strela-10 Air Defense System",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 15, 2026, the Ukrainian Defense Forces executed a precision UAV strike on a forward Russian military base in the occupied city of Lysychansk, Luhansk Oblast. The site hosted a large field material and technical logistics supply depot supporting Russian frontline assault units with gear, vehicle spare parts, and fuel, protected locally by a Strela-10 short-range air defense missile system. Precision drone impacts engulfed warehouse storage facilities in flames, causing secondary explosions, while a direct hit annihilated the Strela-10 SAM launcher vehicle. The General Staff of the Armed Forces of Ukraine officially verified the destruction of both the air defense system and the supply depot. The strike stripped local Russian units of low-altitude air defense cover and crippled tactical replenishment.",
      "source": "General Staff of AFU, GUR MO, OSINT, Media"
    }
  },
  {
    "date": "15.08.2026",
    "lat": 47.7800,
    "lng": 37.2500,
    "distance": calcMinDistance(47.7800, 37.2500),
    "ru": {
      "region": "Донецкая область, Волновахский район, г. Угледар (оккупированная территория)",
      "target": "Склад и пункт базирования расчетов БПЛА подразделений ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "15 августа 2026 года Силы беспилотных систем Украины провели результативную операцию по поражению крупного полевого склада БПЛА и оборудования операторов российских войск в районе Угледара в Донецкой области. Данный объект использовался подразделениями ВС РФ для хранения, предполетной подготовки и снаряжения боевой частью разведывательных дронов типа Zala, Supercam и FPV-дронов-камикадзе, активно действовавших на южно-донецком фронте. В результате прилета украинских дронов в ангар хранения произошла серия мощных детонаций боевых частей и аккумуляторных батарей, вызвавших полное разрушение пункта дислокации и пожар. По данным сводки Генштаба ВСУ, склад дронов был полностью ликвидирован. Уничтожение арсенала БПЛА существенно ослабило возможности российской воздушной разведки и сорвало применение ударных дронов на данном участке.",
      "source": "Генштаб ВСУ, СБС ВСУ, OSINT, СМИ"
    },
    "uk": {
      "region": "Донецька область, Волноваський район, м. Вугледар (окупована територія)",
      "target": "Склад та пункт базування розрахунків БПЛА підрозділів ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "15 серпня 2026 року Сили безпілотних систем України провели результативну операцію з ураження великого польового складу БПЛА та обладнання операторів російських військ у районі Вугледара в Донецькій області. Цей об'єкт використовувався підрозділами ЗС РФ для зберігання, передпольотної підготовки та спорядження бойовою частиною розвідувальних дронів типу Zala, Supercam та FPV-дронів-камікадзе, які активно діяли на південно-донецькому фронті. У результаті влучання українських дронів в ангар зберігання сталася серія потужних детонацій бойових частин та акумуляторних батарей, що спричинили повне руйнування пункту дислокації та пожежу. За даними зведення Генштабу ЗСУ, склад дронів було повністю ліквідовано. Знищення арсеналу БПЛА суттєво послабило можливості російської повітряної розвідки і зірвало застосування ударних дронів на цій ділянці.",
      "source": "Генштаб ЗСУ, СБС ЗСУ, OSINT, ЗМІ"
    },
    "en": {
      "region": "Donetsk Oblast, Volnovakha District, Vuhledar (Occupied Territory)",
      "target": "Military UAV Forward Storage Depot and Drone Operator Staging Site",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 15, 2026, the Unmanned Systems Forces of Ukraine carried out a precision operation destroying a major field UAV storage depot and operator facility of Russian forces near Vuhledar in Donetsk Oblast. The facility was utilized by Russian combat units for staging, pre-flight maintenance, and warhead arming of Zala and Supercam reconnaissance drones and tactical FPV attack drones operating across the southern Donetsk front. Direct drone impacts on the main storage hangar triggered heavy secondary detonations of explosive charges and lithium batteries, leveling the command and storage facility. The General Staff of the Armed Forces of Ukraine officially verified the total destruction of the drone depot. The elimination of these stockpiles significantly blindfolded Russian tactical aerial reconnaissance and disrupted strike operations.",
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

// Remove existing 15.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '15.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 15 August 2026! Total items in data.js: ${data.length}`);
