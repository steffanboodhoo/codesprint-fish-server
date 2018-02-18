
let map;
let rectangle; 

function initMap() {
	'use strict';
	map = new google.maps.Map(document.getElementById('map'), 
		{
			center: {lat: -34.397, lng: 150.644},
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
	}

	map.addListener('click',function(ev){
		create_rectangle(ev.latLng.lat(),ev.latLng.lng());
	})
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
	
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
	                      'Error: The Geolocation service failed.' :
	                      'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);
}

