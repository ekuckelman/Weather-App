import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
 import Adapter from 'enzyme-adapter-react-16';

describe ('App', () => {
 let wrapper;

 beforeEach(() => {
  const wrapper = mount(<App />);
 });

 it.skip('Should have state', ()=> {
  expect(wrapper.state()).to.equal( {
    cleanData:null
    });
 })
})
