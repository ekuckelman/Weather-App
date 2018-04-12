import React from 'react';
import './styles/Card.css';

export default function Card(props) {
  if(props.time) {
    return (
      <div className="card">
        <h2 className="time">{ props.time }</h2>
        <img src= { props.icon } alt="Weather Icon" />
        <h3 className="temp"> { props.temp } </h3>
      </div>
    )
  };

  if(props.day) {}
}