const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.listen(4000, () => {
  app.use('/graphql', expressGraphQL({
    graphiql: true //é uma ferramenta que permite realizar queries em ambiente de desenvolvimento
  }))
  console.log('Listening');
});
