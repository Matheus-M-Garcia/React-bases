
import React from 'react';
import './text-info.css';

const TextInfo = ({ color, transformText }) => {

  

  return (
    <h1
      className="texto-principal"
      style={{ color: color,
                textTransform:transformText }}
    >
      Texto completamente aleatório tirado da minha cabeça
    </h1>
  );
};

export default TextInfo;