import React from 'react';
import Card from './Card';
import './styles/SevenHour.css';

export default function SevenHour(props) {
  return (
    <div className="seven-hour-container">
      <h1 className="seven-title">Next Seven Hours</h1>
      <div>
        { props.cleanData.sevenHour.map((seven, index)=> {
          return <Card 
                    key={ index }
                    time={ seven.time }
                    icon={ seven.icon }
                    temp={ seven.tempF + "˚" } />;
          })
        }
      </div>  
    </div>
  );
}