import React from 'react';

import PropTypes from 'prop-types';

import './TimerButton.css';

const TimerButton = ({ buttonAction, buttonValue }) => (
  <div className='button-container' />
);

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default TimerButton;
