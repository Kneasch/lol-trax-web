import apiConfig from "./apiConfig";
import axios from 'axios';
import ISummoner from "../interfaces/api/ISummoner";
import IChampionMastery from "../interfaces/api/IChampionMastery";
import IChampionListResponse from "../interfaces/api/IChampionListResponse";

const getSummonerByName = async (summonerName: string, regionCode: string): Promise<ISummoner | null> => {
    const { riot, baseRoutes, apiKey } = apiConfig;

    try {
        const response = await axios.get<ISummoner>(`${baseRoutes.riot.replace("REGION_CODE", regionCode)}${riot.searchBySummonerName.replace("SUMMONER_NAME", summonerName)}?api_key=${apiKey}`);

        return response.data || null;
    } catch(ex) {
        console.error(ex);
        return null;
    }
}

const getChampionMasteryBySummoner = async (summoner: ISummoner, regionCode: string) : Promise<IChampionMastery[] | null> => {
    const { riot, baseRoutes, apiKey } = apiConfig;

    try {
        const response = await axios.get<IChampionMastery[]>(`${baseRoutes.riot.replace("REGION_CODE", regionCode)}${riot.championMasteryBySummonerId.replace("SUMMONER_ID", summoner.id)}?api_key=${apiKey}`);

        return response.data || null;
    } catch(ex) {
        console.error(ex);

        return null;
    }
}

const getCurrentVersion = async () : Promise<string | null> => {
    const { baseRoutes, dataDragon } = apiConfig;

    try {
        const response = await axios.get<string[]>(`${baseRoutes.dataDragon}${dataDragon.versions}`);

        return response.data[0] || null;
    } catch(ex) {
        console.error(ex);

        return null;
    }
}

const getChampions = async (version: string, languageCode: string) : Promise<IChampionListResponse | null> => {
    const { baseRoutes, dataDragon } = apiConfig;

    try {
        const response = await axios.get<IChampionListResponse>(`${baseRoutes.dataDragon}${dataDragon.champion.replace("VERSION_NUMBER", version).replace("LANGUAGE_CODE", languageCode)}`);

        return response.data || null;
    } catch(ex) {
        console.error(ex);

        return null;
    }
}

export default {
    getSummonerByName,
    getChampionMasteryBySummoner,
    getCurrentVersion,
    getChampions
};