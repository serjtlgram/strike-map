const fs = require('fs');
const path = require('path');

const newEntries = [
  {
    "date": "25.10.2026",
    "lat": 52.6027,
    "lng": 38.5045,
    "distance": 317,
    "ru": {
      "region": "Липецкая обл., г. Елец, пос. Электрик, 1",
      "target": "ПАО «Энергия» — завод химических источников тока и аккумуляторов для ракетного вооружения",
      "category": "ВПК",
      "weapon": "Крылатые ракеты",
      "details": "Днем 25 октября 2026 года Силы обороны Украины нанесли массированный комбинированный удар крылатыми ракетами Storm Shadow по территории завода ПАО «Энергия» в городе Елец Липецкой области. Предприятие является стратегическим объектом российского ВПК и ведущим разработчиком и производителем химических источников тока. Завод специализируется на выпуске батарей и аккумуляторов для ракетных комплексов «Искандер-М», «Искандер-К», «Кинжал», «Циркон», а также модулей коррекции авиабомб УМПК и ЗРПК «Панцирь-С1». Очевидцы и камеры зафиксировали прилеты как минимум трех-четырех крылатых ракет, которые пробили кровлю и детонировали внутри производственных корпусов. На предприятии начался масштабный пожар, охвативший сборочные цеха. Губернатор Липецкой области Игорь Артамонов подтвердил удар по промзоне и ранение шестерых работников. Поражение мощностей завода наносит чувствительный удар по сборке ракетного вооружения ВС РФ.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, губернатор Липецкой области"
    },
    "uk": {
      "region": "Липецька обл., м. Єлець, сел. Електрик, 1",
      "target": "ПАТ «Енергія» — завод хімічних джерел струму та акумуляторів для ракетного озброєння",
      "category": "ВПК",
      "weapon": "Крилаті ракети",
      "details": "Удень 25 жовтня 2026 року Сили оборони України завдали удару високоточними крилатими ракетами Storm Shadow по промисловому майданчику заводу ПАТ «Енергія» у місті Єлець Липецької області. Підприємство належить до критичної ланки російського ВПК як провідний виробник спеціалізованих хімічних джерел живлення. Тут виготовляють акумуляторні батареї для балістичних і крилатих ракет «Іскандер», гіперзвукових комплексів «Кинджал» і «Циркон», модулів планування і корекції авіабомб УМПК та комплексів ППО «Панцир-С1». На оприлюднених відео зафіксовано влучання щонайменше трьох ракет у виробничі корпуси із подальшими вторинними вибухами та пожежею. Губернатор Липецької області підтвердив удар по промзоні та поранення шести працівників заводу. Ураження виробничих ліній суттєво уповільнить випуск високоточних російських ракет і керованих авіабомб.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, губернатор Липецької області"
    },
    "en": {
      "region": "Lipetsk Oblast, Yelets, Elektrik Settlement, 1",
      "target": "PJSC Energia — battery and chemical power source manufacturing plant for guided missiles",
      "category": "Military-Industrial Complex",
      "weapon": "Cruise missiles",
      "details": "On the afternoon of October 25, 2026, Ukrainian Defense Forces launched a precision strike using Storm Shadow cruise missiles against the PJSC Energia plant in Yelets, Lipetsk region. The facility is a critical enterprise in the Russian military-industrial complex, serving as a primary producer of autonomous chemical power sources and batteries. Its output equips Iskander-M and Iskander-K missiles, Kinzhal and Zircon hypersonic systems, UMPK guided bomb kits, and Pantsir-S1 air defense systems. Eyewitness footage documented impacts of at least three cruise missiles penetrating factory workshops, triggering structural collapse and extensive fires. Lipetsk regional governor Igor Artamonov confirmed strikes on the industrial site and injuries to six personnel. The disruption of these specialized workshops delivers a serious blow to Russia's guided munitions assembly supply chain.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, Lipetsk Oblast Governor"
    },
    "images": [
      "video/yelets_energiya_2510_vid1.mp4",
      "video/yelets_energiya_2510_vid2.mp4",
      "images/yelets_energiya_2510_img1.jpg",
      "images/yelets_energiya_2510_img2.jpg",
      "images/yelets_energiya_2510_img3.jpg"
    ],
    "id": 557
  },
  {
    "date": "25.10.2026",
    "lat": 59.4568,
    "lng": 56.8345,
    "distance": 1679,
    "ru": {
      "region": "Пермский край, г. Березники, Загородная ул., 29",
      "target": "Химико-металлургический завод «АВИСМА» (ВСМПО-АВИСМА) — титаново-магниевый комбинат для авиации и ракетостроения",
      "category": "ВПК / Металлургия",
      "weapon": "Дальнобойные БПЛА",
      "details": "Рано утром 25 октября 2026 года украинские дальнобойные ударные беспилотники атаковали химико-металлургический завод «АВИСМА» в городе Березники Пермского края, преодолев свыше 1400 километров до цели. Предприятие входит в состав ПАО «Корпорация ВСМПО-АВИСМА» и представляет собой крупнейший в мире комплекс по выплавке губчатого титана и магния. Титановый прокат березниковской площадки является ключевым конструкционным материалом для военного авиастроения РФ, включая истребители Су-35, Су-57, ракетоносцы Ту-160М, а также ракетные двигатели и атомные подлодки. Во время налета работали средства ПВО, однако несколько дронов-камикадзе упали на территории технологических цехов завода. Губернатор Дмитрий Махонин подтвердил повреждения промышленного объекта и ранение пяти сотрудников предприятия. Удар по столь удаленному предприятию демонстрирует уязвимость тыловых центров российского ВПК.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, губернатор Пермского края"
    },
    "uk": {
      "region": "Пермський край, м. Березники, Загородна вул., 29",
      "target": "Хіміко-металургійний завод «АВІСМА» (ВСМПО-АВІСМА) — титаново-магнієвий комбінат для авіації та ракетобудування",
      "category": "ВПК / Металургія",
      "weapon": "Далекобійні БпЛА",
      "details": "Рано-вранці 25 жовтня 2026 року українські далекобійні ударні дрони атакували титаново-магнієвий комбінат «АВІСМА» в місті Березники Пермського краю на відстані понад 1400 км від лінії фронту. Підприємство є ключовим виробничим майданчиком ПАТ «Корпорація ВСМПО-АВІСМА» — найбільшого світового виробника губчастого титану та металевого магнію. Титанова сировина і сплави комбінату критично необхідні для російської бойової авіації Су-35 і Су-57, стратегічних бомбардувальників Ту-160М, корпусів ракет і атомних підводних човнів. Під час нальоту російська протиповітряна оборона збила частину дронів, проте ударні апарати влучили по території виробничого комплексу. Губернатор краю Дмитро Махонін визнав пошкодження промислового об'єкта та поранення п'яти працівників заводу. Ураження стратегічного виробника підриває базу постачання матеріалів для російського ВПК.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, губернатор Пермського краю"
    },
    "en": {
      "region": "Perm Krai, Berezniki, Zagorodnaya St., 29",
      "target": "AVISMA Titanium and Magnesium Smelter (VSMPO-AVISMA) — critical supplier for aerospace and naval defense",
      "category": "Military-Industrial Complex / Metallurgy",
      "weapon": "Long-range UAVs",
      "details": "In the early morning of October 25, 2026, Ukrainian long-range strike drones targeted the AVISMA metallurgical plant in Berezniki, Perm Krai, traveling over 1,400 km into Russian rear territory. The facility is a crucial manufacturing division of PJSC VSMPO-AVISMA, representing the world's largest producer of titanium sponge and metallic magnesium. Its titanium alloys provide structural components for Su-35 and Su-57 fighters, Tu-160M strategic bombers, rocket engine casings, and nuclear submarines. Despite local air defense engagements, several kamikaze drones struck the facility's industrial footprint. Perm Krai governor Dmitry Makhonin confirmed damage to the industrial facility and injuries to five plant workers. Damaging this pivotal metallurgy center directly impacts critical material pipelines supporting Russia's military aircraft and naval manufacturing.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, Perm Krai Governor"
    },
    "images": [
      "video/berezniki_avisma_2510_vid1.mp4",
      "images/berezniki_avisma_2510_img1.jpg"
    ],
    "id": 558
  }
];

const dataPath = path.join(__dirname, 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

// Replace top two entries in data.js
const strikeData = eval(dataContent + '; strikeData;');
// If top two are already 557 and 558, replace them
if (strikeData[0].id === 557 && strikeData[1].id === 558) {
  strikeData[0] = newEntries[0];
  strikeData[1] = newEntries[1];
  const updatedFile = 'const strikeData = ' + JSON.stringify(strikeData, null, 2) + ';\n';
  fs.writeFileSync(dataPath, updatedFile, 'utf8');
  console.log("Updated top two entries with refined text in data.js");
}
