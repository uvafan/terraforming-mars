
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";

export class ColonizerTrainingCamp implements IProjectCard {
    public cost: number = 8;
    public tags: Array<Tags> = [Tags.JOVIAN, Tags.STEEL];
    public name: string = "Colonizer Training Camp";
    public cardType: CardType = CardType.AUTOMATED;
    public text: string = "Oxygen must be 5% or less. Gain 2 victory points.";
    public description: string = "Preparing for settlement of the moons of Jupiter.";
    public play(player: Player, game: Game) {
        if (game.getOxygenLevel() > 5) {
            throw "Oxygen must be 5% or less.";
        }
        player.victoryPoints += 2;
        return undefined;
    }
}