import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class People extends Component{
    constructor(){
        super();
        this.state = {
            characters: []
        }

}

componentDidMount(){
    axios.get(`https://api.pokemontcg.io/v1/cards/`).then(res => {
        console.log('cdmPeople', res.data)
        this.setState({
            characters: res.data.cards
        })
    })
}



    render(){
        console.log('Cards', this.state.characters)
        const mappedCharacters = this.state.characters.map((character) => {
            return <Link to={`/info/${character.id}`}>
            <h3>{character.name}</h3>
            
            </Link>
        })
    return (
        <div>
            Pick a Character
            {mappedCharacters}
        </div>
    )
}
}


export default People
{/* <div key={peps.id}>{peps.name}</div> */}