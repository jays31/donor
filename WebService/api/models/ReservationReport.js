// Amirul Sunesara B00813456
//-------------------------------

//Reference: https://sailsjs.com/documentation/concepts/models-and-orm/models
module.exports = {

  attributes: {

    createdAt: false,
    updatedAt: false,

    reservation_number: {
      type: 'string'
    },
    reserved_by: {
      type: 'string'
    },
    reserved_items: {
      type: 'string'
    },
    reserved_on: 
    { 
      type: 'ref', columnType: 'datetime' 
    }
  }

};

