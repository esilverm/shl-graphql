import { readFileSync } from "fs";
import { resolve } from "path";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { Resolvers } from "./generated/graphql";

const typeDefs = readFileSync(resolve(__dirname, "./schema.graphql"), {
  encoding: "utf-8",
});

const resolvers: Resolvers = {
  Query: {
    players: () => [
      {
        name: "Pass Forfeit",
        height: 100,
        weight: 200,
      },
      {
        name: "Nicolaj Muller",
        height: 50,
        weight: 2020,
      },
    ],
  },
};

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
}

startApolloServer();
