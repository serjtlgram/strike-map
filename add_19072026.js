const fs = require('fs');

const newItems = [
  {
    "date": "19.07.2026",
    "lat": 45.1115,
    "lng": 41.9703,
    "distance": null,
    "ru": {
      "region": "Ставропольский край, хутор Вязники (Шпаковский округ)",
      "target": "Нефтебаза в промзоне",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Нефтебаза в хуторе Вязники (Шпаковский муниципальный округ, Ставропольский край) играет важную роль в хранении и перевалке топлива на юге России, снабжая в том числе и военную логистику на северокавказском направлении. В ночь на 19 июля объект подвергся массированному удару беспилотников — это уже третья подобная атака на нефтехранилище за несколько недель. Местные власти и губернатор региона подтвердили падение дронов, после чего на территории промышленной зоны вспыхнул пожар как минимум в двух очагах. Из-за масштабов инцидента в округе пришлось ввести режим чрезвычайной ситуации местного уровня. Минобороны РФ отчитывалось о перехвате 140 беспилотников над разными регионами страны в ту ночь, но часть ударных БПЛА прорвала ПВО и достигла своих целей. Точный объем уничтоженного топлива не разглашается, информации о погибших или пострадавших не поступало, однако систематические удары по этой нефтебазе указывают на целенаправленное уничтожение топливной инфраструктуры на этом направлении.",
      "source": "Губернатор Ставрополья, СМИ РФ, OSINT"
    },
    "uk": {
      "region": "Ставропольський край, хутір Вязнікі (Шпаковський округ)",
      "target": "Нафтобаза в промзоні",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Нафтобаза в хуторі Вязнікі (Шпаковський муніципальний округ, Ставропольський край) відіграє важливу роль у зберіганні та перевалці палива на півдні Росії, постачаючи, зокрема, військову логістику на північнокавказькому напрямку. У ніч проти 19 липня об'єкт зазнав масованого удару безпілотників — це вже третя подібна атака на нафтосховище за кілька тижнів. Місцева влада та губернатор регіону підтвердили падіння дронів, після чого на території промислової зони спалахнула пожежа щонайменше у двох осередках. Через масштаби інциденту в окрузі довелося запровадити режим надзвичайної ситуації місцевого рівня. Міноборони РФ звітувало про перехоплення 140 безпілотників над різними регіонами країни тієї ночі, але частина ударних БПЛА прорвала ППО і досягла цілей. Точний обсяг знищеного пального не розголошується, інформації про загиблих не надходило, однак систематичні удари по цій базі вказують на цілеспрямоване знищення паливної інфраструктури ворога на цьому напрямку.",
      "source": "Губернатор Ставропілля, ЗМІ РФ, OSINT"
    },
    "en": {
      "region": "Stavropol Krai, Vyazniki (Shpakovsky district)",
      "target": "Oil depot in the industrial zone",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "The oil depot in the Vyazniki hamlet (Shpakovsky municipal district, Stavropol Krai) plays an important role in storing and transferring fuel in southern Russia, supplying military logistics in the North Caucasus direction. On the night of July 19, the facility came under a massive drone strike — the third such attack on this depot in just a few weeks. Local authorities and the regional governor confirmed the drone impacts, which ignited fires in at least two separate areas within the industrial zone. Due to the scale of the incident, a local state of emergency was declared in the district. The Russian Defense Ministry claimed to have intercepted 140 drones across various regions that night, but a portion of the strike UAVs breached air defenses and reached their targets. While the exact volume of destroyed fuel remains undisclosed and no casualties were reported, the systematic strikes on this specific facility point to a targeted campaign aimed at dismantling Russia's fuel infrastructure in the region.",
      "source": "Stavropol Governor, Russian Media, OSINT"
    }
  },
  {
    "date": "19.07.2026",
    "lat": 44.629,
    "lng": 37.638,
    "distance": null,
    "ru": {
      "region": "Краснодарский край, Новороссийск (акватория Южной Озереевки)",
      "target": "Терминал КТК и нефтяные танкеры",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "Морской терминал Каспийского трубопроводного консорциума (КТК) под Новороссийском — один из ключевых узлов экспорта нефти, использующий выносные причальные устройства для загрузки танкеров прямо в акватории Черного моря. 19 июля объект подвергся атаке украинских беспилотников, в результате которой под удар попали два танкера: ASIA под флагом Либерии и NISSOS IOS под флагом Маршалловых островов. На борту танкера ASIA после попадания дрона вспыхнул пожар, что вынудило консорциум экстренно остановить погрузку нефти и начать ликвидацию возгорания. Данная операция стала частью более широкой кампании по нарушению логистических и финансовых цепочек РФ на Черном море, затрагивая в том числе суда так называемого «теневого флота». Минобороны РФ заявляло о масштабном перехвате дронов, однако кадры и свидетельства с места подтвердили факт поражения судов. По предварительным данным, жертв удалось избежать, но инцидент серьезно осложнил работу всего терминала, временно парализовав отгрузку сырья.",
      "source": "СМИ РФ, Морские мониторинговые каналы, OSINT"
    },
    "uk": {
      "region": "Краснодарський край, Новоросійськ (акваторія Південної Озеріївки)",
      "target": "Термінал КТК та нафтові танкери",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "Морський термінал Каспійського трубопровідного консорціуму (КТК) під Новоросійськом — один із ключових вузлів експорту нафти, що використовує виносні причальні пристрої для завантаження танкерів прямо в акваторії Чорного моря. 19 липня об'єкт зазнав атаки українських безпілотників, унаслідок якої під удар потрапили два танкери: ASIA під прапором Ліберії та NISSOS IOS під прапором Маршаллових островів. На борту танкера ASIA після влучання дрона спалахнула пожежа, що змусило консорціум екстрено зупинити навантаження нафти та розпочати ліквідацію загоряння. Ця операція стала частиною ширшої кампанії з порушення логістичних та фінансових ланцюгів РФ на Чорному морі, зачіпаючи зокрема судна так званого «тіньового флоту». Міноборони РФ заявляло про масштабне перехоплення дронів, проте кадри та свідчення з місця підтвердили факт ураження суден. За попередніми даними, жертв вдалося уникнути, але інцидент серйозно ускладнив роботу всього термінала, тимчасово паралізувавши відвантаження сировини.",
      "source": "ЗМІ РФ, Морські моніторингові канали, OSINT"
    },
    "en": {
      "region": "Krasnodar Krai, Novorossiysk (Yuzhnaya Ozereyevka waters)",
      "target": "CPC Marine Terminal and oil tankers",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "The Caspian Pipeline Consortium (CPC) marine terminal near Novorossiysk is a key hub for Russian oil exports, utilizing single point moorings to load tankers directly in the Black Sea. On July 19, the facility was attacked by Ukrainian drones, striking two oil tankers: the Liberia-flagged ASIA and the Marshall Islands-flagged NISSOS IOS. Following the drone impact, a fire broke out on board the ASIA tanker, forcing the consortium to urgently suspend oil loading operations and begin firefighting efforts. This operation was part of a broader campaign aimed at disrupting Russia's logistical and financial supply chains in the Black Sea, increasingly targeting vessels associated with the so-called \"shadow fleet\". Although the Russian Defense Ministry claimed a massive drone interception, footage and local reports confirmed the successful hits. Preliminary data suggests there were no casualties, but the incident significantly complicated the terminal's operations, temporarily paralyzing the export of crude oil.",
      "source": "Russian Media, Maritime monitoring channels, OSINT"
    }
  }
];

const content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;\n?$/, '').trim();
let data = new Function('return ' + dataStr)();

// Auto-assign IDs to new items
const maxId = data.reduce((max, item) => Math.max(max, item.id || 0), 0);
newItems.forEach((item, index) => {
  item.id = maxId + 1 + index;
});

data.unshift(...newItems);

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log('Added July 19, 2026 events to data.js successfully!');
