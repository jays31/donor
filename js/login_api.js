function login(){

	var usernameVar = document.loginForm.username.value;
	var passwordVar = document.loginForm.password.value;

	if((usernameVar == "admin@fake.com") && (passwordVar == "admin")){

		return true;
	}
	else{

		alert("Login failed.");
		
		return false;
	}

}