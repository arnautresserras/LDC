import React from 'react';
import './ChampionProfile.scss';

class ChampionProfile extends React.Component {

    constructor(props){
        super(props);
        this.handleInfo = this.handleInfo.bind(this);
    }

    handleInfo(e){
        this.props.onInfo(this.props.data.id);
    }

    render(){
        const icon = 'http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/'+this.props.data.id+'.png';
        return(
            <div className='championProfile'>
                <img className='championProfile__icon' src={icon} alt={this.props.data.name} />
                <div className='championProfile__summary'>
                    <h2 className='championProfile__summary-name'>{this.props.data.name}<span className='championProfile__summary-title'>, {this.props.data.title}</span></h2>
                    <p className='championProfile__summary-tags'>{this.props.data.tags.toString().replace(/,/g, ", ")}</p>
                    <div className='championProfile__summary__buttons'>
                        <button className='championProfile__summary__buttons-select'>
                            <p>Select</p>
                        </button>
                        <button onClick={this.handleInfo} className='championProfile__summary__buttons-moreinfo'>
                            <p>+ info</p>
                        </button>
                    </div>
                    
                </div>
            </div>
        );
    };
}

export default ChampionProfile;