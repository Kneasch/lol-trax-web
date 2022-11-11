const apiConfig = {
    apiKey: "RGAPI-b8e11d90-c751-4bd9-be4a-3c5f8cbcc111",
    baseRoutes: {
        riot: "https://REGION_CODE.api.riotgames.com",
        riotGreaterRegion: "https://GREATER_REGION_CODE.api.riotgames.com",
        dataDragon: "https://ddragon.leagueoflegends.com",
        dataDragon2: "http://ddragon.leagueoflegends.com"
    },
    regions: {
        NA1: {
            code: "na1",
            greaterRegion: "americas"
        },
        BR1: 
        {
            code: "br1",
            greaterRegion: "americas"
        },
        EUN1:{
            code: "eun1",
            greaterRegion: "europe"
        } ,
        EUW1: {
            code: "euw1",
            greaterRegion: "europe"
        },
        JP1: {
            code: "jp1",
            greaterRegion: "asia"
        },
        KR: {
            code: "kr",
            greaterRegion: "asia"
        },
        LA1: {
            code: "la1",
            greaterRegion: "americas"
        },
        LA2: {
            code: "la2",
            greaterRegion: "americas"
        },
        OC1: {
            code: "oc1",
            greaterRegion: "SEA"
        },
        RU: {
            code: "ru",
            greaterRegion: "europe"
        },
        TR1: {
            code: "tr1",
            greaterRegion: "europe"
        }
    },
    dataDragon: {
        versions: "/api/versions.json",
        champion: "/cdn/VERSION_NUMBER/data/LANGUAGE_CODE/champion.json",
        championLoadingImage: "/cdn/img/champion/loading/CHAMPION_NAME_0.jpg",
        championIconImage: "/cdn/VERSION_NUMBER/img/champion/CHAMPION_NAME.png",
        profileIconImage: "/cdn/VERSION_NUMBER/img/profileicon/PROFILE_ICON_ID.png"
    },
    riot: {
        championMasteryBySummonerId: "/lol/champion-mastery/v4/champion-masteries/by-summoner/SUMMONER_ID",
        searchBySummonerName: "/lol/summoner/v4/summoners/by-name/SUMMONER_NAME"
    },
    riotGreaterRegion: {
        // TODO
    }
}

export default apiConfig;