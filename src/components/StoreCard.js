import Card from "@material-ui/core/Card";
import React from "react";
import {withStyles} from "@material-ui/core";
import userCardStyles from "../assets/userCardStyles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Rating from '@material-ui/lab/Rating';
import Grid from "@material-ui/core/Grid";

class StoreCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.pos} color="textSecondary" gutterBottom>
                        Loja
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {this.props.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Endereço
                    </Typography>
                    <Typography variant="body2" component="p">
                        {this.props.address + " Número: " + this.props.number}
                    </Typography>
                    <br/>
                    <Typography variant="h5" component="h2">
                        {this.props.phone}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid container spacing={15}>
                        <Grid item xs>
                            <Button size="small" color={"secondary"}>Saiba Mais</Button>
                        </Grid>
                        <Grid item xs={5}/>
                        <Grid item xs>
                            <Rating name="read-only" value={this.props.rating} readOnly/>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(userCardStyles)(StoreCard);