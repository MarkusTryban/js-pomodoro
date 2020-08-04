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

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    this.setState({
      isOn: true,
    });
  }

  stopTimer() {
    this.setState({
      isOn: false,
    });
  }

  resetTimer() {
    this.setState({
      isOn: false,
      minutes: 25,
      seconds: 0,
    });
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
          <TimerButton
            className='reset-timer'
            buttonAction={this.resetTimer}
            buttonValue='Reset'
          />
        </div>
      </div>
    );
  }
}

export default Timer;
