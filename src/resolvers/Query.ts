import { QueryResolvers } from "../generated/graphql";

export const Query: QueryResolvers = {
  leagues: async (_, __, { dataSources }) => {
    return await dataSources.sequelize.models.League.findAll();
  },
  conferences: async (_, { season, league }, { dataSources }) => {
    return await dataSources.sequelize.models.Conference.findAll({
      where: {
        season,
        ...(league !== undefined && { league }),
      },
    });
  },
};
