import { readFileSync } from "fs";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { PlayersDataSource } from "./datasources/players";
import { resolvers } from "./resolvers";

export interface MyContext {
  dataSources?: {
    playersAPI: PlayersDataSource;
  };
}

const typeDefs = readFileSync("./schema.graphql", {
  encoding: "utf-8",
});

async function startApolloServer() {
  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
}

startApolloServer();
