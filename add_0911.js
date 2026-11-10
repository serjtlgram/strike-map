const fs = require('fs');

const content = fs.readFileSync('data.js', 'utf8');
const dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
const data = new Function('return ' + dataStr)();

const kinefEntry = {
  "date": "09.11.2026",
  "lat": 59.4894,
  "lng": 32.0625,
  "distance": null,
  "ru": {
    "region": "Ленинградская обл., г. Кириши, шоссе Энтузиастов, 1",
    "target": "Киришский НПЗ (ООО «КИНЕФ» — ПАО «Сургутнефтегаз»)",
    "category": "Нефтегаз",
    "weapon": "Дальнобойные ударные БПЛА",
    "details": "В ночь на 9 ноября 2026 года дальнобойные ударные дроны Сил обороны Украины атаковали Киришский нефтеперерабатывающий завод компании «Сургутнефтегаз» в Ленинградской области. Комплекс «КИНЕФ» — второй по мощности НПЗ в России с переработкой свыше 20 млн тонн нефти в год. Предприятие производит моторное топливо и авиакеросин для всего Северо-Запада РФ, обеспечивая снабжение армейских группировок. Беспилотники преодолели систему ПВО и поразили технологические установки ЭЛОУ-АВТ-6, ЭЛОУ-АТ-6 и ЭЛОУ-АВТ-2. На площадке завода вспыхнули сильные пожары с открытым факельным горением, столб дыма поднялся на сотни метров. Из-за повреждений инфраструктуры губернатор Александр Дрозденко объявил о введении лимитов на продажу бензина и дизеля на АЗС по всей Ленинградской области. Поврежденные установки первичной переработки нефти были аварийно остановлены.",
    "source": "ASTRA, @ASupersharij, Exilenova+, Supernova+, РИА Новости"
  },
  "uk": {
    "region": "Ленінградська обл., м. Кіриші, шосе Ентузіастів, 1",
    "target": "Кіриський НПЗ (ТОВ «КІНЕФ» — ПАТ «Сургутнєфтєгаз»)",
    "category": "Нафтогаз",
    "weapon": "Далекобійні ударні БпЛА",
    "details": "У ніч на 9 листопада 2026 року далекобійні ударні дрони Сил оборони України атакували Кіриський нафтопереробний завод компанії «Сургутнєфтєгаз» у Ленінградській області. Підприємство «КІНЕФ» є другим за потужністю НПЗ у Росії з переробкою понад 20 млн тонн нафти на рік. Завод виробляє моторне пальне та авіагас для Північного Заходу РФ, забезпечуючи потреби окупаційних військ. Безпілотники подолали протиповітряну оборону та уразили технологічні установки ЕЛОУ-АВТ-6, ЕЛОУ-АТ-6 та ЕЛОУ-АВТ-2. На виробничих площах спалахнули масштабні пожежі з відкритим факельним горінням, стовп диму піднявся на сотні метрів. Через пошкодження установок губернатор Олександр Дрозденко запровадив ліміти на продаж бензину й дизеля на АЗС по всій Ленінградській області. Роботу ліній первинної переробки нафти екстрено зупинено.",
    "source": "ASTRA, @ASupersharij, Exilenova+, Supernova+, РІА Новини"
  },
  "en": {
    "region": "Leningrad Oblast, Kirishi, Entuziastov Hwy, 1",
    "target": "Kirishi Oil Refinery (LLC KINEF — PJSC Surgutneftegas)",
    "category": "Oil & Gas",
    "weapon": "Long-range strike UAVs",
    "details": "On the night of November 9, 2026, Ukrainian long-range strike drones attacked the Kirishi Oil Refinery (KINEF) operated by Surgutneftegas in Leningrad Oblast. KINEF is the second-largest refinery in Russia, processing over 20 million tons of crude annually. It serves as the primary motor fuel and jet kerosene supplier for Northwestern Russia, fueling military formations and regional logistics. Several UAVs penetrated local air defenses and struck primary distillation units ELOU-AVT-6, ELOU-AT-6, and ELOU-AVT-2. The impacts triggered extensive fires with intense flare burning and towering smoke columns over the facility. In response to the damage, Governor Aleksandr Drozdenko imposed fuel purchase limits at gas stations across Leningrad Oblast. Refinery operators carried out an emergency shutdown of the damaged distillation units.",
    "source": "ASTRA, @ASupersharij, Exilenova+, Supernova+, RIA Novosti"
  },
  "images": [
    "video/kirishi_kinef_0911_vid1.mp4",
    "video/kirishi_kinef_0911_vid2.mp4",
    "images/kirishi_kinef_0911_img1.jpg",
    "images/kirishi_kinef_0911_img2.jpg",
    "images/kirishi_kinef_0911_img3.jpg",
    "images/kirishi_kinef_0911_img4.jpg"
  ],
  "id": 575
};

const morozovEntry = {
  "date": "09.11.2026",
  "lat": 59.9858,
  "lng": 30.9767,
  "distance": null,
  "ru": {
    "region": "Ленинградская обл., Всеволожский район, пос. им. Морозова, ул. Чекалова, 3",
    "target": "АО «Завод имени Морозова» (ГК «Ростех») — производство ракетного топлива для «Искандеров»",
    "category": "ВПК",
    "weapon": "Дальнобойные ударные БПЛА (СБС)",
    "details": "В ночь на 9 ноября 2026 года операторы 1-го отдельного центра Сил беспилотных систем во взаимодействии с Силами обороны Украины нанесли удар по предприятию АО «Завод имени Морозова» в Ленинградской области на дистанции свыше 900 км от границы. Завод входит в госкорпорацию «Ростех» и занимает важное место в российском ВПК. Предприятие специализируется на выпуске взрывчатых веществ, пиротехники, капсюльных составов и твердого ракетного топлива. Здесь производятся твердотопливные заряды для двигателей 9Х820 баллистических ракет 9М723 ОТРК «Искандер-М», а также топливо для комплексов «Тополь-М». В результате попаданий дронов-камикадзе повреждены три производственных цеха комбината, зафиксированы возгорания и детонация. Генштаб ВСУ подтвердил успешное поражение стратегического объекта, сорвавшее цепочку поставок баллистического вооружения.",
    "source": "Генеральный штаб ВСУ, Силы беспилотных систем (СБС), ASTRA, Exilenova+, Supernova+"
  },
  "uk": {
    "region": "Ленінградська обл., Всеволожський район, сел. ім. Морозова, вул. Чекалова, 3",
    "target": "АТ «Завод імені Морозова» (ДК «Ростех») — виробництво ракетного палива для «Іскандерів»",
    "category": "ВПК",
    "weapon": "Далекобійні ударні БпЛА (СБС)",
    "details": "У ніч на 9 листопада 2026 року оператори 1-го окремого центру Сил безпілотних систем спільно з Силами оборони України завдали удару по АТ «Завод імені Морозова» в Ленінградській області на відстані понад 900 км від кордону. Завод входить до складу держкорпорації «Ростех» і відіграє вагому роль у структурі російського ВПК. Підприємство виробляє вибухові речовини, капсульні суміші та тверде ракетне паливо. Тут виготовляють твердопаливні заряди для ракетних двигунів 9Х820 балістичних ракет 9М723 комплексів «Іскандер-М», а також паливо для комплексів «Тополь-М». Унаслідок влучання далекобійних дронів пошкоджено три виробничі цехи заводу, на майданчику виникли детонація та сильна пожежа. Генеральний штаб ЗСУ офіційно підтвердив успішне вогневе ураження стратегічного заводу, що порушило ланцюг виробництва балістичних ракет.",
    "source": "Генеральний штаб ЗСУ, Сили безпілотних систем (СБС), ASTRA, Exilenova+, Supernova+"
  },
  "en": {
    "region": "Leningrad Oblast, Vsevolozhsk District, Imeni Morozova, Chekalova St., 3",
    "target": "JSC Morozov Plant (Rostec) — solid rocket propellant manufacturing facility for Iskander missiles",
    "category": "Military-Industrial Complex",
    "weapon": "Long-range strike UAVs (SBS)",
    "details": "On the night of November 9, 2026, operators of the 1st Separate Unmanned Systems Center, together with the Ukrainian Defense Forces, struck the JSC Morozov Plant in Leningrad Oblast, over 900 km from Ukraine's border. Part of the Rostec state corporation, the facility is a cornerstone of the Russian military-industrial complex. It specializes in explosives, detonator formulations, and solid rocket propellants. Crucially, the plant manufactures solid propellant charges for 9Kh820 rocket motors used in 9M723 Iskander-M ballistic missiles, as well as fuel for Topol-M systems. Direct impacts from strike UAVs damaged three production workshops, causing fires and secondary detonations across the site. The Ukrainian General Staff officially verified the successful strike, disrupting Russia's ballistic missile supply chain.",
    "source": "General Staff of AFU, Unmanned Systems Forces (USF), ASTRA, Exilenova+, Supernova+"
  },
  "images": [
    "video/morozov_plant_0911_vid1.mp4",
    "video/morozov_plant_0911_vid2.mp4",
    "images/morozov_plant_0911_img1.jpg",
    "images/morozov_plant_0911_img2.jpg",
    "images/morozov_plant_0911_img3.jpg",
    "images/morozov_plant_0911_img4.jpg"
  ],
  "id": 576
};

// Prepend to array
data.unshift(kinefEntry);
data.unshift(morozovEntry);

fs.writeFileSync('data.js', 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n');
console.log('Entries added to data.js! Total entries now:', data.length);
