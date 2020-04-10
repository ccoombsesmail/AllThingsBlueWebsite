import React from 'react';
import './App.css';
import AppBar from "./Components/AppBar/AppBar.jsx";
import MainImage from "./Components/MainImage/MainImage.jsx";

function Home() {


    return (
        <div >

            <AppBar></AppBar>

            <MainImage></MainImage>

            <iframe
                title="atb"
                className="iframe"
                src="https://www.youtube.com/embed/zlsyKDGp2Oo"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    );
}

export default Home;
