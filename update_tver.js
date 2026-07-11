const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').trim();
if (dataStr.endsWith(';')) dataStr = dataStr.slice(0, -1);
let data = eval('(' + dataStr + ')');

let changed = false;
data.forEach(item => {
    if (item.ru && item.ru.target && item.ru.target.includes('Тверская нефтебаза')) {
        item.ru.details = 'В Твери ударные беспилотники атаковали стратегически важную нефтебазу «Тверьнефтепродукт». В результате серии точных попаданий на территории объекта вспыхнул масштабный пожар, охвативший сразу несколько крупных резервуаров с горюче-смазочными материалами. Часть топливной инфраструктуры выгорела дотла. Данная нефтебаза играет ключевую роль в обеспечении топливом центральных и северо-западных регионов РФ, а также снабжает местные воинские части. Уничтожение таких крупных хранилищ наносит серьезный ущерб топливной логистике агрессора, вынуждая его перестраивать цепочки поставок и тратить дополнительные ресурсы на восстановление.';
        item.uk.details = 'У Твері ударні безпілотники атакували стратегічно важливу нафтобазу «Твернафтопродукт». Внаслідок серії точних влучань на території об\'єкта спалахнула масштабна пожежа, що охопила одразу кілька великих резервуарів з паливно-мастильними матеріалами. Частина паливної інфраструктури вигоріла вщент. Ця нафтобаза відіграє ключову роль у забезпеченні паливом центральних і північно-західних регіонів РФ, а також постачає місцеві військові частини. Знищення таких великих сховищ завдає серйозної шкоди паливній логістиці агресора, змушуючи його перебудовувати ланцюжки постачання та витрачати додаткові ресурси на відновлення.';
        item.en.details = 'In Tver, attack drones targeted the strategically important Tvernefteprodukt oil depot. As a result of a series of precise hits, a massive fire broke out on the facility\'s territory, engulfing several large fuel and lubricant tanks at once. Part of the fuel infrastructure burned to the ground. This oil depot plays a key role in supplying fuel to the central and northwestern regions of the Russian Federation, as well as local military units. The destruction of such large storage facilities inflicts serious damage on the aggressor\'s fuel logistics, forcing it to rebuild supply chains and spend additional resources on restoration.';
        changed = true;
    }
});

if (changed) {
    const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
    fs.writeFileSync('data.js', newContent);
    console.log('Successfully updated Tver details.');
} else {
    console.log('Tver target not found!');
}
