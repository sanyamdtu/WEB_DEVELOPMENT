import React from 'react'
import './Cockpit.css'

const cockpit = (props) => {
    let color='';
    if(props.persons.length===2)
     color="green";
    else if(props.persons.length===1)
     color="yellow"
     else
      color="red"
    return (
        <div>
            sanyam 
            <br/>
            <button onClick = {()=> {props.togglepersons()} }
            style = { props.style }
            className = {color} > Switch name </button>
        </div>
    )
}
export default cockpit