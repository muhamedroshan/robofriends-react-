import React,{Component} from 'react';
import './Hello.css'




const Hello=(props)=>{
			return(
			<div className='tc f1'>
				<h1>hello world</h1>
				<p>first react{props._react}</p>
			</div>	
			);
}
export default Hello;