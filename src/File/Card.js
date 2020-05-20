import React, { Component } from 'react';
import img from '../Images/bannerImages/background_new.jpg'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <div style={{height: '300px', width: '200px'}}>
            <img src={img} alt="img" style={{height: 'auto', width: '200px'}}></img>
            <h1>Heram</h1>
            <p>usgfwemfxgewfyewfwedewfw</p>
        </div>
      </div>
    );
  }
}
