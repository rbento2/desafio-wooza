import React from 'react'
import ComponentCard from './components/cards.js'

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            functionario:[
                {name:'Renato', office:'Desenvolvedo Front-end'},
                {name:'Lauro', office:'Desenvolvedor Back-end'},
                {name:'Marcus', office:'Desenvolvedor Front-end'},
                {name:'Priscila', office:'Product Owner'}
            ]    
        }
    }

    render(){
        return(
            <ComponentCard worker={this.state.functionario}/>
            )
    }

}