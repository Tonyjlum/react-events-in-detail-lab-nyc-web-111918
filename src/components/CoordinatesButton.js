// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
  constructor(prop){
    super(prop)
    this.state = {
      onReceiveCoordinates: prop.onReceiveCoordinates
    }
  }

  buttonClick = event => {
    this.state.onReceiveCoordinates([event.clientX,event.clientY])
    //onReceiveCoordinates wanted the arg to be an array 
  }

  render() {
    return (
      <button onClick={this.buttonClick}></button>
    );
  }

}

export default CoordinatesButton;
