import React from 'react';
import './button.css';

const Button = ({ label, handleClick }) => {
  const alerta = () => {
    alert(`A label desse botão é ${label}`);
  };

  return (
    <button className="btn" onClick={() => {handleClick(); alerta();}}>
      {label}
    </button>
  );
};

export default Button;
