import React from 'react';
import './styles/CurrentWeather.css';

export default function CurrentWeather(props) {
  return (
    <div className="today">
      <div className="current-weather">
        <h2 className="todays-title">Current Flying Conditions</h2>
        <h2 className="current-location">{props.cleanData.current.location}</h2> 
        <h3 className="current-day">{props.cleanData.current.day},
                                     {props.cleanData.current.month},
                                     {props.cleanData.current.date} </h3>
        <h2 className="current-temp">{props.cleanData.current.temp}<span>˚</span></h2>  
        <img className="weather-icon" src={props.cleanData.current.icon}/>
      </div>
      <div className="todays-conditions">
        <h2 className="expected-conditions">Today's Flying Conditions</h2>
        <h2 className="high">{props.cleanData.current.high}<span>˚</span></h2>
        <h2 className="low">{props.cleanData.current.low}<span>˚</span></h2>
      </div>
      <div className="conditions-summary">
        <h3 className="summary">{props.cleanData.current.summary}</h3>
      </div>  
    </div>

  )
}