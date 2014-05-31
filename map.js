var map;
function initialize() {
  // Create a simple map.
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 10,
    center: new google.maps.LatLng(39.7392, -104.9847)
  });

  // Load a GeoJSON from the same server as our demo.
  map.data.loadGeoJson('https://github.com/johan/world.geo.json/blob/master/countries/USA/CO/Jefferson.geo.json');
}

google.maps.event.addDomListener(window, 'load', initialize);