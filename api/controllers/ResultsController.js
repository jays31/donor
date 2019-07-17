/** Author: Jonathan Harris B00418947
/** Helpful reference re: controller methods: 
/** https://code.tutsplus.com/tutorials/working-with-data-in-sailsjs--net-31525

/**
 * SearchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	
	results: async function(req, res){
		var query = req.param("query");
		var donations = await Donation.find({where: {name: query}});
		res.view({query: query, donations: donations});
	}
  

};

