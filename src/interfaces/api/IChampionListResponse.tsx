import IChampion from "./IChampion";

interface IChampionListResponse {
    type: string;
    format: string;
    version: string;
    data: { [key: string]: IChampion };
}

export default IChampionListResponse;