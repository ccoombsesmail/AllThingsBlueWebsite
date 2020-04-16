import React, { Component } from 'react';
import classes from "./MainImage.module.css"
const img = require("../../images/atbBanner2.jpg")

class MainImage extends Component {



    render() {


        return(
            <div>
                <img alt = "" className={classes.image} src = {img}/>  
            </div>
        )
    }

}



export default MainImage; 