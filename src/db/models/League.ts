import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  Sequelize,
} from "sequelize";

export class League extends Model<
  InferAttributes<League>,
  InferCreationAttributes<League>
> {
  declare id: number;
  declare name: string;
  declare abbr: string;

  public static initialize(sequelize: Sequelize) {
    League.init(
      {
        id: {
          type: DataTypes.INTEGER,
          field: "LeagueID",
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(40),
          field: "Name",
        },
        abbr: {
          type: DataTypes.STRING(5),
          field: "Abbr",
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "league_data",
        timestamps: false,
      }
    );
  }
}
