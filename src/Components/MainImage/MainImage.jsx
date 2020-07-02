import React, { Component } from 'react';
import classes from "./MainImage.module.css"
import { FaArrowDown } from 'react-icons/fa';
const img = require("../../images/dickingAround.jpg")

class MainImage extends Component {



    render() {


        return(
            <div className={classes.imageWrapper}>
                <img alt = "" className={classes.image} src = {img}/>  
                <div className={classes.leftSection}>
                {/* <h1>New Song Dicking Around Out Now</h1> */}
                <iframe src="https://www.youtube.com/embed/6G5X-58_fxM" frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className={classes.neon}>
                        <span className={classes.text} data-text="New Song!">New Song!</span>
                        <span className={classes.gradient}></span>
                        <span className={classes.spotlight}></span>
                    </div>
                    <FaArrowDown className={classes.arrow} />
                    <iframe className={classes.spotify} src="https://open.spotify.com/embed/album/5iwgSC9tIV0KdA5feGdkNI"
                    frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>
        )
    }

}



export default MainImage; 