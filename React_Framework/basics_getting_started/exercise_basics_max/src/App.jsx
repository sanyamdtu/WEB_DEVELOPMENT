import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Userinput from './Userinput/Userinput'
import Useroutput from './Useroutput/Useroutput'
class App extends Component {
    render(){
    return ( 
         <div className = "App" >
             sanyam
             <br/>
             <Userinput/>
             <Useroutput username="Sanyam"/>
             <Useroutput username="Dio"/>
             <Useroutput username="Jotaro"/>
        </div>
    );
    }
}

export default App;