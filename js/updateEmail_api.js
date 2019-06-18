// This example was helpful in informing my approach here.
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt

	function updateEmail(){
		var newEmail = prompt("Please enter new email.", "");
		if((newEmail != null) && (newEmail != "")){
			document.getElementById("email").placeholder = newEmail;
		}
	}