//Jonathan Harris B00418947

/**
 * AlertController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  	alerts: async function(req, res){
		
		var name = req.param("name");
		var email = req.param("emailAddress");
		var alertMessage = "Alert created for " + email;
		
		var newAlert = await Emailalert.create({name: name, emailAddress: email});
		
 		return res.redirect("/inventory");

		//return res.view("\\pages\\inventory", {alertMessage : alertMessage});
	}

};

