import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';

import { PumpkinType, UserType } from "../types";

import { UserService, PumpkinService } from '../../services';
import UserInputType from '../types/user-input-type';
import PumpkinInputType from '../types/pumpkin-input-type';
import RateInputType from '../types/rate-input-type';

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addPumpkin: {
      type: PumpkinType,
      description: 'Add a pumpkin',
      args: {
        input: { type: PumpkinInputType }
      },
      resolve: (parent, args) => PumpkinService.addPumpkin(args.input.name, args.input.authorId)
    },
    addUser: {
      type: UserType,
      description: 'Add an user',
      args: {
        input: { type: UserInputType },
      },
      resolve: (parent, args) => UserService.addUser(args.input.name, args.input.email)
    },
    ratePumpkin: {
      type: PumpkinType,
      description: 'Add an user',
      args: {
        input: { type: RateInputType }
      },
      resolve: async (parent, args) => {
        await PumpkinService.ratePumpkin(args.input.pumpkinId, args.input.raterId, args.input.rate)
        return await PumpkinService.getPumpkin(args.pumpkinId);
      }
    }
  })
})

export default RootMutationType;