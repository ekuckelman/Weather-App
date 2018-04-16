import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../TenDay';

const cleanData = {
  tenDay: [
    {day:'Monday', icon: 'picture.png', high: '85', low: '35'},
    {day:'Tuesday', icon: 'picture.png', high: '85', low: '35'},
    {day:'Wednesday', icon: 'picture.png', high: '85', low: '35'},
    {day:'Thursday', icon: 'picture.png', high: '85', low: '35'},
    {day:'Friday', icon: 'picture.png', high: '85', low: '35'},
    {day:'Saturday', icon: 'picture.png', high: '85', low: '35'},
    {day:'Sunday', icon: 'picture.png', high: '85', low: '35'},
    {day:'Monday', icon: 'picture.png', high: '85', low: '35'},
    {day:'Tuesday', icon: 'picture.png', high: '85', low: '35'},
    {day:'Wednesday', icon: 'picture.png', high: '85', low: '35'}
  ]
}

describe('Ten Day', ()=> {
  let wrapper;

  beforeEach(()=> {
    wrapper = shallow(<TenDay cleanData={cleanData} />);
  });

  it('should have a wrapper with a class of tenDay container', ()=> {
    expect(wrapper.find('div.tenDay-container').length).toEqual(1);
  });

  it('should have a title with tenDay title class', ()=> {
    expect(wrapper.find('h1.tenDay-title').text()).toEqual('Next Ten Days');
  })

  it('should create ten cards', ()=> {
    expect(wrapper.find('Card').length).toEqual(10);
  });
})