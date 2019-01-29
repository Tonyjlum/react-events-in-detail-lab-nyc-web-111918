// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
  constructor(prop){
    super(prop)
    this.state = {
      delay: prop.delay,
      onDelayedClick: prop.onDelayedClick
    }
  }

  delayClick = event =>{
    event.persist()
    this.state.onDelayedClick(event)
  }

  render() {
    return (
      <button onClick={this.delayClick}></button>
    );
  }

}

export default DelayedButton;
