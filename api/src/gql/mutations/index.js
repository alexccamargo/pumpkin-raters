import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';

import { PumpkinType, UserType } from "../types";

import { UserService, PumpkinService } from '../../services';

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
    addUser: {
      type: UserType,
      description: 'Add an user',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => UserService.addUser(args.name, args.email)
    },
    ratePumpkin: {
      type: PumpkinType,
      description: 'Add an user',
      args: {
        pumpkinId: { type: GraphQLNonNull(GraphQLInt) },
        raterId: { type: GraphQLNonNull(GraphQLInt) },
        rate: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: async (parent, args) => {
        await PumpkinService.ratePumpkin(args.pumpkinId, args.raterId, args.rate)
        return await PumpkinService.getPumpkin(args.pumpkinId);
      }
    }
  })
})

export default RootMutationType;