import React from 'react';
import visa from '../assets/images/visa.png';

function CreditCard(props) {
  const divStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
    width: 300,
    borderRadius: 10,
    padding: 20,
  };

  const cardImg =
    props.type === 'Visa'
      ? visa
      : 'https://brand.mastercard.com/content/dam/mccom/brandcenter/brand-history/brandhistory_mc1996_100_2x.png';

  return (
    <div style={divStyle}>
      <img className="creditImg" src={cardImg} alt="bankLogo" />
      <p> •••• •••• •••• {props.number.substr(-4)}</p>
      <p>
        Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
      </p>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
