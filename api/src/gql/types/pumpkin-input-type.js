
import { GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLInputObjectType } from 'graphql';

const PumpkinInputType = new GraphQLInputObjectType({
    name: 'PumpkinInput',
    description: 'The pumpkin input type',
    fields: () => ({
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) },
    })
});

export default PumpkinInputType;
