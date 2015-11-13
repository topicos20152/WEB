var geocoder = new google.maps.Geocoder();

function getGeoState() {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  }
}

function successFunction(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;

  return codeLatLng(lat, lng);
}

function errorFunction(){
  console.log("Geocoder failed!");

  return null;
}

function codeLatLng(lat, lng) {
  console.log("Calculating Geolocation...");

  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        for (var i=0; i<results[0].address_components.length; i++) {
          for (var b=0;b<results[0].address_components[i].types.length;b++) {

            if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
              city= results[0].address_components[i];
              break;
            }
          }
        }
        engineAfterGeo(city);
      } else {
        console.log("No results found");
      }
    } else {
      console.log("Geocoder failed due to: " + status);
    }
  });

  return null;
}

function engineAfterGeo(city) {
  $stateSelect = $('#state');

  $stateSelect.val(city.short_name).change();
}

$(document).ready(function(){
  getGeoState();
});
