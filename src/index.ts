import { readFileSync } from "fs";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { KeyvAdapter } from "@apollo/utils.keyvadapter";
import * as dotenv from "dotenv";
import Keyv from "keyv";

import { Context } from "./context";
import { createSequelize } from "./db/db";
import { resolvers } from "./resolvers";
import { createLeagueDataLoader } from "./resolvers/utils/leagueDataloader";

dotenv.config();

const typeDefs = readFileSync("./schema.graphql", {
  encoding: "utf-8",
});

const sequelize = await createSequelize();
console.log("🚀  Sequelize connected to database.");

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
  cache: new KeyvAdapter(new Keyv()),
  persistedQueries: {
    ttl: 900,
  },
});

const { url } = await startStandaloneServer(server, {
  context: async () => ({
    sequelize,
    leagueDataLoader: createLeagueDataLoader(),
  }),
});

console.log(`🚀  Server ready at: ${url}`);
