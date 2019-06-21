import React from 'react'
import ComponentCard from './components/cards.js'
import Loading from './assets/img/loading.gif'

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            worker:''
        }
    }

    componentWillMount(){
        fetch('http://localhost:3000/index.json')
            .then((result)=>{
                return result.json()
            })
            .then((data)=>{
                this.setState({worker: data.worker})
            })
            .catch((error)=>{
                console.error(error)
            })
    }


    render(){
        return(
            this.state.worker !== '' ?
                <ComponentCard worker={this.state.worker}/>
            :<img src={Loading} />
        
            )
    }

}