import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MediaCard from './MediaCard';
import Gate from './Gate';

ReactDOM.render(
  <div>
    <App name = "Omar Mirza" age ={25}/>
    <MediaCard/>
    <Gate isOpen = {true}/>
    </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
