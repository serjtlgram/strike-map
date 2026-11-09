const fs = require('fs');

const content = fs.readFileSync('data.js', 'utf8');
const dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
const data = new Function('return ' + dataStr)();

const saratovEntry = {
  "date": "07.11.2026",
  "lat": 51.4506,
  "lng": 45.9439,
  "distance": null,
  "ru": {
    "region": "Саратовская обл., г. Саратов, Заводской район",
    "target": "Саратовский НПЗ (ПАО «Саратовский нефтеперерабатывающий завод» — ПАО «НК «Роснефть»)",
    "category": "Нефтегаз",
    "weapon": "Дальнобойные ударные БПЛА",
    "details": "В ночь на 7 ноября 2026 года Саратов подвергся массированному налету украинских дальнобойных дронов-камикадзе. Главной целью атаки вновь стал Саратовский нефтеперерабатывающий завод компании «Роснефть». Предприятие обладает проектной мощностью первичной переработки около 7 млн тонн нефти в год и выступает ключевым производителем дизельного топлива, автомобильного бензина и авиакеросина в Поволжье, снабжая армейские группировки РФ. Очевидцы насчитали более 40 взрывов в районе Заводского района Саратова и Энгельса. Несмотря на работу систем ПВО и антидроновые сетки, группа беспилотников прорвалась к технологической площадке завода, вызвав мощные взрывы и факельное возгорание. Губернатор Роман Бусаргин подтвердил повреждения инфраструктуры и обращение пострадавших за медпомощью. Густой черный дым от пожара на НПЗ растянулся на несколько километров над городом. Предприятие экстренно снизило переработку нефти до технологического минимума.",
    "source": "ASTRA, @ASupersharij, Exilenova+, Supernova+, ТАСС, РИА Новости"
  },
  "uk": {
    "region": "Саратовська обл., м. Саратов, Заводський район",
    "target": "Саратовський НПЗ (ПАТ «Саратовський нафтопереробний завод» — ПАТ «НК «Роснефть»)",
    "category": "Нафтогаз",
    "weapon": "Далекобійні ударні БпЛА",
    "details": "У ніч на 7 листопада 2026 року Саратов зазнав масованого нальоту українських далекобійних дронів-камікадзе. Головною ціллю удару знову став Саратовський нафтопереробний завод компанії «Роснефть». Підприємство має проєктну потужність переробки близько 7 млн тонн нафти на рік і є ключовим виробником дизельного пального, бензинів та авіагасу в Поволжі, активно живлячи пальним окупаційні війська РФ. Місцеві жителі повідомили про понад 40 вибухів у районі Заводського району Саратова та прилеглого Енгельса. Попри роботу російської ППО й антидронових тросів, група ударних безпілотників влучила в технологічні установки та резервуарні потужності НПЗ, спричинивши масштабну пожежу й відкритий вогняний факел. Губернатор Роман Бусаргін підтвердив пошкодження інфраструктури та наявність постраждалих. Стовп чорного диму закрив частину міста, а роботу виробничих ліній заводу було екстрено переведено в аварійний режим.",
    "source": "ASTRA, @ASupersharij, Exilenova+, Supernova+, ТАРС, РІА Новини"
  },
  "en": {
    "region": "Saratov Oblast, Saratov, Zavodskoy District",
    "target": "Saratov Oil Refinery (PJSC Saratov Refinery — Rosneft Oil Company)",
    "category": "Oil & Gas",
    "weapon": "Long-range strike UAVs",
    "details": "On the night of November 7, 2026, Saratov came under a large-scale swarm attack by Ukrainian long-range strike drones. The primary target was the Saratov Oil Refinery operated by Rosneft. The plant has a design refining capacity of approximately 7 million tons of crude oil per year and serves as a major supplier of diesel fuel, motor gasoline, and aviation kerosene in the Volga region, supporting Russian military operations. Residents reported more than 40 loud explosions across the Zavodskoy district of Saratov and nearby Engels. Despite intense anti-aircraft fire and anti-drone protective netting, several UAVs penetrated the perimeter and struck refining units and storage assets, sparking a huge fire with towering flames. Regional Governor Roman Busargin confirmed infrastructure damage and civilian injuries. Dense black smoke drifted across urban neighborhoods as the refinery emergency shut down key processing units.",
    "source": "ASTRA, @ASupersharij, Exilenova+, Supernova+, TASS, RIA Novosti"
  },
  "images": [
    "video/saratov_npz_0711_vid1.mp4",
    "video/saratov_npz_0711_vid2.mp4",
    "images/saratov_npz_0711_img1.jpg",
    "images/saratov_npz_0711_img2.jpg",
    "images/saratov_npz_0711_img3.jpg",
    "images/saratov_npz_0711_img4.jpg"
  ],
  "id": 572
};

const protonEntry = {
  "date": "07.11.2026",
  "lat": 52.9848,
  "lng": 36.0563,
  "distance": null,
  "ru": {
    "region": "Орловская обл., г. Орел, ул. Лескова, 19",
    "target": "АО «Протон-Электротекс» (завод «Протон») — производство электроники для ракет",
    "category": "ВПК",
    "weapon": "Крылатые ракеты «Нептун»",
    "details": "В ночь на 7 ноября 2026 года ракетные войска Вооруженных сил Украины во взаимодействии с ВМС ВСУ нанесли высокоточный удар береговыми крылатыми ракетами «Нептун» по предприятию оборонно-промышленного комплекса АО «Протон-Электротекс» (завод «Протон») в Орле. Предприятие специализируется на выпуске силовой полупроводниковой электроники, диодов, тиристоров и оптоэлектронных модулей, критически необходимых для сборки баллистических ракет ОТРК «Искандер-М», крылатых авиаракет и ЗРПК «Панцирь-С1». Это уже повторный результативный удар по комплексу после поражения цехов в октябре. Согласно спутниковым снимкам и материалам OSINT-аналитиков, ракеты поразили производственный корпус №48 с противоположной стороны завода, вызвав мощную детонацию и сильный пожар. Губернатор Андрей Клычков подтвердил факт прилета и частичные разрушения производственных мощностей. Удар нанес тяжелый ущерб цепочке поставок компонентов для ракетного арсенала РФ.",
    "source": "Генеральный штаб ВСУ, ASTRA, @ASupersharij, Dnipro OSINT, Kiber Boroshno"
  },
  "uk": {
    "region": "Орловська обл., м. Орел, вул. Лєскова, 19",
    "target": "АТ «Протон-Електротекс» (завод «Протон») — виробництво електроніки для ракет",
    "category": "ВПК",
    "weapon": "Крилаті ракети «Нептун»",
    "details": "У ніч на 7 листопада 2026 року ракетні війська Збройних Сил України спільно з ВМС ЗСУ завдали результативного високоточного удару крилатими ракетами «Нептун» по підприємству російського воєнно-промислового комплексу АТ «Протон-Електротекс» (завод «Протон») в Орлі. Завод є одним із ключових виробників силової напівпровідникової електроніки, діодів, тиристорів та оптоелектроніки для російського ВПК. Його компоненти безпосередньо інтегруються в системи управління крилатих ракет «Ковер», балістичних 9М723 для ОТРК «Іскандер-М» і ЗРПК «Панцир-С1». Попередній удар 23–24 жовтня вже вивів із ладу цех мікроелектроніки, а нова атака припала на протилежний бік підприємства — виробничий корпус №48. На території спалахнула масштабна пожежа, що супроводжувалася серією повторних вибухів. Губернатор Андрій Кличков підтвердив руйнування виробничих приміщень. Генеральний штаб ЗСУ офіційно верифікував успішне вогневе ураження підприємства.",
    "source": "Генеральний штаб ЗСУ, ASTRA, @ASupersharij, Dnipro OSINT, Kiber Boroshno"
  },
  "en": {
    "region": "Oryol Oblast, Oryol, Leskova St., 19",
    "target": "JSC Proton-Electrotex (Proton Plant) — missile electronics manufacturing facility",
    "category": "Military-Industrial Complex",
    "weapon": "Neptune cruise missiles",
    "details": "On the night of November 7, 2026, Ukrainian missile units, operating Neptune coastal cruise missiles modified for land strikes, carried out a precision strike on JSC Proton-Electrotex (Proton Plant) in Oryol. The facility is a vital pillar of the Russian defense industry, manufacturing power semiconductors, thyristors, diodes, and specialized optoelectronic components. These parts are essential for assembling 9M723 ballistic missiles used in Iskander-M complexes, cruise missiles, and Pantsir-S1 air defense systems. Following an earlier strike in late October that damaged the microelectronics building, this new attack hit manufacturing building No. 48 on the opposite flank of the industrial perimeter. OSINT analysts and satellite imagery confirmed direct missile impacts resulting in heavy explosions and a major fire. Regional Governor Andrey Klychkov conceded partial damage to production workshops. The General Staff of the AFU officially confirmed the strike.",
    "source": "General Staff of AFU, ASTRA, @ASupersharij, Dnipro OSINT, Kiber Boroshno"
  },
  "images": [
    "video/orel_proton_0711_vid1.mp4",
    "video/orel_proton_0711_vid2.mp4",
    "images/orel_proton_0711_img1.jpg",
    "images/orel_proton_0711_img2.jpg",
    "images/orel_proton_0711_img3.jpg"
  ],
  "id": 573
};

const miusEntry = {
  "date": "08.11.2026",
  "lat": 47.1841,
  "lng": 38.5159,
  "distance": null,
  "ru": {
    "region": "Ростовская обл., Неклиновский район, 97-й км трассы Р-280",
    "target": "Автодорожный мост через реку Миус (трасса Р-280 «Новороссия»)",
    "category": "ВПК",
    "weapon": "Ударные БПЛА / FP-2",
    "details": "В ночь на 8 ноября 2026 года подразделения Сил обороны Украины нанесли удар беспилотниками по автодорожному мосту через реку Миус на 97-м километре федеральной трассы Р-280 «Новороссия» в Неклиновском районе Ростовской области. Данная магистраль является главной сухопутной артерией и стратегическим рокадным маршрутом, по которому круглосуточно перебрасываются войска, тяжелая бронетехника, боеприпасы и топливо из Ростовской области через Таганрог в оккупированные Мариуполь, Мелитополь и Крым. Точный прилет ударного дрона повредил дорожное полотно и несущие элементы мостового пролета. Губернатор Ростовской области Юрий Слюсарь официально подтвердил повреждение переправы и экстренное перекрытие движения по участку трассы. На трассе образовались многокилометровые заторы военного и грузового транспорта. Поражение моста существенно нарушило график военной логистики южной группировки ВС РФ.",
    "source": "ASTRA, @ASupersharij, Supernova+, Crimeanwind, ТАСС, РИА Новости"
  },
  "uk": {
    "region": "Ростовська обл., Неклинівський район, 97-й км траси Р-280",
    "target": "Автомобільний міст через річку Міус (траса Р-280 «Новоросія»)",
    "category": "ВПК",
    "weapon": "Ударні БпЛА / FP-2",
    "details": "У ніч на 8 листопада 2026 року Сили оборони України завдали прицільного удару ударними безпілотниками по автомобільному мосту через річку Міус на 97-му кілометрі федеральної траси Р-280 «Новоросія» в Неклинівському районі Ростовської області. Ця автотраса є головною наземною артерією так званого «суходільного коридору», через яку здійснюється регулярне перекидання особового складу, важкої бронетехніки, боєприпасів і пального з тилових баз Ростова через Таганрог до тимчасово окупованих Маріуполя, Мелітополя та Криму. Влучання дрона-камікадзе спричинило серйозне руйнування дорожнього покриття та пошкодження конструкцій мостового переходу. Губернатор Ростовської області Юрій Слюсар підтвердив удар і повідомив про повне перекриття руху ділянкою траси Р-280. Зупинка руху спричинила транспортний колапс і заблокувала ключові маршрути постачання південного угруповання військ агресора.",
    "source": "ASTRA, @ASupersharij, Supernova+, Crimeanwind, ТАРС, РІА Новини"
  },
  "en": {
    "region": "Rostov Oblast, Neklinovsky District, km 97 of R-280 highway",
    "target": "Highway bridge over Mius River (R-280 Novorossiya highway)",
    "category": "Military-Industrial Complex",
    "weapon": "Strike UAVs / FP-2",
    "details": "On the night of November 8, 2026, Ukrainian Defense Forces launched a precision UAV strike targeting the highway bridge over the Mius River at kilometer 97 of federal highway R-280 Novorossiya in the Neklinovsky district of Rostov Oblast. The R-280 motorway is the central logistics corridor connecting military staging depots in Rostov-on-Don through Taganrog into occupied Mariupol, Melitopol, and the Crimean peninsula. Convoys of military hardware, heavy armor, ammunition, and fuel supplies constantly utilize this transit route to supply Russian southern operational groupings. Drone impacts punctured the bridge deck and damaged structural supports, rendering the crossing unsafe for heavy traffic. Rostov Oblast Governor Yury Slyusar officially confirmed the damage and announced the immediate closure of traffic along this section of highway. The successful strike severely bottlenecks ground supply lines toward the southern front line.",
    "source": "ASTRA, @ASupersharij, Supernova+, Crimeanwind, TASS, RIA Novosti"
  },
  "images": [
    "video/mius_bridge_0811_vid1.mp4",
    "video/mius_bridge_0811_vid2.mp4",
    "images/mius_bridge_0811_img1.jpg",
    "images/mius_bridge_0811_img2.jpg",
    "images/mius_bridge_0811_img3.jpg"
  ],
  "id": 574
};

const entries = [saratovEntry, protonEntry, miusEntry];

entries.forEach(e => {
  console.log(`Checking entry ${e.id} (${e.date} - ${e.ru.target}):`);
  ['ru', 'uk', 'en'].forEach(lang => {
    const len = e[lang].details.length;
    console.log(`  [${lang}] details length: ${len} chars (valid: ${len >= 600 && len <= 1000})`);
    if (len < 600 || len > 1000) {
      throw new Error(`Length violation in ${e.id} [${lang}]: ${len}`);
    }
  });
});

// Insert into data:
// unshift in reverse order so mius (08.11) is first, then proton (07.11), then saratov (07.11)
data.unshift(saratovEntry);
data.unshift(protonEntry);
data.unshift(miusEntry);

fs.writeFileSync('data.js', 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n');
console.log('Successfully added entries 572, 573, 574 to data.js!');
