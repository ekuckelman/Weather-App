import React from 'react';
import './styles/CurrentWeather.css';

export default function CurrentWeather(props) {
  return (
    <div className="today">
      <h2 className="todays-title">{props.cleanData.current.location} Flying Conditions</h2>
      <h2 className="current-day">{props.cleanData.current.day},  <span>  </span>
                                   {props.cleanData.current.month}, <span>  </span>
                                  {props.cleanData.current.date} </h2>
      <div className="expected">
        <div className="current-weather">
          <h2 className="current-temp-title">Current Temperature</h2>
          <h2 className="current-temp">{props.cleanData.current.temp}<span>˚</span></h2>  
          <img className="weather-icon" src={props.cleanData.current.icon} alt="weather icon"/>
        </div>
        <div className="todays-conditions">
          <h2 className="expected-conditions">High / Low</h2>
          <h2 className="curr-high">{props.cleanData.current.high}<span>˚</span></h2>
          <h2 className="curr-low">{props.cleanData.current.low}<span>˚</span></h2>
        </div>
      </div>
      <div className="conditions-summary">
        <h3 className="summary">Today's Weather: {props.cleanData.current.summary}</h3>
      </div>  
    </div>

  )
}