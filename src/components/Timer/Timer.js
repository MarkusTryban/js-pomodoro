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
