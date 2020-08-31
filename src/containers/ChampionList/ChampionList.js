import React from 'react';
import ChampionProfile from '../../components/ChampionProfile/ChampionProfile';
import ChampionSearch from '../../components/ChampionSearch/ChampionSearch';
import LDCTitle from '../../components/LDCTitle/LDCTitle';
import './ChampionList.scss';
import ChampionDetails from '../ChampionDetails/ChampionDetails';

class ChampionList extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            ddragon_champions: 'http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion.json',
            ddragon_single: 'http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion/',
            error: null,
            isLoaded: false,
            curUrl: '',
            curState: 'list',
            curChampion: [],
            Champions: [],
            championList: [],
            searchBox: ''
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInfo = this.handleInfo.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleInfo(champion){
        const url = this.state.ddragon_single+champion+'.json';
        this.setState({
            curUrl: url,
            curChampion: champion,
            curState: 'details'
        });
    }

    handleSearch(event) {
        this.setState({searchBox: event.target.value});
        var championList = this.state.Champions.filter(function(champion){
            return champion.name.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1;
        });
        this.setState({championList: championList});
    }

    handleClose(){
        this.setState({
            curChampion: [],
            curState: 'list'
        });
    }

    componentDidMount(){
        fetch(this.state.ddragon_champions)
            .then( resp => resp.json())
            .then((Champions)=> {
                this.setState({
                    isLoaded: true,
                    Champions: Object.values(Champions.data),
                    championList: Object.values(Champions.data)
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }
    
    render(){
        const { error, isLoaded, curUrl, curChampion } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            switch(this.state.curState){
                case ('details'):
                    return (
                        <div className='main'>
                            <LDCTitle />
                            <ChampionDetails champion={curChampion} url={curUrl} onClose={this.handleClose}/>
                        </div>
                    );
                case ('list'):
                    return (
                        <div className='main'>
                            <LDCTitle />
                            <ChampionSearch searchBox={this.state.searchBox} onChange={this.handleSearch}/>
                            <div className='championGrid'>
                                {this.state.championList.map(item => (
                                    <ChampionProfile key={item.id} data={item} onInfo={this.handleInfo}/>
                                ))}
                            </div>
                        </div>
                    );
                default:
                    return (
                        <div className='main'>
                            <LDCTitle />
                            <ChampionSearch searchBox={this.state.searchBox} onChange={this.handleSearch}/>
                            <div className='championGrid'>
                                {this.state.championList.map(item => (
                                    <ChampionProfile key={item.id} data={item} />
                                ))}
                            </div>
                        </div>
                    );
            }
            
        }
    }
        
}

export default ChampionList;