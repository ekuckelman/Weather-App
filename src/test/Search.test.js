import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../Search';

describe('Search', ()=> {
  let wrapper;

  let props = {
    setLocation: jest.fn()
  };

  beforeEach(()=> {
    wrapper = shallow(<Search props={props} />);
  });

  it('should have a wrapper with a class of search container', () => {
    expect(wrapper.find('div.search-container').length).toEqual(1);
  });

  it('should render an input with a class of search bar', () => {
    expect(wrapper.find('input.search-bar').length).toEqual(1);
  });

  it('should have a default state of userInput equal to an empty string', ()=> {
    expect(wrapper.state().userInput).toEqual('');
  });

  it('should update userInput state when user types in the search bar', () => {
    expect(wrapper.state().userInput).toEqual('');
    wrapper.find('input.search-bar').simulate('change', {target: { value: 'Kechi'} });
    expect(wrapper.state().userInput).toEqual('Kechi');
  });

  it('should run setUserLocation on the click of the Accio Weather button', () => {
    wrapper = mount(<Search setLocation={props.setLocation} />);
    wrapper.find('button.search-button').simulate('click');
    expect(wrapper.props().setLocation).toHaveBeenCalledTimes(1);
  });

  it('should set the search bar input back to empty after the Accio Weather button is clicked', () => {
    wrapper = mount(<Search setLocation={props.setLocation} />);
    wrapper.find('button.search-button').simulate('click');
    expect(wrapper.state().userInput).toEqual('');
  });
});