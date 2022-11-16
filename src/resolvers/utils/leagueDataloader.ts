import DataLoader from "dataloader";
import { Op } from "sequelize";

import { League } from "../../db/models";

const findLeaguesForKeys = async (keys: readonly string[]) => {
  const leagues = await League.findAll({
    where: {
      id: {
        [Op.in]: keys,
      },
    },
    raw: true,
  });
  const mappedLeagues = new Map<number, League>();

  leagues.forEach((league) => {
    mappedLeagues.set(parseInt(league.id), league);
  });

  return keys.map((key) => mappedLeagues.get(parseInt(key)));
};

export const createLeagueDataLoader = (): DataLoader<string, League> =>
  new DataLoader(async (keys) => findLeaguesForKeys(keys));
