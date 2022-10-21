import { QueryResolvers } from "../generated/graphql";

export const queries: QueryResolvers = {
  Query: {
    players: async (_, __, { dataSources }) => {
      return await dataSources.playersAPI.getPlayers();
    },
  },
};
