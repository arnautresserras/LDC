import React from 'react';
import './ChampionProfile.scss';

function ChampionProfile(props){

    const icon = 'http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/'+props.data.id+'.png';

    return(
        <div className='championProfile'>
            <img className='championProfile__icon' src={icon} alt={props.data.name} />
            <div className='championProfile__summary'>
                <h2 className='championProfile__summary-name'>{props.data.name}<span className='championProfile__summary-title'>, {props.data.title}</span></h2>
                <p>{props.data.tags.toString().replace(/,/g, ", ")}</p>
            </div>
        </div>
    );
}

export default ChampionProfile;