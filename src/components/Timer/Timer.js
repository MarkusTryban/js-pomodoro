import React, { Component } from 'react';

import TimerButton from '../TimerButton/TimerButton';

import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      isOn: false,
      timer: 1500,
      timerType: 'Session',
      myInterval: '',
    };
  }

  setBreakLength = (e) => {
    const { breakLength } = this.state;

    const value = e.currentTarget.value;

    this.lengthControl('breakLength', value, breakLength, 'Session');
  };

  setSessionLength = (e) => {
    const { sessionLength } = this.state;

    const value = e.currentTarget.value;

    this.lengthControl('sessionLength', value, sessionLength, 'Break');
  };

  lengthControl = (stateToChange, value, currentLength, Type) => {
    const { isOn, timerType } = this.state;

    if (isOn === true) {
      return;
    }
    if (timerType === Type) {
      if (value === '-' && currentLength !== 1) {
        this.setState({ [stateToChange]: currentLength - 1 });
      } else if (value === '+' && currentLength !== 60) {
        this.setState({ [stateToChange]: currentLength + 1 });
      }
    } else {
      if (value === '-' && currentLength !== 1) {
        this.setState({
          [stateToChange]: currentLength - 1,
          timer: currentLength * 60 - 60,
        });
      } else if (value === '+' && currentLength !== 60) {
        this.setState({
          [stateToChange]: currentLength + 1,
          timer: currentLength * 60 + 60,
        });
      }
    }
  };

  timerControl = () => {
    const { timer, breakLength, sessionLength, timerType } = this.state;

    if (timer < 0) {
      return timerType === 'Session'
        ? (clearInterval(this.myInterval) &&
            this.setState({
              isOn: false,
            }),
          this.startTimer(),
          this.switchTimer(breakLength * 60, 'Break'))
        : (clearInterval(this.myInterval) &&
            this.setState({
              isOn: false,
            }),
          this.startTimer(),
          this.switchTimer(sessionLength * 60, 'Session'));
    }
  };

  switchTimer = (num, str) => {
    this.setState({
      timer: num,
      timerType: str,
    });
  };

  startTimer = () => {
    this.setState({
      myInterval: setInterval(() => {
        this.decrementTimer();
        this.timerControl();
      }, 1000),
    });
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
    const { isOn, myInterval } = this.state;

    if (isOn === false) {
      this.startTimer();
      this.setState({ isOn: true });
    } else {
      this.setState({
        isOn: false,
      });
      myInterval && clearInterval(myInterval);
    }
  };

  resetTimer = () => {
    const { myInterval } = this.state;

    this.setState({
      isOn: false,
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      timerType: 'Session',
    });
    myInterval && clearInterval(myInterval);
  };

  render() {
    const { breakLength, sessionLength, timerType } = this.state;

    return (
      <div className='timer-container'>
        <div id='timer-label'>{timerType}</div>
        <div id='time-left'>{this.currentTimeLeft()}</div>
        <TimerButton
          labelID='break-label'
          label='Break Length'
          decrementID='break-decrement'
          lengthID='break-length'
          length={breakLength}
          incrementID='break-increment'
          onClick={this.setBreakLength}
        />
        <TimerButton
          labelID='session-label'
          label='Session Length'
          decrementID='session-decrement'
          lengthID='session-length'
          length={sessionLength}
          incrementID='session-increment'
          onClick={this.setSessionLength}
        />
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
