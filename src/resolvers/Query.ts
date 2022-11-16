import { Conference, League } from "../db/models";

export const Query = {
  leagues: async () => {
    return await League.findAll();
  },
  conferences: async (_, { season, league }) => {
    const conferences = await Conference.findAll({
      where: {
        season,
        ...(league !== undefined && { league }),
      },
      raw: true,
    });
    return conferences;
  },
};
