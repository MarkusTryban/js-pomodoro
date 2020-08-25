import React from 'react';

import { shallow, mount } from 'enzyme';

import Timer from './Timer';

describe('Timer', () => {
  let container;

  beforeEach(() => (container = shallow(<Timer />)));

  it('should render 4 <div /> elements', () => {
    expect(container.find('div')).toHaveLength(4);
  });

  it('should render 2 <button /> elements', () => {
    expect(container.find('button')).toHaveLength(2);
  });

  it('should have value of 5 onload', () => {
    expect(container.state('breakLength')).toBe(5);
  });

  it('should have value of 25 onload', () => {
    expect(container.state('sessionLength')).toBe(25);
  });

  it('should have value of false', () => {
    expect(container.state('isOn')).toEqual(false);
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

  it('invokes startStopTimer when the start_stop button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'startStopTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('#start_stop').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('invokes resetTimer when the reset button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'resetTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('#reset').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should change isOn state when the start-stop button is clicked', () => {
    container.instance().forceUpdate();
    container.find('#start_stop').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(true);
    container.find('#start_stop').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(false);
  });

  it('should change isOn state false when the reset button is clicked', () => {
    container.instance().forceUpdate();
    container.find('#reset').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(false);
    expect(container.instance().state.breakLength).toEqual(5);
    expect(container.instance().state.sessionLength).toEqual(25);
    expect(container.instance().state.timer).toEqual(1500);
  });
});
