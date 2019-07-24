// Author: Jonathan Harris

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
		var email = req.param('email');
		var address = req.param('address');
		var org_password = req.param('org_password');
		var phone_number = req.param('phone_number');
		
		Donor.create({orgname: orgname, email: email, address: address, org_password: org_password, phone_number: phone_number});
                 
	return res.redirect("/");},

};

