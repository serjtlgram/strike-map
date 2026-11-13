const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
const raw = fs.readFileSync(dataPath, 'utf8');

// Load existing array cleanly regardless of CRLF/comments before declaration
const match = raw.match(/const\s+strikeData\s*=\s*(\[[\s\S]*\]);?\s*$/);
if (!match) {
  throw new Error('Could not parse strikeData from data.js');
}
const strikeData = JSON.parse(match[1]);
const maxId = strikeData.reduce((m, item) => Math.max(m, Number(item.id) || 0), 0);
console.log(`Loaded ${strikeData.length} existing strikes. Current max ID = ${maxId}`);

const newEntries = [
  {
    date: "11.11.2026",
    lat: 59.6917,
    lng: 28.4083,
    distance: null,
    ru: {
      region: "Ленинградская область, Кингисеппский район (Морской порт Усть-Луга)",
      target: "Нефтегазовая инфраструктура морского порта Усть-Луга (ООО «НОВАТЭК-Усть-Луга», «Усть-Луга Ойл»)",
      category: "Нефтегаз",
      weapon: "Дальнобойные БПЛА",
      details: "В ночь на 11 ноября 2026 года ЦСО «Альфа» СБУ совместно с Силами обороны Украины провели масштабную атаку ударными БПЛА по нефтеналивной инфраструктуре морского порта Усть-Луга в Ленинградской области. Целью стали ключевые экспортные терминалы углеводородов на Балтике и припортовая железнодорожная станция «Лужская». По данным Генштаба ВСУ и СБУ, поражены установка гидрокрекинга, аппарат воздушного охлаждения, насосная станция, причальные сооружения, пять резервуаров объемом по 30 тыс. кубометров с розливом топлива (возгорание охватило четыре емкости), а также два танкера суммарной вместимостью около 34 тыс. тонн нефтепродуктов. Спутниковый мониторинг NASA FIRMS зафиксировал обширные очаги пожаров, дым от которых был виден за 35–50 км вплоть до Эстонии; аэропорт Пулково закрывали на семь часов, а полная локализация пожара заняла более суток.",
      source: "СБУ, Генштаб ВСУ, ERR, NASA FIRMS, ASTRA, Supernova+, Exilenova+, губернатор Дрозденко"
    },
    uk: {
      region: "Ленінградська область, Кінгісеппський район (Морський порт Усть-Луга)",
      target: "Нафтогазова інфраструктура морського порту Усть-Луга (ТОВ «НОВАТЕК-Усть-Луга», «Усть-Луга Ойл»)",
      category: "Нафтогаз",
      weapon: "Далекобійні БпЛА",
      details: "У ніч проти 11 листопада 2026 року ЦСО «Альфа» СБУ спільно із Силами оборони України завдали масованого удару дронами по нафтоналивній інфраструктурі морського порту Усть-Луга в Ленінградській області. Атака була спрямована проти ключових балтійських експортних терміналів вуглеводнів і припортової залізничної станції «Лузька». За даними Генштабу ЗСУ та СБУ, уражено установку гідрокрекінгу, апарат повітряного охолодження, насосну станцію, причал, п'ять резервуарів по 30 тис. кубометрів із розливом пального (вогонь охопив чотири ємності), а також два танкери загальною місткістю близько 34 тис. тонн нафтопродуктів. Супутниковий моніторинг NASA FIRMS зафіксував масштабні осередки горіння, шлейф диму спостерігали на відстані 35–50 км навіть в Естонії; аеропорт Пулково обмежував роботу, а локалізація пожежі тривала понад добу.",
      source: "СБУ, Генштаб ЗСУ, ERR, NASA FIRMS, ASTRA, Supernova+, Exilenova+, губернатор Дрозденко"
    },
    en: {
      region: "Leningrad Oblast, Kingiseppsky District (Port of Ust-Luga)",
      target: "Oil and gas terminals of the Port of Ust-Luga (Novatek-Ust-Luga, Ust-Luga Oil)",
      category: "Oil & Gas",
      weapon: "Long-range UAVs",
      details: "On the night of November 11, 2026, Ukraine's SBU Alpha unit together with the Defense Forces carried out a massive long-range drone strike on Russia's flagship Baltic oil and gas export hub at the Port of Ust-Luga in Leningrad Oblast. The strike hit key hydrocarbon processing terminals and disrupted operations at the adjacent Luzhskaya railway station. According to the Ukrainian General Staff and SBU, impacts damaged a hydrocracking unit, an air cooler, a pumping station, a loading berth, five 30,000-cubic-meter storage tanks causing fuel spills and fire across four reservoirs, as well as two docked tankers carrying roughly 34,000 tons of oil products. NASA FIRMS detected extensive thermal anomalies and smoke plumes visible 35–50 km away in Estonia. Pulkovo Airport suspended flights for hours, local power substations failed, and firefighters localized the blaze only on November 12.",
      source: "SBU, General Staff of the AFU, ERR, NASA FIRMS, ASTRA, Supernova+, Exilenova+, Governor Drozdenko"
    },
    images: [
      "video/ustluga_1111_vid1.mp4",
      "video/ustluga_1111_vid2.mp4",
      "images/ustluga_1111_img1.jpg",
      "images/ustluga_1111_img2.jpg",
      "images/ustluga_1111_img3.jpg"
    ],
    id: maxId + 1
  },
  {
    date: "11.11.2026",
    lat: 55.0417,
    lng: 73.3056,
    distance: null,
    ru: {
      region: "Омская область, г. Омск",
      target: "Омский НПЗ (АО «Газпромнефть — ОНПЗ») — крупнейший нефтеперерабатывающий завод РФ",
      category: "Нефтегаз",
      weapon: "Дальнобойные БПЛА (модиф. FP-1)",
      details: "Днем и вечером 11 ноября 2026 года Силы специальных операций во взаимодействии с другими подразделениями Сил обороны Украины атаковали Омский нефтеперерабатывающий завод на удалении свыше 2500 км от линии фронта. АО «Газпромнефть — ОНПЗ» с годовой мощностью переработки более 21 млн тонн нефти и глубиной около 99% является крупнейшим НПЗ России и главным поставщиком топлива для сибирского и военного секторов. По данным OSINT-аналитиков «КіберБорошно», для прорыва применялись дальнобойные ударные БПЛА FP-1 с увеличенной дальностью полета. Камеры наблюдения и свидетельства очевидцев с разных районов города зафиксировали яркие вспышки взрывов и открытое горение на промплощадке предприятия. Режим беспилотной опасности в регионе действовал более восьми часов, вводились ограничения в аэропорту Омска и отключения электричества; факт атаки и одного пострадавшего подтвердил губернатор Хоценко.",
      source: "ССО ВСУ, Генштаб ВСУ, КіберБорошно, ASTRA, Supernova+, Exilenova+, Крымский ветер, губернатор Хоценко"
    },
    uk: {
      region: "Омська область, м. Омськ",
      target: "Омський НПЗ (АТ «Газпромнафта — ОНПЗ») — найбільший нафтопереробний завод РФ",
      category: "Нафтогаз",
      weapon: "Далекобійні БпЛА (модиф. FP-1)",
      details: "Удень і ввечері 11 листопада 2026 року Сили спеціальних операцій у взаємодії з іншими складовими Сил оборони України уразили Омський нафтопереробний завод на відстані понад 2500 км від лінії бойового зіткнення. АТ «Газпромнафта — ОНПЗ» із річною потужністю понад 21 млн тонн нафти і глибиною переробки близько 99% є найбільшим НПЗ Росії та стратегічним виробником авіагасу, дизелю й бензину для армії РФ. За даними OSINT-спільноти «КіберБорошно», удар завдали модернізовані безпілотники FP-1 зі збільшеною дальністю польоту. Міські камери спостереження та очевидці зафіксували потужні спалахи вибухів і відкрите полум'я на території комбінату. Сигнал повітряної небезпеки тривав понад вісім годин, закривався місцевий аеропорт і фіксувалися перебої з електропостачанням у північних районах міста; атаку та пораненого підтвердив губернатор Віталій Хоценко.",
      source: "ССО ЗСУ, Генштаб ЗСУ, КіберБорошно, ASTRA, Supernova+, Exilenova+, Кримський вітер, губернатор Хоценко"
    },
    en: {
      region: "Omsk Oblast, Omsk",
      target: "Omsk Oil Refinery (Gazpromneft-ONPZ JSC) — Russia's largest refinery",
      category: "Oil & Gas",
      weapon: "Long-range UAVs (modified FP-1)",
      details: "On the afternoon and evening of November 11, 2026, Ukraine's Special Operations Forces alongside other Defense Forces units struck the Omsk Oil Refinery more than 2,500 km from the front line. Processing over 21 million tons of crude annually with a ~99% refining depth, Gazpromneft-ONPZ is Russia's largest refinery and a critical producer of aviation kerosene, diesel, and gasoline. According to OSINT analysts at KiberBoroshno, the strike used range-extended FP-1 deep-strike drones. Surveillance cameras across the Irtysh River and local residents captured bright explosion flashes lighting up the overcast sky above the refinery stacks followed by visible fires inside the industrial perimeter. The air-raid alert lasted over eight hours alongside flight restrictions at Omsk airport and power outages in northern districts, while Governor Vitaly Khotsenko confirmed the attack and one injury.",
      source: "SOF of Ukraine, General Staff of the AFU, KiberBoroshno, ASTRA, Supernova+, Exilenova+, Crimeanwind, Governor Khotsenko"
    },
    images: [
      "video/omsk_1111_vid1.mp4",
      "video/omsk_1111_vid2.mp4",
      "images/omsk_1111_img1.jpg",
      "images/omsk_1111_img2.jpg",
      "images/omsk_1111_img3.jpg"
    ],
    id: maxId + 2
  },
  {
    date: "11.11.2026",
    lat: 60.0750,
    lng: 27.0800,
    distance: null,
    ru: {
      region: "Ленинградская область, акватория Финского залива (у о. Гогланд)",
      target: "Малый ракетный корабль «Наро-Фоминск» (проект 21631 «Буян-М», Балтийский флот)",
      category: "Военный флот",
      weapon: "Дальнобойные БПЛА",
      details: "В ночь на 11 ноября 2026 года в рамках комплексной операции СБУ и Сил обороны Украины ударные беспилотники атаковали российский малый ракетный корабль «Наро-Фоминск» проекта 21631 «Буян-М» в восточной части Финского залива вблизи острова Гогланд (Суурсаари). Корабль с бортовым номером 595 входит в состав Балтийского флота ВМФ РФ, оснащен вертикальными пусковыми установками УКСК и является носителем крылатых ракет «Калибр» и «Оникс». Факт инцидента независимо подтвердили Вооруженные силы Финляндии и министр обороны Эстонии: финские военные зафиксировали взрывы и плотное задымление над российским боевым кораблем примерно в 40 км от побережья Финляндии, после чего судно взяло курс на восток в сторону Кронштадта. По данным украинских источников, в результате поражения на борту выведено из строя оборудование и зафиксированы потери среди экипажа.",
      source: "СБУ, Силы обороны Финляндии, Минобороны Эстонии, WarZone, @ssternenko"
    },
    uk: {
      region: "Ленінградська область, акваторія Фінської затоки (біля о. Гогланд)",
      target: "Малий ракетний корабель «Наро-Фомінськ» (проєкт 21631 «Буян-М», Балтійський флот)",
      category: "Військовий флот",
      weapon: "Далекобійні БпЛА",
      details: "У ніч проти 11 листопада 2026 року під час комплексної операції СБУ та Сил оборони України ударні безпілотники уразили російський малий ракетний корабель «Наро-Фомінськ» проєкту 21631 «Буян-М» у східній частині Фінської затоки неподалік острова Гогланд (Суурсаарі). Корабель із бортовим номером 595 належить до Балтійського флоту РФ, оснащений універсальним ракетним комплексом і є носієм крилатих ракет «Калібр» та «Онікс». Факт інциденту незалежно підтвердили Сили оборони Фінляндії та міністр оборони Естонії: фінські військові зафіксували вибухи й густе задимлення на бойовому судні орієнтовно за 40 км від фінського узбережжя, після чого корабель попрямував на схід у напрямку Кронштадта. За повідомленнями українських відомств, влучання пошкодило бортові системи та спричинило втрати серед екіпажу.",
      source: "СБУ, Сили оборони Фінляндії, Міноборони Естонії, WarZone, @ssternenko"
    },
    en: {
      region: "Leningrad Oblast, Gulf of Finland (near Gogland Island)",
      target: "Small Missile Ship Naro-Fominsk (Project 21631 Buyan-M, Baltic Fleet)",
      category: "Military / Naval Fleet",
      weapon: "Long-range UAVs",
      details: "During the pre-dawn hours of November 11, 2026, Ukraine's SBU and Defense Forces struck the Russian Baltic Fleet corvette Naro-Fominsk (Project 21631 Buyan-M, hull number 595) in the eastern Gulf of Finland near Gogland (Suursaari) Island. Armed with vertical launch cells, the vessel is a carrier of Kalibr and Oniks cruise missiles. The incident was independently corroborated by the Finnish Defense Forces and Estonia's Defense Minister: Finnish personnel observed explosions and smoke rising from a Russian warship roughly 40 km off the Finnish coast before it sailed eastward toward Kronstadt. According to Ukrainian security sources, the drone impacts damaged onboard equipment and caused casualties among the crew, marking one of the northernmost maritime strikes against a Russian Kalibr carrier far from the active front.",
      source: "SBU, Finnish Defense Forces, Estonian Ministry of Defense, WarZone, @ssternenko"
    },
    images: [
      "images/narofominsk_1111_img1.jpg",
      "images/narofominsk_1111_img2.jpg"
    ],
    id: maxId + 3
  },
  {
    date: "11.11.2026",
    lat: 59.7287,
    lng: 28.4949,
    distance: null,
    ru: {
      region: "Ленинградская область, Кингисеппский район (с. Мишино)",
      target: "Позиции РЛР (РЛС «Небо-СВУ», ТРЛК «Сопка-2», вышка 40В6) — прикрытие Усть-Луги",
      category: "Военная инфраструктура / ПВО",
      weapon: "Дальнобойные БПЛА",
      details: "11 ноября 2026 года в ходе прорыва противовоздушной обороны на подходах к морскому порту Усть-Луга ударные беспилотники поразили позиции российского подразделения радиолокационной разведки вблизи села Мишино в Кингисеппском районе Ленинградской области. Опубликованные фотографии с места удара подтвердили критические повреждения сразу трех ключевых элементов радиотехнического комплекса: деформирована антенная решетка мобильной метровой РЛС «Небо-СВУ», уничтожен защитный радиопрозрачный купол с поражением антенны трассового радиолокационного комплекса «Сопка-2» на стационарной решетчатой башне, а также повреждена универсальная вышка 40В6. На одном из снимков позади пострадавшей вышки 40В6 отчетливо виден плотный столб черного дыма от горящего неподалеку нефтетерминала в Усть-Луге, что подтверждает подавление локационного контроля воздушного пространства.",
      source: "Досье Шпиона, Supernova+, Мілітарний"
    },
    uk: {
      region: "Ленінградська область, Кінгісеппський район (с. Мішино)",
      target: "Позиції РЛР (РЛС «Небо-СВУ», ТРЛК «Сопка-2», вежа 40В6) — прикриття Усть-Луги",
      category: "Військова інфраструктура / ППО",
      weapon: "Далекобійні БпЛА",
      details: "11 листопада 2026 року під час прориву системи протиповітряної оборони на підступах до морського порту Усть-Луга ударні БпЛА уразили позиції російського підрозділу радіолокаційної розвідки неподалік села Мішино в Кінгісеппському районі Ленінградської області. Оприлюднені знімки з місця події засвідчили виведення з ладу одразу трьох елементів радіотехнічного вузла: пошкоджено й зігнуто антенну решітку мобільної РЛС метрового діапазону «Небо-СВУ», знищено радіопрозорий купол і уражено антену трасового радіолокаційного комплексу «Сопка-2» на стаціонарній вежі, а також пошкоджено універсальну щоглу 40В6. На фото за понівеченою щоглою 40В6 зафіксовано густий шлейф чорного диму від масштабної пожежі на сусідніх терміналах Усть-Луги, що засвідчує придушення радіолокаційного прикриття стратегічного порту.",
      source: "Досьє Шпигуна, Supernova+, Мілітарний"
    },
    en: {
      region: "Leningrad Oblast, Kingiseppsky District (Mishino)",
      target: "Air Defense Radar Site (Nebo-SVU, Sopka-2 radar, 40V6 mast) — Ust-Luga defense sector",
      category: "Military Infrastructure / Air Defense",
      weapon: "Long-range UAVs",
      details: "On November 11, 2026, as part of the air-defense suppression operation clearing corridors toward the Port of Ust-Luga, strike drones hit the positions of a Russian radar reconnaissance unit near the village of Mishino in Kingiseppsky District, Leningrad Oblast. Ground photographs documented direct damage across three key components of the radar site: the bent VHF antenna array of a mobile Nebo-SVU radar, the destroyed protective radome and exposed antenna of a Sopka-2 long-range surveillance complex mounted on a fixed lattice tower, and a damaged 40V6 universal mobile antenna mast. Behind the crippled 40V6 mast, photos clearly capture the towering plume of black smoke rising from the burning Ust-Luga port terminals roughly six kilometers away, underscoring how neutralizing the radar site opened access to the coastal energy hub.",
      source: "Dosye Shpiona, Supernova+, Militarnyi"
    },
    images: [
      "images/lenradar_1111_img1.jpg",
      "images/lenradar_1111_img2.jpg",
      "images/lenradar_1111_img3.jpg"
    ],
    id: maxId + 4
  }
];

// Validate lengths & media existence
let ok = true;
for (const e of newEntries) {
  for (const lang of ['ru', 'uk', 'en']) {
    const len = e[lang].details.length;
    console.log(`[id=${e.id}] ${e.ru.target.slice(0, 38)}... (${lang}): details=${len} chars`);
    if (len < 600 || len > 1000) {
      console.error(`ERROR: ${lang} details length ${len} out of [600, 1000] range!`);
      ok = false;
    }
  }
  for (const rel of e.images) {
    const full = path.join(__dirname, rel);
    if (!fs.existsSync(full)) {
      console.error(`ERROR: Missing media file ${rel}`);
      ok = false;
    }
  }
}

if (!ok) {
  process.exit(1);
}

// Prepend newest entries at top of strikeData
strikeData.unshift(...newEntries);
const output = `const strikeData = ${JSON.stringify(strikeData, null, 2)};\n`;
fs.writeFileSync(dataPath, output, 'utf8');
console.log(`Updated data.js cleanly: total ${strikeData.length} strikes.`);
