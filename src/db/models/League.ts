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
  declare id: string;
  declare name: string;
  declare abbr: string;

  public static initialize(sequelize: Sequelize) {
    League.init(
      {
        id: {
          type: DataTypes.STRING,
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

  public static async getLeague(id: number): Promise<League> {
    if (!id) {
      throw new Error("You need an id to fetch a single league");
    }

    const league = await League.findOne({
      where: { id },
    });

    if (!league) {
      throw new Error("League not found");
    }

    return league;
  }
}
