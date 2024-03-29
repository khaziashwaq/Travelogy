import React from "react";
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';



const Location =({place, selected, refProp})=>{
    const classes = useStyles();

    // if(selected) refProp?.current?.scrollIntoView({behaviour:"smooth", block:"start"});
    
    return(
        <Card elevation={6}>
            <CardMedia 
                style = {{height:350}}
                image = {place.photo? place.photo.images.large.url:'https://cdn.vectorstock.com/i/1000x1000/12/02/restaurant-menu-icon-vector-4731202.webp'}
                title = {place.name}
                />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle2">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle2">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Rating size="small" value={Number(place.rating)} readOnly/>
                    <Typography gutterBottom variant="subtitle1">out of {place.num_reviews} reviews</Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
                        <img src={award.images.small} />
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}
                 {place?.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon />{place.address}
                    </Typography>
                    )}
                {place?.phone && (
                <Typography variant="body2" color="textSecondary" className={classes.spacing}>
                    <PhoneIcon /> {place.phone}
                </Typography>
                )}

            </CardContent>

        </Card>
    );
}

export default Location;
