const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.listen(4000, () => {
  app.use('/graphql', expressGraphQL({
    schema, // schema: schema
    graphiql: true //é uma ferramenta que permite realizar queries em ambiente de desenvolvimento
  }))
  console.log('Listening');
});
