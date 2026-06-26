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
        updated: { ru: 'Обновлено: Июнь 2026', uk: 'Оновлено: Червень 2026', en: 'Updated: June 2026' },
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
        filter_all_months: { ru: 'Все месяцы', uk: 'Всі місяці', en: 'All months' }
    };

    let currentLang = localStorage.getItem('strike-map-lang') || 'uk';
    const supportedLangs = ['uk', 'ru', 'en'];

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
    
    let currentSortOrder = localStorage.getItem('strike-map-sort-order') || 'asc';
    
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

    // Initialize default theme from localStorage or default to beige
    const savedTheme = localStorage.getItem('strike-map-theme') || 'beige';
    setTheme(savedTheme);

    function getCategoryType(category) {
        if (!category) return 'other';
        const cat = category.toLowerCase();
        if (cat.includes('нефтегаз') || cat.includes('нафтогаз') || cat.includes('oil & gas') || cat.includes('oil and gas')) return 'oilgas';
        if (cat.includes('логистика') || cat.includes('логістика') || cat.includes('logistics') || cat.includes('fuel logistics')) return 'logistics';
        if (cat.includes('впк') || cat.includes('авиабаза') || cat.includes('авіабаза') || cat.includes('defense') || cat.includes('airbase') || cat.includes('military')) return 'military';
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
        const textExpand = i18n.expand[currentLang] || 'Expand';
        let imageHtml = '';
        if (item.images && item.images.length > 0) {
            const mainImg = item.images[0];
            const countHtml = item.images.length > 1 ? `<div class="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-md backdrop-blur-md shadow-lg pointer-events-none mobile-only">+${item.images.length - 1}</div>` : '';
            const imagesJson = JSON.stringify(item.images).replace(/"/g, '&quot;');
            
            let thumbnailsHtml = '';
            if (item.images.length > 1) {
                thumbnailsHtml = `<div class="desktop-only-flex flex-col gap-2 mt-2 w-full">`;
                for (let i = 1; i < item.images.length; i++) {
                    thumbnailsHtml += `
                        <div class="w-full h-16 rounded-lg shadow-sm overflow-hidden relative border theme-border hover:opacity-90 transition" onclick="event.stopPropagation(); window.openFullscreenGallery('${imagesJson}', ${i})">
                            <img src="${item.images[i]}" alt="${item.target}" class="absolute inset-0 w-full h-full object-cover hover:scale-105 transition duration-500">
                        </div>
                    `;
                }
                thumbnailsHtml += `</div>`;
            }
            
            imageHtml = `
                <div class="popup-image-col mt-4 md:mt-0 md:ml-4 shrink-0 w-full md:w-40 lg:w-48 flex flex-col justify-start cursor-pointer group">
                    <div class="popup-image-container w-full h-32 md:h-auto md:min-h-[140px] rounded-xl shadow-sm overflow-hidden relative border theme-border" onclick="window.openFullscreenGallery('${imagesJson}', 0)">
                        <img src="${mainImg}" alt="${item.target}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500">
                        ${countHtml}
                        <div class="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-medium px-2 py-1 rounded-md flex items-center gap-1 backdrop-blur-md shadow-lg pointer-events-none">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span>${textExpand}</span>
                        </div>
                    </div>
                    ${thumbnailsHtml}
                </div>
            `;
        } else if (item.image) {
            imageHtml = `
                <div class="popup-image-col mt-4 md:mt-0 md:ml-4 shrink-0 w-full md:w-40 lg:w-48 flex flex-col justify-start cursor-pointer group" onclick="window.openFullscreenImage('${item.image}')">
                    <div class="popup-image-container w-full h-32 md:h-auto md:min-h-[140px] rounded-xl shadow-sm overflow-hidden relative border theme-border">
                        <img src="${item.image}" alt="${item.target}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500">
                        <div class="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-medium px-2 py-1 rounded-md flex items-center gap-1 backdrop-blur-md shadow-lg pointer-events-none">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span>${textExpand}</span>
                        </div>
                    </div>
                </div>
            `;
        }

        const hasImage = !!item.image || (item.images && item.images.length > 0);
        const containerClasses = hasImage ? 'popup-has-image flex flex-col md:flex-row justify-between items-stretch' : '';
        const contentClasses = hasImage ? 'popup-content-col flex-1 min-w-0 md:min-w-[260px]' : '';

        return `
            <div class="p-4 md:p-5 font-sans ${containerClasses}">
                <div class="${contentClasses}">
                    <div class="mb-3">
                        <div class="flex justify-between items-start mb-2 gap-2 pr-8">
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

                    <div class="theme-bg-input rounded-lg p-3 border theme-border mb-3">
                        <p class="text-sm theme-text-main leading-relaxed">${item.details}</p>
                    </div>

                    <div class="text-xs theme-text-muted flex items-center gap-1.5 mt-2">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span class="truncate">${item.source}</span>
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
        const counter = document.getElementById('imageCounter');
        if (modalImg && currentGalleryImages.length > 0) {
            if (animate) {
                modalImg.style.opacity = '0';
                setTimeout(() => {
                    modalImg.src = currentGalleryImages[currentGalleryIndex];
                    modalImg.style.opacity = '1';
                }, 150);
            } else {
                modalImg.src = currentGalleryImages[currentGalleryIndex];
                modalImg.style.opacity = '1';
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
            const maxW = isMobile ? 300 : (hasImage ? 550 : 320);
            const minW = isMobile ? 240 : (hasImage ? 450 : 260);
            const maxH = isMobile ? Math.min(window.innerHeight * 0.65, 420) : null;

            marker.bindPopup(popupContent, { 
                className: hasImage && !isMobile ? 'desktop-image-popup' : '',
                maxWidth: maxW, 
                minWidth: minW,
                maxHeight: maxH,
                autoPanPaddingTopLeft: [paddingLeft, isMobile ? 60 : 40],
                autoPanPaddingBottomRight: [20, isMobile ? 80 : 40]
            });
            markerLayerGroup.addLayer(marker);
            
            activeMarkers.push({ data: item, marker: marker });

            const listItem = document.createElement('div');
            listItem.className = `p-3 rounded-xl theme-bg-item border theme-border theme-hover-bg-item transition cursor-pointer group relative overflow-hidden`;
            
            const photoCount = item.images && item.images.length > 0 ? item.images.length : (item.image ? 1 : 0);
            const cameraBadge = photoCount > 0 ? `
                <div class="photo-badge" title="${photoCount} фото">
                    <svg class="photo-badge-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- Flash bolt -->
                        <path d="M14.5 3L11 9h3l-2.5 5.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <!-- Camera body -->
                        <path d="M2 9.5C2 8.67 2.67 8 3.5 8H5l1.5-2h7L15 8h1.5C17.33 8 18 8.67 18 9.5v9c0 .83-.67 1.5-1.5 1.5h-13C2.67 20 2 19.33 2 18.5v-9Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                        <!-- Lens ring -->
                        <circle cx="10" cy="14" r="3" stroke="currentColor" stroke-width="1.6"/>
                        <!-- Lens glint -->
                        <circle cx="11.2" cy="12.8" r="0.6" fill="currentColor"/>
                    </svg>
                    <span class="photo-badge-count">${photoCount}</span>
                </div>
            ` : '';
            
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
