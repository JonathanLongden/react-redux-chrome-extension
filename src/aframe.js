import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
 
class VRScene extends React.Component {
  render () {
    return (
        <Scene>
        <Entity
          geometry={{primitive: 'box', width: 5}}
          material={{color: red, roughness: 0.5, src: texture.png}}
          scale={{x: 2, y: 2, z: 2}}
          position={{x: 0, y: 0, z: -5}}/>
      </Scene>
    );
  }
}