const fs = require('fs');

const content = fs.readFileSync('data.js', 'utf8');
const dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
const data = new Function('return ' + dataStr)();

const newEntry = {
  "date": "06.11.2026",
  "lat": 44.8717,
  "lng": 38.8336,
  "distance": null,
  "ru": {
    "region": "Краснодарский край, Северский район, пгт Афипский",
    "target": "Афипский нефтеперерабатывающий завод (ООО «Афипский НПЗ») — резервуарный парк",
    "category": "Нефтегаз",
    "weapon": "Дальнобойные БПЛА",
    "details": "В ночь на 6 ноября 2026 года Силы обороны Украины провели массированную атаку дальнобойными дронами-камикадзе на Афипский нефтеперерабатывающий завод в Краснодарском крае. Предприятие проектной мощностью более 6,2 миллиона тонн нефти в год входит в число крупнейших НПЗ юга России и обеспечивает снабжение группировок ВС РФ и кораблей Черноморского флота дизельным топливом, мазутом и авиакеросином. Несколько волн ударных беспилотников преодолели заградительный огонь ПВО и поразили резервуарный парк предприятия, а также нанесли повреждения технологической инфраструктуре на основной площадке. В результате прилётов на территории завода вспыхнул сильный пожар, а густые столбы чёрного дыма заволокли окрестности и достигли окраин Краснодара, находящегося в двадцати километрах. Местные власти и оперштаб подтвердили возгорание на промышленном объекте Северского района. Из-за поражения резервуаров и повреждения перекачивающих узлов технологический цикл предприятия был частично нарушен.",
    "source": "Оперштаб Краснодарского края, ASTRA, @ASupersharij, Supernova+, Exilenova+, ТАСС, РИА Новости"
  },
  "uk": {
    "region": "Краснодарський край, Северський район, смт Афіпський",
    "target": "Афіпський нафтопереробний завод (ТОВ «Афіпський НПЗ») — резервуарний парк",
    "category": "Нафтогаз",
    "weapon": "Далекобійні БпЛА",
    "details": "У ніч проти 6 листопада 2026 року Сили оборони України здійснили масовану атаку далекобійними безпілотниками на Афіпський нафтопереробний завод у Краснодарському краї. Підприємство з річною потужністю переробки понад 6,2 мільйона тонн сировини є одним із найважливіших нафтопереробних вузлів півдня Росії та забезпечує військові з'єднання РФ і кораблі Чорноморського флоту дизелем, мазутом і авіагасом. Хвилі ударних дронів прорвали протиповітряну оборону та завдали влучних ударів по резервуарному парку заводу, а також зачепили технологічні установки на виробничому майданчику. На території підприємства спалахнула потужна пожежа, а величезний шлейф чорного диму затягнув навколишні населені пункти і дійшов до околиць Краснодара, розташованого за двадцять кілометрів. Оперштаб регіону підтвердив факт займання на промисловому об'єкті в Северському районі. Ураження резервуарів спричинило аварійні збої у технологічному процесі переробки.",
    "source": "Оперштаб Краснодарського краю, ASTRA, @ASupersharij, Supernova+, Exilenova+, ТАРС, РІА Новини"
  },
  "en": {
    "region": "Krasnodar Krai, Seversky District, Afipsky",
    "target": "Afipsky Oil Refinery (Afipsky Refinery LLC) — tank farm",
    "category": "Oil & Gas",
    "weapon": "Long-range UAVs",
    "details": "On the night of November 6, 2026, the Ukrainian Defense Forces launched a massive long-range strike drone attack against the Afipsky Oil Refinery in Krasnodar Krai. With an annual crude processing capacity exceeding 6.2 million tons, the refinery serves as a strategic fuel supplier for Russian armed forces and the Black Sea Fleet, producing vital diesel, fuel oil, and jet kerosene. Multiple waves of kamikaze UAVs penetrated local air defenses, delivering direct hits on the refinery's tank farm and inflicting damage on primary processing units within the main facility. The impacts triggered extensive fires, with massive columns of dense black smoke blanketing surrounding communities and reaching the outskirts of Krasnodar, located twenty kilometers away. Regional authorities confirmed industrial fires across Seversky District. Destruction in the storage park and pipeline junctions caused significant disruptions to the facility's crude refining operations.",
    "source": "Operational HQ of Krasnodar Krai, ASTRA, @ASupersharij, Supernova+, Exilenova+, TASS, RIA Novosti"
  },
  "images": [
    "video/afipsky_npz_0611_vid1.mp4",
    "video/afipsky_npz_0611_vid2.mp4",
    "images/afipsky_npz_0611_img1.jpg",
    "images/afipsky_npz_0611_img2.jpg",
    "images/afipsky_npz_0611_img3.jpg",
    "images/afipsky_npz_0611_img4.jpg"
  ],
  "id": 571
};

data.unshift(newEntry);

fs.writeFileSync('data.js', 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n');
console.log('Added entry 571 for 06.11.2026!');
