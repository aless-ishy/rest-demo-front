import React from 'react';
import {InputBase, withStyles} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import MenuIcon from '@material-ui/icons/Menu';
import DeviceHubSharpIcon from '@material-ui/icons/DeviceHubSharp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import RemoveCircleOutlineSharpIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import MoreIcon from '@material-ui/icons/MoreVert';
import StoreIcon from '@material-ui/icons/Store';
import PropTypes from "prop-types";
import headerStyles from "../assets/headerStyles";
import LinkMenuItems from "./LinkMenuItems";

const profileMenuItems = [
    {link: "/", label: "Usuários"},
    {link: "/signup", label: "Criar Usuário"}];

const storeMenuItems = [
    {link: "/stores", label: "Lojas"},
    {link: "/signupstore", label: "Criar Loja"}
];

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorProfileEl: null,
            mobileMoreAnchorEl: null,
            anchorStoreEl: null,
            isProfileMenuOpen: false,
            isMobileMenuOpen: false,
            isStoreMenuOpen: false
        };

        this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
        this.handleProfileMenuClose = this.handleProfileMenuClose.bind(this);

        this.handleStoreMenuOpen = this.handleStoreMenuOpen.bind(this);
        this.handleStoreMenuClose = this.handleStoreMenuClose.bind(this);

        this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this);
        this.handleMobileMenuOpen = this.handleMobileMenuOpen.bind(this);
    }

    get value() {
        return parseInt(document.getElementById("nodeValue").value)
    }

    handleProfileMenuOpen(event) {
        this.setState({anchorProfileEl: event.currentTarget, isProfileMenuOpen: true});
    };

    handleProfileMenuClose() {
        this.setState({anchorProfileEl: null, isProfileMenuOpen: false});
        this.handleMobileMenuClose();
    };

    handleStoreMenuOpen(event){
        this.setState({anchorStoreEl: event.currentTarget, isStoreMenuOpen: true});
    }

    handleStoreMenuClose(){
        this.setState({anchorStoreEl: null, isStoreMenuOpen: false});
        this.handleMobileMenuClose();
    }

    handleMobileMenuOpen(event) {
        this.setState({mobileMoreAnchorEl: event.currentTarget, isMobileMenuOpen: true});
    };

    handleMobileMenuClose() {
        this.setState({mobileMoreAnchorEl: null, isMobileMenuOpen: false});
    };

    render() {
        const {classes} = this.props;

        const profileMenuId = 'primary-search-account-menu';
        const renderProfileMenu = (
            <Menu
                anchorEl={this.state.anchorProfileEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                id={profileMenuId}
                keepMounted
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={this.state.isProfileMenuOpen}
                onClose={this.handleProfileMenuClose}
            >
                <LinkMenuItems items={profileMenuItems}/>
            </Menu>
        );

        const storeMenuId = "primary-search-store-menu";
        const renderStoreMenu = (
            <Menu
                anchorEl={this.state.anchorStoreEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                id={storeMenuId}
                keepMounted
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={this.state.isStoreMenuOpen}
                onClose={this.handleStoreMenuClose}
            >
                <LinkMenuItems items={storeMenuItems}/>
            </Menu>
        );


        const mobileMenuId = 'primary-search-account-menu-mobile';
        const renderMobileMenu = (
            <Menu
                anchorEl={this.state.mobileMoreAnchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={this.state.isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                    <p>Conta do Usuário</p>
                </MenuItem>
                <MenuItem onClick={this.handleStoreMenuOpen}>
                    <IconButton
                        aria-label="store account"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <StoreIcon/>
                    </IconButton>
                    <p>Conta da Loja</p>
                </MenuItem>
            </Menu>
        );

        return (
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Reviewers
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.deviceHubSharpIcon}>
                                <DeviceHubSharpIcon/>
                            </div>
                            <InputBase
                                placeholder="Valor do Nó"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                                id={"nodeValue"}
                            />
                        </div>
                        <div className={classes.grow}/>
                        <div className={classes.sectionDesktop}>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={profileMenuId}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="store account"
                                aria-controls={profileMenuId}
                                aria-haspopup="true"
                                onClick={this.handleStoreMenuOpen}
                                color="inherit"
                            >
                                <StoreIcon/>
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={this.handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderProfileMenu}
                {renderStoreMenu}
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(headerStyles)(Header);