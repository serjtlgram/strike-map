const fs = require('fs');

const newData = [
  {
    "date": "21.07.2026",
    "lat": 51.751,
    "lng": 36.292,
    "distance": null,
    "ru": {
      "region": "Курская область, Курский район (аэродром Халино)",
      "target": "Военный аэродром «Халино» (Курск-Восточный)",
      "category": "ВПК/Аэродром",
      "weapon": "Дрон",
      "details": "В ночь на 21 июля 2026 года Силы обороны Украины (в частности, 15-я отдельная бригада артиллерийской разведки «Черный лес» совместно с Силами беспилотных систем и ГУР МО) нанесли комплексный удар дальнобойными дронами по военному аэродрому «Халино» (Курск-Восточный). В результате атаки были поражены истребитель МиГ-29 и зенитный ракетно-пушечный комплекс «Панцирь-С1», прикрывавший объект. Кроме того, зафиксированы попадания по пункту управления связью, площадкам запуска ударных БПЛА и складу горюче-смазочных материалов. Этот аэродром является ключевым передовым узлом базирования фронтовой авиации РФ, используемым для налётов на приграничные регионы Украины.",
      "source": "Генштаб ВСУ, 15-я ОБАР «Черный лес», OSINT"
    },
    "uk": {
      "region": "Курська область, Курський район (аеродром Халіно)",
      "target": "Військовий аеродром «Халіно» (Курськ-Східний)",
      "category": "ВПК/Аеродром",
      "weapon": "Дрон",
      "details": "У ніч проти 21 липня 2026 року Сили оборони України (зокрема 15-та окрема бригада артилерійської розвідки «Чорний ліс» у взаємодії з Силами безпілотних систем та ГУР МО) завдали комплексного удару далекобійними дронами по військовому аеродрому «Халіно» (Курськ-Східний). Внаслідок атаки було уражено винищувач МіГ-29 та зенітний ракетно-гарматний комплекс «Панцир-С1», що прикривав об'єкт. Крім того, зафіксовано влучання по пункту управління зв'язком, майданчиках запуску ударних БПЛА та складу паливо-мастильних матеріалів. Цей аеродром є ключовим передовим вузлом базування фронтової авіації РФ, який використовується для нальотів на прикордонні регіони України.",
      "source": "Генштаб ЗСУ, 15-та ОБАР «Чорний ліс», OSINT"
    },
    "en": {
      "region": "Kursk region, Kursk district (Khalino airfield)",
      "target": "Khalino military airfield (Kursk-Vostotchny)",
      "category": "MIC/Airfield",
      "weapon": "Drone",
      "details": "On the night of July 21, 2026, the Defense Forces of Ukraine (specifically the 15th Separate Artillery Reconnaissance Brigade \"Black Forest\" alongside Unmanned Systems Forces and GUR) carried out a comprehensive long-range drone strike on the Khalino military airfield (Kursk-Vostok). As a result of the attack, a Russian MiG-29 fighter aircraft and a Pantsir-S1 air defense system guarding the base were struck. In addition, direct hits were recorded on the satellite communications command center, drone launch platforms, and the fuel storage depot. This airfield serves as a primary forward base for Russian tactical aviation conducting airstrikes against Ukraine's border regions.",
      "source": "General Staff of the UAF, 15th OBAR, OSINT"
    }
  },
  {
    "date": "21.07.2026",
    "lat": 52.565,
    "lng": 39.585,
    "distance": null,
    "ru": {
      "region": "Липецкая область, Липецк",
      "target": "Промышленный комплекс ВПК",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "В ночь на 21 июля 2026 года группа украинских ударных беспилотников атаковала объекты промышленного узла в Липецке. На территории промышленного предприятия возник крупный пожар, охвативший площадь около 2500 квадратных метров. Также зафиксированы взрывы и повреждения в районе местной ТЭЦ, обеспечивающей электроэнергией и паром ключевые производства оборонно-промышленного комплекса региона. Удар привел к сбоям в энергоснабжении промышленных мощностей и временной остановке цехов. Промышленный кластер Липецка играет важную роль в цепочке поставок металла и комплектующих для российской военной техники.",
      "source": "OSINT, МЧС РФ, СМИ РФ"
    },
    "uk": {
      "region": "Липецька область, Липецьк",
      "target": "Промисловий комплекс ВПК",
      "category": "ВПК",
      "weapon": "Дрон",
      "details": "У ніч проти 21 липня 2026 року група українських ударних безпілотників атакувала об'єкти промислового вузла у Липецьку. На території промислового підприємства виникла велика пожежа, яка охопила площу близько 2500 квадратних метрів. Також зафіксовано вибухи та пошкодження в районі місцевої ТЕЦ, що забезпечує електроенергією та парою ключові виробництва оборонно-промислового комплексу регіону. Удар призвів до збоїв в енергопостачанні промислових потужностей та тимчасової зупинки цехів. Промисловий кластер Липецька відіграє важливу роль у ланцюжку постачання металу та комплектуючих для російської військової техніки.",
      "source": "OSINT, МНС РФ, ЗМІ РФ"
    },
    "en": {
      "region": "Lipetsk region, Lipetsk",
      "target": "MIC industrial complex",
      "category": "MIC",
      "weapon": "Drone",
      "details": "On the night of July 21, 2026, a group of Ukrainian strike drones targeted industrial facilities in Lipetsk. A major fire erupted at the industrial complex, covering an area of approximately 2,500 square meters. Explosions and damage were also reported near the local thermal power plant (CHP), which supplies electricity and steam to key defense manufacturing plants in the region. The strike caused disruptions in power supply to industrial facilities and forced a temporary shutdown of production workshops. The Lipetsk industrial hub plays a vital role in supplying metal and specialized components for Russian military production.",
      "source": "OSINT, Russian EMERCOM, Russian Media"
    }
  }
];

// Read existing data
let content = fs.readFileSync('data.js', 'utf8');
let dataStr = content.replace('const strikeData = ', '').replace(/;\s*$/, '').trim();

// Add new data
let parsedData;
try {
  parsedData = new Function('return ' + dataStr)();
  
  // Assign ids
  let maxId = 0;
  parsedData.forEach(item => {
    if (item.id && item.id > maxId) {
      maxId = item.id;
    }
  });
  
  newData.forEach((item, index) => {
    item.id = maxId + index + 1;
  });
  
  parsedData = [...newData, ...parsedData];
  
  fs.writeFileSync('data.js', 'const strikeData = ' + JSON.stringify(parsedData, null, 2) + ';\n');
  console.log('Successfully prepended new entries to data.js');
} catch (e) {
  console.error("Error parsing data.js:", e);
}
