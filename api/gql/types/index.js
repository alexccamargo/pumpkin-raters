const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLFloat
} = require('graphql');

const {
  AuthorService,
  PumpkinService
} = require('../../services');

const PumpkinType = new GraphQLObjectType({
  name: 'Pumpkin',
  description: 'The pumpkin',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    authorId: { type: GraphQLNonNull(GraphQLInt) },
    author: {
      type: AuthorType,
      resolve: (pumpkin) => AuthorService.getAuthor(pumpkin.authorId)
    },
    rate: {
      type: GraphQLFloat,
      resolve: (pumpkin) => PumpkinService.getPumpkinRate(pumpkin.id)
    }
  })
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents a author of a pumpkin',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    pumpkins: {
      type: new GraphQLList(PumpkinType),
      resolve: (author) => PumpkinService.getPumpkinByAuthor(author.id)
    },
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a User',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    email: { type: GraphQLNonNull(GraphQLString) },
    author: {
      type: AuthorType,
      resolve: (user) => AuthorService.getAuthorByUserId(user.id)
    },
  })
});

module.exports = {
  AuthorType,
  PumpkinType,
  UserType
}