import React from 'react';
import Persons from './person/person';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App=(props)=>{
  const [personState,setPersonsState]=useState({
    persons:[
      {
        name:"max",
        age:23,
      },
      {
        name:"brad",
        age:12,
      }
    ]
  } )
  const switchNameHandler=(newName)=>{
    setPersonsState({persons:[
     {
       name:newName,
       age:23,
     },
     {
       name:"brad",
       age:12,
     }
   ]})
  }
  return (
    <div className="App">
        sanyam
        <Persons
         name={personState.persons[0].name} age={personState.persons[0].age} />
        <Persons
         name={personState.persons[1].name} age={personState.persons[1].age} 
         Click={switchNameHandler} > haha</Persons>
        <button onClick={switchNameHandler}>Switch name</button>
    </div>
  );
}


export default App;
