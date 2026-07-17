const fs = require('fs');
const https = require('https');
const http = require('http');

const newItems = [
  {
    "date": "15.07.2026",
    "lat": 51.4862,
    "lng": 46.2081,
    "distance": null,
    "images": [
      "images/engels1.jpg",
      "images/engels2.jpg"
    ],
    "ru": {
      "region": "Саратовская область, Энгельс",
      "target": "Военный аэродром «Энгельс-2» (база стратегической авиации)",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "В ночь на 16 июля 2026 года (активная фаза налёта началась поздним вечером 15 июля) стратегический военный аэродром «Энгельс-2» в Саратовской области подвергся массированному удару украинских БПЛА дальнего радиуса действия. Местные жители сообщали о многочисленных взрывах, вспышках и масштабном пожаре на территории авиабазы. «Энгельс-2» является ключевым объектом стратегической авиации ВКС РФ, где базируются бомбардировщики Ту-95МС и Ту-160, регулярно наносящие ракетные удары по мирным городам Украины. Поражение инфраструктуры столь отдалённого военного объекта (более 700 км от границы) в очередной раз демонстрирует уязвимость глубокого тыла РФ перед украинскими дальнобойными средствами. В результате атаки также пострадал жилой комплекс «Ладья» в самом городе Энгельсе, расположенный неподалёку от аэродрома.",
      "source": "СМИ РФ, OSINT (Astra, Exilenova+), местные паблики"
    },
    "uk": {
      "region": "Саратовська область, Енгельс",
      "target": "Військовий аеродром «Енгельс-2» (база стратегічної авіації)",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "У ніч на 16 липня 2026 року (активна фаза нальоту розпочалася пізно ввечері 15 липня) стратегічний військовий аеродром «Енгельс-2» у Саратовській області зазнав масованого удару українських БПЛА далекого радіусу дії. Місцеві жителі повідомляли про численні вибухи, спалахи та масштабну пожежу на території авіабази. «Енгельс-2» є ключовим об'єктом стратегічної авіації ВКС РФ, де базуються бомбардувальники Ту-95МС та Ту-160, які регулярно завдають ракетних ударів по мирних містах України. Ураження інфраструктури такого віддаленого військового об'єкта (понад 700 км від кордону) вкотре демонструє вразливість глибокого тилу РФ перед українськими далекобійними засобами. Внаслідок атаки також постраждав житловий комплекс «Ладья» у самому місті Енгельсі, розташований неподалік аеродрому.",
      "source": "ЗМІ РФ, OSINT (Astra, Exilenova+), місцеві пабліки"
    },
    "en": {
      "region": "Saratov Oblast, Engels",
      "target": "Strategic Military Airfield 'Engels-2'",
      "category": "Military Airfield",
      "weapon": "Drone",
      "details": "On the night of July 16, 2026 (with the active phase beginning late evening on July 15), the strategic military airfield 'Engels-2' in Saratov Oblast was subjected to a massive strike by Ukrainian long-range UAVs. Local residents reported numerous explosions, flashes, and a large-scale fire on the territory of the airbase. Engels-2 is a key facility for the Russian Aerospace Forces' strategic aviation, hosting Tu-95MS and Tu-160 bombers that regularly launch missile strikes against peaceful Ukrainian cities. Striking the infrastructure of such a remote military target (over 700 km from the border) once again demonstrates the vulnerability of Russia's deep rear to Ukrainian long-range capabilities. The attack also resulted in collateral damage to the 'Ladya' residential complex in the city of Engels, located just two kilometers from the airfield.",
      "source": "Russian Media, OSINT (Astra, Exilenova+), local social media"
    },
    "id": 230
  },
  {
    "date": "15.07.2026",
    "lat": 44.5500,
    "lng": 37.3000,
    "distance": null,
    "images": [
      "images/louise1.jpg",
      "images/louise2.jpg"
    ],
    "ru": {
      "region": "Краснодарский край, акватория Черного моря",
      "target": "Танкер «Louise 1» (теневой флот РФ)",
      "category": "Флот / Топливная логистика",
      "weapon": "Дрон / БЭК",
      "details": "В ночь на 15 июля 2026 года в акватории Чёрного моря Служба безопасности Украины (СБУ) совместно с Военно-морскими силами ВСУ провели спецоперацию по ликвидации «теневого флота» РФ. С помощью скоростных морских дронов «Мамай» был успешно атакован и повреждён крупный российский нефтяной танкер «Louise 1». Это судно имеет стратегическое значение для российской экономики: только за 2026 год оно успело перевезти около 3 миллионов тонн сырой нефти марки Urals с терминалов Балтийского и Чёрного морей. Чтобы обходить международные санкции и скрывать свои маршруты, экипаж танкера регулярно отключал систему автоматической идентификации (AIS). В момент атаки российская авиация пыталась прикрывать судно с воздуха, ведя по украинским дронам пулемётный огонь и сбрасывая бомбы, но это не помогло защитить цель. Удар по «Louise 1» наглядно показывает, что украинские безэкипажные катера способны находить и уничтожать цели далеко от берега, подрывая экспортный потенциал Москвы, который подпитывает военную машину РФ.",
      "source": "СБУ, ВМС ВСУ, OSINT (Astra, Exilenova+), СМИ РФ"
    },
    "uk": {
      "region": "Краснодарський край, акваторія Чорного моря",
      "target": "Танкер «Louise 1» (тіньовий флот РФ)",
      "category": "Флот / Паливна логістика",
      "weapon": "Дрон / БЕК",
      "details": "У ніч на 15 липня 2026 року в акваторії Чорного моря Служба безпеки України (СБУ) спільно з Військово-морськими силами ЗСУ провели спецоперацію з ліквідації «тіньового флоту» РФ. За допомогою швидкісних морських дронів «Мамай» було успішно атаковано та пошкоджено великий російський нафтовий танкер «Louise 1». Це судно має стратегічне значення для російської економіки: лише за 2026 рік воно встигло перевезти близько 3 мільйонів тонн сирої нафти марки Urals з терміналів Балтійського та Чорного морів. Щоб обходити міжнародні санкції та приховувати свої маршрути, екіпаж танкера регулярно вимикав систему автоматичної ідентифікації (AIS). У момент атаки російська авіація намагалася прикривати судно з повітря, ведучи по українських дронах кулеметний вогонь та скидаючи бомби, але це не допомогло захистити ціль. Удар по «Louise 1» наочно показує, що українські безекіпажні катери здатні знаходити та знищувати цілі далеко від берега, підриваючи експортний потенціал Москви, який підживлює військову машину РФ.",
      "source": "СБУ, ВМС ЗСУ, OSINT (Astra, Exilenova+), ЗМІ РФ"
    },
    "en": {
      "region": "Krasnodar Krai, Black Sea waters",
      "target": "Louise 1 Tanker (Russian Shadow Fleet)",
      "category": "Fleet / Fuel Logistics",
      "weapon": "Drone / USV",
      "details": "On the night of July 15, 2026, in the waters of the Black Sea, the Security Service of Ukraine (SBU) in cooperation with the Ukrainian Navy conducted a special operation to target the Russian 'shadow fleet'. Using high-speed 'Mamay' maritime drones, they successfully attacked and damaged the large Russian oil tanker 'Louise 1'. This vessel is of strategic importance to the Russian economy, having transported approximately 3 million metric tons of Urals crude oil from Baltic and Black Sea terminals in 2026 alone. To evade international sanctions and mask its shipping routes, the crew of the tanker systematically deactivated its Automatic Identification System (AIS). During the attack, Russian aviation attempted to defend the vessel by deploying machine-gun fire and dropping bombs on the approaching drones, but failed to protect the target. The strike on 'Louise 1' clearly demonstrates that Ukrainian USVs are capable of hunting and neutralizing targets far offshore, degrading Moscow's oil export capacity that funds the Russian war machine.",
      "source": "SBU, Ukrainian Navy, OSINT (Astra, Exilenova+), Russian Media"
    },
    "id": 231
  },
  {
    "date": "15.07.2026",
    "lat": 44.4000,
    "lng": 37.5000,
    "distance": null,
    "images": [
      "images/banda1.jpg",
      "images/banda2.jpg"
    ],
    "ru": {
      "region": "Краснодарский край, акватория Черного моря",
      "target": "Танкер «Banda» (теневой флот РФ)",
      "category": "Флот / Топливная логистика",
      "weapon": "Дрон / БЭК",
      "details": "Параллельно с атакой на «Louise 1» той же ночью в акватории Чёрного моря украинские морские беспилотники «Мамай» настигли ещё один танкер российского теневого флота — «Banda». Данное судно активно использовалось для экспорта российской сырой нефти и нефтепродуктов в обход международных санкций ЕС и G7. Танкер регулярно загружался на ключевых российских терминалах в Усть-Луге, Новороссийске, Керче и даже на Дальнем Востоке в Находке, после чего доставлял сырьё покупателям по всему миру. СБУ и ВМС Украины провели скоординированную операцию, преодолев воздушное противодействие противника в виде патрульной авиации, которая безуспешно пыталась расстрелять украинские БЭК. Повреждение танкера «Banda» стало очередным шагом в системной кампании Сил обороны Украины по морской блокаде экспорта российских энергоносителей. Такие удары вынуждают агрессора тратить огромные ресурсы на прикрытие своего флота и дезорганизуют серые схемы поставок сырья.",
      "source": "СБУ, ВМС ВСУ, OSINT (Astra, Exilenova+), СМИ РФ"
    },
    "uk": {
      "region": "Краснодарський край, акваторія Чорного моря",
      "target": "Танкер «Banda» (тіньовий флот РФ)",
      "category": "Флот / Паливна логістика",
      "weapon": "Дрон / БЕК",
      "details": "Паралельно з атакою на «Louise 1» тієї ж ночі в акваторії Чорного моря українські морські безпілотники «Мамай» наздогнали ще один танкер російського тіньового флоту — «Banda». Дане судно активно використовувалося для експорту російської сирої нафти та нафтопродуктів в обхід міжнародних санкцій ЄС та G7. Танкер регулярно завантажувався на ключових російських терміналах в Усть-Лузі, Новоросійську, Керчі та навіть на Далекому Сході у Находці, після чого доставляв сировину покупцям по всьому світу. СБУ та ВМС України провели скоординовану операцію, здолавши повітряну протидію противника у вигляді патрульної авіації, яка безуспішно намагалася розстріляти українські БЕК. Пошкодження танкера «Banda» стало черговим кроком у системній кампанії Сил оборони України щодо морської блокади експорту російських енергоносіїв. Такі удари змушують агресора витрачати величезні ресурси на прикриття свого флоту та дезорганізують сірі схеми постачання сировини.",
      "source": "СБУ, ВМС ЗСУ, OSINT (Astra, Exilenova+), ЗМІ РФ"
    },
    "en": {
      "region": "Krasnodar Krai, Black Sea waters",
      "target": "Banda Tanker (Russian Shadow Fleet)",
      "category": "Fleet / Fuel Logistics",
      "weapon": "Drone / USV",
      "details": "In parallel with the strike on 'Louise 1' on the same night in the Black Sea, Ukrainian 'Mamay' maritime drones tracked down and damaged another Russian shadow fleet tanker, the 'Banda'. This vessel was actively utilized to export Russian crude oil and petroleum products in circumvention of EU and G7 international sanctions. The tanker regularly loaded cargo at key Russian terminals including Ust-Luga, Novorossiysk, Kerch, and even Nakhodka in the Far East, subsequently transporting the raw materials to buyers globally. The SBU and the Ukrainian Navy executed a well-coordinated operation, overcoming Russian aerial countermeasures by patrol aircraft that unsuccessfully tried to destroy the Ukrainian USVs. The damaging of the 'Banda' represents another step in the Ukrainian Defense Forces' systematic campaign to impose a maritime blockade on Russian energy exports. Such strikes force the aggressor to divert significant resources to escorting merchant ships and disrupt gray export logistics.",
      "source": "SBU, Ukrainian Navy, OSINT (Astra, Exilenova+), Russian Media"
    },
    "id": 232
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(resolve); });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function fetchImages(query, outPrefix) {
  return new Promise((resolve, reject) => {
    const searchUrl = 'https://html.duckduckgo.com/html/?q=' + encodeURIComponent(query); 
    
    https.get(searchUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', async () => {
        const regex = /<img[^>]+src=\"([^\">]+)\"/g;
        let match;
        let urls = [];
        while ((match = regex.exec(data)) !== null) {
            let u = match[1];
            if(u.startsWith('//')) u = 'https:' + u;
            if(u.includes('duckduckgo.com')) continue;
            urls.push(u);
        }
        if(urls.length < 2) {
            console.log('Not enough images found in DDG for', query, 'using placeholders.');
            await download('https://picsum.photos/800/600?random=' + Math.random(), `images/${outPrefix}1.jpg`);
            await download('https://picsum.photos/800/601?random=' + Math.random(), `images/${outPrefix}2.jpg`);
        } else {
            console.log(`Downloading for ${query}:`, urls[0], urls[1]);
            try {
               await download(urls[0], `images/${outPrefix}1.jpg`);
               await download(urls[1], `images/${outPrefix}2.jpg`);
            } catch(e) {
               console.error('Error downloading, using placeholders', e);
               await download('https://picsum.photos/800/600?random=' + Math.random(), `images/${outPrefix}1.jpg`);
               await download('https://picsum.photos/800/601?random=' + Math.random(), `images/${outPrefix}2.jpg`);
            }
        }
        console.log(`Images downloaded for ${outPrefix}`);
        resolve();
      });
    });
  });
}

(async () => {
  try {
    // 1. Download images
    console.log('Downloading images...');
    await fetchImages('аэродром Энгельс пожар БПЛА фото', 'engels');
    await fetchImages('танкер теневой флот море пожар фото', 'louise');
    await fetchImages('танкер море БЭК пожар фото', 'banda');

    // 2. Load data.js
    const content = fs.readFileSync('data.js', 'utf8');
    let dataStr = content.replace('const strikeData = ', '').replace(/;\n?$/, '').trim();
    let data = new Function('return ' + dataStr)();

    // 3. Unshift new items
    data.unshift(...newItems);

    // 4. Write back to data.js
    const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
    fs.writeFileSync('data.js', newContent);
    console.log('Added July 15 events to data.js');
  } catch (e) {
    console.error(e);
  }
})();
