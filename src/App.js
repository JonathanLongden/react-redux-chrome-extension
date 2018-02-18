//import 'aframe';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          No-Aframe <code> No-Aframe</code>  No-Aframe   
          </p>
       
        </div>
    );
  }
}

export default App;



// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1 className="App-title">Welcome to React</h1>
//   </header>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.   
//   </p>
// </div>
 {/*<a-scene>
        <a-entity 
            geometry="primitive: box" 
            position="-1 0.5 -3" 
            rotation="0 45 0" 
            material="color: #4CC3D9" />
          <a-entity 
            geometry="primitive: sphere; radius: 1.25;" 
            position="0 1.25 -5" 
            material="color: #EF2D5E" />
          <a-entity 
            geometry="primitive: cylinder; radius: 0.5, height: 1.5" 
            position="1 0.75 -3" 
            material="color: #FFC65D" />
          <a-entity 
            geometry="primitive: plane; width: 4; height: 4" 
            position="0 0 -4" 
            rotation="-90 0 0" 
            material="color: #7BC8A4" />
        </a-scene>}*/}