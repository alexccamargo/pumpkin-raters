
const { Model } = require('objection');
const knex = require('../knex')

Model.knex(knex)

class Pumpkin extends Model {
  static get tableName() {
    return 'pumpkins';
  }

  static get relationMappings() {
    const User = require('./user')
    const Rate = require('./rate')

    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'pumpkins.userId',
          to: 'users.id'
        }
      },
      rates: {
        relation: Model.BelongsToOneRelation,
        modelClass: Rate,
        join: {
          from: 'pumpkins.id',
          to: 'rates.pumpkinIdd'
        }
      }
    }
  }
}

module.exports = Pumpkin;