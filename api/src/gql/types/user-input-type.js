import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'This represents a UserInput',
  fields: () => ({
    email: { type: GraphQLNonNull(GraphQLString) },
    username: { type: GraphQLNonNull(GraphQLString) },
  })
});

export default UserInputType;