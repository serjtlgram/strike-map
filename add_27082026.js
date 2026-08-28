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
    "date": "27.08.2026",
    "lat": 55.0413,
    "lng": 56.0332,
    "distance": calcMinDistance(55.0413, 56.0332),
    "ru": {
      "region": "Республика Башкортостан, г. Благовещенск",
      "target": "Логистический комплекс маркетплейса «Ozon» (ООО «ОЗОН УФА»)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "В ночь на 27 августа 2026 года дальнобойные украинские дроны атаковали крупный логистический комплекс маркетплейса Ozon в городе Благовещенск в Башкортостане. Данный распределительный хаб площадью в десятки тысяч квадратных метров обслуживал весь регион и использовался для сортировки и хранения грузов двойного назначения. В результате прямого попадания беспилотника загорелись складские помещения и открытые погрузочные рампы. Руководство комплекса экстренно эвакуировало более 800 сотрудников ночной смены, обошлось без погибших. Из-за сильного задымления и повреждения несущих конструкций терминала прием и отправка грузов были полностью остановлены. Атака нанесла серьезный урон региональной цепочке поставок товаров.",
      "source": "Ozon, ASTRA, OSINT, региональные СМИ"
    },
    "uk": {
      "region": "Республіка Башкортостан, м. Благовєщенськ",
      "target": "Логістичний комплекс маркетплейса «Ozon» (ТОВ «ОЗОН УФА»)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "У ніч на 27 серпня 2026 року далекобійні українські безпілотники атакували великий логістичний комплекс маркетплейса Ozon у місті Благовєщенськ у Башкортостані. Цей розподільчий хаб площею у десятки тисяч квадратних метрів обслуговував увесь регіон і залучався до перевалки вантажів подвійного призначення. Внаслідок прямого влучання дрона спалахнула пожежа у складських блоках та на вантажних рампах термінала. Адміністрація об'єкта терміново евакуювала понад 800 співробітників нічної зміни, загиблих немає. Через густий дим та пошкодження тримальних конструкцій прийом та відвантаження товарів було повністю зупинено. Удар суттєво порушив регіональну логістичну мережу доставки та сортування продукції.",
      "source": "Ozon, ASTRA, OSINT, регіональні ЗМІ"
    },
    "en": {
      "region": "Republic of Bashkortostan, Blagoveshchensk",
      "target": "Ozon Marketplace Logistics Fulfillment Center (LLC 'OZON UFA')",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the night of August 27, 2026, Ukrainian long-range strike drones hit a major logistics fulfillment center operated by the Ozon marketplace in Blagoveshchensk, Bashkortostan. Covering tens of thousands of square meters, this strategic regional warehouse hub handled widespread merchandise distribution including dual-use goods. Direct drone impacts triggered a blaze inside storage halls and along outdoor loading docks. Management promptly evacuated over 800 night-shift warehouse workers, avoiding employee fatalities. Extensive smoke contamination and structural roof damage forced an immediate and complete shutdown of inbound and outbound freight operations. The deep strike dealt a significant blow to regional supply networks.",
      "source": "Ozon, ASTRA, OSINT, Regional Media"
    }
  },
  {
    "date": "27.08.2026",
    "lat": 51.8646,
    "lng": 55.1797,
    "distance": calcMinDistance(51.8646, 55.1797),
    "ru": {
      "region": "Оренбургская область, г. Оренбург",
      "target": "Логистический распределительный центр маркетплейса «Ozon» (ОРЕНБУРГ_РФЦ)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "В ночь на 27 августа 2026 года ударные дроны совершили налет на крупный логистический комплекс маркетплейса Ozon на улице Тихой в Оренбурге. Этот распределительный центр особой экономической зоны «Оренбуржье» выполняет критически важные функции сортировки и транзита грузов на восточном направлении. Мэр города официально подтвердил падение дронов на территорию предприятия и возникновение пожара. Персонал логистического центра был срочно выведен в безопасную зону, поэтому среди рабочих никто не пострадал. Пожарные расчеты локализовали огонь, однако работа сортировочных линий и прием поставок оказались частично заблокированы. Удар создал заметные перебои в графике поставок по всему Южному Уралу.",
      "source": "Мэрия Оренбурга, Ozon, ASTRA, OSINT"
    },
    "uk": {
      "region": "Оренбурзька область, м. Оренбург",
      "target": "Логістичний розподільчий центр маркетплейса «Ozon» (ОРЕНБУРГ_РФЦ)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "У ніч на 27 серпня 2026 року ударні безпілотники атакували великий логістичний комплекс маркетплейса Ozon на вулиці Тихій в Оренбурзі. Цей регіональний розподільчий хаб в особливій економічній зоні «Оренбуржжя» забезпечував сортування та перевалку вантажів на східному напрямку РФ. Мер міста офіційно підтвердив падіння безпілотників на майданчик центру та займання на об'єкті. Працівників комплексу терміново евакуювали у безпечні місця, завдяки чому обійшлося без жертв. Рятувальники ліквідували пожежу, проте обробку замовлень і прийом нових партій вантажів довелося частково обмежити. Атака спричинила помітні логістичні збої у системі постачання по Південному Уралу.",
      "source": "Мерія Оренбурга, Ozon, ASTRA, OSINT"
    },
    "en": {
      "region": "Orenburg Oblast, Orenburg",
      "target": "Ozon Marketplace Regional Logistics Distribution Center",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On the night of August 27, 2026, Ukrainian attack UAVs targeted the primary Ozon regional distribution center situated on Tikhaya Street in Orenburg. Located within the Orenburzhye special economic zone, the facility plays a critical role in sorting and routing transit cargo across eastern distribution arteries. The mayor of Orenburg officially acknowledged drone impacts on the compound and a resulting structural fire. Warehouse staff were urgently evacuated to designated safety shelters, preventing personnel casualties. Although firefighting teams extinguished the flames, sorting operations and incoming cargo intake suffered significant disruptions. The drone raid caused substantial logistical delays across the South Urals.",
      "source": "Orenburg Mayor Office, Ozon, ASTRA, OSINT"
    }
  },
  {
    "date": "27.08.2026",
    "lat": 54.9333,
    "lng": 56.0667,
    "distance": calcMinDistance(54.9333, 56.0667),
    "ru": {
      "region": "Республика Башкортостан, г. Уфа",
      "target": "НПЗ филиал ПАО АНК «Башнефть» «Башнефть-Уфанефтехим»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "27 августа 2026 года дальнобойные украинские дроны атаковали нефтеперерабатывающий комплекс «Башнефть-Уфанефтехим» в Северной промышленной зоне Уфы. Предприятие перерабатывает свыше 8 миллионов тонн нефти в год и выпускает высокооктановый бензин, дизельное топливо и авиакеросин для снабжения российских войск. Местные жители зафиксировали звуки пролета беспилотников, после чего над технологическими установками завода поднялся столб густого дыма. Из-за возникшей угрозы в уфимском аэропорту вводился режим ограничения полетов «Ковер» с задержкой рейсов. Попадание дронов привело к повреждению технологического оборудования и аварийной остановке части производственных линий. Завод понес ощутимые операционные потери.",
      "source": "Генштаб ВСУ, ASTRA, OSINT, СМИ"
    },
    "uk": {
      "region": "Республіка Башкортостан, м. Уфа",
      "target": "НПЗ філія ПАТ АНК «Башнефть» «Башнефть-Уфанефтехим»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "27 серпня 2026 року далекобійні українські безпілотники завдали удару по нафтопереробному комплексу «Башнефть-Уфанефтехим» у Північній промзоні Уфи. Підприємство здатне переробляти понад 8 мільйонів тонн нафти щороку, виробляючи автобензини, дизпаливо та авіаційний гас для потреб армії РФ. Очевидці повідомляли про проліт БПЛА, після чого над технологічним майданчиком заводу зафіксували підняття чорного диму. Через небезпеку в аеропорту Уфи тимчасово вводили спеціальний план «Килим» із затримкою цивільних рейсів. Влучання дронів спричинило пошкодження апаратів вторинної переробки та зупинку окремих виробничих контурів. Підприємство зазнало відчутних збитків у випуску палива.",
      "source": "Генштаб ЗСУ, ASTRA, OSINT, ЗМІ"
    },
    "en": {
      "region": "Republic of Bashkortostan, Ufa",
      "target": "Bashneft-Ufaneftekhim Oil Refinery (PJSC ANK Bashneft)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On August 27, 2026, Ukrainian deep-strike drones reached the Bashneft-Ufaneftekhim oil refinery located in the northern industrial district of Ufa. With an annual capacity exceeding 8 million metric tons, the refinery produces high-grade motor gasoline, diesel, and jet aviation fuel vital for military logistics. Residents recorded drone approaches over the area, followed by thick black smoke plumes rising above core processing units. Due to incoming drone threats, aviation authorities declared a 'Kover' airspace alert at Ufa International Airport, halting flight operations. Drone strikes damaged key technical equipment, prompting emergency shutdowns across refining circuits. The attack caused notable disruptions to fuel production.",
      "source": "General Staff of AFU, ASTRA, OSINT, Media"
    }
  },
  {
    "date": "27.08.2026",
    "lat": 53.6637,
    "lng": 55.9275,
    "distance": calcMinDistance(53.6637, 55.9275),
    "ru": {
      "region": "Республика Башкортостан, г. Стерлитамак",
      "target": "Химический комплекс АО «Башкирская содовая компания» (БСК)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "27 августа 2026 года группа украинских дронов-камикадзе нанесла удар по производственной площадке АО «Башкирская содовая компания» в Стерлитамаке. Предприятие является одним из крупнейших химических комплексов России, выпускающим кальцинированную соду, каустик, ПВХ и химические компоненты для предприятий оборонного сектора. В районе заводских цехов прогремели взрывы, после чего на объекте возник сильный пожар и образовалось задымление. Часть беспилотников сумела преодолеть местную систему ПВО и поразить технологические цеха синтеза продукции. В результате инцидента было повреждено производственное оборудование цеха, персонал временно эвакуировали в укрытия. Завод снизил объемы выпуска базовой химической продукции.",
      "source": "ASTRA, OSINT, региональные медиа"
    },
    "uk": {
      "region": "Республіка Башкортостан, м. Стерлітамак",
      "target": "Хімічний комплекс АТ «Башкирська содова компанія» (БСК)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "27 серпня 2026 року група українських дронів-камікадзе атакувала промисловий комплекс АТ «Башкирська содова компанія» у місті Стерлітамак. Це підприємство є провідним виробником кальцинованої та каустичної соди, ПВХ і базових хімічних сполук, що використовуються заводами російського ВПК. Поблизу виробничих цехів пролунала серія гучних вибухів, після чого на території спалахнула пожежа та піднявся дим. Безпілотники успішно обійшли засоби ППО та вразили технологічні споруди хімічного синтезу. Внаслідок вибухів зазнало ушкоджень виробниче устаткування, а робітників зміни оперативно перевели до захисних споруд. Удар призвів до падіння обсягів виробництва важливої хімічної сировини.",
      "source": "ASTRA, OSINT, регіональні медіа"
    },
    "en": {
      "region": "Republic of Bashkortostan, Sterlitamak",
      "target": "Bashkir Soda Company Chemical Production Complex (JSC 'BSK')",
      "category": "Military",
      "weapon": "Drone",
      "details": "On August 27, 2026, Ukrainian kamikaze drones attacked the manufacturing complex of the Bashkir Soda Company in Sterlitamak, Bashkortostan. As one of Russia's largest chemical producers, the plant manufactures soda ash, caustic soda, PVC, and specialized chemicals critical for the defense industrial base. Witnesses reported multiple loud explosions near the production units, followed by dense smoke and fires on the premises. Strike drones bypassed local air defenses to hit key synthesis workshops. The detonations inflicted damage on industrial machinery and prompted an emergency evacuation of plant workers to shelters. The attack curtailed output at this major supplier of military chemicals.",
      "source": "ASTRA, OSINT, Regional Media"
    }
  },
  {
    "date": "27.08.2026",
    "lat": 45.3780,
    "lng": 32.5340,
    "distance": calcMinDistance(45.3780, 32.5340),
    "ru": {
      "region": "АР Крым, Черноморский район, с. Оленевка",
      "target": "Позиция радиолокационных станций «Небо-СВ» и «П-18» ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "27 августа 2026 года Силы обороны Украины нанесли высокоточный удар по позиционному району российской противовоздушной обороны в районе Оленевки на мысе Тарханкут. На этой позиции размещались современная трехкоординатная РЛС «Небо-СВ», модернизированная станция «П-18» и мобильный узел военной связи. Данный комплекс обеспечивал контроль воздушного пространства над западным Крымом и акваторией Черного моря на дальностях до сотен километров. Прямые попадания боеприпасов уничтожили радиолокационные антенны, аппаратные машины управления и расчетную аппаратуру связи. Поражение РЛС образовало существенную брешь в радиолокационном поле противника на юго-западном направлении.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "АР Крим, Чорноморський район, с. Оленівка",
      "target": "Позиція радіолокаційних станцій «Небо-СВ» та «П-18» ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "27 серпня 2026 року Сили оборони України завдали високоточного комбінованого удару по позиційному району ППО окупантів поблизу села Оленівка на мисі Тарханкут. На замаскованій позиції розгорталися трикоординатна РЛС метрового діапазону «Небо-СВ», станція дальнього виявлення «П-18» та пересувний вузол спецзв'язку. Ці засоби вели цілодобову радіолокаційну розвідку повітряного простору над морем та прибережними районами півдня. Влучні удари повністю знищили антенні пости, апаратні кабіни та допоміжне енергетичне обладнання станцій. Знищення комплексу РЛС утворило значний пролом у системі спостереження та раннього попередження ППО РФ у Криму.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Crimea, Chornomorske District, Olenivka",
      "target": "Russian Radar Complex (Nebo-SV and P-18 Radars) at Cape Tarkhankut",
      "category": "Military",
      "weapon": "Drone / Missile",
      "details": "On August 27, 2026, the Ukrainian Defense Forces executed a precision strike against a Russian radar and air surveillance position near Olenivka on Cape Tarkhankut. The site hosted advanced Nebo-SV 3D VHF surveillance radar arrays, modernized P-18 mobile early-warning radar systems, and command communication vehicles. These radar systems provided continuous airspace tracking and early warning coverage across the western Crimean coastline and Black Sea maritime zones. Precision strikes destroyed the antenna arrays, transmitter control vans, and auxiliary power units. Neutralizing this radar complex created a critical radar blind spot in Russia's regional air defense network.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "27.08.2026",
    "lat": 45.0210,
    "lng": 33.6330,
    "distance": calcMinDistance(45.0210, 33.6330),
    "ru": {
      "region": "АР Крым, Сакский район, с. Фрунзе",
      "target": "Радиорелейная станция связи «Николаевка» ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "27 августа 2026 года подразделения ВСУ нанесли результативный удар по стационарной радиорелейной станции военной связи «Николаевка» возле села Фрунзе в Сакском районе Крыма. Объект входил в опорную систему закрытой радиорелейной и тропосферной связи Черноморского флота и подразделений береговой обороны. Попадание высокоточного средства поражения разрушило антенно-мачтовые сооружения, аппаратный модуль и распределительный узел связи. Детонация оборудования и последующий пожар вывели станцию из строя, оборвав основные каналы передачи данных между командными пунктами. Удар нарушил централизованное управление подразделениями ПВО и авиацией в центральной части Крыма.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "АР Крим, Сакський район, с. Фрунзе",
      "target": "Радіорелейна станція зв'язку «Миколаївка» ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "27 серпня 2026 року підрозділи ЗСУ завдали результативного удару по стаціонарній радіорелейній станції військового зв'язку «Миколаївка» поблизу села Фрунзе у Сакському районі Криму. Об'єкт забезпечував стійке функціонування захищених каналів зв'язку Чорноморського флоту РФ та частин берегової оборони півострова. Точне влучання українського засобу ураження знищило антенно-щоглові конструкції, апаратний блок та кабельне комутаційне обладнання. Внаслідок детонації та пожежі станція була повністю зруйнована, що спричинило обрив ключових ліній передачі даних. Успішний удар суттєво порушив управління військами противника у західній частині Криму.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Crimea, Saky District, Frunze",
      "target": "Russian Military Radio Relay Station 'Nikolaevka'",
      "category": "Military",
      "weapon": "Drone / Missile",
      "details": "On August 27, 2026, Ukrainian forces conducted an effective precision strike against the Russian Nikolaevka military radio relay communication station near Frunze in the Saky district of Crimea. The communications hub was an integral part of the secure tropospheric and radio relay networks utilized by the Black Sea Fleet and coastal defense units. The precision munition hit and dismantled primary antenna masts, transmission equipment containers, and switching gear. Detonations and subsequent blazes knocked out the station, cutting secure data transmission links between command posts. The strike severely degraded centralized command-and-control over air defense units across Crimea.",
      "source": "General Staff of AFU, OSINT"
    }
  },
  {
    "date": "27.08.2026",
    "lat": 44.5900,
    "lng": 33.5200,
    "distance": calcMinDistance(44.5900, 33.5200),
    "ru": {
      "region": "АР Крым, г. Севастополь",
      "target": "Учебный центр подготовки личного состава ВС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "27 августа 2026 года Силы обороны Украины нанесли точечный удар по военному учебному центру подготовки личного состава ВС РФ в Севастополе. На базе этого центра осуществлялась интенсивная огневая подготовка, слаживание штурмовых групп и обучение операторов беспилотных систем перед отправкой на линию фронта. Украинские средства поражения точно накрыли казарменные корпуса, учебные классы и прилегающую инфраструктуру полигона. На объекте прогремели взрывы и начался сильный пожар, к месту происшествия стянулись бригады скорой помощи и МЧС. В результате удара разрушены ключевые тренировочные корпуса и ликвидирована материальная база подготовки. Процесс комплектования штурмовых отрядов был сорван.",
      "source": "Генштаб ВСУ, OSINT"
    },
    "uk": {
      "region": "АР Крим, м. Севастополь",
      "target": "Навчальний центр підготовки особового складу ЗС РФ",
      "category": "ВПК",
      "weapon": "Дрон / Ракета",
      "details": "27 серпня 2026 року Сили оборони України завдали точкового удару по військовому навчальному центру підготовки особового складу ЗС РФ у Севастополі. На базі цього центру здійснювалася вогнева підготовка, бойове злагодження штурмових підрозділів та навчання операторів БПЛА перед перекиданням на передову. Засоби ураження поцілили в казармені будівлі, навчальні класи тренажерних комплексів та споруди полігона. На території об'єкта пролунали вибухи й спалахнула пожежа, фіксувалося прибуття значної кількості карет швидкої допомоги. Удар зруйнував навчально-матеріальну базу та вивів комплекс із ладу. Знищення центру завадило плановій підготовці та ротації штурмових груп окупантів.",
      "source": "Генштаб ЗСУ, OSINT"
    },
    "en": {
      "region": "Crimea, Sevastopol",
      "target": "Russian Military Personnel Training Center",
      "category": "Military",
      "weapon": "Drone / Missile",
      "details": "On August 27, 2026, Ukrainian defense forces delivered a targeted strike against a Russian military training center for combat personnel located in Sevastopol. The facility was actively used for tactical combat training, assault troop drills, and drone operator certification prior to battlefield deployment. Ukrainian strike assets accurately hit barracks blocks, specialized simulation classrooms, and support range structures. Secondary detonations ignited widespread blazes across the compound, prompting heavy emergency service responses. The precision strike demolished key instructional buildings and devastated the training infrastructure. This operation effectively paralyzed the ongoing training cycle of assault units.",
      "source": "General Staff of AFU, OSINT"
    }
  }
];

// Check sentence counts and length strictly
let hasErrors = false;
newItems.forEach((item, idx) => {
  ['ru', 'uk', 'en'].forEach(lang => {
    const text = item[lang].details;
    const len = text.length;
    // Count sentences
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

// Remove existing 27.08.2026 items if any, then insert at top
data = data.filter(item => item.date !== '27.08.2026');
data.unshift(...newItems);

// Ensure sequential IDs
data.forEach((item, index) => {
    item.id = index + 1;
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully updated data.js with ${newItems.length} strikes for 27 August 2026! Total items in data.js: ${data.length}`);
