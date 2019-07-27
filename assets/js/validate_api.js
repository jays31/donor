// Author: Jay Sharma (B00824331)

function validate(){
	if (document.getElementById("org_password").value!=document.getElementById("confirmPassword").value){
		alert("Oops! Passwords do not match! Try again!");
	}
	else if (document.getElementById("org_password").value!=''&&document.getElementById("confirmPassword").value!=''&&document.getElementById("orgName").value!=''&&document.getElementById("email").value!=''&&document.getElementById("address").value!=''&&document.getElementById("phone_number").value!=''){
		alert("Thank you for your interest in being a regular donor. We have received your form and will get in touch with you soon. Please look out for an email from us.")
	}
}