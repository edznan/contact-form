document.addEventListener('DOMContentLoaded', () => {

    let map = L.map('map').setView([43.990651, 18.182461], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 22,
        minZoom: 11,
        zoom: 17,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    let southWest = L.latLng(44.098283, 18.047550),
    northEast = L.latLng(43.937512, 18.258143);
    let bounds = L.latLngBounds(southWest, northEast);
    
    map.setMaxBounds(bounds);
    map.on('drag', function() {
        map.panInsideBounds(bounds, { animate: true });
    });
    
     L.marker([43.990651, 18.182461]).addTo(map)
        .bindPopup('This is a Leaflet.js demo app.')
        .openPopup(); 
    });