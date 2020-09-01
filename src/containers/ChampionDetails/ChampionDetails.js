import React from 'react';
import './ChampionDetails.scss';
import ChampionName from '../../components/ChampionName/ChampionName';
import ChampionData from '../../components/ChampionData/ChampionData';

class ChampionDetails extends React.Component {
    constructor(props){
        super(props);
        this.state={
            champion: [],
            isLoaded: false,
            error: null
        }
    }

    componentDidMount(){
        fetch(this.props.url)
            .then( resp => resp.json())
            .then((Champions)=> {
                this.setState({
                    isLoaded: true,
                    champion: Object.values(Champions.data)[0]
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }

    render(){
        const { error, isLoaded, champion } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
                <div className='championDetails'>
                    <ChampionName className='championDetails__name' championName={champion.name} championTitle={champion.title}/>
                    <ChampionData champion={champion}/>
                    <button className='championDetails__close' onClick={this.props.onClose}>Close</button>
                </div>
            ); 
        }   
    };    
}

export default ChampionDetails;