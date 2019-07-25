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
		
		var alertMessages = require('./assets/js/alertMessages.js');
		
		// If the login fails, re-display the current page.
		if(!result){
			// https://stackoverflow.com/questions/31776471/ejs-template-variable-is-not-defined-on-page-load-and-errors
			alertMessages.loginFailed();
			return res.redirect("/");
		}
             
		// Otherwise, display the dashboard page.
		else{
			return res.redirect("/dashboard");
		}
		
	}
};

