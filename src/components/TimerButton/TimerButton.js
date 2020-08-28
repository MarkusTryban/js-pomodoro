import React, { Component } from 'react';

import './TimerButton.css';

class TimerButton extends Component {
  render() {
    const {
      labelID,
      label,
      decrementID,
      lengthID,
      length,
      incrementID,
      onClick,
    } = this.props;

    return (
      <div className='button-container'>
        <div id={labelID}>{label}</div>
        <button
          id={decrementID}
          className='timer-button'
          value='-'
          onClick={onClick}
        >
          <i className='fa fa-arrow-down fa-2x' />
        </button>
        <div id={lengthID} className='timer-button'>
          {length}
        </div>
        <button
          id={incrementID}
          className='timer-button'
          value='+'
          onClick={onClick}
        >
          <i className='fa fa-arrow-up fa-2x' />
        </button>
      </div>
    );
  }
}

export default TimerButton;
