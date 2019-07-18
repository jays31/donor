/**
 * Reservelist.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    email: {
      type: 'string',
      required: true
    },
    store: {
      type: 'string',
      required: true
    },
  },
};

