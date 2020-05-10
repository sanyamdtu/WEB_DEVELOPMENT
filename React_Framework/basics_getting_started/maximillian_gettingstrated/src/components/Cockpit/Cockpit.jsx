import React from 'react'
import './Cockpit.css'
let color='';
    if(this.state.persons.length===2)
     color="green";
    else if(this.state.persons.length===1)
     color="yellow"
     else
      color="red"
const cockpit = (props) => {
    return (
        sanyam 
        <br>
        <button onClick = { props.togglepersons }
        style = { props.style }
        className = {color} > Switch name </button>
    )
}
export default cockpit