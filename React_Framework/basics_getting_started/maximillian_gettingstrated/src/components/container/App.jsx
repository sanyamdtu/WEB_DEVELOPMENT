import React, {Component} from 'react';
import Persons from '../Persons/Persons';
import './App.css';
import Cockpit from '../Cockpit/Cockpit'
class App extends Component {
  constructor (props){
    super(props);
    console.log("[app.js] construtor")
  }
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
  static getDerivedStateFromProps(props,state){
    console.log("[app.js] getderivedstatefromprops")
    return state;
  }
  componentDidMount(){
    console.log("[app.js] Componentdidmount")
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
    console.log("app.js render")
    const style={
      backgroundColor:"white",
      font:"inherit",
      padding:"8px"
    }
    
    let person=null;
    if(this.state.showpersons){
      person=<div>
        <Persons persons={this.state.persons}
        deleteperrsons={this.deleteperrsons}
        nameChangedHandler={this.nameChangedHandler}
        />
     </div>
    }
   return (
    <div className="App">
      <Cockpit showpersons={this.state.showpersons}
       persons={this.state.persons}
       togglepersons={this.togglepersons}
       style={style}
       />
       {person}
    </div>
   );
  }
}

export default App;
