import React from 'react';
import './App.css';
import AppBar from "../Components/AppBar/AppBar.jsx";
import MainImage from "../Components/MainImage/MainImage.jsx";
import SocialMedia from '../Components/SocialMedia/SocialMedia';

function Home() {


    return (
        <div >

            <AppBar></AppBar>

            <MainImage></MainImage>

            <SocialMedia/>

          
            {/* <div className = "youtube-wrapper">
            <iframe
                title="atb"
                className="iframe"
                src="https://www.youtube.com/embed/zlsyKDGp2Oo"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div> */}

          <footer style = {{height: "60px", backgroundColor: "lightgrey", marginTop: "30px" }}>
              
          </footer>
        </div>
    );
}

export default Home;
