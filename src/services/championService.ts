import apiClient from "../api/apiClient";
import apiConfig from "../api/apiConfig";
import IChampion from "../interfaces/api/IChampion";
import IChampionListResponse from "../interfaces/api/IChampionListResponse";
import ISummoner from "../interfaces/api/ISummoner";
import IChampionMasteryExtended from "../interfaces/data/IChampionMasteryExtended";

const cacheChampionData = async (version: string, languageCode: string): Promise<boolean> => {
    let success: boolean = false;

    try {
        if (!localStorage.getItem(`CHAMPION_CACHE_${version}`)) {
            const response = await apiClient.getChampions(version, languageCode);

            if (response) {
                localStorage.setItem(`CHAMPION_CACHE_${version}`, JSON.stringify(response));
                success = true;
            }
        } else {
            success = true;
        }
    } catch (ex) {
        console.error(ex);
        success = false;
    }

    return success;
}

const getChampionsCache = (version: string): IChampion[] => {
    if (!localStorage.getItem(`CHAMPION_CACHE_${version}`)) {
        return [];
    }

    let cache = (JSON.parse(localStorage.getItem(`CHAMPION_CACHE_${version}`) || "{}") as IChampionListResponse);

    return Object.values(cache.data);
}

const getChampionMasteryExtended = async (summoner: ISummoner, champions: IChampion[], regionCode: string, version: string): Promise<IChampionMasteryExtended[]> => {
    const championMasteries = await apiClient.getChampionMasteryBySummoner(summoner, regionCode) || [];

    return championMasteries.map((item) => {
        const champ = champions.find(x => x.key === `${item.championId}`);
        return {
            ...item,
            championName: champ?.name,
            championImageUrl: `${apiConfig.baseRoutes.dataDragon2}${apiConfig.dataDragon.championLoadingImage.replace("CHAMPION_NAME", champ?.image.full.replace(".png", "") || "")}`,
            championIconUrl: `${apiConfig.baseRoutes.dataDragon}${apiConfig.dataDragon.championIconImage.replace("CHAMPION_NAME", champ?.image.full.replace(".png", "") || "").replace("VERSION_NUMBER", version)}`,
            championData: champ
        } as IChampionMasteryExtended
    });
}

export default {
    cacheChampionData,
    getChampionsCache,
    getChampionMasteryExtended
}