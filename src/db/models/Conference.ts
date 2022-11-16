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
  declare id: string;
  declare name: string;
  declare league: string;
  declare season: number;

  public static initialize(sequelize: Sequelize) {
    Conference.init(
      {
        id: {
          type: DataTypes.STRING,
          field: "ConferenceID",
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(18),
          field: "Name",
        },
        league: {
          type: DataTypes.STRING,
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
