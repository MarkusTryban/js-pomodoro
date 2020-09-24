import React from 'react';

import './TimerButton.css';

interface Props {
  labelID: string;
  label: string;
  decrementID: string;
  lengthID: string;
  length: number;
  incrementID: string;
  onClick:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const TimerButton = (props: Props): JSX.Element => {
  const {
    labelID,
    label,
    decrementID,
    lengthID,
    length,
    incrementID,
    onClick,
  } = props;

  return (
    <div className='button-container'>
      <div id={labelID}>{label}</div>
      <button
        type='button'
        id={decrementID}
        className='timer-button'
        value='-'
        onClick={onClick}
      >
        <i className='fa fa-arrow-down fa-2x' />
      </button>
      <div id={lengthID} className='timer-button'>
        {length}
      </div>
      <button
        type='button'
        id={incrementID}
        className='timer-button'
        value='+'
        onClick={onClick}
      >
        <i className='fa fa-arrow-up fa-2x' />
      </button>
    </div>
  );
};

export default TimerButton;
