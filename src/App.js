import React, { Component } from 'react'
import Cardlist from './Cardlist'
import SearchBox from './SearchBox'
// import { robots } from './robots'
import './app.css';
import Scroll from './scroll';



export default class App extends Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }
    searchchange = (event) => {
            this.setState({searchfield:event.target.value})
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(user=>this.setState({robots:user}))
}

    render() {
        const filteredrobots = this.state.robots.filter(robots=>
        {
           return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        }
    );
    if (this.state.robots.length===0){
        return <h1>loading</h1>
    }else{
        return (
            <div className='tc'>
                <h1 className='f1'>Robo friends</h1>
                <SearchBox OnSearchChange={this.searchchange}/>
                <Scroll>
                <Cardlist robots={filteredrobots}/>
                </Scroll>
            </div>
        )
    }
    }
}
  


