// Author: Jonathan Harris

// https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters

// Include sweetalert script.
//https://stackoverflow.com/questions/43796705/how-to-include-cdn-in-javascript-file-js

var sweetalert = document.createElement('script');
sweetalert.setAttribute('src', 'https://unpkg.com/sweetalert/dist/sweetalert.min.js');
document.head.appendChild(sweetalert);

document.body.onload = loginFailedOrRegistrationSuccess;

function loginFailedOrRegistrationSuccess() {

	var url_string = window.location.href
	var url = new URL(url_string);

	var loginError = url.searchParams.get("loginError");
	var registrationSuccess = url.searchParams.get("registrationSuccess");

	if (loginError) {

		swal("Login failed!");
	}

	else if (registrationSuccess) {
		swal("Registration Success",
			"Thank you for your interest in being a regular donor. We have received your form and will get in touch with you soon. Please look out for an email from us.",
			"success");
	}

}
