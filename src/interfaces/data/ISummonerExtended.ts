import ISummoner from "../api/ISummoner";
import IChampionMasteryExtended from "./IChampionMasteryExtended";

interface ISummonerExtended extends ISummoner {
    profileIconImage: string;
    championMasteries: IChampionMasteryExtended[];
}

export default ISummonerExtended;