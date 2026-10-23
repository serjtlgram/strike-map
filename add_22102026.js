const fs = require('fs');

const entry = {
  "date": "22.10.2026",
  "lat": 54.9312,
  "lng": 37.4130,
  "distance": null,
  "ru": {
    "region": "Московская обл., г. Серпухов, Московское шоссе, 64А",
    "target": "АО «75 Арсенал» (в/ч 42708) — ремонт и хранение ЗРК «Бук» и С-300В",
    "category": "ВПК",
    "weapon": "Ракеты FP-5 «Фламинго» / реактивные БПЛА",
    "details": "В ночь на 22 октября 2026 года Силы обороны Украины атаковали АО «75 Арсенал» в Серпухове Московской области. Около 03:00 по Москве местные жители сообщили о пролёте дронов, а затем ракет — не менее трёх, после чего над территорией войсковой части поднялось зарево и столб дыма. Предприятие подчиняется ГРАУ Минобороны РФ и специализируется на ремонте, восстановлении и хранении зенитных ракетных комплексов «Бук-М1», «Бук-М2», С-300В и «Тунгуска-М». OSINT-аналитики ранее называли арсенал единственной выявленной базой хранения российских ЗРК. По данным CyberBoroshno, удар пришёлся по ключевым производственным корпусам — цехам № 24 и № 25, где проводится дефектовка, капремонт и сборка узлов ПВО. Атака совпала с массированным налётом на Московский регион: Собянин заявил о 630 дронах, летевших в сторону столицы.",
    "source": "ASTRA, Exilenova+, Supernova+, @ASupersharij, Крымский ветер, CyberBoroshno, Радио Свобода"
  },
  "uk": {
    "region": "Московська обл., м. Серпухов, Московське шосе, 64А",
    "target": "АТ «75 Арсенал» (в/ч 42708) — ремонт і зберігання ЗРК «Бук» та С-300В",
    "category": "ВПК",
    "weapon": "Ракети FP-5 «Фламінго» / реактивні БпЛА",
    "details": "У ніч на 22 жовтня 2026 року Сили оборони України атакували АТ «75 Арсенал» у Серпухові Московської області. Близько 03:00 за Києвом місцеві мешканці повідомили про проліт дронів, а згодом ракет — щонайменше трьох, після чого над територією військової частини піднялися заграва та стовп диму. Підприємство підпорядковане ГРАУ Міноборони РФ і спеціалізується на ремонті, відновленні та зберіганні зенітних ракетних комплексів «Бук-М1», «Бук-М2», С-300В і «Тунгуска-М». OSINT-аналітики раніше називали арсенал єдиною виявленою базою зберігання російських ЗРК. За даними CyberBoroshno, удар припав по ключових виробничих корпусах — цехах № 24 і № 25, де проводять дефектовку, капремонт і збирання вузлів ППО. Атака збіглася з масованим нальотом на Московський регіон: Собянін заявив про 630 дронів, що летіли в бік столиці.",
    "source": "ASTRA, Exilenova+, Supernova+, @ASupersharij, Крымский ветер, CyberBoroshno, Радіо Свобода"
  },
  "en": {
    "region": "Moscow Oblast, Serpukhov, Moskovskoye Highway, 64A",
    "target": "75th Arsenal JSC (Military Unit 42708) — repair and storage of Buk and S-300V air defense systems",
    "category": "Military-Industrial Complex",
    "weapon": "FP-5 Flamingo missiles / jet-powered UAVs",
    "details": "On the night of October 22, 2026, Ukraine's Defense Forces struck the 75th Arsenal in Serpukhov, Moscow Oblast. Around 03:00 Moscow time, locals reported drones passing overhead, followed by at least three missiles, after which a glow and a column of smoke rose above the military unit. The facility reports to the Russian MoD's Main Missile and Artillery Directorate (GRAU) and specializes in repairing, restoring and storing Buk-M1, Buk-M2, S-300V and Tunguska-M air defense systems. OSINT analysts had earlier described the arsenal as the only identified storage base for Russian SAM systems. According to CyberBoroshno, the strike hit key production halls No. 24 and No. 25, where air defense components are inspected, overhauled and assembled. The attack coincided with a massive raid on the Moscow region: Mayor Sobyanin reported 630 drones heading toward the capital.",
    "source": "ASTRA, Exilenova+, Supernova+, @ASupersharij, Crimean Wind, CyberBoroshno, Radio Svoboda"
  },
  "images": [
    "video/serpukhov_2210_vid1.mp4",
    "video/serpukhov_2210_vid2.mp4",
    "images/serpukhov_2210_img1.jpg"
  ],
  "id": 549
};

for (const l of ['ru', 'uk', 'en']) console.log(l, entry[l].details.length);

let src = fs.readFileSync('data.js', 'utf8');
if (src.includes('serpukhov_2210_vid1')) { console.log('Already added'); process.exit(0); }
const marker = 'const strikeData = [';
const json = JSON.stringify(entry, null, 2).split('\n').map(s => '  ' + s).join('\n');
src = src.replace(marker, marker + '\n' + json + ',');
fs.writeFileSync('data.js', src, 'utf8');
console.log('Added 75 Arsenal (Serpukhov) 22.10.2026');
