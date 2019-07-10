
// This site was helpful in determining how to work with javascript login logic.
// https://www.w3schools.com/js/js_validation.asp
// This link was helpful in determining how to complete a javascript redirect.
// https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
// This site was helpful in determining how to make javascript functions run against form content.
// https://www.tutorialspoint.com/javascript/javascript_form_validations.htm
function login(){

	var usernameVar = document.loginForm.username.value;
	var passwordVar = document.loginForm.password.value;

	if((usernameVar == "admin@fake.com") && (passwordVar == "admin")){

		window.location.href = "dashboard.html";
	}
	else{

		alert("Login failed.");
		
		return false;
	}

}