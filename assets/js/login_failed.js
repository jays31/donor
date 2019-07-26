// Author: Jonathan Harris

// https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters

var url_string = window.location.href
var url = new URL(url_string);
var loginError = url.searchParams.get("loginError");

if(loginError) {
	
	alert("Login failed.");

}