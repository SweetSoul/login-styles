import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography, makeStyles } from "@material-ui/core";
import { RadioButtonUnchecked, CheckCircle } from '@material-ui/icons';
import React, { useState, useEffect } from "react";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#004869',
            main: '#002E43',
        },
        secondary: {
            main: '#82C4D5',
            dark: '#89538B',
        }
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      transition: 'all 0.3s',
      marginTop: '-100vh',
    },
    "body": {
      transition: 'all 0.3s',
    },
    imageCon: {
      height: '100vh',
      transition: 'all 0.3s',
      overflow: 'hidden',
      transition: 'all 0.5s',
    },
    image: {
      marginLeft: '-31vw',
      overflow: 'hidden',
      maxHeight: '100%',
      zIndex: '0',
      transition: 'all 0.5s',
    },
    image2: {
      margin: '0',
      width: '100%',
      maxHeight: 'none',
    },
    image3: {
      margin: '0',
      width: '100%',
      maxHeight: 'none',
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '0 25%',
      zIndex: '2',
      transition: 'all 0.5s',
    },
    paper2: {
      padding: '0 15%',
    },
    paper3: {
      padding: '0 15%',
    },
    paperCon: {
      transition: 'all 0.5s',
      height: '100vh',
      width: '50vw',
      position: 'absolute',
      left: '50vw',
      zIndex: '0',
      marginTop: '0',
      top: '0',
    },
    paperCon2: {
      width: '34%',
      padding: '0',
      position: 'absolute',
      left: '9.5%',
      height: '100vh',
      marginTop: '0',
      top: '0',
    },
    paperCon3: {
      width: '34vw',
      padding: '0',
      position: 'absolute',
      left: '9.5%',
      height: '70vh',
      top: '50vh',
      marginTop: 'calc(70vh / 2 * -1)',
      borderRadius: '20px',
    },
    paperCon4: {
      width: '34vw',
      padding: '0',
      position: 'absolute',
      left: '9.5%',
      height: '85vh',
      top: '50vh',
      marginTop: 'calc(85vh / 2 * -1)',
      borderRadius: '20px',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
        '&:hover': {
            background: '#002E43',
            transform: 'scale(1.02)'
        },
      margin: theme.spacing(3, 0, 2),
      padding: '15px',
      background: '#002E43',
      borderRadius: '100px',
      color: '#fff',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '19px',
      textTransform: 'none',
      transition: 'all 0.3s',
    },
    signUp: {
        '&:hover': {
            background: '#85c4d5',
            transform: 'scale(1.02)',
            color: '#fff'
        },
      padding: '15px',
      background: '#fff',
      boxShadow: '0 0 0 0',
      borderRadius: '100px',
      border: '1px solid #82C4D5',
      color: '#85c4d5',
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '19px',
      textTransform: 'none',
      transition: 'all 0.3s',
    },
    secTitle: {
      fontSize: '16px',
      lineHeight: '19px',
      textAlign: 'left',
    },
    priTitle: {
        fontSize: '30px',
        lineHeight: '35px',
        textAlign: 'left',
        fontWeight: '700',
        marginBottom: '20px',
      },
      containerSwitch: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      switchBtn: {
        borderRadius: '200px',
        backgroundColor: '#002E43',
        border: 'none',
        fontSize: '16px',
        fontWeight: '600',
        padding: '20px 25px',
        margin: '0 10px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        color: '#fff',
        '&:hover': {
          transform: 'scale(1.2)',
        },
      },
      positionSwitch: {
        position: 'fixed',
        width: '250px',
        top: '0',
        left: '50%',
        marginLeft: '-125px', 
        paddingTop: '10px',
        paddingBottom: '10px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        border: '1px solid #000',
        borderTop: 'none',
        zIndex: '99',
      },
  }));
  
  export default function Login() {
    const classes = useStyles();
    const [height, setHeight] = useState(0);

    useEffect(() => {
      setHeight(window.innerHeight)
    });

    function switchUI(ui) {
      if(ui == 2) {
        document.getElementById("uiSwitcher1").classList.add(classes.paperCon2)
        document.getElementById("uiSwitcher1").classList.remove(classes.paperCon3)
        document.getElementById("uiSwitcher1").classList.remove(classes.paperCon4)
        document.getElementById("uiSwitcher2").classList.add(classes.image2)
        document.getElementById("uiSwitcher2").classList.remove(classes.image3)
        document.getElementById("uiSwitcher3").classList.add(classes.paper2)
        document.getElementById("uiSwitcher3").classList.remove(classes.paper3)
        
      } else if (ui == 3){
        document.getElementById("uiSwitcher2").classList.add(classes.image3)
        document.getElementById("uiSwitcher2").classList.remove(classes.image2)
        document.getElementById("uiSwitcher3").classList.add(classes.paper3)
        document.getElementById("uiSwitcher3").classList.remove(classes.paper2)
        if (height <= 800) {
          document.getElementById("uiSwitcher1").classList.add(classes.paperCon4)
          document.getElementById("uiSwitcher1").classList.remove(classes.paperCon2)
          document.getElementById("uiSwitcher1").classList.remove(classes.paperCon3)
        } else{
          document.getElementById("uiSwitcher1").classList.add(classes.paperCon3)
          document.getElementById("uiSwitcher1").classList.remove(classes.paperCon2)
          document.getElementById("uiSwitcher1").classList.remove(classes.paperCon4)
        }
      } else {
        document.getElementById("uiSwitcher1").classList.remove(classes.paperCon2)
        document.getElementById("uiSwitcher1").classList.remove(classes.paperCon3)
        document.getElementById("uiSwitcher1").classList.remove(classes.paperCon4)
        document.getElementById("uiSwitcher2").classList.remove(classes.image2)
        document.getElementById("uiSwitcher2").classList.remove(classes.image3)
        document.getElementById("uiSwitcher3").classList.remove(classes.paper2)
        document.getElementById("uiSwitcher3").classList.remove(classes.paper3)
        
      }
    };
    
    return (
        <ThemeProvider theme={theme}>
          <div className={classes.positionSwitch} >
            <h4 style={{margin: '0 0 5px 0', textAlign:'center',fontSize:'16px', color:"#666", backgroundColor: '#fff'}}>Choose a style</h4>
            <div className={classes.containerSwitch}>
            <button className={classes.switchBtn} onClick={() => {switchUI(1)}} >1</button>
            <button className={classes.switchBtn} onClick={() => {switchUI(2)}} >2</button>
            <button className={classes.switchBtn} onClick={() => {switchUI(3)}} >3</button>
            </div>
          </div>
          <div className={classes.imageCon} ><img id="uiSwitcher2" src="https://source.unsplash.com/user/czermak_photography/1920x1080" className={classes.image} /></div>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={6} md={6} />
                <Grid item xs={12} sm={6} md={6} component={Paper} id="uiSwitcher1" className={classes.paperCon} style={{display: 'flex', alignItems: 'center'}}>
                <div className={classes.paper} id="uiSwitcher3">
                    <img 
                        src="https://sweetsoul.sirv.com/Images/Github/LoginStyles/login_styles.png"
                        alt="Logo Freebie!"
                        className="img"
                        style={{maxWidth: '50%', marginBottom: '55px'}}
                    />
                    <Typography component="h2" variant="h5" className={classes.secTitle}>
                    Welcome
                    </Typography>
                    <Typography component="h2" variant="h5" className={classes.priTitle}>
                    Login to your account
                    </Typography>
                    <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Grid container style={{display: 'flex', alignItems:'center'}}>
                        <Grid item xs>
                            <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<RadioButtonUnchecked fontSize="small" />}
                                    checkedIcon={<CheckCircle color="secondary" fontSize="small" />}
                                    value="remember" 
                                    color="primary" 
                                />}
                            label="Remember me"
                            />
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2" color="secondary">
                                Forgot password?
                            </Link>
                        </Grid>
                    </Grid>
                    <Button
                        onClick={() => {alert("Calmae, só fiz até aqui :)")}}
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                    >
                        Login
                    </Button>
                    <Button
                        onClick={() => {alert("Calmae, só fiz até aqui :)")}}
                        fullWidth
                        variant="contained"
                        className={classes.signUp}
                    >
                        Signup
                    </Button>
                    </form>
                </div>
                </Grid>
            </Grid>
      </ThemeProvider>
    );
  }