const fs = require('fs');

// Load data.js
const content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;\n?$/, '').trim();
let data = new Function('return ' + dataStr)();

// Step 1: Remove the 3 incorrect July 15 entries (by id: 230=Engels, 231=Louise1, 232=Banda)
const idsToRemove = [230, 231, 232];
data = data.filter(item => !idsToRemove.includes(item.id));

// Step 2: Find max ID for assigning new ID
let maxId = 0;
data.forEach(item => { if (item.id > maxId) maxId = item.id; });
const newId = maxId + 1; // should be 233

// Step 3: Add the correct July 15 entry — Operation MoLoChKa (20 shadow fleet vessels, Black Sea)
// Coordinates: approximate center of the Black Sea area near Crimea/Anapa
// Multiple vessels spread across a wide area; we place marker at ~44.5, 34.5 (central Black Sea near Crimea)
// which is far enough from shore to represent open sea operations
const newItem = {
  "date": "15.07.2026",
  "lat": 44.5,
  "lng": 34.5,
  "distance": null,
  "ru": {
    "region": "Чёрное море (акватория)",
    "target": "Операция «МоЛоЧКа» — 20 судов теневого флота РФ (17 нефтетанкеров, 2 газовоза, 1 буксир)",
    "category": "Флот / Топливная логистика",
    "weapon": "Дрон / БЭК",
    "details": "В ночь на 15 июля 2026 года Силы беспилотных систем (СБС) ВСУ провели масштабную операцию под кодовым названием «МоЛоЧКа» в акватории Чёрного моря. Символично, что старт черноморского кластера операции был приурочен ко Дню Украинской Государственности. Командующий СБС Роберт «Мадяр» Бровди лично объявил о результатах: за ночь поражены 20 судов российского «теневого флота» — 17 нефтяных танкеров, два газовоза и один буксир. Теневой флот — это ключевой инструмент России для обхода западных санкций и экспорта нефти нелегальными каналами, снабжая войну сотнями миллионов долларов. Ранее в рамках первого этапа той же операции «МоЛоЧКа» в Азовском море за предыдущие дни были поражены 116 судов — итого общее число жертв операции достигло 136 единиц за девять дней. Систематическое уничтожение российского теневого флота в обоих морях наносит колоссальный ущерб нефтяному экспорту Москвы и подрывает финансирование агрессии против Украины.",
    "source": "СБС ВСУ (командующий Роберт «Мадяр» Бровді), Armyinform, Укрправда, NV.ua, Meduza"
  },
  "uk": {
    "region": "Чорне море (акваторія)",
    "target": "Операція «МоЛоЧКа» — 20 суден тіньового флоту РФ (17 нафтотанкерів, 2 газовози, 1 буксир)",
    "category": "Флот / Паливна логістика",
    "weapon": "Дрон / БЕК",
    "details": "У ніч на 15 липня 2026 року Сили безпілотних систем (СБС) ЗСУ провели масштабну операцію під кодовою назвою «МоЛоЧКа» в акваторії Чорного моря. Символічно, що старт чорноморського кластера операції було приурочено до Дня Державності України. Командувач СБС Роберт «Мадяр» Бровді особисто оголосив про результати: за ніч уражено 20 суден російського «тіньового флоту» — 17 нафтових танкерів, два газовози та один буксир. Тіньовий флот — це ключовий інструмент Росії для обходу західних санкцій та нелегального експорту нафти, що фінансує війну сотнями мільйонів доларів. Раніше в рамках першого етапу тієї ж операції «МоЛоЧКа» в Азовському морі за попередні дні було уражено 116 суден — загалом кількість жертв операції сягнула 136 одиниць за дев'ять днів. Систематичне знищення тіньового флоту в обох морях завдає колосальних збитків нафтовому експорту Москви та підриває фінансування агресії проти України.",
    "source": "СБС ЗСУ (командувач Роберт «Мадяр» Бровді), Armyinform, Укрправда, NV.ua, Meduza"
  },
  "en": {
    "region": "Black Sea (open waters)",
    "target": "Operation 'MoLoChKa' — 20 Russian Shadow Fleet Vessels (17 oil tankers, 2 LNG tankers, 1 tugboat)",
    "category": "Fleet / Fuel Logistics",
    "weapon": "Drone / USV",
    "details": "On the night of July 15, 2026, Ukraine's Unmanned Systems Forces (USF) conducted a large-scale operation codenamed 'MoLoChKa' in the Black Sea. Symbolically, the launch of the Black Sea cluster of the operation was timed to coincide with Ukrainian Statehood Day. USF Commander Robert 'Madyar' Brovdi personally announced the results: 20 vessels of Russia's 'shadow fleet' were struck overnight — 17 oil tankers, two LNG tankers, and one tugboat. The shadow fleet is Russia's key tool for circumventing Western sanctions and illegally exporting oil, generating hundreds of millions of dollars to fund the war. Previously, in the first stage of the same 'MoLoChKa' operation in the Sea of Azov, 116 vessels had been struck in the preceding days — bringing the operation's total to 136 vessels over nine days. The systematic destruction of Russia's shadow fleet in both seas is causing colossal damage to Moscow's oil export capacity and undermining the financing of its aggression against Ukraine.",
    "source": "USF of the AFU (Commander Robert 'Madyar' Brovdi), Armyinform, Ukrpravda, NV.ua, Meduza"
  },
  "id": newId
};

// Insert at beginning (newest first)
data.unshift(newItem);

// Write back
const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log(`Done. Removed IDs 230, 231, 232. Added new entry id=${newId} for Operation MoLoChKa.`);
console.log('Total entries:', data.length);
