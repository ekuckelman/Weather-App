import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import fetchWeather from './Api';
import Search from './Search';
import SevenHour from './SevenHour';
import TenDay  from './TenDay';
import cleanData from './cleanData';
import Welcome from './Welcome';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cleanData: null,
      location: localStorage.location || '',
      fetchError: false
    };

    this.setLocation = this.setLocation.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  setLocation(location) {
    this.setState({ location });
    this.getWeather(location);
  }

  setLocalStorage(location) {
    localStorage.setItem('location', location);
  }

  getWeather(location) {
    fetchWeather(location)
      .then(response => response.json())
      .then(weatherInfo => {
        if (weatherInfo.forecast) {
          this.setLocalStorage(location);
          this.setState({
            fetchError: false,
            cleanData: cleanData(weatherInfo)
          });
        } else {
          this.setState({ fetchError: true });
        }
      })
      .catch(() => {
        this.setState({ fetchError: true });
      });
  }

  componentDidMount() {
    if (this.state.location) {
      this.getWeather(this.state.location);
    }
  }

  render() {
    return (
      <div className='App'>
        { !this.state.cleanData && <Welcome /> }
        
        <Search setLocation={this.setLocation} />
        

        { this.state.fetchError && 
          <h2 className="error"> Please search for an Actual location (ex: Kechi, KS OR 67067)</h2> }
        { this.state.cleanData &&
          <div className="weather-container">
            <SevenHour cleanData={ this.state.cleanData } />
            <CurrentWeather cleanData={ this.state.cleanData } />
            <TenDay cleanData={ this.state.cleanData } />
          </div>
        }
      </div>
    );
  }
} 

export default App;