import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="driverCard idcards">
      <img src={props.img} alt="driverImg" />
      <div className="driverInfo">
        <h3>{props.name}</h3>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
