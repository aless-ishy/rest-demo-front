import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core";
import reviewFormStyles from "../assets/reviewFormStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import DescriptionIcon from '@material-ui/icons/Description';
import {Rating} from "@material-ui/lab";


class ReviewForm extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <DescriptionIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Review
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    autoComplete="title"
                                    name="firstName"
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="title"
                                    label="Título"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={7}/>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="stitle"
                                    label="Subtítulo"
                                    name="subTitle"
                                    autoComplete="stitle"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}/>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="description"
                                    label="Texto"
                                    name="description"
                                    multiline
                                    rows={5}
                                />
                            </Grid>
                            <Grid item>
                                <Rating name={"simple-controlled"}/>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Enviar
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
            </Container>
        );
    }
}

export default withStyles(reviewFormStyles)(ReviewForm)