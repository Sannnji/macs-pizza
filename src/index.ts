import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";

import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

mongoose.connect("mongodb://localhost:27017/authDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.listen({ port: 4000 }, () => {
  console.log("Server is running");
});
