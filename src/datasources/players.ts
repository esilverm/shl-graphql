import { Player } from "../generated/graphql";

export class PlayersDataSource {
  players: Player[] = [
    {
      name: "Pass Forfeit",
      height: 100,
      weight: 200,
    },
    {
      name: "Nicolaj Muller",
      height: 50,
      weight: 2020,
    },
  ];

  getPlayers(): Player[] {
    return this.players;
  }
}
