import { Model, Sequelize } from "sequelize";

import * as models from "./models";

export const createSequelize = async () => {
  const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
      host: process.env.MYSQL_HOST,
      dialect: "mariadb",
    }
  );

  // Make sure we can connect to the db
  await sequelize.authenticate();

  // initialize models and db
  initializeModels(sequelize);

  return sequelize;
};

const initializeModels = (sequelize: Sequelize) => {
  Object.values(models).forEach((model) => {
    if (model.prototype instanceof Model) {
      model.initialize(sequelize);
    }
  });
};
