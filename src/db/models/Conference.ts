import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  Sequelize,
} from "sequelize";

export class Conference extends Model<
  InferAttributes<Conference>,
  InferCreationAttributes<Conference>
> {
  declare id: number;
  declare name: string;
  declare league: number;
  declare season: number;

  public static initialize(sequelize: Sequelize) {
    Conference.init(
      {
        id: {
          type: DataTypes.INTEGER,
          field: "ConferenceID",
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(18),
          field: "Name",
        },
        league: {
          type: DataTypes.INTEGER,
          field: "LeagueID",
        },
        season: {
          type: DataTypes.INTEGER,
          field: "SeasonID",
        },
      },
      {
        sequelize,
        tableName: "conferences",
        timestamps: false,
      }
    );
  }
}
