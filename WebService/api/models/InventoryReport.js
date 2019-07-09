// Amirul Sunesara B00813456
//-------------------------------
//-------------------------------

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

