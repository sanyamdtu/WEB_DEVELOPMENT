import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person/person'
function App() {
  state={
   persons:[
     { name:'kakashi',age:20 },
     { name:"itachi",age:34 },
     { name:"naruto",age:23 }
   ]
  }
  return (
    <div className="App">
        <p>
          the hell
        </p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>i am a dooo</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>i am a prrr</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>i am a leee</Person>
    </div>
  );
}

export default App;
