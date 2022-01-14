import React from 'react';
import './App.css';

const SOUNDS = [
    "approaching.mp3",
    "businessthanks.mp3",
    "engaged.mp3",
    "obligation.mp3",
    "triglyceride.mp3",
];

async function playSound() {
    const soundNum = Math.floor(Math.random() * SOUNDS.length);
    const sound = SOUNDS[soundNum];
    const lawl = new Audio(`sounds/${sound}`);
    await lawl.play();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={playSound} className="button-77">GOG</button>
      </header>
    </div>
  );
}

export default App;
