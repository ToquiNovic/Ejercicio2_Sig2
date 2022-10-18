var map = L.map("map", {
  center: [1.6202, -75.6043],
  layers: OSM,
  zoom: 10,
  //scrollWheelZoom: false,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>' +
    "contributors",
  maxZoom: 18,
}).addTo(map);

var marker = L.marker([1.6202, -75.6043])
  .addTo(map)
  .bindPopup("Universidad de Amazonia")
  .openPopup();

L.control.scale().addTo(map);

var OSM = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>' +
    "contributors",
  maxZoom: 18,
});

//Añadir un círculo
var circle = L.circle([1.6150806, -75.6160487], 500, {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
})
  .bindPopup("Alcaldia de Florencia")
  .addTo(map);

//Añadir un polígono
var polygon = L.polygon([
  [1.61518, -75.61369],
  [1.61539, -75.61304],
  [1.6147, -75.61283],
  [1.61452, -75.61349],
])
  .addTo(map)
  .bindPopup("Parque Santander");

var marker3 = L.marker([1.61492, -75.61326])
  .addTo(map)
  .bindPopup("Parque Santander")
  .openPopup();

//Añadir una línea
var point1 = new L.LatLng(1.62852, -75.60299);
var point2 = new L.LatLng(1.62731, -75.60258);
var point3 = new L.LatLng(1.62577, -75.60372);
var point4 = new L.LatLng(1.62514, -75.60451);
var point5 = new L.LatLng(1.62479, -75.60569);
var point6 = new L.LatLng(1.62378, -75.60639);
var point7 = new L.LatLng(1.62311, -75.60745);
var point8 = new L.LatLng(1.62199, -75.60792);
var point9 = new L.LatLng(1.62113, -75.60862);
var point10 = new L.LatLng(1.62075, -75.6101);
var point11 = new L.LatLng(1.62047, -75.6101);
var point12 = new L.LatLng(1.62037, -75.60975);
var point13 = new L.LatLng(1.6193, -75.60686);
var point14 = new L.LatLng(1.61752, -75.60561);
var point15 = new L.LatLng(1.61756, -75.60556);
var point16 = new L.LatLng(1.61887, -75.60642);
var point17 = new L.LatLng(1.62013, -75.60516);
var latlngs = [
  point1,
  point2,
  point3,
  point4,
  point5,
  point6,
  point7,
  point8,
  point9,
  point10,
  point11,
  point12,
  point13,
  point14,
  point15,
  point16,
  point17,
];
var polyline = L.polyline(latlngs, { color: "yellow" })
  .addTo(map)
  .bindPopup("mikasa");
