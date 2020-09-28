import React from 'react';

import { render, screen } from '@testing-library/react';

import TimerButton from './TimerButton';

test('renders without crashing', () => {
  render(<TimerButton />);
});
