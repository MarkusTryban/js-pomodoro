import React, { Component } from 'react';

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
}
