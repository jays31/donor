function reserve(){
	if(document.getElementById('email_res').value==''){
		alert("Email cannot be blank")
		return false
	}
	else{
		alert("Thank you for reserving an item at the Atlantic Superstore, Barrington St. This confirms your reservation. You may visit your donor from 09:00 to 13:00 today");
	}
}