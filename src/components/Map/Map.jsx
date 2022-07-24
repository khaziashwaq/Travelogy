import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import {isMuiElement, Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map =({setCoordinates, setBounds, coordinates, places, setChildClicked,weather})=>{
    
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px');

    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{key:'AIzaSyDowhKmpgsqfpyC5BS5TZWMiKT5qXXcj6k'}}
                defaultCenter={coordinates}
                Center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e)=>{
                    setCoordinates({lat:e.center.lat, lng:e.center.lng});
                    setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw});
                }}
                onChildClick={(child)=> setChildClicked(child)}
            >
            {places?.map((place,i)=>(
                <div
                    className={classes.markerContainer}
                    lat = {Number(place.latitude)}
                    lng = {Number(place.longitude)}
                    key = {i}
                >
                    {
                    !isDesktop?(
                        <LocationOnOutlinedIcon color="primary" fontSize="large"/>):(
                        <Paper elevation={3} className={classes.paper}>
                            <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                {place.name}    
                            </Typography> 
                            <img 
                            className={classes.pointer}
                            src={place.photo? place.photo.images.large.url:'https://cdn.vectorstock.com/i/1000x1000/12/02/restaurant-menu-icon-vector-4731202.webp'}
                            alt={place.name}
                            />
                            <Rating size="small" value={Number(place.rating)} readOnly/>
                        </Paper>
                    )}
                </div>
            ))}
            {weather?.list?.map((data, i)=>(
                <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                    <img src={`https://openweathermap.org/img/${data.weather[0].icon}.png`}/>
                </div>
            ))}
            </GoogleMapReact>

        </div>
    );
}

export default Map;
 