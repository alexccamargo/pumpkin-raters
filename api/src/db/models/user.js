const { Model } = require('objection');
const knex = require('../knex')

Model.knex(knex)

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    const Pumpkin = require('./pumpkin')
    return {
      pumpkins: {
        relation: Model.HasManyRelation,
        modelClass: Pumpkin,
        join: {
          from: 'users.id',
          to: 'messages.user_id'
        }
      }
    }
  }
}

module.exports = User;