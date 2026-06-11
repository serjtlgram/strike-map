document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Map
    // Center map around Western Russia / Ukraine region
    const map = L.map('map', {
        zoomControl: false // We will add it manually to position it better
    }).setView([53.0, 42.0], 5);

    // Add Zoom control to bottom right
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    // Dark-themed free OSM tiles (CartoDB Dark Matter) for better modern aesthetics
    // Standard OSM can be too bright for dark themes. CartoDB is free and doesn't require API key.
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Store active markers to easily remove them on re-render
    let markerLayerGroup = L.featureGroup().addTo(map);
    let activeMarkers = [];

    // Elements
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const objectList = document.getElementById('objectList');
    const totalCount = document.getElementById('totalCount');
    
    // Mobile Sidebar Elements
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
    const openSidebarBtn = document.getElementById('openSidebarBtn');

    // 2. Helper Functions for Categories and Colors
    function getCategoryType(category) {
        const cat = category.toLowerCase();
        if (cat.includes('нефтегаз')) return 'oilgas';
        if (cat.includes('логистика')) return 'logistics';
        if (cat.includes('впк') || cat.includes('авиабаза')) return 'military';
        return 'other';
    }

    function getCategoryColorClass(type) {
        switch(type) {
            case 'oilgas': return { bg: 'bg-orange-500', text: 'text-orange-400', border: 'border-orange-500/30', glow: 'shadow-orange-500/50' };
            case 'logistics': return { bg: 'bg-yellow-500', text: 'text-yellow-400', border: 'border-yellow-500/30', glow: 'shadow-yellow-500/50' };
            case 'military': return { bg: 'bg-red-500', text: 'text-red-400', border: 'border-red-500/30', glow: 'shadow-red-500/50' };
            default: return { bg: 'bg-slate-500', text: 'text-slate-400', border: 'border-slate-500/30', glow: 'shadow-slate-500/50' };
        }
    }

    // 3. Create Custom Markers
    function createCustomIcon(type) {
        const colors = getCategoryColorClass(type);
        const html = `
            <div class="relative flex items-center justify-center w-8 h-8">
                <div class="absolute w-full h-full ${colors.bg} opacity-20 rounded-full animate-ping"></div>
                <div class="absolute w-6 h-6 ${colors.bg} rounded-full shadow-lg ${colors.glow} flex items-center justify-center border-2 border-slate-900">
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

    // 4. Render Popups
    function generatePopupHTML(item, type, colors) {
        return `
            <div class="p-5 font-sans">
                <div class="mb-3">
                    <span class="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 border ${colors.border} ${colors.text} mb-2">
                        ${item.category}
                    </span>
                    <h3 class="text-lg font-bold text-white leading-tight">${item.target}</h3>
                </div>
                
                <div class="space-y-2 text-sm text-slate-300 mb-4">
                    <div class="flex items-start gap-2">
                        <svg class="w-4 h-4 mt-0.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <span>${item.date}</span>
                    </div>
                    <div class="flex items-start gap-2">
                        <svg class="w-4 h-4 mt-0.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span class="leading-snug">${item.region}</span>
                    </div>
                    <div class="flex items-start gap-2">
                        <svg class="w-4 h-4 mt-0.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        <span>${item.weapon}</span>
                    </div>
                </div>

                <div class="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50 mb-3">
                    <p class="text-sm text-slate-200 leading-relaxed">${item.details}</p>
                </div>

                <div class="text-xs text-slate-500 flex items-center gap-1.5 mt-2">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span class="truncate">${item.source}</span>
                </div>
            </div>
        `;
    }

    // 5. Render Data
    function renderData(data) {
        // Clear previous
        markerLayerGroup.clearLayers();
        objectList.innerHTML = '';
        activeMarkers = [];
        
        totalCount.textContent = data.length;

        if (data.length === 0) {
            objectList.innerHTML = `
                <div class="text-center py-8 text-slate-500">
                    <p>Объекты не найдены</p>
                </div>
            `;
            return;
        }

        data.forEach((item, index) => {
            const type = getCategoryType(item.category);
            const colors = getCategoryColorClass(type);

            // Add Marker
            const marker = L.marker([item.lat, item.lng], {
                icon: createCustomIcon(type)
            });

            const popupContent = generatePopupHTML(item, type, colors);
            marker.bindPopup(popupContent, { maxWidth: 320, minWidth: 320 });
            markerLayerGroup.addLayer(marker);
            
            // Store reference for sidebar interaction
            activeMarkers.push({ data: item, marker: marker });

            // Add Sidebar List Item
            const listItem = document.createElement('div');
            listItem.className = `p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/60 transition cursor-pointer group relative overflow-hidden`;
            
            // Glow effect on hover based on category color
            listItem.innerHTML = `
                <div class="absolute left-0 top-0 bottom-0 w-1 ${colors.bg} opacity-50 group-hover:opacity-100 transition"></div>
                <div class="pl-2">
                    <div class="text-xs ${colors.text} font-medium mb-1">${item.category}</div>
                    <div class="font-semibold text-sm text-slate-100 mb-1 leading-tight group-hover:text-blue-300 transition">${item.target}</div>
                    <div class="text-xs text-slate-400 flex justify-between">
                        <span class="truncate max-w-[60%]">${item.region.split(',')[0]}</span>
                        <span>${item.date}</span>
                    </div>
                </div>
            `;

            listItem.addEventListener('click', () => {
                map.setView([item.lat, item.lng], 10, { animate: true });
                marker.openPopup();
                
                // On mobile, close sidebar on item click
                if (window.innerWidth < 768) {
                    closeSidebar();
                }
            });

            objectList.appendChild(listItem);
        });

        // Fit map bounds if there are markers and it's the first render or a filter action
        if (data.length > 0) {
            map.fitBounds(markerLayerGroup.getBounds(), { padding: [50, 50], maxZoom: 8 });
        }
    }

    // 6. Filter and Search Logic
    let currentFilter = 'all';
    let currentSearch = '';

    function applyFilters() {
        let filtered = strikeData.filter(item => {
            // Text Search
            const searchMatch = currentSearch === '' || 
                                item.target.toLowerCase().includes(currentSearch) || 
                                item.region.toLowerCase().includes(currentSearch) ||
                                item.details.toLowerCase().includes(currentSearch);
            
            // Category Filter
            let filterMatch = true;
            if (currentFilter !== 'all') {
                const type = getCategoryType(item.category);
                if (currentFilter === 'Нефтегаз') filterMatch = type === 'oilgas';
                if (currentFilter === 'Топливная логистика') filterMatch = type === 'logistics';
                if (currentFilter === 'ВПК') filterMatch = type === 'military';
            }

            return searchMatch && filterMatch;
        });

        renderData(filtered);
    }

    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        applyFilters();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active styling
            filterBtns.forEach(b => {
                b.classList.remove('bg-blue-500/20', 'text-blue-300', 'border-blue-500/30');
                b.classList.add('bg-slate-700/50', 'text-slate-300', 'border-slate-600/50');
            });
            
            const target = e.currentTarget;
            target.classList.remove('bg-slate-700/50', 'text-slate-300', 'border-slate-600/50');
            target.classList.add('bg-blue-500/20', 'text-blue-300', 'border-blue-500/30');

            currentFilter = target.getAttribute('data-filter');
            applyFilters();
        });
    });

    // 7. Mobile Sidebar Toggle Logic
    function closeSidebar() {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('-translate-x-full');
        setTimeout(() => {
            openSidebarBtn.classList.remove('scale-0');
            openSidebarBtn.classList.add('scale-100');
        }, 300);
    }

    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0');
        openSidebarBtn.classList.remove('scale-100');
        openSidebarBtn.classList.add('scale-0');
    }

    toggleSidebarBtn.addEventListener('click', closeSidebar);
    openSidebarBtn.addEventListener('click', openSidebar);

    // Initial render
    renderData(strikeData);
});
