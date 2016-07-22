var console = require('console');

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 59.926979564405386, lng: 30.385093688964844},
        zoom: 11
    });

    map.addListener('click', function(e) {
        console.log(JSON.stringify(e.latLng));
    });
};
