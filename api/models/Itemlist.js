// Author: Jay Sharma (B00824331)

/**
 * Itemlist.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    available: {
      type: 'number',
      required: true
    },
    store: {
      type: 'string',
      required: true
    },
  },
};

