import React from 'react';

function BoxColor(props) {
    
  const divStyle = {
    backgroundColor: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')',
    width: 500,
    heigth: 200,
    color: 'white',
  };

  const getHex = (r,g,b) => {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  return (
    <div style={divStyle}>
      <h3>
        rgb({props.r},{props.g},{props.b})
      </h3>
      <h3>
        {getHex(props.r,props.g,props.b)}
      </h3>
    </div>
  );
}

export default BoxColor;
