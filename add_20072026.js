const fs = require('fs');

const newData = [
  {
    "date": "20.07.2026",
    "lat": 51.483,
    "lng": 46.211,
    "distance": null,
    "ru": {
      "region": "Саратовская область, Энгельс",
      "target": "Военный аэродром «Энгельс»",
      "category": "ВПК/Аэродром",
      "weapon": "Дрон",
      "details": "В ночь на 20 июля дальние беспилотники СБУ осуществили успешную атаку на военный аэродром «Энгельс» в Саратовской области. Дроны преодолели около 800 километров, чтобы нанести удар по стоянке стратегической авиации РФ. По данным украинской разведки, в результате атаки критические повреждения получил стратегический бомбардировщик Ту-95МС. Утверждается, что у самолета полностью оторвана хвостовая часть, что делает его восстановление крайне сложным и длительным. Местные власти и минобороны РФ традиционно отчитались о перехвате беспилотников, однако масштабные повреждения техники свидетельствуют о прорыве ПВО. Этот аэродром является одной из ключевых баз для самолетов, регулярно наносящих ракетные удары по территории Украины.",
      "source": "СБУ, OSINT, СМИ РФ"
    },
    "uk": {
      "region": "Саратовська область, Енгельс",
      "target": "Військовий аеродром «Енгельс»",
      "category": "ВПК/Аеродром",
      "weapon": "Дрон",
      "details": "У ніч проти 20 липня далекобійні безпілотники СБУ здійснили успішну атаку на військовий аеродром «Енгельс» у Саратовській області. Дрони подолали близько 800 кілометрів, щоб завдати удару по стоянці стратегічної авіації РФ. За даними української розвідки, внаслідок атаки критичних пошкоджень зазнав стратегічний бомбардувальник Ту-95МС. Стверджується, що в літака повністю відірвана хвостова частина, що робить його відновлення вкрай складним та тривалим процесом. Місцева влада і міноборони РФ традиційно відзвітували про перехоплення безпілотників, проте масштабні пошкодження техніки свідчать про прорив ППО. Цей аеродром є однією з ключових баз для літаків, що регулярно завдають ракетних ударів по території України.",
      "source": "СБУ, OSINT, ЗМІ РФ"
    },
    "en": {
      "region": "Saratov region, Engels",
      "target": "Engels military airfield",
      "category": "MIC/Airfield",
      "weapon": "Drone",
      "details": "On the night of July 20, long-range SBU drones carried out a successful attack on the Engels military airfield in the Saratov region. The drones covered about 800 kilometers to strike the parking area of Russian strategic aviation. According to Ukrainian intelligence, a Tu-95MS strategic bomber sustained critical damage as a result of the attack. It is claimed that the aircraft's tail section was completely torn off, making its restoration extremely difficult and time-consuming. Local authorities and the Russian Ministry of Defense traditionally reported the interception of all drones, but the massive damage to the equipment indicates a breach in air defense. This airfield serves as a key base for bombers that regularly launch missile strikes against Ukrainian territory.",
      "source": "SBU, OSINT, Russian Media"
    }
  },
  {
    "date": "20.07.2026",
    "lat": 55.3204,
    "lng": 37.5458,
    "distance": null,
    "ru": {
      "region": "Московская область, Подольск (мкр-н Львовский)",
      "target": "Нефтебаза",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В рамках массированной атаки беспилотников на объекты Московской области в ночь на 20 июля была поражена нефтебаза в микрорайоне Львовский города Подольск. Всего на столичный регион РФ было направлено более 400 дронов, часть из которых прорвала эшелонированную оборону противника. На территории предприятия хранения нефтепродуктов прогремели мощные взрывы, после чего начался масштабный пожар. Российская сторона заявляла об успешной работе ПВО, но кадры очевидцев подтвердили точные попадания по резервуарам с топливом. Президент Украины официально подтвердил успешные удары по нефтяной инфраструктуре под Москвой. Уничтожение подобных логистических узлов направлено на ослабление обеспечения российских войск горюче-смазочными материалами.",
      "source": "Официальные лица Украины, СМИ РФ, OSINT"
    },
    "uk": {
      "region": "Московська область, Подольськ (мкр-н Львівський)",
      "target": "Нафтобаза",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У рамках масованої атаки безпілотників на об'єкти Московської області в ніч проти 20 липня була уражена нафтобаза в мікрорайоні Львівський міста Подольськ. Загалом на столичний регіон РФ було спрямовано понад 400 дронів, частина з яких прорвала ешелоновану оборону противника. На території підприємства зберігання нафтопродуктів пролунали потужні вибухи, після чого почалася масштабна пожежа. Російська сторона заявляла про успішну роботу ППО, але кадри очевидців підтвердили точні влучання по резервуарах з паливом. Президент України офіційно підтвердив успішні далекобійні удари по нафтовій інфраструктурі під Москвою. Знищення подібних логістичних вузлів спрямоване на послаблення забезпечення російських військ паливно-мастильними матеріалами.",
      "source": "Офіційні особи України, ЗМІ РФ, OSINT"
    },
    "en": {
      "region": "Moscow region, Podolsk (Lvivsky microdistrict)",
      "target": "Oil depot",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "As part of a massive drone attack on facilities in the Moscow region on the night of July 20, an oil depot in the Lvivsky microdistrict of Podolsk was successfully struck. In total, over 400 drones were directed at the Russian capital region, with a portion breaching the enemy's layered air defenses. Powerful explosions rocked the fuel storage facility, followed by a large-scale fire. The Russian side claimed successful air defense operations, but eyewitness footage confirmed direct hits on the fuel tanks. The President of Ukraine officially verified the successful long-range strikes on oil infrastructure near Moscow. The destruction of such logistical hubs is aimed at weakening the supply of fuel and lubricants to Russian troops.",
      "source": "Ukrainian Officials, Russian Media, OSINT"
    }
  }
];

// Read existing data
let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;\s*$/, '').trim();

// Add new data
let parsedData;
try {
  parsedData = new Function('return ' + dataStr)();
  
  // Assign ids
  let maxId = 0;
  parsedData.forEach(item => {
    if (item.id && item.id > maxId) {
      maxId = item.id;
    }
  });
  
  newData.forEach((item, index) => {
    item.id = maxId + index + 1;
  });
  
  parsedData = [...newData, ...parsedData];
  
  fs.writeFileSync('data.js', 'const strikeData = ' + JSON.stringify(parsedData, null, 2) + ';\n');
  console.log('Successfully prepended new entries to data.js');
} catch (e) {
  console.error("Error parsing data.js:", e);
}
