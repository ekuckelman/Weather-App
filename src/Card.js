import React from 'react';
import './styles/Card.css';

export default function Card(props) {
  if(props.time) {
    return (
      <div className="card">
        <h3 className="time">{ props.time }</h3>
        <img src={ props.icon } alt="Weather Icon" />
        <h2 className="temp"> { props.temp }</h2>
      </div>
    );
  }

  if(props.day) {
    return (
      <div className=" card ten-day">
        <h3 className="day">{ props.day }</h3>
        <img src={ props.icon } alt="Weather icon" />
        <h3 className="high">{ props.high }</h3>
        <h3 className="low">{ props.low }</h3>
      </div>
    );
  }
}