import React { useState } from 'react';
import logo from './assets/lua.jpg'
import './App.css'



function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthDateObj;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    setAge(Math.floor(ageInYears));
  };

  return (
    <div>
      <h1>Calculadora de Idade</h1>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge}>Calcular Idade</button>
      {age !== null && <p>Sua idade é: {age} anos</p>}
    </div>
  );
}

export default AgeCalculator;