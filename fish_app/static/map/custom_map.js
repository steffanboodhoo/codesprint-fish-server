
let map;
let rectangle; 

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), 
		{
			center: {lat:10.467816636341285, lng:-61.35519349196328 },
			zoom: 10
		});

	// Try HTML5 geolocation - if browser has geolocation, get the position and center map
	var pos={};
	if (navigator.geolocation) {
	  	navigator.geolocation.getCurrentPosition(function(position) {
	    pos = {
	      lat: position.coords.latitude,
	      lng: position.coords.longitude
	    };
	    map.setCenter(pos);
	    
	  }, null);
	}else{
		console.log('why no geolocation m8')
	}

	map.addListener('click',function(ev){
		create_rectangle(ev.latLng.lat(),ev.latLng.lng());
	})
	return map;
}


function create_rectangle(c_lat,c_lng){
	let bounds = {
          north: c_lat+0.1,
          south: c_lat-0.1,
          east: c_lng+0.1,
          west: c_lng-0.1
    };

	rectangle = new google.maps.Rectangle({
      bounds: bounds,
      editable: true,
      draggable: true
    });
    rectangle.setMap(map);
}

function retrieveRectangleData(){
	bounds = rectangle.getBounds().toJSON();
	console.log(bounds)
	
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
	                      'Error: The Geolocation service failed.' :
	                      'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);
}

function loadMarkers(data,map){
	// console.log(data)
	data = data['data']
	var markers = []
	for( i in data ){
		let rec = data[i]
		markers[i] = new google.maps.Marker({
			position:{"lat":parseInt(rec.lat),"lng":parseInt(rec.lng)},
			map:map
		})
		// marker.setMap(map);
	}
}