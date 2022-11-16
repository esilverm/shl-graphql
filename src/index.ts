import { readFileSync } from "fs";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { KeyvAdapter } from "@apollo/utils.keyvadapter";
import * as dotenv from "dotenv";
import Keyv from "keyv";

import { createSequelize } from "./db/db";
import { resolvers } from "./resolvers";

dotenv.config();

const typeDefs = readFileSync("./schema.graphql", {
  encoding: "utf-8",
});

const sequelize = await createSequelize();
console.log("🚀  Sequelize connected to database.");

export interface MyContext {
  dataSources: {
    sequelize;
  };
}

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  cache: new KeyvAdapter(new Keyv()),
  persistedQueries: {
    ttl: 900,
  },
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      dataSources: {
        sequelize,
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
