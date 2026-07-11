const fs = require('fs');
const items = [
  {
    date: '07.07.2026', lat: 50.6165, lng: 36.5478, distance: null,
    ru: { region: 'Белгородская область, Белгород', target: 'Белгородское ЛПУМГ', category: 'Нефтегаз', weapon: 'Дрон', details: 'Горит территория Белгородского линейного производственного управления магистральных газопроводов.', source: 'СМИ, OSINT' },
    uk: { region: 'Бєлгородська область, Бєлгород', target: 'Бєлгородське ЛВУМГ', category: 'Нафтогаз', weapon: 'Дрон', details: 'Горить територія Бєлгородського лінійного виробничого управління магістральних газопроводів.', source: 'ЗМІ, OSINT' },
    en: { region: 'Belgorod Oblast, Belgorod', target: 'Belgorod LPU MG (Gas Pipeline Admin)', category: 'Oil & Gas', weapon: 'Drone', details: 'A fire was recorded on the territory of the Belgorod linear production department of main gas pipelines.', source: 'Media, OSINT' }
  },
  {
    date: '07.07.2026', lat: 45.45, lng: 36.5, distance: null,
    ru: { region: 'Крым, Керчь (акватория)', target: 'Судно / Морская цель', category: 'Флот', weapon: 'БЭК/Дрон', details: 'К северу от Керчи зафиксирован пожар в море. Возможно, было атаковано судно.', source: 'СМИ, OSINT' },
    uk: { region: 'Крим, Керч (акваторія)', target: 'Судно / Морська ціль', category: 'Флот', weapon: 'БЕК/Дрон', details: 'На північ від Керчі зафіксовано пожежу в морі. Можливо, було атаковано судно.', source: 'ЗМІ, OSINT' },
    en: { region: 'Crimea, Kerch (waters)', target: 'Vessel / Naval Target', category: 'Fleet', weapon: 'USV/Drone', details: 'A fire in the sea was recorded north of Kerch. Possibly a vessel was attacked.', source: 'Media, OSINT' }
  },
  {
    date: '07.07.2026', lat: 54.7312, lng: 35.9719, distance: null,
    ru: { region: 'Калужская область, Полотняный Завод', target: 'Мини-НПЗ «Первый Завод»', category: 'Нефтегаз', weapon: 'Дрон', details: 'Успешная атака Сил обороны Украины по мини-НПЗ «Первый Завод».', source: 'СБС, Генштаб ВСУ, ГУР', media: 'miniNPZ-070726.jpg' },
    uk: { region: 'Калузька область, Полотняний Завод', target: 'Міні-НПЗ «Первый Завод»', category: 'Нафтогаз', weapon: 'Дрон', details: 'Успішна атака Сил оборони України по міні-НПЗ «Первый Завод».', source: 'СБС, Генштаб ЗСУ, ГУР', media: 'miniNPZ-070726.jpg' },
    en: { region: 'Kaluga Oblast, Polotnyaniy Zavod', target: 'Mini-Refinery "Perviy Zavod"', category: 'Oil & Gas', weapon: 'Drone', details: 'Successful strike by the Ukrainian Defense Forces on the mini-refinery "Perviy Zavod".', source: 'SBS, AFU General Staff, GUR', media: 'miniNPZ-070726.jpg' }
  },
  {
    date: '07.07.2026', lat: 56.4434, lng: 38.2294, distance: null,
    ru: { region: 'Московская область, Краснозаводск', target: 'Краснозаводский химический завод', category: 'ВПК', weapon: 'Дрон', details: 'Поражено предприятие, производящее продукцию военного назначения, в частности компоненты для боеприпасов и ракетного вооружения.', source: 'СМИ, OSINT', media: 'photo1.jpg' },
    uk: { region: 'Московська область, Краснозаводськ', target: 'Краснозаводський хімічний завод', category: 'ВПК', weapon: 'Дрон', details: 'Уражено підприємство, що виробляє продукцію військового призначення, зокрема компоненти для боєприпасів і ракетного озброєння.', source: 'ЗМІ, OSINT', media: 'photo1.jpg' },
    en: { region: 'Moscow Oblast, Krasnozavodsk', target: 'Krasnozavodsk Chemical Plant', category: 'Military-Industrial Complex', weapon: 'Drone', details: 'The plant, which produces military products, in particular components for ammunition and rocket armaments, was struck.', source: 'Media, OSINT', media: 'photo1.jpg' }
  },
  {
    date: '07.07.2026', lat: 55.3801, lng: 37.5495, distance: null,
    ru: { region: 'Московская область, Климовск', target: 'ЦНИИТОЧМАШ', category: 'ВПК', weapon: 'Дрон', details: 'Атакован Центральный научно-исследовательский институт точного машиностроения, один из ведущих центров разработки стрелкового вооружения, боеприпасов и военной экипировки РФ.', source: 'СМИ, OSINT', media: 'video2_opt.mp4' },
    uk: { region: 'Московська область, Клімовськ', target: 'ЦНДІТОЧМАШ', category: 'ВПК', weapon: 'Дрон', details: 'Атаковано Центральний науково-дослідний інститут точного машинобудування, один із провідних центрів розробки стрілецького озброєння, боєприпасів та військової екіпіровки РФ.', source: 'ЗМІ, OSINT', media: 'video2_opt.mp4' },
    en: { region: 'Moscow Oblast, Klimovsk', target: 'TsNIITochMash', category: 'Military-Industrial Complex', weapon: 'Drone', details: 'The Central Research Institute of Precision Machine Building, one of Russia\'s leading centers for the development of small arms, ammunition, and military equipment, was attacked.', source: 'Media, OSINT', media: 'video2_opt.mp4' }
  },
  {
    date: '07.07.2026', lat: 56.2620, lng: 37.9762, distance: null,
    ru: { region: 'Московская область, Хотьково', target: 'ЦНИИСМ', category: 'ВПК', weapon: 'Дрон', details: 'Удар по Центральному научно-исследовательскому институту специального машиностроения, занимающемуся разработкой и испытаниями боеприпасов и специального вооружения.', source: 'СМИ, OSINT', media: 'video3_opt.mp4' },
    uk: { region: 'Московська область, Хотьково', target: 'ЦНДІСМ', category: 'ВПК', weapon: 'Дрон', details: 'Удар по Центральному науково-дослідному інституту спеціального машинобудування, який займається розробкою та випробуваннями боєприпасів і спеціального озброєння.', source: 'ЗМІ, OSINT', media: 'video3_opt.mp4' },
    en: { region: 'Moscow Oblast, Khotkovo', target: 'TsNIISM', category: 'Military-Industrial Complex', weapon: 'Drone', details: 'Strike on the Central Research Institute of Special Machine Building, which develops and tests ammunition and special armaments.', source: 'Media, OSINT', media: 'video3_opt.mp4' }
  },
  {
    date: '07.07.2026', lat: 46.0, lng: 37.0, distance: null,
    ru: { region: 'Азовское море (акватория)', target: '8 танкеров теневого флота РФ', category: 'Флот / Топливная логистика', weapon: 'Дрон', details: 'В Азовском море вполювано 8 танкеров теневого флота РФ, находящихся под международными санкциями (Венера-3, Санар-1, Санар-17, Климена, Тети, Алексей Саврасов, Пенелопа и др.), дедвейтом по 7000 тонн.', source: 'ВМС ВСУ, СМИ, OSINT', media: 'tenevoy_flot2_opt.mp4' },
    uk: { region: 'Азовське море (акваторія)', target: '8 танкерів тіньового флоту РФ', category: 'Флот / Паливна логістика', weapon: 'Дрон', details: 'В Азовському морі впольовано 8 танкерів тіньового флоту РФ, які знаходяться під міжнародними санкціями (Венера-3, Санар-1, Санар-17, Климена, Теті, Алексей Саврасов, Пенелопа та ін.), дедвейтом по 7000 тонн, довжиною по 140 метрів.', source: 'ВМС ЗСУ, ЗМІ, OSINT', media: 'tenevoy_flot2_opt.mp4' },
    en: { region: 'Sea of Azov (waters)', target: '8 Shadow Fleet Tankers', category: 'Fleet / Fuel Logistics', weapon: 'Drone', details: '8 Russian shadow fleet tankers under international sanctions (Venera-3, Sanar-1, Sanar-17, Klimena, Teti, Aleksey Savrasov, Penelopa, etc.), with a deadweight of 7,000 tons and a length of 140 meters each, were hunted down in the Sea of Azov.', source: 'Ukrainian Navy, Media, OSINT', media: 'tenevoy_flot2_opt.mp4' }
  },
  {
    date: '07.07.2026', lat: 44.7558, lng: 38.7589, distance: null,
    ru: { region: 'Краснодарский край, Северский район', target: 'Компрессорная станция «Краснодарская»', category: 'Нефтегаз', weapon: 'Дрон', details: 'Атакована компрессорная станция «Краснодарская».', source: 'СМИ, OSINT', media: 'krasnodar_opt.mp4' },
    uk: { region: 'Краснодарський край, Сіверський район', target: 'Компресорна станція «Краснодарська»', category: 'Нафтогаз', weapon: 'Дрон', details: 'Атаковано компресорну станцію «Краснодарська».', source: 'ЗМІ, OSINT', media: 'krasnodar_opt.mp4' },
    en: { region: 'Krasnodar Krai, Seversky District', target: 'Compressor Station "Krasnodar"', category: 'Oil & Gas', weapon: 'Drone', details: 'The "Krasnodar" compressor station was attacked.', source: 'Media, OSINT', media: 'krasnodar_opt.mp4' }
  }
];

let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;\n?$/, '').trim();
let data = new Function('return ' + dataStr)();

let maxId = 0;
data.forEach(item => { if (item.id > maxId) maxId = item.id; });

items.forEach(item => {
  maxId++;
  item.id = maxId;
  data.push(item);
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log('Added ' + items.length + ' items to data.js');
