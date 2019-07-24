// Author: Jonathan Harris

/**
 * Donor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  
    // Columns that are created in the database

    orgname : {
      type: 'string',
	  unique: true,
	  required: true
    },

    email : {
      type: 'string',
	  unique: true,
	  required: true
    },

    address : {
      type: 'number',
	  unique: true,
	  required: true
    },

    org_password : {
      type: 'string',
	  required: true
    },

    phone_number : {
      type: 'string',
	  unique: true,
	  required: true
	  
    },

  }
};

