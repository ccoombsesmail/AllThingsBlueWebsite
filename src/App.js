import React from 'react';
import logo from './logo.svg';
import './App.css';
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
const Ship = require("./ship.js");


function App() {

  window.addEventListener('DOMContentLoaded', (event) => {
    let gameCanvas = document.getElementById('game-canvas');
    let imageCanvas = document.getElementById('image-canvas');

    gameCanvas.width = 1000;
    gameCanvas.height = 600;

    imageCanvas.width = 1000;
    imageCanvas.height = 600;

    var ctxGame = gameCanvas.getContext('2d');
    var ctxImage = imageCanvas.getContext('2d');
    ctxImage.globalAlpha = 0.1;

    const gameView = new GameView(ctxGame, ctxImage);
    gameView.start();


  });

  return (
    <div className="App">
      <canvas id="image-canvas"></canvas>
      <canvas id="game-canvas"></canvas>
    </div>
  );
}

export default App;
