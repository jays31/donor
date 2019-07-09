// Amirul Sunesara B00813456
//-------------------------------
//-------------------------------

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

