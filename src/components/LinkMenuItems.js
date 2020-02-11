import React from "react";
import {Link} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

class LinkMenuItems extends React.Component{
    render() {
        return(
            <div
            >
                {this.props.items.map((item) => (
                    <Link to={item.link} style={{ textDecoration: 'none', color: "black" }}>
                        <MenuItem onClick={this.handleMenuClose}>{item.label}</MenuItem>
                    </Link >
                ))}
            </div>
        );
    }
}

export default LinkMenuItems