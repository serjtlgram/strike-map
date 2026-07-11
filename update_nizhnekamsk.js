const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').trim();
if (dataStr.endsWith(';')) dataStr = dataStr.slice(0, -1);
let data = eval('(' + dataStr + ')');

let changed = false;
data.forEach(item => {
    if (item.ru && item.ru.target && item.ru.target.includes('Нижнекамский НПЗ')) {
        item.ru.details = 'Нижнекамский нефтеперерабатывающий и нефтехимический кластер («ТАИФ-НК» и «Нижнекамскнефтехим») является одним из крупнейших профильных предприятий в России, расположенным в Республике Татарстан на удалении более 1000 км от границы с Украиной. Завод играет критическую роль в производстве базовых масел, бензина и сырья для военной промышленности РФ. Атаке беспилотников подверглась важнейшая установка первичной переработки нефти ЕЛОУ-АВТ-7. Вывод из строя этого высокотехнологичного и трудновосполнимого узла способен парализовать значительную часть всего производственного цикла предприятия. Это наносит мощнейший экономический ущерб, снижает экспортные доходы государства-агрессора и в очередной раз наглядно демонстрирует постоянно растущие возможности украинских дальнобойных систем по поражению стратегического тыла противника.';
        item.uk.details = 'Нижньокамський нафтопереробний та нафтохімічний кластер («ТАІФ-НК» та «Нижньокамськнафтохім») є одним із найбільших профільних підприємств у Росії, розташованим у Республіці Татарстан на відстані понад 1000 км від кордону з Україною. Завод відіграє критичну роль у виробництві базових мастил, бензину та сировини для військової промисловості РФ. Атаці безпілотників піддалася найважливіша установка первинної переробки нафти ЕЛОУ-АВТ-7. Виведення з ладу цього високотехнологічного і важковідновлюваного вузла здатне паралізувати значну частину всього виробничого циклу підприємства. Це завдає потужної економічної шкоди, знижує експортні доходи держави-агресора і вкотре наочно демонструє постійно зростаючі можливості українських далекобійних систем щодо ураження стратегічного тилу противника.';
        item.en.details = 'The Nizhnekamsk oil refining and petrochemical cluster (TAIF-NK and Nizhnekamskneftekhim) is one of the largest specialized enterprises in Russia, located in the Republic of Tatarstan more than 1,000 km from the Ukrainian border. The plant plays a critical role in the production of base oils, gasoline, and raw materials for the Russian military industry. The drone attack targeted the crucial ELOU-AVT-7 primary oil refining unit. Disabling this high-tech and difficult-to-replace component can paralyze a significant part of the enterprise\'s entire production cycle. This inflicts severe economic damage, reduces the aggressor state\'s export revenues, and once again clearly demonstrates the constantly growing capabilities of Ukrainian long-range systems to strike the enemy\'s strategic rear.';
        changed = true;
    }
});

if (changed) {
    const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
    fs.writeFileSync('data.js', newContent);
    console.log('Successfully updated Nizhnekamsk details.');
}
