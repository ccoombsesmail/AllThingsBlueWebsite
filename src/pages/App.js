import React from 'react';
import './App.css';
import GameView from "../Components/GameView/game_view.js";
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";
import $ from "jquery";
import Home from "./Home"

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      indexPage: true,
    }
  }


  changeContent() {
    this.setState({indexPage: false})
  }


  render() {

 
  window.addEventListener('resize', handleResize)


  function handleResize(event) {
    
    // let canvasWrapper = document.getElementById('canvas-wrapper');
    let gameCanvas = document.getElementById('game-canvas');
    let imageCanvas = document.getElementById('image-canvas');



    if (window.innerWidth < 1024) {
      // imageCanvas.width = window.innerWidth;
      imageCanvas.width = document.documentElement.clientWidth;
      imageCanvas.height = window.innerWidth/2;

      gameCanvas.width = imageCanvas.width
      gameCanvas.height = imageCanvas.height
    }else {

    imageCanvas.width = window.innerWidth / 2;
    imageCanvas.height = window.innerWidth / 3;

    gameCanvas.width = imageCanvas.width
    gameCanvas.height = imageCanvas.height
    }
    let canvasWrapper = $('#canvas-wrapper')
    canvasWrapper.width(gameCanvas.width)
    canvasWrapper.height(imageCanvas.height)

    var ctxGame = gameCanvas.getContext('2d');
    var ctxImage = imageCanvas.getContext('2d');
    ctxImage.globalAlpha = 0.1;
    // console.log(gameCanvas.clientHeight)
    const gameView = new GameView(ctxGame, ctxImage, gameCanvas.width, gameCanvas.height);
    gameView.start();

  }

  window.onresize = function () { window.location.reload(); }

  window.addEventListener("DOMContentLoaded", handleResize)
  

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

  let page
  if (this.state.indexPage === true) {
    page = <div className="App">

      <section id="canvas-wrapper">
        <canvas id="image-canvas"></canvas>
        <canvas id="game-canvas"></canvas>
      </section>
      {/* <Link style = {styles.link} to="/home"> <Button style={styles.enterButton}> ENTER SITE</Button></Link> */}
      <Button style={styles.enterButton} onClick={this.changeContent.bind(this)} > ENTER SITE</Button>
    </div>

  }else {
    page = <Home/>
  }

  return (
    <>
    {page}
     </>
  );

  }
}

export default App;
