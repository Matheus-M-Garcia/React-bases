import React, { useState } from 'react';
import './App.css';
import Button from "./Components/button/button";
import TextInfo from "./Components/text-info/text-info.js";

function App() {
  const [textTransformed, setTextTransformed] = useState('defaut');
  const [textColor, setTextColor] = useState('black');

  const handleButtonClick = () => {
    setTextTransformed('uppercase');
    setTextColor('#5f4b88'); 
    // basicamente sobrescrevi o useState,tive que estudar de forma autonoma pra fazer desse jeito mas "sinto" que não é o jeito correto, apreciaria o feedback principalmente desse trecho
  };

  return (
    <div className="App">
      <div className="content">
        <TextInfo color={textColor} transformText={textTransformed} />
        <Button label="Faça a mágica acontecer" handleClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;