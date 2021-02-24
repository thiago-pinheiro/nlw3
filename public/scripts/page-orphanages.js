//tipos de dados
//String "" 
//Number 01
//Object {}
//Booolean true or false
//Array []

//create map
const map = L.map('mapid').setView([-3.7679247,-38.5311203], 15)

// create and add titeLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
}).setContent('Lar das meninas <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg" </a>')


L.marker([-3.7679247,-38.5311203], {icon})
    .addTo(map)
    .bindPopup(popup)
    