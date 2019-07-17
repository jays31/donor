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
		
		var donations = await Alert.create({name: name, emailAddress: email});
		
		return res.redirect("/");
	}

};

