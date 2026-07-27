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

const items = [
  {
    "date": "26.07.2026",
    "lat": 45.4912,
    "lng": 32.7483,
    "distance": null,
    "ru": {
      "region": "Крым, Черноморский район (с. Внуково)",
      "target": "Объект ГУП «Черноморнефтегаз» (с. Внуково)",
      "category": "Нефтегаз",
      "weapon": "Дрон",
      "details": "26 июля 2026 года Генеральный штаб ВСУ подтвердил успешный удар украинских БПЛА по объекту ГУП Черноморнефтегаз в районе села Внуково на западе Крыма. Данная газораспределительная и топливная инфраструктура активно задействовалась оккупационными войсками для добычи, хранения и транспортировки энергетических ресурсов. По данным аэроразведки, несколько дронов-камикадзе поразили технологические узлы перекачки газа и резервуары для хранения топлива. На объекте вспыхнул пожар, сопровождавшийся взрывами оборудования и задымлением территории. Данная станция играла значительную роль в обеспечении энергетических потребностей военных гарнизонов и радиолокационных постов РФ на Тарханкутском полуострове. В результате успешного прилета работа энергетического комплекса была временно заблокирована.",
      "source": "Генштаб ВСУ, OSINT, СМИ"
    },
    "uk": {
      "region": "Крим, Чорноморський район (с. Внукове)",
      "target": "Об'єкт ДУП «Чорноморнафтогаз» (с. Внукове)",
      "category": "Нафтогаз",
      "weapon": "Дрон",
      "details": "26 липня 2026 року Генеральний штаб ЗСУ підтвердив успішний удар українських БПЛА по об'єкту ДУП Чорноморнафтогаз у районі села Внукове на заході Криму. Ця газорозподільча та паливна інфраструктура активно залучалася окупаційними військами для видобутку, зберігання та транспортування енергетичних ресурсів. За даними аеророзвідки, кілька дронів-камікадзе уразили технологічні вузли перекачування газу та резервуари для зберігання пального. На об'єкті спалахнула пожежа, що супроводжувалася вибухами обладнання та задимленням території. Ця станція відігравала значну роль у забезпеченні енергетичних потреб військових гарнізонів та радіолокаційних постів РФ на Тарханкутському півострові. Внаслідок влучання роботу комплексу було призупинено.",
      "source": "Генштаб ЗСУ, OSINT, ЗМІ"
    },
    "en": {
      "region": "Crimea, Chornomorske District (Vnukovo)",
      "target": "Chernomorneftegaz Fuel & Gas Facility (Vnukovo)",
      "category": "Oil & Gas",
      "weapon": "Drone",
      "details": "On July 26, 2026, the General Staff of the Armed Forces of Ukraine confirmed a successful strike by long-range drones against the Chernomorneftegaz facility near Vnukovo in western Crimea. The gas distribution and fuel storage node was extensively used by Russian forces to store and transport energy supplies across the peninsula. According to aerial surveillance reports, multiple kamikaze UAVs struck primary gas pumping modules and fuel tanks. The impact sparked a massive fire, accompanied by secondary equipment explosions and dense smoke columns. The facility served as a key energy node supplying Russian military garrisons and early warning radar stations on the Tarkhankut Peninsula. The precision strike temporarily disrupted fuel and gas operations.",
      "source": "AFU General Staff, OSINT, Media"
    }
  },
  {
    "date": "26.07.2026",
    "lat": 45.5022,
    "lng": 32.7056,
    "distance": null,
    "ru": {
      "region": "Крым, Черноморский район (пгт Черноморское)",
      "target": "Наземный ретранслятор БПЛА «Герань/Гербера» (Черноморское)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "26 июля 2026 года Силы обороны Украины нанесли точечный удар беспилотниками по наземному узловому ретранслятору российских ударных БПЛА в районе пгт Черноморское. Данный радиоэлектронный комплекс использовался военными РФ для расширения радиуса действия и повышения точности управления дронами типа Герань и Гербера. В результате прямого попадания украинского БПЛА были полностью уничтожены антенно-мачтовые конструкции и аппаратный контейнер с телеметрическим оборудованием. Детонация боевой части привела к возгоранию локального дизель-генераторного узла питания. Уничтожение данного ретранслятора существенным образом усложнило навигацию и управление российскими дронами-камикадзе в акватории Черного моря. Данные о поражении подтверждены официальной сводкой Генштаба ВСУ.",
      "source": "Генштаб ВСУ, ГУР, OSINT, СМИ"
    },
    "uk": {
      "region": "Крим, Чорноморський район (смт Чорноморське)",
      "target": "Наземний ретранслятор БПЛА «Герань/Гербера» (Чорноморське)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "26 липня 2026 року Сили оборони України завдали точкового удару безпілотниками по наземному вузловому ретранслятору російських ударних БПЛА у районі смт Чорноморське. Цей радіоелектронний комплекс використовувався військовими РФ для розширення радіуса дії та підвищення точності керування дронами типу Герань і Гербера. Внаслідок прямого влучання українського БПЛА було повністю знищено антенно-щоглові конструкції та апаратний контейнер із телеметричним обладнанням. Детонація бойової частини призвела до займання локального дизель-генераторного вузла живлення. Знищення цього ретранслятора суттєво ускладнило навігацію та керування російськими дронами-камікадзе в акваторії Чорного моря. Дані підтверджено Генштабом ЗСУ.",
      "source": "Генштаб ЗСУ, ГУР, OSINT, ЗМІ"
    },
    "en": {
      "region": "Crimea, Chornomorske District (Chornomorske)",
      "target": "UAV Ground Relay & Control Node (Chornomorske)",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "On July 26, 2026, the Ukrainian Defense Forces executed a precision strike against a Russian ground-based drone relay station near Chornomorske. The specialized electronic installation was operated by Russian military units to extend the range and targeting guidance of Geran and Gerbera strike UAVs. A direct hit by a long-range Ukrainian drone completely destroyed the main antenna mast assembly and the telemetry container. The warhead detonation ignited an adjacent power generation shed supplying the installation. Neutralizing this key relay complex compromised Russian drone control networks operating across the western Black Sea theater. The successful engagement was formally validated in the AFU General Staff operational report.",
      "source": "AFU General Staff, GUR, OSINT, Media"
    }
  },
  {
    "date": "26.07.2026",
    "lat": 45.3354,
    "lng": 32.9512,
    "distance": null,
    "ru": {
      "region": "Крым, Сакский район (пгт Новофёдоровка / Евпатория)",
      "target": "Элементы ЗРК «С-400 Триумф» (Пусковая установка и РЛС)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 26 июля 2026 года Департамент беспилотных систем ГУР МО Украины провел успешную спецоперацию по уничтожению компонентов зенитно-ракетного комплекса С-400 Триумф в западной части Крыма. В ходе ночного налета группа дальнобойных дронов поразила многофункциональную радиолокационную станцию и пусковую установку 5P85С. Прицельный удар привел к взрыву зенитных ракет на пусковой платформе и разрушению антенной системы РЛС. На позиции комплекса возник мощный пожар, сопровождавшийся повторной детонацией боекомплекта. Батарея С-400 обеспечивала прикрытие ключевых военных аэродромов и логистических путей на крымском побережье. Потеря РЛС и пусковой установки существенно ослабила противовоздушную оборону войск РФ в данном секторе.",
      "source": "ГУР МО Украины, OSINT, СМИ"
    },
    "uk": {
      "region": "Крим, Сакський район (смт Новофедорівка / Євпаторія)",
      "target": "Елементи ЗРК «С-400 Тріумф» (Пускова установка та РЛС)",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 26 липня 2026 року Департамент безпілотних систем ГУР МО України провів успішну спецоперацію зі знищення компонентів зенітно-ракетного комплексу С-400 Тріумф у західній частині Криму. Під час нічного нальоту група далекобійних дронів уразила багатофункціональну радіолокаційну станцію та пускову установку 5П85С. Прицільний удар призвів до вибуху зенітних ракет на пусковій платформі та руйнування антенної системи РЛС. На позиції комплексу виникла потужна пожежа, що супроводжувалася повторною детонацією боєкомплекту. Батарея С-400 забезпечувала прикриття військових аеродромів та логістичних шляхів на кримському узбережжі. Втрата РЛС і пускової установки суттєво послабила ППО окупантів у цьому секторі.",
      "source": "ГУР МО України, OSINT, ЗМІ"
    },
    "en": {
      "region": "Crimea, Saky District (Novofedorivka / Yevpatoria)",
      "target": "S-400 Triumf Components (Launcher & Radar)",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "On the night of July 26, 2026, the Unmanned Systems Department of Ukrainian Military Intelligence (GUR) conducted a successful strike against S-400 Triumf air defense components in western Crimea. During the night operation, long-range attack UAVs destroyed a 5P85S TEL launcher unit and a key engagement radar. The direct strike detonated surface-to-air missiles mounted on the launcher and smashed the radar scanner array. A fierce fire broke out at the firing position, triggering secondary cook-offs of ready-to-launch missiles. The S-400 battery provided air defense coverage over vital military airfields and coastal supply hubs. Losing these key elements significantly degraded Russian air defense capabilities across western Crimea.",
      "source": "GUR MO Ukraine, OSINT, Media"
    }
  },
  {
    "date": "26.07.2026",
    "lat": 47.2145,
    "lng": 39.6812,
    "distance": null,
    "ru": {
      "region": "Ростовская область, Ростов-на-Дону",
      "target": "Экспортный портовый терминал (Ростов-на-Дону)",
      "category": "Логистика",
      "weapon": "Дрон",
      "details": "26 июля 2026 года Служба безопасности Украины и ВСУ нанесли совместный удар беспилотными летательными аппаратами по экспортному портовому терминалу в Ростове-на-Дону. В ходе атаки несколько БПЛА самолетного типа преодолели эшелонированную ПВО и поразили портовую инфраструктуру, складские терминалы и погрузочные площадки. Ударом вызвана детонация с последующим выгоранием складов временного хранения и транспортной техники. Портовый комплекс активно использовался для логистического обеспечения войск и экспорта подсанкционной продукции. На месте происшествия работали усиленные отряды МЧС, пожар локализован на значительной площади. Поражение терминала привело к остановке погрузочно-разгрузочных работ и нарушению снабжения.",
      "source": "СБУ, Генштаб ВСУ, OSINT, СМИ"
    },
    "uk": {
      "region": "Ростовська область, Ростов-на-Дону",
      "target": "Експортний портовий термінал (Ростов-на-Дону)",
      "category": "Логістика",
      "weapon": "Дрон",
      "details": "26 липня 2026 року Служба безпеки України та ЗСУ завдали спільного удару безпілотними літальними апаратами по експортному портовому терміналу в Ростові-на-Дону. Під час атаки кілька БПЛА літакового типу подолали ешелоновану ППО та уразили портову інфраструктуру, складські термінали та навантажувальні майданчики. Ударом спричинено детонацію з подальшим вигорянням складів тимчасового зберігання та транспортної техніки. Портовий комплекс активно використовувався для логістичного забезпечення військ та експорту підсанкційної продукції. На місці події працювали посилені загони МНС, пожежу локалізовано на значній площі. Ураження термінала призвело до зупинки навантажувально-розвантажувальних робіт та порушення постачання.",
      "source": "СБУ, Генштаб ЗСУ, OSINT, ЗМІ"
    },
    "en": {
      "region": "Rostov Oblast, Rostov-on-Don",
      "target": "Export Port Terminal (Rostov-on-Don)",
      "category": "Logistics",
      "weapon": "Drone",
      "details": "On July 26, 2026, the Security Service of Ukraine and the AFU launched a joint long-range drone attack against an export port terminal in Rostov-on-Don. Fixed-wing UAVs penetrated local air defense systems to strike dockside infrastructure, storage facilities, and cargo loading zones. The strikes triggered immediate explosions and heavy fires across temporary storage warehouses and transport trucks. The port facility functions as a strategic logistics hub for supplying Russian military formations and handling sanctioned cargo exports. Emergency response crews fought the spreading industrial fire across hundreds of square meters. The destruction at the terminal forced a shutdown of loading operations and severely disrupted regional supply chains.",
      "source": "SBU, AFU General Staff, OSINT, Media"
    }
  },
  {
    "date": "26.07.2026",
    "lat": 50.5912,
    "lng": 36.5889,
    "distance": null,
    "ru": {
      "region": "Белгородская область, Белгород",
      "target": "Военно-ремонтный завод и логистический склад ВПК",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "26 июля 2026 года Силы беспилотных систем ВСУ нанесли удар с использованием дронов по территории ремонтно-механического завода и прилегающего склада ВПК в Белгороде. Целью атаки стали цеха восстановления бронетехники и складские помещения хранения запчастей и спецснаряжения. В результате серии точных попаданий БПЛА на предприятии вспыхнул пожар, сопровождавшийся частичным обрушением кровли производственного корпуса. На складе произошла вторичная детонация ремонтных комплектов и горюче-смазочных материалов. Предприятие играло ключевую роль в оперативном ремонте поврежденной техники группировки войск РФ в приграничной зоне. В результате атаки производственный процесс в ремонтно-механических цехах был полностью остановлен.",
      "source": "СБС, ГУР, OSINT, СМИ"
    },
    "uk": {
      "region": "Бєлгородська область, Бєлгород",
      "target": "Військово-ремонтний завод та логістичний склад ВПК",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "26 липня 2026 року Сили безпілотних систем ЗСУ завдали удару з використанням дронів по території ремонтно-механічного заводу та прилеглого складу ВПК у Бєлгороді. Ціллю атаки стали цехи відновлення бронетехники та складські приміщення зберігання запчастин і спецспорядження. Внаслідок серії влучних влучань БПЛА на підприємстві спалахнула пожежа, що супроводжувалася частковим обваленням покрівлі виробничого корпусу. На складі сталася вторинна детонація ремонтних комплектів та пально-мастильних матеріалів. Підприємство відігравало ключову роль в оперативному ремонті пошкодженої техніки угруповання військ РФ у прикордонній зоні. Внаслідок атаки виробничий процес у цехах було повністю зупинено.",
      "source": "СБС, ГУР, OSINT, ЗМІ"
    },
    "en": {
      "region": "Belgorod Oblast, Belgorod",
      "target": "Military Repair Plant & Defense Storage Hub",
      "category": "Military-Industrial Complex",
      "weapon": "Drone",
      "details": "On July 26, 2026, the Unmanned Systems Forces of Ukraine conducted a drone strike targeting a military mechanical repair plant and adjacent defense storage hub in Belgorod. The attack targeted armored vehicle restoration workshops along with warehouses storing spare parts and tactical gear. Precision drone hits ignited a major fire inside the facility, resulting in a partial roof collapse over the main assembly hall. Secondary explosions of repair kits and lubricants broke out inside the logistics storage area. The plant played a vital role in rapidly repairing and restoring damaged Russian military vehicles deployed along the border. The strike completely halted repair operations and vehicle refurbishing at the site.",
      "source": "SBS, GUR, OSINT, Media"
    }
  }
];

// Validate sentence count & character length
console.log('--- VALIDATING ITEMS ---');
let hasError = false;
items.forEach((item, idx) => {
    item.distance = calcMinDistance(item.lat, item.lng);
    ['ru', 'uk', 'en'].forEach(lang => {
        const text = item[lang].details;
        const charLen = text.length;
        const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);
        const sentenceCount = sentences.length;
        console.log(`Item #${idx+1} [${lang}] Target: "${item[lang].target}": ${charLen} chars, ${sentenceCount} sentences, dist=${item.distance}km.`);
        if (charLen < 600 || charLen > 1000) {
            console.error(`ERROR: Item #${idx+1} [${lang}] char length ${charLen} is outside [600, 1000] range!`);
            hasError = true;
        }
        if (sentenceCount < 4 || sentenceCount > 8) {
            console.error(`ERROR: Item #${idx+1} [${lang}] sentence count ${sentenceCount} is outside [4, 8] range!`);
            hasError = true;
        }
    });
});

if (hasError) {
    console.error('Validation failed!');
    process.exit(1);
}

// Read existing data.js
let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;\n?$/, '').trim();
let data = new Function('return ' + dataStr)();

// Find max ID
let maxId = 0;
data.forEach(item => { if (item.id > maxId) maxId = item.id; });

// Insert items at the beginning of the array so newest items appear first
items.forEach((item, idx) => {
  maxId++;
  item.id = maxId;
  data.unshift(item);
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Successfully added ${items.length} items for date 26.07.2026 into data.js`);
