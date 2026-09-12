document.addEventListener('DOMContentLoaded', () => {
    // i18n Dictionary
    const i18n = {
        title: { ru: 'Пораженные объекты', uk: 'Уражені об\'єкти', en: 'Struck Facilities' },
        search: { ru: 'Поиск по названию или региону...', uk: 'Пошук за назвою чи регіоном...', en: 'Search by name or region...' },
        filter_all: { ru: 'Все', uk: 'Всі', en: 'All' },
        filter_oil: { ru: 'Нефтегаз', uk: 'Нафтогаз', en: 'Oil & Gas' },
        filter_logistics: { ru: 'Логистика', uk: 'Логістика', en: 'Logistics' },
        filter_military: { ru: 'ВПК / Авиабазы', uk: 'ВПК / Авіабази', en: 'Defense / Airbases' },
        total: { ru: 'Всего объектов:', uk: 'Всього об\'єктів:', en: 'Total facilities:' },
        updated: { ru: 'Обновлено: Сентябрь 2026', uk: 'Оновлено: Вересень 2026', en: 'Updated: September 2026' },
        mobile_btn: { ru: 'Список объектов', uk: 'Список об\'єктів', en: 'Object List' },
        distance: { ru: 'Дальность: ~{dist} км от линии фронта', uk: 'Дальність: ~{dist} км від лінії фронту', en: 'Range: ~{dist} km from front line' },
        not_found: { ru: 'Объекты не найдены', uk: 'Об\'єкти не знайдені', en: 'No objects found' },
        onboarding: { ru: 'Жми на мигающую точку на территории России и смотри, что там демилитаризировали в рамках эСВэО.', uk: 'Тисни на мигаючу крапку на території Росії і дивися, що там демілітаризували в рамках еСВеО.', en: 'Click on a blinking dot on Russian territory to see what was demilitarized as part of the special operation.' },
        sort_asc: { ru: 'Сначала старые', uk: 'Спочатку старі', en: 'Oldest first' },
        sort_desc: { ru: 'Сначала новые', uk: 'Спочатку нові', en: 'Newest first' },
        sort_title: { ru: 'Сортировка по дате', uk: 'Сортування за датою', en: 'Sort by date' },
        copy_link: { ru: 'Копировать ссылку', uk: 'Копіювати посилання', en: 'Copy link' },
        share: { ru: 'Поделиться', uk: 'Поділитися', en: 'Share' },
        copied: { ru: 'Ссылка скопирована!', uk: 'Посилання скопійовано!', en: 'Link copied!' },
        expand: { ru: 'Увеличить', uk: 'Збільшити', en: 'Expand' },
        filter_all_months: { ru: 'Все месяцы', uk: 'Всі місяці', en: 'All months' },
        npz_title: { ru: 'Крупнейшие НПЗ России', uk: 'Найбільші НПЗ Росії', en: 'Largest Russian Oil Refineries' },
        npz_subtitle: { ru: 'Рейтинг по мощности переработки, статус поражения и вывод из строя', uk: 'Рейтинг за потужністю переробки, статус ураження та виведення з ладу', en: 'Refining capacity ranking, strike status, and operational impact' },
        npz_total_count: { ru: 'Всего заводов', uk: 'Всього заводів', en: 'Total Refineries' },
        npz_struck_count: { ru: 'Поражено / выведено', uk: 'Уражено / виведено', en: 'Struck / Disabled' },
        npz_intact_count: { ru: 'В строю / целые', uk: 'У строю / цілі', en: 'Operating / Intact' },
        npz_capacity_struck: { ru: 'Пораженная мощность', uk: 'Уражена потужність', en: 'Damaged Capacity' },
        npz_capacity_unit: { ru: 'млн т/год', uk: 'млн т/рік', en: 'M tons/yr' },
        npz_capacity_total: { ru: 'Мощность', uk: 'Потужність', en: 'Capacity' },
        npz_capacity_total_desc: { ru: 'Совокупная мощность переработки: ~317.7 млн т/год', uk: 'Сукупна потужність переробки: ~317.7 млн т/рік', en: 'Total refining capacity: ~317.7M tons/yr' },
        npz_legend_struck: { ru: 'Поражен / остановлен', uk: 'Уражений / зупинений', en: 'Struck / Disabled' },
        npz_legend_intact: { ru: 'В строю', uk: 'У строю', en: 'Operating' },
        npz_legend_hint: { ru: 'Нажмите на карточку поврежденного НПЗ, чтобы открыть объект на карте', uk: 'Натисніть на картку пошкодженого НПЗ, щоб відкрити об\'єкт на карті', en: 'Click any damaged refinery card to open it on the map' },
        npz_status_struck: { ru: 'Поражен / выведен из строя', uk: 'Уражений / виведений з ладу', en: 'Struck / Disabled' },
        npz_status_intact: { ru: 'В строю (без повреждений)', uk: 'У строю (без ушкоджень)', en: 'Operating (Intact)' },
        npz_tooltip_strike_date: { ru: 'Дата поражения:', uk: 'Дата ураження:', en: 'Strike date:' },
        npz_tooltip_strike_count: { ru: 'Зафиксировано ударов:', uk: 'Зафіксовано ударів:', en: 'Recorded strikes:' },
        npz_tooltip_view_card: { ru: 'Смотреть карточку на карте →', uk: 'Дивитися картку на карті →', en: 'View card on map →' },
        npz_tooltip_not_struck: { ru: 'Удары не зафиксированы', uk: 'Ударів не зафіксовано', en: 'No recorded strikes' }
    };

    const supportedLangs = ['uk', 'ru', 'en'];
    function getDefaultLang() {
        const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (browserLang.startsWith('ru')) return 'ru';
        if (browserLang.startsWith('uk')) return 'uk';
        return 'en';
    }
    let currentLang = localStorage.getItem('strike-map-lang') || getDefaultLang();

    function setLang(lang) {
        currentLang = lang;
        localStorage.setItem('strike-map-lang', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        document.querySelectorAll('.lang-selector').forEach(btn => {
            if (btn.getAttribute('data-set-lang') === lang) {
                btn.classList.add('lang-active');
                btn.classList.remove('theme-text-muted');
            } else {
                btn.classList.remove('lang-active');
                btn.classList.add('theme-text-muted');
            }
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[key] && i18n[key][lang]) el.textContent = i18n[key][lang];
        });
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (i18n[key] && i18n[key][lang]) el.placeholder = i18n[key][lang];
        });

        // Populate/update month filter options with correct lang
        if (typeof populateMonthFilter === 'function') populateMonthFilter();

        // Update sort button tooltip and icon
        if (typeof updateSortButton === 'function') updateSortButton();

        // Use setTimeout to ensure functions are defined
        if (typeof applyFilters === 'function') applyFilters();

        // Update Map labels language dynamically
        if (typeof updateMapLanguage === 'function') updateMapLanguage();

        // Update NPZ drawer language dynamically
        if (typeof renderNpzDrawer === 'function') renderNpzDrawer();
    }

    document.querySelectorAll('.lang-selector').forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = btn.getAttribute('data-set-lang');
            setLang(newLang);
            if (window.va) window.va('track', 'LanguageChanged', { lang: newLang });
        });
    });

    // 1. Initialize Map
    const map = L.map('map', {
        zoomControl: false
    }).setView([53.0, 42.0], 5);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Force popup contents to scroll back to the top on opening (mobile only)
    map.on('popupopen', (e) => {
        const popup = e.popup;
        if (!popup) return;

        if (window.innerWidth >= 768) {
            // For PC: force layout update to trigger autoPan centering and make sure the whole card is visible
            setTimeout(() => {
                popup.update();
            }, 100);
            return;
        }

        // Mobile only scroll reset
        if (popup.getElement()) {
            const contentNode = popup.getElement().querySelector('.leaflet-popup-content');
            if (contentNode) {
                contentNode.scrollTop = 0;
                setTimeout(() => { contentNode.scrollTop = 0; }, 10);
                setTimeout(() => { contentNode.scrollTop = 0; }, 50);
                setTimeout(() => { contentNode.scrollTop = 0; }, 150);
            }
        }
    });

    // Tile Layers for themes (using OpenFreeMap Vector styles)
    const tileLayers = {
        dark: L.maplibreGL({
            style: 'https://tiles.openfreemap.org/styles/dark',
            attribution: '&copy; OpenStreetMap & OpenFreeMap'
        }),
        light: L.maplibreGL({
            style: 'https://tiles.openfreemap.org/styles/positron',
            attribution: '&copy; OpenStreetMap & OpenFreeMap'
        }),
        beige: L.maplibreGL({
            style: 'https://tiles.openfreemap.org/styles/liberty',
            attribution: '&copy; OpenStreetMap & OpenFreeMap'
        })
    };

    function updateMapLanguage() {
        try {
            if (!currentTileLayer || typeof currentTileLayer.getMaplibreMap !== 'function') return;
            const maplibreMap = currentTileLayer.getMaplibreMap();
            if (!maplibreMap) return;

            const setStyleLang = () => {
                try {
                    const style = maplibreMap.getStyle();
                    if (!style || !style.layers) return;

                    let mapLang = currentLang;
                    if (mapLang === 'uk') mapLang = 'uk';
                    else if (mapLang === 'ru') mapLang = 'ru';
                    else if (mapLang === 'en') mapLang = 'en';
                    else mapLang = 'en';

                    style.layers.forEach(layer => {
                        if (layer.layout && layer.layout['text-field']) {
                            maplibreMap.setLayoutProperty(layer.id, 'text-field', [
                                'coalesce',
                                ['get', 'name:' + mapLang],
                                ['get', 'name:en'],
                                ['get', 'name']
                            ]);
                        }
                    });
                } catch (e) {
                    console.error('Error updating map language style:', e);
                }
            };

            if (maplibreMap.isStyleLoaded()) {
                setStyleLang();
            } else {
                maplibreMap.off('style.load', setStyleLang);
                maplibreMap.on('style.load', setStyleLang);
            }
        } catch (e) {
            console.error('Error updating map language:', e);
        }
    }


    let currentTileLayer = tileLayers.dark;
    currentTileLayer.addTo(map);

    let markerLayerGroup = L.featureGroup().addTo(map);
    let activeMarkers = [];

    const searchInput = document.getElementById('searchInput');
    const monthFilter = document.getElementById('monthFilter');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const objectList = document.getElementById('objectList');
    const totalCount = document.getElementById('totalCount');
    const sortToggleBtn = document.getElementById('sortToggleBtn');
    
    let currentSortOrder = localStorage.getItem('strike-map-sort-order') || 'desc';
    
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
    const openSidebarBtn = document.getElementById('openSidebarBtn');
    const themeSelectors = document.querySelectorAll('.theme-selector');

    // Theme Management
    function setTheme(theme) {
        try {
            if (!tileLayers[theme]) {
                theme = 'beige';
            }
            localStorage.setItem('strike-map-theme', theme);
            
            // Set attribute for CSS on html element (matches :root)
            if (theme === 'dark') {
                if (document.documentElement) {
                    document.documentElement.removeAttribute('data-theme');
                    document.documentElement.classList.add('dark');
                }
            } else {
                if (document.documentElement) {
                    document.documentElement.setAttribute('data-theme', theme);
                    document.documentElement.classList.remove('dark');
                }
            }

            // Swap Map Tiles
            if (map && currentTileLayer) {
                map.removeLayer(currentTileLayer);
            }
            currentTileLayer = tileLayers[theme];
            if (map && currentTileLayer) {
                currentTileLayer.addTo(map);
            }

            // Update Map labels language dynamically
            if (typeof updateMapLanguage === 'function') updateMapLanguage();

            // Update Theme Buttons
            if (themeSelectors) {
                themeSelectors.forEach(btn => {
                    btn.classList.remove('ring-2', 'ring-blue-500', 'ring-offset-2');
                    if (btn.getAttribute('data-set-theme') === theme) {
                        btn.classList.add('ring-2', 'ring-blue-500', 'ring-offset-2');
                    }
                });
            }
            
            // Ensure ring offset matches body bg
            if (document.body && document.documentElement) {
                const bgColor = getComputedStyle(document.body).getPropertyValue('--bg-body').trim();
                document.documentElement.style.setProperty('--tw-ring-offset-color', bgColor);
            }
        } catch (e) {
            console.error('Error setting theme:', e);
        }
    }

    themeSelectors.forEach(btn => {
        btn.addEventListener('click', () => {
            setTheme(btn.getAttribute('data-set-theme'));
        });
    });

    // Initialize default theme from localStorage or default to light
    const savedTheme = localStorage.getItem('strike-map-theme') || 'light';
    setTheme(savedTheme);

    function getCategoryType(category) {
        if (!category) return 'other';
        const cat = category.toLowerCase();
        if (cat.includes('нефтегаз') || cat.includes('нафтогаз') || cat.includes('нпз') || cat.includes('oil & gas') || cat.includes('oil and gas') || cat.includes('refinery')) return 'oilgas';
        if (cat.includes('логист') || cat.includes('logistics') || cat.includes('fuel logistics')) return 'logistics';
        if (cat.includes('впк') || cat.includes('авиабаза') || cat.includes('авіабаза') || cat.includes('аэродром') || cat.includes('аеродром') || cat.includes('военн') || cat.includes('військ') || cat.includes('defense') || cat.includes('airbase') || cat.includes('airfield') || cat.includes('military')) return 'military';
        return 'other';
    }

    function getCategoryColorClass(type) {
        switch(type) {
            case 'oilgas': return { bg: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500/30', glow: 'shadow-orange-500/50' };
            case 'logistics': return { bg: 'bg-yellow-500', text: 'text-yellow-500', border: 'border-yellow-500/30', glow: 'shadow-yellow-500/50' };
            case 'military': return { bg: 'bg-red-500', text: 'text-red-500', border: 'border-red-500/30', glow: 'shadow-red-500/50' };
            default: return { bg: 'bg-gray-500', text: 'text-gray-500', border: 'border-gray-500/30', glow: 'shadow-gray-500/50' };
        }
    }

    function createCustomIcon(type) {
        const colors = getCategoryColorClass(type);
        const html = `
            <div class="relative flex items-center justify-center w-8 h-8">
                <div class="absolute w-full h-full ${colors.bg} opacity-20 rounded-full animate-ping pulse-ring"></div>
                <div class="absolute w-6 h-6 ${colors.bg} rounded-full shadow-lg ${colors.glow} flex items-center justify-center border-2 border-white/50">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
            </div>
        `;
        return L.divIcon({
            html: html,
            className: 'custom-div-icon',
            iconSize: [32, 32],
            iconAnchor: [16, 16],
            popupAnchor: [0, -16]
        });
    }

    function generatePopupHTML(item, type, colors) {
        const textExpand = i18n.expand[currentLang] || 'Expand';
        let imageHtml = '';
        if (item.images && item.images.length > 0) {
            // Sort images so videos are always first
            const sortedImages = [...item.images].sort((a, b) => {
                const aIsVideo = a.toLowerCase().endsWith('.mp4');
                const bIsVideo = b.toLowerCase().endsWith('.mp4');
                if (aIsVideo && !bIsVideo) return -1;
                if (!aIsVideo && bIsVideo) return 1;
                return 0;
            });
            const mainImg = sortedImages[0];
            const countHtml = sortedImages.length > 1 ? `<div class="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg pointer-events-none mobile-only">+${sortedImages.length - 1}</div>` : '';
            const imagesJson = JSON.stringify(sortedImages).replace(/"/g, '&quot;');
            
            const videoIconBadge = `<div class="absolute top-2 left-2 bg-black/60 text-white p-1 rounded-md shadow-sm pointer-events-none z-10"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></div>`;
            const photoIconBadge = `<div class="absolute top-2 left-2 bg-black/60 text-white p-1 rounded-md shadow-sm pointer-events-none z-10"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div>`;

            let thumbnailsHtml = '';
            if (sortedImages.length > 1) {
                thumbnailsHtml = `<div class="desktop-only-flex flex-col gap-2 mt-2 w-full">`;
                for (let i = 1; i < sortedImages.length; i++) {
                    const isVideo = sortedImages[i].toLowerCase().endsWith('.mp4');
                    thumbnailsHtml += `
                        <div class="w-full h-16 rounded-lg shadow-sm overflow-hidden relative border theme-border hover:opacity-90 transition group" onclick="event.stopPropagation(); window.openFullscreenGallery('${imagesJson}', ${i})">
                            ${isVideo ? videoIconBadge : photoIconBadge}
                            ${isVideo ? 
                        `<video src="${sortedImages[i]}#t=0.1" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 pointer-events-none" preload="metadata" muted playsinline></video><div class="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none"><svg class="w-6 h-6 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>` : 
                        `<img src="${sortedImages[i]}" alt="${item.target}" class="absolute inset-0 w-full h-full object-cover hover:scale-105 transition duration-500">`}
                        </div>
                    `;
                }
                thumbnailsHtml += `</div>`;
            }
            
            const mainIsVideo = mainImg.toLowerCase().endsWith('.mp4');
            imageHtml = `
                <div class="popup-image-col shrink-0 w-full md:w-40 lg:w-48 flex flex-col justify-start cursor-pointer group">
                    <div class="popup-image-container w-full h-32 md:h-auto md:min-h-[140px] rounded-xl shadow-sm overflow-hidden relative border theme-border" onclick="window.openFullscreenGallery('${imagesJson}', 0)">
                        ${mainIsVideo ? videoIconBadge : photoIconBadge}
                        ${mainIsVideo ? 
                        `<video src="${mainImg}#t=0.1" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" preload="metadata" muted playsinline></video><div class="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none"><svg class="w-12 h-12 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>` : 
                        `<img src="${mainImg}" alt="${item.target}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500">`}
                        ${countHtml}
                        <div class="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-medium px-2 py-1 rounded-md flex items-center gap-1 shadow-lg pointer-events-none">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span>${textExpand}</span>
                        </div>
                    </div>
                    ${thumbnailsHtml}
                </div>
            `;
        } else if (item.image) {
            const isVideo = item.image.toLowerCase().endsWith('.mp4');
            const videoIconBadge = `<div class="absolute top-2 left-2 bg-black/60 text-white p-1 rounded-md shadow-sm pointer-events-none z-10"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></div>`;
            const photoIconBadge = `<div class="absolute top-2 left-2 bg-black/60 text-white p-1 rounded-md shadow-sm pointer-events-none z-10"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div>`;

            imageHtml = `
                <div class="popup-image-col shrink-0 w-full md:w-40 lg:w-48 flex flex-col justify-start cursor-pointer group" onclick="window.openFullscreenImage('${item.image}')">
                    <div class="popup-image-container w-full h-32 md:h-auto md:min-h-[140px] rounded-xl shadow-sm overflow-hidden relative border theme-border">
                        ${isVideo ? videoIconBadge : photoIconBadge}
                        ${isVideo ? 
                        `<video src="${item.image}#t=0.1" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" preload="metadata" muted playsinline></video><div class="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none"><svg class="w-12 h-12 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>` : 
                        `<img src="${item.image}" alt="${item.target}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500">`}
                        <div class="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-medium px-2 py-1 rounded-md flex items-center gap-1 shadow-lg pointer-events-none">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span>${textExpand}</span>
                        </div>
                    </div>
                </div>
            `;
        }

        const containerClasses = 'popup-container flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-5';

        return `
            <div class="p-4 md:p-5 font-sans ${containerClasses}">
                <div class="flex-1 min-w-0 md:min-w-[220px] flex flex-col">
                    <div class="mb-3">
                        <div class="flex justify-between items-start mb-2 gap-2">
                            <span class="inline-block px-2.5 py-1 rounded-full text-xs font-semibold theme-bg-item border ${colors.border} ${colors.text}">
                                ${item.category}
                            </span>
                            <button onclick="window.copyEventLink(${item.id}, event)" class="shrink-0 flex items-center gap-1 px-2 py-1 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-800 theme-text-muted hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-700 transition border theme-border active:scale-95" title="${i18n.copy_link[currentLang]}">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                                <span>${i18n.share[currentLang]}</span>
                            </button>
                        </div>
                        <h3 class="text-lg font-bold theme-text-main leading-tight">${item.target}</h3>
                    </div>
                    
                    <div class="space-y-2 text-sm theme-text-muted mb-4">
                        <div class="flex items-start gap-2">
                            <svg class="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            <span>${item.date}</span>
                        </div>
                        <div class="flex items-start gap-2">
                            <svg class="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span class="leading-snug">${item.region}</span>
                        </div>
                        <div class="flex items-start gap-2">
                            <svg class="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            <span>${item.weapon}</span>
                        </div>
                        ${item.distance !== undefined ? `
                        <div class="flex items-start gap-2">
                            <svg class="w-4 h-4 mt-0.5 shrink-0 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            <span class="font-medium text-blue-500">${i18n.distance[currentLang].replace('{dist}', item.distance)}</span>
                        </div>` : ''}
                    </div>

                    <div class="mt-auto pt-2 text-xs theme-text-muted flex items-center gap-1.5">
                        <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span class="truncate" title="${item.source}">${item.source}</span>
                    </div>
                </div>

                <div class="flex-1 min-w-0 md:min-w-[420px] flex flex-col">
                    <div class="theme-bg-input rounded-lg p-3 md:p-4 border theme-border h-full">
                        <p class="text-sm theme-text-main leading-relaxed">${item.details}</p>
                    </div>
                </div>
                
                ${imageHtml}
            </div>
        `;
    }

    window.showToast = function(message) {
        let toast = document.getElementById('copyToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'copyToast';
            toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-[3000] bg-slate-800 text-white px-4 py-2 rounded-lg shadow-lg font-medium text-sm transition-opacity duration-300 opacity-0 pointer-events-none';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.remove('opacity-0');
        
        if (window.copyToastTimeout) clearTimeout(window.copyToastTimeout);
        window.copyToastTimeout = setTimeout(() => {
            toast.classList.add('opacity-0');
        }, 2000);
    };

    window.copyEventLink = function(id, e) {
        if (e) e.stopPropagation();
        if (window.va) window.va('track', 'CopyLinkClicked', { id: String(id) });
        const url = new URL(window.location.href);
        url.searchParams.set('id', id);
        navigator.clipboard.writeText(url.toString()).then(() => {
            showToast(i18n.copied[currentLang]);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    let currentGalleryImages = [];
    let currentGalleryIndex = 0;

    window.openFullscreenImage = function(src) {
        window.openFullscreenGallery(JSON.stringify([src]), 0);
    };

    window.openFullscreenGallery = function(imagesJson, startIndex) {
        const images = JSON.parse(imagesJson);
        currentGalleryImages = images;
        currentGalleryIndex = startIndex;
        
        const modal = document.getElementById('imageModal');
        const prevBtn = document.getElementById('prevImageBtn');
        const nextBtn = document.getElementById('nextImageBtn');
        const counter = document.getElementById('imageCounter');
        
        if (images.length > 1) {
            if (prevBtn) prevBtn.classList.remove('hidden');
            if (nextBtn) nextBtn.classList.remove('hidden');
            if (counter) counter.classList.remove('hidden');
        } else {
            if (prevBtn) prevBtn.classList.add('hidden');
            if (nextBtn) nextBtn.classList.add('hidden');
            if (counter) counter.classList.add('hidden');
        }
        
        updateModalImage(false);
        
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
            }, 10);
        }
    };

    function updateModalImage(animate = true) {
        const modalImg = document.getElementById('modalImage');
        const modalVideo = document.getElementById('modalVideo');
        const counter = document.getElementById('imageCounter');
        if (currentGalleryImages.length > 0) {
            const currentSrc = currentGalleryImages[currentGalleryIndex];
            const isVideo = currentSrc.toLowerCase().endsWith('.mp4');
            const activeElement = isVideo ? modalVideo : modalImg;
            const hiddenElement = isVideo ? modalImg : (modalVideo || null);
            
            if (hiddenElement) {
                hiddenElement.classList.add('hidden');
                if (hiddenElement.tagName === 'VIDEO') {
                    hiddenElement.pause();
                }
            }
            if (activeElement) {
                activeElement.classList.remove('hidden');
            }

            if (animate) {
                activeElement.style.opacity = '0';
                setTimeout(() => {
                    activeElement.src = currentSrc;
                    activeElement.style.opacity = '1';
                }, 150);
            } else {
                activeElement.src = currentSrc;
                activeElement.style.opacity = '1';
            }
            
            if (counter) {
                counter.textContent = `${currentGalleryIndex + 1} / ${currentGalleryImages.length}`;
            }
        }
    }


    function renderData(data) {
        markerLayerGroup.clearLayers();
        objectList.innerHTML = '';
        activeMarkers = [];
        
        totalCount.textContent = data.length;

        if (data.length === 0) {
            objectList.innerHTML = `
                <div class="text-center py-8 theme-text-muted">
                    <p>${i18n.not_found[currentLang]}</p>
                </div>
            `;
            return;
        }

        // Track how many times each coordinate is used to apply offsets for overlapping markers
        const coordinateCounts = {};

        data.forEach((item, index) => {
            const type = getCategoryType(item.category);
            const colors = getCategoryColorClass(type);

            // Compute coordinate key with standard precision (5 decimals)
            const coordKey = `${item.lat.toFixed(5)},${item.lng.toFixed(5)}`;
            let finalLat = item.lat;
            let finalLng = item.lng;

            if (coordinateCounts[coordKey] !== undefined) {
                coordinateCounts[coordKey]++;
                const count = coordinateCounts[coordKey];
                
                // Distribute overlapping markers in a small circle around the original point
                // 0.0006 degrees is approx 65 meters. This is visually separated when zoomed in.
                const angle = (count * 2 * Math.PI) / 8; // Max 8 directions in first ring
                const radius = 0.0006 + Math.floor(count / 8) * 0.0003;
                
                finalLat += Math.sin(angle) * radius;
                finalLng += Math.cos(angle) * radius;
            } else {
                coordinateCounts[coordKey] = 0;
            }

            const marker = L.marker([finalLat, finalLng], {
                icon: createCustomIcon(type)
            });
            
            // Store reference for direct access by ID
            if (item.id) {
                marker.eventId = item.id;
            }

            const popupContent = generatePopupHTML(item, type, colors);
            const paddingLeft = window.innerWidth >= 768 ? 400 : 20;
            const hasImage = !!item.image || (item.images && item.images.length > 0);
            const isMobile = window.innerWidth < 768;
            const maxW = isMobile ? 300 : (hasImage ? 940 : 690);
            const minW = isMobile ? 240 : (hasImage ? 840 : 590);
            const maxH = isMobile ? Math.min(window.innerHeight * 0.65, 420) : null;

            marker.bindPopup(popupContent, { 
                className: hasImage && !isMobile ? 'desktop-image-popup' : '',
                maxWidth: maxW, 
                minWidth: minW,
                maxHeight: maxH,
                autoPanPaddingTopLeft: [paddingLeft, isMobile ? 60 : 40],
                autoPanPaddingBottomRight: [20, isMobile ? 80 : 40]
            });
            marker.on('click', () => {
                if (window.va) window.va('track', 'MarkerClicked', { 
                    city: item.city?.en || 'unknown', 
                    type: type, 
                    date: item.date 
                });
            });
            markerLayerGroup.addLayer(marker);
            
            activeMarkers.push({ data: item, marker: marker });

            const listItem = document.createElement('div');
            listItem.className = `p-3 rounded-xl theme-bg-item border theme-border theme-hover-bg-item transition cursor-pointer group relative overflow-hidden`;
            
            let pCount = 0;
            let vCount = 0;
            if (item.images && item.images.length > 0) {
                pCount = item.images.filter(s => !s.toLowerCase().endsWith('.mp4')).length;
                vCount = item.images.filter(s => s.toLowerCase().endsWith('.mp4')).length;
            } else if (item.image) {
                if (item.image.toLowerCase().endsWith('.mp4')) vCount = 1;
                else pCount = 1;
            }
            let cameraBadge = '';
            if (pCount > 0 || vCount > 0) {
                cameraBadge = '<div class="absolute top-2 right-2 flex gap-1 z-[2] pointer-events-none">';
                if (pCount > 0) {
                    cameraBadge += `
                        <div class="flex items-center gap-1 px-1.5 py-0.5 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] text-[var(--text-muted)] transition transform group-hover:text-[var(--text-main)] shadow-sm" title="${pCount} фото">
                            <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 3L11 9h3l-2.5 5.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 9.5C2 8.67 2.67 8 3.5 8H5l1.5-2h7L15 8h1.5C17.33 8 18 8.67 18 9.5v9c0 .83-.67 1.5-1.5 1.5h-13C2.67 20 2 19.33 2 18.5v-9Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                                <circle cx="10" cy="14" r="3" stroke="currentColor" stroke-width="1.6"/>
                                <circle cx="11.2" cy="12.8" r="0.6" fill="currentColor"/>
                            </svg>
                            <span class="text-[10px] font-bold leading-none">${pCount}</span>
                        </div>
                    `;
                }
                if (vCount > 0) {
                    cameraBadge += `
                        <div class="flex items-center gap-1 px-1.5 py-0.5 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] text-[var(--text-muted)] transition transform group-hover:text-[var(--text-main)] shadow-sm" title="${vCount} відео">
                            <svg class="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/></svg>
                            <span class="text-[10px] font-bold leading-none">${vCount}</span>
                        </div>
                    `;
                }
                cameraBadge += '</div>';
            }
            
            listItem.innerHTML = `
                <div class="absolute left-0 top-0 bottom-0 w-1 ${colors.bg} opacity-50 group-hover:opacity-100 transition"></div>
                ${cameraBadge}
                <div class="pl-2">
                    <div class="text-xs ${colors.text} font-medium mb-1">${item.category}</div>
                    <div class="font-semibold text-sm theme-text-main mb-1 leading-tight transition">${item.target}</div>
                    <div class="text-xs theme-text-muted flex justify-between">
                        <span class="truncate max-w-[60%]">${item.region.split(',')[0]}</span>
                        <span>${item.date}</span>
                    </div>
                </div>
            `;

            listItem.addEventListener('click', () => {
                if (window.va) window.va('track', 'SidebarItemClicked', { 
                    city: item.city?.en || 'unknown', 
                    date: item.date 
                });
                if (window.innerWidth < 768) {
                    closeSidebar();
                    map.setView([finalLat, finalLng], 10, { animate: false });
                    setTimeout(() => {
                        marker.openPopup();
                    }, 100);
                } else {
                    const currentCenter = map.getCenter();
                    const isSameView = (map.getZoom() === 10 && 
                                        Math.abs(currentCenter.lat - finalLat) < 0.0001 && 
                                        Math.abs(currentCenter.lng - finalLng) < 0.0001);
                    
                    if (isSameView) {
                        marker.openPopup();
                    } else {
                        map.once('moveend', () => {
                            marker.openPopup();
                        });
                        map.setView([finalLat, finalLng], 10, { animate: false });
                    }
                }
            });

            marker.on('popupopen', () => {
                listItem.classList.add('theme-active-item');
                if (window.innerWidth >= 768) {
                    listItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });

            marker.on('popupclose', () => {
                listItem.classList.remove('theme-active-item');
            });

            objectList.appendChild(listItem);
        });

        if (data.length > 0) {
            map.fitBounds(markerLayerGroup.getBounds(), { padding: [50, 50], maxZoom: 8 });
        }
    }

    let currentFilter = 'all';
    let currentSearch = '';
    let currentMonth = 'all';

    const monthNames = {
        '01': { ru: 'Январь', uk: 'Січень', en: 'January' },
        '02': { ru: 'Февраль', uk: 'Лютий', en: 'February' },
        '03': { ru: 'Март', uk: 'Березень', en: 'March' },
        '04': { ru: 'Апрель', uk: 'Квітень', en: 'April' },
        '05': { ru: 'Май', uk: 'Травень', en: 'May' },
        '06': { ru: 'Июнь', uk: 'Червень', en: 'June' },
        '07': { ru: 'Июль', uk: 'Липень', en: 'July' },
        '08': { ru: 'Август', uk: 'Серпень', en: 'August' },
        '09': { ru: 'Сентябрь', uk: 'Вересень', en: 'September' },
        '10': { ru: 'Октябрь', uk: 'Жовтень', en: 'October' },
        '11': { ru: 'Ноябрь', uk: 'Листопад', en: 'November' },
        '12': { ru: 'Декабрь', uk: 'Грудень', en: 'December' }
    };

    function getUniqueMonths() {
        const months = new Set();
        strikeData.forEach(item => {
            if (item.date) {
                const parts = item.date.split('.');
                if (parts.length === 3) {
                    months.add(`${parts[2]}-${parts[1]}`);
                }
            }
        });
        return Array.from(months).sort((a, b) => b.localeCompare(a));
    }

    // --- Логика кастомного дропдауна (месяцы) ---
    const customDropdownBtn = document.getElementById('customDropdownBtn');
    const customDropdownMenu = document.getElementById('customDropdownMenu');
    const customDropdownList = document.getElementById('customDropdownList');
    const customDropdownText = document.getElementById('customDropdownText');
    const customDropdownIcon = document.getElementById('customDropdownIcon');

    customDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = customDropdownMenu.classList.contains('opacity-100');
        if (isExpanded) {
            closeCustomDropdown();
        } else {
            openCustomDropdown();
        }
    });

    function openCustomDropdown() {
        customDropdownMenu.classList.remove('opacity-0', 'invisible', 'translate-y-[-10px]');
        customDropdownMenu.classList.add('opacity-100', 'visible', 'translate-y-0');
        customDropdownIcon.classList.add('rotate-180');
    }

    function closeCustomDropdown() {
        customDropdownMenu.classList.add('opacity-0', 'invisible', 'translate-y-[-10px]');
        customDropdownMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
        customDropdownIcon.classList.remove('rotate-180');
    }

    document.addEventListener('click', (e) => {
        const customDropdownContainer = document.getElementById('customDropdownContainer');
        if (customDropdownContainer && !customDropdownContainer.contains(e.target)) {
            closeCustomDropdown();
        }
    });

    // Обновленная функция заполнения
    function populateMonthFilter() {
        const selectedValue = monthFilter.value || 'all';
        monthFilter.innerHTML = '';
        customDropdownList.innerHTML = '';
        
        const allText = i18n.filter_all_months[currentLang] || 'All months';
        
        addOptionToDropdown('all', allText, selectedValue);
        
        const uniqueMonths = getUniqueMonths();
        uniqueMonths.forEach(mKey => {
            const [year, month] = mKey.split('-');
            const monthName = monthNames[month] ? monthNames[month][currentLang] : month;
            const textContent = `${monthName} ${year}`;
            
            addOptionToDropdown(mKey, textContent, selectedValue);
        });
        
        monthFilter.value = selectedValue;
    }

    function addOptionToDropdown(value, text, selectedValue) {
        // Обновляем скрытый select
        const opt = document.createElement('option');
        opt.value = value;
        opt.textContent = text;
        monthFilter.appendChild(opt);

        // Создаем элемент списка для кастомного UI
        const li = document.createElement('li');
        li.className = `px-4 py-2.5 text-sm cursor-pointer transition-colors duration-200 theme-text-main hover:bg-blue-500/10 hover:text-blue-500 flex items-center justify-between group`;
        
        const isSelected = value === selectedValue;
        li.innerHTML = `
            <span class="${isSelected ? 'font-semibold text-blue-500' : ''}">${text}</span>
            ${isSelected ? '<svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>' : ''}
        `;
        
        li.addEventListener('click', () => {
            monthFilter.value = value;
            currentMonth = value;
            
            // Перерисовываем для обновления иконки галочки
            populateMonthFilter(); 
            applyFilters();
            closeCustomDropdown();
        });
        
        if (isSelected) {
            customDropdownText.textContent = text;
        }

        customDropdownList.appendChild(li);
    }

    function applyFilters() {
        let filtered = strikeData.filter(item => {
            const locItem = item[currentLang] || item['en'] || item['ru'];
            const searchMatch = currentSearch === '' || 
                                locItem.target.toLowerCase().includes(currentSearch) || 
                                locItem.region.toLowerCase().includes(currentSearch) ||
                                locItem.details.toLowerCase().includes(currentSearch);
            
            let filterMatch = true;
            if (currentFilter !== 'all') {
                const type = getCategoryType(item.ru.category);
                if (currentFilter === 'Нефтегаз') filterMatch = type === 'oilgas';
                if (currentFilter === 'Топливная логистика') filterMatch = type === 'logistics';
                if (currentFilter === 'ВПК / Авиабазы') filterMatch = type === 'military';
            }

            let monthMatch = true;
            if (currentMonth !== 'all') {
                if (item.date) {
                    const parts = item.date.split('.');
                    if (parts.length === 3) {
                        const itemMonthKey = `${parts[2]}-${parts[1]}`;
                        monthMatch = itemMonthKey === currentMonth;
                    } else {
                        monthMatch = false;
                    }
                } else {
                    monthMatch = false;
                }
            }

            return searchMatch && filterMatch && monthMatch;
        }).map(item => ({
            ...item,
            ...(item[currentLang] || item['en'] || item['ru']),
            originalCategory: item.ru.category
        }));

        // Sort items by date
        filtered.sort((a, b) => {
            const dateA = parseDate(a.date);
            const dateB = parseDate(b.date);
            return currentSortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });

        renderData(filtered);
    }

    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        applyFilters();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => {
                b.classList.remove('bg-blue-500/20', 'text-blue-500', 'border-blue-500/30');
                b.classList.add('theme-filter-bg');
            });
            
            const target = e.currentTarget;
            target.classList.remove('theme-filter-bg');
            target.classList.add('bg-blue-500/20', 'text-blue-500', 'border-blue-500/30');

            currentFilter = target.getAttribute('data-filter');
            applyFilters();
        });
    });

    function closeSidebar() {
        sidebar.classList.remove('translate-x-0', 'md:translate-x-0');
        sidebar.classList.add('-translate-x-full');
        setTimeout(() => {
            openSidebarBtn.classList.remove('scale-0', 'md:scale-0');
            openSidebarBtn.classList.add('scale-100');
        }, 300);
    }

    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0');
        openSidebarBtn.classList.remove('scale-100', 'md:scale-0');
        openSidebarBtn.classList.add('scale-0');
    }

    toggleSidebarBtn.addEventListener('click', closeSidebar);
    openSidebarBtn.addEventListener('click', openSidebar);

    // Welcome Toast Logic
    const welcomeToast = document.getElementById('welcomeToast');
    const closeToastBtn = document.getElementById('closeToastBtn');
    
    if (!localStorage.getItem('strike-map-onboarding')) {
        setTimeout(() => {
            welcomeToast.classList.remove('hidden');
            // Trigger reflow
            void welcomeToast.offsetWidth;
            welcomeToast.classList.remove('translate-y-10', 'opacity-0', 'pointer-events-none');
        }, 1500);
    }

    closeToastBtn.addEventListener('click', () => {
        welcomeToast.classList.add('translate-y-10', 'opacity-0', 'pointer-events-none');
        setTimeout(() => {
            welcomeToast.classList.add('hidden');
        }, 500);
        localStorage.setItem('strike-map-onboarding', 'true');
    });

    function parseDate(dateStr) {
        if (!dateStr) return 0;
        let target = dateStr;
        if (dateStr.includes('-')) {
            const parts = dateStr.split('-');
            target = parts[parts.length - 1];
        }
        const cleanParts = target.trim().split('.');
        if (cleanParts.length === 3) {
            return new Date(cleanParts[2], cleanParts[1] - 1, cleanParts[0]).getTime();
        }
        return 0;
    }

    function updateSortButton() {
        if (!sortToggleBtn) return;
        const label = currentSortOrder === 'asc' ? i18n.sort_asc[currentLang] : i18n.sort_desc[currentLang];
        sortToggleBtn.setAttribute('title', `${i18n.sort_title[currentLang]}: ${label}`);
        
        const path = currentSortOrder === 'asc' 
            ? 'M3 4h13M3 8h9M3 12h6M17 16V10m0 0l-3 3m3-3l3 3' 
            : 'M3 4h13M3 8h9M3 12h6M17 10v6m0 0l-3-3m3 3l3-3';
            
        sortToggleBtn.innerHTML = `<svg class="w-4 h-4 theme-text-main transition-transform duration-300" id="sortIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${path}" />
        </svg>`;
    }

    if (sortToggleBtn) {
        sortToggleBtn.addEventListener('click', () => {
            currentSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc';
            localStorage.setItem('strike-map-sort-order', currentSortOrder);
            updateSortButton();
            applyFilters();
        });
    }

    // ==========================================
    // 35 LARGEST RUSSIAN OIL REFINERIES (НПЗ)
    // ==========================================
    const refineriesList = [
        { id: 'omsk', name: { ru: 'Омский НПЗ', uk: 'Омський НПЗ', en: 'Omsk Refinery' }, company: 'Газпромнефть', region: { ru: 'Омская обл., Омск', uk: 'Омська обл., Омськ', en: 'Omsk Oblast, Omsk' }, capacity: 21.0, query: 'омский', lat: 55.0417, lng: 73.3056 },
        { id: 'kinef', name: { ru: 'Киришский НПЗ (КИНЕФ)', uk: 'Кіриський НПЗ (КІНЕФ)', en: 'Kirishi Refinery (KINEF)' }, company: 'Сургутнефтегаз', region: { ru: 'Ленинградская обл., Кириши', uk: 'Ленінградська обл., Кіриші', en: 'Leningrad Oblast, Kirishi' }, capacity: 20.1, query: 'кириш', lat: 59.4894, lng: 32.0625 },
        { id: 'ryazan', name: { ru: 'Рязанская НПК', uk: 'Рязанська НПК', en: 'Ryazan Refinery (RNPC)' }, company: 'Роснефть', region: { ru: 'Рязанская обл., Рязань', uk: 'Рязанська обл., Рязань', en: 'Ryazan Oblast, Ryazan' }, capacity: 17.1, query: 'рязан', lat: 54.5422, lng: 39.7719 },
        { id: 'norsi', name: { ru: 'Нижегороднефтеоргсинтез (НОРСИ)', uk: 'Нижньогороднафтооргсинтез (НОРСІ)', en: 'NORSI Refinery' }, company: 'Лукойл', region: { ru: 'Нижегородская обл., Кстово', uk: 'Нижньогородська обл., Кстово', en: 'Nizhny Novgorod Oblast, Kstovo' }, capacity: 17.0, query: 'нижегород', lat: 56.1072, lng: 44.1549 },
        { id: 'taneko', name: { ru: 'ТАНЕКО', uk: 'ТАНЕКО', en: 'TANECO Refinery' }, company: 'Татнефть', region: { ru: 'Татарстан, Нижнекамск', uk: 'Татарстан, Нижньокамськ', en: 'Tatarstan, Nizhnekamsk' }, capacity: 16.2, query: 'танеко', lat: 55.5786, lng: 51.9365 },
        { id: 'yanos', name: { ru: 'Славнефть-ЯНОС', uk: 'Славнафта-ЯНОС', en: 'Slavneft-YANOS' }, company: 'Славнефть', region: { ru: 'Ярославская обл., Ярославль', uk: 'Ярославська обл., Ярославль', en: 'Yaroslavl Oblast, Yaroslavl' }, capacity: 15.0, query: 'янос', lat: 57.6012, lng: 39.8745 },
        { id: 'volgograd', name: { ru: 'Волгоградский НПЗ', uk: 'Волгоградський НПЗ', en: 'Volgograd Refinery' }, company: 'Лукойл', region: { ru: 'Волгоградская обл., Волгоград', uk: 'Волгоградська обл., Волгоград', en: 'Volgograd Oblast, Volgograd' }, capacity: 14.8, query: 'волгоград', lat: 48.4909, lng: 44.6101 },
        { id: 'perm', name: { ru: 'Пермнефтеоргсинтез', uk: 'Пермнафтооргсинтез', en: 'Perm Refinery' }, company: 'Лукойл', region: { ru: 'Пермский край, Пермь', uk: 'Пермський край, Перм', en: 'Perm Krai, Perm' }, capacity: 13.1, query: 'пермнефте', lat: 57.915, lng: 56.175 },
        { id: 'moscow', name: { ru: 'Московский НПЗ (МНПЗ)', uk: 'Московський НПЗ (МНПЗ)', en: 'Moscow Refinery' }, company: 'Газпромнефть', region: { ru: 'Москва, Капотня', uk: 'Москва, Капотня', en: 'Moscow, Kapotnya' }, capacity: 12.1, query: 'московский нпз', lat: 55.6536, lng: 37.8078 },
        { id: 'ufaneftekhim', name: { ru: 'Башнефть-Уфанефтехим', uk: 'Башнафта-Уфанафтохім', en: 'Bashneft-Ufaneftekhim' }, company: 'Башнефть / Роснефть', region: { ru: 'Башкортостан, Уфа', uk: 'Башкортостан, Уфа', en: 'Bashkortostan, Uфа' }, capacity: 12.0, query: 'уфанефтехим', lat: 54.9333, lng: 56.0667 },
        { id: 'tuapse', name: { ru: 'Туапсинский НПЗ', uk: 'Туапсинський НПЗ', en: 'Tuapse Refinery' }, company: 'Роснефть', region: { ru: 'Краснодарский край, Туапсе', uk: 'Краснодарський край, Туапсе', en: 'Krasnodar Krai, Tuapse' }, capacity: 12.0, query: 'туапсинский', lat: 44.05, lng: 39.18 },
        { id: 'angarsk', name: { ru: 'Ангарская НХК', uk: 'Ангарська НХК', en: 'Angarsk Petrochemical' }, company: 'Роснефть', region: { ru: 'Иркутская обл., Ангарск', uk: 'Іркутська обл., Ангарськ', en: 'Irkutsk Oblast, Angarsk' }, capacity: 10.2, lat: 52.544, lng: 103.888 },
        { id: 'salavat', name: { ru: 'Газпром нефтехим Салават', uk: 'Газпром нафтохім Салават', en: 'Gazprom Salavat' }, company: 'Газпром', region: { ru: 'Башкортостан, Салават', uk: 'Башкортостан, Салават', en: 'Bashkortostan, Salavat' }, capacity: 10.0, query: 'салават', lat: 53.4073, lng: 55.8817 },
        { id: 'syzran', name: { ru: 'Сызранский НПЗ', uk: 'Сизранський НПЗ', en: 'Syzran Refinery' }, company: 'Роснефть', region: { ru: 'Самарская обл., Сызрань', uk: 'Самарська обл., Сизрань', en: 'Samara Oblast, Syzran' }, capacity: 8.5, query: 'сызран', lat: 53.0854, lng: 48.3971 },
        { id: 'novokuib', name: { ru: 'Новокуйбышевский НПЗ', uk: 'Новокуйбишевський НПЗ', en: 'Novokuibyshevsk Refinery' }, company: 'Роснефть', region: { ru: 'Самарская обл., Новокуйбышевск', uk: 'Самарська обл., Новокуйбишевськ', en: 'Samara Oblast, Novokuibyshevsk' }, capacity: 8.3, query: 'новокуйбышев', lat: 53.1258, lng: 49.9086 },
        { id: 'taif', name: { ru: 'ТАИФ-НК', uk: 'ТАЇФ-НК', en: 'TAIF-NK Refinery' }, company: 'ТАИФ', region: { ru: 'Татарстан, Нижнекамск', uk: 'Татарстан, Нижньокамськ', en: 'Tatarstan, Nizhnekamsk' }, capacity: 8.3, query: 'таиф', lat: 55.6049, lng: 51.9557 },
        { id: 'komsomolsk', name: { ru: 'Комсомольский НПЗ', uk: 'Комсомольський НПЗ', en: 'Komsomolsk Refinery' }, company: 'Роснефть', region: { ru: 'Хабаровский край, Комсомольск-на-Амуре', uk: 'Хабаровський край, Комсомольськ-на-Амурі', en: 'Khabarovsk Krai, Komsomolsk-on-Amur' }, capacity: 8.3, query: 'комсомольский нпз', lat: 50.6141, lng: 137.064 },
        { id: 'unpz', name: { ru: 'Башнефть-УНПЗ (Уфимский НПЗ)', uk: 'Башнафта-УНПЗ (Уфимський НПЗ)', en: 'Bashneft-UNPZ' }, company: 'Башнефть / Роснефть', region: { ru: 'Башкортостан, Уфа', uk: 'Башкортостан, Уфа', en: 'Bashkortostan, Ufa' }, capacity: 7.5, query: 'унпз', lat: 54.8872, lng: 56.1264 },
        { id: 'tyumen', name: { ru: 'Тюменский НПЗ (Антипинский)', uk: 'Тюменський НПЗ (Антипінський)', en: 'Tyumen Refinery' }, company: 'Русинвест', region: { ru: 'Тюменская обл., Тюмень', uk: 'Тюменська обл., Тюмень', en: 'Tyumen Oblast, Tyumen' }, capacity: 7.5, query: 'тюмен', lat: 57.1086, lng: 65.6583 },
        { id: 'achinsk', name: { ru: 'Ачинский НПЗ', uk: 'Ачинський НПЗ', en: 'Achinsk Refinery' }, company: 'Роснефть', region: { ru: 'Красноярский край, Ачинск', uk: 'Красноярський край, Ачинськ', en: 'Krasnoyarsk Krai, Achinsk' }, capacity: 7.5, lat: 56.444, lng: 90.548 },
        { id: 'novoil', name: { ru: 'Башнефть-Новойл', uk: 'Башнафта-Новойл', en: 'Bashneft-Novoil' }, company: 'Башнефть / Роснефть', region: { ru: 'Башкортостан, Уфа', uk: 'Башкортостан, Уфа', en: 'Bashkortostan, Ufa' }, capacity: 7.1, query: 'новойл', lat: 54.83, lng: 56.12 },
        { id: 'saratov', name: { ru: 'Саратовский НПЗ', uk: 'Саратовський НПЗ', en: 'Saratov Refinery' }, company: 'Роснефть', region: { ru: 'Саратовская обл., Саратов', uk: 'Саратовська обл., Саратов', en: 'Saratov Oblast, Saratov' }, capacity: 7.0, query: 'саратовский нпз', lat: 51.4506, lng: 45.9439 },
        { id: 'kuibyshev', name: { ru: 'Куйбышевский НПЗ', uk: 'Куйбишевський НПЗ', en: 'Kuibyshev Refinery' }, company: 'Роснефть', region: { ru: 'Самарская обл., Самара', uk: 'Самарська обл., Самара', en: 'Samara Oblast, Samara' }, capacity: 7.0, lat: 53.111, lng: 50.052 },
        { id: 'ilsky', name: { ru: 'Ильский НПЗ', uk: 'Ільський НПЗ', en: 'Ilsky Refinery' }, company: 'КНГК-ИНПЗ', region: { ru: 'Краснодарский край, Ильский', uk: 'Краснодарський край, Ільський', en: 'Krasnodar Krai, Ilsky' }, capacity: 6.6, query: 'ильск', lat: 44.8533, lng: 38.5684 },
        { id: 'afipsky', name: { ru: 'Афипский НПЗ', uk: 'Афіпський НПЗ', en: 'Afipsky Refinery' }, company: 'ФортеИнвест', region: { ru: 'Краснодарский край, Афипский', uk: 'Краснодарський край, Афіпський', en: 'Krasnodar Krai, Afipsky' }, capacity: 6.0, query: 'афип', lat: 44.8717, lng: 38.8336 },
        { id: 'orsk', name: { ru: 'Орскнефтеоргсинтез (Орский НПЗ)', uk: 'Орськнафтооргсинтез (Орський НПЗ)', en: 'Orsk Refinery' }, company: 'ФортеИнвест', region: { ru: 'Оренбургская обл., Орск', uk: 'Оренбурзька обл., Орськ', en: 'Orenburg Oblast, Orsk' }, capacity: 6.0, query: 'орск', lat: 51.2506, lng: 58.5233 },
        { id: 'novoshakht', name: { ru: 'Новошахтинский ЗНП', uk: 'Новошахтинський ЗНП', en: 'Novoshakhtinsk Refinery' }, company: 'Петон', region: { ru: 'Ростовская обл., Новошахтинск', uk: 'Ростовська обл., Новошахтинськ', en: 'Rostov Oblast, Novoshakhtinsk' }, capacity: 5.6, query: 'новошахтин', lat: 47.78, lng: 39.9 },
        { id: 'khabarovsk', name: { ru: 'Хабаровский НПЗ', uk: 'Хабаровський НПЗ', en: 'Khabarovsk Refinery' }, company: 'ННК', region: { ru: 'Хабаровский край, Хабаровск', uk: 'Хабаровський край, Хабаровськ', en: 'Khabarovsk Krai, Khabarovsk' }, capacity: 5.0, lat: 48.513, lng: 135.082 },
        { id: 'slavyansk', name: { ru: 'Славянский НПЗ (Славянск ЭКО)', uk: 'Слов\'янський НПЗ (Слов\'янськ ЕКО)', en: 'Slavyansk Refinery' }, company: 'Славянск ЭКО', region: { ru: 'Краснодарский край, Славянск-на-Кубани', uk: 'Краснодарський край, Слов\'янськ-на-Кубані', en: 'Krasnodar Krai, Slavyansk-on-Kuban' }, capacity: 4.5, query: 'славянск', lat: 45.242, lng: 38.106 },
        { id: 'ukhta', name: { ru: 'Ухтинский НПЗ', uk: 'Ухтинський НПЗ', en: 'Ukhta Refinery' }, company: 'Лукойл', region: { ru: 'Республика Коми, Ухта', uk: 'Республіка Комі, Ухта', en: 'Komi Republic, Ukhta' }, capacity: 4.2, lat: 63.567, lng: 53.683 },
        { id: 'yaya', name: { ru: 'Яйский НПЗ', uk: 'Яйський НПЗ', en: 'Yaya Refinery' }, company: 'НефтеХимСервис', region: { ru: 'Кемеровская обл., Яя', uk: 'Кемеровська обл., Яя', en: 'Kemerovo Oblast, Yaya' }, capacity: 3.3, lat: 56.208, lng: 86.417 },
        { id: 'krasnodar', name: { ru: 'Краснодарский НПЗ', uk: 'Краснодарський НПЗ', en: 'Krasnodar Refinery' }, company: 'КНГК', region: { ru: 'Краснодарский край, Краснодар', uk: 'Краснодарський край, Краснодар', en: 'Krasnodar Krai, Krasnodar' }, capacity: 3.1, lat: 45.011, lng: 38.992 },
        { id: 'astrakhan', name: { ru: 'Астраханский ГПЗ / НПЗ', uk: 'Астраханський ГПЗ / НПЗ', en: 'Astrakhan Gas/Oil Processing' }, company: 'Газпром', region: { ru: 'Астраханская обл., Аксарайский', uk: 'Астраханська обл., Аксарайський', en: 'Astrakhan Oblast, Aksaraysky' }, capacity: 3.0, query: 'астраханский нпз', lat: 46.7736, lng: 48.1139 },
        { id: 'mari', name: { ru: 'Марийский НПЗ', uk: 'Марійський НПЗ', en: 'Mariy Refinery' }, company: 'Нефтебитум', region: { ru: 'Марий Эл, с. Табашино', uk: 'Марій Ел, с. Табашино', en: 'Mari El, Tabashino' }, capacity: 1.6, lat: 56.967, lng: 48.433 },
        { id: 'firstplant', name: { ru: 'Первый Завод', uk: 'Перший Завод', en: 'Pervy Zavod' }, company: 'Первый Завод', region: { ru: 'Калужская обл., Полотняный Завод', uk: 'Калузька обл., Полотняний Завод', en: 'Kaluga Oblast, Polotnyany Zavod' }, capacity: 1.2, query: 'первый завод', lat: 54.7312, lng: 35.9719 }
    ];

    // Icons
    const npzRefinerySvg = `
        <svg class="w-8 h-8 text-slate-400 dark:text-slate-500 group-hover:text-slate-200 transition-colors" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="7" y="10" width="10" height="34" rx="2"/>
            <line x1="7" y1="18" x2="17" y2="18"/>
            <line x1="7" y1="26" x2="17" y2="26"/>
            <line x1="7" y1="34" x2="17" y2="34"/>
            <path d="M12 10V4m-2 0h4"/>
            <rect x="21" y="16" width="10" height="28" rx="2"/>
            <line x1="21" y1="24" x2="31" y2="24"/>
            <line x1="21" y1="32" x2="31" y2="32"/>
            <path d="M26 16V10m-2 0h4"/>
            <rect x="35" y="24" width="10" height="20" rx="3"/>
            <path d="M35 28h10"/>
            <path d="M17 22h4m10 8h4"/>
        </svg>
    `;

    const npzFlameSvg = `
        <svg class="fire-overlay-icon w-9 h-9" viewBox="0 0 32 32" fill="none">
            <path d="M16 2C16 2 11 9 11 15C11 17.5 12 19.5 13.5 21C11.5 20.5 10 18.5 10 16C7 18 5 21 5 24C5 28.4 8.6 32 13 32C21.8 32 27 25 27 18C27 11 20 6 20 6C20 6 21 10 19 12C17.5 8 16 2 16 2Z" fill="url(#flameGrad1)"/>
            <path d="M16 11C16 11 13 15 13 19C13 22 15 24.5 17 25C15.5 24.5 14.5 23 14.5 21.5C14.5 19.5 16 18 16 18C16 18 17 20 18 21C19 22 20 23 20 24.5C20 27 18 29 15.5 29C13.5 29 11 28 10 25C11 26 12.5 26.5 14 26.5C16.5 26.5 18 24.5 18 22.5C18 20 16 17 16 11Z" fill="url(#flameGrad2)"/>
            <defs>
                <linearGradient id="flameGrad1" x1="5" y1="2" x2="27" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f97316"/>
                    <stop offset="0.5" stop-color="#ef4444"/>
                    <stop offset="1" stop-color="#b91c1c"/>
                </linearGradient>
                <linearGradient id="flameGrad2" x1="10" y1="11" x2="20" y2="29" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fef08a"/>
                    <stop offset="0.4" stop-color="#facc15"/>
                    <stop offset="1" stop-color="#f97316"/>
                </linearGradient>
            </defs>
        </svg>
    `;

    // Process & connect refineries to strikeData
    function computeRefineriesStatus() {
        refineriesList.forEach(ref => {
            if (ref.query) {
                const q = ref.query.toLowerCase();
                const matched = strikeData.filter(s => {
                    const t = (s.ru?.target || '').toLowerCase();
                    return t.includes(q);
                });
                if (matched.length > 0) {
                    ref.isHit = true;
                    ref.strikeCount = matched.length;
                    ref.latestDate = matched[0].date;
                    ref.strikeId = matched[0].id;
                    ref.lat = matched[0].lat;
                    ref.lng = matched[0].lng;
                } else {
                    ref.isHit = false;
                    ref.strikeCount = 0;
                }
            } else {
                ref.isHit = false;
                ref.strikeCount = 0;
            }
        });
    }

    computeRefineriesStatus();

    let isNpzDrawerOpen = false;

    function renderNpzDrawer() {
        const grid = document.getElementById('npzGrid');
        if (!grid) return;

        computeRefineriesStatus();

        let totalCap = 0;
        let struckCap = 0;
        let struckCount = 0;

        refineriesList.forEach(r => {
            totalCap += r.capacity;
            if (r.isHit) {
                struckCap += r.capacity;
                struckCount++;
            }
        });

        const totalRefineries = refineriesList.length;
        const intactCount = totalRefineries - struckCount;
        const struckPercent = ((struckCount / totalRefineries) * 100).toFixed(1);
        const intactPercent = ((intactCount / totalRefineries) * 100).toFixed(1);
        const struckCapPercent = ((struckCap / totalCap) * 100).toFixed(1);

        const countText = document.getElementById('npzStruckCountText');
        if (countText) countText.textContent = struckCount;
        const struckPercentText = document.getElementById('npzStruckPercentText');
        if (struckPercentText) struckPercentText.textContent = `(${struckPercent}%)`;

        const intactCountText = document.getElementById('npzIntactCountText');
        if (intactCountText) intactCountText.textContent = intactCount;
        const intactPercentText = document.getElementById('npzIntactPercentText');
        if (intactPercentText) intactPercentText.textContent = `(${intactPercent}%)`;

        const struckCapText = document.getElementById('npzStruckCapacityText');
        if (struckCapText) struckCapText.textContent = struckCap.toFixed(1);
        const struckCapPercentText = document.getElementById('npzStruckCapacityPercentText');
        if (struckCapPercentText) struckCapPercentText.textContent = `(${struckCapPercent}%)`;

        const damageRatioText = document.getElementById('npzDamageRatioText');
        if (damageRatioText) {
            const ratioSuffix = currentLang === 'en' ? 'under strike' : (currentLang === 'uk' ? 'під ударом' : 'под ударом');
            damageRatioText.textContent = `${struckCapPercent}% ${ratioSuffix}`;
        }

        const progressBar = document.getElementById('npzCapacityProgressBar');
        if (progressBar) progressBar.style.width = `${struckCapPercent}%`;

        // Render cards
        grid.innerHTML = '';

        refineriesList.forEach(ref => {
            const refName = ref.name[currentLang] || ref.name.ru;
            const refRegion = ref.region[currentLang] || ref.region.ru;

            const card = document.createElement('div');
            card.className = `npz-card relative flex flex-col justify-between p-3 rounded-2xl border select-none group transition-all duration-200 cursor-pointer ${
                ref.isHit 
                    ? 'bg-gradient-to-b from-orange-500/10 via-amber-500/5 to-transparent border-orange-500/30 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20' 
                    : 'theme-bg-item border-slate-700/30 dark:border-slate-800/60 hover:border-slate-500/50 hover:shadow-md'
            }`;

            const statusBadge = ref.isHit 
                ? `<span class="px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded bg-red-500/20 text-red-400 border border-red-500/30 flex items-center gap-1"><span class="animate-pulse">🔥</span> ${i18n.npz_status_struck[currentLang].split('/')[0].trim()}</span>`
                : `<span class="px-1.5 py-0.5 text-[10px] font-semibold tracking-wider rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">🛡️ ${i18n.npz_legend_intact[currentLang]}</span>`;

            card.innerHTML = `
                <!-- Top row: Status Badge & Company -->
                <div class="flex justify-between items-start gap-1 mb-1">
                    ${statusBadge}
                    <span class="text-[10px] font-semibold theme-text-muted truncate max-w-[85px]" title="${ref.company}">
                        ${ref.company}
                    </span>
                </div>

                <!-- Icon area -->
                <div class="relative h-12 flex items-center justify-center my-1.5">
                    <div class="relative flex items-center justify-center">
                        ${npzRefinerySvg}
                        ${ref.isHit ? `<div class="absolute inset-0 flex items-center justify-center pointer-events-none">${npzFlameSvg}</div>` : ''}
                    </div>
                </div>

                <!-- Info area -->
                <div class="text-center mt-1">
                    <h4 class="text-xs font-bold theme-text-main leading-snug line-clamp-2 h-8 flex items-center justify-center" title="${refName}">
                        ${refName}
                    </h4>
                    <div class="text-[11px] theme-text-muted mt-0.5 truncate" title="${refRegion}">
                        ${refRegion}
                    </div>
                    <div class="mt-2 pt-1.5 border-t theme-border flex items-baseline justify-center gap-1">
                        <span class="text-sm font-black tracking-tight ${ref.isHit ? 'text-amber-500' : 'theme-text-main'}">
                            ${ref.capacity.toFixed(1)}
                        </span>
                        <span class="text-[10px] font-medium theme-text-muted">
                            ${i18n.npz_capacity_unit[currentLang]}
                        </span>
                    </div>
                </div>
            `;

            // Attach tooltip & click handler
            attachCardEvents(card, ref);

            grid.appendChild(card);
        });
    }

    function attachCardEvents(card, ref) {
        card.addEventListener('mouseenter', (e) => showNpzTooltip(e, ref));
        card.addEventListener('mousemove', (e) => updateNpzTooltipPosition(e));
        card.addEventListener('mouseleave', hideNpzTooltip);
        card.addEventListener('click', () => {
            hideNpzTooltip();
            openRefineryOnMap(ref);
        });
    }

    function showNpzTooltip(e, ref) {
        const tooltip = document.getElementById('npzFloatingTooltip');
        if (!tooltip) return;
        const refName = ref.name[currentLang] || ref.name.ru;
        const refRegion = ref.region[currentLang] || ref.region.ru;

        let content = `
            <div class="font-bold text-sm theme-text-main flex items-center gap-1.5 mb-1">
                <span>${ref.isHit ? '🔥' : '🛡️'}</span>
                <span>${refName}</span>
            </div>
            <div class="text-[11px] theme-text-muted mb-2">${refRegion}</div>
        `;

        if (ref.isHit) {
            content += `
                <div class="space-y-1.5 py-2 border-y theme-border my-2">
                    <div class="flex justify-between gap-3 items-center">
                        <span class="theme-text-muted text-[11px]">${i18n.npz_tooltip_strike_date[currentLang]}</span>
                        <span class="font-extrabold text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">${ref.latestDate || '—'}</span>
                    </div>
                    ${ref.strikeCount > 1 ? `
                    <div class="flex justify-between gap-3 items-center">
                        <span class="theme-text-muted text-[11px]">${i18n.npz_tooltip_strike_count[currentLang]}</span>
                        <span class="font-bold text-amber-400">${ref.strikeCount}</span>
                    </div>` : ''}
                    <div class="flex justify-between gap-3 items-center">
                        <span class="theme-text-muted text-[11px]">${i18n.npz_capacity_total[currentLang]}:</span>
                        <span class="font-bold text-amber-500">${ref.capacity.toFixed(1)} ${i18n.npz_capacity_unit[currentLang]}</span>
                    </div>
                </div>
                <div class="mt-2 text-blue-400 font-bold text-[11px] flex items-center gap-1 group-hover:underline">
                    <span>${i18n.npz_tooltip_view_card[currentLang]}</span>
                </div>
            `;
        } else {
            content += `
                <div class="space-y-1.5 py-2 border-y theme-border my-2">
                    <div class="flex justify-between gap-3 items-center">
                        <span class="theme-text-muted text-[11px]">Статус:</span>
                        <span class="font-semibold text-emerald-400">${i18n.npz_status_intact[currentLang]}</span>
                    </div>
                    <div class="flex justify-between gap-3 items-center">
                        <span class="theme-text-muted text-[11px]">${i18n.npz_capacity_total[currentLang]}:</span>
                        <span class="font-bold theme-text-main">${ref.capacity.toFixed(1)} ${i18n.npz_capacity_unit[currentLang]}</span>
                    </div>
                </div>
            `;
        }

        tooltip.innerHTML = content;
        tooltip.classList.remove('opacity-0', 'invisible');
        tooltip.classList.add('opacity-100', 'visible');
        updateNpzTooltipPosition(e);
    }

    function updateNpzTooltipPosition(e) {
        const tooltip = document.getElementById('npzFloatingTooltip');
        if (!tooltip) return;
        const x = e.clientX;
        const y = e.clientY;
        const pad = 16;

        const tWidth = tooltip.offsetWidth || 230;
        const tHeight = tooltip.offsetHeight || 140;

        let left = x + pad;
        let top = y - tHeight / 2;

        if (left + tWidth > window.innerWidth - 10) {
            left = x - tWidth - pad;
        }
        if (top < 10) top = 10;
        if (top + tHeight > window.innerHeight - 10) {
            top = window.innerHeight - tHeight - 10;
        }

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
    }

    function hideNpzTooltip() {
        const tooltip = document.getElementById('npzFloatingTooltip');
        if (!tooltip) return;
        tooltip.classList.add('opacity-0', 'invisible');
        tooltip.classList.remove('opacity-100', 'visible');
    }

    function openRefineryOnMap(ref) {
        if (!ref.isHit || !ref.strikeId) {
            if (!ref.isHit) {
                showToast(`${ref.name[currentLang] || ref.name.ru}: ${i18n.npz_tooltip_not_struck[currentLang]}`);
            }
            return;
        }

        closeNpzDrawer();

        if (window.innerWidth < 768 && typeof closeSidebar === 'function') {
            closeSidebar();
        }

        // Check if marker exists in current activeMarkers
        const target = activeMarkers.find(m => m && m.data && m.data.id === ref.strikeId);
        if (target && target.marker) {
            map.setView(target.marker.getLatLng(), 11, { animate: true });
            setTimeout(() => {
                target.marker.openPopup();
            }, 350);
        } else {
            // Reset filters to ensure marker is visible
            currentFilter = 'all';
            currentMonth = 'all';
            currentSearch = '';
            const sInput = document.getElementById('searchInput');
            if (sInput) sInput.value = '';
            document.querySelectorAll('.filter-btn').forEach((b, i) => {
                if (i === 0) {
                    b.classList.add('bg-blue-500/20', 'text-blue-500', 'border-blue-500/30');
                    b.classList.remove('theme-filter-bg');
                } else {
                    b.classList.remove('bg-blue-500/20', 'text-blue-500', 'border-blue-500/30');
                    b.classList.add('theme-filter-bg');
                }
            });
            applyFilters();

            setTimeout(() => {
                const found = activeMarkers.find(m => m && m.data && m.data.id === ref.strikeId);
                if (found && found.marker) {
                    map.setView(found.marker.getLatLng(), 11, { animate: true });
                    setTimeout(() => {
                        found.marker.openPopup();
                    }, 350);
                } else if (ref.lat && ref.lng) {
                    map.setView([ref.lat, ref.lng], 11, { animate: true });
                }
            }, 200);
        }
    }

    function openNpzDrawer() {
        isNpzDrawerOpen = true;
        const drawer = document.getElementById('npzDrawer');
        const backdrop = document.getElementById('npzDrawerBackdrop');
        if (drawer) {
            drawer.classList.add('open');
        }
        if (backdrop) {
            backdrop.classList.remove('opacity-0', 'pointer-events-none');
            backdrop.classList.add('opacity-100', 'pointer-events-auto');
        }
        renderNpzDrawer();
        if (window.va) window.va('track', 'NpzDrawerOpened');
    }

    function closeNpzDrawer() {
        isNpzDrawerOpen = false;
        const drawer = document.getElementById('npzDrawer');
        const backdrop = document.getElementById('npzDrawerBackdrop');
        if (drawer) {
            drawer.classList.remove('open');
        }
        if (backdrop) {
            backdrop.classList.add('opacity-0', 'pointer-events-none');
            backdrop.classList.remove('opacity-100', 'pointer-events-auto');
        }
        hideNpzTooltip();
    }

    function toggleNpzDrawer() {
        if (isNpzDrawerOpen) {
            closeNpzDrawer();
        } else {
            openNpzDrawer();
        }
    }

    const npzTabBtn = document.getElementById('npzTabBtn');
    const npzDrawerCloseTab = document.getElementById('npzDrawerCloseTab');
    const closeNpzDrawerBtn = document.getElementById('closeNpzDrawerBtn');
    const npzDrawerBackdrop = document.getElementById('npzDrawerBackdrop');

    if (npzTabBtn) npzTabBtn.addEventListener('click', toggleNpzDrawer);
    if (npzDrawerCloseTab) npzDrawerCloseTab.addEventListener('click', closeNpzDrawer);
    if (closeNpzDrawerBtn) closeNpzDrawerBtn.addEventListener('click', closeNpzDrawer);
    if (npzDrawerBackdrop) npzDrawerBackdrop.addEventListener('click', closeNpzDrawer);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isNpzDrawerOpen) {
            closeNpzDrawer();
        }
    });

    // Expose renderNpzDrawer globally for setLang call
    window.renderNpzDrawer = renderNpzDrawer;
    window.openRefineryOnMap = openRefineryOnMap;

    setLang(currentLang);

    // Check for ID in URL to automatically open a specific popup
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const eventIdToOpen = urlParams.get('id');
        if (eventIdToOpen) {
            const targetMarkerObj = activeMarkers.find(m => m && m.data && m.data.id && m.data.id.toString() === eventIdToOpen);
            if (targetMarkerObj && targetMarkerObj.marker && typeof targetMarkerObj.marker.getLatLng === 'function') {
                // Wait for map to finish initial rendering
                setTimeout(() => {
                    try {
                        map.setView(targetMarkerObj.marker.getLatLng(), 11, { animate: false });
                        targetMarkerObj.marker.openPopup();
                        
                        // On mobile, close sidebar automatically
                        if (window.innerWidth < 768 && sidebar) {
                            sidebar.classList.remove('open');
                        }
                    } catch (err) {
                        console.error('Error centering map or opening popup for URL ID:', err);
                    }
                }, 500);
            }
        }
    } catch (e) {
        console.error('Error handling URL query params:', e);
    }

    // Modal Close Logic
    const imageModal = document.getElementById('imageModal');
    const closeImageModalBtn = document.getElementById('closeImageModalBtn');
    if (imageModal && closeImageModalBtn) {
        closeImageModalBtn.addEventListener('click', () => {
            imageModal.classList.add('opacity-0');
            const modalVideo = document.getElementById('modalVideo');
            if (modalVideo) {
                modalVideo.pause();
            }
            setTimeout(() => {
                imageModal.classList.add('hidden');
                imageModal.classList.remove('flex');
            }, 300);
        });
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                closeImageModalBtn.click();
            }
        });
    }

    // Gallery navigation
    const prevBtn = document.getElementById('prevImageBtn');
    const nextBtn = document.getElementById('nextImageBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentGalleryImages.length > 1) {
                currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
                updateModalImage();
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentGalleryImages.length > 1) {
                currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length;
                updateModalImage();
            }
        });
    }

    // Swipe support for gallery
    let touchStartX = 0;
    let touchEndX = 0;
    if (imageModal) {
        imageModal.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, {passive: true});
        
        imageModal.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, {passive: true});
        
        function handleSwipe() {
            if (currentGalleryImages.length <= 1) return;
            const swipeThreshold = 50;
            if (touchEndX < touchStartX - swipeThreshold) {
                // Swipe left -> next image
                currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length;
                updateModalImage();
            }
            if (touchEndX > touchStartX + swipeThreshold) {
                // Swipe right -> prev image
                currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
                updateModalImage();
            }
        }
    }
});
