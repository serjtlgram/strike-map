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
    "date": "08.08.2026",
    "lat": 44.8533,
    "lng": 38.5684,
    "distance": calcMinDistance(44.8533, 38.5684),
    "ru": {
      "region": "Краснодарский край, Северский район, пгт Ильский",
      "target": "Ильский нефтеперерабатывающий завод (ООО «КНПЗ-Ильский НПЗ»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 8 августа 2026 года Силы обороны Украины совместно с Департаментом активных действий и Департаментом беспилотных систем ГУР МО нанесли массированный удар дальнобойными дронами по Ильскому нефтеперерабатывающему заводу в Краснодарском крае. Этот крупный НПЗ проектной мощностью 6,6 млн тонн нефти в год является ключевым поставщиком дизельного топлива и авиакеросина для группировок войск РФ на Южном фронте. По данным оперативного штаба региона и источников Astra, на территорию завода прилетела группа ударных БПЛА, преодолевшая систему ПВО. В результате прилетов и падения горящих обломков на технологических площадках вспыхнул масштабный пожар. Пострадали пять работников предприятия, которым потребовалась госпитализация. Атака привела к временной остановке первичных установок переработки нефти и нарушению поставок топлива.",
      "source": "Генштаб ВСУ, ГУР МО, оперштаб Краснодарского края, OSINT (Astra), ЗМІ"
    },
    "uk": {
      "region": "Краснодарський край, Сіверський район, смт Ільський",
      "target": "Ільський нафтопереробний завод (ТОВ «КНПЗ-Ільський НПЗ»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 8 серпня 2026 року Сили оборони України спільно з Департаментом активних дій та Департаментом безпілотних систем ГУР МО завдали масованого удару далекобійними дронами по Ільському нафтопереробному заводу в Краснодарському краї. Цей великий НПЗ проектною потужністю 6,6 млн тонн нафти на рік є ключовим постачальником дизельного пального та авіагасу для угруповань військ РФ на Південному фронті. За даними оперативного штабу регіону та джерел Astra, на територію заводу прилетіла група ударних БПЛА, яка подолала систему ППО. У результаті влучань та падіння палаючих уламків на технологічних майданчиках спалахнула масштабна пожежа. Постраждали п'ятеро працівників підприємства, яким знадобилася госпіталізація. Атака призвела до тимчасової зупинки первинних установок переробки нафти та порушення постачання пального.",
      "source": "Генштаб ЗСУ, ГУР МО, оперштаб Краснодарського краю, OSINT (Astra), ЗМІ"
    },
    "en": {
      "region": "Krasnodar Krai, Seversky District, Ilsky",
      "target": "Ilsky Oil Refinery (KNPZ-Ilsky Refinery LLC)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 8, 2026, Ukrainian Defense Forces, in coordination with the GUR Active Operations and Unmanned Systems departments, launched a heavy long-range drone strike on the Ilsky Oil Refinery in Krasnodar Krai. Operating with a processing capacity of 6.6 million metric tons per year, this major refinery serves as a vital fuel supplier of diesel and aviation kerosene for Russian forces operating on the southern front. According to regional emergency services and OSINT monitors from Astra, a swarm of attack UAVs bypassed local air defenses and hit processing units. The strike triggered a large-scale fire across the main technological installations. Five refinery technicians suffered injuries and required medical care. The damage forced an emergency shutdown of crude distillation units, severely disrupting regional military fuel supplies.",
      "source": "General Staff of AFU, GUR MO, Krasnodar Operational HQ, OSINT (Astra), Media"
    }
  },
  {
    "date": "08.08.2026",
    "lat": 53.1364,
    "lng": 48.4258,
    "distance": calcMinDistance(53.1364, 48.4258),
    "ru": {
      "region": "Самарская область, г. Сызрань",
      "target": "Сызранский нефтеперерабатывающий завод (АО «Сызранский НПЗ», ПАО «НК «Роснефть»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 8 августа 2026 года украинские дальнобойные беспилотники совершили успешный налет на Сызранский нефтеперерабатывающий завод ПАО «НК «Роснефть» в Самарской области, находящийся более чем в 850 километрах от линии фронта. Данный завод с производительностью около 8,9 млн тонн нефти в год играет стратегическую роль в снабжении центральных и южных военных округов РФ. По информации Генштаба ВСУ и свидетельствам местных жителей, город атаковали до 30 дронов, после чего на территории завода раздалось более десятка взрывов. Основной удар пришелся по установке атмосферно-вакуумной трубчатки (АВТ) и резервуарному парку, где начался интенсивный пожар, зафиксированный спутниками NASA FIRMS. Губернатор области подтвердил прилеты на промпредприятие. Из-за атаки в самарском аэропорту «Курумоч» вводился план «Ковер» с задержкой десятков рейсов.",
      "source": "Генштаб ВСУ, ГУР МО, губернатор Федорищев, OSINT (Astra, FIRMS), ЗМІ"
    },
    "uk": {
      "region": "Самарська область, м. Сизрань",
      "target": "Сизранський нафтопереробний завод (АТ «Сизранський НПЗ», ПАТ «НК «Роснефть»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 8 серпня 2026 року українські далекобійні безпілотники здійснили успішний наліт на Сизранський нафтопереробний завод ПАТ «НК «Роснефть» у Самарській області, що розташований на відстані понад 850 кілометрів від лінії фронту. Цей завод із продуктивністю близько 8,9 млн тонн нафти на рік відіграє стратегічну роль у забезпеченні центральних та південних військових округів РФ. За інформацією Генштабу ЗСУ та свідченнями місцевих мешканців, місто атакували до 30 дронів, після чого на території заводу пролунало понад десяток вибухів. Основний удар припадав на установку атмосферно-вакуумної трубчатки (АВТ) та резервуарний парк, де розпочалася інтенсивна пожежа, зафіксована супутниками NASA FIRMS. Губернатор області підтвердив влучання у промпідприємство. Через атаку в самарському аеропорту «Курумоч» вводився план «Ковер» із затримкою десятків рейсів.",
      "source": "Генштаб ЗСУ, ГУР МО, губернатор Федорищев, OSINT (Astra, FIRMS), ЗМІ"
    },
    "en": {
      "region": "Samara Oblast, Syzran",
      "target": "Syzran Oil Refinery (JSC Syzran Refinery, Rosneft)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On the night of August 8, 2026, long-range Ukrainian strike UAVs launched a successful raid against the Syzran Oil Refinery owned by Rosneft in Samara Oblast, located over 850 kilometers from the frontline. With an annual capacity of 8.9 million metric tons, the facility is a key fuel production asset supporting Russian military logistics across the central and southern sectors. According to the General Staff of the AFU and local eyewitness accounts, up to 30 drones approached the facility, resulting in more than a dozen heavy explosions inside the refinery perimeter. The main strikes hit the primary crude distillation unit (AVT) and fuel storage reservoirs, sparking a high-intensity fire detected by NASA FIRMS satellite thermal sensors. Regional authorities confirmed direct impacts, while Samara's Kurumoch Airport introduced \"Kover\" airspace security protocols.",
      "source": "General Staff of AFU, GUR MO, Governor Fedorishchev, OSINT (Astra, FIRMS), Media"
    }
  },
  {
    "date": "08.08.2026",
    "lat": 44.5611,
    "lng": 38.0772,
    "distance": calcMinDistance(44.5611, 38.0772),
    "ru": {
      "region": "Краснодарский край, г. Геленджик",
      "target": "Позиция зенитно-ракетного комплекса С-400 «Триумф»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "8 августа 2026 года Силы беспилотных систем (СБС) ВСУ нанесли высокоточный удар дронами-камикадзе по позиции зенитно-ракетного комплекса С-400 «Триумф» в районе Геленджика Краснодарского края. По данным командующего СБС Роберта Бровди («Мадяра»), именно эта батарея ПВО в течение утра с 09:25 до 12:51 совершила шесть ракетных пусков по украинской территории. В ответ украинские операторы БПЛА выследили позиционный район и отправили груу ударных дронов. В результате прямого попадания на позиции ЗРК загорелись пусковые установки и радиолокационная станция подсвета и наведения. Мощный пожар на объекте продолжался более трех часов, сопровождаясь детонацией зенитных ракет. Уничтожение дорогостоящего комплекса С-400 существенно ослабило прикрытие Черноморского побережья РФ и логистических путей в Крым.",
      "source": "События СБС ВСУ, Роберт Бровди («Мадяр»), OSINT, ЗМІ"
    },
    "uk": {
      "region": "Краснодарський край, м. Геленджик",
      "target": "Позиція зенітно-ракетного комплексу С-400 «Тріумф»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "8 серпня 2026 року Сили безпілотних систем (СБС) ЗСУ завдали високоточного удару дронами-камікадзе по позиції зенітно-ракетного комплексу С-400 «Тріумф» у районі Геленджика Краснодарського краю. За даними командувача СБС Роберта Бровді («Мадяра»), саме ця батарея ППО протягом ранку з 09:25 до 12:51 здійснила шість ракетних пусків по українській території. У відповідь українські оператори БПЛА вистежили позиційний район та відправили групу ударних дронів. У результаті прямого влучання на позиціях ЗРК спалахнули пускові установки та радіолокаційна станція підсвічування й наведення. Потужна пожежа на об'єкті тривала понад три години, супроводжуючись детонацією зенітних ракет. Знищення дороговартісного комплексу С-400 суттєво послабило прикриття Чорноморського узбережжя РФ та логістичних шляхів до Криму.",
      "source": "Сили безпілотних систем ЗСУ, Роберт Бровді («Мадяр»), OSINT, ЗМІ"
    },
    "en": {
      "region": "Krasnodar Krai, Gelendzhik",
      "target": "S-400 Triumf Air Defense Missile Battery Position",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On August 8, 2026, the Unmanned Systems Forces (SBS) of Ukraine executed a precision loitering munition strike against an S-400 \"Triumf\" air defense missile battery positioned near Gelendzhik in Krasnodar Krai. According to SBS Commander Robert Brovdi (\"Madyar\"), this specific battery carried out six anti-aircraft missile launches targeting Ukrainian territory between 09:25 and 12:51 AM that same day. Ukrainian UAV operators pinpointed the active battery coordinates and deployed a swarm of strike drones. Direct hits ignited the TEL launchers and the target engagement radar station. The resulting fire blazed for over three hours, accompanied by secondary missile cook-offs. The destruction of this high-tier S-400 system significantly compromised Russian air defense coverage over the Black Sea coastline and supply lines heading into Crimea.",
      "source": "Unmanned Systems Forces of AFU, Robert Brovdi (Madyar), OSINT, Media"
    }
  },
  {
    "date": "08.08.2026",
    "lat": 45.3800,
    "lng": 31.8700,
    "distance": calcMinDistance(45.3800, 31.8700),
    "ru": {
      "region": "Акватория Черного моря, буровая платформа «Сиваш»",
      "target": "Пост технического наблюдения и радиолокационное оборудование на буровой установке «Сиваш»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "8 августа 2026 года спецподразделения ГУР МО и Сил обороны Украины провели морскую операцию, поразив пост технического наблюдения и радиолокационное оборудование на бывшей газодобывающей платформе «Сиваш» в акватории Черного моря. Российские войска использовали эту буровую вышку в качестве укрепленного пункта радиотехнической разведки, установив там станцию отслеживания надводных и воздушных целей для контроля морского пространства. В результате точного удара беспилотников радиолокационные системы, аппаратура связи и оборудование наблюдения противника были полностью уничтожены. На конструкции вышки вспыхнул пожар, подтвержденный объективным контролем. Ликвидация этого поста существенно ослепила систему раннего обнаружения РФ в западной части Черного моря.",
      "source": "Генштаб ВСУ, ГУР МО, OSINT, ЗМІ"
    },
    "uk": {
      "region": "Акваторія Чорного моря, бурова платформа «Сиваш»",
      "target": "Пост технічного спостереження та радіолокаційне обладнання на буровій установці «Сиваш»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "8 серпня 2026 року спецпідрозділи ГУР МО та Сил оборони України провели морську операцію, уразивши пост технічного спостереження та радіолокаційне обладнання на колишній газовидобувній платформі «Сиваш» в акваторії Чорного моря. Російські війська використовували цю бурову вишку як укріплений пункт радіотехнічної розвідки, встановивши там станцію відстеження надводних та повітряних цілей для контролю морського простору. У результаті влучного удару безпілотників радіолокаційні системи, апаратуру зв'язку та обладнання спостереження противника було повністю знищено. На конструкції вишки спалахнула пожежа, підтверджена об'єктивним контролем. Ліквідація цього поста суттєво засліпила систему раннього виявлення РФ у західній частині Чорного моря.",
      "source": "Генштаб ЗСУ, ГУР МО, OSINT, ЗМІ"
    },
    "en": {
      "region": "Black Sea Waters, Sivash Offshore Platform",
      "target": "Surveillance Radar & Signal Intelligence Post on Sivash Drilling Platform",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On August 8, 2026, special units of GUR MO and Ukrainian Defense Forces conducted a naval operation targeting a key technical surveillance and radar post installed on the Sivash offshore gas platform in the Black Sea. Russian forces had transformed the drilling rig into a fortified electronic intelligence node equipped with surface and airspace tracking radars to monitor Ukrainian ship and aircraft movements. A successful drone strike directly hit the radar domes, radio relay transmitters, and electro-optical surveillance gear. A localized fire broke out on the platform structure, as verified by combat imagery. The elimination of this electronic surveillance post severely degraded Russian early warning and tracking capabilities across the western Black Sea region.",
      "source": "General Staff of AFU, GUR MO, OSINT, Media"
    }
  },
  {
    "date": "08.08.2026",
    "lat": 47.0142,
    "lng": 39.0658,
    "distance": calcMinDistance(47.0142, 39.0658),
    "ru": {
      "region": "Ростовская область, Азовский район, с. Головатовка",
      "target": "Маловысотная радиолокационная станция «Подлёт-К1»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "8 августа 2026 года Силы беспилотных систем ВСУ нанесли точечный удар по позиции маловысотной радиолокационной станции «Подлёт-К1» возле села Головатовка Азовского района Ростовской области. Данная трехкоординатная РЛС кругового обзора предназначена для обнаружения низколетящих воздушных целей, включая крылатые ракеты и беспилотники, и выдачи целеуказания системам ПВО С-300 и С-400. Ударный БПЛА ВСУ поразил антенный пост и кунг управления станции, вызвав возгорание и полное выведение техники из строя. Операция спецподразделений ВСУ позволила пробить брешь в радиолокационном поле противника на прикрытии Азовского побережья и ростовского логистического узла, обеспечив проход других ударных средств к военным объектам.",
      "source": "Сили беспилотных систем ВСУ, Роберт Бровди («Мадяр»), OSINT, ЗМІ"
    },
    "uk": {
      "region": "Ростовська область, Азовський район, с. Головатовка",
      "target": "Маловисотна радіолокаційна станція «Подлёт-К1»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "8 серпня 2026 року Сили безпілотних систем ЗСУ завдали точкового удару по позиції маловисотної радіолокаційної станції «Подлёт-К1» поблизу села Головатовка Азовського району Ростовської області. Ця трикоординатна РЛС кругового огляду призначена для виявлення низьколетячих повітряних цілей, включаючи крилаті ракети та безпілотники, і видачі цілевказування системам ППО С-300 та С-400. Ударний БПЛА ЗСУ уразив антенний пост та кунг управління станції, спричинивши займання та повне виведення техніки з ладу. Операція спецпідрозділів ЗСУ дозволила пробити прогалину в радіолокаційному полі противника на прикритті Азовського узбережжя та ростовського логістичного вузла, забезпечивши прохід інших ударних засобів до військових об'єктів.",
      "source": "Сили безпілотних систем ЗСУ, Роберт Бровді («Мадяр»), OSINT, ЗМІ"
    },
    "en": {
      "region": "Rostov Oblast, Azovsky District, Golovatovka",
      "target": "Podlet-K1 Low-Altitude Radar Station",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On August 8, 2026, Ukrainian Unmanned Systems Forces executed a targeted strike on a Podlet-K1 low-altitude surveillance radar station located near Golovatovka in Rostov Oblast. This mobile 3D radar system is designed to detect low-flying targets, including cruise missiles and strike drones, feeding real-time targeting data to S-300 and S-400 air defense batteries. A precision attack drone struck the primary radar antenna array and the command module, triggering a fire that completely put the system out of operation. The destruction of this radar created a vital blind spot in Russian radar coverage along the Sea of Azov coastline and the Rostov logistics hub, facilitating subsequent deep strikes against military targets.",
      "source": "Unmanned Systems Forces of AFU, Robert Brovdi (Madyar), OSINT, Media"
    }
  },
  {
    "date": "08.08.2026",
    "lat": 47.5333,
    "lng": 38.8333,
    "distance": calcMinDistance(47.5333, 38.8333),
    "ru": {
      "region": "Ростовская область, Матвеево-Курганский район, с. Латоново",
      "target": "Мобильная радиолокационная станция «Каста-2Е2» (39Н6Е)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "8 августа 2026 года украинские Силы беспилотных систем успешно ликвидировали мобильную радиолокационную станцию «Каста-2Е2» (39Н6Е) в районе села Латоново Матвеево-Курганского района Ростовской области. Этот радиолокационный комплекс развертывается для обнаружения предельно низколетящих целей в условиях сильных отражений от местностей и пассивных помех, выступая глазами российской армейской ПВО. Ударный дрон ВСУ точно поразил антенную мачту и машину управления станций. В результате прилета объект был уничтожен, загорелось спецоборудование. Поражение РЛС «Каста-2Е2» существенным образом снизило способности ВС РФ контролировать воздушное пространство над приграничными районами Ростовской области и отслеживать движение беспилотников.",
      "source": "Сили беспилотных систем ВСУ, Роберт Бровди («Мадяр»), OSINT, ЗМІ"
    },
    "uk": {
      "region": "Ростовська область, Матвієво-Курганський район, с. Латоново",
      "target": "Мобільна радіолокаційна станція «Каста-2Е2» (39Н6Е)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "8 серпня 2026 року українські Сили безпілотних систем успішно ліквідували мобільну радіолокаційну станцію «Каста-2Е2» (39Н6Е) у районі села Латоново Матвієво-Курганського району Ростовської області. Цей радіолокаційний комплекс розгортається для виявлення гранично низьколетячих цілей в умовах сильних відбитків від місцевості та пасивних перешкод, виступаючи очима російської армійської ППО. Ударний дрон ЗСУ точно уразив антенну щоглу та машину управління станцією. У результаті влучання об'єкт було знищено, спалахнуло спецобладнання. Ураження РЛС «Каста-2Е2» суттєвим чином знизило спроможності ЗС РФ контролювати повітряний простір над прикордонними районами Ростовської області та відстежувати рух безпілотників.",
      "source": "Сили безпілотних систем ЗСУ, Роберт Бровді («Мадяр»), OSINT, ЗМІ"
    },
    "en": {
      "region": "Rostov Oblast, Matveyevo-Kurgansky District, Latonovo",
      "target": "Kasta-2E2 Low-Altitude Radar Station (39N6E)",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On August 8, 2026, Ukrainian Unmanned Systems Forces successfully hit and neutralized a mobile Kasta-2E2 (39N6E) low-altitude radar station operating near Latonovo in Rostov Oblast. Designed to detect extremely low-flying targets amid heavy ground clutter and electronic countermeasures, the Kasta radar serves as an essential sensor for Russian tactical air defense network. A kamikaze strike drone scored a direct hit on the elevated antenna vehicle and command module, setting the specialized electronics ablaze. The loss of this radar node severely blinded Russian frontline air defenses in western Rostov Oblast, disrupting their ability to detect incoming low-altitude strike drones heading toward rear supply lines.",
      "source": "Unmanned Systems Forces of AFU, Robert Brovdi (Madyar), OSINT, Media"
    }
  },
  {
    "date": "08.08.2026",
    "lat": 47.4500,
    "lng": 39.9000,
    "distance": calcMinDistance(47.4500, 39.9000),
    "ru": {
      "region": "Ростовская область, Аксайский район, х. Пудовый",
      "target": "Зенитно-ракетный комплекс «Тор»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "8 августа 2026 года в ходе спланированной операции Сил беспилотных систем ВСУ был уничтожен зенитно-ракетный комплекс малого радиуса действия «Тор» в районе хутора Пудовый Ростовской области. Данная боевая машина ПВО обеспечивала непосредственное прикрытие транспортных узлов и позиций войск от атак беспилотников и высокоточного оружия. Украинский ударный БПЛА смог обнаружить и атаковать ЗРК во время смены позиции. Прямой прилет привел к взрыву боекомплекта зенитных ракет и полному уничтожению комплекса вместе с расчетом. Ликвидация ЗРК «Тор» нанесла ощутимый урон системам войсковой ПВО РФ на ростовском операционном направлении, упростив проведение дальнейших операций украинских дальнобойных дронов.",
      "source": "Сили беспилотных систем ВСУ, Роберт Бровди («Мадяр»), OSINT, ЗМІ"
    },
    "uk": {
      "region": "Ростовська область, Аксайський район, х. Пудовий",
      "target": "Зенітно-ракетний комплекс «Тор»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "8 серпня 2026 року в ході спланованої операції Сил безпілотних систем ЗСУ було знищено зенітно-ракетний комплекс малого радіуса дії «Тор» у районі хутора Пудовий Ростовської області. Ця бойова машина ППО забезпечувала безпосереднє прикриття транспортних вузлів та позицій військ від атак безпілотників та високоточної зброї. Український ударний БПЛА виявив та атакував ЗРК під час зміни позиції. Пряме влучання призвело до вибуху боєкомплекту зенітних ракет та повного знищення комплексу разом із розрахунком. Ліквідація ЗРК «Тор» завдала відчутної шкоди системам військовій ППО РФ на ростовському операційному напрямку, спростивши проведення подальших операцій українських далекобійних дронів.",
      "source": "Сили безпілотних систем ЗСУ, Роберт Бровді («Мадяр»), OSINT, ЗМІ"
    },
    "en": {
      "region": "Rostov Oblast, Aksaysky District, Pudovy",
      "target": "Tor Air Defense Missile System",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On August 8, 2026, a coordinated drone strike by the Unmanned Systems Forces of Ukraine destroyed a short-range Tor air defense system near Pudovy in Rostov Oblast. The Tor vehicle was deployed to provide point defense for military logistics corridors and troop concentrations against incoming drones and precision munitions. Ukrainian drone reconnaissance spotted the air defense vehicle while it was maneuvering into position. A direct kamikaze drone impact triggered a secondary explosion of the onboard surface-to-air missiles, completely destroying the unit. The destruction of this tactical air defense system degraded Russian force protection along the critical Rostov logistics corridor.",
      "source": "Unmanned Systems Forces of AFU, Robert Brovdi (Madyar), OSINT, Media"
    }
  },
  {
    "date": "08.08.2026",
    "lat": 46.7083,
    "lng": 38.2731,
    "distance": calcMinDistance(46.7083, 38.2731),
    "ru": {
      "region": "Краснодарский край, г. Ейск",
      "target": "Зенитный ракетно-пушечный комплекс «Панцирь-С1»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "8 августа 2026 года подразделения Силы беспилотных систем ВСУ нанесли успешный удар ударным дроном по зенитному ракетно-пушечному комплексу «Панцирь-С1» в районе города Ейск Краснодарского края. Данный ЗРПК размещался на побережье для защиты местной военно-морской базы, военного аэродрома и воздушных подступов к Таманскому полуострову. В результате попадания украинского БПЛА загорелась пусковая установка и радиолокатор сопровождения целей. Детонация зенитных боеприпасов вывела комплекс из строя. Уничтожение «Панциря-С1» ослабило эшелонированную оборону Ейского военного узла и упростило поражение важных объектов военной инфраструктуры РФ на побережье Азовского моря.",
      "source": "Сили беспилотных систем ВСУ, Роберт Бровди («Мадяр»), OSINT, ЗМІ"
    },
    "uk": {
      "region": "Краснодарський край, м. Єйськ",
      "target": "Зенітний ракетно-гарматний комплекс «Панцир-С1»",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "8 серпня 2026 року підрозділи Сил безпілотних систем ЗСУ завдали успішного удару ударним дроном по зенітному ракетно-гарматному комплексу «Панцир-С1» у районі міста Єйськ Краснодарського краю. Цей ЗРГК розміщувався на узбережжі для захисту місцевої військово-морської бази, військового аеродрому та повітряних підходів до Таманського півострова. У результаті влучання українського БПЛА спалахнула пускова установка та радіолокатор супроводу цілей. Детонація зенітних боєприпасів вивела комплекс із ладу. Знищення «Панциря-С1» послабило ешелоновану оборону Єйського військового вузла та спростило ураження важливих об'єктів військової інфраструктури РФ на узбережжі Азовського моря.",
      "source": "Сили безпілотних систем ЗСУ, Роберт Бровді («Мадяр»), OSINT, ЗМІ"
    },
    "en": {
      "region": "Krasnodar Krai, Yeysk",
      "target": "Pantsir-S1 Air Defense Missile-Gun System",
      "category": "Military-Industrial",
      "weapon": "Drone",
      "details": "On August 8, 2026, Ukrainian Unmanned Systems Forces launched a successful kamikaze drone strike against a Pantsir-S1 air defense system positioned near Yeysk in Krasnodar Krai. The Pantsir-S1 unit was stationed on the coast to guard the local naval airbase and strategic airspace approaches near the Sea of Azov. A direct drone hit detonated the missile tubes and severely damaged the tracking radar. Secondary cook-offs completely neutralized the weapon system. The loss of this air defense platform compromised the point defenses around the Yeysk military airfield and naval facilities, opening up pathways for subsequent long-range drone strikes.",
      "source": "Unmanned Systems Forces of AFU, Robert Brovdi (Madyar), OSINT, Media"
    }
  }
];

// Check details lengths
let hasErrors = false;
newItems.forEach((item, idx) => {
  ['ru', 'uk', 'en'].forEach(lang => {
    const len = item[lang].details.length;
    console.log(`Item ${idx} (${item[lang].target} - ${lang}) details length: ${len} chars`);
    if (len < 600 || len > 1000) {
      console.error(`ERROR: Item ${idx} (${lang}) length ${len} is outside 600-1000 range!`);
      hasErrors = true;
    }
  });
});

if (hasErrors) {
  process.exit(1);
}

// Update data.js
const content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
let data = new Function('return ' + dataStr)();

// Remove existing 08.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '08.08.2026');
data.unshift(...newItems);

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log('Successfully updated data.js with 8 August 2026 strikes!');
