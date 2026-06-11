const fs = require('fs');

async function translate(text, targetLang) {
    if (!text) return text;
    try {
        const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=ru&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
        const json = await res.json();
        return json[0].map(x => x[0]).join('');
    } catch (e) {
        console.error('Translation error for:', text, e);
        return text;
    }
}

async function run() {
    const content = fs.readFileSync('data.js', 'utf8');
    let dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
    let data = new Function('return ' + dataStr)();

    const newData = [];

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        console.log(`Translating item ${i + 1}/${data.length}: ${item.target}`);
        
        // If already converted, skip
        if (item.ru && item.uk) {
            newData.push(item);
            continue;
        }

        const ukRegion = await translate(item.region, 'uk');
        const ukTarget = await translate(item.target, 'uk');
        
        // Manual overrides for specific terms
        let ukCategory = item.category;
        if (item.category === 'Нефтегаз') ukCategory = 'Нафтогаз';
        if (item.category === 'Топливная логистика') ukCategory = 'Паливна логістика';
        if (item.category === 'Нефтегаз / Логистика') ukCategory = 'Нафтогаз / Логістика';
        if (item.category === 'ВПК / Авиабазы') ukCategory = 'ВПК / Авіабази';
        if (item.category === 'ВПК (химпром)') ukCategory = 'ВПК (хімпром)';
        if (item.category === 'Авиабаза') ukCategory = 'Авіабаза';
        if (item.category === 'ВПК (НИИ)') ukCategory = 'ВПК (НДІ)';
        
        let ukWeapon = item.weapon;
        if (item.weapon === 'Дрон') ukWeapon = 'Дрон';
        if (item.weapon === 'Ракета') ukWeapon = 'Ракета';
        if (item.weapon === 'Неизвестно') ukWeapon = 'Невідомо';

        const ukDetails = await translate(item.details, 'uk');
        const ukSource = await translate(item.source, 'uk');

        newData.push({
            date: item.date,
            lat: item.lat,
            lng: item.lng,
            distance: item.distance,
            ru: {
                region: item.region,
                target: item.target,
                category: item.category,
                weapon: item.weapon,
                details: item.details,
                source: item.source
            },
            uk: {
                region: ukRegion,
                target: ukTarget,
                category: ukCategory,
                weapon: ukWeapon,
                details: ukDetails,
                source: ukSource
            }
        });
        
        // Small delay to prevent rate limit
        await new Promise(r => setTimeout(r, 200));
    }

    const newContent = 'const strikeData = ' + JSON.stringify(newData, null, 2) + ';\n';
    fs.writeFileSync('data.js', newContent);
    console.log('Translation complete!');
}

run();
