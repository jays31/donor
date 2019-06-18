function popup(city) {
	if (city==''){
		var city2 = document.getElementById("address").value;
		if (city2==''){}
		else{
			alert("Searching Food Banks near " + city2);
			document.getElementById("address").value=city2;
		}
	}
	else{
		alert("Showing search results from " + city);
		document.getElementById("address").value=city;
	}
}