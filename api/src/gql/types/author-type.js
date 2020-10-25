import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLNonNull } from 'graphql';

import { PumpkinService } from '../../services';

import PumpkinType from './pumpkin-type';

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'This represents a author of a pumpkin',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        pumpkins: {
            type: new GraphQLList(PumpkinType),
            resolve: (user) => PumpkinService.getPumpkinByAuthor(user.id)
        },
    })
});

export default AuthorType;