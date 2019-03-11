const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiaGVtbWVybHkiLCJhIjoiY2p0NGluMHpjMTFzYzQzcGNsa2RibDRocCJ9.7VkPANEtVN4C7VGe8gElXQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], 
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


console.log('Hello from JavaScript')