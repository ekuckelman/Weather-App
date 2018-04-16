import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../SevenHour';

const cleanData = {
  sevenHour: [
    {hour: '1:00pm', icon: 'img.png', tempF: '85'},
    {hour: '2:00pm', icon: 'img.png', tempF: '87'},
    {hour: '3:00pm', icon: 'img.png', tempF: '88'},
    {hour: '4:00pm', icon: 'img.png', tempF: '85˚'},
    {hour: '5:00pm', icon: 'img.png', tempF: '84'},
    {hour: '6:00pm', icon: 'img.png', tempF: '83'},
    {hour: '7:00pm', icon: 'img.png', tempF: '82'}
  ]
}
describe('Seven Hour', ()=> {
  let wrapper;

  beforeEach(()=> {
    wrapper = shallow(<SevenHour cleanData={cleanData} />);
  });

  it('should have a wrapper with a class of seven hour container', ()=> {
    expect(wrapper.find('div.seven-hour-container').length).toEqual(1);
  });

  it('should have a class of seven title and next seven hours text', () => {
    expect(wrapper.find('h1.seven-title').length).toEqual(1);
    expect(wrapper.find('h1.seven-title').text()).toEqual('Next Seven Hours');
  });

  it('should create 7 cards', ()=> {
    expect(wrapper.find('Card').length).toEqual(7);
  });
});