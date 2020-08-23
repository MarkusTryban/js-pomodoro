import React from 'react';

import './TimerButton.css';

const TimerButton = () => (
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
      <i className='fa fa-arrow-down fa-2x' />
    </button>
  </div>
);

export default TimerButton;
