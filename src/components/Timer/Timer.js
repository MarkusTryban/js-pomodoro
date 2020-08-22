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

  decrementBreak = () => {
    const { breakLength } = this.state;

    if (breakLength > 1) {
      this.setState({
        breakLength: breakLength - 1,
      });
    }
  };

  incrementBreak = () => {
    const { breakLength } = this.state;

    if (breakLength <= 59) {
      this.setState({
        breakLength: breakLength + 1,
      });
    }
  };

  decrementSession = () => {
    const { sessionLength } = this.state;

    if (sessionLength > 1) {
      this.setState({
        sessionLength: sessionLength - 1,
      });
    }
  };

  incrementSession = () => {
    const { sessionLength } = this.state;

    if (sessionLength <= 59) {
      this.setState({
        sessionLength: sessionLength + 1,
      });
    }
  };

  timer = () => {
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
  };

  startStopTimer = () => {
    const { isOn } = this.state;

    if (isOn === false) {
      this.timer();
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
    const { minutes, seconds, breakLength, sessionLength } = this.state;

    return (
      <div className='timer-container'>
        <div>
          <span id='timer-label'>Session</span>
        </div>
        <div id='time-left'>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
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
