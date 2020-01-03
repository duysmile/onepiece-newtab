import React from 'react';
import './App.css';

function App() {
  const listImages = require('./list-image.json');
  const randomIndex = Math.floor(Math.random() * 390) + 1;
  console.log(listImages[randomIndex]);
  const image =listImages[randomIndex].url_image;
  return (
    <div className="App" style={{backgroundImage:`url(${image})`}}>
    </div>
  );
}

export default App;
