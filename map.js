function initMap() {
	// Initialize stadium variable
	// var campNou = {lat: 41.380896, lng: 2.1228198};
	
	// Initialize map variable with close zoom
	var gMap = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 41.380896, lng: 2.1228198} campNou,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.SATELLITE
		});
	
	// Initialize map marker
	var marker = new google.maps.Marker({
		position: {lat: 41.380896, lng: 2.1228198},
		map: gMap,
		 animation: google.maps.Animation.DROP
		});
	
}
