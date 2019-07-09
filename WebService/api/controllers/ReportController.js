// Amirul Sunesara B00813456
//-------------------------------
//-------------------------------

module.exports = {
  
    //fetch inventory report
    getInventoryReport: async function (req, res) {
        var fromDate = req.body.fromDate;
        var toDate = req.body.toDate;

        //query from date and to date
        var query = {date_added: {'>=': fromDate, '<=': toDate}};
        InventoryReport.find(query).exec(function(err, items) {            
            return (res.json(items));
        });

    },
    //fetch reservation report
    getReservationReport: async function (req, res) {
        var fromDate = req.body.fromDate;
        var toDate = req.body.toDate;
    
        //query from date and to date
        var query = {reserved_on: {'>=': fromDate, '<=': toDate}};
        ReservationReport.find(query).exec(function(err, reservations) {            
            return (res.json(reservations));
        });
    
    },



};

