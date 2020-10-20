import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import Schema from "./gql";

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema: Schema,
    graphiql: true
  })
);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log('Server Running'))