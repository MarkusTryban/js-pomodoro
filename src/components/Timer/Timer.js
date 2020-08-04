import React, { Component } from 'react';

import TimerButton from '../TimerButton/TimerButton';

import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: 25,
      seconds: 0,
      isOn: false,
    };
  }

  startTimer() {
    console.log('Starting timer');
  }

  stopTimer() {
    console.log('Stopping timer');
  }

  resetTimer() {
    console.log('Resetting timer');
  }

  render() {
    return (
      <div className='timer-container'>
        <div className='time-display'>Time</div>
        <div className='timer-button-container'>
          <TimerButton
            className='start-timer'
            buttonAction={this.startTimer}
            buttonValue='Start'
          />
          <TimerButton
            className='stop-timer'
            buttonAction={this.stopTimer}
            buttonValue='Stop'
          />
          <TimerButton buttonAction={this.resetTimer} buttonValue='Reset' />
        </div>
      </div>
    );
  }
}

export default Timer;
