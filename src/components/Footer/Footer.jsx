import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton } from "@material-ui/core";
import { ClassNames } from "@emotion/react";

import useStyles from './styles';

const Footer =()=>{
    const classes = useStyles();
    return(
        <AppBar position="static" className={classes.abRoot}>
            <Toolbar className={classes.toolbar}>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
