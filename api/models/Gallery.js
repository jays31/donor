// Author: Zeel Patel (B00824757)

/**
 * Gallery.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // Columns that are created in the database

    dname : {
      type: 'string'
    },

    address : {
      type: 'string'
    },

    quantity : {
      type: 'number'
    },

    time : {
      type: 'string'
    },

    start_time : {
      type: 'string'
    },

    end_time : {
      type: 'string'
    },
  }
};

