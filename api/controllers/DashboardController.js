// Author: Amirul Sunesara (B00813456)

// References: https://sailsjs.com/documentation/reference/waterline-orm/models/find
// https://sailsjs.com/documentation/concepts/actions-and-controllers

module.exports = {
  
    getReservationInWeek: async function (req, res) {
        Reservelist.query('select createdAt from reservelist',function(err, reservations) {            
            return (res.json(reservations));
        });

    },
    getReservationStoresInWeek: async function (req, res) {
        Reservelist.query('select store from reservelist',function(err, reservations) {            
            return (res.json(reservations));
        });

    },
    
 
};

