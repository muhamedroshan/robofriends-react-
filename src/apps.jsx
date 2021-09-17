import React,{useState} from 'react'
import Cardlist from './Cardlist'
import SearchBox from './SearchBox'
import {robots} from './robots.js';

function Apps() {
    const [searchfield,setstate] = useState('')
    const searchchange=(event)=>{
    setstate(event.target.value);  
    console.log(searchfield.toLowerCase());   
    }
 
    const filteredrobots=robots.filter(robots=>{
        return(
            robots.name.toLowerCase().includes(searchfield.toLowerCase())
        );
    });

    return (
        <div className='tc'>
            <h1>Robo friends</h1>
            <SearchBox OnSearchChange={searchchange}/>
            <Cardlist robots={filteredrobots}/>
        </div>
    )
}

export default Apps
