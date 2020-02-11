import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import signUpStyles from "../assets/signUpStyles";
import {withStyles} from "@material-ui/core";
import axios from "axios"

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



class StoreSignUp  extends React.Component{
    static getFormData(form){
        const data = new FormData(form);
        let object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        return object
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const user = StoreSignUp.getFormData(event.target);

        axios.post('/adduser', user
        )
            .then(function (response) {
                console.log(response);
            })
    }

    render() {
        const {classes} = this.props;


        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={this.handleSubmit} id={"suid"}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    autoComplete="uname"
                                    name="name"
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="userName"
                                    label="Nome de Usuário"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="age"
                                    label="Idade"
                                    name="age"
                                    autoComplete="age"
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            {/*<Grid item xs={12}>*/}
                            {/*    <TextField*/}
                            {/*        variant="standard"*/}
                            {/*        required*/}
                            {/*        fullWidth*/}
                            {/*        name="password"*/}
                            {/*        label="Password"*/}
                            {/*        type="password"*/}
                            {/*        id="password"*/}
                            {/*        autoComplete="current-password"*/}
                            {/*    />*/}
                            {/*</Grid>*/}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </Container>
        );
    }
}

export default withStyles(signUpStyles)(StoreSignUp)