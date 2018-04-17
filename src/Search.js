import React, {Component} from 'react';
import './styles/Search.css';


export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      // suggestions: []
    };

    this.setUserLocation = this.setUserLocation.bind(this);
  }

  setUserLocation() {
    this.props.setLocation(this.state.userInput);
    this.setState({ userInput: ''});
  }

  render() {
    return (
      <div className="search-container">
        <input 
          className="search-bar" 
          type="search"
          placeholder="Enter City, State OR zip code where you want to fly" 
          value={ this.state.userInput }
          onChange={ (event)=> {
            this.setState({
              userInput: (event.target.value)
            });
          }
          }
        />
        <button
          className="search-button"
          onClick={this.setUserLocation}>
        Accio Weather
        </button>
      </div>
    );
  }
}