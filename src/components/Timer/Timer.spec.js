import React from 'react';

import { shallow, mount } from 'enzyme';

import Timer from './Timer';

describe('Timer', () => {
  let container;

  beforeEach(() => (container = shallow(<Timer />)));

  it('should render 6 <div /> elements', () => {
    expect(container.find('div')).toHaveLength(6);
  });

  it('should render 4 <button /> elements', () => {
    expect(container.find('button')).toHaveLength(4);
  });

  it('should render 3 <span /> elements', () => {
    expect(container.find('span')).toHaveLength(3);
  });

  it('should have value of 5 onload', () => {
    expect(container.state('breakLength')).toBe(5);
  });

  it('should have value of 25 onload', () => {
    expect(container.state('sessionLength')).toBe(25);
  });

  it('should render 2 TimerButton components', () => {
    expect(container.find('TimerButton')).toHaveLength(2);
  });
});

describe('mounted Timer', () => {
  let container;

  beforeEach(() => (container = mount(<Timer />)));

  it('should reduce breakLength by 1 when button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'decrementBreak');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('#break-decrement').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should increase breakLength by 1 when button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'incrementBreak');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('#break-increment').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should reduce sessionLength by 1 when button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'decrementSession');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('#session-decrement').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should increase sessionLength by 1 when button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'incrementSession');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('#session-increment').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('invokes startTimer when the start button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'startTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('.start-timer').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('invokes resetTimer when the reset button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'resetTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('.reset-timer').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should change isOn state true when the start-stop button is clicked', () => {
    container.instance().forceUpdate();
    container.find('#start-stop').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(true);
  });

  it('should change isOn state false when the stop button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.stop-timer').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(false);
  });

  it('should change isOn state false when the reset button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.reset-timer').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(false);
    expect(container.instance().state.minutes).toEqual(25);
    expect(container.instance().state.seconds).toEqual(0);
  });
});
