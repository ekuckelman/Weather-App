import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../Card';

describe('Seven Hour Card', () => {
  let wrapper;

  beforeEach(()=> {
    wrapper = shallow(<Card time={'11:11'} icon={'cloudy.png'} temp={'82'}/>);
  });

  it('should have a wrapper with a class of card', () => {
    expect(wrapper.find('div.card').length).toEqual(1);
  })

  it('should have an h3 with a class of time and text of 11:11', () => {
    expect(wrapper.find('h3.time').length).toEqual(1);
    expect(wrapper.find('h3.time').text()).toEqual('11:11');
  });

  it('should have an img tag with a class of seven-icon and text of cloudy.png', () => {
    expect(wrapper.find('img.seven-icon').length).toEqual(1);
    expect(wrapper.find('img.seven-icon').text()).toEqual('');
  });

  it('should have an h3 with a class of temp and text of 82', () => {
    expect(wrapper.find('h2.temp').length).toEqual(1);
    expect(wrapper.find('h2.temp').text()).toEqual(' 82');
  });
});

describe('Ten day Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card day={'Monday'} high={'82'} low={'45'} />);
  })

  it('should have a wrapper with a class of ten day', () => {
    expect(wrapper.find('div.ten-day').length).toEqual(1);
  })

  it('should have an h3 with a class of day and text of Monday', () => {
    expect(wrapper.find('h3.day').length).toEqual(1);
    expect(wrapper.find('h3.day').text()).toEqual('Monday');
  });

  it('should have an h3 with a class of high and text of 82', () => {
    expect(wrapper.find('h3.high').length).toEqual(1);
    expect(wrapper.find('h3.high').text()).toEqual('82');
  });

  it('should have an h3 with a class of low and text of 45', () => {
    expect(wrapper.find('h3.low').length).toEqual(1);
    expect(wrapper.find('h3.low').text()).toEqual('45');
  });
})
