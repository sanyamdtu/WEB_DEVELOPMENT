import React from 'react';
import Persons from "./person"
const persons=(props)=>{ 
  console.log("persons[]")
  return props.persons.map((person,index)=>{
    return <Persons
      key={index} name={person.name} age={person.age} click={()=>props.deleteperrsons(index)} 
      change={(event)=>{props.nameChangedHandler(event,index)}}
    />
  })
}
export default persons;