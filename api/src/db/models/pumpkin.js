  
const { Model } = require('objection');
const knex = require('../knex')

Model.knex(knex)

class Pumpkin extends Model {
  static get tableName() {
    return 'pumpkins';
  }

  static get relationMappings() {
      const User = require('./user')
      return {
          author: {
              relation: Model.BelongsToOneRelation,
              modelClass: User,
              join: {
                  from: 'pumpkins.user_id',
                  to: 'users.id'
              }
          }
      }
  }
}

module.exports = Pumpkin;