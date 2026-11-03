const fs = require('fs');

const content = fs.readFileSync('data.js', 'utf8');
const dataStr = content.replace('const strikeData = ', '').replace(/;\s*$/, '').trim();
const strikeData = new Function('return ' + dataStr)();

const newEntry = {
  "date": "02.11.2026",
  "lat": 52.9874,
  "lng": 50.5431,
  "distance": null,
  "ru": {
    "region": "Самарская область, Волжский район, пос. Просвет",
    "target": "ЛПДС «Самара» (АО «Транснефть — Приволга») — линейная производственно-диспетчерская станция",
    "category": "Нефтегаз",
    "weapon": "Дальнобойные БПЛА",
    "details": "В ночь на 2 ноября 2026 года Силы обороны Украины нанесли массированный удар дальнобойными дронами по линейной производственно-диспетчерской станции «Самара» (АО «Транснефть — Приволга») у поселка Просвет Самарской области. Объект является крупнейшим в Европе узлом перекачки нефти мощностью до 130 млн тонн в год, а его резервуарный парк насчитывал более 70 емкостей общим объемом свыше 1,6 млн кубометров. Волна украинских БПЛА преодолела региональную противовоздушную оборону и поразила резервуарный кластер. В результате прямых попаданий вспыхнул масштабный пожар: загорелись шесть резервуаров РВС емкостью по 20 тысяч кубометров каждый, а шлейф черного дыма фиксировался со спутников на десятки километров. Из-за разрушений технологической инфраструктуры была остановлена прокачка нефти по стратегическому нефтепроводу Атырау — Самара, что парализовало экспортные поставки и усугубило дефицит топлива в европейской части РФ.",
    "source": "Губернатор Самарской области, Минэнерго Казахстана, ASTRA, @ASupersharij, Supernova+, Exilenova+, ТАСС"
  },
  "uk": {
    "region": "Самарська область, Волзький район, с-ще Просвіт",
    "target": "ЛВДС «Самара» (АТ «Транснафта — Приволжжя») — лінійна виробничо-диспетчерська станція",
    "category": "Нафтогаз",
    "weapon": "Далекобійні БпЛА",
    "details": "У ніч проти 2 листопада 2026 року Сили оборони України завдали масованого удару далекобійними дронами-камікадзе по лінійній виробничо-диспетчерській станції «Самара» (АТ «Транснафта — Приволжя») поблизу селища Просвіт у Самарській області. Об'єкт слугує найбільшим у Європі вузлом змішування та перекачування нафти проєктною потужністю до 130 млн тонн на рік, а його парк налічував понад 70 резервуарів загальною місткістю понад 1,6 млн кубометрів. Група українських безпілотників подолала протиповітряну оборону супротивника та вразила резервуарний сектор. Унаслідок точних влучань спалахнула масштабна пожежа: вогнем охопило шість резервуарів РВС місткістю по 20 тисяч кубічних метрів кожен, а шлейф чорного диму зафіксували супутники на відстані десятків кілометрів. Через ураження технологічної інфраструктури було екстрено зупинено транспортування нафти магістральним нафтопроводом Атирау — Самара, що зірвало експортні потоки та вдарило по забезпеченню паливом військ агресора.",
    "source": "Губернатор Самарської області, Міненерго Казахстану, ASTRA, @ASupersharij, Supernova+, Exilenova+, ТАРС"
  },
  "en": {
    "region": "Samara Oblast, Volzhsky District, Prosvet settlement",
    "target": "Samara Oil Pipeline Dispatch Station (Transneft-Privolga) — crude dispatch and blending hub",
    "category": "Oil & Gas",
    "weapon": "Long-range UAVs",
    "details": "On the night of November 2, 2026, Ukrainian Defense Forces launched a coordinated long-range drone strike against the Samara crude oil dispatch station (Transneft-Privolga) near Prosvet in Samara Oblast. As Europe's largest oil transportation hub, the complex handles up to 130 million tons of crude oil annually, with a massive tank farm consisting of over 70 tanks with a total capacity exceeding 1.6 million cubic meters. Strike UAVs bypassed local air defenses and scored direct hits across the storage tank area. The attack ignited a massive blaze that engulfed six 20,000 cubic meter storage tanks, sending a dense smoke plume extending for dozens of kilometers that was captured by orbital satellites. Due to heavy damage to pumping and manifold infrastructure, crude transit through the critical Atyrau-Samara trunk pipeline was completely halted, disrupting export logistics and cutting supply routes vital for Russian military fueling operations.",
    "source": "Samara Oblast Governor, Kazakhstan Ministry of Energy, ASTRA, @ASupersharij, Supernova+, Exilenova+, TASS"
  },
  "images": [
    "video/samara_lpds_0211_vid1.mp4",
    "video/samara_lpds_0211_vid2.mp4",
    "images/samara_lpds_0211_img1.jpg",
    "images/samara_lpds_0211_img2.jpg",
    "images/samara_lpds_0211_img3.jpg"
  ],
  "id": 566
};

if (strikeData.some(s => s.id === 566 || (s.date === '02.11.2026' && s.ru.target.includes('ЛПДС «Самара»')))) {
    console.log('Entry already exists!');
} else {
    strikeData.unshift(newEntry);
    fs.writeFileSync('data.js', 'const strikeData = ' + JSON.stringify(strikeData, null, 2) + ';\n', 'utf8');
    console.log('Successfully added entry id 566 to data.js! Total strikes:', strikeData.length);
}
