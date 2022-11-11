import React, { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';
import ISummoner from '../interfaces/api/ISummoner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export interface IPlayerSearchProps {
    setSummoner: (summoner: ISummoner | null) => void;
    regionCode: string;
}

const PlayerSearch = (props: IPlayerSearchProps): JSX.Element => {

    const { setSummoner, regionCode } = props;

    const [userName, setUserName] = useState<string>("");

    const searchForSummoner = async (): Promise<ISummoner | null> => {
        const result = await apiClient.getSummonerByName(userName, regionCode);

        return result;
    }

    const handleSearchClick = async () => {
        setSummoner(await searchForSummoner());
    }

    return (
        <div className='playerSearch'>
            <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} placeholder={'Enter Summoner Name (i.e. Kneasch, jacattackk5, etc.)'} onKeyUp={(e) => {
                if (e.key === 'Enter') {
                    handleSearchClick();

                    // Thanks stack overflow
                    let el = document.querySelector(':focus') as any;
                    if (el)
                        el.blur()
                }
            }} />
            <button onClick={handleSearchClick}><FontAwesomeIcon icon={faSearch} /></button>
        </div>
    );

}

export default PlayerSearch;