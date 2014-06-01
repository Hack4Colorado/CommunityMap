function makeRectangle(x, y, color, map){
  var rectangle = new google.maps.Rectangle({
  strokeColor: color,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: color,
    fillOpacity: 0.35,
    // map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(y-0.1, x),
      new google.maps.LatLng(y, x-.1))
  });
}

function initialize() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 11,
    center: new google.maps.LatLng(39.7392, -104.9847),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });
  for(x= -104.4847; x > -105.4; x = x-.1){
    for(y= 39.9393; y > 39.6391; y = y-.1){
      // makeRectangle(x, y, "#66CD00", map);
      if(x==-104.4847){
        color = '#66CD00';
      }
      else if(x==-104.5847){
        color = '#FF0000';
      }
      else if(x>=-104.6847 && x < -104.5847){
        color = '#FFFF00';
      }
      else{
        //document.write x;
        color = '#000000';
      }
      var rectangle = new google.maps.Rectangle({
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: color,
        fillOpacity: 0.35,
        map: map,
        bounds: new google.maps.LatLngBounds(
          new google.maps.LatLng(y-0.1, x-0.1),
          new google.maps.LatLng(y, x))
      });
    }
  }
  /*var rectangle = new google.maps.Rectangle({
    strokeColor: '#000000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#000000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.8392, -105.4847),
      new google.maps.LatLng(39.9392, -105.3847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#000000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#000000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.7392, -105.4847),
      new google.maps.LatLng(39.8392, -105.3847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#000000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#000000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.6392, -105.4847),
      new google.maps.LatLng(39.7392, -105.3847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#000000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#000000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.5392, -105.4847),
      new google.maps.LatLng(39.6392, -105.3847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.8392, -105.3847),
      new google.maps.LatLng(39.9392, -105.2847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.7392, -105.3847),
      new google.maps.LatLng(39.8392, -105.2847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.6392, -105.3847),
      new google.maps.LatLng(39.7392, -105.2847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.5392, -105.3847),
      new google.maps.LatLng(39.6392, -105.2847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FFFF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FFFF00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.8392, -105.2847),
      new google.maps.LatLng(39.9392, -105.1847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.7392, -105.2847),
      new google.maps.LatLng(39.8392, -105.1847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.6392, -105.2847),
      new google.maps.LatLng(39.7392, -105.1847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FFFF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FFFF00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.5392, -105.2847),
      new google.maps.LatLng(39.6392, -105.1847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.8392, -105.1847),
      new google.maps.LatLng(39.9392, -105.0847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FFFF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FFFF00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.7392, -105.1847),
      new google.maps.LatLng(39.8392, -105.0847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FFFF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FFFF00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.6392, -105.1847),
      new google.maps.LatLng(39.7392, -105.0847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.5392, -105.1847),
      new google.maps.LatLng(39.6392, -105.0847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#66CD00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#66CD00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.8392, -105.0847),
      new google.maps.LatLng(39.9392, -104.9847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.7392, -105.0847),
      new google.maps.LatLng(39.8392, -104.9847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FFFF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FFFF00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.6392, -105.0847),
      new google.maps.LatLng(39.7392, -104.9847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#66CD00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#66CD00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.5392, -105.0847),
      new google.maps.LatLng(39.6392, -104.9847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.8392, -104.9847),
      new google.maps.LatLng(39.9392, -104.8847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FFFF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FFFF00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.7392, -104.9847),
      new google.maps.LatLng(39.8392, -104.8847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#66CD00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#66CD00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.6392, -104.9847),
      new google.maps.LatLng(39.7392, -104.8847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FFFF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FFFF00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.5392, -104.9847),
      new google.maps.LatLng(39.6392, -104.8847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FFFF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FFFF00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.8392, -104.8847),
      new google.maps.LatLng(39.9392, -104.7847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.7392, -104.8847),
      new google.maps.LatLng(39.8392, -104.7847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#66CD00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#66CD00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.6392, -104.8847),
      new google.maps.LatLng(39.7392, -104.7847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#66CD00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#66CD00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.5392, -104.8847),
      new google.maps.LatLng(39.6392, -104.7847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FFFF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FFFF00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.8392, -104.7847),
      new google.maps.LatLng(39.9392, -104.6847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FFFF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FFFF00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.7392, -104.7847),
      new google.maps.LatLng(39.8392, -104.6847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.6392, -104.7847),
      new google.maps.LatLng(39.7392, -104.6847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#66CD00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#66CD00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.5392, -104.7847),
      new google.maps.LatLng(39.6392, -104.6847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#66CD00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#66CD00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.8392, -104.6847),
      new google.maps.LatLng(39.9392, -104.5847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FFFF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FFFF00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.7392, -104.6847),
      new google.maps.LatLng(39.8392, -104.5847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#66CD00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#66CD00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.6392, -104.6847),
      new google.maps.LatLng(39.7392, -104.5847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#66CD00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#66CD00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.5392, -104.6847),
      new google.maps.LatLng(39.6392, -104.5847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#66CD00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#66CD00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.8392, -104.5847),
      new google.maps.LatLng(39.9392, -104.4847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#66CD00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#66CD00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.7392, -104.5847),
      new google.maps.LatLng(39.8392, -104.4847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#66CD00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#66CD00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.6392, -104.5847),
      new google.maps.LatLng(39.7392, -104.4847))
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#66CD00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#66CD00',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.5392, -104.5847),
      new google.maps.LatLng(39.6392, -104.4847))
  });*/
}

google.maps.event.addDomListener(window, 'load', initialize);