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
    "date": "25.07.2026",
    "lat": 57.1086,
    "lng": 65.6583,
    "distance": null,
    "ru": {
      "region": "Тюменская область, Тюмень (мкр-н Антипино)",
      "target": "Тюменский НПЗ (бывший Антипинский НПЗ)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "25 июля 2026 года Силы специальных операций и СБУ нанесли удар беспилотниками по Тюменскому нефтеперерабатывающему заводу в промышленной зоне Антипино. Украинские БПЛА преодолели рекордную дистанцию более 2000 километров от линии фронта. Один из дронов совершил прицельное падение на производственную площадку НПЗ, вызвав детонацию и сильный пожар. В городе объявлялась беспилотная опасность, а из-за угрозы повторных прилетов временно приостанавливал работу аэропорт Рощино. Из-за инцидента в Тюмени, отмечавшей День города, отменили праздничные концерты и салют. Тюменский НПЗ мощностью переработки до 7,5 млн тонн нефти в год является крупнейшим независимым заводом Урала и Западной Сибири. В результате атаки технологические процессы на предприятии были частично приостановлены.",
      "source": "ССО, СБУ, OSINT (Astra), МЧС РФ, СМИ"
    },
    "uk": {
      "region": "Тюменська область, Тюмень (мкр-н Антипіне)",
      "target": "Тюменський НПЗ (колишній Антипінський НПЗ)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "25 липня 2026 року Сили спеціальних операцій та СБУ завдали удару безпілотниками по Тюменському нафтопереробному заводу в промисловій зоні Антипіне. Українські БПЛА подолали рекордну відстань понад 2000 кілометрів від лінії фронту. Один із дронів здійснив прицільне падіння на виробничий майданчик НПЗ, спричинивши детонацію та сильну пожежу. У місті оголошувалася безпілотна небезпека, а через загрозу повторних прильотів тимчасово призупиняв роботу аеропорт Рощино. Через інцидент у Тюмені, яка відзначала День міста, скасували святкові концерти та салют. Тюменський НПЗ потужністю переробки до 7,5 млн тонн нафти на рік є найбільшим незалежним заводом Уралу та Західного Сибіру. Внаслідок атаки технологічні процеси на підприємстві було частково призупинено.",
      "source": "ССО, СБУ, OSINT (Astra), МНС РФ, ЗМІ"
    },
    "en": {
      "region": "Tyumen Oblast, Tyumen (Antipino district)",
      "target": "Tyumen Oil Refinery (former Antipinsky Refinery)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On July 25, 2026, Ukrainian Special Operations Forces and the SBU carried out a long-range drone strike targeting the Tyumen Oil Refinery in the Antipino industrial zone. The strike drones covered a record distance exceeding 2,000 kilometers from the border to hit the remote Siberian installation. A direct UAV crash on the processing grounds triggered an explosion followed by a major fuel fire. Local authorities declared an airborne drone alert, while Roshchino International Airport briefly suspended all flight operations. Due to the emergency, official City Day celebrations and planned fireworks in Tyumen were completely cancelled. Operating with a processing capacity of 7.5 million tons of crude annually, the refinery is a vital energy asset for the Ural region. The strike forced an emergency temporary shutdown of primary refining units.",
      "source": "SSO, SBU, OSINT (Astra), Russian EMERCOM, Media"
    }
  },
  {
    "date": "25.07.2026",
    "lat": 47.2357,
    "lng": 39.7015,
    "distance": null,
    "ru": {
      "region": "Ростовская область, Ростов-на-Дону",
      "target": "Военные объекты ВС РФ (РЛС 92Н6Е ЗРК «С-400», ЗРК «Тор-М2», РЭБ «Поле-21»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 25 июля 2026 года Служба безопасности Украины провела комплексную спецоперацию с применением ударных БПЛА по ключевым объектам ПВО и ВПК в Ростове-на-Дону. В ходе атаки прицельным ударом была уничтожена многофункциональная радиолокационная станция 92Н6Е вместе с вышкой для ЗРК С-400 Триумф. Также украинские дроны успешно поразили пусковую установку зенитно-ракетного комплекса Тор-М2 и станцию радиоэлектронной борьбы Поле-21. Дополнительно зафиксированы точные прилеты по двум складским помещениям, использовавшимся для сборки и хранения FPV-дронов. В городе гремели взрывы, работали расчеты ПВО, а от падающих обломков получили повреждения складские здания и несколько домов. Уничтожение РЛС 92Н6Е существенно ослабило возможности обнаружения воздушных целей и наведения ракет С-400 на южном направлении.",
      "source": "СБУ, OSINT, МО РФ, СМИ"
    },
    "uk": {
      "region": "Ростовська область, Ростов-на-Дону",
      "target": "Військові об'єкти ЗС РФ (РЛС 92Н6Е ЗРК «С-400», ЗРК «Тор-М2», РЕБ «Поле-21»)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 25 липня 2026 року Служба безпеки України провела комплексну спецоперацію із застосуванням ударних БПЛА по ключових об'єктах ППО та ВПК у Ростові-на-Дону. Під час атаки прицільним ударом було знищено багатофункціональну радіолокаційну станцію 92Н6Е разом із вежою для ЗРК С-400 Тріумф. Також українські дрони успішно уразили пускову установку зенітно-ракетного комплексу Тор-М2 та станцію радіоелектронної боротьби Поле-21. Додатково зафіксовано влучні прильоти по двох складських приміщеннях, що використовувалися для збирання та зберігання FPV-дронів. У місті лунали вибухи, працювала ППО, а від падаючих уламків зазнали пошкоджень склади та будинки. Знищення РЛС 92Н6Е суттєво послабило можливості виявлення повітряних цілей та наведення ракет С-400 на південному напрямку.",
      "source": "СБУ, OSINT, МО РФ, ЗМІ"
    },
    "en": {
      "region": "Rostov Oblast, Rostov-on-Don",
      "target": "Russian Military Assets (92N6E S-400 Radar, Tor-M2, Pole-21 EW, FPV Warehouses)",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "On the night of July 25, 2026, the Security Service of Ukraine executed a targeted long-range drone operation against critical air defense and military assets in Rostov-on-Don. Precision strikes hit and destroyed a vital 92N6E multi-function radar along with its mobile antenna tower, vital for the S-400 Triumf air defense network. Secondary strikes neutralized a Tor-M2 surface-to-air missile launcher and a Pole-21 electronic warfare station. Furthermore, Ukrainian UAVs struck two warehouse facilities utilized for storing and assembling military FPV strike drones. Multiple explosions shook the city while falling debris inflicted damage on nearby commercial warehouses and residential buildings. Eliminating the 92N6E radar severely degraded Russian early warning capabilities and S-400 targeting across the southern theater.",
      "source": "SBU, OSINT, Russian MoD, Media"
    }
  },
  {
    "date": "25.07.2026",
    "lat": 44.9167,
    "lng": 49.0333,
    "distance": null,
    "ru": {
      "region": "Каспийское море (акватория Астраханской области)",
      "target": "Морская платформа месторождения им. В. Филановского (ПАО «ЛУКОЙЛ»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "25 июля 2026 года спецслужбы Украины впервые провели успешную атаку дальнобойных морских и воздушных БПЛА по нефтяной инфраструктуре в акватории Каспийского моря. Целью удара стала морская добывающая платформа крупнейшего нефтегазового месторождения имени Владимира Филановского, принадлежащая ПАО ЛУКОЙЛ. В результате прямого попадания дрона-камикадзе на платформе произошла детонация технологического оборудования и вспыхнул пожар в районе бурового модуля. Станция обеспечивает добычу до 6 млн тонн высококачественной нефти в год и используется для технологического снабжения военных объектов региона. Спутниковый мониторинг зафиксировал очаг возгорания и густой дым над объектом. Из-за повреждений оборудования добыча нефти на буровой платформе была временно остановлена, а персонал эвакуирован.",
      "source": "СБУ, OSINT, СМИ"
    },
    "uk": {
      "region": "Каспійське море (акваторія Астраханської області)",
      "target": "Морська платформа родовища ім. В. Філановського (ПАТ «ЛУКОЙЛ»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "25 липня 2026 року спецслужби України вперше провели успішну атаку далекобійних морських та повітряних БПЛА по нафтовій інфраструктурі в акваторії Каспійського моря. Ціллю удару стала морська видобувна платформа найбільшого нафтогазового родовища імені Володимира Філановського, що належить ПАТ ЛУКОЙЛ. Внаслідок прямого влучання дрона-камікадзе на платформі сталася детонація технологічного обладнання та спалахнула пожежа в районі бурового модуля. Станція забезпечує видобуток до 6 млн тонн високоякісної нафти на рік та використовується для технологічного постачання військових об'єктів регіону. Супутниковий моніторинг зафіксував осередок займання та густий дим над об'єктом. Через пошкодження обладнання видобуток нафти на буровій платформі було тимчасово зупинено.",
      "source": "СБУ, OSINT, ЗМІ"
    },
    "en": {
      "region": "Caspian Sea (Astrakhan Oblast offshore zone)",
      "target": "Offshore Drilling Platform Filanovsky Field (LUKOIL)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On July 25, 2026, Ukrainian special services executed a precedent-setting long-range drone operation targeting offshore petroleum infrastructure in the Caspian Sea. The primary target was an offshore drilling platform at the V. Filanovsky oil field operated by LUKOIL. A direct kamikaze UAV impact ignited a fire within the primary drilling module and damaged auxiliary power systems. Producing up to 6 million tons of high-grade crude oil annually, the offshore complex serves as a critical strategic energy node supporting regional fuel supplies. Thermal satellite sensors verified active fires and heavy smoke rising from the offshore structure. Following the attack, oil extraction activities were suspended and non-essential personnel were evacuated from the rig.",
      "source": "SBU, OSINT, Media"
    }
  },
  {
    "date": "25.07.2026",
    "lat": 51.4828,
    "lng": 46.2167,
    "distance": null,
    "ru": {
      "region": "Саратовская область, Энгельс",
      "target": "Военный аэродром «Энгельс-2» (Штаб 22-й тбад)",
      "category": "Военные аэродромы",
      "weapon": "Дрон",
      "details": "В ночь на 25 июля 2026 года дальнобойные украинские беспилотники атаковали территорию стратегической авиабазы ВКС РФ Энгельс-2 в Саратовской области. В ходе ночного налета серии взрывов подверглась инфраструктура в районе расположения штаба 22-й гвардейской тяжелой бомбардировочной авиационной дивизии. Один из ударных дронов пробил крышу административно-командного здания, что вызвало сильный пожар и обрушение внутренних перекрытий. На базе Энгельс-2 дислоцируются стратегические ракетоносцы Ту-95МС и Ту-160, регулярно используемые для нанесения массированных крылатых ударов по Украине. Во время атаки в Саратове и Энгельсе вводился режим Ковер, временно заблокировавший работу местного аэропорта Гагарин. В результате удара командная инфраструктура управления вылетами дивизии получила существенные повреждения.",
      "source": "СБУ, ГУР, OSINT, СМИ"
    },
    "uk": {
      "region": "Саратовська область, Енгельс",
      "target": "Військовий аеродром «Енгельс-2» (Штаб 22-ї тбад)",
      "category": "Військові аеродроми",
      "weapon": "Дрон",
      "details": "У ніч проти 25 липня 2026 року далекобійні українські безпілотники атакували територію стратегічної авіабази ВКС РФ Енгельс-2 у Саратовській області. Під час нічного нальоту серії вибухів зазнала інфраструктура в районі розташування штабу 22-ї гвардійської важкої бомбардувальної авіаційної дивізії. Один із ударних дронів пробив дах адміністративно-командної будівлі, що спричинило сильну пожежу та обвалення внутрішніх перекриттів. На базі Енгельс-2 дислокуються стратегічні ракетоносці Ту-95МС та Ту-160, які регулярно використовуються для завдання масованих крилатих ударів по Україні. Під час атаки в Саратові та Енгельсі запроваджувався режим Ковер, що тимчасово заблокував роботу місцевого аеропорту Гагарін. Внаслідок удару командна інфраструктура управління вильотами дивізії зазнала суттєвих руйнувань.",
      "source": "СБУ, ГУР, OSINT, ЗМІ"
    },
    "en": {
      "region": "Saratov Oblast, Engels",
      "target": "Engels-2 Airbase (22nd Heavy Bomber Aviation Division HQ)",
      "category": "Military Airfields",
      "weapon": "Drone",
      "details": "On the night of July 25, 2026, Ukrainian long-range strike UAVs launched a targeted attack against the Engels-2 strategic airbase in Saratov Oblast. During the overnight raid, explosions rocked administrative facilities housing the headquarters of the 22nd Guards Heavy Bomber Aviation Division. A strike drone penetrated the roof of the primary command and administrative building, triggering an intense fire and interior structural collapses. Engels-2 serves as the primary home base for Russian Tu-95MS and Tu-160 strategic bombers responsible for launching cruise missile salvos against Ukraine. The raid triggered Plan Carpet restrictions, temporarily halting civilian operations at Saratov Gagarin Airport. The strike inflicted significant structural damage on division command facilities.",
      "source": "SBU, GUR, OSINT, Media"
    }
  },
  {
    "date": "25.07.2026",
    "lat": 56.7412,
    "lng": 60.7583,
    "distance": null,
    "ru": {
      "region": "Свердловская область, Екатеринбург (Чкаловский район)",
      "target": "Логистический центр Wildberries (Екатеринбург)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "Утром 25 июля 2026 года дальнобойные украинские беспилотники атаковали крупнейший распределительный центр компании Wildberries в Чкаловском районе Екатеринбурга. Удар был нанесен на дистанции около 1750 киломеров от государственной границы. В результате прилета БПЛА и падения детонировавших обломков загорелась парковка грузовой техники и терминал сортировки товаров площадью более 300 кв. метров. Огонь уничтожил несколько магистральных тягачей и повредил фасадную часть складского корпуса. Персонал логистического хаба был экстренно эвакуирован, а в Свердловской области вводился режим беспилотной опасности. Данный хаб играет ключевую роль в обеспечении Уральского региона товарами двойного назначения и армейской экипировкой. После ликвидации возгорания работа сортувального комплекса была частично возобновлена.",
      "source": "OSINT, МЧС РФ, СМИ"
    },
    "uk": {
      "region": "Свердловська область, Єкатеринбург (Чкаловський район)",
      "target": "Логістичний центр Wildberries (Єкатеринбург)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "Уранці 25 липня 2026 року далекобійні українські безпілотники атакували найбільший розподільчий центр компанії Wildberries у Чкаловському районі Єкатеринбурга. Удар було завдано на відстані близько 1750 кілометрів від державного кордону. Внаслідок прильоту БПЛА та падіння детонуючих уламків спалахнула парковка вантажної техніки і термінал сортування товарів площею понад 300 кв. метрів. Вогонь знищив кілька магістральних тягачів та пошкодив фасадну частину складського корпусу. Персонал логістичного хабу було екстрено евакуйовано, а в Свердловській області запроваджувався режим безпілотної небезпеки. Цей хаб відіграє ключову роль у забезпеченні Уральського регіону товарами подвійного призначення та армійським екіпіруванням. Після ліквідації займання роботу сортувального комплексу було частково відновлено.",
      "source": "OSINT, МНС РФ, ЗМІ"
    },
    "en": {
      "region": "Sverdlovsk Oblast, Yekaterinburg (Chkalovsky District)",
      "target": "Wildberries Logistics Hub (Yekaterinburg)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the morning of July 25, 2026, Ukrainian long-range strike drones targeted the major Wildberries distribution complex located in the Chkalovsky district of Yekaterinburg. Striking at a distance of nearly 1,750 kilometers from the border, the raid reached deep into Russia's Ural region. Drone impacts and detonating debris ignited a heavy fire across a truck parking area and sorting terminal spanning over 300 square meters. The blaze destroyed several long-haul transport trucks and caused structural damage to the primary warehouse building facade. Facility personnel were evacuated as regional emergency authorities issued a drone warning. The Yekaterinburg distribution center acts as a crucial logistics node processing dual-use supplies and military field equipment. Sorting operations were temporarily suspended while emergency teams contained the fire.",
      "source": "OSINT, Russian EMERCOM, Media"
    }
  },
  {
    "date": "25.07.2026",
    "lat": 50.5512,
    "lng": 36.5647,
    "distance": null,
    "ru": {
      "region": "Белгородская область, Белгород",
      "target": "ПС «Южная» 330 кВ и военный логистический узел",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "25 июля 2026 года Силы обороны Украины нанесли серийный удар беспилотниками по объектам энергоснабжения и военной логистики в Белгороде. Основними целями атаки стали узловая подстанция Южная 330 кВ и прилегающие складские помещения снабжения группировки войск Север. Несколько дронов-камикадзе поразили силовые трансформаторы подстанции, вызвав сильную дугу и пожар с массовым отключением электричества в промышленном секторе. Одновременно зафиксированы попадания по складам хранения снаряжения и автотехники, где началось вторичное горение. Объект питает ключевые предприятия ремонтно-восстановительной базы ВПК в приграничной зоне. В результате атаки энергоснабжение оборонных цехов было нарушено, а на складах уничтожены запасы имущества.",
      "source": "СБС, ГУР, OSINT, СМИ"
    },
    "uk": {
      "region": "Бєлгородська область, Бєлгород",
      "target": "ПС «Південна» 330 кВ та військовий логістичний вузол",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "25 липня 2026 року Сили оборони України завдали серійного удару безпілотниками по об'єктах енергопостачання та військової логістики у Бєлгороді. Основними цілями атаки стали вузлова підстанція Південна 330 кВ та прилеглі складські приміщення постачання угруповання військ Північ. Кілька дронів-камікадзе уразили силові трансформатори підстанції, спричинивши сильну дугу та пожежу з масовим відключенням електрики у промисловому секторі. Одночасно зафіксовано влучання по складах зберігання спорядження та автотехніки, де розпочалося вторинне горіння. Об'єкт живить ключові підприємства ремонтно-відновлювальної бази ВПК у прикордонній зоні. Внаслідок атаки енергопостачання оборонних цехів було порушено, а на складах знищено запаси майна.",
      "source": "СБС, ГУР, OSINT, ЗМІ"
    },
    "en": {
      "region": "Belgorod Oblast, Belgorod",
      "target": "Yuzhnaya 330 kV Substation & Military Logistics Node",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "On July 25, 2026, the Ukrainian Defense Forces launched a coordinated strike using attack drones against power infrastructure and military logistics hubs in Belgorod. The primary targets were the Yuzhnaya 330 kV main substation and adjacent supply storage facilities supporting the Russian North Group of Forces. Multiple strike drones struck power transformers, inducing severe electrical arcs and fires that caused widespread blackouts in the industrial sector. Concurrently, direct hits were recorded at supply warehouses storing military vehicle parts and tactical equipment, sparking secondary fires. The Yuzhnaya substation supplies electricity to critical repair plants and military workshops operating near the border. The strike disrupted power feeds to defense facilities and destroyed stored military supplies.",
      "source": "SBS, GUR, OSINT, Media"
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
console.log(`Successfully added ${items.length} items for date 25.07.2026 into data.js`);
