import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import classes from "./AppBar.module.css"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appButton: {
        fontStyle: "monospace",
        fontSize: "1vw",
        fontWeight: "700",
        // maxWidth: "50vw",
        // eslint-disable-next-line no-useless-computed-key

        ['@media (max-width:780px)']: {
            fontSize: "3.5vw"

        }  

}})

const AppBar = () => {
  

    const styles = useStyles();

    // render() { 
        
    //     const styles = {

    //         appButton: {
    //             fontStyle: "monospace",
    //             fontSize: "1vw",
    //             // color: "white"


    //         }

    //     }

    
        return (
            <nav className={classes.appbar} >
                <div className = {classes.leftNav}>

                    <Button className={styles.appButton}>
                        All Things Blue
                    </Button>
                </div>

                <div className={classes.rightNav}>
                    {/* <Button className={styles.appButton}>
                        RELEASES
                    </Button>
                    
                    <Button className={styles.appButton}>
                        SHOWS       
                    </Button> */}

                    <Button className={styles.appButton}>
                        Contact
                    </Button>
                </div>

            </nav>


        )


    


}

export default AppBar;