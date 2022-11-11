import IChampion from "../api/IChampion";
import IChampionMastery from "../api/IChampionMastery";

interface IChampionMasteryExtended extends IChampionMastery {
    championName: string;
    championImageUrl: string;
    championIconUrl: string;

    championData: IChampion;
}

export default IChampionMasteryExtended;