function popup(city) {
	if (city==''){
		var city2 = document.getElementById("search_location").value;
		if (city2==''){}
		else{
			alert("Searching Food Banks near " + city2);
			document.getElementById("search_location").value=city2;
			document.getElementById("locate").click();
		}
	}
	else{
		alert("Showing search results from " + city);
		document.getElementById("search_location").value=city+", Canada";
		document.getElementById("locate").click();
	}
}