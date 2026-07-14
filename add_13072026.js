const fs = require('fs');

const newItems = [
  {
    "date": "13.07.2026",
    "lat": 46.4730,
    "lng": 41.5519,
    "distance": null,
    "images": [
      "images/tsim1.jpg",
      "images/tsim2.jpg",
      "video/tsim.mp4"
    ],
    "ru": {
      "region": "Ростовская область, Цимлянск",
      "target": "Цимлянская нефтебаза (АО «РН-Ростовнефтепродукт»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 13 июля 2026 года Цимлянская нефтебаза, принадлежащая структуре «Роснефти», подверглась точной атаке украинских дронов. После попадания на объекте, где хранились значительные запасы бензина и дизельного топлива для нужд оккупационной группировки, вспыхнул масштабный пожар. Пожару был присвоен третий ранг сложности, огонь охватил площадь более 200 квадратных метров, создав серьезную угрозу для соседних резервуаров. Для ликвидации последствий местным властям пришлось задействовать десятки пожарных расчетов и специализированный пожарный поезд. Эта нефтебаза играла важную роль в логистической цепочке поставок горючего на южное направление фронта. Удар стал очередным этапом планомерного разрушения нефтяной инфраструктуры РФ.",
      "source": "СМИ РФ, OSINT-аналитики"
    },
    "uk": {
      "region": "Ростовська область, Цимлянськ",
      "target": "Цимлянська нафтобаза (АТ «РН-Ростовнафтопродукт»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч на 13 липня 2026 року Цимлянська нафтобаза, що належить структурі «Роснафти», зазнала точної атаки українських дронів. Після влучання на об'єкті, де зберігалися значні запаси бензину та дизельного пального для потреб окупаційного угруповання, спалахнула масштабна пожежа. Пожежі було присвоєно третій ранг складності, вогонь охопив площу понад 200 квадратних метрів, створивши серйозну загрозу для сусідніх резервуарів. Для ліквідації наслідків місцевій владі довелося задіяти десятки пожежних розрахунків та спеціалізований пожежний поїзд. Ця нафтобаза відігравала важливу роль у логістичному ланцюжку постачання пального на південний напрямок фронту. Удар став черговим етапом планомірного руйнування нафтової інфраструктури РФ.",
      "source": "ЗМІ РФ, OSINT-аналітики"
    },
    "en": {
      "region": "Rostov Oblast, Tsimlyansk",
      "target": "Tsimlyansk Oil Depot (RN-Rostovnefteprodukt JSC)",
      "category": "Oil and Gas",
      "weapon": "Drone",
      "details": "On the night of July 13, 2026, the Tsimlyansk oil depot, owned by a Rosneft subsidiary, was accurately targeted by Ukrainian drones. Following the strike, a massive fire broke out at the facility, which stored significant reserves of gasoline and diesel fuel for the needs of the occupying forces. The fire was assigned the third rank of complexity, engulfing an area of over 200 square meters and posing a serious threat to neighboring tanks. To mitigate the consequences, local authorities had to deploy dozens of firefighting crews and a specialized firefighting train. This oil depot played an important role in the logistics chain of fuel supplies to the southern front. The strike marked another step in the systematic destruction of Russia's oil infrastructure.",
      "source": "Russian Media, OSINT analysts"
    }
  },
  {
    "date": "13.07.2026",
    "lat": 45.148,
    "lng": 42.062,
    "distance": null,
    "images": [
      "images/vyazniki1.jpg",
      "images/vyazniki2.jpg",
      "video/vyazniki.mp4"
    ],
    "ru": {
      "region": "Ставропольский край, Михайловск (х. Вязники)",
      "target": "Нефтебаза ООО «Корона»",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 13 июля 2026 года украинские ударные БПЛА успешно атаковали промышленную зону в хуторе Вязники Ставропольского края, где расположена нефтебаза ООО «Корона». В результате точечного попадания вспыхнул мощный пожар, сопровождавшийся горением резервуаров с нефтепродуктами. Стоит отметить, что это уже вторая успешная атака на нефтебазы в этом населенном пункте за последнюю неделю, что свидетельствует о системном подходе к уничтожению местной топливной логистики. Местные власти были вынуждены ввести режим чрезвычайной ситуации муниципального уровня из-за масштабов возгорания. Уничтожение данного объекта дополнительно усложняет логистику и обеспечение топливом подразделений российской армии, действующих на Северном Кавказе и юге.",
      "source": "OSINT-аналитики, СМИ РФ"
    },
    "uk": {
      "region": "Ставропольський край, Михайловськ (х. В'язники)",
      "target": "Нафтобаза ТОВ «Корона»",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч на 13 липня 2026 року українські ударні БПЛА успішно атакували промислову зону в хуторі В'язники Ставропольського краю, де розташована нафтобаза ТОВ «Корона». Внаслідок точкового влучання спалахнула потужна пожежа, що супроводжувалася горінням резервуарів з нафтопродуктами. Варто зазначити, що це вже друга успішна атака на нафтобази в цьому населеному пункті за останній тиждень, що свідчить про системний підхід до знищення місцевої паливної логістики. Місцева влада була змушена запровадити режим надзвичайної ситуації муніципального рівня через масштаби займання. Знищення даного об'єкта додатково ускладнює логістику та забезпечення пальним підрозділів російської армії, що діють на Північному Кавказі та півдні.",
      "source": "OSINT-аналітики, ЗМІ РФ"
    },
    "en": {
      "region": "Stavropol Krai, Mikhaylovsk (Vyazniki settlement)",
      "target": "Korona LLC Oil Depot",
      "category": "Oil and Gas",
      "weapon": "Drone",
      "details": "On the night of July 13, 2026, Ukrainian strike UAVs successfully attacked an industrial zone in the Vyazniki settlement of Stavropol Krai, where the Korona LLC oil depot is located. The pinpoint strike resulted in a massive fire, accompanied by the burning of petroleum product storage tanks. It is worth noting that this is the second successful attack on oil depots in this settlement within the last week, demonstrating a systematic approach to dismantling local fuel logistics. Local authorities were forced to declare a municipal-level state of emergency due to the scale of the blaze. The destruction of this facility further complicates the logistics and fuel supply for Russian army units operating in the North Caucasus and the south.",
      "source": "OSINT analysts, Russian Media"
    }
  }
];

const content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
let data = new Function('return ' + dataStr)();

// Unshift to put them at the beginning (newest first)
data.unshift(...newItems);

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log('Added July 13 events to data.js');
