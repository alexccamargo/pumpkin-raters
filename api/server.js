const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const app = express()
const gql = require("./gql");

app.use(
  '/graphql',
  graphqlHTTP({
    schema: gql.schema,
    graphiql: true
  })
);

app.listen(4000, () => console.log('Server Running'))