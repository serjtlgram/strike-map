const fs = require('fs');
const path = require('path');

const newEntries = [
  {
    "date": "26.10.2026",
    "lat": 51.6285,
    "lng": 39.2392,
    "distance": null,
    "ru": {
      "region": "Воронежская обл., г. Воронеж, Ленинский просп., 160",
      "target": "АО «Воронежсинтезкаучук» (ГК «СИБУР») — производство каучуков и компонентов ракетного топлива",
      "category": "ВПК / Нефтехимия",
      "weapon": "Дальнобойные БПЛА",
      "details": "Рано утром 26 октября 2026 года Силы обороны Украины нанесли массированный удар дальнобойными дронами по промышленным объектам Воронежа. Ключевой целью атаки стало предприятие АО «Воронежсинтезкаучук», входящее в холдинг «СИБУР». Завод является одним из крупнейших в России производителей синтетических каучуков мощностью свыше 385 тысяч тонн в год. Предприятие имеет стратегическое значение для ВПК: его продукция используется для выпуска шин тяжелой военной техники и авиации, а также выступает сырьем для твердого ракетного топлива комплексов «Искандер». Очевидцы зафиксировали момент прилета дрона и взрыв на производственной территории. Губернатор Воронежской области Александр Гусев признал возникновение пожаров на промышленных предприятиях после налета 113 беспилотников. Поражение завода продолжило системную операцию по разрушению каучуковой базы российского ВПК.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, губернатор Воронежской области"
    },
    "uk": {
      "region": "Воронезька обл., м. Воронеж, Ленінський просп., 160",
      "target": "АТ «Воронежсинтезкаучук» (ГК «СІБУР») — виробництво каучуків і компонентів ракетного палива",
      "category": "ВПК / Нафтохімія",
      "weapon": "Далекобійні БпЛА",
      "details": "Рано-вранці 26 жовтня 2026 року Сили оборони України завдали масованого удару далекобійними дронами по промислових об'єктах Воронежа. Ключовою ціллю атаки стало підприємство АТ «Воронежсинтезкаучук», що входить до холдингу «СІБУР». Завод є одним із найбільших у Росії виробників синтетичних каучуків потужністю понад 385 тисяч тонн на рік. Підприємство має стратегічне значення для ВПК: його продукція використовується для випуску шин важкої військової техніки та авіації, а також слугує сировиною для твердого ракетного палива комплексів «Іскандер». Очевидці зафіксували момент влучання дрона та потужний вибух на виробничій території. Губернатор Воронезької області Олександр Гусєв визнав пожежі на промислових підприємствах після нальоту 113 безпілотників. Ураження заводу продовжило системну операцію з руйнування каучукової бази російського ВПК.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, губернатор Воронезької області"
    },
    "en": {
      "region": "Voronezh Oblast, Voronezh, Leninsky Ave, 160",
      "target": "JSC Voronezhsintezkauchuk (SIBUR Group) — synthetic rubber and missile fuel components plant",
      "category": "Military-Industrial Complex / Petrochemicals",
      "weapon": "Long-range UAVs",
      "details": "In the early morning of October 26, 2026, Ukrainian Defense Forces launched a massive long-range drone attack against industrial targets in Voronezh. A primary objective was the JSC Voronezhsintezkauchuk chemical plant, an asset of the SIBUR petrochemical group. The enterprise is among Russia's largest synthetic rubber manufacturers, producing over 385,000 tons annually. It holds critical defense importance, supplying specialized rubber compounds for military aircraft and heavy armored vehicles, as well as raw components for solid rocket propellants utilized in Iskander ballistic missiles. Eyewitness footage verified a direct drone impact followed by a major explosion across the plant footprint. Voronezh Oblast Governor Aleksandr Gusev confirmed fires erupted at industrial facilities following a wave of 113 drones across the region. The strike continues Ukraine's targeted campaign degrading key synthetic rubber suppliers feeding the Russian defense complex.",
      "source": "ASTRA, Supernova+, Exilenova+, @ASupersharij, Voronezh Oblast Governor"
    },
    "images": [
      "video/voronezh_sintezkauchuk_2610_vid1.mp4",
      "video/voronezh_sintezkauchuk_2610_vid2.mp4",
      "images/voronezh_sintezkauchuk_2610_img1.jpg",
      "images/voronezh_sintezkauchuk_2610_img2.jpg",
      "images/voronezh_sintezkauchuk_2610_img3.jpg"
    ],
    "id": 559
  }
];

const dataPath = path.join(__dirname, 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

const strikeData = new Function(dataContent + '; return strikeData;')();

// Check if 559 is already inserted
const exists = strikeData.some(x => x.id === 559);
if (!exists) {
  strikeData.unshift(...newEntries);
  const updatedFile = 'const strikeData = ' + JSON.stringify(strikeData, null, 2) + ';\n';
  fs.writeFileSync(dataPath, updatedFile, 'utf8');
  console.log(`Inserted entry ID 559 into data.js. Total entries: ${strikeData.length}`);
} else {
  console.log("Entry 559 already exists in data.js");
}
