const fs = require('fs');

function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

const referenceCities = [
    { name: 'Херсон', lat: 46.6354, lon: 32.6169 },
    { name: 'Запорожье', lat: 47.8388, lon: 35.1396 },
    { name: 'Харьков', lat: 49.9935, lon: 36.2304 },
    { name: 'Сумы', lat: 50.9077, lon: 34.7981 },
    { name: 'Чернигов', lat: 51.4982, lon: 31.2893 },
    { name: 'Краматорск', lat: 48.7390, lon: 37.5844 }
];

function calcMinDistance(lat, lng) {
    let minDist = Infinity;
    for (const city of referenceCities) {
        const d = haversine(lat, lng, city.lat, city.lon);
        if (d < minDist) minDist = d;
    }
    return Math.round(minDist);
}

const newItems = [
  {
    "date": "09.09.2026",
    "lat": 66.0842,
    "lng": 76.6631,
    "distance": calcMinDistance(66.0842, 76.6631),
    "ru": {
      "region": "Ямало-Ненецкий автономный округ, Новый Уренгой",
      "target": "Новоуренгойский завод по подготовке конденсата к транспорту (ЗПКТ филиал ООО «Газпром переработка»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "9 сентября 2026 года дальнобойные ударные дроны подразделения Deep Strike ССО ВСУ атаковали Новоуренгойский завод по подготовке конденсата к транспорту в ЯНАО. Этот объект компании «Газпром переработка» перерабатывает до 19,5 миллиона тонн углеводородного сырья в год и подготавливает нестабильный конденсат для магистрального конденсатопровода Уренгой — Сургут. Беспилотники преодолели около 2875 километров, нанеся самый глубокий удар в тыл противника с начала полномасштабной войны. На технологической площадке предприятия прозвучало несколько взрывов, после чего на установке деэтанизации вспыхнул сильный пожар с плотным задымлением. Заводской персонал экстренно эвакуировали в укрытия, технологические линии временно остановили. Губернатор Ямало-Ненецкого автономного округа подтвердил возгорание на промышленном объекте, а в аэропортах Надыма и Нового Уренгоя вводили экстренные ограничения на полеты.",
      "source": "ССО ВСУ, Генштаб ВСУ, губернатор ЯНАО, ASTRA, росСМИ"
    },
    "uk": {
      "region": "Ямало-Ненецький автономний округ, Новий Уренгой",
      "target": "Новоуренгойський завод з підготовки конденсату до транспорту (ЗПКТ філія ТОВ «Газпром переработка»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "9 вересня 2026 року далекобійні ударні дрони підрозділу Deep Strike ССО ЗСУ атакували Новоуренгойський завод із підготовки конденсату до транспорту в ЯНАО. Цей об'єкт компанії «Газпром переработка» переробляє до 19,5 мільйона тонн сировини на рік і готує нестабільний конденсат для магістрального конденсатопроводу Уренгой — Сургут. Українські безпілотники подолали близько 2875 кілометрів, здійснивши найглибший результативний удар у ворожий тил за увесь час війни. На технологічному майданчику заводу пролунала серія вибухів, після чого на установці деетанізації спалахнула потужна пожежа з густим димом. Персонал підприємства терміново евакуювали в укриття, а частину виробничих ліній довелося аварійно зупинити. Губернатор Ямало-Ненецького автономного округу визнав факт удару та займання, а в аеропортах Нового Уренгоя та Надима екстрено запроваджували план «Килим».",
      "source": "ССО ЗСУ, Генштаб ЗСУ, губернатор ЯНАО, ASTRA, росЗМІ"
    },
    "en": {
      "region": "Yamalo-Nenets Autonomous Okrug, Novy Urengoy",
      "target": "Novy Urengoy Condensate Treatment Plant (ZPKT Branch of Gazprom Pererabotka LLC)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On September 9, 2026, long-range strike drones operated by the Deep Strike unit of the Ukrainian Special Operations Forces attacked the Novy Urengoy Condensate Treatment Plant in the Yamalo-Nenets Autonomous Okrug. The Gazprom Pererabotka facility processes up to 19.5 million tons of raw hydrocarbons annually, stabilizing unstable gas condensate for transport through the Urengoy–Surgut pipeline. Flying roughly 2,875 kilometers, the drones delivered the deepest confirmed strike inside Russian territory since the outbreak of the war. Multiple detonations rocked the industrial complex, igniting a heavy fire across the condensate de-ethanization unit with dense plumes of smoke. Factory staff were immediately evacuated into shelters while production lines underwent emergency shutdowns. The regional governor acknowledged the fire at the industrial site, while airports in Novy Urengoy and Nadym enforced emergency airspace closures.",
      "source": "SOF of AFU, General Staff of AFU, Governor of YNAO, ASTRA, Russian Media"
    }
  },
  {
    "date": "09.09.2026",
    "lat": 65.0870,
    "lng": 77.7960,
    "distance": calcMinDistance(65.0870, 77.7960),
    "ru": {
      "region": "Ямало-Ненецкий автономный округ, Пуровский район (ж/д разъезд Лимбей)",
      "target": "Пуровский завод по переработке конденсата (Пуровский ЗПК — ПАО «НОВАТЭК»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "9 сентября 2026 года в рамках масштабной арктической операции ССО ВСУ украинские дроны атаковали Пуровский завод по переработке конденсата возле железнодорожного разъезда Лимбей. Это предприятие компании «НОВАТЭК» проектной мощностью 12 миллионов тонн в год считается ключевым звеном переработки деэтанизированного конденсата с месторождений Ямала, производя нафту и сжиженные газы. Беспилотники преодолели около 2900 километров, точно поразив технологическую зону перерабатывающего завода. В результате попаданий на территории емкостного парка и компрессорных блоков вспыхнул открытый огонь, сопровождавшийся вторичной детонацией углеводородов. В Пуровском районе экстренно объявили режим воздушной тревоги, а пожарные расчеты стянули к промзоне для тушения горящих технологических узлов. Российские власти отчитались о перехвате целей, но признали локализацию масштабного пожара на объекте ТЭК.",
      "source": "ССО ВСУ, Генштаб ВСУ, экстренные службы ЯНАО, росСМИ"
    },
    "uk": {
      "region": "Ямало-Ненецький автономний округ, Пуровський район (залізничний роз'їзд Лімбей)",
      "target": "Пуровський завод з переробки конденсату (Пуровський ЗПК — ПАТ «НОВАТЕК»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "9 вересня 2026 року в межах масштабної арктичної операції ССО ЗСУ українські дрони вдарили по Пуровському заводу з переробки конденсату біля роз'їзду Лімбей. Це флагманське підприємство компанії «НОВАТЕК» потужністю 12 мільйонів тонн на рік є головним центром переробки газового конденсату з родовищ Ямалу, випускаючи нафту та скраплений газ. Безпілотники пройшли близько 2900 кілометрів і успішно уразили виробничий сектор заводу. Внаслідок вибухів у районі резервуарних ємностей та компресорних станцій спалахнула велика пожежа з детонацією залишків палива. У Пуровському районі терміново оголошували режим повітряної загрози, а до палаючого комплексу спрямували пожежні потяги та рятувальні розрахунки. Російські джерела заявили про роботу протиповітряної оборони, проте змушені були підтвердити займання на об'єкті паливно-енергетичного комплексу.",
      "source": "ССО ЗСУ, Генштаб ЗСУ, екстрені служби ЯНАО, росЗМІ"
    },
    "en": {
      "region": "Yamalo-Nenets Autonomous Okrug, Purovsky District (Limbey siding)",
      "target": "Purovsky Condensate Processing Plant (Purovsky ZPK — PJSC NOVATEK)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On September 9, 2026, as part of a coordinated Arctic deep strike operation by the Ukrainian Special Operations Forces, strike drones attacked the Purovsky Condensate Processing Plant near the Limbey railway junction. Operated by NOVATEK with an annual capacity of 12 million tons, the facility serves as a vital processing hub for de-ethanized gas condensate from Yamal fields, producing stable naphtha and liquefied petroleum gases. The drones traveled roughly 2,900 kilometers to strike the processing sector directly. Hits across the storage tanks and compressor units caused a massive explosion, sparking an intense fire fueled by pressurized hydrocarbons. Regional authorities promptly declared a drone alert across the Purovsky district and deployed emergency fire engines and specialized trains to the burning site. Russian officials claimed defense systems engaged the drones, though they subsequently confirmed a fire at the fuel and energy site.",
      "source": "SOF of AFU, General Staff of AFU, YNAO Emergency Services, Russian Media"
    }
  },
  {
    "date": "09.09.2026",
    "lat": 45.0021,
    "lng": 37.3473,
    "distance": calcMinDistance(45.0021, 37.3473),
    "ru": {
      "region": "Краснодарский край, Анапа (пос. Витязево)",
      "target": "Военный сектор аэродрома «Анапа» (Витязево)",
      "category": "Военный аэродром",
      "weapon": "Дрон",
      "details": "В ночь на 9 сентября 2026 года Силы беспилотных систем ВСУ нанесли прицельный удар по военному сектору аэродрома «Анапа» возле поселка Витязево. Этот аэродром совместного базирования активно используется российской морской и штурмовой авиацией для боевых вылетов над Черным морем и южным участком фронта. Подразделения операторов БПЛА прорвали эшелонированную противовоздушную оборону черноморского побережья. В результате точных прилетов по стоянкам авиатехники был полностью уничтожен редкий палубный истребитель Су-33, а также многоцелевой вертолет Ми-8 армейской авиации. На рулежных дорожках и около ангарных стоянок начался сильный пожар, сопровождавшийся детонацией оборудования. Командующий СБС Роберт «Мадяр» Бровди официально подтвердил успешную ликвидацию российской боевой авиации на объекте, тогда как Минобороны РФ заявило лишь о сбитии дронов над морем.",
      "source": "Командование СБС ВСУ, Генштаб ВСУ, ASTRA, росСМИ"
    },
    "uk": {
      "region": "Краснодарський край, Анапа (с-ще Витязеве)",
      "target": "Військовий сектор аеродрому «Анапа» (Витязеве)",
      "category": "Військовий аеродром",
      "weapon": "Дрон",
      "details": "У ніч проти 9 вересня 2026 року Сили безпілотних систем ЗСУ завдали прицільного удару по військовому сектору аеродрому «Анапа» поблизу селища Витязеве. Летовище спільного базування активно використовується морською та армійською авіацією окупантів для контролю акваторії Чорного моря та підтримки військ на півдні. Українські ударні дрони зуміли прорвати щільну систему ППО прибережної зони. Прямими влучаннями по відкритих стоянках літаків було повністю знищено рідкісний палубний винищувач Су-33 та багатоцільовий гелікоптер Мі-8. На території військового сектора спалахнула пожежа, яку супроводжували глухі вибухи боєприпасів і технічного обладнання. Командувач СБС Роберт «Мадяр» Бровді публічно підтвердив знищення двох ворожих бортів, тоді як Міноборони РФ обмежилося традиційними заявами про перехоплення безпілотників над морем.",
      "source": "Командування СБС ЗСУ, Генштаб ЗСУ, ASTRA, росЗМІ"
    },
    "en": {
      "region": "Krasnodar Krai, Anapa (Vityazevo village)",
      "target": "Military Sector of Anapa Airfield (Vityazevo)",
      "category": "Military Airbase",
      "weapon": "Drone",
      "details": "Overnight into September 9, 2026, the Ukrainian Unmanned Systems Forces executed a precision strike against the military sector of the Anapa airfield near Vityazevo. The joint-use airbase is actively utilized by Russian naval and assault aviation for operational sorties over the Black Sea and across the southern frontline. Ukrainian strike drones successfully bypassed layered air defense batteries stationed along the coastline. Direct hits on aircraft tarmac parking aprons completely destroyed a rare Su-33 carrier-based fighter alongside a Mi-8 multipurpose transport helicopter. The blast ignited a fierce blaze near the taxiways and maintenance hangars, triggering secondary explosions of ground equipment. USF Commander Robert 'Madyar' Brovdi officially confirmed the destruction of both combat aircraft, while the Russian Defense Ministry merely claimed it intercepted incoming drones over the sea.",
      "source": "Command of USF AFU, General Staff of AFU, ASTRA, Russian Media"
    }
  },
  {
    "date": "09.09.2026",
    "lat": 44.7340,
    "lng": 37.7960,
    "distance": calcMinDistance(44.7340, 37.7960),
    "ru": {
      "region": "Краснодарский край, Новороссийск (Восточный район порта)",
      "target": "Новороссийский мазутный терминал (ООО «НМТ» — ПАО «НМТП»)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "В ночь на 9 сентября 2026 года группа украинских ударных дронов атаковала мазутный терминал в морском торговом порту Новороссийска. Предприятие ООО «Новороссийский мазутный терминал» входит в состав группы НМТП и обеспечивает перевалку до пяти миллионов тонн мазута и темных нефтепродуктов ежегодно, являясь ключевым логистическим узлом бункеровки флота. В результате попадания нескольких дронов на площадке резервуарного парка прогремела серия громких взрывов, после чего вспыхнул мощный пожар. Высокий столб пламени и дыма поднялся над восточной частью Цемесской бухты, а зарево наблюдали жители многих прибрежных кварталов. Осколками и огнем были повреждены технологические перекачивающие трубопроводы и наливные эстакады. В городе на несколько часов объявили тревогу и перекрывали движение по портовой набережной, при этом региональные власти признали возгорание на территории предприятий.",
      "source": "Генштаб ВСУ, ВМС ВСУ, ASTRA, мэр Новороссийска, росСМИ"
    },
    "uk": {
      "region": "Краснодарський край, Новоросійськ (Східний район порту)",
      "target": "Новоросійський мазутний термінал (ТОВ «НМТ» — ПАТ «НМТП»)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "У ніч проти 9 вересня 2026 року група українських ударних безпілотників атакувала мазутний термінал у морському порту Новоросійська. Підприємство ТОВ «Новоросійський мазутний термінал» входить до групи НМТП і щорічно перевантажує до п'яти мільйонів тонн важких нафтопродуктів та мазуту, відіграючи ключову роль у бункеруванні морських сил ворога. Внаслідок влучання дронів-камікадзе на території резервуарного парку прогриміла серія потужних вибухів, після чого виникла масштабна пожежа. Густий стовп чорного диму та відкрите полум'я піднялися над східною частиною Цемеської бухти, що зафіксували численні місцеві жителі. Удар пошкодив трубопроводи перекачування палива та зливо-наливні залізничні естакади. У Новоросійську понад три години лунали сирени, поліція перекривала набережну, а місцева влада була змушена визнати пожежі на промислових об'єктах міста.",
      "source": "Генштаб ЗСУ, ВМС ЗСУ, ASTRA, мер Новоросійська, росЗМІ"
    },
    "en": {
      "region": "Krasnodar Krai, Novorossiysk (Eastern Port District)",
      "target": "Novorossiysk Fuel Oil Terminal (Novorossiysk Fuel Oil Terminal LLC — NCSP PJSC)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "Overnight into September 9, 2026, a swarm of Ukrainian strike drones targeted the fuel oil terminal within the commercial seaport of Novorossiysk. The facility, operated by Novorossiysk Fuel Oil Terminal LLC under the NCSP Group, handles up to five million tons of heavy petroleum products and fuel oil annually, serving as a critical bunkering supply hub for naval vessels in the Black Sea. Multiple drone impacts across the storage tank farm triggered a series of loud blasts, followed by a raging blaze. Enormous fireballs and thick black smoke columns rose over the eastern shores of Tsemes Bay, visible across numerous residential quarters of the city. Shrapnel and secondary fire damaged fuel-pumping pipelines and loading racks. City authorities sounded air raid sirens for several hours and sealed off portside streets, ultimately acknowledging fires across local industrial premises.",
      "source": "General Staff of AFU, Navy of AFU, ASTRA, Mayor of Novorossiysk, Russian Media"
    }
  },
  {
    "date": "09.09.2026",
    "lat": 44.7214,
    "lng": 37.8286,
    "distance": calcMinDistance(44.7214, 37.8286),
    "ru": {
      "region": "Краснодарский край, Новороссийск (Цемесская бухта)",
      "target": "Новороссийская военно-морская база (НВМБ ЧФ РФ) — стоянка кораблей и фрегат «Адмирал Эссен»",
      "category": "ВПК",
      "weapon": "Ракета / Дрон",
      "details": "В ночь на 9 сентября 2026 года Силы обороны Украины при участии ВМС, СБУ, ГУР и СБС провели комбинированную операцию по Новороссийской военно-морской базе Черноморского флота РФ. После систематических ударов по Севастополю военная гавань Новороссийска стала последней защищенной базой для российских надводных кораблей и носителей крылатых ракет. По данным военного командования Украины, по защищенной акватории Цемесской бухты был нанесен удар модернизированной ракетой «Нептун» и роем ударных БПЛА. Прямое попадание зафиксировано по фрегату проекта 11356Р «Адмирал Эссен», способному нести до восьми ракет «Калибр», в результате чего на палубной надстройке корабля начался сильный пожар. Повреждения также получили причальные сооружения и дежурные катера охраны водного района. В городе ввели план «Ковер» и режим чрезвычайной ситуации, а от взрывной волны выбило стекла в жилых домах вдоль побережья.",
      "source": "ВМС ВСУ, Генштаб ВСУ, Президент Украины, ASTRA, росСМИ"
    },
    "uk": {
      "region": "Краснодарський край, Новоросійськ (Цемеська бухта)",
      "target": "Новоросійська військово-морська база (НВМБ ЧФ РФ) — стоянка кораблів та фрегат «Адмірал Ессен»",
      "category": "ВПК",
      "weapon": "Ракета / Дрон",
      "details": "У ніч проти 9 вересня 2026 року Сили оборони України за участі ВМС, СБУ, ГУР та СБС здійснили комбінований удар по Новоросійській військово-морській базі Чорноморського флоту РФ. Після успішного витіснення сил противника із Севастополя саме Новоросійськ став головним прихистком для ракетоносіїв та бойових кораблів окупантів. За офіційними повідомленнями командування, військову гавань у Цемеській бухті було атаковано модернізованою ракетою «Нептун» і групою дронів. Пряме влучання припало на надбудову фрегата проєкту 11356Р «Адмірал Ессен», який є штатним носієм восьми крилатих ракет «Калібр», спричинивши сильну пожежу на борту. Крім того, осколками пошкоджено швартові пірси та патрульні катери охорони гавані. Влада Новоросійська оголосила надзвичайний стан через падіння уламків у житлових кварталах та руйнування фасадів будівель біля набережної.",
      "source": "ВМС ЗСУ, Генштаб ЗСУ, Президент України, ASTRA, росЗМІ"
    },
    "en": {
      "region": "Krasnodar Krai, Novorossiysk (Tsemes Bay)",
      "target": "Novorossiysk Naval Base (Novorossiysk Naval Base of the Black Sea Fleet) — Warship Berths & Frigate 'Admiral Essen'",
      "category": "Military-Industrial Complex",
      "weapon": "Missile / Drone",
      "details": "Overnight into September 9, 2026, Ukraine's Defense Forces—including the Navy, SBU, HUR, and USF—conducted a combined strike on the Novorossiysk Naval Base of Russia's Black Sea Fleet. Following Ukraine's sustained pressure on Sevastopol, the military harbor of Novorossiysk has become the primary haven for Russia's missile-carrying warships. Ukrainian military commanders confirmed that the secured naval berths inside Tsemes Bay were struck using a modernized Neptune missile and long-range drones. A direct impact was registered on the superstructure of the Project 11356R frigate 'Admiral Essen', a launch platform for up to eight Kalibr cruise missiles, igniting a serious fire aboard the warship. Mooring quays and harbor patrol craft also sustained fragmentation damage. Local officials enacted emergency measures following widespread explosions, with blast waves shattering windows in coastal residential sectors.",
      "source": "Navy of AFU, General Staff of AFU, President of Ukraine, ASTRA, Russian Media"
    }
  }
];

let hasErrors = false;
newItems.forEach((item, idx) => {
  const ruLen = item.ru.details.length;
  const ukLen = item.uk.details.length;
  const enLen = item.en.details.length;

  const ruSentences = item.ru.details.split(/[.!?]+/).filter(x => x.trim().length > 0).length;
  const ukSentences = item.uk.details.split(/[.!?]+/).filter(x => x.trim().length > 0).length;
  const enSentences = item.en.details.split(/[.!?]+/).filter(x => x.trim().length > 0).length;

  console.log(`\nItem ${idx + 1}: ${item.ru.target}`);
  console.log(`  Distance: ${item.distance} km`);
  console.log(`  RU details length: ${ruLen} chars (${ruSentences} sentences)`);
  console.log(`  UK details length: ${ukLen} chars (${ukSentences} sentences)`);
  console.log(`  EN details length: ${enLen} chars (${enSentences} sentences)`);

  if (ruLen < 600 || ruLen > 1000) { console.error(`  [ERROR] RU length out of bounds [600-1000]: ${ruLen}`); hasErrors = true; }
  if (ukLen < 600 || ukLen > 1000) { console.error(`  [ERROR] UK length out of bounds [600-1000]: ${ukLen}`); hasErrors = true; }
  if (enLen < 600 || enLen > 1000) { console.error(`  [ERROR] EN length out of bounds [600-1000]: ${enLen}`); hasErrors = true; }
  if (ruSentences < 4 || ruSentences > 8) { console.error(`  [ERROR] RU sentence count out of bounds [4-8]: ${ruSentences}`); hasErrors = true; }
  if (ukSentences < 4 || ukSentences > 8) { console.error(`  [ERROR] UK sentence count out of bounds [4-8]: ${ukSentences}`); hasErrors = true; }
  if (enSentences < 4 || enSentences > 8) { console.error(`  [ERROR] EN sentence count out of bounds [4-8]: ${enSentences}`); hasErrors = true; }
});

if (hasErrors) {
  console.error('\nFAILED VALIDATION!');
  process.exit(1);
} else {
  console.log('\nALL VALIDATION CHECKS PASSED!');
}

// Load existing data
const dataPath = 'd:/_DEV/Map kick/data.js';
let raw = fs.readFileSync(dataPath, 'utf8').trim();

const varMatch = raw.match(/const\s+(\w+)\s*=\s*\[/);
if (!varMatch) { console.error('Cannot detect variable name'); process.exit(1); }
const varName = varMatch[1];

let jsonStr = raw.replace(new RegExp('^const\\s+' + varName + '\\s*=\\s*'), '').replace(/;\s*$/, '').trim();
let items = JSON.parse(jsonStr);

// Filter out any existing 09.09.2026 items
items = items.filter(x => x.date !== '09.09.2026');

// Get max id
let maxId = 0;
items.forEach(i => { if (i.id && i.id > maxId) maxId = i.id; });

newItems.forEach((item, idx) => {
  item.id = maxId + 1 + idx;
});

// Put new items at the beginning
items = newItems.concat(items);

const newContent = 'const ' + varName + ' = ' + JSON.stringify(items, null, 2) + ';';
fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully updated data.js with ' + newItems.length + ' items for 09.09.2026. Total items: ' + items.length);
