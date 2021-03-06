import React, { Component } from 'react';

import TimerButton from '../TimerButton/TimerButton';

import './Timer.css';

interface Props {
  breakLength: number;
  sessionLength: number;
  isOn: boolean;
  timer: number;
  timerType: string;
  myInterval: string;
}

class Timer extends Component<{}, Props> {
  audioBeep!: HTMLAudioElement;

  constructor(props: Readonly<{}>) {
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

  setBreakLength = (e: { currentTarget: { value: string } }): void => {
    const { breakLength } = this.state;

    const { value } = e.currentTarget;

    this.lengthControl('breakLength', value, breakLength, 'Session');
  };

  setSessionLength = (e: { currentTarget: { value: string } }): void => {
    const { sessionLength } = this.state;

    const { value } = e.currentTarget;

    this.lengthControl('sessionLength', value, sessionLength, 'Break');
  };

  lengthControl = (
    stateToChange: string,
    value: string,
    currentLength: number,
    type: string
  ): void => {
    const { isOn, timerType } = this.state;

    if (isOn === true) {
      return;
    }
    if (timerType === type) {
      if (value === '-' && currentLength !== 1) {
        this.setState({ [stateToChange]: currentLength - 1 });
      } else if (value === '+' && currentLength !== 60) {
        this.setState({ [stateToChange]: currentLength + 1 });
      }
    } else if (value === '-' && currentLength !== 1) {
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
  };

  timerControl = (): void => {
    const {
      timer,
      breakLength,
      sessionLength,
      timerType,
      myInterval,
    } = this.state;

    this.timerBuzzer(timer);

    if (timer < 0) {
      return timerType === 'Session'
        ? (myInterval && clearInterval(myInterval),
          this.startTimer(),
          this.switchTimer(breakLength * 60, 'Break'))
        : (myInterval && clearInterval(myInterval),
          this.startTimer(),
          this.switchTimer(sessionLength * 60, 'Session'));
    }
  };

  switchTimer = (num: number, str: string): void => {
    this.setState({
      timer: num,
      timerType: str,
    });
  };

  timerBuzzer = (buzzer: number): void => {
    if (buzzer === 0) {
      this.audioBeep.play();
    }
  };

  startTimer = (): void => {
    this.setState({
      myInterval: setInterval(() => {
        this.decrementTimer();
        this.timerControl();
      }, 1000),
    });
  };

  decrementTimer = (): void => {
    const { timer } = this.state;

    this.setState({
      timer: timer - 1,
    });
  };

  currentTimeLeft = (): string => {
    const { timer } = this.state;

    const minutes = Math.floor(timer / 60);
    const seconds = timer - minutes * 60;

    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  startStopTimer = (): void | '' => {
    const { isOn, myInterval } = this.state;

    if (isOn === false) {
      this.startTimer();
      this.setState({ isOn: true });
    } else {
      this.setState({
        isOn: false,
      });
      return myInterval && clearInterval(myInterval);
    }
  };

  resetTimer = (): void => {
    const { myInterval } = this.state;

    this.setState({
      isOn: false,
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      timerType: 'Session',
    });
    myInterval && clearInterval(myInterval);
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  };

  render(): JSX.Element {
    const { breakLength, sessionLength, timerType } = this.state;

    return (
      <div className='timer-container'>
        <div className='title'>Pomodoro Clock</div>
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
        <div className='timer'>
          <div className='timer-wrapper'>
            <div id='timer-label'>{timerType}</div>
            <div id='time-left'>{this.currentTimeLeft()}</div>
          </div>
        </div>
        <div className='timer-button-container'>
          <button type='button' id='start_stop' onClick={this.startStopTimer}>
            <i className='fa fa-play-circle fa-2x' />
          </button>
          <button type='button' id='reset' onClick={this.resetTimer}>
            <i className='fa fa-redo-alt fa-2x' />
          </button>
        </div>
        <div className='footer'>
          by{' '}
          <a
            href='https://markustryban.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Markus Tryban
          </a>
        </div>
        <audio
          id='beep'
          preload='auto'
          src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
          ref={(audio: HTMLAudioElement): void => {
            this.audioBeep = audio;
          }}
        >
          <track kind='captions' />
        </audio>
      </div>
    );
  }
}

export default Timer;
