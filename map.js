function initMap() {
	// Initialize stadium variable
	var campNou = {lat: 41.380896, lng: 2.1228198};
	
	// Initialize map variable with close zoom
	var map = new google.maps.Map(document.getElementById('map'), {center: campNou, zoom: 18, mapTypeId: 'satellite'});
	
	// Initialize map marker
	var marker = new google.maps.Marker({position: campNou, map: map, google.maps.Animation.DROP});
	
	// Initialize info for marker
	var info = new google.maps.InfoWindow ({content: 'Camp Nou'})
	
	// Initialize variable for click listener on marker
	marker.addListener('click', function() info.open(map, marker);
}