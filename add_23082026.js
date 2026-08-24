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
    "date": "23.08.2026",
    "lat": 51.8646,
    "lng": 55.1797,
    "distance": calcMinDistance(51.8646, 55.1797),
    "ru": {
      "region": "Оренбургская область, г. Оренбург (ОЭЗ «Оренбуржье»)",
      "target": "Логистический хаб маркетплейса «Ozon» (Фулфилмент-центр «Оренбург»)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "В ночь на 23 августа 2026 года подразделения украинских беспилотников атаковали логистический комплекс маркетплейса Ozon в особой экономической зоне «Оренбуржье» под Оренбургом. Расстояние до цели от границы Украины превысило 1200 км, что сделало этот удар одной из самых дальних атак по тыловой инфраструктуре. Первая очередь современного складского хаба площадью 40 тысяч квадратных метров была открыта в августе 2024 года с инвестициями свыше 4 миллиардов рублей. В результате прилета дронов на территории комплекса вспыхнул пожар в зоне хранения и сортировки отправлений. Экстренные службы эвакуировали из помещений более 300 работников дежурной смены, обошлось без жертв. Руководство маркетплейса временно заблокировало прием новых грузов и скрыло товары площадки с витрины. Терминал обеспечивал распределение поставок товаров двойного назначения, электроники и снаряжения по всему региону Южного Урала.",
      "source": "Губернатор Оренбургской области, ASTRA, СМИ РФ, OSINT"
    },
    "uk": {
      "region": "Оренбурзька область, м. Оренбург (ВЕЗ «Оренбуржжя»)",
      "target": "Логістичний хаб маркетплейса «Ozon» (Фулфілмент-центр «Оренбург»)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "У ніч на 23 серпня 2026 року далекобійні українські безпілотники атакували логістичний комплекс маркетплейса Ozon у вільній економічній зоні «Оренбуржжя» біля Оренбурга. Відстань до цілі від державного кордону України склала понад 1200 км, ставши однією з найглибших операцій проти ворожої тилової логістики. Першу чергу сучасного сортувального хабу площею 40 тисяч квадратних метрів запустили у серпні 2024 року з обсягом інвестицій понад 4 мільярди рублів. Внаслідок влучання дронів на території комплексу спалахнула пожежа у відсіку зберігання вантажів і сортування. З будівлі екстрено евакуювали понад 300 співробітників чергової зміни, обійшлося без загиблих. Керівництво компанії призупинило приймання товарів і приховало продукцію складу з каталогу. Термінал відігравав ключову роль у постачанні товарів подвійного призначення, електроніки та військової амуніції на Південному Уралі.",
      "source": "Губернатор Оренбурзької області, ASTRA, ЗМІ РФ, OSINT"
    },
    "en": {
      "region": "Orenburg Oblast, Orenburg (Orenburzhye SEZ)",
      "target": "Ozon Logistics Fulfillment Hub (Orenburg Distribution Center)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the night of August 23, 2026, Ukrainian long-range strike UAVs struck the major Ozon marketplace logistics fulfillment center in the Orenburzhye special economic zone near Orenburg. The flight distance to the target exceeded 1,200 km from the Ukrainian border, marking one of the deepest drone strikes against rear logistics infrastructure. The first phase of this modern 40,000-square-meter distribution hub was commissioned in August 2024 with investments exceeding 4 billion rubles. The drone impacts triggered a fire across cargo storage and parcel processing sections. Emergency response units evacuated over 300 shift workers from the burning facility, with no casualties reported. Management suspended incoming freight and removed local inventory from the marketplace platform. The facility served as a vital regional logistics hub processing dual-use electronics and military-grade supplies for the Southern Urals.",
      "source": "Orenburg Oblast Governor, ASTRA, Media, OSINT"
    }
  },
  {
    "date": "23.08.2026",
    "lat": 45.5085,
    "lng": 32.7052,
    "distance": calcMinDistance(45.5085, 32.7052),
    "ru": {
      "region": "АР Крым, пгт Черноморское (бухта Узкая)",
      "target": "Пункт базирования морских дронов и наземный ретранслятор БПЛА ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракетный удар",
      "details": "В ночь на 23 августа 2026 года Силы обороны Украины нанесли комбинированный удар по пункту базирования морских дронов и объектам связи ВС РФ в поселке Черноморское на западе Крыма. В ходе операции были успешно поражены защищенные ангары для хранения и подготовки морских безэкипажных катеров (МБЭК), использовавшихся противником для патрулирования и атак в Черном море. Также точным попаданием уничтожен наземный ретрансляторный узел связи, обеспечивавший управление ударными беспилотниками типов «Герань-2» и «Гербера» при налетах на южные регионы Украины. Местные жители сообщали о серии мощных детонаций со стороны бухты Узкая и сильном задымлении прибрежной зоны. Вывод из строя ретранслятора и катеров существенно ослабил возможности российских войск по координации воздушных налетов и морскому контролю у крымского побережья.",
      "source": "Генштаб ВСУ, ВМС ВСУ / Силы обороны, OSINT"
    },
    "uk": {
      "region": "АР Крим, смт Чорноморське (бухта Вузька)",
      "target": "Пункт базування морських дронів та наземний ретранслятор БпЛА ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракетний удар",
      "details": "У ніч на 23 серпня 2026 року Сили оборони України завдали комбінованого удару по пункту базування морських дронів та об'єктах зв'язку ЗС РФ у селищі Чорноморське на заході Криму. Під час операції було успішно уражено захищені ангари зберігання та підготовки морських безекіпажних катерів (МБеК), які противник використовував для патрулювання в Чорному морі. Також точним влучанням знищено наземний ретрансляторний вузол зв'язку, що забезпечував управління польотами ударних безпілотників «Герань-2» та «Гербера» по півдню України. Місцеві жителі зафіксували серію потужних вторинних детонацій з боку бухти Вузька та сильне задимлення узбережжя. Виведення з ладу ретранслятора та катерів суттєво послабило здатність російських військ координувати повітряні нальоти і контролювати морські підходи до Криму.",
      "source": "Генштаб ЗСУ, ВМС ЗСУ / Сили оборони, OSINT"
    },
    "en": {
      "region": "Crimea, Chornomorske (Vuzka Bay)",
      "target": "Russian USV Staging Base and Ground UAV Relay Station",
      "category": "Military",
      "weapon": "Drone / Missile Strike",
      "details": "On the night of August 23, 2026, the Ukrainian Defense Forces executed a combined strike against a Russian naval drone staging facility and communications hub in Chornomorske, western Crimea. The precision operation hit hardened shelters used for the storage, maintenance, and deployment of unmanned surface vessels (USVs) patrolling Black Sea waters. In addition, Ukrainian strikes destroyed a vital ground-based radio relay communications station utilized by Russian forces to control Geran-2 and Gerber strike drones targeting southern Ukraine. Local residents reported a succession of powerful secondary explosions across Vuzka Bay accompanied by thick plumes of smoke along the coast. Disabling this communications relay station and the naval drone base severely compromised Russia's ability to coordinate swarm drone attacks and maintain maritime patrols around the Crimean peninsula.",
      "source": "General Staff of AFU, Ukrainian Navy / Defense Forces, OSINT"
    }
  },
  {
    "date": "23.08.2026",
    "lat": 45.1950,
    "lng": 33.3050,
    "distance": calcMinDistance(45.1950, 33.3050),
    "ru": {
      "region": "АР Крым, г. Евпатория (район п. Уютное)",
      "target": "Радиолокационная станция «СТ-68» (36Д6М) 3-го радиотехнического полка",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "23 августа 2026 года подразделения Сил беспилотных систем ВСУ во взаимодействии с другими силами нанесли точный удар по позициям 3-го радиотехнического полка в районе Евпатории и села Уютное в Крыму. В результате атаки дронов-камикадзе была поражена и выведена из строя трехкоординатная радиолокационная станция обнаружения маловысотных целей «СТ-68» (36Д6М). Данная РЛС являлась ключевым элементом эшелонированной системы ПВО оккупантов, обеспечивая целеуказание для зенитно-ракетных комплексов С-300 и С-400 и контролируя воздушное пространство над Черным морем. После попадания на позиции РЛС возник пожар с уничтожением аппаратной машины и антенного поста. Оккупационные паблики заявляли о работе систем противовоздушной обороны, однако спутниковые снимки и OSINT-аналитики зафиксировали очаги возгорания на боевой позиции. Уничтожение радара создало коридор для дальнейших ударов украинской авиации и дронов.",
      "source": "Генштаб ВСУ, Силы беспилотных систем (СБС), OSINT"
    },
    "uk": {
      "region": "АР Крим, м. Євпаторія (район с. Затишне)",
      "target": "Радіолокаційна станція «СТ-68» (36Д6М) 3-го радіотехнічного полку",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "23 серпня 2026 року підрозділи Сил безпілотних систем ЗСУ у взаємодії з іншими формуваннями завдали влучного удару по позиціях 3-го радіотехнічного полку в районі Євпаторії та села Затишне в Криму. Внаслідок атаки дронів-камікадзе було уражено та виведено з ладу трикоординатну радіолокаційну станцію виявлення маловисотних цілей «СТ-68» (36Д6М). Ця РЛС була ключовим елементом ешелонованої системи ППО окупантів, забезпечуючи цілевказання для комплексів С-300 та С-400 і контроль повітряного простору над морем. Після прильоту на радіотехнічній позиції спалахнула пожежа, яка знищила апаратну машину й антенний пост. Окупаційні джерела заявляли про відбиття нальоту, однак супутникові знімки та OSINT-аналітики зафіксували термоточки на бойовій позиції. Знищення радара створило пролом у системі виявлення цілей для подальших атак українських дронів та ракет.",
      "source": "Генштаб ЗСУ, Сили безпілотних систем (СБС), OSINT"
    },
    "en": {
      "region": "Crimea, Yevpatoriya (Zatyshne area)",
      "target": "ST-68 (36D6M) Low-Altitude Radar Station of the 3rd Radio-Technical Regiment",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 23, 2026, the Ukrainian Unmanned Systems Forces, in coordination with other defense units, carried out a precision strike against positions of the 3rd Radio-Technical Regiment near Yevpatoriya and Zatyshne in Crimea. The kamikaze drone strike neutralized an ST-68 (36D6M) three-dimensional low-altitude air surveillance radar system. This radar was an essential component of Russia's integrated air defense network in western Crimea, providing early warning and targeting data for S-300 and S-400 missile batteries while monitoring the Black Sea airspace. The impact triggered an intense fire that engulfed the operations cabin and the antenna post. While Russian occupation authorities claimed the drones were intercepted, satellite imagery and OSINT analysts confirmed heat signatures and severe damage at the site. The loss of this radar opened a critical blind spot in regional air defenses.",
      "source": "General Staff of AFU, SBS, OSINT"
    }
  },
  {
    "date": "23.08.2026",
    "lat": 45.7032,
    "lng": 34.3916,
    "distance": calcMinDistance(45.7032, 34.3916),
    "ru": {
      "region": "АР Крым, г. Джанкой",
      "target": "Склады материально-технического обеспечения и ремонтная база ВС РФ",
      "category": "Логистика / ВПК",
      "weapon": "Дрон / Ракетный удар",
      "details": "В ночь на 23 августа 2026 года Силы обороны Украины нанесли массированный огневой удар по военным объектам в Джанкое на севере временно оккупированного Крыма. Точными попаданиями были поражены крупные склады материально-технических средств (МТС) и ремонтные подразделения ВС РФ. Этот объект выполнял функцию главного железнодорожного и автомобильного распределительного узла снабжения группировки российских войск на Херсонском и Запорожском направлениях. На складах хранились запчасти для бронетехники, ремонтные комплекты и боеприпасы. Местные жители и агенты партизанского движения «АТЕШ» зафиксировали многочисленные взрывы и детонацию боекомплекта, сопровождавшиеся сильным пожаром. Поражение тылового узла сорвало графики восстановления поврежденной тяжелой техники и затруднило поставки материальных ресурсов для передовых частей оккупантов.",
      "source": "Генштаб ВСУ, партизанское движение «АТЕШ», СМИ"
    },
    "uk": {
      "region": "АР Крим, м. Джанкой",
      "target": "Склади матеріально-технічного забезпечення та ремонтна база ЗС РФ",
      "category": "Логістика / ВПК",
      "weapon": "Дрон / Ракетний удар",
      "details": "У ніч на 23 серпня 2026 року Сили оборони України завдали масованого вогневого удару по військових об'єктах у Джанкої на півночі тимчасово окупованого Криму. Точними влучаннями було уражено великі склади матеріально-технічних засобів (МТЗ) та ремонтні підрозділи ЗС РФ. Цей об'єкт виконував функцію головного залізничного й автомобільного розподільчого вузла забезпечення угруповання російських військ на Херсонському та Запорізькому напрямках. На території зберігалися запчастини до бронетехніки, ремонтне обладнання та боєприпаси. Місцеві жителі та агенти партизанського руху «АТЕШ» зафіксували численні вибухи та тривалу детонацію, що супроводжувалися потужною пожежею. Ураження тилового вузла зірвало графіки відновлення пошкодженої важкої техніки та суттєво ускладнило постачання ресурсів на лінію фронту.",
      "source": "Генштаб ЗСУ, партизанський рух «АТЕШ», ЗМІ"
    },
    "en": {
      "region": "Crimea, Dzhankoy",
      "target": "Russian Military Logistics Depots and Equipment Repair Base",
      "category": "Logistics / Military-Industrial Complex",
      "weapon": "Drone / Missile Strike",
      "details": "On the night of August 23, 2026, the Ukrainian Defense Forces carried out a concentrated strike against Russian military logistics assets in Dzhankoy, northern Crimea. Ukrainian strikes successfully hit extensive material-technical supply depots (MTS) and equipment repair facilities operated by the Russian Armed Forces. The targeted base functioned as a central rail and highway distribution node supporting Russian military formations deployed across the Kherson and Zaporizhzhia fronts. The complex housed essential vehicle spare parts, specialized repair kits, and ammunition stocks. Local residents and partisan scouts from the ATESH movement reported secondary explosions and a massive blaze at the site. The disruption of this primary logistical and repair hub hampered Russian field maintenance operations and stalled critical supply flows to frontline units.",
      "source": "General Staff of AFU, ATESH Movement, Media"
    }
  },
  {
    "date": "23.08.2026",
    "lat": 44.5900,
    "lng": 33.5200,
    "distance": calcMinDistance(44.5900, 33.5200),
    "ru": {
      "region": "АР Крым, г. Севастополь",
      "target": "Радиолокационная станция метрового диапазона «Небо-У» 31-й дивизии ПВО",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 23 августа 2026 года Силы беспилотных систем ВСУ нанесли результативный удар дронами по объектам противовоздушной обороны в Севастополе. В результате прилета была поражена радиолокационная станция метрового диапазона «Небо-У» из состава 31-й дивизии ПВО РФ. Этот дорогостоящий комплекс стоимостью около 100 миллионов долларов способен обнаруживать воздушные цели, включая малозаметные самолеты и крылатые ракеты, на дистанциях до 600 км. Губернатор Севастополя подтвердил отражение налета и падение многочисленных обломков на Северной стороне и в районе Гончарного. Тем не менее украинские средства поражения пробили купол ПВО и нанесли критические повреждения антенной решетке и командному пункту РЛС. Потеря станции существенно снизила возможности российской противовоздушной обороны по контролю крымского сектора и своевременному отражению ракетных ударов.",
      "source": "Силы беспилотных систем (СБС), Генштаб ВСУ, ASTRA, СМИ"
    },
    "uk": {
      "region": "АР Крим, м. Севастополь",
      "target": "Радіолокаційна станція метрового діапазону «Небо-У» 31-ї дивізії ППО",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч на 23 серпня 2026 року Сили безпілотних систем ЗСУ завдали результативного удару дронами по об'єктах протиповітряної оборони в Севастополі. Внаслідок влучання було уражено радіолокаційну станцію метрового діапазону «Небо-У» зі складу 31-ї дивізії ППО РФ. Цей високовартісний комплекс ціною близько 100 мільйонів доларів здатний виявляти повітряні цілі, зокрема малопомітні літаки та крилаті ракети, на відстані до 600 км. Губернатор Севастополя підтвердив відбиття нальоту та падіння численних уламків на Північній стороні й біля Гончарного. Проте українські дрони пробили систему ППО та завдали критичних пошкоджень антенній решітці й командному пункту РЛС. Втрата цієї станції суттєво знизила можливості російської протиповітряної оборони щодо раннього виявлення повітряних цілей над акваторією Чорного моря.",
      "source": "Сили безпілотних систем (СБС), Генштаб ЗСУ, ASTRA, ЗМІ"
    },
    "en": {
      "region": "Crimea, Sevastopol",
      "target": "Nebo-U VHF Radar System of the 31st Air Defense Division",
      "category": "Military",
      "weapon": "Drone",
      "details": "On the night of August 23, 2026, the Ukrainian Unmanned Systems Forces executed a targeted drone strike against air defense infrastructure in Sevastopol, Crimea. The strike successfully hit a high-value Nebo-U VHF-band mobile surveillance radar operated by Russia's 31st Air Defense Division. Estimated at roughly 100 million dollars, the Nebo-U system provides long-range air surveillance capable of detecting stealth aircraft, drones, and cruise missiles at ranges up to 600 km. Sevastopol's Russian-installed governor reported extensive anti-air fire and debris falling across the Northern Bay and Goncharne districts. However, Ukrainian strike drones penetrated the defensive perimeter, inflicting critical damage on the radar's phased antenna array and command module. The loss of this radar degraded early warning capabilities across the Crimean air operational zone.",
      "source": "Unmanned Systems Forces (SBS), General Staff of AFU, ASTRA, Media"
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

// Remove existing 23.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '23.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 23 August 2026! Total items in data.js: ${data.length}`);
