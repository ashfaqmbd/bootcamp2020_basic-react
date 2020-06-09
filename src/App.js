import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
  return <div>   
            Hello from App.js Updated <strong>{name}</strong> Age = {age - 4}
            <br/>
            <Hello firstName = {name}></Hello>
            <h1>Hobbies</h1>
            <ul>
            <li><span>Basketball</span></li>
            <li><span>Movies</span></li>
            <li><span>Coding</span></li>
            <li><span>Fucking Danyah, my wife</span></li>
            </ul>
        </div>
}

export default App;
