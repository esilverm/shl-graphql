import { readFileSync } from "fs";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { PlayersDataSource } from "./datasources/players";
import { resolvers } from "./resolvers";

export interface MyContext {
  dataSources: {
    playersAPI: PlayersDataSource;
  };
}

const typeDefs = readFileSync("./schema.graphql", {
  encoding: "utf-8",
});

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      dataSources: {
        playersAPI: new PlayersDataSource(),
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
