import Card from "@material-ui/core/Card";
import React from "react";
import {CardHeader, withStyles} from "@material-ui/core";
import userCardStyles from "../assets/userCardStyles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Rating from '@material-ui/lab/Rating';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

import colorArray from "../assets/colorArray";

class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <div align={"left"}>
                    <CardHeader avatar={<Avatar style={{backgroundColor: colorArray[Math.round(Math.random()*18)][600]}}>{this.props.name[0]}</Avatar>}
                                title={this.props.name}
                                subheader={this.props.email}/>
                    </div>
                    <br/>
                    <Typography variant="h5" component="h2">
                        {this.props.age}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid container spacing={15}>
                        <Grid item xs>
                            <Button size="small" color={"secondary"}>Saiba Mais</Button>
                        </Grid>
                        <Grid item xs={5}/>
                        <Grid item xs>
                            <Rating name="read-only" value={0} readOnly/>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(userCardStyles)(UserCard);