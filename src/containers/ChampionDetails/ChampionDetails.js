import React from 'react';
import './ChampionDetails.scss';

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
            return(
                <div className='championDetails'>
                    <p>Champion detailed info for {this.state.champion.name}</p>
                    <button onClick={this.props.onClose}>Close</button>
                </div>
            ); 
    };    
}

export default ChampionDetails;