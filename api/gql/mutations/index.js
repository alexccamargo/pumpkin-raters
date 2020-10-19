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
  PumpkinType,
  AuthorType,
  UserType,
} = require("../types");

const { 
	AuthorService, 
  PumpkinService,
} = require('../../services');

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addPumpkin: {
      type: PumpkinType,
      description: 'Add a pumpkin',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) }
      },
      resolve: (parent, args) => PumpkinService.addPumpkin(args.name, args.authorId)
    },
    addAuthor: {
      type: AuthorType,
      description: 'Add an author',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        userId: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => AuthorService.addAuthor(args.name, args.userId)
    }
  })
})

module.exports = RootMutationType;