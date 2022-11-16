import { ConferenceResolvers } from "../generated/graphql";

export const Conference: ConferenceResolvers = {
  league: async ({ league }, _, { dataSources }) => {
    console.log(league);
    return await dataSources.sequelize.models.League.findOne({
      where: {
        id: league,
      },
    });
  },
};
