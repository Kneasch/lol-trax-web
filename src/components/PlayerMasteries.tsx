import React, { useState, useEffect } from 'react';
import IChampionMasteryExtended from '../interfaces/data/IChampionMasteryExtended';
import ChampionMasteryRecord from './ChampionMasteryRecord';

export interface IPlayerMasteriesProps {
    championMasteries: IChampionMasteryExtended[];
}

const PlayerMasteries = (props: IPlayerMasteriesProps): JSX.Element => {

    const { championMasteries } = props;

    if (championMasteries.length === 0)
        return <></>

    return (
        <>
            <h1 className='masteryTitle'>Mastery {championMasteries[0].championLevel}</h1>
            <hr className='masteryTitleLine' />
            <div className='championMasteries'>
                {
                    championMasteries.map((item) => {
                        return (<ChampionMasteryRecord record={item} />)
                    })
                }
            </div>
        </>
    );

}

export default PlayerMasteries;