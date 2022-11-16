import React from 'react';

const IdCard = (props) => {
  return (
    <div className='idcards'>
      <img src={props.picture} alt="profilePic" />
      <ul>
        <li>
          <strong>First Name:</strong>
          {props.firstName}
        </li>
        <li>
          <strong>Last Name:</strong>
          {props.lastName}
        </li>
        <li>
          <strong>Gender:</strong>
          {props.gender}
        </li>
        <li>
          <strong>Height:</strong>
          {props.height}
        </li>
        <li>
          <strong>Birth:</strong>
          {props.birth.toISOString().slice(0,10)}
        </li>
      </ul>
    </div>
  );
};

export default IdCard;
