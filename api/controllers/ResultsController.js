/** Author: Jonathan Harris B00418947
/** Helpful reference re: controller methods: 
/** https://code.tutsplus.com/tutorials/working-with-data-in-sailsjs--net-31525

/**
 * ResultsController
 //Jonathan Harris B00418947
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	
	results: async function(req, res){
		
		/**
		SabraHummus	15	atlantic
		CoconutMilk	15	atlantic
		ShrimpCrackers	15	atlantic
		GingerBeer	15	atlantic
		Kurkure	15	atlantic
		MangoTofu	15	atlantic
		ChickPeas	15	atlantic
		BillyBeeHoney	15	atlantic
		MamaNoodles	15	atlantic
		CoconutWater	15	atlantic
		PlantainChips	15	atlantic
		PlantainChips	15	atlantic
		**/
		
		/*
		var SabraHummus = await Itemlistresults.create({name: "SabraHummus", available: 15, store: "atlantic"});
		var CoconutMilk = await Itemlistresults.create({name: "CoconutMilk", available: 15, store: "atlantic"});
		var ShrimpCrackers = await Itemlistresults.create({name: "ShrimpCrackers", available: 15, store: "atlantic"});
		var GingerBeer = await Itemlistresults.create({name: "GingerBeer", available: 15, store: "atlantic"});
		var Kurkure = await Itemlistresults.create({name: "Kurkure", available: 15, store: "atlantic"});
		var MangoTofu = await Itemlistresults.create({name: "MangoTofu", available: 15, store: "atlantic"});
		var ChickPeas = await Itemlistresults.create({name: "ChickPeas", available: 15, store: "atlantic"});
		var BillyBeeHoney = await Itemlistresults.create({name: "BillyBeeHoney", available: 15, store: "atlantic"});
		var MamaNoodles = await Itemlistresults.create({name: "MamaNoodles", available: 15, store: "atlantic"});
		var CoconutWater = await Itemlistresults.create({name: "CoconutWater", available: 15, store: "atlantic"});
		var PlantainChips = await Itemlistresults.create({name: "PlantainChips", available: 15, store: "atlantic"});
		var SabraHummus = await Itemlistresults.create({name: "SabraHummus", available: 15, store: "atlantic"});
		*/
		
		var query = req.param("query");
		var donations = await Itemlistresults.find({where: {name: query}});
		res.view('\\pages\\results', {query: query, donations: donations});
	}
  

};

