const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').trim();
if (dataStr.endsWith(';')) dataStr = dataStr.slice(0, -1);
let data = eval('(' + dataStr + ')');

// 1. Merge "9 судов" (July 8) and "14 судов" (July 9)
const july8ShipsIdx = data.findIndex(i => i.date === '08.07.2026' && i.ru && i.ru.target && i.ru.target.includes('9 судов'));
const july9ShipsIdx = data.findIndex(i => i.date === '09.07.2026' && i.ru && i.ru.target && i.ru.target.includes('14 судов'));

if (july8ShipsIdx !== -1 && july9ShipsIdx !== -1) {
    let combined = data[july9ShipsIdx];
    combined.date = '09.07.2026';
    
    combined.ru.target = '14 судов обеспечения (в т.ч. 12 танкеров)';
    combined.uk.target = '14 суден забезпечення (в т.ч. 12 танкерів)';
    combined.en.target = '14 supply vessels (incl. 12 tankers)';

    combined.ru.details = 'Масштабная операция 8-9 июля по ликвидации теневого флота РФ в акватории Азовского моря. Украинские ударные дроны атаковали скопление судов, а сервис NASA FIRMS зафиксировал мощные термические аномалии. В результате поражены 14 судов: 12 танкеров (включая «Челси-6», «Аура», «Сонар-1», «Илья Репин»), один сухогруз и буксир. Систематические удары по морской логистике лишают оккупантов возможности безопасно снабжать свои южные группировки топливом.';
    combined.uk.details = 'Масштабна операція 8-9 липня з ліквідації тіньового флоту РФ в акваторії Азовського моря. Українські ударні дрони атакували скупчення суден, а сервіс NASA FIRMS зафіксував потужні термічні аномалії. В результаті уражено 14 суден: 12 танкерів (включно з «Челси-6», «Аура», «Сонар-1», «Илья Репин»), один суховантаж та буксир. Систематичні удари по морській логістиці позбавляють окупантів можливості безпечно постачати свої південні угруповання паливом.';
    combined.en.details = 'A large-scale operation on July 8-9 to eliminate the Russian shadow fleet in the Sea of Azov. Ukrainian attack drones targeted a concentration of vessels, and the NASA FIRMS service recorded powerful thermal anomalies. As a result, 14 vessels were hit: 12 tankers (including \"Chelsea-6\", \"Aura\", \"Sonar-1\", \"Ilya Repin\"), one dry cargo ship, and a tugboat. Systematic strikes on maritime logistics deprive the occupiers of the ability to safely supply their southern groupings with fuel.';
    
    // Remove the July 8 entry
    data.splice(july8ShipsIdx, 1);
}

// Map for updating targets to include region in the name
data.forEach(item => {
    if (item.date === '08.07.2026' || item.date === '09.07.2026') {
        const targetStr = (item.ru && item.ru.target) ? item.ru.target : '';
        
        if (targetStr.includes('2 танкера')) {
            item.ru.target = '2 танкера в Ростовской области';
            item.uk.target = '2 танкери в Ростовській області';
            item.en.target = '2 tankers in Rostov Oblast';
            item.images = ['images/tanker-rosnjv.jpg', 'video/tankerr1.MP4', 'video/tankerr2.MP4'];
            delete item.image;
        }
        else if (targetStr.includes('Черкассы-ПП')) {
            item.ru.target = 'Уфимская ЛПДС «Черкассы-ПП»';
            item.uk.target = 'Уфимська ЛВДС «Черкаси-ПП»';
            item.en.target = 'Ufa LPDS "Cherkassy-PP"';
            item.images = ['images/ufa1.jpg', 'images/ufa2.jpg', 'images/ufa3.jpg', 'video/ufa1.mp4'];
            delete item.image;
        }
        else if (targetStr === 'Портовая инфраструктура / Нефтебаза' || targetStr.includes('Азов')) {
            item.ru.target = 'Азовская портовая инфраструктура и нефтебаза';
            item.uk.target = 'Азовська портова інфраструктура та нафтобаза';
            item.en.target = 'Azov port infrastructure and oil depot';
            item.images = ['images/azov1.jpg'];
            delete item.image;
        }
        else if (targetStr === 'Нефтебаза' && item.ru.region.includes('Михайловск')) {
            item.ru.target = 'Михайловская нефтебаза';
            item.uk.target = 'Михайлівська нафтобаза';
            item.en.target = 'Mikhaylovsk oil depot';
            item.images = ['video/miha1.mp4', 'video/miha2.mp4'];
            delete item.image;
        }
        else if (targetStr.includes('Борисоглебск')) {
            item.images = ['images/borisoglebsk1.jpg'];
            delete item.image;
        }
        else if (targetStr.includes('Саратовский НПЗ')) {
            item.images = ['images/saratov-1.jpg', 'images/saratov-2.jpg', 'video/saratov-1 080726.MOV', 'video/saratov-2.MP4', 'video/saratov-3.MP4'];
            delete item.image;
        }
        else if (targetStr.includes('Нижнекамский НПЗ')) {
            item.images = [
                'images/nizhnekamsk-1.jpg', 'images/nizhnekamsk-2.jpg', 'images/nizhnekamsk-3.jpg', 'images/nizhnekamsk-4.jpg', 'images/nizhnekamsk-5.jpg', 'images/nizhnekamsk-6.jpg',
                'video/nizhnekamsk-1.mp4', 'video/nizhnekamsk-2.mp4', 'video/nizhnekamsk-3.mp4', 'video/nizhnekamsk-4.mp4', 'video/nizhnekamsk-5.mp4', 'video/nizhnekamsk-6.mp4'
            ];
            delete item.image;
        }
        else if (targetStr.includes('Тверская нефтебаза')) {
            item.images = [
                'images/tver1.jpg', 'images/tver2.jpg', 'images/tver3.jpg',
                'video/tver1.mp4', 'video/tver2.mp4', 'video/tver3.mp4', 'video/tver4.mp4', 'video/tver5.mp4'
            ];
            delete item.image;
        }
    }
});

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent);
console.log('Updated texts and media paths successfully.');
