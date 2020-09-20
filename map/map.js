var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 20.86, lng: 106.68 }, zoom: 8
    }
    );
}