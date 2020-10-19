import { GraphQLSchema } from 'graphql';

import RootQueryType from './queries';
import RootMutationType from './mutations';

const Schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});

export default Schema; 