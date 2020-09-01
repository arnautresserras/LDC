import React from 'react';

function ChampionTips(props){
    const allyTips = props.allytips.map((tip) => 
        <li>{tip}</li>
    );
    const enemyTips = props.enemytips.map((tip) => 
        <li>{tip}</li>
    );
    return(
        <div>
            <h4>Champion Lore:</h4>
            <p className='championData__lore'>{props.lore}</p>
            <h4>How to play {props.name}:</h4>
            <ul>{allyTips}</ul>
            <h4>Playing against {props.name}:</h4>
            <ul>{enemyTips}</ul>
        </div>
    );
}

export default ChampionTips;