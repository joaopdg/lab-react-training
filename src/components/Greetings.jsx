import React from 'react';

function Greetings(props) {
    
  const getLang = (lang) => {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      case 'en':
        return 'Hello';
      default:
        return 'Hola';
    }
  };

  return (
    <div>
      <h3>
        {getLang(props.lang)} {props.children}
      </h3>
    </div>
  );
}

export default Greetings;
