import React from 'react';
import './App.css';
import GameView from "./Components/GameView/game_view.js";
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";

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

  const styles = {
    enterButton: {
      color: "white",
      // position: 'absolute',
      // bottom: '9vh',
      fontSize: "40px",
    },
    link: {
      marginTop: '40px',
      // padding: '0',
      // bottom: "9vh"
    }, 


  }

  return (
    <div className="App">
      <div className = "canvas-wrapper"> 
      <canvas id="image-canvas"></canvas>
      <canvas id="game-canvas"></canvas>
      </div>
      <Link style = {styles.link} to="/home"> <Button style={styles.enterButton}> ENTER SITE</Button></Link>
    </div>
  );
}

export default App;
