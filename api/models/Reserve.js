/**
 * Reserve.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    item: {
      type: 'string',
      required: true
    },
    booking_id: {
      type: 'number',
      required: true
    },
    store: {
      type: 'string',
      required: true
    },
  },
};
