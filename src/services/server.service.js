const express = require("express");
const app = express();
const config = require("../../configs");
const schema = require("../apollo/schemas");
const resolvers = require("../apollo/resolvers");
const port = config.server.port;

const { ApolloServer, gql } = require("apollo-server-express");

const graphQlServer = new ApolloServer({
    typeDefs: schema,
    resolvers
});

graphQlServer.applyMiddleware({ app, path: "/graphql"});

exports.start = () => {
    app.listen(port, (err) => {
      if (err) {
        console.log(`Errors: ${err}`);
        process.exit(-1);
      }
      console.log(`app is runnning on port ${port}`);
    });
  };