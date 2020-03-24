import React, { Component } from 'react'
import axios from 'axios';

export class Info extends Component {
    constructor(){
        super();
        this.state = {
            info: {}
        }

}

componentDidMount(){
    console.log('infoMATCH', this.props.match.params.id)
    axios.get(`https://api.pokemontcg.io/v1/cards/${this.props.match.params.id}`).then(res => {
        console.log('infoCDM', res.data)
        this.setState({
            info: res.data.card
        })
    })
}
    


    render() {
        console.log('CharactersOBJ', this.state.info)
        const {imageUrl, name} = this.state.info
        return (
            <div>
                <img src={imageUrl}/>
                <p>Name: {name}</p>

            </div>
        )
    }
}

export default Info
