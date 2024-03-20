
import React from 'react';

const RandomNumber = () => {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  return (
    <div>
      <h2>Random Number Generator</h2>
      <p>Random Number: {generateRandomNumber()}</p>
    </div>
  );
};

export default RandomNumber;
