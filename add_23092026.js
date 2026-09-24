const fs = require('fs');

const content = fs.readFileSync('data.js', 'utf8');
const dataStr = content.replace('const strikeData = ', '').replace(/;$/, '').trim();
const data = new Function('return ' + dataStr)();

const newItem = {
  "date": "23.09.2026",
  "lat": 54.8872,
  "lng": 56.1264,
  "distance": 1440,
  "ru": {
    "region": "Республика Башкортостан, Уфа (Орджоникидзевский район)",
    "target": "Уфимский НПЗ (филиал ПАО АНК «Башнефть» — «Башнефть-УНПЗ») / промзона нефтепереработки Уфы",
    "category": "Нефтегаз / НПЗ",
    "weapon": "Дрон",
    "details": "Утром 23 сентября 2026 года украинские дальнобойные дроны атаковали нефтеперерабатывающий комплекс в Уфе, преодолев свыше 1400 км. Целью налета стала северная промзона города, где сосредоточены перерабатывающие мощности «Башнефти» с совокупной мощностью более 20 млн тонн нефти в год. Около 7:00 жители сообщили о серии взрывов и стрельбе ПВО по низколетящим беспилотникам. Над территорией технологических установок очевидцы зафиксировали подъем дыма, а спутники NASA отметили тепловые аномалии в районе завода. Для предотвращения масштабного пожара персонал экстренно стравил давление в трубопроводах со сбросом газов на факелы. В международном аэропорту Уфы временно вводился план «Ковер» с задержкой рейсов. Налет в очередной раз продемонстрировал уязвимость стратегических топливных активов РФ в глубоком тылу.",
    "source": "Supernova+, Exilenova+, ASTRA, Крымский ветер (NASA FIRMS), мониторинговые каналы РФ"
  },
  "uk": {
    "region": "Республіка Башкортостан, Уфа (Орджонікідзевський район)",
    "target": "Уфимський НПЗ (філія ПАТ АНК «Башнафта» — «Башнафта-УНПЗ») / промзона нафтопереробки Уфи",
    "category": "Нафтогаз / НПЗ",
    "weapon": "Дрон",
    "details": "Вранці 23 вересня 2026 року українські далекобійні дрони атакували нафтопереробний комплекс в Уфі, подолавши понад 1400 км. Ціллю нальоту стала північна промзона міста, де зосереджені переробні потужності «Башнафти» із сукупною переробкою понад 20 млн тонн нафти на рік. Близько 7:00 жителі повідомили про серію вибухів та роботу ППО по низьколітаючих безпілотниках. Над територією установок очевидці зафіксували підняття диму, а супутники NASA відзначили теплові аномалії в районі заводу. Для запобігання масштабній пожежі персонал екстрено скинув тиск у трубопроводах із викидом газів на смолоскипи. У міжнародному аеропорту Уфи тимчасово запроваджували план «Килим» із затримкою рейсів. Наліт укотре продемонстрував уразливість стратегічних паливних об’єктів РФ у глибокому тилу.",
    "source": "Supernova+, Exilenova+, ASTRA, Кримський вітер (NASA FIRMS), моніторингові канали РФ"
  },
  "en": {
    "region": "Republic of Bashkortostan, Ufa (Ordzhonikidzevsky District)",
    "target": "Ufa Refinery (PJSC ANK Bashneft branch — Bashneft-UNPZ) / Ufa Oil Refining Complex",
    "category": "Oil Refinery",
    "weapon": "Drone",
    "details": "On the morning of September 23, 2026, Ukrainian long-range drones struck the oil refining complex in Ufa, covering over 1,400 km. The raid targeted the city northern industrial cluster housing major Bashneft refining assets with an annual capacity exceeding 20 million tons of crude. Around 7:00 AM, residents reported multiple explosions and anti-aircraft fire against low-flying UAVs. Eyewitnesses observed smoke rising over the facility, while NASA satellite sensors detected heat anomalies across the refinery grounds. To prevent catastrophic fire, staff performed emergency pipeline depressurization, routing gases to safety flares. Ufa International Airport temporarily suspended flight operations under the Carpet plan. The raid demonstrated the continued vulnerability of key Russian fuel infrastructure deep inside its rear territory.",
    "source": "Supernova+, Exilenova+, ASTRA, Crimeanwind (NASA FIRMS), Russian monitoring channels"
  },
  "images": [
    "video/ufa_npz_2309_vid1.mp4",
    "images/ufa_npz_2309_img1.jpg",
    "images/ufa_npz_2309_img2.jpg",
    "images/ufa_npz_2309_img3.jpg",
    "images/ufa_npz_2309_img4.jpg"
  ],
  "id": 483
};

// Insert at start
data.unshift(newItem);

const newContent = 'const strikeData = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('data.js', newContent, 'utf8');
console.log('Successfully inserted new item into data.js! Total items:', data.length);
