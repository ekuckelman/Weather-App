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

 it('should render only the welcome screen and search bar if there is no clean data', ()=> {
  wrapper.setState({cleanData: false });
  expect(wrapper.find('Welcome').length).toEqual(1);
  expect(wrapper.find('Search').length).toEqual(1);
 })

 it('should render the error message is the weather cannot be found', () => {
  wrapper.setState({fetchError: true });
  expect(wrapper.find('h2.error').text()).toEqual(' Please search for an Actual location (ex: Kechi, KS OR 67067)');
 });

 it('should render the current weather, seven hour, and ten day components if there is data and an error', () => {
  wrapper.setState({fetchError: true });
  wrapper.setState({cleanData: true });

  expect(wrapper.find('CurrentWeather').length).toEqual(1);
  expect(wrapper.find('SevenHour').length).toEqual(1);
  expect(wrapper.find('TenDay').length).toEqual(1);
 });
})
