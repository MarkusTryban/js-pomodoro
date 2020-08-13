import React, { Component } from 'react';

import TimerButton from '../TimerButton/TimerButton';

import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      minutes: 25,
      seconds: 0,
      isOn: false,
    };

    this.decrement = this.decrement.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  decrement = () => {
    const { breakLength } = this.state;

    this.setState({
      breakLength: breakLength - 1,
    });
  };

  startTimer = () => {
    const { isOn } = this.state;

    if (isOn === true) {
      return;
    }
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    this.setState({ isOn: true });
  };

  stopTimer = () => {
    clearInterval(this.myInterval);
    this.setState({
      isOn: false,
    });
  };

  resetTimer() {
    this.setState({
      isOn: false,
      minutes: 25,
      seconds: 0,
    });
  }

  render() {
    const { minutes, seconds, breakLength, sessionLength } = this.state;

    return (
      <div className='timer-container'>
        <div className='time-display'>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <button id='break-decrement' onClick={this.decrement}>
          <i className='fa fa-arrow-down fa-2x' />
        </button>
        <div className='label'>
          <span id='break-length'>{breakLength}</span>
        </div>
        <button id='break-increment'>
          <i className='fa fa-arrow-up fa-2x' />
        </button>
        <button id='session-decrement'>
          <i className='fa fa-arrow-down fa-2x' />
        </button>
        <div className='label'>
          <span id='session-length'>{sessionLength}</span>
        </div>
        <button id='session-increment'>
          <i className='fa fa-arrow-up fa-2x' />
        </button>
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
