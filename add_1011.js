const fs = require('fs');

const content = fs.readFileSync('data.js', 'utf8');
const dataStr = content.replace('const strikeData = ', '').replace(/;\s*$/, '').trim();
const data = new Function('return ' + dataStr)();

const starayaRussaEntry = {
  "date": "10.11.2026",
  "lat": 57.9614,
  "lng": 31.3844,
  "distance": null,
  "ru": {
    "region": "Новгородская обл., г. Старая Русса, микрорайон Городок",
    "target": "АО «123-й авиационный ремонтный завод» (АО «123 АРЗ» — ГК «Ростех»)",
    "category": "ВПК",
    "weapon": "Дальнобойные ударные БПЛА",
    "details": "В ночь на 10 ноября 2026 года дальнобойные ударные дроны Сил обороны Украины атаковали 123-й авиационный ремонтный завод в городе Старая Русса Новгородской области. Предприятие входит в структуру «Ростеха» и выполняет ключевую роль в обеспечении боеспособности российской военной авиации. Завод специализируется на капитальном ремонте и модернизации военно-транспортных самолетов Ил-76 и Ил-78, а также редких самолетов дальнего радиолокационного обнаружения А-50, каждый из которых оценивается в 350 млн долларов. Территория предприятия оборудована собственной взлетно-посадочной полосой и крупными ремонтными цехами. Беспилотники преодолели систему ПВО и взорвались на производственной площадке, вызвав пожар и повреждение корпусов. Губернатор региона подтвердил поражение промышленного объекта, а Генштаб ВСУ заявил об успешном ударе. Выбивание мощностей завода лишает ВКС РФ возможности оперативно восстанавливать критически важные воздушные радары и транспортники.",
    "source": "Генеральный штаб ВСУ, ASTRA, @ASupersharij, Exilenova+, Supernova+"
  },
  "uk": {
    "region": "Новгородська обл., м. Стара Русса, мікрорайон Городок",
    "target": "АТ «123-й авіаційний ремонтний завод» (АТ «123 АРЗ» — ДК «Ростех»)",
    "category": "ВПК",
    "weapon": "Далекобійні ударні БпЛА",
    "details": "У ніч на 10 листопада 2026 року далекобійні ударні дрони Сил оборони України атакували 123-й авіаційний ремонтний завод у місті Стара Русса Новгородської області. Підприємство входить до структури «Ростеху» та відіграє ключову роль у підтримці боєздатності російської військової авіації. Завод спеціалізується на капітальному ремонті й модернізації військово-транспортних літаків Іл-76 та Іл-78, а також рідкісних літаків далекого радіолокаційного виявлення А-50 вартістю близько 350 млн доларів кожен. Комплекс має власну злітно-посадкову смугу та великі цехи для важких бортів. Безпілотники подолали протиповітряну оборону та вибухнули на території підприємства, спричинивши пожежу й пошкодження будівель. Губернатор регіону визнав ураження промислового об’єкта, а Генштаб ЗСУ офіційно підтвердив успішний удар. Виведення з ладу цехів ускладнює відновлення дефіцитних літаків-радарів і транспортної авіації ворога.",
    "source": "Генеральний штаб ЗСУ, ASTRA, @ASupersharij, Exilenova+, Supernova+"
  },
  "en": {
    "region": "Novgorod Oblast, Staraya Russa, Gorodok Microdistrict",
    "target": "123rd Aviation Repair Plant (JSC 123 ARZ — Rostec)",
    "category": "Military-Industrial",
    "weapon": "Long-range strike UAVs",
    "details": "On the night of November 10, 2026, Ukrainian long-range strike drones attacked the 123rd Aviation Repair Plant in Staraya Russa, Novgorod Oblast. The enterprise operates under Rostec and plays a key role in sustaining Russian military aviation. The facility specializes in the overhaul and modernization of Il-76 and Il-78 military transport aircraft, as well as high-value A-50 airborne early warning and control (AEW&C) planes, each valued at roughly 350 million dollars. The plant features its own operational runway and heavy maintenance hangars. Several kamikaze drones bypassed air defense cordons and struck the facility grounds, triggering structural damage and a noticeable fire. The regional governor acknowledged damage to an industrial facility, while the General Staff of the Armed Forces of Ukraine confirmed the successful strike. Damaging workshop capacity severely impedes Russia's ability to restore scarce radar surveillance aircraft and heavy transport fleet.",
    "source": "General Staff of the Armed Forces of Ukraine, ASTRA, @ASupersharij, Exilenova+, Supernova+"
  },
  "images": [
    "video/staraya_russa_123arz_1011_vid1.mp4",
    "images/staraya_russa_123arz_1011_img1.jpg",
    "images/staraya_russa_123arz_1011_img2.jpg",
    "images/staraya_russa_123arz_1011_img3.jpg",
    "images/staraya_russa_123arz_1011_img4.jpg"
  ],
  "id": 577
};

data.unshift(starayaRussaEntry);

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log('Successfully added Staraya Russa 123 ARZ (10.11.2026) to data.js!');
