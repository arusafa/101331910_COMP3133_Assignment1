// mongoose connection
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
require("dotenv").config();
const connectDB = require('./db');

const typeDefs = require('./routes/typeDefs');
const emp_resolvers = require('./routes/emp_Resolvers');
const usr_resolvers = require('./routes/usr_Resolvers');

// mongoose connection
connectDB();

// Apollo Server
const start_server = async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers: [emp_resolvers, usr_resolvers]
    })
    await server.start();
    server.applyMiddleware({ app })
    app.listen({ port: 3231 }, () => {
        console.log(`Server ready at http://localhost:3231${server.graphqlPath}`)
    })
}
start_server();

