var map = L.map('mapid').setView([38.62620387281226, -90.24457630300674], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

$.getJSON("restaurants.geojson",function(data){
    L.geoJson(data).addTo(map);
  });
