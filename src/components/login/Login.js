import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Auth } from 'aws-amplify'




// STYLES
const useStyles = makeStyles((theme) => ({
    mainContainers: {
        width: "100%",
        height: "100vh",
        margin: "0",
        padding: "0",
        backgroundColor: "#263B65",
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '1px solid #263B65'
    },
    // Form
    formContainer: {
        maxWidth: '75%',
        maxHeight: '85%',
        marginTop: theme.spacing(5),
        boxShadow: '5px 5px 5px #263B65',
        padding: theme.spacing(5),
        borderRadius: "5%",
        border: "1px solid #1072FF",
        backgroundColor: "#FFF"
    },
    avatar: {
        margin: "auto",
        backgroundColor: '#263B65',
    },
    button: {
        width: "100%",
        height: "10%",
        backgroundColor: "#263B65",
        color: "#1072FF",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(10),
    },
    textStyles: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        color: "#263B65"
    },
    blueText: {
        color: "#263B65"
    }
}))


export default () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    
    const classes = useStyles();
    return (
        <Fragment>
            <Container component="main" max-with="xs">
                <CssBaseline />
                <form className={classes.paper}  >
                    <div className={classes.formContainer}>
                        <Avatar className={classes.avatar}>
                            <LockOpenOutlinedIcon />
                        </Avatar>
                        <Typography 
                            className={classes.textStyles} 
                            component="h1" 
                            variant="h5"
                            margin-bottom="20%">
                            Log in
                        </Typography>
                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoFocus
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            >
                        </TextField>
                        <TextField 
                            type="password"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="username"  
                            autoFocus
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            >
                        </TextField>
                        <Button 
                            className={classes.button}
                            type="submit"
                            variant="contained"
                            color="#263B65"

                        >
                            Enter
                        </Button>
                        <Typography component="p" className={classes.blueText}>
                            <p>Chubb support web application</p>
                        </Typography>
                    </div>
                </form>
            </Container>
        </Fragment>
 
    )
}


