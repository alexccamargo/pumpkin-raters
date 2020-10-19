import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';

import { AuthorService } from '../../services';

import AuthorType from './author-type';

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

  export default UserType;