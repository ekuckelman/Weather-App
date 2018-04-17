import React from 'react';
import Card from './Card';
import './styles/TenDay.css';

export default function TenDay(props) {
  return (
    <div className="tenDay-container">
      <h1 className='tenDay-title'>Next Ten Days</h1>
      <div>
        { props.cleanData.tenDay.map((ten, index)=> {
          return <Card 
            key={ index }
            day={ ten.day }
            icon={ ten.icon }
            high={ ten.high + "˚" }
            low={ ten.low + "˚" } />;
        })
        } 
      </div>
    </div>
  );
}