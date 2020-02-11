import React from "react";
import axios from "axios"
import UserCard from "./UserCard";
import Grid from "@material-ui/core/Grid";


class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {persons: []};
    }

    componentDidMount() {
        axios.get(`/users`)
            .then(res => {
                const persons = res.data;
                this.setState({persons});
            })
    }

    render() {
        return (
            <div align={"center"}>
                <Grid>
                    <br/>
                    {this.state.persons.map(person => (<div><UserCard name={person.name} age={person.age}
                                                                      email={person.email}/><br/></div>))}
                </Grid>
            </div>
        );
    }
}

export default UserList;