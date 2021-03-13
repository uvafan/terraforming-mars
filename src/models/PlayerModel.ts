import {CardModel} from './CardModel';
import {GameOptionsModel} from './GameOptionsModel';
import {ColonyModel} from './ColonyModel';
import {Color} from '../Color';
import {VictoryPointsBreakdown} from '../VictoryPointsBreakdown';
import {ITagCount} from '../ITagCount';
import {TurmoilModel} from './TurmoilModel';
import {ClaimedMilestoneModel} from './ClaimedMilestoneModel';
import {FundedAwardModel} from './FundedAwardModel';
import {Phase} from '../Phase';
import {PlayerInputModel} from './PlayerInputModel';
import {SpaceModel} from './SpaceModel';
import {IAresData} from '../ares/IAresData';
import {SerializedTimer} from '../SerializedTimer';
import {MoonModel} from './MoonModel';

export interface PlayerModel {
    actionsTakenThisRound: number;
    actionsThisGeneration: Array<string>;
    aresData: IAresData | undefined;
    availableBlueCardActionCount: number;
    awards: Array<FundedAwardModel>;
    cardCost: number;
    cardsInHand: Array<CardModel>;
    cardsInHandNbr: number;
    citiesCount: number;
    colonies: Array<ColonyModel>;
    coloniesCount: number;
    color: Color;
    corporationCard: CardModel | undefined;
    dealtCorporationCards: Array<CardModel>;
    dealtPreludeCards: Array<CardModel>;
    dealtProjectCards: Array<CardModel>;
    deckSize: number;
    draftedCards: Array<CardModel>;
    energy: number;
    energyProduction: number;
    fleetSize: number;
    gameAge: number;
    timeline: number;
    gameOptions: GameOptionsModel;
    generation: number;
    heat: number;
    heatProduction: number;
    id: string; // PlayerId
    influence: number;
    isActive: boolean;
    isSoloModeWin: boolean;
    lastSoloGeneration: number,
    megaCredits: number;
    megaCreditProduction: number;
    milestones: Array<ClaimedMilestoneModel>;
    moon: MoonModel | undefined;
    name: string;
    needsToDraft: boolean | undefined;
    needsToResearch: boolean | undefined;
    noTagsCount: number;
    oceans: number;
    oxygenLevel: number;
    passedPlayers: Array<Color>;
    phase: Phase;
    pickedCorporationCard: Array<CardModel>;
    plants: number;
    plantProduction: number;
    plantsAreProtected: boolean;
    playedCards: Array<CardModel>;
    players: Array<PlayerModel>;
    preludeCardsInHand: Array<CardModel>;
    selfReplicatingRobotsCards: Array<CardModel>;
    spaces: Array<SpaceModel>;
    steel: number;
    steelProduction: number;
    steelValue: number;
    tags: Array<ITagCount>;
    temperature: number;
    terraformRating: number;
    timer: SerializedTimer;
    titanium: number;
    titaniumProduction: number;
    titaniumValue: number;
    tradesThisGeneration: number;
    turmoil: TurmoilModel | undefined;
    venusScaleLevel: number;
    victoryPointsBreakdown: VictoryPointsBreakdown;
    waitingFor: PlayerInputModel | undefined;
}
