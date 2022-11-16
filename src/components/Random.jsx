import React from 'react';

function Random(props) {
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * max + min);
  };

  return (
    <div>
      <h3>
        Random value between {props.min} and {props.max}
        {' => '}
        {getRandom(props.min, props.max)}
      </h3>
    </div>
  );
}

export default Random;
