import React, { Component, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles'

// Components
import Login from '../login/Login'


// STYLES
const useStyles = makeStyles((theme) => ({
    mainContainers: {
        width: "100%",
        height: "100vh",
        margin: "0",
        padding: "0",
        backgroundColor: "#263B65",
    },
    
}))

export default () => {

    const classes = useStyles();
    return (
        <Fragment>
            <main  className={classes.mainContainers} >
             
                <div className="login-screen">
                    <Login/>
                </div>
            </main>
        </Fragment>
 
    )
}