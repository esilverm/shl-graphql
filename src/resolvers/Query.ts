import { QueryResolvers } from "../generated/graphql";

export const Query: QueryResolvers = {
  leagues: async (_, __, { dataSources }) => {
    return await dataSources.sequelize.models.League.findAll();
  },
};
