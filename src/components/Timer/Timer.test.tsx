import React from 'react';

import { render, screen } from '@testing-library/react';

import Timer from './Timer';

test('should render without crashing', () => {
  render(<Timer />);
});
test('should return link', () => {
  render(<Timer />);
  expect(screen.getByRole('link', { name: /markus tryban/i }));
});

// describe('Timer', () => {
//   let container;

//   beforeEach(() => (container = shallow(<Timer />)));

//   it('should render 4 <div /> elements', () => {
//     expect(container.find('div')).toHaveLength(8);
//   });

//   it('should render 2 <button /> elements', () => {
//     expect(container.find('button')).toHaveLength(2);
//   });

//   it('should have value of 5 onload', () => {
//     expect(container.state('breakLength')).toBe(5);
//   });

//   it('should have value of 25 onload', () => {
//     expect(container.state('sessionLength')).toBe(25);
//   });

//   it('should have value of false', () => {
//     expect(container.state('isOn')).toEqual(false);
//   });

//   it('should have value of 1500', () => {
//     expect(container.state('timer')).toEqual(1500);
//   });

//   it('should have value of Session', () => {
//     expect(container.state('timerType')).toEqual('Session');
//   });

//   it('should have value of an empty string', () => {
//     expect(container.state('myInterval')).toEqual('');
//   });
// });

// describe('mounted Timer', () => {
//   let container;

//   beforeEach(() => (container = mount(<Timer />)));

//   it('should invoke setBreakLength when button is clicked', () => {
//     const spy = jest.spyOn(container.instance(), 'setBreakLength');
//     container.instance().forceUpdate();
//     expect(spy).toHaveBeenCalledTimes(0);
//     container.find('#break-decrement').first().simulate('click');
//     expect(spy).toHaveBeenCalledTimes(1);
//   });

//   it('should invoke setBreakLength when button is clicked', () => {
//     const spy = jest.spyOn(container.instance(), 'setBreakLength');
//     container.instance().forceUpdate();
//     expect(spy).toHaveBeenCalledTimes(0);
//     container.find('#break-increment').first().simulate('click');
//     expect(spy).toHaveBeenCalledTimes(1);
//   });

//   it('should invoke setSessionLength when button is clicked', () => {
//     const spy = jest.spyOn(container.instance(), 'setSessionLength');
//     container.instance().forceUpdate();
//     expect(spy).toHaveBeenCalledTimes(0);
//     container.find('#session-decrement').first().simulate('click');
//     expect(spy).toHaveBeenCalledTimes(1);
//   });

//   it('should invoke setSessionLength when button is clicked', () => {
//     const spy = jest.spyOn(container.instance(), 'setSessionLength');
//     container.instance().forceUpdate();
//     expect(spy).toHaveBeenCalledTimes(0);
//     container.find('#session-increment').first().simulate('click');
//     expect(spy).toHaveBeenCalledTimes(1);
//   });

//   it('invokes startStopTimer when the start_stop button is clicked', () => {
//     const spy = jest.spyOn(container.instance(), 'startStopTimer');
//     container.instance().forceUpdate();
//     expect(spy).toHaveBeenCalledTimes(0);
//     container.find('#start_stop').first().simulate('click');
//     expect(spy).toHaveBeenCalledTimes(1);
//   });

//   it('invokes resetTimer when the reset button is clicked', () => {
//     const spy = jest.spyOn(container.instance(), 'resetTimer');
//     container.instance().forceUpdate();
//     expect(spy).toHaveBeenCalledTimes(0);
//     container.find('#reset').first().simulate('click');
//     expect(spy).toHaveBeenCalledTimes(1);
//   });

//   it('should change isOn state when the start-stop button is clicked', () => {
//     container.instance().forceUpdate();
//     container.find('#start_stop').first().simulate('click');
//     expect(container.instance().state.isOn).toEqual(true);
//     container.find('#start_stop').first().simulate('click');
//     expect(container.instance().state.isOn).toEqual(false);
//   });

//   it('should reset all state when the reset button is clicked', () => {
//     container.instance().forceUpdate();
//     container.find('#reset').first().simulate('click');
//     expect(container.instance().state.isOn).toEqual(false);
//     expect(container.instance().state.breakLength).toEqual(5);
//     expect(container.instance().state.sessionLength).toEqual(25);
//     expect(container.instance().state.timer).toEqual(1500);
//     expect(container.instance().state.timerType).toEqual('Session');
//   });
// });
