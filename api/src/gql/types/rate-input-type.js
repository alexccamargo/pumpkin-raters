
import { GraphQLInt, GraphQLNonNull, GraphQLInputObjectType } from 'graphql';

const RateInputType = new GraphQLInputObjectType({
    name: 'RateInput',
    description: 'The pumpkin input type',
    fields: () => ({
        pumpkinId: { type: GraphQLNonNull(GraphQLInt) },
        raterId: { type: GraphQLNonNull(GraphQLInt) },
        rate: { type: GraphQLNonNull(GraphQLInt) },
    })
});

export default RateInputType;
