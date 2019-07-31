// Author: Jonathan Harris (B00418947)

/**
 * RegistrationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    //Handle registration
    register: async function (req, res) {
		
		var orgname = req.param('orgname');
		var email = req.param('orgemail');
		var address = req.param('address');
		var org_password = req.param('org_password_signup');
		var phone_number = req.param('phone_number');
		
		var outcome = await Donor.create({orgname: orgname, email: email, address: address, org_password: org_password, phone_number: phone_number});
                 
	return res.redirect("/?registrationSuccess=true");},

};

