import React from 'react';
import './ChampionData.scss';
import ReactImageFallback from "react-image-fallback";
import fallback from '../../fallback.jpg';
import ChampionTips from '../ChampionTips/ChampionTips';

class ChampionData extends React.Component{

    constructor(props){
        super(props);
        this.state={
            skinID: 0,
            lastSkin: this.props.champion.skins.length - 1,
            firstSkin: 0
        };
        this.nextSkin = this.nextSkin.bind(this);
        this.previousSkin = this.previousSkin.bind(this);
    }

    nextSkin(){
        const { skinID, lastSkin } = this.state;
        if(skinID!==lastSkin){
            const newSkinID = skinID + 1;
            this.setState({skinID: newSkinID});
        }else{
            this.setState({skinID: 0});
        };
    }
    previousSkin(){
        const { skinID, lastSkin, firstSkin } = this.state;
        if(skinID!==firstSkin){
            const newSkinID = skinID - 1;
            this.setState({skinID: newSkinID});
        }else{
            this.setState({skinID: lastSkin});
        };
    }

    render(){
        let skinName = this.props.champion.skins[this.state.skinID].name;
        const alt = "Splash art for "+Object.values({skinName})+" skin.";
        let icon = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+this.props.champion.id+'_'+this.state.skinID+'.jpg';
        return(
            <div className='championData'>
                <div className='championData__loading'>
                    <ReactImageFallback className='championData__loading-img' src={icon} alt={alt} fallbackImage={fallback} />
                    <div className='championData__skins'>
                        <button className='championData__skins-button' onClick={this.previousSkin}>&#60;</button>
                        <p>{skinName}</p>
                        <button className='championData__skins-button' onClick={this.nextSkin}>&#62;</button>
                    </div>
                </div>
                <div>
                    <ChampionTips lore={this.props.champion.lore} name={this.props.champion.name} allytips={this.props.champion.allytips} enemytips={this.props.champion.enemytips}/>
                </div>
            </div>
    )};
}

export default ChampionData;