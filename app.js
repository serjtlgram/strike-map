document.addEventListener('DOMContentLoaded', () => {
    // i18n Dictionary
    const i18n = {
        title: { ru: 'Пораженные объекты', uk: 'Уражені об\'єкти' },
        search: { ru: 'Поиск по названию или региону...', uk: 'Пошук за назвою чи регіоном...' },
        filter_all: { ru: 'Все', uk: 'Всі' },
        filter_oil: { ru: 'Нефтегаз', uk: 'Нафтогаз' },
        filter_logistics: { ru: 'Логистика', uk: 'Логістика' },
        filter_military: { ru: 'ВПК / Авиабазы', uk: 'ВПК / Авіабази' },
        total: { ru: 'Всего объектов:', uk: 'Всього об\'єктів:' },
        updated: { ru: 'Обновлено: Июнь 2026', uk: 'Оновлено: Червень 2026' },
        mobile_btn: { ru: 'Список объектов', uk: 'Список об\'єктів' },
        distance: { ru: 'Дальность: ~{dist} км от линии фронта', uk: 'Дальність: ~{dist} км від лінії фронту' },
        not_found: { ru: 'Объекты не найдены', uk: 'Об\'єкти не знайдені' },
        onboarding: { ru: 'Жми на мигающую точку на территории России и смотри, что там демилитаризировали в рамках эСВэО.', uk: 'Тисни на мигаючу крапку на території Росії і дивися, що там демілітаризували в рамках еСВеО.' }
    };

    let currentLang = localStorage.getItem('strike-map-lang') || 'uk';

    function setLang(lang) {
        currentLang = lang;
        localStorage.setItem('strike-map-lang', lang);
        
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
            if (i18n[key]) el.textContent = i18n[key][lang];
        });
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (i18n[key]) el.placeholder = i18n[key][lang];
        });

        // Populate/update month filter options with correct lang
        if (typeof populateMonthFilter === 'function') populateMonthFilter();

        // Use setTimeout to ensure functions are defined
        if (typeof applyFilters === 'function') applyFilters();
    }

    document.querySelectorAll('.lang-selector').forEach(btn => {
        btn.addEventListener('click', () => {
            setLang(btn.getAttribute('data-set-lang'));
        });
    });

    // 1. Initialize Map
    const map = L.map('map', {
        zoomControl: false
    }).setView([53.0, 42.0], 5);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Tile Layers for themes
    const tileLayers = {
        dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap & CARTO',
            subdomains: 'abcd',
            maxZoom: 19
        }),
        light: L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap & CARTO',
            subdomains: 'abcd',
            maxZoom: 19
        }),
        beige: L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap & CARTO',
            subdomains: 'abcd',
            maxZoom: 19
        })
    };

    let currentTileLayer = tileLayers.dark;
    currentTileLayer.addTo(map);

    let markerLayerGroup = L.featureGroup().addTo(map);
    let activeMarkers = [];

    const searchInput = document.getElementById('searchInput');
    const monthFilter = document.getElementById('monthFilter');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const objectList = document.getElementById('objectList');
    const totalCount = document.getElementById('totalCount');
    
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
    const openSidebarBtn = document.getElementById('openSidebarBtn');
    const themeSelectors = document.querySelectorAll('.theme-selector');

    // Theme Management
    function setTheme(theme) {
        localStorage.setItem('strike-map-theme', theme);
        
        // Set attribute for CSS on html element (matches :root)
        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', theme);
        }

        // Swap Map Tiles
        map.removeLayer(currentTileLayer);
        currentTileLayer = tileLayers[theme];
        currentTileLayer.addTo(map);

        // Update Theme Buttons
        themeSelectors.forEach(btn => {
            btn.classList.remove('ring-2', 'ring-blue-500', 'ring-offset-2');
            if (btn.getAttribute('data-set-theme') === theme) {
                btn.classList.add('ring-2', 'ring-blue-500', 'ring-offset-2');
            }
        });
        
        // Ensure ring offset matches body bg
        const bgColor = getComputedStyle(document.body).getPropertyValue('--bg-body').trim();
        document.documentElement.style.setProperty('--tw-ring-offset-color', bgColor);
    }

    themeSelectors.forEach(btn => {
        btn.addEventListener('click', () => {
            setTheme(btn.getAttribute('data-set-theme'));
        });
    });

    // Initialize default theme from localStorage or default to beige
    const savedTheme = localStorage.getItem('strike-map-theme') || 'beige';
    setTheme(savedTheme);

    function getCategoryType(category) {
        if (!category) return 'other';
        const cat = category.toLowerCase();
        if (cat.includes('нефтегаз') || cat.includes('нафтогаз')) return 'oilgas';
        if (cat.includes('логистика') || cat.includes('логістика')) return 'logistics';
        if (cat.includes('впк') || cat.includes('авиабаза') || cat.includes('авіабаза')) return 'military';
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
                <div class="absolute w-full h-full ${colors.bg} opacity-20 rounded-full animate-ping"></div>
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
        return `
            <div class="p-5 font-sans">
                <div class="mb-3">
                    <span class="inline-block px-2.5 py-1 rounded-full text-xs font-semibold theme-bg-item border ${colors.border} ${colors.text} mb-2">
                        ${item.category}
                    </span>
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

                <div class="theme-bg-input rounded-lg p-3 border theme-border mb-3">
                    <p class="text-sm theme-text-main leading-relaxed">${item.details}</p>
                </div>

                <div class="text-xs theme-text-muted flex items-center gap-1.5 mt-2">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span class="truncate">${item.source}</span>
                </div>
            </div>
        `;
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

        data.forEach((item, index) => {
            const type = getCategoryType(item.category);
            const colors = getCategoryColorClass(type);

            const marker = L.marker([item.lat, item.lng], {
                icon: createCustomIcon(type)
            });

            const popupContent = generatePopupHTML(item, type, colors);
            const paddingLeft = window.innerWidth >= 768 ? 400 : 20;
            marker.bindPopup(popupContent, { 
                maxWidth: 320, 
                minWidth: 260,
                autoPanPaddingTopLeft: [paddingLeft, 20],
                autoPanPaddingBottomRight: [20, 20]
            });
            markerLayerGroup.addLayer(marker);
            
            activeMarkers.push({ data: item, marker: marker });

            const listItem = document.createElement('div');
            listItem.className = `p-3 rounded-xl theme-bg-item border theme-border theme-hover-bg-item transition cursor-pointer group relative overflow-hidden`;
            
            listItem.innerHTML = `
                <div class="absolute left-0 top-0 bottom-0 w-1 ${colors.bg} opacity-50 group-hover:opacity-100 transition"></div>
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
                map.setView([item.lat, item.lng], 10, { animate: true });
                marker.openPopup();
                if (window.innerWidth < 768) closeSidebar();
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
        '01': { ru: 'Январь', uk: 'Січень' },
        '02': { ru: 'Февраль', uk: 'Лютий' },
        '03': { ru: 'Март', uk: 'Березень' },
        '04': { ru: 'Апрель', uk: 'Квітень' },
        '05': { ru: 'Май', uk: 'Травень' },
        '06': { ru: 'Июнь', uk: 'Червень' },
        '07': { ru: 'Июль', uk: 'Липень' },
        '08': { ru: 'Август', uk: 'Серпень' },
        '09': { ru: 'Сентябрь', uk: 'Вересень' },
        '10': { ru: 'Октябрь', uk: 'Жовтень' },
        '11': { ru: 'Ноябрь', uk: 'Листопад' },
        '12': { ru: 'Декабрь', uk: 'Грудень' }
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
        
        const allText = currentLang === 'uk' ? 'Всі місяці' : 'Все месяцы';
        
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
            const locItem = item[currentLang];
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
            ...item[currentLang],
            originalCategory: item.ru.category
        }));

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

    setLang(currentLang);
});
