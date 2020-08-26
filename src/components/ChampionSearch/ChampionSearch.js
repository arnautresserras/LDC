import React from 'react';
import './ChampionSearch.scss';

function ChampionSearch(props){
    return(
        <div className='championSearch'>
            <input type='text' value={props.searchBox} onChange={props.onChange} className='championSearch__input' placeholder='Select a champion'/>
        </div>
    );
}

export default ChampionSearch;