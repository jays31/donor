// Author: Jay Sharma (B00824331)

function validate(){
	alert("hai");
	if (document.getElementById("password").value!=document.getElementById("confirmPassword").value){
		alert("Oops! Passwords do not match! Try again!");
	}
	else if (document.getElementById("password").value!=''&&document.getElementById("confirmPassword").value!=''&&document.getElementById("orgName").value!=''&&document.getElementById("email").value!=''&&document.getElementById("search_location").value!=''&&document.getElementById("phone").value!='')
	{
		alert("Thank you for your interest in being a regular donor. We have received your form and will get in touch with you soon. Please look out for an email from us.");
		var email1=document.getElementById("email").value;
		var pwd1=document.getElementById("email").value;
		var addurl = "http://localhost:1337/logins/create?email="+email1+"&password="+pwd1;
		var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", addurl, false ); // false for synchronous request
		xmlHttp.send(null);	


	}
}