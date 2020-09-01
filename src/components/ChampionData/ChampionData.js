import React from 'react';
import './ChampionData.scss';
import ChampionTips from '../ChampionTips/ChampionTips';

function ChampionData(props){
    const alt = "Splash art for "+props.champion.name+", "+props.champion.title;
    const icon = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+props.champion.id+'_0.jpg';
    return(
        <div className='championData'>
            <img className='championData__loading' src={icon} alt={alt}></img>
            <div>
                <ChampionTips lore={props.champion.lore} name={props.champion.name} allytips={props.champion.allytips} enemytips={props.champion.enemytips}/>
            </div>
        </div>
    );
}

export default ChampionData;