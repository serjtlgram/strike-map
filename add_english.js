// Improved script: regenerate EN translations for all entries
const fs = require('fs');

const origCode = fs.readFileSync('data.js', 'utf8') + '\nmodule.exports = strikeData;';
const tmpPath = require('os').tmpdir() + '/strikeDataOrig.js';
fs.writeFileSync(tmpPath, origCode, 'utf8');
delete require.cache[tmpPath];
const strikeData = require(tmpPath);

const categoryMap = {
    'Нефтегаз': 'Oil & Gas',
    'Топливная логистика': 'Fuel Logistics',
    'ВПК / Авиабазы': 'Defense Industry / Airbases',
    'Военная инфраструктура / Авиация': 'Military Infrastructure / Aviation',
    'Военная инфраструктура': 'Military Infrastructure',
    'Авиационная база': 'Airbase',
    'Авиабаза': 'Airbase',
    'ВПК': 'Defense Industry',
    'Нефтепереработка': 'Oil Refining',
    'Нефтехранилище': 'Oil Storage',
    'Нефтебаза': 'Fuel Depot',
    'Энергетика': 'Energy',
    'Химическая промышленность': 'Chemical Industry',
};

const regionNameMap = {
    'Краснодарский край': 'Krasnodar Krai',
    'Калужская область': 'Kaluga Oblast',
    'Республика Татарстан': 'Republic of Tatarstan',
    'Воронежская область': 'Voronezh Oblast',
    'Волгоградская область': 'Volgograd Oblast',
    'Рязанская область': 'Ryazan Oblast',
    'Саратовская область': 'Saratov Oblast',
    'Самарская область': 'Samara Oblast',
    'Орловская область': 'Oryol Oblast',
    'Белгородская область': 'Belgorod Oblast',
    'Курская область': 'Kursk Oblast',
    'Брянская область': 'Bryansk Oblast',
    'Тульская область': 'Tula Oblast',
    'Липецкая область': 'Lipetsk Oblast',
    'Тамбовская область': 'Tambov Oblast',
    'Пензенская область': 'Penza Oblast',
    'Ульяновская область': 'Ulyanovsk Oblast',
    'Оренбургская область': 'Orenburg Oblast',
    'Нижегородская область': 'Nizhny Novgorod Oblast',
    'Свердловская область': 'Sverdlovsk Oblast',
    'Челябинская область': 'Chelyabinsk Oblast',
    'Пермский край': 'Perm Krai',
    'Кировская область': 'Kirov Oblast',
    'Ростовская область': 'Rostov Oblast',
    'Астраханская область': 'Astrakhan Oblast',
    'Ставропольский край': 'Stavropol Krai',
    'Смоленская область': 'Smolensk Oblast',
    'Московская область': 'Moscow Oblast',
    'Тверская область': 'Tver Oblast',
    'Псковская область': 'Pskov Oblast',
    'Ярославская область': 'Yaroslavl Oblast',
    'Ивановская область': 'Ivanovo Oblast',
    'Ленинградская область': 'Leningrad Oblast',
    'Новгородская область': 'Novgorod Oblast',
    'Вологодская область': 'Vologda Oblast',
    'Тюменская область': 'Tyumen Oblast',
    'Омская область': 'Omsk Oblast',
    'Новосибирская область': 'Novosibirsk Oblast',
    'Иркутская область': 'Irkutsk Oblast',
    'Красноярский край': 'Krasnoyarsk Krai',
    'Хабаровский край': 'Khabarovsk Krai',
    'Приморский край': 'Primorsky Krai',
    'Республика Башкортостан': 'Republic of Bashkortostan',
    'Удмуртская Республика': 'Udmurt Republic',
    'Чувашская Республика': 'Chuvash Republic',
    'Республика Мордовия': 'Republic of Mordovia',
    'Республика Коми': 'Komi Republic',
    'Республика Марий Эл': 'Mari El Republic',
    'Республика Саха': 'Sakha Republic',
    'Забайкальский край': 'Zabaykalsky Krai',
    'Еврейская АО': 'Jewish Autonomous Oblast',
    'Сахалинская область': 'Sakhalin Oblast',
    'Камчатский край': 'Kamchatka Krai',
    'Магаданская область': 'Magadan Oblast',
    'Мурманская область': 'Murmansk Oblast',
    'Архангельская область': 'Arkhangelsk Oblast',
    'Республика Карелия': 'Republic of Karelia',
    'Калининградская область': 'Kaliningrad Oblast',
    'АР Крым': 'AR Crimea',
    'Луганская область': 'Luhansk Oblast',
    'Донецкая область': 'Donetsk Oblast',
    'Запорожская область': 'Zaporizhzhia Oblast',
    'Херсонская область': 'Kherson Oblast',
    'Акватория Каспийского моря': 'Caspian Sea Waters',
    'Акватория Черного моря': 'Black Sea Waters',
    'Акватория Азовского моря': 'Sea of Azov Waters',
    'Альметьевский район': 'Almetyevsky District',
    'Нижнекамский район': 'Nizhnekamsky District',
    'Волгоград': 'Volgograd',
    'Воронеж': 'Voronezh',
    'Краснодар': 'Krasnodar',
    'Ильский': 'Ilsky',
    'Людиново': 'Lyudinovo',
    'Гвардейское': 'Gvardeyskoe',
    'Рязань': 'Ryazan',
    'Саратов': 'Saratov',
    'Самара': 'Samara',
    'Орёл': 'Oryol',
    'Орел': 'Oryol',
    'Белгород': 'Belgorod',
    'Курск': 'Kursk',
    'Брянск': 'Bryansk',
    'Тула': 'Tula',
    'Тамбов': 'Tambov',
    'Липецк': 'Lipetsk',
    'Смоленск': 'Smolensk',
    'Москва': 'Moscow',
    'Тверь': 'Tver',
    'Пенза': 'Penza',
    'Ульяновск': 'Ulyanovsk',
    'Оренбург': 'Orenburg',
    'Нижний Новгород': 'Nizhny Novgorod',
    'Екатеринбург': 'Yekaterinburg',
    'Челябинск': 'Chelyabinsk',
    'Пермь': 'Perm',
    'Киров': 'Kirov',
    'Ростов-на-Дону': 'Rostov-on-Don',
    'Астрахань': 'Astrakhan',
    'Ставрополь': 'Stavropol',
    'Псков': 'Pskov',
    'Ярославль': 'Yaroslavl',
    'Иваново': 'Ivanovo',
    'Вологда': 'Vologda',
    'Тюмень': 'Tyumen',
    'Омск': 'Omsk',
    'Новосибирск': 'Novosibirsk',
    'Иркутск': 'Irkutsk',
    'Красноярск': 'Krasnoyarsk',
    'Хабаровск': 'Khabarovsk',
    'Владивосток': 'Vladivostok',
    'Уфа': 'Ufa',
    'Ижевск': 'Izhevsk',
    'Чебоксары': 'Cheboksary',
    'Саранск': 'Saransk',
    'Сыктывкар': 'Syktyvkar',
    'Симферополь': 'Simferopol',
    'Севастополь': 'Sevastopol',
    'Луганск': 'Luhansk',
    'Донецк': 'Donetsk',
    'Запорожье': 'Zaporizhzhia',
    'Херсон': 'Kherson',
    'Энгельс': 'Engels',
    'Балашов': 'Balashov',
    'Кропоткин': 'Kropotkin',
    'Тихорецк': 'Tikhoretsk',
    'Туапсе': 'Tuapse',
    'Новороссийск': 'Novorossiysk',
    'Армавир': 'Armavir',
    'Сочи': 'Sochi',
    'Анапа': 'Anapa',
    'Нижний Тагил': 'Nizhny Tagil',
    'Альметьевск': 'Almetyevsk',
    'Нижнекамск': 'Nizhnekamsk',
    'Бугуруслан': 'Buguruslan',
    'Котовск': 'Kotovsk',
    'Ачинск': 'Achinsk',
    'Сызрань': 'Syzran',
    'Чапаевск': 'Chapayevsk',
    'Новокуйбышевск': 'Novokuybyshevsk',
    'Жуковский': 'Zhukovsky',
    'Шайковка': 'Shaykovka',
    'Морозовск': 'Morozovsk',
    'Тацинская': 'Tatsinskaya',
    'Приволжск': 'Privolzhsk',
    'Сеща': 'Seshcha',
    'Дягилево': 'Dyagilevo',
    'Таганрог': 'Taganrog',
    'Миллерово': 'Millerovo',
    'Торжок': 'Torzhok',
    'Ейск': 'Yeisk',
    'Ефремов': 'Yefremov',
    'Ельня': 'Yelnya',
    'Клинцы': 'Klintsy',
    'Почеп': 'Pochep',
    'Стародуб': 'Starodub',
    'Унеча': 'Unecha',
    'Климово': 'Klimovo',
    'Дятьково': 'Dyatkovo',
    'Трубчевск': 'Trubchevsk',
    'Навля': 'Navlya',
    'Суземка': 'Suzemka',
    'Карачев': 'Karachev',
    'Комаричи': 'Komarichi',
    'Севск': 'Sevsk',
    'Льгов': 'Lgov',
    'Рыльск': 'Rylsk',
    'Обоянь': 'Oboyan',
    'Щигры': 'Shchigry',
    'Суджа': 'Sudzha',
    'Дмитриев': 'Dmitriyev',
    'Фатеж': 'Fatezh',
    'Пристень': 'Pristen',
    'Тим': 'Tim',
    'Черемисиново': 'Cheremisinovo',
    'Конышёвка': 'Konyshyovka',
    'Глушково': 'Glushkovo',
    'Беловодск': 'Belovodsk',
    'Шебекино': 'Shebekino',
    'Грайворон': 'Grayvoron',
    'Строитель': 'Stroitel',
    'Губкин': 'Gubkin',
    'Старый Оскол': 'Stary Oskol',
    'Алексеевка': 'Alekseyevka',
    'Валуйки': 'Valuyki',
    'Бирюч': 'Biryuch',
    'Новый Оскол': 'Novy Oskol',
    'Чернянка': 'Chernyanka',
    'Прохоровка': 'Prokhorovka',
    'Ивня': 'Ivnya',
    'Короча': 'Korocha',
    'Ракитное': 'Rakitnoe',
    'Борисовка': 'Borisovka',
    'Грязи': 'Gryazi',
    'Усмань': 'Usman',
    'Лебедянь': 'Lebedyan',
    'Задонск': 'Zadonsk',
    'Елец': 'Yelets',
    'Данков': 'Dankov',
    'Лев Толстой': 'Lev Tolstoy',
    'Чаплыгин': 'Chaplygin',
    'Агроном': 'Agronom',
    'Тбилисская': 'Tbilisskaya',
};

const translit = (str) => {
    if (!str) return str;
    const m = {
        'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'yo','ж':'zh','з':'z',
        'и':'i','й':'y','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r',
        'с':'s','т':'t','у':'u','ф':'f','х':'kh','ц':'ts','ч':'ch','ш':'sh',
        'щ':'shch','ъ':'','ы':'y','ь':'','э':'e','ю':'yu','я':'ya',
        'А':'A','Б':'B','В':'V','Г':'G','Д':'D','Е':'E','Ё':'Yo','Ж':'Zh','З':'Z',
        'И':'I','Й':'Y','К':'K','Л':'L','М':'M','Н':'N','О':'O','П':'P','Р':'R',
        'С':'S','Т':'T','У':'U','Ф':'F','Х':'Kh','Ц':'Ts','Ч':'Ch','Ш':'Sh',
        'Щ':'Shch','Ъ':'','Ы':'Y','Ь':'','Э':'E','Ю':'Yu','Я':'Ya',
        '«':'"','»':'"',
    };
    return str.split('').map(c => m[c] !== undefined ? m[c] : c).join('');
};

function translateRegion(ruRegion) {
    if (!ruRegion) return ruRegion;
    let result = ruRegion;
    const sortedKeys = Object.keys(regionNameMap).sort((a, b) => b.length - a.length);
    for (const key of sortedKeys) {
        if (result.includes(key)) result = result.split(key).join(regionNameMap[key]);
    }
    return result.replace(/\s+/g, ' ').trim();
}

function translateTarget(ruTarget) {
    if (!ruTarget) return ruTarget;
    let result = ruTarget;
    const replacements = [
        [/Установка подготовки нефти/gi, 'Oil Treatment Unit'],
        [/Буровые установки/gi, 'Drilling Rigs'],
        [/Нефтеперерабатывающий завод/gi, 'Oil Refinery'],
        [/НПЗ/g, 'Oil Refinery'],
        [/Нефтебаза/gi, 'Fuel Depot'],
        [/Нефтехранилище/gi, 'Oil Storage'],
        [/Нефтепровод/gi, 'Oil Pipeline'],
        [/Газопровод/gi, 'Gas Pipeline'],
        [/Электростанция/gi, 'Power Plant'],
        [/ТЭЦ/g, 'Heat & Power Plant'],
        [/ТЭС/g, 'Thermal Power Station'],
        [/ГРЭС/g, 'State Power Plant'],
        [/ГЭС/g, 'Hydroelectric Station'],
        [/Аэродром/gi, 'Airfield'],
        [/Авиабаза/gi, 'Airbase'],
        [/Терминал/gi, 'Terminal'],
        [/Склад/gi, 'Warehouse'],
        [/Хранилище/gi, 'Storage'],
        [/Завод/gi, 'Plant'],
        [/Предприятие/gi, 'Facility'],
        [/Корпорации/gi, 'Corporation'],
        [/корпорации/gi, 'Corporation'],
        [/имени|им\./gi, 'named after'],
    ];
    for (const [rx, en] of replacements) result = result.replace(rx, en);
    const sortedKeys = Object.keys(regionNameMap).sort((a, b) => b.length - a.length);
    for (const key of sortedKeys) {
        if (result.includes(key)) result = result.split(key).join(regionNameMap[key]);
    }
    return translit(result);
}

function translateCategory(ruCategory) {
    if (!ruCategory) return ruCategory;
    if (categoryMap[ruCategory]) return categoryMap[ruCategory];
    for (const [ru, en] of Object.entries(categoryMap)) {
        if (ruCategory.includes(ru)) return en;
    }
    return translit(ruCategory);
}

function translateWeapon(ruWeapon) {
    if (!ruWeapon) return ruWeapon;
    let result = ruWeapon;
    const replacements = [
        [/Крылатые ракеты/gi, 'Cruise Missiles'],
        [/Крылатая ракета/gi, 'Cruise Missile'],
        [/Баллистическая ракета/gi, 'Ballistic Missile'],
        [/Ударный БПЛА/gi, 'Strike UAV'],
        [/FPV-дрон/gi, 'FPV Drone'],
        [/Морские дроны/gi, 'Naval Drones'],
        [/Морской дрон/gi, 'Naval Drone'],
        [/Дроны/gi, 'Drones'],
        [/Дрон/gi, 'Drone'],
        [/БПЛА/g, 'UAV'],
        [/Ракеты/gi, 'Missiles'],
        [/Ракета/gi, 'Missile'],
        [/Неизвестно/gi, 'Unknown'],
    ];
    for (const [rx, en] of replacements) result = result.replace(rx, en);
    return translit(result);
}

function translateSource(ruSource) {
    if (!ruSource) return ruSource;
    let result = ruSource;
    result = result.replace(/Генштаб ВСУ/g, 'AFU General Staff');
    result = result.replace(/Генштаб ЗСУ/g, 'AFU General Staff');
    result = result.replace(/ВСУ/g, 'AFU');
    result = result.replace(/ЗСУ/g, 'AFU');
    result = result.replace(/ССО/g, 'SOF');
    result = result.replace(/СБС/g, 'SBS');
    result = result.replace(/СМИ РФ/g, 'Russian Media');
    result = result.replace(/СМИ/g, 'Media');
    result = result.replace(/Минобороны РФ/g, 'Russian MoD');
    result = result.replace(/Минобороны/g, 'MoD');
    result = result.replace(/МО РФ/g, 'Russian MoD');
    result = result.replace(/ГУР МО/g, 'HUR MoD');
    result = result.replace(/ГУР/g, 'HUR');
    result = result.replace(/ФСБ/g, 'FSB');
    result = result.replace(/МЧС/g, 'EMERCOM');
    result = result.replace(/OSINT/gi, 'OSINT');
    return translit(result);
}

// Comprehensive details translation using ordered phrase replacements
function translateDetails(ruDetails) {
    if (!ruDetails) return ruDetails;
    let r = ruDetails;

    // --- Abbreviations and proper nouns first ---
    r = r.replace(/Генштаб ВСУ/g, 'AFU General Staff');
    r = r.replace(/Генштаб ЗСУ/g, 'AFU General Staff');
    r = r.replace(/ГУР МО/g, 'HUR MoD');
    r = r.replace(/ГУР/g, 'HUR');
    r = r.replace(/ВСУ/g, 'AFU');
    r = r.replace(/ЗСУ/g, 'AFU');
    r = r.replace(/ССО/g, 'SOF');
    r = r.replace(/СБС/g, 'SBS');
    r = r.replace(/СМИ РФ/g, 'Russian media');
    r = r.replace(/СМИ/g, 'media');
    r = r.replace(/МЧС/g, 'EMERCOM');
    r = r.replace(/ЧС/g, 'emergency');
    r = r.replace(/МО РФ/g, 'Russian MoD');
    r = r.replace(/Минобороны РФ/g, 'Russian MoD');
    r = r.replace(/Минобороны/g, 'MoD');
    r = r.replace(/ФСБ/g, 'FSB');
    r = r.replace(/НПЗ/g, 'oil refinery');
    r = r.replace(/БПЛА/g, 'UAV');
    r = r.replace(/ГЭС/g, 'hydroelectric station');
    r = r.replace(/ТЭЦ/g, 'heat & power plant');
    r = r.replace(/ТЭС/g, 'thermal power station');
    r = r.replace(/ГРЭС/g, 'state power plant');
    r = r.replace(/ЛЭП/g, 'power line');
    r = r.replace(/РЛС/g, 'radar station');
    r = r.replace(/ЗРК/g, 'air defense system');
    r = r.replace(/C-300/gi, 'S-300');
    r = r.replace(/C-400/gi, 'S-400');
    r = r.replace(/ПВО/g, 'air defense');
    r = r.replace(/ФПВ/g, 'FPV');

    // --- Long phrases first ---
    const phrases = [
        ['В новогоднюю ночь', 'On New Year\'s night'],
        ['С начала полномасштабного вторжения', 'Since the start of the full-scale invasion'],
        ['с начала полномасштабной войны', 'since the start of the full-scale war'],
        ['с начала полномасштабного вторжения', 'since the start of the full-scale invasion'],
        ['впервые с начала', 'for the first time since the start of'],
        ['Впервые с начала', 'For the first time since the start of'],
        ['украинские силовые структуры', 'Ukrainian security forces'],
        ['украинские вооруженные силы', 'Ukrainian Armed Forces'],
        ['украинский ударный беспилотник', 'Ukrainian strike drone'],
        ['украинские ударные беспилотники', 'Ukrainian strike drones'],
        ['ударный беспилотник', 'strike drone'],
        ['ударные беспилотники', 'strike drones'],
        ['ударные дроны', 'strike drones'],
        ['беспилотники-камикадзе', 'kamikaze drones'],
        ['дроны-камикадзе', 'kamikaze drones'],
        ['дроны-"обманки"', 'decoy drones'],
        ['дроны-обманки', 'decoy drones'],
        ['Поражены резервуары', 'Fuel tanks were struck'],
        ['поражены резервуары', 'fuel tanks were struck'],
        ['Поражен резервуар', 'A fuel tank was struck'],
        ['поражен резервуар', 'a fuel tank was struck'],
        ['масштабный пожар', 'large-scale fire'],
        ['масштабная пожар', 'large-scale fire'],
        ['масштабный взрыв', 'large-scale explosion'],
        ['спутниковыми снимками', 'satellite imagery'],
        ['спутниковых снимках', 'satellite imagery'],
        ['спутниковые снимки', 'satellite images'],
        ['зафиксировано попадание', 'a direct hit was recorded'],
        ['зафиксированы попадания', 'direct hits were recorded'],
        ['зафиксированы повреждения', 'damage was recorded'],
        ['зафиксировано возгорание', 'a fire outbreak was recorded'],
        ['зафиксирован пожар', 'a fire was recorded'],
        ['зафиксированы взрывы', 'explosions were recorded'],
        ['зафиксирован взрыв', 'an explosion was recorded'],
        ['зафиксированы попадания', 'hits were recorded'],
        ['В результате атаки', 'As a result of the strike'],
        ['в результате атаки', 'as a result of the strike'],
        ['В результате удара', 'As a result of the strike'],
        ['в результате удара', 'as a result of the strike'],
        ['В результате падения обломков', 'As a result of falling debris'],
        ['в результате падения обломков', 'as a result of falling debris'],
        ['рассматривалась возможность эвакуации населения', 'evacuation of the population was considered'],
        ['эвакуация населения', 'evacuation of the population'],
        ['возможность эвакуации', 'possibility of evacuation'],
        ['производство авиакеросина', 'aviation kerosene production'],
        ['производство топлива', 'fuel production'],
        ['подвижной состав с горюче-смазочными материалами', 'rolling stock with fuel and lubricants'],
        ['горюче-смазочные материалы', 'fuel and lubricants'],
        ['горюче-смазочных материалов', 'fuel and lubricants'],
        ['на территории предприятия', 'on the facility\'s territory'],
        ['на территории завода', 'on the plant\'s territory'],
        ['на территории объекта', 'on the facility\'s territory'],
        ['на территории базы', 'on the base\'s territory'],
        ['на территории депо', 'on the depot\'s territory'],
        ['ледостойкие стационарные платформы', 'ice-resistant stationary platforms'],
        ['остановлена работа скважин', 'well operations were halted'],
        ['фронтовые бомбардировщики', 'frontline bombers'],
        ['режим чрезвычайной ситуации', 'state of emergency'],
        ['режим ЧС', 'state of emergency'],
        ['вводился режим', 'a state of emergency was declared'],
        ['введён режим', 'a state of emergency was declared'],
        ['крылатые ракеты', 'cruise missiles'],
        ['крылатая ракета', 'cruise missile'],
        ['баллистические ракеты', 'ballistic missiles'],
        ['баллистическая ракета', 'ballistic missile'],
        ['топливный терминал', 'fuel terminal'],
        ['нефтяной терминал', 'oil terminal'],
        ['нефтяного терминала', 'oil terminal'],
        ['паливный терминал', 'fuel terminal'],
        ['нефтяная база', 'fuel depot'],
        ['нефтебазы', 'fuel depot'],
        ['нефтебазу', 'fuel depot'],
        ['нефтебаза', 'fuel depot'],
        ['нефтебазе', 'fuel depot'],
        ['нефтехранилище', 'oil storage facility'],
        ['нефтехранилища', 'oil storage facility'],
        ['нефтяного хранилища', 'oil storage facility'],
        ['нефтяного склада', 'oil warehouse'],
        ['резервуары топлива', 'fuel tanks'],
        ['резервуары с нефтью', 'oil tanks'],
        ['резервуары с топливом', 'fuel tanks'],
        ['резервуары', 'storage tanks'],
        ['резервуар', 'storage tank'],
        ['нефтеперерабатывающий завод', 'oil refinery'],
        ['нефтеперерабатывающего завода', 'oil refinery'],
        ['нефтеперерабатывающих заводов', 'oil refineries'],
        ['установка подготовки нефти', 'oil treatment unit'],
        ['установки подготовки нефти', 'oil treatment unit'],
        ['добыча нефти', 'oil extraction'],
        ['добычи нефти', 'oil extraction'],
        ['добычи газа', 'gas extraction'],
        ['нефтедобыча', 'oil production'],
        ['нефтяные скважины', 'oil wells'],
        ['нефтяная скважина', 'oil well'],
        ['скважин', 'wells'],
        ['газовые скважины', 'gas wells'],
        ['нефтяное месторождение', 'oil field'],
        ['газовое месторождение', 'gas field'],
        ['нефтепровод', 'oil pipeline'],
        ['газопровод', 'gas pipeline'],
        ['перекачивающая станция', 'pumping station'],
        ['аэродромную инфраструктуру', 'airfield infrastructure'],
        ['авиационную технику', 'aviation equipment'],
        ['военную технику', 'military equipment'],
        ['боевую технику', 'combat equipment'],
        ['техника уничтожена', 'equipment was destroyed'],
        ['стратегически важный', 'strategically important'],
        ['стратегически важного', 'strategically important'],
        ['стратегически важной', 'strategically important'],
        ['стратегического назначения', 'strategic purpose'],
        ['стратегический объект', 'strategic facility'],
        ['стратегический нефтяной объект', 'strategic oil facility'],
        ['стратегический военный объект', 'strategic military facility'],
        ['военный аэродром', 'military airfield'],
        ['военного аэродрома', 'military airfield'],
        ['авиационная база', 'airbase'],
        ['авиационной базы', 'airbase'],
        ['перевалке нефтепродуктов', 'transshipment of petroleum products'],
        ['перевалка нефтепродуктов', 'transshipment of petroleum products'],
        ['нефтепродуктов', 'petroleum products'],
        ['нефтепродукты', 'petroleum products'],
        ['паливна естакада', 'fuel loading rack'],
        ['топливной эстакаде', 'fuel loading rack'],
        ['топливной эстакады', 'fuel loading rack'],
        ['топливную эстакаду', 'fuel loading rack'],
        ['топливного хранилища', 'fuel storage facility'],
        ['топливного склада', 'fuel warehouse'],
        ['топливо', 'fuel'],
        ['авиационный керосин', 'aviation kerosene'],
        ['авиакеросин', 'aviation kerosene'],
        ['дизельного топлива', 'diesel fuel'],
        ['дизельное топливо', 'diesel fuel'],
        ['горючего', 'fuel'],
        ['горючее', 'fuel'],
        ['Балтийском регионе', 'Baltic region'],
        ['Балтийском море', 'Baltic Sea'],
        ['Черном море', 'Black Sea'],
        ['Азовском море', 'Sea of Azov'],
        ['Каспийском море', 'Caspian Sea'],
        ['Балтийске', 'Baltiysk'],
        ['историческая операция', 'historic operation'],
        ['Историческая операция', 'Historic operation'],
        ['успешная атака', 'successful strike'],
        ['Успешная атака', 'Successful strike'],
        ['успешная операция', 'successful operation'],
        ['Успешная операция', 'Successful operation'],
        ['массированная атака', 'massive strike'],
        ['Массированная атака', 'Massive strike'],
        ['атака дронов', 'drone strike'],
        ['атака беспилотников', 'drone strike'],
        ['атаки дронов', 'drone strikes'],
        ['атаки беспилотников', 'drone strikes'],
        ['удар по объекту', 'strike on the facility'],
        ['удар по', 'strike on'],
        ['удары по', 'strikes on'],
        ['пожар вспыхнул', 'fire broke out'],
        ['вспыхнул пожар', 'a fire broke out'],
        ['вспыхнул масштабный пожар', 'a large-scale fire broke out'],
        ['горело', 'burned'],
        ['горел', 'burned'],
        ['горела', 'burned'],
        ['тушили', 'was extinguished'],
        ['тушение пожара', 'fire extinguishing'],
        ['пожарные', 'firefighters'],
        ['пожарных', 'firefighters'],
        ['пожар', 'fire'],
        ['пожара', 'fire'],
        ['пожаре', 'fire'],
        ['пожары', 'fires'],
        ['возгорание', 'fire outbreak'],
        ['взрывы', 'explosions'],
        ['взрыв', 'explosion'],
        ['взрывов', 'explosions'],
        ['детонация', 'detonation'],
        ['детонации', 'detonation'],
        ['детонировал', 'detonated'],
        ['поражены', 'were struck'],
        ['поражен', 'was struck'],
        ['поражена', 'was struck'],
        ['поражено', 'was struck'],
        ['попадание', 'direct hit'],
        ['попадания', 'direct hits'],
        ['попаданий', 'direct hits'],
        ['атаку', 'strike'],
        ['атаки', 'strikes'],
        ['атак', 'strikes'],
        ['атаке', 'strike'],
        ['атака', 'strike'],
        ['ударом', 'by a strike'],
        ['удара', 'of the strike'],
        ['удары', 'strikes'],
        ['удар', 'strike'],
        ['уничтожены', 'were destroyed'],
        ['уничтожен', 'was destroyed'],
        ['уничтожена', 'was destroyed'],
        ['уничтожило', 'destroyed'],
        ['уничтожить', 'destroy'],
        ['поврежден', 'was damaged'],
        ['повреждена', 'was damaged'],
        ['повреждены', 'were damaged'],
        ['повреждения', 'damage'],
        ['повреждение', 'damage'],
        ['повреждений', 'damage'],
        ['крупный пожар', 'major fire'],
        ['обломки', 'debris'],
        ['обломков', 'debris'],
        ['обломками', 'debris'],
        ['осколки', 'shrapnel'],
        ['осколков', 'shrapnel'],
        ['дроны', 'drones'],
        ['дрон', 'drone'],
        ['дрона', 'drone'],
        ['дронов', 'drones'],
        ['беспилотники', 'drones'],
        ['беспилотника', 'drone'],
        ['беспилотник', 'drone'],
        ['беспилотников', 'drones'],
        ['ракеты', 'missiles'],
        ['ракета', 'missile'],
        ['ракетой', 'missile'],
        ['ракетами', 'missiles'],
        ['ракетный', 'missile'],
        ['FPV-дрон', 'FPV drone'],
        ['FPV-дроны', 'FPV drones'],
        ['FPV дрон', 'FPV drone'],
        ['стратегический бомбардировщик', 'strategic bomber'],
        ['стратегические бомбардировщики', 'strategic bombers'],
        ['фронтовой бомбардировщик', 'frontline bomber'],
        ['самолет', 'aircraft'],
        ['самолёт', 'aircraft'],
        ['самолеты', 'aircraft'],
        ['самолёты', 'aircraft'],
        ['самолета', 'aircraft'],
        ['истребитель', 'fighter jet'],
        ['истребители', 'fighter jets'],
        ['вертолет', 'helicopter'],
        ['вертолёт', 'helicopter'],
        ['вертолеты', 'helicopters'],
        ['производство', 'production'],
        ['производства', 'production'],
        ['произведено', 'produced'],
        ['производит', 'produces'],
        ['нефть', 'oil'],
        ['нефти', 'oil'],
        ['газ', 'gas'],
        ['газа', 'gas'],
        ['объект', 'facility'],
        ['объекта', 'facility'],
        ['объекту', 'facility'],
        ['объектов', 'facilities'],
        ['предприятие', 'facility'],
        ['предприятия', 'facility'],
        ['предприятий', 'facilities'],
        ['инфраструктура', 'infrastructure'],
        ['инфраструктуры', 'infrastructure'],
        ['склад', 'warehouse'],
        ['склада', 'warehouse'],
        ['складов', 'warehouses'],
        ['склады', 'warehouses'],
        ['хранилище', 'storage facility'],
        ['хранилища', 'storage facility'],
        ['хранилищ', 'storage facilities'],
        ['завод', 'plant'],
        ['завода', 'plant'],
        ['заводов', 'plants'],
        ['заводе', 'plant'],
        ['заводы', 'plants'],
        ['плавучая платформа', 'floating platform'],
        ['платформы', 'platforms'],
        ['платформа', 'platform'],
        ['платформе', 'platform'],
        ['буровая установка', 'drilling rig'],
        ['буровые установки', 'drilling rigs'],
        ['буровых установок', 'drilling rigs'],
        ['промысел', 'oil field'],
        ['газовый промысел', 'gas field'],
        ['войска', 'troops'],
        ['военные', 'military'],
        ['военный', 'military'],
        ['вооруженные силы', 'armed forces'],
        ['российские войска', 'Russian troops'],
        ['российские силы', 'Russian forces'],
        ['россия', 'Russia'],
        ['Россия', 'Russia'],
        ['российский', 'Russian'],
        ['российская', 'Russian'],
        ['российские', 'Russian'],
        ['российского', 'Russian'],
        ['российских', 'Russian'],
        ['украинский', 'Ukrainian'],
        ['украинская', 'Ukrainian'],
        ['украинские', 'Ukrainian'],
        ['украинского', 'Ukrainian'],
        ['по данным', 'according to'],
        ['согласно', 'according to'],
        ['сообщает', 'reports'],
        ['сообщают', 'report'],
        ['сообщения', 'reports'],
        ['сообщение', 'report'],
        ['подтверждено', 'confirmed'],
        ['подтверждают', 'confirm'],
        ['подтверждается', 'is confirmed'],
        ['не подтверждено', 'unconfirmed'],
        ['предположительно', 'presumably'],
        ['возможно', 'possibly'],
        ['источники', 'sources'],
        ['источник', 'source'],
        ['источников', 'sources'],
        ['данные', 'data'],
        ['информация', 'information'],
        ['минимум', 'at least'],
        ['кубометров', 'cubic meters'],
        ['кубометра', 'cubic meters'],
        ['километров', 'kilometers'],
        ['километр', 'kilometer'],
        ['тонн', 'tons'],
        ['тысяч', 'thousand'],
        ['тысячи', 'thousand'],
        ['миллионов', 'million'],
        ['миллиарда', 'billion'],
        ['сутки', 'days'],
        ['суток', 'days'],
        ['часов', 'hours'],
        ['часа', 'hours'],
        ['час', 'hour'],
        ['полные сутки', 'a full day'],
        ['населенного пункта', 'populated area'],
        ['населённого пункта', 'populated area'],
        ['населенный пункт', 'populated area'],
        ['города', 'city'],
        ['город', 'city'],
        ['городе', 'city'],
        ['региона', 'region'],
        ['регион', 'region'],
        ['района', 'district'],
        ['район', 'district'],
        ['области', 'oblast'],
        ['области', 'oblast'],
        ['края', 'krai'],
        ['территории', 'territory'],
        ['территорию', 'territory'],
        ['территория', 'territory'],
        ['населения', 'population'],
        ['население', 'population'],
        ['жителей', 'residents'],
        ['жители', 'residents'],
        ['работников', 'workers'],
        ['работники', 'workers'],
        ['персонал', 'personnel'],
        ['эвакуация', 'evacuation'],
        ['эвакуации', 'evacuation'],
        ['эвакуировали', 'evacuated'],
        ['пострадавших', 'casualties'],
        ['жертв', 'victims'],
        ['убитых', 'killed'],
        ['раненых', 'wounded'],
        ['потери', 'losses'],
        ['потерь', 'losses'],
        ['уничтоженного', 'destroyed'],
        ['Впервые', 'For the first time'],
        ['впервые', 'for the first time'],
        ['одновременно', 'simultaneously'],
        ['последующий', 'subsequent'],
        ['последующего', 'subsequent'],
        ['последующим', 'subsequent'],
        ['дальность', 'range'],
        ['расстояние', 'distance'],
        ['прицельно', 'accurately'],
        ['прямое попадание', 'direct hit'],
        ['прямых попаданий', 'direct hits'],
        ['нанесен удар', 'a strike was carried out'],
        ['нанесены удары', 'strikes were carried out'],
        ['проведена операция', 'an operation was carried out'],
        ['операция', 'operation'],
        ['операции', 'operation'],
        ['успешно', 'successfully'],
        ['результативно', 'effectively'],
        ['мощный', 'powerful'],
        ['крупный', 'major'],
        ['масштабный', 'large-scale'],
        ['массированный', 'massive'],
        ['стратегически', 'strategically'],
        ['критически важный', 'critically important'],
        ['критически важного', 'critically important'],
    ];

    for (const [ru, en] of phrases) {
        if (typeof ru === 'string') {
            r = r.replace(new RegExp(ru.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), en);
        }
    }

    // Region names
    const sortedKeys = Object.keys(regionNameMap).sort((a, b) => b.length - a.length);
    for (const key of sortedKeys) {
        if (r.includes(key)) r = r.split(key).join(regionNameMap[key]);
    }

    // Transliterate remaining Cyrillic
    r = translit(r);
    return r;
}

// Process all entries, regenerating EN field
const updated = strikeData.map(item => {
    const ru = item.ru;
    const en = {
        region: translateRegion(ru.region),
        target: translateTarget(ru.target),
        category: translateCategory(ru.category),
        weapon: translateWeapon(ru.weapon),
        details: translateDetails(ru.details),
        source: translateSource(ru.source),
    };
    // Remove old en, add fresh one
    const { en: _, ...rest } = item;
    return { ...rest, en };
});

function serializeEntry(item) {
    const lines = ['  {'];
    lines.push(`    "date": ${JSON.stringify(item.date)},`);
    lines.push(`    "lat": ${item.lat},`);
    lines.push(`    "lng": ${item.lng},`);
    if (item.distance !== undefined) lines.push(`    "distance": ${item.distance},`);
    
    const fmt = (obj) => JSON.stringify(obj, null, 2).split('\n').map((l,i) => i===0 ? l : '    '+l).join('\n');

    lines.push(`    "ru": ${fmt(item.ru)},`);
    lines.push(`    "uk": ${fmt(item.uk)},`);
    lines.push(`    "en": ${fmt(item.en)},`);
    
    if (item.images) lines.push(`    "images": ${JSON.stringify(item.images)},`);
    if (item.image) lines.push(`    "image": ${JSON.stringify(item.image)},`);
    
    lines.push(`    "id": ${item.id}`);
    lines.push('  }');
    return lines.join('\n');
}

let output = 'const strikeData = [\n';
updated.forEach((item, idx) => {
    output += serializeEntry(item);
    if (idx < updated.length - 1) output += ',';
    output += '\n';
});
output += '];\n';

fs.writeFileSync('data.js', output, 'utf8');
console.log(`Regenerated EN for ${updated.length} entries`);

// Show first 5 samples
updated.slice(0,5).forEach(item => {
    console.log(`ID ${item.id}: ${item.en.details.substring(0,100)}...`);
});
