import React, {useState, useEffect} from "react";
import { CssBaseline, Grid } from "@mui/material";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getLocation } from "./api";

const App = () => {
    const [places, setPlaces] = useState([]);
    const[childClicked, setChildClicked] = useState(null);

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    
    const[isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
            setCoordinates({lat:latitude, lng:longitude});
        })
    },[]);

    useEffect(()=>{
        setIsLoading(true);
        
        getLocation(type, bounds.sw, bounds.ne).then((data)=>{
            setPlaces(data);
            setIsLoading(false);
        });
    }, [type, coordinates, bounds]);
    
    return(
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width:'100%'}}>
                <Grid item xs={12} md={4}>
                    <List places={places}
                    childClicked = {childClicked}
                    isLoading={isLoading}
                    type={type}
                    setTypre={setType}
                    rating={rating}
                    setRating={setRating}
                    />
                </Grid>
                <Grid mt={5} item xs={12} md={8}>
                    <Map 
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                    places={places}
                    setChildClicked = {setChildClicked}
                    />
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}

export default App;
