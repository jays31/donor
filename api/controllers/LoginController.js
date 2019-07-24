// Author: Jonathan Harris (B00418947)

/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    // Handle login
    login: async function (req, res) {
		
		var email = req.param('email');
		var org_password = req.param('org_password');
		
		var result = await Donor.findOne({email: email, org_password: org_password});
		
		// If the login fails, re-display the current page.
		if(!result){
			
			return res.view();
		}
             
		// Otherwise, display the dashboard page.
		else{
			
			return res.redirect("/dashboard");
		}
		
	}
};

