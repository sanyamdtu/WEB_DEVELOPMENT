import React from 'react';
import './style_person.css';
import Radium from 'radium'
const person=(props)=>{
   return ( 
   <div className="Person">
    <p onClick={props.click}>I am going {props.name} of age {props.age} to kill you {props.children} </p>
    <input type="text" onChange={props.change}  Value={props.name}/>
    </div>
   )
}
export default Radium(person);