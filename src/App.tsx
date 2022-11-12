import React, { useState, useEffect } from 'react';
import apiClient from './api/apiClient';
import PlayerMasteries from './components/PlayerMasteries';
import PlayerSearch from './components/PlayerSearch';
import Logo from './icons/Logo';
import IChampion from './interfaces/api/IChampion';
import ISummoner from './interfaces/api/ISummoner';
import IChampionMasteryExtended from './interfaces/data/IChampionMasteryExtended';
import championService from './services/championService';

export interface IAppProps {
}

const App = (props: IAppProps): JSX.Element => {

    const [loading, setLoading] = useState<boolean>(true);
    const [regionCode, setRegionCode] = useState<string>("NA1");
    const [languageCode, setLanguageCode] = useState<string>("en_US");
    const [champions, setChampions] = useState<IChampion[]>([]);
    const [version, setVersion] = useState<string>("");
    const [summoner, setSummoner] = useState<ISummoner | null>(null);
    const [championMasteries, setChampionMasteries] = useState<IChampionMasteryExtended[]>([]);

    useEffect(() => {
        initialLoad()
            .then(() => { })
            .catch((err) => console.error(err));
    }, [])

    useEffect(() => {
        if (summoner) {
            championService.getChampionMasteryExtended(summoner, champions, regionCode, version)
                .then(res => setChampionMasteries(res))
                .catch((err) => console.error(err))
        }
    }, [summoner])

    useEffect(() => {
        console.table(championMasteries)
    }, [championMasteries])

    const initialLoad = async () => {
        const _version = await apiClient.getCurrentVersion() || "";

        setVersion(_version);

        const setCache = await championService.cacheChampionData(_version, languageCode);

        if (setCache)
            setChampions(championService.getChampionsCache(_version));

        setLoading(false);
    }



    if (loading)
        return (<>Loading..</>)

    return (
        <div className='app'>
            <Logo color={'white'} size={75} />
            <PlayerSearch setSummoner={setSummoner} regionCode={regionCode} />
            {
                championMasteries && championMasteries.length > 0 &&
                <>
                    <PlayerMasteries championMasteries={championMasteries.filter(x => x.championLevel === 7).sort((a, b) => b.championLevel - a.championLevel)} />
                    <PlayerMasteries championMasteries={championMasteries.filter(x => x.championLevel === 6).sort((a, b) => b.championLevel - a.championLevel)} />
                    <PlayerMasteries championMasteries={championMasteries.filter(x => x.championLevel === 5).sort((a, b) => b.championLevel - a.championLevel)} />
                    <PlayerMasteries championMasteries={championMasteries.filter(x => x.championLevel === 4).sort((a, b) => b.championLevel - a.championLevel)} />
                    <PlayerMasteries championMasteries={championMasteries.filter(x => x.championLevel === 3).sort((a, b) => b.championLevel - a.championLevel)} />
                    <PlayerMasteries championMasteries={championMasteries.filter(x => x.championLevel === 2).sort((a, b) => b.championLevel - a.championLevel)} />
                    <PlayerMasteries championMasteries={championMasteries.filter(x => x.championLevel === 1).sort((a, b) => b.championLevel - a.championLevel)} />
                </>
            }
        </div>
    );
}

export default App;