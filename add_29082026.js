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
    "date": "29.08.2026",
    "lat": 45.1162,
    "lng": 33.9766,
    "distance": calcMinDistance(45.1162, 33.9766),
    "ru": {
      "region": "АР Крым, Симферопольский район, пгт Гвардейское",
      "target": "Военный аэродром «Гвардейское» — площадки хранения, подготовки и пуска БПЛА",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "В ночь на 29 августа 2026 года Силы обороны Украины нанесли результативный удар беспилотниками по военному аэродрому «Гвардейское» в Симферопольском районе Крыма. На этом объекте базировались расчеты БПЛА и размещались оборудованные площадки для предполетной подготовки, заправки и запуска дальнобойных дронов-камикадзе типа «Shahed» и «Герань». Местные жители сообщили о серии громких взрывов около полуночи, после чего над северным сектором летного поля поднялось зарево пожара. Спутниковая система мониторинга NASA FIRMS зафиксировала множественные термические аномалии и очаги открытого горения на территории базы. В результате прилетов уничтожены складские помещения с комплектующими для беспилотников и повреждено пусковое оборудование. Генштаб ВСУ официально подтвердил поражение объектов противника.",
      "source": "Генштаб ВСУ, NASA FIRMS, Радио Свобода, OSINT"
    },
    "uk": {
      "region": "АР Крим, Сімферопольський район, смт Гвардійське",
      "target": "Військовий аеродром «Гвардійське» — майданчики зберігання, підготовки та пуску БПЛА",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "У ніч на 29 серпня 2026 року Сили оборони України завдали результативного удару безпілотниками по військовому аеродрому «Гвардійське» в Сімферопольському районі Криму. На цьому об'єкті базувалися підрозділи БПЛА ворога та розміщувалися обладнані майданчики для передпольотної підготовки, заправки та запуску далекобійних дронів-камікадзе типу «Shahed» і «Герань». Місцеві жителі повідомили про серію гучних вибухів близько опівночі, після чого над північним сектором летовища піднялася заграва від пожежі. Супутникова система моніторингу NASA FIRMS зафіксувала множинні термічні аномалії та осередки відкритого вогню на території бази. Внаслідок влучань знищено складські приміщення з комплектуючими для безпілотників та пошкоджено пускове обладнання. Генштаб ЗСУ офіційно підтвердив ураження об'єктів противника.",
      "source": "Генштаб ЗСУ, NASA FIRMS, Радіо Свобода, OSINT"
    },
    "en": {
      "region": "Crimea, Simferopol District, Hvardiiske",
      "target": "Hvardiiske Military Airbase — Drone Storage, Preparation, and Launch Sites",
      "category": "Military Airbase",
      "weapon": "Drone",
      "details": "On the night of August 29, 2026, the Ukrainian Defense Forces carried out an effective drone strike against the Hvardiiske military airbase in Simferopol district of Crimea. The base served as an operational hub for Russian drone units, featuring dedicated facilities for pre-flight testing, fueling, and launching Shahed and Geran long-range strike UAVs. Local residents reported a series of powerful blasts around midnight, followed by an intense blaze across the northern section of the airfield. NASA FIRMS satellite monitoring corroborated multiple thermal anomalies and fire outbreaks within the base perimeter. The strike destroyed storage warehouses housing drone parts and damaged specialized launch and support gear. The General Staff of the AFU officially confirmed the successful hit.",
      "source": "General Staff of AFU, NASA FIRMS, Radio Liberty, OSINT"
    }
  },
  {
    "date": "29.08.2026",
    "lat": 45.6025,
    "lng": 33.0031,
    "distance": calcMinDistance(45.6025, 33.0031),
    "ru": {
      "region": "АР Крым, Черноморский район, с. Знаменка",
      "target": "Комплекс радиоэлектронной борьбы (РЭБ) ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "29 августа 2026 года Силы обороны Украины нанесли высокоточный удар по позиционному району комплекса радиоэлектронной борьбы ВС РФ возле села Знаменка в западной части Крыма. Данный специализированный комплекс РЭБ обеспечивал подавление сигналов спутниковой навигации, радиосвязи и систем радиолокационного наведения украинских БПЛА и крылатых ракет над северо-западным сектором Черного моря. Прямое попадание украинского средства поражения вызвало мгновенную детонацию аппаратуры и мощный пожар на позиции. Комплекс получил критические разрушения, приемо-передающие антенные решетки и аппаратный модуль управления полностью сгорели. Успешный удар пробил серьезную брешь в системе радиотехнического прикрытия крымского побережья. Поражение станции подтверждено сводкой Генштаба ВСУ.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "АР Крим, Чорноморський район, с. Знам'янка",
      "target": "Комплекс радіоелектронної боротьби (РЕБ) ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "29 серпня 2026 року Сили оборони України завдали високоточного удару по позиційному району комплексу радіоелектронної боротьби ЗС РФ поблизу села Знам'янка у західній частині Криму. Цей спеціалізований комплекс РЕБ забезпечував придушення сигналів супутникової навігації, радіозв'язку та систем радіолокаційного наведення українських БПЛА й крилатих ракет над північно-західним сектором Чорного моря. Пряме влучання українського засобу ураження спричинило миттєву детонацію апаратури та потужну пожежу на позиції. Комплекс зазнав критичних руйнувань, приймально-передавальні антенні решітки та апаратний модуль управління повністю згоріли. Успішний удар утворив серйозну прогалину в системі радіотехнічного прикриття кримського узбережжя. Ураження станції підтверджено зведенням Генштабу ЗСУ.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Crimea, Chornomorske District, Znamyanka",
      "target": "Russian Armed Forces Electronic Warfare (EW) Complex",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On August 29, 2026, Ukrainian defense forces delivered a precision strike against a Russian electronic warfare (EW) deployment site near Znamyanka in western Crimea. The specialized EW system was actively deployed to jam satellite navigation signals, tactical radio communications, and radar tracking frequencies of Ukrainian drones and cruise missiles over the northwestern Black Sea. A direct impact triggered immediate secondary explosions of onboard electronics and a widespread fire. The EW installation sustained critical damage, completely burning out its phased array antennae and armored command modules. The strike punched a vital gap in Russia's radar jamming umbrella along the Crimean shoreline. The hit was officially confirmed by the AFU General Staff.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "29.08.2026",
    "lat": 52.7533,
    "lng": 32.2435,
    "distance": calcMinDistance(52.7533, 32.2435),
    "ru": {
      "region": "Брянская область, г. Клинцы",
      "target": "Зенитный ракетный комплекс 9К317М «Бук-М3»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "29 августа 2026 года Генеральный штаб ВСУ официально подтвердил уничтожение новейшего российского зенитного ракетного комплекса 9К317М «Бук-М3» в районе города Клинцы Брянской области. Стоимость одного такого дивизионного комплекса превышает 40 миллионов долларов. «Бук-М3» считался передовым средством войсковой ПВО среднего радиуса, прикрывавшим военные базы, логистические узлы и коридоры переброски техники в российском приграничье. В результате прицельного удара ударного дрона на огневой позиции сдетонировал готовый к пуску боекомплект зенитных управляемых ракет, превратив установку в груду горящего металла. Уничтожение данного ЗРК существенно ослабило эшелонированную систему ПВО российской армии на брянском направлении.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Брянська область, м. Клинці",
      "target": "Зенітний ракетний комплекс 9К317М «Бук-М3»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "29 серпня 2026 року Генеральний штаб ЗСУ офіційно підтвердив знищення новітнього російського зенітного ракетного комплексу 9К317М «Бук-М3» у районі міста Клинці Брянської області. Вартість одного такого дивізіонного комплексу перевищує 40 мільйонів доларів. «Бук-М3» вважався передовим засобом військової ППО середнього радіуса, який прикривав військові бази, логістичні вузли та коридори перекидання техніки у російському прикордонні. Внаслідок прицільного удару ударного дрона на вогневій позиції здетонував готовий до пуску боєкомплект зенітних керованих ракет, перетворивши установку на палаючий брухт. Знищення цього ЗРК суттєво послабило ешелоновану систему ППО російської армії на брянському напрямку.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Bryansk Oblast, Klintsy",
      "target": "9K317M 'Buk-M3' Surface-to-Air Missile System",
      "category": "Defense Industry",
      "weapon": "Drone",
      "details": "On August 29, 2026, the General Staff of the AFU officially confirmed the destruction of a modern Russian 9K317M Buk-M3 medium-range anti-aircraft missile system near Klintsy in Bryansk Oblast. A single Buk-M3 battery carries an estimated price tag exceeding 40 million dollars. The system formed the backbone of regional tactical air defense, shielding military bases, logistical choke points, and transit corridors along the border. A precision strike by a Ukrainian attack drone triggered a catastrophic detonation of ready-to-launch surface-to-air missiles, incinerating the launcher and radar equipment. The destruction of this advanced SAM asset significantly compromised layered air defense coverage across the Bryansk operational sector.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "29.08.2026",
    "lat": 47.9868,
    "lng": 37.7816,
    "distance": calcMinDistance(47.9868, 37.7816),
    "ru": {
      "region": "Донецкая область, г. Донецк",
      "target": "Складской комплекс, площадки подготовки и запуска БПЛА ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "В ночь на 29 августа 2026 года Силы обороны Украины нанесли комбинированный удар по тыловой базе оккупационных войск в городской черте Донецка. На территории промышленного объекта противник развернул склады боевых частей, ремонтные мастерские и оборудованные пусковые позиции для ударных БПЛА тактического и оперативного назначения. Серия точных попаданий привела к вторичной детонации складированных взрывчатых веществ и аккумуляторов, вызвав сильный пожар в производственных ангарах. На место инцидента стянулись расчеты экстренных служб и военная комендатура. В результате удара уничтожена готовая к вылету партия дронов и выведены из строя специализированные катапульты. Генштаб ВСУ подтвердил успешное поражение объекта.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Донецька область, м. Донецьк",
      "target": "Складський комплекс, майданчики підготовки та запуску БПЛА ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "У ніч на 29 серпня 2026 року Сили оборони України завдали комбінованого удару по тиловій базі окупаційних військ у межах Донецька. На території промислового об'єкта противник розгорнув склади бойових частин, ремонтні майстерні та обладнані пускові позиції для ударних БПЛА тактичного та оперативного призначення. Серія точних влучань призвела до вторинної детонації накопиченої вибухівки й акумуляторних блоків, спричинивши масштабну пожежу у виробничих ангарах. До місця події виїхали розрахунки екстрених служб і військова комендатура. Внаслідок удару знищено партію підготовлених до вильоту дронів та виведено з ладу спеціалізовані катапульти. Генштаб ЗСУ підтвердив успішне ураження об'єкта.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Donetsk Oblast, Donetsk",
      "target": "Russian Drone Storage, Preparation, and Launch Complex",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On the night of August 29, 2026, Ukrainian forces conducted a strike against a Russian rear military staging site within the industrial zone of occupied Donetsk. The facility housed warhead stockpiles, repair workshops, and prepared launch ramps for tactical and operational strike drones. Multiple precision hits set off secondary detonations of stored ordnance and high-capacity battery packs, engulfing production hangars in flames. Emergency response teams and Russian military police cordoned off the affected perimeter. The strike destroyed a ready-to-launch batch of combat UAVs and wrecked hydraulic launching rails. The AFU General Staff officially verified the elimination of the site.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "29.08.2026",
    "lat": 48.0053,
    "lng": 37.2886,
    "distance": calcMinDistance(48.0053, 37.2886),
    "ru": {
      "region": "Донецкая область, Покровский район, с. Берестки",
      "target": "Пункт управления подразделениями ударных БПЛА ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "29 августа 2026 года украинские военные нанесли точный огневой удар по замаскированному командно-штабному пункту управления БПЛА в районе села Берестки. В этом укрепленном пункте размещались станции дистанционного управления дронами, ретрансляторы связи и терминалы операторов, координировавших атаки на украинские оборонительные рубежи. В результате прямого попадания полностью разрушены пункт управления и сопутствующая антенна спутниковой связи, а находившаяся на дежурстве смена операторов понесла потери в живой силе и технике. Ликвидация координационного центра сорвала запланированные разведывательные и ударные вылеты противника на прилегающем участке фронта. Генштаб ВСУ подтвердил успешное поражение цели.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Донецька область, Покровський район, с. Берестки",
      "target": "Пункт управління підрозділами ударних БПЛА ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "29 серпня 2026 року українські військові завдали влучного вогневого удару по замаскованому командно-штабному пункту управління БПЛА в районі села Берестки. У цьому укріпленому пункті розміщувалися станції дистанційного керування безпілотниками, ретранслятори зв'язку й термінали операторів, які координували атаки на українські оборонні рубежі. Внаслідок прямого влучання повністю зруйновано пункт управління та супутникову антену зв'язку, а чергова зміна операторів зазнала втрат у живій силі й техніці. Ліквідація координаційного центру зірвала заплановані розвідувальні та ударні вильоти противника на прилеглому відтинку фронту. Генштаб ЗСУ підтвердив успішне ураження цілі.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Donetsk Oblast, Pokrovsk District, Berestky",
      "target": "Russian Armed Forces Attack Drone Unit Command Post",
      "category": "Defense Industry",
      "weapon": "Drone / Missile",
      "details": "On August 29, 2026, Ukrainian forces struck a concealed Russian drone command and control post situated near the village of Berestky. The fortified position housed remote UAV flight stations, telecommunication relay masts, and terminal suites used by drone pilots directing frontline assault missions. Direct precision impacts pulverized the command module, obliterated satellite uplink equipment, and inflicted casualties on on-duty operators. The destruction of this command node paralyzed coordinated reconnaissance and loitering munition sorties across adjacent tactical sectors. The successful neutralization of the target was officially confirmed in the AFU General Staff operational bulletin.",
      "source": "General Staff of AFU, OSINT"
    }
  }
];

// Load existing data
const dataPath = './data.js';
let raw = fs.readFileSync(dataPath, 'utf8');

const varMatch = raw.match(/const\s+(\w+)\s*=\s*\[/);
if (!varMatch) { console.error('Cannot detect variable name'); process.exit(1); }
const varName = varMatch[1];

let items = JSON.parse(raw.replace(new RegExp('^const\\s+' + varName + '\\s*=\\s*'), '').replace(/;\s*$/, ''));

// Filter out any existing 29.08.2026 items
items = items.filter(x => x.date !== '29.08.2026');

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
console.log('Successfully updated data.js with ' + newItems.length + ' items for 29.08.2026. Total items: ' + items.length);
