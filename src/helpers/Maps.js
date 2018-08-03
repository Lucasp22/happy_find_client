var map;
var geocoder;
// Initialize and add the map
function initMap() {
  // return a maps object - should be executed when hitting search
  map = new google.maps.Map(
    document.getElementById('map'), { zoom: 4, center: uluru });
  // The marker, positioned at Uluru
  /*   
      } */
}

// This funciton will place markers (from the results array) on to the map (supplied by the map argument). Map should be retrieved from the initMap() function.
function placeMarkers(results, map) {
  for (var i = 0; i < results.features.length; i++) {
    var coords = results.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1], coords[0]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
}

function codeAddress(query, callback) {
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': query }, function (results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      //TODO: store map-center into something using a callback
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}