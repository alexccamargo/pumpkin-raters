
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLFloat } from 'graphql';

import { AuthorService, PumpkinService } from '../../services';

import AuthorType from './author-type';

const PumpkinType = new GraphQLObjectType({
    name: 'Pumpkin',
    description: 'The pumpkin',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) },
        author: {
            type: AuthorType,
            resolve: (pumpkin) => AuthorService.getAuthorByUserId(pumpkin.authorId)
        },
        rate: {
            type: GraphQLFloat,
            resolve: (pumpkin) => PumpkinService.getPumpkinRate(pumpkin.id)
        }
    })
});

export default PumpkinType;
