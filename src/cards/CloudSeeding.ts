
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";
import { SelectPlayer } from "../inputs/SelectPlayer";

export class CloudSeeding implements IProjectCard {
    public cost: number = 11;
    public tags: Array<Tags> = [];
    public name: string = "Cloud Seeding";
    public cardType: CardType = CardType.AUTOMATED;
    public text: string = "Requires 3 ocean tiles. Decrease your mega credit production 1 step and any heat production 1 step. Increase your plant production 2 steps.";
    public description: string = "Lessens solar influx, but enhances plant growth.";
    public play(player: Player, game: Game) {
        if (game.getOceansOnBoard() < 3) {
            throw "Requires 3 ocean tiles";
        }
        return new SelectPlayer(this.name, game.getPlayers(), "Select player to decrease", (foundPlayer: Player) => {
                if (foundPlayer.heatProduction < 1) {
                    throw "Player must have heat production";
                }
                player.megaCreditProduction--;
                foundPlayer.heatProduction--;
                player.plantProduction += 2;
                return undefined;
            });
    }
}