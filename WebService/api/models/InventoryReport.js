// Amirul Sunesara B00813456
//-------------------------------
//Reference: https://sailsjs.com/documentation/concepts/models-and-orm/models
module.exports = {

  attributes: {
    
    createdAt: false,
    updatedAt: false,

    item_number: {
      type: 'string'
    },
    item_name: {
      type: 'string'
    },
    category: {
      type: 'string'
    },
    quantity: {
      type: 'number'
    },
    weight: {
      type: 'string'
    },
    date_added: 
    { 
      type: 'ref', columnType: 'datetime' 
    }
  },

};

