import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
  return <div>   
            Hello from App.js Updated <strong>{name}</strong> Age = {age - 5}
            <br/>
            <Hello firstName = {name}></Hello>
            <br/>
            <h1>Hobbies</h1>
            <ul>
            <li>Basketball</li>
            <li>Movies</li>
            <li>Coding</li>
            </ul>
        </div>
}

export default App;
