import React from 'react';

import Timer from './Timer';

describe('mounted Timer', () => {
  let container;

  beforEach(() => (container = mount(<Timer />)));

  it('invokes startTimer when the start button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'startTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('.start-timer').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('invokes stopTimer when the stop button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'stopTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('.stop-timer').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
