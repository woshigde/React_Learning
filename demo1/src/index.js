import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './TicTacToe/Game';
import Parent from './App';
import Luyou from './Router/router'
import Tab from './Tabbar/tabbar'
import reportWebVitals from './reportWebVitals';
// import {Counter,store} from './Redux/redux'

ReactDOM.render(
  <React.StrictMode>
    {/* <Game /> */}
    {/* <Parent></Parent> */}
    {/* <Tab></Tab> */}
    {/* <Luyou></Luyou> */}
    {/* <Counter></Counter> */}
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
