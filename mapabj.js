



// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [6.944018, 8.473783],
    [8.11332, 6.32089],
    [8.029128, 5.888568],
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1Ijoiam9waGl6IiwiYSI6ImNsbzdnc3R0ejA2ZWgyanBkMm5ibXEzdzMifQ.UHx7W2Jhq9Do1kreVTi2bA';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-74.5, 40],
    zoom: 9,
  });
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  var marker = new mapboxgl.Marker()
  .setLngLat(busStops[0])
  .addTo(map);
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    setTimeout(function() {
     if (counter === busStops.lenght - 1) {
     counter = 0;
    } else {
      counter++;
    }
  marker.setLngLat(busStops[counter]);
  move();
  }, 1000);
  
    
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
  }