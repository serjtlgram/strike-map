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
    "date": "26.08.2026",
    "lat": 56.1072,
    "lng": 44.1549,
    "distance": calcMinDistance(56.1072, 44.1549),
    "ru": {
      "region": "Нижегородская область, г. Кстово",
      "target": "НПЗ «Лукойл-Нижегороднефтеоргсинтез» (ООО «ЛУКОЙЛ-Нижегороднефтеоргсинтез»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 26 августа 2026 года дальнобойные украинские дроны атаковали нефтеперерабатывающий завод «Лукойл-Нижегороднефтеоргсинтез» в городе Кстово Нижегородской области. Это предприятие входит в четверку крупнейших НПЗ России с годовой мощностью переработки порядка 17 миллионов тонн сырой нефти. Завод обеспечивает топливом центральные регионы страны и снабжает горюче-смазочными материалами группировки российских войск. Несмотря на попытки дежурных расчетов ПВО отразить налет, несколько БПЛА спикировали на территорию технологических установок предприятия. В результате попаданий прогремела серия взрывов и вспыхнул масштабный пожар в производственной зоне. Удар подтвердил Генштаб ВСУ, отметив критическое значение объекта для логистики противника.",
      "source": "Генштаб ВСУ, ASTRA, OSINT, СМИ"
    },
    "uk": {
      "region": "Нижегородська область, м. Кстово",
      "target": "НПЗ «Лукойл-Нижегороднафтооргсинтез» (ТОВ «ЛУКОЙЛ-Нижегороднафтооргсинтез»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч на 26 серпня 2026 року далекобійні українські безпілотники атакували нафтопереробний завод «Лукойл-Нижегороднафтооргсинтез» у місті Кстово Нижньогородської області. Це підприємство входить до четвірки найбільших НПЗ Росії з річною потужністю переробки близько 17 мільйонів тонн нафти. Завод забезпечує паливом центральні регіони РФ та постачає нафтопродукти для потреб окупаційної армії. Попри намагання місцевої протиповітряної оборони збити цілі, кілька дронів прорвалися до технологічних установок заводу. Внаслідок точних влучань пролунала серія потужних вибухів і спалахнула масштабна пожежа на території комплексу. Генеральний штаб ЗСУ офіційно підтвердив ураження потужностей стратегічного нафтопереробного підприємства.",
      "source": "Генштаб ЗСУ, ASTRA, OSINT, ЗМІ"
    },
    "en": {
      "region": "Nizhny Novgorod Oblast, Kstovo",
      "target": "Lukoil-Nizhegorodnefteorgsintez Oil Refinery (LLC 'LUKOIL-NNOS')",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 26, 2026, Ukrainian long-range strike drones struck the Lukoil-Nizhegorodnefteorgsintez oil refinery located in Kstovo, Nizhny Novgorod Oblast. Ranking among Russia's top four refining facilities, the plant processes approximately 17 million metric tons of crude oil annually. The enterprise serves as an indispensable fuel source for central Russia and provides petroleum products to the Russian armed forces. Despite interception efforts by local air defense units, several kamikaze drones breached defenses and crashed into core processing units. The impacts ignited large-scale fires accompanied by secondary explosions across the industrial sector. The Ukrainian General Staff officially confirmed the successful strike against this vital energy infrastructure asset.",
      "source": "General Staff of AFU, ASTRA, OSINT, Media"
    }
  },
  {
    "date": "26.08.2026",
    "lat": 52.5850,
    "lng": 41.5100,
    "distance": calcMinDistance(52.5850, 41.5100),
    "ru": {
      "region": "Тамбовская область, г. Котовск",
      "target": "Логистический комплекс маркетплейса «Wildberries» в индустриальном парке «Котовск»",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "В ночь на 26 августа 2026 года группа украинских ударных БПЛА нанесла сокрушительный удар по распределительному хабу Wildberries в моногороде Котовск Тамбовской области. Логистический центр общей площадью 108 тысяч квадратных метров выступал узловым распределительным объектом в ЦФО и использовался для складирования снаряжения и товаров двойного назначения. По данным властей региона, мобильные расчеты сбили большую часть дронов, однако три аппарата пробили перекрытия складских терминалов. На объекте вспыхнул катастрофический пожар на площади свыше 100 тысяч квадратных метров, приведший к полному уничтожению хаба. В результате удара двое сотрудников получили ранения, а деятельность логистического узла была окончательно остановлена.",
      "source": "Генштаб ВСУ, власти Тамбовской области, ASTRA, OSINT"
    },
    "uk": {
      "region": "Тамбовська область, м. Котовськ",
      "target": "Логістичний комплекс маркетплейса «Wildberries» в індустріальному парку «Котовськ»",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "У ніч на 26 серпня 2026 року група українських ударних БПЛА завдала нищівного удару по розподільчому хабу Wildberries у мономісті Котовськ Тамбовської області. Логістичний центр загальною площею 108 тисяч квадратних метрів відігравав ключову роль у Центральному федеральному окрузі РФ та залучався до перевалки майна подвійного призначення. За інформацією місцевої влади, частину безпілотників було збито, проте три дрони влучили безпосередньо у складські корпуси. На об'єкті спалахнула катастрофічна пожежа площею понад 100 тисяч квадратних метрів, що призвела до повного вигорання всього комплексу. Поранення отримали двоє працівників, а роботу стратегічного розподільчого вузла було остаточно припинено.",
      "source": "Генштаб ЗСУ, влада Тамбовської області, ASTRA, OSINT"
    },
    "en": {
      "region": "Tambov Oblast, Kotovsk",
      "target": "Wildberries Logistics Distribution Center in Kotovsk Industrial Park",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the night of August 26, 2026, Ukrainian attack drones carried out a high-impact strike against the Wildberries regional logistics hub in Kotovsk, Tambov Oblast. Spanning over 108,000 square meters, the warehouse served as a primary distribution node across central Russia, heavily handling dual-use military supplies and gear. Although Russian defensive units claimed several interceptions, three drones scored direct hits on main storage structures. The impacts triggered a massive inferno spanning more than 100,000 square meters, resulting in the near-total destruction of the entire warehouse complex. Regional officials acknowledged two casualties among personnel and confirmed that operations at the distribution center were completely halted.",
      "source": "General Staff of AFU, Tambov Oblast Authorities, ASTRA, OSINT"
    }
  },
  {
    "date": "26.08.2026",
    "lat": 51.4828,
    "lng": 46.2167,
    "distance": calcMinDistance(51.4828, 46.2167),
    "ru": {
      "region": "Саратовская область, г. Энгельс",
      "target": "Военный аэродром стратегической авиации «Энгельс-2»",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "Утром 26 августа 2026 года подразделения Сил обороны Украины провели массированный налет беспилотников на военный аэродром стратегической авиации «Энгельс-2» в Саратовской области. На данной авиабазе базируются ракетоносцы-бомбардировщики Ту-95МС и Ту-160, регулярно применяемые для ракетных ударов по энергосистеме Украины. В ходе отражения налета расчеты ПВО и средств РЭБ вели беспорядочную стрельбу над городскими кварталами Саратова и Энгельса, из-за чего дроны и зенитные ракеты повредили высотные жилые здания и припаркованные автомобили. В регионе экстренно вводился план «Ковер», временно парализовавший работу саратовского аэропорта «Гагарин». Налет нарушил предполетную подготовку авиации и вынудил противника менять базирование бортов.",
      "source": "Генштаб ВСУ, ASTRA, OSINT, СМИ"
    },
    "uk": {
      "region": "Саратовська область, м. Енгельс",
      "target": "Військовий аеродром стратегічної авіації «Енгельс-2»",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "Вранці 26 серпня 2026 року Сили оборони України здійснили масовану атаку безпілотниками на військовий аеродром стратегічної авіації «Енгельс-2» у Саратовській області. На цій авіабазі дислокуються стратегічні ракетоносці Ту-95МС та Ту-160, задіяні в регулярних обстрілах цивільної інфраструктури України. Під час відбиття нальоту російські засоби ППО та РЕБ вели хаотичний вогонь над житловими районами Саратова й Енгельса, внаслідок чого уламки пошкодили висотні житлові будинки та автотранспорт. У повітряному просторі регіону вводили план «Килим», що заблокував роботу міжнародного аеропорту «Гагарін». Атака зірвала планові вильоти ворожої бомбардувальної авіації та змусила командування РФ терміново передислокувати борти.",
      "source": "Генштаб ЗСУ, ASTRA, OSINT, ЗМІ"
    },
    "en": {
      "region": "Saratov Oblast, Engels",
      "target": "Engels-2 Strategic Long-Range Aviation Airbase",
      "category": "Military Airfield",
      "weapon": "Drone",
      "details": "On the morning of August 26, 2026, the Ukrainian Defense Forces mounted a coordinated drone raid against the Engels-2 strategic bomber airbase in Saratov Oblast. The airfield serves as the primary home base for Russian Tu-95MS and Tu-160 nuclear-capable heavy bombers conducting cruise missile strikes against Ukraine. Local air defense units and electronic warfare installations engaged incoming UAVs erratically above residential quarters of Saratov and Engels, resulting in drone debris impacting high-rise residential towers and vehicles. Authorities activated emergency 'Kover' airspace closures, halting flights at Saratov's Gagarin Airport. The deep strike disrupted planned sorties of Russia's strategic aviation regiment and forced tactical aircraft dispersal.",
      "source": "General Staff of AFU, ASTRA, OSINT, Media"
    }
  },
  {
    "date": "26.08.2026",
    "lat": 45.3780,
    "lng": 32.5340,
    "distance": calcMinDistance(45.3780, 32.5340),
    "ru": {
      "region": "АР Крым, Черноморский район, с. Оленевка",
      "target": "Пункт управления и стартовая позиция БПЛА ВС РФ в районе мыса Тарханкут",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "26 августа 2026 года Силы обороны Украины нанесли прицельный удар ударными беспилотниками по замаскированному пункту управления и позиционному району запуска БПЛА ВС РФ возле Оленевки на мысе Тарханкут. Этот объект в западном Крыму использовался российскими подразделениями для координации разведывательных полетов над Черным морем и запуска ударных беспилотников по Одесской и Николаевской областям. Точным попаданием украинских средств поражения были уничтожены передвижные командно-штабные модули, антенные системы спутникового наведения и подготовленные к старту аппараты. Поражение пункта управления лишило противника возможности вести оперативную разведку морского побережья и сорвало очередную волну пусков дронов-камикадзе.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "АР Крим, Чорноморський район, с. Оленівка",
      "target": "Пункт управління та стартова позиція БПЛА ЗС РФ у районі мису Тарханкут",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "26 серпня 2026 року Сили оборони України завдали прицільного удару безпілотниками по замаскованому пункту управління та позиційному району запуску БПЛА ЗС РФ поблизу Оленівки на мисі Тарханкут. Цей військовий об'єкт на заході Криму забезпечував управління розвідувальними польотами над Чорним морем та координував пуски ударних дронів по Одеській та Миколаївській областях. Точними ударами українських засобів ураження було знищено пересувні апаратні пункти, супутникові комплекси зв'язку та споряджені до польоту безпілотники. Успішна операція вивела з ладу критичний пункт управління окупантів і позбавила їх можливості відстежувати морську обстановку вздовж південного узбережжя.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Crimea, Chornomorske District, Olenivka",
      "target": "Russian UAV Command Post and Launch Site at Cape Tarkhankut",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 26, 2026, Ukrainian forces conducted a surgical drone strike on a concealed Russian UAV command post and launch site near Olenivka on Cape Tarkhankut in western Crimea. The military installation handled coordination for naval reconnaissance flights over the Black Sea and directed long-range strike UAV missions targeting southern Ukraine. The direct precision strikes eliminated mobile command containers, satellite data uplink arrays, and ready-to-launch unmanned aircraft stationed on site. Neutralizing this specialized operations center severely degraded Russian maritime surveillance capabilities along coastal corridors and disrupted impending waves of kamikaze drone deployments across the southern theater.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "26.08.2026",
    "lat": 45.9860,
    "lng": 34.5480,
    "distance": calcMinDistance(45.9860, 34.5480),
    "ru": {
      "region": "Херсонская область, Генический район, с. Чонгар",
      "target": "Ремонтно-восстановительное подразделение и пункт техобслуживания техники ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "26 августа 2026 года украинские войска нанесли высокоточный комбинированный удар по ремонтно-восстановительному подразделению и базе техобслуживания ВС РФ в районе Чонгара на административной границе с Крымом. Данный передовой технический узел выполнял оперативный ремонт и восстановление поврежденных бронетранспортеров, танков и артиллерийских орудий, перебрасываемых на Запорожское и Херсонское направления. В результате серии точных попаданий были поражены ремонтные мастерские, передвижные мобильные комплексы и стоянка техники, ожидавшей эвакуации. Детонация хранилищ запчастей и ГСМ вызвала сильный пожар, полностью выведя подразделение из строя. Удар существенно затормозил возврат боеспособной тяжелой техники на передовые позиции.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "Херсонська область, Генічеський район, с. Чонгар",
      "target": "Ремонтно-відновлювальний підрозділ і пункт техобслуговування техніки ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "26 серпня 2026 року українські війська завдали високоточного комбінованого удару по ремонтно-відновлювальному підрозділу та базі технічного обслуговування окупантів у районі Чонгара на адмінкордоні з Кримом. Цей польовий ремонтний вузол здійснював відновлення та регламентний ремонт пошкоджених бронемашин, танків і тягачів для угруповань на Запорізькому та Херсонському напрямках. Серія влучних ударів уразила майстерні техобслуговування, мобільні ремонтні станції та відкритий майданчик зосередження техніки. Пожежа та вторинні детонації знищили запаси вузлів і пально-мастильних матеріалів, паралізувавши роботу пункту. Удар зірвав плани ворога щодо швидкого повернення відремонтованої бронетехніки на фронт.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Kherson Oblast, Henichesk District, Chongar",
      "target": "Russian Armored Vehicle Repair and Technical Maintenance Unit",
      "category": "Military",
      "weapon": "Drone / Missile",
      "details": "On August 26, 2026, Ukrainian forces launched a precision combined strike on a Russian frontline vehicle repair and maintenance base near Chongar on the administrative boundary with Crimea. This critical maintenance node provided urgent repairs, component replacements, and field overhauls for damaged armored vehicles and heavy artillery supplying the Zaporizhzhia and Kherson fronts. Precision munitions struck engineering maintenance bays, mobile workshop trucks, and outdoor holding pens holding battle-damaged equipment. Secondary explosions of lubricants and spare parts stockpiles ignited widespread blazes that paralyzed operations. Destroying this facility significantly crippled the Russian logistics chain responsible for recycling damaged armor back to the front.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "26.08.2026",
    "lat": 48.0158,
    "lng": 37.8028,
    "distance": calcMinDistance(48.0158, 37.8028),
    "ru": {
      "region": "Донецкая область, г. Донецк",
      "target": "Запасной пункт управления (ЗПУ) 8-й общевойсковой армии ВС РФ",
      "category": "ВПК",
      "weapon": "Ракета",
      "details": "26 августа 2026 года Воздушные силы Украины нанесли прицельный ракетный удар воздушного базирования по защищенному запасному пункту управления 8-й общевойсковой армии ВС РФ в оккупированном Донецке. С данного защищенного штабного узла российское высшее командование осуществляло оперативное управление наступательными группировками на Кураховском и Покровском направлениях. Высокоточные авиационные ракеты пробили железобетонные перекрытия бункера, вызвав обрушение подземных конструкций, сильный пожар и детонацию аппаратуры спецсвязи. В результате успешной операции пункт управления был полностью выведен из строя, что привело к потере устойчивого оперативного руководства частями армии противника на ключевом участке фронта.",
      "source": "Генштаб ВСУ, Воздушные силы ВСУ, OSINT"
    },
    "uk": {
      "region": "Донецька область, м. Донецьк",
      "target": "Запасний пункт управління (ЗПУ) 8-ї загальновійськової армії ЗС РФ",
      "category": "ВПК",
      "weapon": "Ракета",
      "details": "26 серпня 2026 року Повітряні сили ЗСУ завдали прицільного удару високоточними ракетами повітряного базування по захищеному запасному пункту управління 8-ї загальновійськової армії РФ в окупованому Донецьку. З цього підземного штабного об'єкта командування окупантів координувало дії ударних підрозділів на Покровському та Курахівському напрямках. Авіаційні ракети пробили залізобетонні перекриття комплексу, спричинивши масштабні руйнування, пожежу та знищення обладнання закритого військового зв'язку. Внаслідок результативного ураження пункт управління зазнав критичних ушкоджень, що спричинило суттєву дезорганізацію системи оперативного керівництва військами агресора на лінії зіткнення.",
      "source": "Генштаб ЗСУ, Повітряні сили ЗСУ, OSINT"
    },
    "en": {
      "region": "Donetsk Oblast, Donetsk",
      "target": "Alternate Command Post of the Russian 8th Combined Arms Army",
      "category": "Military",
      "weapon": "Missile",
      "details": "On August 26, 2026, the Ukrainian Air Force conducted a high-precision air-launched missile strike against a fortified alternate command post of the Russian 8th Combined Arms Army in occupied Donetsk. From this fortified headquarters facility, senior commanders coordinated tactical operations and offensive pushes along the Pokrovsk and Kurakhove axes. Precision-guided air munitions penetrated reinforced concrete bunker ceilings, causing structural collapses, severe fires, and destroying encrypted communications hardware. The strike completely knocked out the command hub, causing acute disruptions in operational command-and-control capabilities for Russian units across this contested front.",
      "source": "General Staff of AFU, Ukrainian Air Force, OSINT"
    }
  }
];

// Check sentence counts and length strictly
let hasErrors = false;
newItems.forEach((item, idx) => {
  ['ru', 'uk', 'en'].forEach(lang => {
    const text = item[lang].details;
    const len = text.length;
    // Count sentences roughly
    const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);
    console.log(`Item ${idx} [${item[lang].target.substring(0, 35)}...] (${lang}): ${len} chars, ${sentences.length} sentences`);
    if (len < 600 || len > 1000) {
      console.error(`ERROR: Item ${idx} (${lang}) length ${len} is outside 600-1000 range!`);
      hasErrors = true;
    }
    if (sentences.length < 4 || sentences.length > 8) {
      console.error(`ERROR: Item ${idx} (${lang}) sentence count ${sentences.length} is outside 4-8 range!`);
      hasErrors = true;
    }
  });
});

if (hasErrors) {
  console.error("Validation failed!");
  process.exit(1);
}

// Update data.js
const content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
let data = new Function('return ' + dataStr)();

// Remove existing 26.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '26.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 26 August 2026! Total items in data.js: ${data.length}`);
