// Author: Amirul Sunesara (B00813456)

// References: https://sailsjs.com/documentation/reference/waterline-orm/models/find
// https://sailsjs.com/documentation/concepts/actions-and-controllers

module.exports = {
  
    //fetch inventory report
    getInventoryReport: async function (req, res) {
        var fromDate = req.body.fromDate;
        var toDate = req.body.toDate;

        //query from date and to date
        var query = {createdAt: {'>=': fromDate, '<=': toDate}};
        Minventory2.find(query).exec(function(err, items) {            
            return (res.json(items));
        });

    },
    //fetch reservation report
    getReservationReport: async function (req, res) {
        var fromDate = req.body.fromDate;
        var toDate = req.body.toDate;
    
        //query from date and to date
        var query = {createdAt: {'>=': fromDate, '<=': toDate}};
        Reserve.find(query).exec(function(err, reservations) {            
            return (res.json(reservations));
        });
    
    },



};

