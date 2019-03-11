const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker")

mapboxgl.accessToken = 'pk.eyJ1IjoiaGVtbWVybHkiLCJhIjoiY2p0NGluMHpjMTFzYzQzcGNsa2RibDRocCJ9.7VkPANEtVN4C7VGe8gElXQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], 
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
//new mapboxgl.Marker(map).setLngLat([-87.641, 41.895]).addTo(map)

const marker = buildMarker("hotels",[-87.6354, 41.8885])
marker.addTo(map)