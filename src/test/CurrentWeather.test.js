import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../CurrentWeather';

const cleanData = {
  current: {
    location: 'kechi, ks',
    day: 'monday',
    month: 'July',
    date: '16',
    temp: '75',
    high: '82',
    low: '45',
    summary:'sunny with a chance of sass.',
    icon: 'img.png'
  }
};

describe('Current Weather', ()=> {
  let wrapper;

  beforeEach(()=> {
    wrapper = shallow(<CurrentWeather cleanData={cleanData} />);
  });

  it('should have a wrapper with a class of today', ()=> {
    expect(wrapper.find('div.today').length).toEqual(1);
  });

  it('should have a class of todays title and kechi, ks Flying Conditions text', () => {
    expect(wrapper.find('h2.todays-title').length).toEqual(1);
    expect(wrapper.find('h2.todays-title').text()).toEqual('kechi, ks Flying Conditions');
  });

  it('should have a current day with the current day text', ()=> {
    expect(wrapper.find('h2.current-day').text()).toEqual('monday,    July,   16 ');
  });

  it('should have a wrapper with a class of expected', () => {
    expect(wrapper.find('div.expected').length).toEqual(1);
  });

  it('should have a wrapper with a class of current weather', () => {
    expect(wrapper.find('div.current-weather').length).toEqual(1);
  });

  it('should have a class of current temp title with the title text', ()=> {
    expect(wrapper.find('h2.current-temp-title').length).toEqual(1);
    expect(wrapper.find('h2.current-temp-title').text()).toEqual('Current Temperature');
  });

  it('should have a class of current temp with the current temp text', ()=> {
    expect(wrapper.find('h2.current-temp').length).toEqual(1);
    expect(wrapper.find('h2.current-temp').text()).toEqual('75˚');
  });

  it('should have a class of weather icon with an image ', ()=> {
    expect(wrapper.find('img.weather-icon').length).toEqual(1);
    expect(wrapper.find('img.weather-icon').text()).toEqual('');
  });

  it('should have a wrapper for todays conditions', ()=> {
    expect(wrapper.find('div.todays-conditions').length).toEqual(1);
  });

  it('should have an expected conditions class with the title for expected conditions', ()=> {
    expect(wrapper.find('h2.expected-conditions').length).toEqual(1);
    expect(wrapper.find('h2.expected-conditions').text()).toEqual('High / Low');
  });

  it('should have a current high class with the current high text', ()=> {
    expect(wrapper.find('h2.curr-high').length).toEqual(1);
    expect(wrapper.find('h2.curr-high').text()).toEqual('82˚');
  });

  it('should have a current low class with the current low text', ()=> {
      expect(wrapper.find('h2.curr-low').length).toEqual(1);
      expect(wrapper.find('h2.curr-low').text()).toEqual('45˚');
  });

  it('should have a wrapper for condtions summary', ()=> {
    expect(wrapper.find('div.conditions-summary').length).toEqual(1);
  });

  it('should have a summary class with the summary text', ()=> {
    expect(wrapper.find('h3.summary').length).toEqual(1);
    expect(wrapper.find('h3.summary').text()).toEqual('Today\'s\ Weather: sunny with a chance of sass.');
  });
});
