const fs = require('fs');

const descriptions = [
  {
    targetPart: 'Белгородское ЛПУМГ',
    images: [],
    ru: 'Белгородское линейное производственное управление магистральных газопроводов является важнейшим узлом газотранспортной системы региона. Оно отвечает за распределение и бесперебойную подачу газа как гражданским, так и промышленным потребителям, включая предприятия ВПК. Поражение такого объекта нарушает логистику энергоносителей, усложняя работу местной промышленности. Кроме того, пожары на газовой инфраструктуре требуют значительных ресурсов для ликвидации и наносят ощутимый экономический ущерб государству-агрессору.',
    uk: 'Бєлгородське лінійне виробниче управління магістральних газопроводів є найважливішим вузлом газотранспортної системи регіону. Воно відповідає за розподіл і безперебійне постачання газу як цивільним, так і промисловим споживачам, включаючи підприємства ВПК. Ураження такого об\'єкта порушує логістику енергоносіїв, ускладнюючи роботу місцевої промисловості. Крім того, пожежі на газовій інфраструктурі вимагають значних ресурсів для ліквідації та завдають відчутних економічних збитків державі-агресору.',
    en: 'The Belgorod linear production department of main gas pipelines is a crucial node in the region\'s gas transmission system. It is responsible for the distribution and uninterrupted supply of gas to both civilian and industrial consumers, including military-industrial complex enterprises. Striking such a facility disrupts energy logistics, complicating the operation of local industry. Furthermore, fires at gas infrastructure facilities require significant resources to extinguish and cause substantial economic damage to the aggressor state.'
  },
  {
    targetPart: 'Морская цель',
    images: [],
    ru: 'Акватория севернее Керчи является критически важной для российской военной логистики. Через этот район проходят маршруты снабжения оккупационной группировки в Крыму и на юге Украины. Поражение морских целей в этой зоне ограничивает возможности Черноморского флота РФ и усложняет транспортировку топлива и боеприпасов. Подобные инциденты также создают дополнительное напряжение для российских сил ПВО и береговой охраны, вынуждая их отвлекать ресурсы на защиту морских путей.',
    uk: 'Акваторія на північ від Керчі є критично важливою для російської військової логістики. Через цей район проходять маршрути постачання окупаційного угруповання в Криму та на півдні України. Ураження морських цілей у цій зоні обмежує можливості Чорноморського флоту РФ та ускладнює транспортування палива й боєприпасів. Подібні інциденти також створюють додаткову напругу для російських сил ППО та берегової охорони, змушуючи їх відволікати ресурси на захист морських шляхів.',
    en: 'The waters north of Kerch are critically important for Russian military logistics. Supply routes for the occupying forces in Crimea and southern Ukraine pass through this area. Striking naval targets in this zone limits the capabilities of the Russian Black Sea Fleet and complicates the transportation of fuel and ammunition. Such incidents also create additional strain on Russian air defense and coast guard forces, forcing them to divert resources to protect sea lanes.'
  },
  {
    targetPart: 'Первый Завод',
    images: ['images/miniNPZ-070726.jpg'],
    ru: '«Первый Завод» — крупнейшее нефтеперерабатывающее предприятие Калужской области. Завод специализируется на переработке товарной нефти и газового конденсата, производя дизельное топливо, мазут и другие нефтепродукты. Продукция предприятия активно используется для обеспечения нужд российской армии, в том числе для заправки военной техники. Регулярные удары по таким мини-НПЗ снижают общие мощности переработки в РФ, создавая дефицит топлива на внутреннем рынке и нарушая ритмичность военных поставок. Успешная атака вызвала масштабный пожар, надолго остановивший технологический процесс.',
    uk: '«Первый Завод» — найбільше нафтопереробне підприємство Калузької області. Завод спеціалізується на переробці товарної нафти та газового конденсату, виробляючи дизельне паливо, мазут та інші нафтопродукти. Продукція підприємства активно використовується для забезпечення потреб російської армії, зокрема для заправки військової техніки. Регулярні удари по таких міні-НПЗ знижують загальні потужності переробки в РФ, створюючи дефіцит палива на внутрішньому ринку та порушуючи ритмічність військових поставок. Успішна атака спричинила масштабну пожежу, що надовго зупинила технологічний процес.',
    en: '\"Perviy Zavod\" is the largest oil refinery in the Kaluga region. The plant specializes in processing commercial oil and gas condensate, producing diesel fuel, fuel oil, and other petroleum products. The enterprise\'s output is actively used to meet the needs of the Russian army, including fueling military equipment. Regular strikes on such mini-refineries reduce overall refining capacity in the Russian Federation, creating a fuel shortage in the domestic market and disrupting the rhythm of military supplies. The successful attack caused a large-scale fire, halting the technological process for a long time.'
  },
  {
    targetPart: 'Краснозаводский химический завод',
    images: ['images/photo1.jpg'],
    ru: 'Краснозаводский химический завод (КХЗ) — одно из старейших и важнейших предприятий оборонно-промышленного комплекса России. Завод специализируется на выпуске боеприпасов, сигнальных и осветительных средств, а также компонентов для ракетного вооружения. Продукция КХЗ напрямую поставляется на фронт для использования оккупационными войсками. Удар по производственным цехам завода нарушает цепочки поставок взрывчатых веществ и боеприпасов. Это снижает огневую мощь российской артиллерии и авиации, оказывая непосредственное влияние на боеспособность армии РФ.',
    uk: 'Краснозаводський хімічний завод (КХЗ) — одне з найстаріших і найважливіших підприємств оборонно-промислового комплексу Росії. Завод спеціалізується на випуску боєприпасів, сигнальних і освітлювальних засобів, а також компонентів для ракетного озброєння. Продукція КХЗ безпосередньо постачається на фронт для використання окупаційними військами. Удар по виробничих цехах заводу порушує ланцюжки постачання вибухових речовин і боєприпасів. Це знижує вогневу міць російської артилерії та авіації, безпосередньо впливаючи на боєздатність армії РФ.',
    en: 'The Krasnozavodsk Chemical Plant (KhZ) is one of the oldest and most important enterprises of Russia\'s military-industrial complex. The plant specializes in the production of ammunition, signal and illumination devices, as well as components for rocket armaments. KhZ products are supplied directly to the front for use by the occupying forces. Striking the plant\'s production workshops disrupts the supply chains for explosives and ammunition. This reduces the firepower of Russian artillery and aviation, directly impacting the combat capability of the Russian army.'
  },
  {
    targetPart: 'ЦНИИТОЧМАШ',
    images: ['video/video2_opt.mp4'],
    ru: 'Центральный научно-исследовательский институт точного машиностроения (ЦНИИТОЧМАШ) в Климовске — ключевой центр разработки и испытаний стрелкового оружия, экипировки (включая комплект «Ратник») и артиллерийских систем. Именно здесь проектируются новые виды вооружений, которые затем массово применяются российской армией в войне против Украины. Институт обладает уникальной испытательной базой и научно-техническим потенциалом. Удар по ЦНИИТОЧМАШ не только наносит физический урон лабораториям и цехам, но и тормозит перспективные разработки в сфере ВПК, лишая российскую пехоту современных технологических решений.',
    uk: 'Центральний науково-дослідний інститут точного машинобудування (ЦНДІТОЧМАШ) у Клімовську — ключовий центр розробки та випробувань стрілецької зброї, екіпіровки (включаючи комплект «Ратнік») та артилерійських систем. Саме тут проєктуються нові види озброєнь, які згодом масово застосовуються російською армією у війні проти України. Інститут володіє унікальною випробувальною базою та науково-технічним потенціалом. Удар по ЦНДІТОЧМАШ не лише завдає фізичної шкоди лабораторіям і цехам, а й гальмує перспективні розробки у сфері ВПК, позбавляючи російську піхоту сучасних технологічних рішень.',
    en: 'The Central Research Institute of Precision Machine Building (TsNIITochMash) in Klimovsk is a key center for the development and testing of small arms, equipment (including the \"Ratnik\" combat gear), and artillery systems. It is here that new types of weapons are designed, which are then used en masse by the Russian army in the war against Ukraine. The institute has a unique testing base and scientific and technical potential. A strike on TsNIITochMash not only causes physical damage to laboratories and workshops but also slows down advanced developments in the military-industrial complex, depriving Russian infantry of modern technological solutions.'
  },
  {
    targetPart: 'ЦНИИСМ',
    images: ['video/video3_opt.mp4'],
    ru: 'Центральный научно-исследовательский институт специального машиностроения (ЦНИИСМ) в Хотьково является ведущим российским разработчиком конструкций из современных композитных материалов для ракетно-космической техники и бронетанкового вооружения. Институт участвует в создании элементов для ракетных комплексов, в том числе межконтинентальных баллистических ракет и систем ПВО. Это предприятие критически важно для высокотехнологичной части российского ВПК, поскольку композитные материалы определяют вес, прочность и дальность полета современных ракет. Успешная атака дронов на этот объект замедляет производство современных систем вооружения и наносит невосполнимый ущерб стратегическим военным программам РФ.',
    uk: 'Центральний науково-дослідний інститут спеціального машинобудування (ЦНДІСМ) у Хотьково є провідним російським розробником конструкцій із сучасних композитних матеріалів для ракетно-космічної техніки та бронетанкового озброєння. Інститут бере участь у створенні елементів для ракетних комплексів, зокрема міжконтинентальних балістичних ракет і систем ППО. Це підприємство є критично важливим для високотехнологічної частини російського ВПК, оскільки композитні матеріали визначають вагу, міцність і дальність польоту сучасних ракет. Успішна атака дронів на цей об\'єкт уповільнює виробництво сучасних систем озброєння та завдає непоправної шкоди стратегічним військовим програмам РФ.',
    en: 'The Central Research Institute of Special Machine Building (TsNIISM) in Khotkovo is a leading Russian developer of structures made of advanced composite materials for aerospace equipment and armored vehicles. The institute participates in the creation of components for missile systems, including intercontinental ballistic missiles and air defense systems. This enterprise is critically important for the high-tech segment of the Russian military-industrial complex, as composite materials determine the weight, strength, and flight range of modern missiles. A successful drone attack on this facility slows down the production of modern weapon systems and causes irreparable damage to Russia\'s strategic military programs.'
  },
  {
    targetPart: 'теневого флота',
    images: ['video/tenevoy_flot2_opt.mp4', 'video/tenevoy flot1-070726.mp4'],
    ru: 'Теневой флот РФ является главным инструментом обхода международных санкций, позволяющим Москве продолжать экспортировать нефть и нефтепродукты, финансируя тем самым ведение агрессивной войны. Выявление и поражение сразу 8 танкеров (среди которых «Венера-3», «Санар-1», «Санар-17», «Климена», «Тети», «Алексей Саврасов», «Пенелопа») дедвейтом по 7000 тонн каждый — это колоссальный удар по теневой логистике. Операция в Азовском море не только уничтожает дорогостоящие суда и грузы, но и посылает четкий сигнал покупателям российской нефти о высоких рисках. Потеря таких судов существенно усложняет экспорт углеводородов из портов Азово-Черноморского бассейна, снижая приток валюты в военный бюджет РФ.',
    uk: 'Тіньовий флот РФ є головним інструментом обходу міжнародних санкцій, що дозволяє Москві продовжувати експортувати нафту й нафтопродукти, фінансуючи тим самим ведення агресивної війни. Виявлення та ураження відразу 8 танкерів (серед яких «Венера-3», «Санар-1», «Санар-17», «Климена», «Теті», «Алексей Саврасов», «Пенелопа») дедвейтом по 7000 тонн кожен — це колосальний удар по тіньовій логістиці. Операція в Азовському морі не лише знищує дорогі судна і вантажі, а й надсилає чіткий сигнал покупцям російської нафти про високі ризики. Втрата таких суден суттєво ускладнює експорт вуглеводнів з портів Азово-Чорноморського басейну, знижуючи приплив валюти у військовий бюджет РФ.',
    en: 'The Russian shadow fleet is the main tool for bypassing international sanctions, allowing Moscow to continue exporting oil and petroleum products, thereby financing its aggressive war. The identification and targeting of 8 tankers simultaneously (including \"Venera-3\", \"Sanar-1\", \"Sanar-17\", \"Klimena\", \"Teti\", \"Aleksey Savrasov\", and \"Penelopa\"), each with a deadweight of 7,000 tons, is a colossal blow to this shadow logistics network. The operation in the Sea of Azov not only destroys expensive vessels and cargo but also sends a clear signal to buyers of Russian oil about the high risks involved. The loss of such vessels significantly complicates hydrocarbon exports from the ports of the Azov-Black Sea basin, reducing foreign currency inflows into the Russian military budget.'
  },
  {
    targetPart: 'Краснодарская',
    images: ['video/krasnodar_opt.mp4'],
    ru: 'Компрессорная станция «Краснодарская» — стратегически важный инфраструктурный объект газотранспортной сети на юге России. Станция обеспечивает поддержание давления в магистральных газопроводах, включая маршруты, по которым осуществляется экспорт газа (в частности, «Голубой поток»). Выведение из строя компрессорных агрегатов приводит к падению давления в системе, срыву поставок и огромным финансовым потерям. Удар дронов по таким объектам демонстрирует уязвимость российской нефтегазовой инфраструктуры в глубоком тылу и способность Сил обороны Украины системно разрушать экономическую базу агрессора.',
    uk: 'Компресорна станція «Краснодарська» — стратегічно важливий інфраструктурний об\'єкт газотранспортної мережі на півдні Росії. Станція забезпечує підтримання тиску в магістральних газопроводах, включаючи маршрути, якими здійснюється експорт газу (зокрема, «Блакитний потік»). Виведення з ладу компресорних агрегатів призводить до падіння тиску в системі, зриву поставок і величезних фінансових втрат. Удар дронів по таких об\'єктах демонструє вразливість російської нафтогазової інфраструктури в глибокому тилу і здатність Сил оборони України системно руйнувати економічну базу агресора.',
    en: 'The \"Krasnodar\" compressor station is a strategically important infrastructure facility of the gas transmission network in southern Russia. The station ensures pressure maintenance in main gas pipelines, including routes used for gas exports (such as the Blue Stream). Taking compressor units out of service leads to a pressure drop in the system, supply disruptions, and massive financial losses. Drone strikes on such facilities demonstrate the vulnerability of Russian oil and gas infrastructure deep in the rear and the ability of the Ukrainian Defense Forces to systematically destroy the aggressor\'s economic base.'
  }
];

let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;\n?$/, '').trim();
let data = new Function('return ' + dataStr)();

// Get the last 8 items
const last8 = data.slice(-8);

last8.forEach(item => {
  const match = descriptions.find(d => item.ru.target.includes(d.targetPart));
  if (match) {
    item.ru.details = match.ru;
    item.uk.details = match.uk;
    item.en.details = match.en;
    item.images = match.images;
    // Remove the old media property if it exists
    delete item.ru.media;
    delete item.uk.media;
    delete item.en.media;
  }
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log('Successfully updated the last 8 items in data.js with expanded details and fixed images arrays.');
