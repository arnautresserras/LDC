import React from 'react';
import ChampionProfile from '../../components/ChampionProfile/ChampionProfile';
import ChampionSearch from '../../components/ChampionSearch/ChampionSearch';
import LDCTitle from '../../components/LDCTitle/LDCTitle';
import './ChampionList.scss';

class ChampionList extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            Champions: [],
            championList: [],
            searchBox: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({searchBox: event.target.value});
        var championList = this.state.Champions.filter(function(champion){
            return champion.name.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1;
        });
        this.setState({championList: championList});
    }

    componentDidMount(){
        fetch('http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion.json')
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
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className='main'>
                    <LDCTitle />
                    <ChampionSearch searchBox={this.state.searchBox} onChange={this.handleChange}/>
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

export default ChampionList;