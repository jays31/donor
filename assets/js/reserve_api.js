// Author: Jay Sharma (B00824331)

function reserve(){
	if(document.getElementById('email_res').value==''){
		alert("Email cannot be blank")
		return false
	}
	else{
		alert("Thank you for reserving an item at the Atlantic Superstore, Barrington St. This confirms your reservation. You may visit your donor from 09:00 to 13:00 today");
		var getemail=document.getElementById("email_res").value;
        var addurl = "http://localhost:1337/reservelist/create?email="+getemail+"&store=atlantic";
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", addurl, false ); // false for synchronous request
		xmlHttp.send(null);
	}
}