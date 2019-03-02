
import { Player } from "../Player";
import { Game } from "../Game";
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { AndOptions } from "../inputs/AndOptions";
import { OrOptions } from "../inputs/OrOptions";
import { SelectSpace } from "../inputs/SelectSpace";
import { SelectCard } from "../inputs/SelectCard";
import { SelectOption } from "../inputs/SelectOption";
import { ISpace } from "../ISpace";

export class LargeConvoy implements IProjectCard {
    public cost: number = 36;
    public tags: Array<Tags> = [Tags.EARTH, Tags.SPACE];
    public name: string = "Large Convoy";
    public cardType: CardType = CardType.EVENT;
    public text: string = "Place an ocean tile and draw 2 cards. Gain 5 plants, or add 4 animals to ANOTHER card. 2 Victory Points.";
    public description: string = "Huge delivery from Earth";
    public play(player: Player, game: Game) {
        let otherAnimalCards: Array<IProjectCard> = game.getOtherAnimalCards(this);
        return new AndOptions(
            () => {
                player.cardsInHand.push(game.dealer.getCards(1)[0]);
                player.cardsInHand.push(game.dealer.getCards(1)[0]);
                player.victoryPoints += 2;
                return undefined;
            },
            new SelectSpace(this.name, "Select space for ocean tile", game.getAvailableSpacesForOcean(player), (space: ISpace) => {
                game.addOceanTile(player, space.id);
                return undefined;
            }),
            new OrOptions(
                new SelectOption(this.name, "Gain 5 plants", () => { player.plants += 5; return undefined; }),
                new SelectCard(this.name, "Select card to add 4 animals", otherAnimalCards, (foundCards: Array<IProjectCard>) => { 
                    foundCards[0]!.animals! += 4;
                    return undefined;
                })
            )
        );
    }
}