export const Conference = {
  league: async ({ league }, _, { leagueDataLoader }) => {
    return await leagueDataLoader.load(league);
  },
};
