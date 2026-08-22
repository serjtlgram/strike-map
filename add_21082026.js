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
    "date": "21.08.2026",
    "lat": 57.9150,
    "lng": 56.1750,
    "distance": calcMinDistance(57.9150, 56.1750),
    "ru": {
      "region": "Пермский край, г. Пермь (промзона Осенцы)",
      "target": "Нефтеперерабатывающий завод «ЛУКОЙЛ-Пермнефтеоргсинтез» (ООО «ЛУКОЙЛ-Пермнефтеоргсинтез»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Утром 21 августа 2026 года дальнобойные ударные дроны Сил обороны Украины атаковали территорию одного из крупнейших нефтеперерабатывающих заводов РФ — ООО «ЛУКОЙЛ-Пермнефтеоргсинтез» в Перми. Предприятие находится более чем в 1500 км от границы Украины. БПЛА преодолели эшелонированные зоны противовоздушной обороны и нанесли удар по технологической инфраструктуре завода. На территории предприятия вспыхнул пожар, над промзоной Осенцы поднялся столб дыма. «Пермнефтеоргсинтез» способен перерабатывать свыше 13 млн тонн нефти ежегодно, производя высокооктановые бензины, дизельное топливо стандарта Евро-5 и авиакеросин для снабжения российской армии. В Перми объявлялся режим воздушной тревоги, а международный аэропорт «Большое Савино» временно приостановил прием и отправку рейсов. Удар нарушил стабильность технологического цикла переработки сырья.",
      "source": "Президент Украины, Генштаб ВСУ, губернатор Пермского края, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Пермський край, м. Перм (промзона Осенці)",
      "target": "Нафтопереробний комплекс «ЛУКОЙЛ-Пермнафтооргсинтез» (ТОВ «ЛУКОЙЛ-Пермнафтооргсинтез»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Вранці 21 серпня 2026 року далекобійні ударні дрони Сил оборони України атакували територію одного з найбільших нафтопереробних підприємств РФ — ТОВ «ЛУКОЙЛ-Пермнафтооргсинтез» у Пермі. Завод розташований на рекордній відстані понад 1500 км від кордону з Україною. Безпілотники подолали протиповітряну оборону та завдали удару по виробничій інфраструктурі нафтокомплексу. На території підприємства спалахнула пожежа, над промисловою зоною Осенці піднявся густий стовп диму. «Пермнафтооргсинтез» має річну потужність переробки понад 13 млн тонн сирої нафти, забезпечуючи російські війська авіаційним пальним, дизелем та автобензинами. У Пермі вводився режим повітряної загрози, а міжнародний аеропорт «Велике Савіно» тимчасово зупиняв вильоти й прильоти літаків. Влучання дронів порушило технологічний цикл первинної переробки.",
      "source": "Президент України, Генштаб ЗСУ, губернатор Пермського краю, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Perm Krai, Perm (Osentsy Industrial District)",
      "target": "LUKOIL-Permnefteorgsintez Oil Refinery (LLC LUKOIL-Permnefteorgsintez)",
      "category": "Refinery",
      "weapon": "Drone",
      "details": "On the morning of August 21, 2026, long-range Ukrainian strike UAVs penetrated deep into Russian airspace to strike the LUKOIL-Permnefteorgsintez oil refinery in Perm. The industrial facility is situated more than 1,500 km away from the Ukrainian border. Drones bypassed Russian air defense networks and scored impacts on the refinery's operational units. A major blaze erupted across the facility, sending heavy smoke billowing over the Osentsy industrial district. The Perm refinery has an annual crude processing capacity exceeding 13 million metric tons, manufacturing aviation fuel, Euro-5 diesel, and motor gasoline heavily used by the Russian military. Regional authorities declared an aerial emergency and grounded all commercial flights at Bolshoye Savino Airport. The precision strike caused an emergency disruption to the crude processing and distillation process.",
      "source": "President of Ukraine, General Staff of AFU, Perm Krai Governor, OSINT (Astra), Media"
    }
  },
  {
    "date": "21.08.2026",
    "lat": 48.6370,
    "lng": 43.7890,
    "distance": calcMinDistance(48.6370, 43.7890),
    "ru": {
      "region": "Волгоградская область, Калачевский район (пос. Октябрьский)",
      "target": "Военный аэродром Мариновка (в/ч 77978, 11-й смешанный авиаполк)",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "В ночь на 21 августа 2026 года Силы обороны Украины нанесли результативный комбинированный удар дальнобойными дронами по военному аэродрому Мариновка в Волгоградской области. На авиабазе базируется 11-й смешанный авиаполк 4-й армии ВВС и ПВО РФ, вооруженный фронтовыми бомбардировщиками Су-34 и самолетами-разведчиками Су-24МР, которые наносят регулярные удары управляемыми авиабомбами (КАБ) по позициям ВСУ и прифронтовым городам. Украинские дроны-камикадзе преодолели объектовое ПВО и поразили стоянки боевой авиации, ангары технического обслуживания, а также площадки хранения авиационного вооружения. На территории военного аэродрома начался сильный пожар, сопровождавшийся серией вторичных взрывов боекомплекта. Удар украинских беспилотников существенно снизил интенсивность вылетов тактической авиации РФ на данном направлении фронта.",
      "source": "Президент Украины, Генштаб ВСУ, ССО/СБУ, OSINT (Astra), СМИ"
    },
    "uk": {
      "region": "Волгоградська область, Калачівський район (сел. Октябрський)",
      "target": "Військовий аеродром Маринівка (в/ч 77978, 11-й змішаний авіаполк)",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "У ніч на 21 серпня 2026 року Сили оборони України завдали результативного комбінованого удару далекобійними дронами по військовому аеродрому Маринівка у Волгоградській області. На цій авіабазі дислокується 11-й змішаний авіаполк 4-ї армії ВПС та ППО РФ, оснащений фронтовими бомбардувальниками Су-34 і розвідниками Су-24МР, що регулярно застосовують керовані авіабомби (КАБ) по позиціях ЗСУ. Українські дрони-камікадзе подолали об'єктову систему ППО та уразили стоянки бойових літаків, технічні ангари й майданчики відкритого зберігання авіаційного озброєння. На аеродромі спалахнула масштабна пожежа із серією вторинних детонацій боєприпасів. Успішна атака завдала відчутної шкоди інфраструктурі летовища та суттєво обмежила можливості використання російської бомбардувальної авіації.",
      "source": "Президент України, Генштаб ЗСУ, ССО/СБУ, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Volgograd Oblast, Kalachyovsky District (Oktyabrsky settlement)",
      "target": "Marinovka Military Airfield (Military Unit 77978, 11th Composite Aviation Regiment)",
      "category": "Military Airfield",
      "weapon": "Drone",
      "details": "On the night of August 21, 2026, Ukrainian long-range strike drones executed a targeted strike against the Marinovka military airfield in the Volgograd region. The airbase is home to the 11th Composite Aviation Regiment of the 4th Air and Air Defence Forces Army, operating Su-34 strike fighters and Su-24MR reconnaissance aircraft responsible for glide bomb (KAB) attacks along the frontlines. Ukrainian UAVs penetrated airfield air defenses and struck aircraft dispersal stands, maintenance hangars, and ammunition storage facilities. The impacts triggered extensive fires and multiple secondary detonations across the airfield grounds. The strike inflicted damage on Russian military aviation assets and significantly disrupted tactical strike flight operations on that front.",
      "source": "President of Ukraine, General Staff of AFU, SSO/SBU, OSINT (Astra), Media"
    }
  },
  {
    "date": "21.08.2026",
    "lat": 45.5085,
    "lng": 32.7300,
    "distance": calcMinDistance(45.5085, 32.7300),
    "ru": {
      "region": "АР Крым, Черноморский район (с. Новосельское / пос. Черноморское)",
      "target": "Склад материально-технического обеспечения и пункт управления БПЛА ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "21 августа 2026 года Силы обороны Украины нанесли точный удар по военным объектам ВС РФ на западе временно оккупированного Крыма в районе поселка Новосельское и поселка Черноморское. В ходе скоординированной атаки ударных дронов был полностью уничтожен крупный склад материально-технического обеспечения (МТО), снабжавший береговые подразделения и расчеты противовоздушной обороны оккупантов. Также украинские силы вывели из строя наземные ретрансляционные станции связи и пункт оперативного управления ударными БПЛА типа «Герань-2» и «Гербера» на мысе Тарханкут. На территории пораженного объекта прогремели взрывы и начался сильный пожар. Поражение логистического узла и узла ретрансляции нарушило координацию и дальность запусков российских дронов-камикадзе в акватории Черного моря и прибрежных районах юга Украины.",
      "source": "Генштаб ВСУ, OSINT (Крымский ветер), СМИ"
    },
    "uk": {
      "region": "АР Крим, Чорноморський район (сел. Новосільське / смт Чорноморське)",
      "target": "Склад матеріально-технічного забезпечення та пункт управління БпЛА ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "21 серпня 2026 року Сили оборони України завдали точного удару по військових об'єктах ЗС РФ на заході тимчасово окупованого Криму в районі селища Новосільське та смт Чорноморське. Під час скоординованої атаки ударних дронів було знищено великий склад матеріально-технічного забезпечення (МТЗ), що постачав ресурси береговим підрозділам та розрахункам ППО загарбників. Також українські захисники вивели з ладу наземні ретрансляційні станції зв'язку та пункт оперативного управління ударними БпЛА типу «Герань-2» і «Гербера» на мисі Тарханкут. На території уражених об'єктів пролунали потужні вибухи та здійнялася сильна пожежа. Знищення логістичного пункту і ретрансляторів підірвало координацію та ускладнило польоти російських дронів-камікадзе над Чорним морем та півднем України.",
      "source": "Генштаб ЗСУ, OSINT (Кримський вітер), ЗМІ"
    },
    "en": {
      "region": "Autonomous Republic of Crimea, Chornomorskyi District (Novosilske / Chornomorske)",
      "target": "Russian Military Logistics Depot and UAV Command/Relay Post",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 21, 2026, the Ukrainian Defense Forces carried out a precision drone strike against Russian military logistics and control installations near Novoselske and Chornomorske in western occupied Crimea. The coordinated UAV attack struck and destroyed a major material and technical logistics depot that supplied coastal defense garrisons and anti-aircraft missile units. Furthermore, the strikes neutralized ground-based control antennas and command relay posts on Cape Tarkhankut used for directing Geran-2 and Gerber strike UAV operations. The impacts ignited large blazes accompanied by explosive detonations of stockpiled equipment. Destroying this logistical node and communication relay equipment disrupted Russian UAV piloting capabilities and coordination across the Black Sea operational theater.",
      "source": "General Staff of AFU, OSINT (Crimean Wind), Media"
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

// Remove existing 21.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '21.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 21 August 2026! Total items in data.js: ${data.length}`);
