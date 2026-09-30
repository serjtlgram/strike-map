const fs = require('fs');

const content = fs.readFileSync('data.js', 'utf8');
const dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
const strikeData = new Function('return ' + dataStr)();

console.log('Current strike count:', strikeData.length);
console.log('Highest ID:', Math.max(...strikeData.map(d => d.id)));

const newEntries = [
  {
    "date": "29.09.2026",
    "lat": 47.4564,
    "lng": 37.8686,
    "distance": null,
    "ru": {
      "region": "Донецкая область, Тельмановский район (с. Гранитное)",
      "target": "Склад ударных и разведывательных БПЛА ВС РФ (с. Гранитное)",
      "category": "ВПК",
      "weapon": "Дрон / Ракетный удар",
      "details": "29 сентября 2026 года Силы обороны Украины нанесли точный огневой удар по специализированному складу беспилотных летательных аппаратов российских оккупационных войск в районе села Гранитное Донецкой области. Данный объект использовался противником как передовой распределительный хаб для накопления, обслуживания и снаряжения ударных FPV-дронов и разведывательных БПЛА, действовавших на южно-донецком направлении. В результате попадания средств поражения на территории комплекса начался сильный пожар, сопровождавшийся серией вторичных взрывов хранящихся боеприпасов и элементов питания. Поражение склада подтвердил Генеральный штаб ВСУ в своей официальной фронтовой сводке. Ликвидация запасов дронов снизила интенсивность воздушной разведки и атак противника на данном участке линии соприкосновения.",
      "source": "Генштаб ВСУ, оперативные сводки"
    },
    "uk": {
      "region": "Донецька область, Тельманівський район (с. Гранітне)",
      "target": "Склад ударних та розвідувальних БПЛА ЗС РФ (с. Гранітне)",
      "category": "ВПК",
      "weapon": "Дрон / Ракетний удар",
      "details": "29 вересня 2026 року Сили оборони України завдали точного вогневого удару по спеціалізованому складу безпілотних літальних апаратів російських окупаційних військ у районі села Гранітне на Донеччині. Цей об'єкт противник використовував як передовий розподільчий вузол для накопичення, обслуговування та спорядження ударних FPV-дронів і розвідувальних БПЛА, що діяли на південно-донецькому напрямку. Внаслідок влучання на території комплексу спалахнула сильна пожежа із серією вторинних вибухів збереженого боєкомплекту та акумуляторних блоків. Ураження складу офіційно підтвердив Генеральний штаб ЗСУ у щоденному фронтовому зведенні. Ліквідація запасів дронів відчутно знизила інтенсивність ворожої повітряної розвідки та ударів на відповідній ділянці фронту.",
      "source": "Генштаб ЗСУ, оперативні зведення"
    },
    "en": {
      "region": "Donetsk Oblast, Telmanove District (Hranitne)",
      "target": "Russian UAV Storage and Launch Support Depot (Hranitne)",
      "category": "Military-Industrial Complex",
      "weapon": "Drone / Missile Strike",
      "details": "On September 29, 2026, the Ukrainian Defense Forces carried out a precision strike against a specialized Russian unmanned aerial vehicle (UAV) storage depot near the village of Hranitne in Donetsk Oblast. The facility operated as a key forward logistics hub used by Russian troops to assemble, maintain, and arm reconnaissance and strike FPV drones operating along the southern Donetsk axis. The strike ignited a major fire across the compound, triggering violent secondary explosions of stored munitions and lithium battery packs. The destruction of the drone storage site was officially verified by the General Staff of the Armed Forces of Ukraine in its operational update. Eliminating these UAV stockpiles significantly degraded Russian aerial reconnaissance and tactical drone strike capabilities in the sector.",
      "source": "General Staff of the AFU, operational reports"
    },
    "images": [],
    "id": 503
  },
  {
    "date": "29.09.2026",
    "lat": 49.2778,
    "lng": 38.9225,
    "distance": null,
    "ru": {
      "region": "Луганская область, г. Старобельск",
      "target": "Ремонтно-восстановительная база военной техники ВС РФ (г. Старобельск)",
      "category": "ВПК",
      "weapon": "Дрон / Ракетный удар",
      "details": "29 сентября 2026 года Силы обороны Украины нанесли результативный удар по крупной ремонтно-восстановительной базе военной техники оккупационных войск в городе Старобельск Луганской области. База была развернута на фондах местных промышленных предприятий и служила главным центром восстановления поврежденной тяжелой бронетехники, артиллерийских систем и армейских грузовиков для купянско-лиманского направления. В результате скоординированного удара были поражены ремонтные цеха, станочное оборудование и площадки открытого хранения боевых машин. На объекте зафиксированы разрушения конструкций и очаги горения горюче-смазочных материалов. Факт успешного огневого поражения ремонтной базы подтвержден в официальной сводке Генштаба ВСУ. Вывод базы из строя нарушил графики возвращения отремонтированной техники на передовые позиции.",
      "source": "Генштаб ВСУ, оперативные сводки"
    },
    "uk": {
      "region": "Луганська область, м. Старобільськ",
      "target": "Ремонтно-відновлювальна база військової техніки ЗС РФ (м. Старобільськ)",
      "category": "ВПК",
      "weapon": "Дрон / Ракетний удар",
      "details": "29 вересня 2026 року Сили оборони України завдали результативного удару по великій ремонтно-відновлювальній базі військової техніки окупаційних військ у місті Старобільськ Луганської області. База функціонувала на базі місцевих промислових об'єктів і слугувала ключовим центром відновлення пошкодженої важкої бронетехніки, артсистем та армійських вантажівок для куп'янсько-лиманського напрямку. Внаслідок координованого удару було уражено ремонтні ангари, верстатне обладнання та відкриті майданчики розміщення бойових машин. На території об'єкта виникло значне займання пально-мастильних матеріалів і руйнування будівель. Успішне ураження ремонтної бази офіційно зафіксував Генеральний штаб ЗСУ. Знищення комплексу зірвало плани окупантів щодо швидкого повернення відремонтованого озброєння на передову.",
      "source": "Генштаб ЗСУ, оперативні зведення"
    },
    "en": {
      "region": "Luhansk Oblast, Starobilsk",
      "target": "Russian Military Vehicle and Equipment Repair Base (Starobilsk)",
      "category": "Military-Industrial Complex",
      "weapon": "Drone / Missile Strike",
      "details": "On September 29, 2026, Ukrainian Defense Forces launched an effective precision strike against a major Russian military repair and maintenance base located in Starobilsk, Luhansk Oblast. Established within local industrial facilities, the base functioned as a central overhaul hub for damaged armored fighting vehicles, artillery pieces, and logistics transport supporting the Kupyansk-Lyman operational axes. The strike caused direct structural hits on repair workshops, diagnostic equipment, and vehicle assembly lines, sparking heavy fires fueled by industrial lubricants. Substantial damage was inflicted on combat vehicles undergoing repairs inside the facility. The successful neutralization of the repair hub was officially documented in the daily briefing by the General Staff of the Armed Forces of Ukraine. Disabling the facility severed critical equipment repair cycles for front-line Russian formations.",
      "source": "General Staff of the AFU, operational reports"
    },
    "images": [],
    "id": 504
  },
  {
    "date": "29.09.2026",
    "lat": 46.9422,
    "lng": 37.3822,
    "distance": null,
    "ru": {
      "region": "Донецкая область, Мариупольский район (п. Азовское)",
      "target": "Склад материально-технического обеспечения (МТО) ВС РФ (п. Азовское)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "29 сентября 2026 года подразделения Сил обороны Украины поразили военный склад материально-технического обеспечения оккупационных войск в поселке Азовское Мариупольского района Донецкой области. База располагалась в прибрежной полосе Азовского моря и играла важную роль в промежуточном хранении и распределении тылового военного имущества, экипировки и запчастей для группировки РФ на юге Украины. В результате точечного прилета беспилотных аппаратов произошло возгорание складских ангаров и технических строений. Взрывы и задымление фиксировались в прилегающих районах побережья. Официальное подтверждение успешного поражения объекта опубликовано в сводке Генерального штаба ВСУ. Уничтожение складского комплекса осложнило обеспечение российских подразделений на мариупольском логистическом направлении.",
      "source": "Генштаб ВСУ, оперативные сводки"
    },
    "uk": {
      "region": "Донецька область, Маріупольський район (смт Азовське)",
      "target": "Склад матеріально-технічного забезпечення (МТЗ) ЗС РФ (смт Азовське)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "29 вересня 2026 року підрозділи Сил оборони України уразили військовий склад матеріально-технічного забезпечення окупаційних військ у селищі Азовське Маріупольського району на Донеччині. База розташовувалася у прибережній зоні Азовського моря та відігравала важливу роль у проміжному зберіганні й розподілі тилового майна, військової амуніції та запчастин для підрозділів РФ на півдні України. Внаслідок точкового влучання безпілотників виникла масштабна пожежа складських ангарів і технічних будівель. Вибухи та стовпи диму спостерігалися у прилеглих районах узбережжя. Офіційне підтвердження успішного удару було оприлюднено у щоденному звіті Генерального штабу ЗСУ. Знищення цього комплексу суттєво ускладнило постачання російських підрозділів на маріупольському напрямку.",
      "source": "Генштаб ЗСУ, оперативні зведення"
    },
    "en": {
      "region": "Donetsk Oblast, Mariupol District (Azovske)",
      "target": "Russian Military Logistics and Equipment (MTO) Depot (Azovske)",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "On September 29, 2026, Ukrainian Defense Forces struck a Russian military logistical support depot situated in the coastal settlement of Azovske, Mariupol District, Donetsk Oblast. Positioned near the Sea of Azov, this facility served as a crucial transit hub for managing, warehousing, and distributing combat gear, technical equipment, and spare parts to southern Russian operational units. Precision drone impacts ignited extensive fires across main warehouse hangars and adjoining utility structures. Thick smoke plumes and detonation noises were observed throughout nearby coastal areas. The strike was officially verified by the General Staff of the Armed Forces of Ukraine in its morning operational report. Destroying this supply depot impaired equipment replenishment along Russian coastal supply routes.",
      "source": "General Staff of the AFU, operational reports"
    },
    "images": [],
    "id": 505
  },
  {
    "date": "29.09.2026",
    "lat": 47.0544,
    "lng": 37.3092,
    "distance": null,
    "ru": {
      "region": "Донецкая область, Мариупольский район (пгт Мангуш)",
      "target": "Склад материально-технического обеспечения (МТО) ВС РФ (пгт Мангуш)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "29 сентября 2026 года Силы обороны Украины нанесли огневой удар по военному складу материально-технических средств ВС РФ в поселке городского типа Мангуш Донецкой области. Мангуш является ключевым узлом на сухопутном коридоре в Крым и базой материально-технического снабжения передовых частей оккупационной армии на бердянском и мариупольском направлениях. Украинские ударные БПЛА успешно поразили складские помещения, где противник складировал спецоборудование, средства связи и имущество тылового обеспечения. На месте удара возник открытый пожар с повреждением опорных конструкций складов. Генеральный штаб ВСУ официально зафиксировал результативное поражение объекта в своей утренней сводке. Данная атака продолжила систематическое выбивание армейской логистики противника в Приазовье.",
      "source": "Генштаб ВСУ, оперативные сводки"
    },
    "uk": {
      "region": "Донецька область, Маріупольський район (смт Мангуш)",
      "target": "Склад матеріально-технічного забезпечення (МТЗ) ЗС РФ (смт Мангуш)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "29 вересня 2026 року Сили оборони України завдали вогневого удару по військовому складу матеріально-технічних засобів ЗС РФ у селищі міського типу Мангуш Донецької області. Мангуш є ключовим вузлом на сухопутному коридорі до Криму та опорною базою логістичного забезпечення передових частин російської армії на бердянському й маріупольському напрямках. Українські ударні БПЛА успішно вразили складські приміщення зі спецобладнанням, засобами зв'язку та інженерним майном. На місці удару спалахнула пожежа з руйнуванням основних конструкцій комплексу. Генеральний штаб ЗСУ офіційно зафіксував результативне ураження об'єкта у ранковому зведенні. Ця атака стала частиною планомірного знищення армійської логістики окупантів у Приазов'ї.",
      "source": "Генштаб ЗСУ, оперативні зведення"
    },
    "en": {
      "region": "Donetsk Oblast, Mariupol District (Manhush)",
      "target": "Russian Military Logistics and Equipment (MTO) Depot (Manhush)",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "On September 29, 2026, Ukrainian Defense Forces executed a targeted strike against a Russian military logistical supply depot in the urban-type settlement of Manhush, Donetsk Oblast. Located along the critical land corridor connecting Russia to occupied Crimea, Manhush functions as a pivotal supply junction for frontline units deployed on the Berdyansk and Mariupol axes. Ukrainian strike UAVs penetrated regional defenses to score direct hits on warehouses housing communication gear, technical equipment, and military field supplies. The impacts triggered extensive fire and structural collapse across storage facilities. The successful operation was officially announced by the General Staff of the Armed Forces of Ukraine in its daily operational summary. The strike further disrupted military logistics across the Azov Sea operational zone.",
      "source": "General Staff of the AFU, operational reports"
    },
    "images": [],
    "id": 506
  },
  {
    "date": "29.09.2026",
    "lat": 47.5350,
    "lng": 37.4910,
    "distance": null,
    "ru": {
      "region": "Донецкая область, Волновахский район (с. Новоандреевка)",
      "target": "Склад материально-технического обеспечения (МТО) ВС РФ (с. Новоандреевка)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "29 сентября 2026 года Силы обороны Украины нанесли результативный удар по военному складу материально-технического назначения российских войск в районе села Новоандреевка Волновахского района Донецкой области. Объект использовался оккупантами в качестве тыловой распределительной базы для снабжения соединений ВС РФ, действующих на угледарском и кураховском направлениях. Ударные дроны спикировали на ангары хранения оборудования, инженерных средств и полевого имущества. На объекте зафиксированы прилеты, плотное задымление и очаги возгорания на складской территории. Генеральный штаб ВСУ включил склад в Новоандреевке в перечень успешно пораженных объектов в официальной сводке. Разрушение этого пункта снабжения привело к задержкам в обеспечении передовых подразделений противника.",
      "source": "Генштаб ВСУ, оперативные сводки"
    },
    "uk": {
      "region": "Донецька область, Волноваський район (с. Новоандріївка)",
      "target": "Склад матеріально-технічного забезпечення (МТЗ) ЗС РФ (с. Новоандріївка)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "29 вересня 2026 року Сили оборони України завдали результативного удару по військовому складу матеріально-технічного призначення окупаційних військ у районі села Новоандріївка Волноваського району на Донеччині. Об'єкт використовувався загарбниками як тилова розподільча база для забезпечення з'єднань ЗС РФ, що ведуть бойові дії на вугледарському та курахівському напрямках. Ударні безпілотники влучили в ангари зберігання спеціального інженерного обладнання та військового майна. На об'єкті зафіксовано прильоти, сильне задимлення та вогнища пожежі на складській території. Генеральний штаб ЗСУ вніс склад у Новоандріївці до списку підтверджених уражених цілей у своєму офіційному зведенні. Знищення цього пункту постачання викликало перебої в забезпеченні підрозділів противника.",
      "source": "Генштаб ЗСУ, оперативні зведення"
    },
    "en": {
      "region": "Donetsk Oblast, Volnovakha District (Novoandriivka)",
      "target": "Russian Military Logistics and Equipment (MTO) Depot (Novoandriivka)",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "On September 29, 2026, Ukrainian Defense Forces carried out a precision strike against a Russian military logistical support depot near the village of Novoandriivka in the Volnovakha District of Donetsk Oblast. The facility was utilized by Russian forces as a rearward distribution center to sustain military units engaged in combat on the Vuhledar and Kurakhove axes. Strike drones hit warehouse structures storing specialized engineering gear, field supplies, and equipment. The impacts generated heavy smoke and fires across the storage yard. The General Staff of the Armed Forces of Ukraine officially verified the successful strike on the Novoandriivka depot in its morning combat report. Disabling this supply base caused disruptions in technical and logistical replenishment for forward Russian frontline troops.",
      "source": "General Staff of the AFU, operational reports"
    },
    "images": [],
    "id": 507
  },
  {
    "date": "29.09.2026",
    "lat": 47.5980,
    "lng": 37.4970,
    "distance": null,
    "ru": {
      "region": "Донецкая область, г. Волноваха",
      "target": "Склад материально-технического обеспечения (МТО) ВС РФ (г. Волноваха)",
      "category": "ВПК",
      "weapon": "Дрон / Ракетный удар",
      "details": "29 сентября 2026 года Силы обороны Украины нанесли прицельный удар по крупному складу материально-технического обеспечения оккупационных войск в городе Волноваха Донецкой области. Волноваха представляет собой стратегический железнодорожный и автомобильный узел, через который идет снабжение всей южной группировки ВС РФ на Донбассе. Поражению подверглись складские мощности вблизи железнодорожной инфраструктуры, где хранились запчасти, инженерное снаряжение и военные грузы. В результате атаки на складе начался крупный пожар с разрушением помещений и логистических площадок. Генштаб ВСУ официально подтвердил уничтожение военного склада в Волновахе в своей сводке. Удар серьезно нарушил работу ключевого перевалочного пункта вражеской армии.",
      "source": "Генштаб ВСУ, оперативные сводки"
    },
    "uk": {
      "region": "Донецька область, м. Волноваха",
      "target": "Склад матеріально-технічного забезпечення (МТЗ) ЗС РФ (м. Волноваха)",
      "category": "ВПК",
      "weapon": "Дрон / Ракетний удар",
      "details": "29 вересня 2026 року Сили оборони України завдали прицільного удару по великому складу матеріально-технічного забезпечення окупаційних військ у місті Волноваха Донецької області. Волноваха є стратегічним залізничним і автодорожнім вузлом, через який здійснюється постачання всього південного угруповання ЗС РФ на Донбасі. Ураження зазнали складські потужності поблизу залізничної інфраструктури, де зберігалися запчастини, інженерне спорядження та військові вантажі. Внаслідок атаки на складі спалахнула велика пожежа зі значними руйнуваннями приміщень і майданчиків. Генштаб ЗСУ офіційно підтвердив ліквідацію військового складу у Волновасі у своєму зведенні. Удар серйозно порушив функціонування ключового логістичного хабу ворожої армії.",
      "source": "Генштаб ЗСУ, оперативні зведення"
    },
    "en": {
      "region": "Donetsk Oblast, Volnovakha",
      "target": "Russian Military Logistics and Equipment (MTO) Depot (Volnovakha)",
      "category": "Military-Industrial Complex",
      "weapon": "Drone / Missile Strike",
      "details": "On September 29, 2026, Ukrainian Defense Forces launched a targeted strike on a major Russian military logistical support depot in the city of Volnovakha, Donetsk Oblast. Volnovakha serves as an essential rail and road logistics hub responsible for supplying Russia's southern combat grouping in the Donbas theater. The strike impacted warehouse facilities situated near railway infrastructure that held vehicle parts, engineering assets, and military equipment. The attack sparked a large blaze, causing structural damage across warehouse bays and transshipment platforms. The General Staff of the Armed Forces of Ukraine officially verified the destruction of the Volnovakha military depot in its operational report. This strike disrupted the operations of a primary supply junction supporting Russian frontline units.",
      "source": "General Staff of the AFU, operational reports"
    },
    "images": [],
    "id": 508
  },
  {
    "date": "29.09.2026",
    "lat": 45.7483,
    "lng": 33.4472,
    "distance": null,
    "ru": {
      "region": "Республика Крым, Раздольненский район (с. Кумово)",
      "target": "Склад материально-технического обеспечения (МТО) ВС РФ (с. Кумово)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "29 сентября 2026 года Силы обороны Украины нанесли результативный удар БПЛА по военному складу материально-технического обеспечения ВС РФ в селе Кумово Раздольненского района в северо-западном Крыму. Этот тыловой логистический комплекс использовался группировкой оккупационных войск для складирования запчастей, средств связи, инженерного имущества и снабжения воинских частей на крымском побережье. Украинские ударные беспилотники успешно преодолели эшелонированную противовоздушную оборону полуострова и поразили строения склада. На объекте зафиксированы прилеты, вызвавшие пожар и существенные повреждения складских построек. Генеральный штаб ВСУ официально подтвердил поражение объекта в Кумово в своей утренней сводке. Удар снизил логистическую устойчивость подразделений РФ в северо-западном секторе Крыма.",
      "source": "Генштаб ВСУ, оперативные сводки"
    },
    "uk": {
      "region": "АР Крим, Роздольненський район (с. Кумове)",
      "target": "Склад матеріально-технічного забезпечення (МТЗ) ЗС РФ (с. Кумове)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "29 вересня 2026 року Сили оборони України завдали результативного удару БПЛА по військовому складу матеріально-технічного забезпечення ЗС РФ у селі Кумове Роздольненського району в північно-західному Криму. Цей тиловий логістичний комплекс використовувався окупаційним угрупованням для складування запасних частин, засобів зв'язку, інженерного майна та забезпечення військових частин на кримському узбережжі. Українські ударні безпілотники успішно подолали ешелоновану протиповітряну оборону півострова та уразили будівлі складу. На об'єкті зафіксовано влучання, що спричинили пожежу та суттєві руйнування складських приміщень. Генеральний штаб ЗСУ офіційно підтвердив ураження об'єкта в Кумовому у ранковому зведенні. Удар послабив логістику підрозділів РФ у північно-західному секторі Криму.",
      "source": "Генштаб ЗСУ, оперативні зведення"
    },
    "en": {
      "region": "Crimea, Rozdolne District (Kumove)",
      "target": "Russian Military Logistics and Equipment (MTO) Depot (Kumove)",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "On September 29, 2026, Ukrainian Defense Forces carried out an effective drone strike against a Russian military logistical support depot in the village of Kumove, Rozdolne District, in northwestern Crimea. This rear logistics facility was utilized by Russian occupation forces to warehouse vehicle spare parts, communication equipment, and engineering supplies for units stationed along the Crimean coastline. Ukrainian strike UAVs successfully bypassed integrated air defense systems over the peninsula and struck warehouse buildings directly. The impacts caused significant fires and structural damage across storage buildings. The General Staff of the Armed Forces of Ukraine officially verified the strike on the Kumove depot in its morning operational report. The strike degraded logistical sustainment for Russian forces in northwestern Crimea.",
      "source": "General Staff of the AFU, operational reports"
    },
    "images": [],
    "id": 509
  }
];

let allPassed = true;
newEntries.forEach(entry => {
    console.log(`\n--- Target ID ${entry.id}: ${entry.ru.target} ---`);
    ['ru', 'uk', 'en'].forEach(lang => {
        const text = entry[lang].details;
        const len = text.length;
        const sentences = text.split(/(?<=[.!?])\s+/).length;
        console.log(`  [${lang}] Length: ${len} chars | Sentences: ${sentences}`);
        if (len < 600 || len > 1000) {
            console.error(`  ERROR: ${lang} length out of bounds (600-1000): ${len}`);
            allPassed = false;
        }
        if (sentences < 4 || sentences > 8) {
            console.error(`  ERROR: ${lang} sentence count out of bounds (4-8): ${sentences}`);
            allPassed = false;
        }
    });
});

if (!allPassed) {
    console.error('Validation failed!');
    process.exit(1);
}

// Prepend newEntries to strikeData
const updatedData = [...newEntries, ...strikeData];

const updatedContent = 'const strikeData = ' + JSON.stringify(updatedData, null, 2) + ';\n';
fs.writeFileSync('data.js', updatedContent, 'utf8');
console.log(`\nAll validations passed! Successfully updated data.js! Total items: ${updatedData.length}`);
