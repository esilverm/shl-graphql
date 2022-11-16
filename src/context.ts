import DataLoader from "dataloader";
import { Sequelize } from "sequelize";

import { League } from "./db/models";

export interface Context {
  sequelize: Sequelize;
  leagueDataLoader: DataLoader<League["id"], League>;
}
