const {Marker} = require("mapbox-gl");

const iconURLS = {
    hotels: "http://i.imgur.com/cqR6pUI.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png",
};

const buildMarker = function (type,coords) {

const markerDomEl = document.createElement("div")    
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = `url(https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png)`;

const newMarker = new Marker(markerDomEl).setLngLat(coords);
return newMarker
}

module.exports = buildMarker