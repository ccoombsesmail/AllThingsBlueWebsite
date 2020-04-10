import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import classes from "./AppBar.module.css"


class AppBar extends Component {


    render(){ 
        
        const styles = {

            appButton: {
                fontStyle: "monospace",
                fontSize: "1vw",
                // color: "white"


            }

        }

    
        return (
            <nav className={classes.appbar} >
                <div className = {classes.leftNav}>

                    <Button style={styles.appButton}>
                        All Things Blue
                    </Button>
                </div>

                <div className={classes.rightNav}>
                    <Button style={styles.appButton}>
                        RELEASES
                    </Button>
                    
                    <Button style={styles.appButton}>
                        SHOWS       
                    </Button>

                    <Button style={styles.appButton}>
                        Contact
                    </Button>
                </div>

            </nav>


        )


    }


}

export default AppBar;