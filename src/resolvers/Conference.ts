import { ConferenceResolvers } from "../generated/graphql";

export const Conference: ConferenceResolvers = {
  league: async ({ league }, _, { dataSources }) => {
    return await dataSources.sequelize.models.League.findOne({
      where: {
        id: league,
      },
    });
  },
};
