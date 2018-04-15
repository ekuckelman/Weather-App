import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import fetchWeather from './Api';
import Search from './Search';
import SevenHour from './SevenHour';
import TenDay  from './TenDay';
import cleanData from './cleanData';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cleanData: null,
      location: 'Denver, CO' || '',
    };

    this.setLocation = this.setLocation.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  setLocation(location) {
    this.setState({ location })
    this.getWeather(location);
  }

  getWeather(location) {
    fetchWeather(location)
    .then(response => response.json())
    .then(weatherInfo => {
      if (weatherInfo.forecast) {
        this.setState({
          cleanData: cleanData(weatherInfo)
        });
      }
    })
    //a catch? needs to go here
  }
  componentDidMount() {
    if (this.state.location) {
      this.getWeather(this.state.location);
    }
  }


  render() {
    return (
      this.state.cleanData &&
      <div className='App'>
        <Search setLocation={this.setLocation} />
        <div className="weather-container">
        <SevenHour cleanData={ this.state.cleanData } />
        <CurrentWeather cleanData={ this.state.cleanData } />
        <TenDay cleanData={ this.state.cleanData } />
        </div>
      </div>
    )
  }
} 

export default App;