const fs = require('fs');

const entries = [
  {
    "date": "23.10.2026",
    "lat": 52.9817,
    "lng": 36.0592,
    "distance": null,
    "ru": {
      "region": "Орловская обл., г. Орел, ул. Лескова, 19",
      "target": "АО «Протон-Электротекс» (завод «Протон») — производство оптоэлектроники для ракет",
      "category": "ВПК",
      "weapon": "Крылатые ракеты Storm Shadow / SCALP-EG",
      "details": "Днем 23 октября 2026 года около 17:34 Силы обороны Украины нанесли массированный ракетный удар по главному производственному корпусу завода АО «Протон-Электротекс» в Орле. Предприятие является одним из ведущих российских разработчиков и изготовителей силовой электроники и оптоэлектронных приборов полного цикла. Завод выпускает диодные и тиристорные модули, силовые ключи и переключатели-инверторы, которые напрямую используются при сборке крылатых ракет С-71 «Ковер», баллистических 9М723 для ОТРК «Искандер-М», а также комплексов ПВО «Панцирь-С1». Попадание четырех ракет привело к обрушению перекрытий цеха микроэлектроники и крупному пожару. Губернатор Андрей Клычков подтвердил удар и госпитализацию восьми пострадавших. Источники с места событий сообщили о более чем тридцати пропавших без вести сотрудниках под завалами. Успешное поражение объекта официально подтверждено Генштабом ВСУ.",
      "source": "Генштаб ВСУ, ASTRA, Supernova+, Exilenova+, @ASupersharij, соцсети"
    },
    "uk": {
      "region": "Орловська обл., м. Орел, вул. Лєскова, 19",
      "target": "АТ «Протон-Електротекс» (завод «Протон») — виробництво оптоелектроніки для ракет",
      "category": "ВПК",
      "weapon": "Крилаті ракети Storm Shadow / SCALP-EG",
      "details": "Удень 23 жовтня 2026 року близько 17:34 Сили оборони України завдали масованого ракетного удару по головному виробничому корпусу заводу АТ «Протон-Електротекс» у місті Орел. Підприємство є одним із провідних російських розробників і виробників силової електроніки й оптоелектронних компонентів повного циклу. Завод випускає діодні та тиристорні модулі, силові ключі та перемикачі-інвертори, які безпосередньо застосовуються у виробництві крилатих авіаракет С-71 «Ковер», балістичних 9М723 для ОТРК «Іскандер-М», а також систем ППО «Панцир-С1». Влучання чотирьох ракет спричинило обвалення перекриттів цеху мікроелектроніки та масштабну пожежу. Губернатор Андрій Кличков підтвердив удар і госпіталізацію восьми постраждалих. Джерела з місця подій повідомили про понад тридцять зниклих безвісти співробітників під завалами. Успішне ураження об'єкта офіційно підтвердив Генштаб ЗСУ.",
      "source": "Генштаб ЗСУ, ASTRA, Supernova+, Exilenova+, @ASupersharij, соцмережі"
    },
    "en": {
      "region": "Oryol Oblast, Oryol, Leskova St., 19",
      "target": "Proton-Electrotex JSC (Proton Plant) — optoelectronics production for missiles",
      "category": "Military-Industrial Complex",
      "weapon": "Storm Shadow / SCALP-EG cruise missiles",
      "details": "On the afternoon of October 23, 2026, at around 17:34, Ukraine's Defense Forces launched a precision cruise missile strike on the main manufacturing hall of Proton-Electrotex JSC in Oryol. The enterprise is a key Russian developer and full-cycle manufacturer of power electronics and optoelectronic devices. It supplies diode and thyristor modules, high-voltage switches, and inverters essential for producing S-71 Kover cruise missiles, 9M723 ballistic missiles for the Iskander-M system, and Pantsir-S1 air defense complexes. Four missile impacts collapsed the roof of the microelectronics workshop and ignited an extensive fire. Regional Governor Andrey Klychkov confirmed the strike, reporting eight injured workers hospitalized. Local sources noted over thirty employees unaccounted for beneath the debris. The General Staff of the Armed Forces of Ukraine officially verified the destruction of the key production building.",
      source: "General Staff of AFU, ASTRA, Supernova+, Exilenova+, @ASupersharij, social media"
    },
    "images": [
      "video/orel_proton_2310_vid1.mp4",
      "video/orel_proton_2310_vid2.mp4",
      "images/orel_proton_2310_img1.jpg",
      "images/orel_proton_2310_img2.jpg"
    ],
    "id": 550
  },
  {
    "date": "23.10.2026",
    "lat": 59.3905,
    "lng": 56.7725,
    "distance": null,
    "ru": {
      "region": "Пермский край, г. Березники, Чувашковская ул., 1",
      "target": "Филиал «Азот» АО «ОХК „Уралхим“» — химкомбинат сырья для взрывчатки и порохов",
      "category": "ВПК / Химическая промышленность",
      "weapon": "Дальнобойные БПЛА",
      "details": "Утром 23 октября 2026 года дальнобойные украинские дроны атаковали химический комбинат филиала «Азот» АО «ОХК Уралхим» в Березниках Пермского края на рекордном удалении свыше 1400 км от фронта. Предприятие расположено на площади около 140 гектаров и насчитывает более 90 корпусов. «Азот» является крупнейшим поставщиком аммиака, крепкой азотной кислоты, аммиачной селитры и нитрит-нитратных солей, закрывая до трети потребностей оборонного сектора РФ во взрывчатых материалах. Продукция завода служит сырьевой базой для снаряжения снарядов и ракет на Пермском пороховом заводе, соликамском «Урале» и Бийском олеумном заводе. В ходе налета дроны поразили складские и технологические цеха, вызвав открытое горение и выброс густого дыма. Губернатор Дмитрий Махонин подтвердил повреждение промышленного объекта. В Прикамье объявлялся план «Ковер», парализовавший работу воздушного транспорта.",
      "source": "ASTRA, @ASupersharij, Supernova+, Exilenova+, Крымский ветер, власти Пермского края"
    },
    "uk": {
      "region": "Пермський край, м. Березники, Чувашковська вул., 1",
      "target": "Філія «Азот» АТ «ОХК „Уралхім“» — хімкомбінат сировини для вибухівки та порохів",
      "category": "ВПК / Хімічна промисловість",
      "weapon": "Далекобійні БпЛА",
      "details": "Уранці 23 жовтня 2026 року далекобійні українські дрони атакували хімічний комбінат філії «Азот» АТ «ОХК Уралхім» у місті Березники Пермського краю на рекордній відстані понад 1400 км від фронту. Підприємство займає площу близько 140 гектарів і нараховує понад 90 виробничих корпусів. «Азот» є найбільшим постачальником аміаку, міцної азотної кислоти, аміачної селітри та нітрит-нітратних солей, закриваючи до третини потреб оборонного сектору РФ у вибухових матеріалах. Продукція заводу слугує сировинною базою для спорядження снарядів та ракет на Пермському пороховому заводі, солікамському «Уралі» та Бійському олеумному заводі. Під час нальоту безпілотники уразили складські й технологічні цехи, викликавши відкрите горіння та викид густого диму. Губернатор Дмитро Махонін підтвердив пошкодження промислового об'єкта. У Прикам'ї оголошувався план «Килим», що паралізував авіасполучення.",
      "source": "ASTRA, @ASupersharij, Supernova+, Exilenova+, Кримський вітер, влада Пермського краю"
    },
    "en": {
      "region": "Perm Krai, Berezniki, Chuvashkovskaya St., 1",
      "target": "Azot Branch of UCC Uralchem JSC — chemical plant producing explosives raw materials",
      "category": "Military-Industrial Complex / Chemicals",
      "weapon": "Long-range UAVs",
      "details": "On the morning of October 23, 2026, long-range Ukrainian strike drones targeted the Azot branch of Uralchem in Berezniki, Perm Krai, at a record standoff distance exceeding 1,400 km from the front line. Spanning 140 hectares with roughly 90 industrial buildings, Azot is one of Russia's primary producers of ammonia, concentrated nitric acid, and ammonium nitrate. It provides up to a third of all basic chemical precursors needed by Russia's defense complex to manufacture gunpowder and high explosives for the Perm Powder Plant, Solikamsk Ural plant, and Biysk Oleum facility. Drones hit warehouse and process sections, triggering open fires and dense smoke plumes over the compound. Regional Governor Dmitry Makhonin confirmed damage to an industrial facility following the attack of 20 UAVs. Aviation authorities activated the Kover contingency protocol across the Kama River region.",
      "source": "ASTRA, @ASupersharij, Supernova+, Exilenova+, Crimean Wind, Perm Krai authorities"
    },
    "images": [
      "video/berezniki_azot_2310_vid1.mp4",
      "video/berezniki_azot_2310_vid2.mp4",
      "images/berezniki_azot_2310_img1.jpg",
      "images/berezniki_azot_2310_img2.jpg",
      "images/berezniki_azot_2310_img3.jpg"
    ],
    "id": 551
  },
  {
    "date": "23.10.2026",
    "lat": 48.5678,
    "lng": 39.3872,
    "distance": null,
    "ru": {
      "region": "г. Луганск, ул. Монтажная, 1",
      "target": "Луганский завод трубопроводной арматуры «Маршал» и дата-центр оператора «Лугаком»",
      "category": "Машиностроение / ВПК / Связь",
      "weapon": "Ударные БПЛА",
      "details": "В ночь на 23 октября 2026 года Силы обороны Украины нанесли групповой удар БПЛА по территории Луганского завода трубопроводной арматуры «Маршал». Предприятие является одним из ключевых машиностроительных заводов на оккупированной территории Луганщины и специализируется на выпуске запорной арматуры высокого давления для трубопроводов газовой, нефтяной, химической промышленности и объектов обеспечения ВС РФ. За последний год завод нарастил объемы сбыта более чем на 20% в рамках интеграции в российский ВПК. Кроме того, на территории заводского комплекса оккупанты разместили резервный дата-центр и серверный узел оператора военной и оккупационной связи «Лугаком». В результате попаданий дронов-камикадзе вспыхнул пожар в производственных корпусах, повреждены производственные линии и телекоммуникационная инфраструктура противника. Данные об ударе подтвердили OSINT-каналы и фотоснимки последствий.",
      "source": "Exilenova+, Supernova+, Стерненко, местные паблики"
    },
    "uk": {
      "region": "м. Луганськ, вул. Монтажна, 1",
      "target": "Луганський завод трубопровідної арматури «Маршал» та дата-центр оператора «Лугаком»",
      "category": "Машинобудування / ВПК / Зв'язок",
      "weapon": "Ударні БпЛА",
      "details": "У ніч на 23 жовтня 2026 року Сили оборони України завдали групового удару БпЛА по території Луганського заводу трубопровідної арматури «Маршал». Підприємство є одним із ключових машинобудівних заводів на окупованій території Луганщини та спеціалізується на випуску запірної арматури високого тиску для трубопроводів газової, нафтової, хімічної промисловості й об'єктів постачання ЗС РФ. За останній рік завод наростив обсяги збуту на понад 20% у межах інтеграції у російський ВПК. Окрім того, на території заводського комплексу окупанти розгорнули резервний дата-центр і серверний вузол оператора військового та окупаційного зв'язку «Лугаком». Унаслідок влучань дронів-камікадзе спалахнула пожежа у виробничих корпусах, пошкоджено виробничі лінії та телекомунікаційну інфраструктуру противника. Дані про удар підтвердили OSINT-канали та фотознімки наслідків.",
      "source": "Exilenova+, Supernova+, Стерненко, місцеві пабліки"
    },
    "en": {
      "region": "Luhansk, Montazhnaya St., 1",
      "target": "Luhansk Pipeline Valves Plant Marshal and Lugacom operator data center",
      "category": "Mechanical Engineering / Military Communications",
      "weapon": "Strike UAVs",
      "details": "On the night of October 23, 2026, Ukraine's Defense Forces carried out a coordinated drone strike on the Marshal Pipeline Valves Plant in occupied Luhansk. The facility is a leading heavy engineering enterprise in the region, specializing in high-pressure industrial valves for oil, gas, chemical networks, and military logistics infrastructure supporting Russian armed forces. Over the past year, Marshal increased output by more than 20% to meet demand from Russian industrial-defense contracts. Additionally, Russian forces operated a backup data center and telecommunications routing node for the Lugacom occupation network within the plant grounds. The drone strikes caused significant fires across manufacturing halls, damaging equipment and vital communications hardware. Visual evidence and OSINT monitors confirmed extensive structural devastation throughout the site.",
      "source": "Exilenova+, Supernova+, Sternenko, local media"
    },
    "images": [
      "video/lugansk_marshal_2310_vid1.mp4",
      "images/lugansk_marshal_2310_img1.jpg",
      "images/lugansk_marshal_2310_img2.jpg",
      "images/lugansk_marshal_2310_img3.jpg"
    ],
    "id": 552
  }
];

let src = fs.readFileSync('data.js', 'utf8');
if (src.includes('orel_proton_2310_vid1')) {
  console.log('Already added to data.js');
  process.exit(0);
}

const marker = 'const strikeData = [';
const json = entries.map(e => JSON.stringify(e, null, 2).split('\n').map(s => '  ' + s).join('\n')).join(',\n');
src = src.replace(marker, marker + '\n' + json + ',');
fs.writeFileSync('data.js', src, 'utf8');
console.log('Successfully added entries 550, 551, 552 to data.js');
