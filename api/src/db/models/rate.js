
const { Model } = require('objection');
const knex = require('../knex')

Model.knex(knex)

class Rate extends Model {
  static get tableName() {
    return 'rates';
  }

  static get relationMappings() {
  }
}

module.exports = Rate;