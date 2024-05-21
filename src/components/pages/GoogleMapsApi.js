import {useState} from 'react';
import {APIProvider, Map, Marker, Pin, InfoWindow} from '@vis.gl/react-google-maps';

const Maps = () => {

const apiKey = 'AIzaSyBUKYa1wpv8rwrPxbVn1RarGuC07sWHMmA';
const position = {lat:51.44131201769951,lng:-0.3325682024467502};

return ( 
<APIProvider apiKey = {apiKey} >
<div>React Google Maps</div>   
<div style = {{height: "100vh"}} >
<Map zoom = {9} center = {position}>
<Marker position = {position}>
    <Pin background = {"blue"}></Pin>  
</Marker>
</Map>
</div>
</APIProvider>
 )
};

export default Maps;