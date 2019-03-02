
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";
import { SelectPlayer } from "../inputs/SelectPlayer";

export class PowerSupplyConsortium implements IProjectCard {
    public cost: number = 5;
    public tags: Array<Tags> = [Tags.ENERGY];
    public name: string = "Power Supply Consortium";
    public cardType: CardType = CardType.AUTOMATED;
    public text: string = "Requires 2 power tags. Decrease any energy production 1 step and increase your own 1 step.";
    public description: string = "Dominating the energy market allows you to make hostile takeovers.";
    public play(player: Player, game: Game) {
        if (player.getTagCount(Tags.ENERGY) < 2) {
            throw "Requires 2 power tags.";
        }
        return new SelectPlayer(this.name, game.getPlayers(), "Select player to decrease energy", (foundPlayer: Player) => {
            if (foundPlayer.energyProduction < 1) {
                throw "Player must have energy production to remove";
            }
            foundPlayer.energyProduction--;
            player.energyProduction++;
            return undefined;
        });
    }
}