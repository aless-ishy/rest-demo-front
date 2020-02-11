import React from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import StoreCard from "./StoreCard";

class StoreList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {stores: []};
    }

    componentDidMount() {
        axios.get(`/stores`)
            .then(res => {
                const stores = res.data;
                this.setState({stores});
            })
    }

    render() {
        return (
            <div align={"center"}>
                <Grid>
                    <br/>
                    {this.state.stores.map(store => (<div><StoreCard name={store.name} number={store.number}
                                                                     address={store.address} phone={store.phone}
                                                                     rating={store.rating}/><br/></div>))}
                </Grid>
            </div>
        );
    }
}

export default StoreList;