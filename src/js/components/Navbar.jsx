import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar className="nav">
                <div className="nav-left">

                </div>
                <div className="nav-center">
                    <ul className="nav-list">
                        <li className="nav-list-item">Home</li>
                        <li className="nav-list-item">About</li>
                        <li className="nav-list-item">Contact</li>
                        <li className="nav-list-item">Write</li>
                        <li className="nav-list-item">Logout</li>
                    </ul>
                </div>
                <div className="nav-right">

                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;