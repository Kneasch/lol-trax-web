import React, { useState, useEffect } from 'react';
import IChampionMasteryExtended from '../interfaces/data/IChampionMasteryExtended';

export interface IChampionMasteryRecordProps {
    record: IChampionMasteryExtended;
}

const ChampionMasteryRecord = (props: IChampionMasteryRecordProps): JSX.Element => {

    const { record } = props;

    const {
        championIconUrl,
        championName,
        championLevel,
        championPoints,
        championImageUrl
    } = record;

    return (
        <div className='championMasteryRecord' style={{ background: `url("${championImageUrl}")`, backgroundSize: 'cover', backgroundPosition: 'top center', height: 500, width: 300 }}>
            <div className='championName'>{championName}</div>
            <div className='masteryInfo'>
                <img src={`/img/champion-mastery-icons/mastery-${championLevel}.png`} alt="" style={{top: championLevel <= 2 ? -45 : -60 }} />
                <div>
                    <span className='masteryPoints'>{championPoints.toLocaleString()} Mastery Pts</span>
                </div>
            </div>
        </div>
    );

}

export default ChampionMasteryRecord;