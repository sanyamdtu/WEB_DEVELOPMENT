import React, {Component} from 'react';
import Persons from './components/Persons/person';
import './App.css';
import Radium,{styleRoot} from 'radium'
class App extends Component {
  state={
    persons:[
      {
        name:"max",
        age:23,
      },
      {
        name:"brad",
        age:12,
      }
    ],
    showpersons:false
  } 
  nameChangedHandler=(event,index)=>{

    const indiv_person=[...this.state.persons]
    indiv_person[index].name=event.target.value
    this.setState({persons:indiv_person})
  }
  switchNameHandler=(newName)=>{
     this.setState({persons:[
      {
        id:1,
        name:"max",
        age:23,
      },
      {
        id:2,
        name:"brad",
        age:12,
      }
    ]})
  }
  togglepersons=()=>{
    const doesshow=this.state.showpersons
    this.setState({showpersons: !doesshow})
  }
  deleteperrsons=(index)=>{
    const TYersons=[...this.state.persons];
    TYersons.splice(index,1)
    this.setState({persons:TYersons})
  }
  render(){
    const style={
      backgroundColor:"white",
      font:"inherit",
      padding:"8px"
      ,'@media screen and (orientation: landscape)': {
        width: '35%',
        textAlign: 'center',
        paddingBottom: '500px',
      }
    }
    let person=null;
    if(this.state.showpersons){
      person=<div>
        <Persons persons={this.state.persons}
        deleteperrsons={this.state.deleteperrsons}
        nameChangedHandler={this.state.nameChangedHandler}
        />
     </div>
    }
   return (
    <div className="App">
       {person}
    </div>
   );
  }
}

export default Radium(App);
