const fs = require('fs');

const content = fs.readFileSync('data.js', 'utf8');
const dataStr = content.replace('const strikeData = ', '').replace(/;\s*$/, '').trim();
const strikeData = new Function('return ' + dataStr)();

const newEntry = {
  "date": "01.11.2026",
  "lat": 56.1072,
  "lng": 44.1549,
  "distance": null,
  "ru": {
    "region": "Нижегородская обл., г. Кстово, Центральное шоссе, 9",
    "target": "ООО «ЛУКОЙЛ-Нижегороднефтеоргсинтез» (НОРСИ) — нефтеперерабатывающий завод",
    "category": "Нефтегаз / НПЗ",
    "weapon": "Дальнобойные БПЛА",
    "details": "В ночь на 1 ноября 2026 года подразделения Сил обороны Украины провели массированную атаку дальнобойными дронами-камикадзе по нефтеперерабатывающему заводу «ЛУКОЙЛ-Нижегороднефтеоргсинтез» (НОРСИ) в городе Кстово Нижегородской области. Предприятие входит в четверку крупнейших НПЗ России с проектной мощностью первичной переработки около 17 млн тонн нефти в год и является ключевым поставщиком бензина и авиакеросина для Центральной России и военных нужд. В ходе скоординированного налета группа беспилотников прорвала локальную противовоздушную оборону. Серия прямых попаданий пришлась по критическим установкам первичной переработки нефти АВТ-5 и АВТ-6, а также секции висбрекинга. На территории завода начался крупный пожар с сильным задымлением, а над Кстово зафиксировали маслянистый осадок из нефтепродуктов. Губернатор Нижегородской области признал серьезные повреждения промышленного объекта, а власти ввели лимиты на продажу топлива на АЗС (до 40 литров на машину).",
    "source": "Губернатор Нижегородской области, ASTRA, @ASupersharij, Supernova+, Exilenova+, Минобороны РФ"
  },
  "uk": {
    "region": "Нижньогородська обл., м. Кстово, Центральне шосе, 9",
    "target": "ТОВ «ЛУКОЙЛ-Нижегороднефтеоргсинтез» (НОРСІ) — нафтопереробний завод",
    "category": "Нафтогаз / НПЗ",
    "weapon": "Далекобійні БпЛА",
    "details": "У ніч на 1 листопада 2026 року Сили оборони України завдали масованого удару далекобійними дронами-камікадзе по нафтопереробному заводу «ЛУКОЙЛ-Нижегороднефтеоргсинтез» (НОРСІ) у місті Кстово Нижньогородської області. Підприємство посідає одне з чільних місць серед найбільших НПЗ Росії з проєктною потужністю переробки близько 17 млн тонн нафти на рік і відіграє стратегічну роль у забезпеченні паливом військ та центральних регіонів РФ. Під час атаки ударні безпілотники подолали протиповітряну оборону супротивника, унаслідок чого зафіксовано влучання у ключові установки первинної переробки АВТ-5 і АВТ-6, а також блок вісбрекінгу. На заводі спалахнула масштабна пожежа, стовп чорного диму здійнявся на сотні метрів, а в Кстово спостерігалися опади з нафтових фракцій. Губернатор області підтвердив значні руйнування промислового підприємства. Через дефіцит регіональна влада була змушена екстрено запровадити ліміти на продаж бензину на АЗС до 40 літрів на авто.",
    "source": "Губернатор Нижньогородської області, ASTRA, @ASupersharij, Supernova+, Exilenova+, Міноборони РФ"
  },
  "en": {
    "region": "Nizhny Novgorod Oblast, Kstovo, Tsentralnoye Hwy, 9",
    "target": "LUKOIL-Nizhegorodnefteorgsintez (NORSI) — oil refinery plant",
    "category": "Oil & Gas / Refinery",
    "weapon": "Long-range UAVs",
    "details": "On the night of November 1, 2026, Ukrainian Defense Forces launched a coordinated mass attack using long-range strike UAVs against the LUKOIL-Nizhegorodnefteorgsintez (NORSI) oil refinery in Kstovo, Nizhny Novgorod Oblast. The refinery ranks among Russia's top four refining facilities with an annual crude processing capacity of 17 million tons, serving as a primary fuel supplier for Central Russia and military logistics. A swarm of drones penetrated regional air defenses, scoring direct hits on crude distillation units AVT-5 and AVT-6, as well as the visbreaking residue unit. The impacts triggered extensive fires across the complex, producing heavy smoke plumes and oily petroleum fallout over Kstovo. Nizhny Novgorod governor Gleb Nikitin confirmed significant structural damage at the enterprise. In response, regional authorities enacted fuel rationing across filling stations, limiting gasoline sales to 40 liters per vehicle.",
    "source": "Nizhny Novgorod Oblast Governor, ASTRA, @ASupersharij, Supernova+, Exilenova+, Russian MoD"
  },
  "images": [
    "video/kstovo_lukoil_0111_vid1.mp4",
    "video/kstovo_lukoil_0111_vid2.mp4",
    "images/kstovo_lukoil_0111_img1.jpg",
    "images/kstovo_lukoil_0111_img2.jpg",
    "images/kstovo_lukoil_0111_img3.jpg",
    "images/kstovo_lukoil_0111_img4.jpg"
  ],
  "id": 565
};

// Check if already present
if (strikeData.some(s => s.id === 565 || (s.date === '01.11.2026' && s.ru.target.includes('Нижегороднефтеоргсинтез')))) {
    console.log('Entry already exists!');
} else {
    strikeData.unshift(newEntry);
    fs.writeFileSync('data.js', 'const strikeData = ' + JSON.stringify(strikeData, null, 2) + ';\n', 'utf8');
    console.log('Successfully added entry id 565 to data.js! Total strikes:', strikeData.length);
}
