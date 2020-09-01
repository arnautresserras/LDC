import React from 'react';

function ChampionName(props){
    return(
    <h1 className={props.className}>{props.championName}, {props.championTitle}</h1>
    );
}

export default ChampionName;