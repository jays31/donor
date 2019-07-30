// This link was helpful re: the string.repeat() method:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function updatePassword() {
	var newPassword = prompt("Please enter new password.", "");
	if ((newPassword != null) && (newPassword != "")) {
		document.getElementById("password").placeholder = "*".repeat(newPassword.length);
	}
}