import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLBoolean, GraphQLList } from 'graphql';
import { undefinedIfEmpty, debug } from '../../utils';

import { AuthorService, PumpkinService } from '../../services';

import PumpkinType from './pumpkin-type';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a User',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    email: { type: GraphQLNonNull(GraphQLString) },
    isAuthor: {
      type: GraphQLBoolean,
      resolve: (user) => AuthorService.isAuthors(user.id)
    },
    username: { type: GraphQLNonNull(GraphQLString) },
    pumpkins: {
      type: new GraphQLList(PumpkinType),
      resolve: async (user) => await PumpkinService.getPumpkinByAuthor(user.id)
    },
  })
});

export default UserType;