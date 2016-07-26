var map;
function initMap() {
    markers = [];

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 59.926979564405386, lng: 30.385093688964844},
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    map.addListener('click', function(e) {
        console.log('add point: ' + JSON.stringify(e.latLng));
        polygon.pushPoint(e.latLng);
        markers.push(new google.maps.Marker({
            position: e.latLng,
            map: map
        }));
    });

    map.clearAllMarkers = function () {
        markers.forEach((marker) => marker.setMap(null));
    }
};
