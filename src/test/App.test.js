import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import LocalStorage from './__test_helpers__/storageMock';

global.localStorage = new LocalStorage;

describe ('App', () => {
 let wrapper;

 beforeEach(() => {
  wrapper = shallow(<App />);
 });

 it('Should have default states', ()=> {
  expect(wrapper.state()).toEqual( 
    { cleanData: null,
      location: localStorage.location || '',
      fetchError: false
    });
 })

 it('should render the error message is the weather cannot be found', () => {
  wrapper.setState({fetchError: true});
  expect(wrapper.find('h2.error').text()).toEqual(' Please search for an Actual location (ex: Kechi, KS OR 67067)');
 });

})
