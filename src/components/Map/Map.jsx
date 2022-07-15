import React from "react";
import GoogleMapReact from 'google-map-react';
import {isMuiElement, Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map =({setCoordinates, setBounds, coordinates, places})=>{
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();
    const Mobile = useMediaQuery('(min-width:600ox');

    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{key:'AIzaSyDowhKmpgsqfpyC5BS5TZWMiKT5qXXcj6k'}}
                defaultCenter={coordinates}
                Center={coordinates}
                defaultZoom={14}
                margin={[100,50,50,50]}
                options={''}
                onChange={(e)=>{
                    setCoordinates({lat:e.center.lat, lng:e.center.lng});
                    setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw});
                }}
            >
               
            </GoogleMapReact>

        </div>
    );
}

export default Map;
 