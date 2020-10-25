import { GraphQLObjectType, GraphQLList, GraphQLInt } from 'graphql';

import { PumpkinType, AuthorType, UserType } from "../types";
import { AuthorService, PumpkinService, UserService } from '../../services';

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
      pumpkins: {
        type: new GraphQLList(PumpkinType),
        description: 'List of All Pumpkins',
        resolve: () => PumpkinService.getPumpkins()
      },
      pumpkin: {
        type: PumpkinType,
        description: 'A Single Pumpkin',
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (parent, args) => PumpkinService.getPumpkin(args.id)
      },
      authors: {
        type: new GraphQLList(AuthorType),
        description: 'List of All Authors',
        resolve: () => AuthorService.getAuthors()
      },
      author: {
        type: AuthorType,
        description: 'A Single Author',
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (parent, args) => AuthorService.getAuthor(args.id)
      },
      user: {
        type: UserType,
        description: 'A Single User',
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (parent, args) => UserService.getUser(args.id)
      },
      users: {
        type: new GraphQLList(UserType),
        description: 'List of All User',
        resolve: (parent, args) => UserService.getUsers()
      },
    })
  });

  export default RootQueryType;
  