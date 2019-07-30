// Author: Jay Sharma (B00824331)
// https://developers.google.com/places/web-service/intro used for places api

function autofill_address() {
	var address = new google.maps.places.Autocomplete((document.getElementById('search_location')), { types: ['geocode'] });
}