import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import axios from "axios";
import USERS  from "./Users.js"
import TODOS  from "./Todos.js"

async function startServer() {
  const app = express();

  const typeDefs = `
  type User {
  id:ID!
  name:String!
  username:String!
  email:String!
  phone:String!
  website:String!
  }
    type Todo {
      id: ID!
      title: String!
      completed: Boolean
    }

    type Query {
      getTodos: [Todo]
      getAllUsers:[User]
      getUser(id:ID!):User
    }
  `;

  const resolvers = {
    Todo: {
      user: () => USERS.find(e => e.id === todo.id)
    },
    Query: {
      getTodos: () => TODOS,
      getAllUsers: () => USERS,
      getUser: async (parent, { id }) => USERS.find(e => e.id === todo.id)

    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(cors());
  app.use(express.json());

  app.use("/graphql", expressMiddleware(server));

  app.listen(8000, () => {
    console.log("🚀 Server started at http://localhost:8000/graphql");
  });
}

startServer();