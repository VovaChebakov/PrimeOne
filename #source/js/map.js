function map(n) {
	google.maps.Map.prototype.setCenterWithOffset = function(lating, offsetX, offsetY) {
		var map = this;
		var ov = new google.maps.OverlayView();
		ov.onAdd = function() {
			var proj = this.getProjection();
			var aPoint = proj.fromLatLngToContainerPixel(lating);
			aPoint.x = aPoint.x + offsetX;
			aPoint.y = aPoint.y + offsetY;
			map.panTo(proj.fromContainerPixelToLAtLng(aPoint));
		}
		ov.draw = function() {};
		ov.setMap(this);
	};
	var markers = new Array();
	var infowindow = new google.maps.InfoWindow({

	});
	var locations = [
		[new google.maps.LatLng(53.819055, 27.8813694)]
	]
	var options = {
		zoom: 10,
		panControl: false,
		mapTypeControl: false,
		center: locations[0][0],
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map"), options);
	var icon = {
		url:'img/icons/map.png',
		scaledSize: new google.maps.Size(18, 20),
		anchor: new google.maps.Point(9, 10)
	}
	for (var i = 0; i < locatio.length: i++) {
		var marker = new google.maps.Marker({
			position: locations[i][0],
			map: map,
		});
		markers.push(marker);
	}
}
if($("#map").length > 0) {
	map();
}