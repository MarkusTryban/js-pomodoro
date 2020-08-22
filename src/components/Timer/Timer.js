import React, { Component } from 'react';

import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      isOn: false,
      timer: 1500,
    };
  }

  breakControl = (e) => {
    const { isOn, breakLength } = this.state;

    const value = e.currentTarget.value;

    if (isOn === true) {
      return;
    }
    if (value === '-' && breakLength > 1) {
      this.setState({
        breakLength: breakLength - 1,
      });
    } else if (value === '+' && breakLength <= 59) {
      this.setState({
        breakLength: breakLength + 1,
      });
    }
  };

  startTimer = () => {
    this.myInterval = setInterval(() => {
      this.decrementTimer();
    }, 1000);
  };

  decrementTimer = () => {
    const { timer } = this.state;

    this.setState({
      timer: timer - 1,
    });
  };

  currentTimeLeft = () => {
    const { timer } = this.state;

    let minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${minutes}:${seconds}`;
  };

  startStopTimer = () => {
    const { isOn } = this.state;

    if (isOn === false) {
      this.startTimer();
      this.setState({ isOn: true });
    } else {
      clearInterval(this.myInterval);
      this.setState({
        isOn: false,
      });
    }
  };

  resetTimer = () => {
    this.setState({
      isOn: false,
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
    });
  };

  render() {
    const { breakLength, sessionLength } = this.state;

    return (
      <div className='timer-container'>
        <div>
          <span id='timer-label'>Session</span>
        </div>
        <div id='time-left'>{this.currentTimeLeft()}</div>
        <div id='break-label'>
          <span>Break Length</span>
        </div>
        <button id='break-decrement' onClick={this.decrementBreak}>
          <i className='fa fa-arrow-down fa-2x' />
        </button>
        <div className='label'>
          <span id='break-length'>{breakLength}</span>
        </div>
        <button id='break-increment' onClick={this.incrementBreak}>
          <i className='fa fa-arrow-up fa-2x' />
        </button>
        <div id='session-label'>
          <span>Session Length</span>
        </div>
        <button id='session-decrement' onClick={this.decrementSession}>
          <i className='fa fa-arrow-down fa-2x' />
        </button>
        <div className='label'>
          <span id='session-length'>{sessionLength}</span>
        </div>
        <button id='session-increment' onClick={this.incrementSession}>
          <i className='fa fa-arrow-up fa-2x' />
        </button>
        <div className='timer-button-container'>
          <button id='start_stop' onClick={this.startStopTimer}>
            <i className='fa fa-play-circle fa-2x' />
          </button>
          <button id='reset' onClick={this.resetTimer}>
            <i className='fa fa-redo-alt fa-2x' />
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
