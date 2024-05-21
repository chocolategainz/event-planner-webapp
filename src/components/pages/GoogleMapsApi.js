import {useState} from 'react';
import {APIProvider, Map, Pin, InfoWindow, AdvancedMarker} from '@vis.gl/react-google-maps';

const Maps = () => {

const apiKey = 'AIzaSyBUKYa1wpv8rwrPxbVn1RarGuC07sWHMmA';
const location = {lat:51.44131201769951,lng:-0.3325682024467502};
const options = {
    zoomControl: true,
    fullscreenControl: true,
    mapTypeControl: true,
    streetViewControl: true,
    draggable: true,
    zoom: 4,
    maxZoom: 17,
    mapId: '97e73285245f7071'
  };

return ( 
<APIProvider apiKey = {apiKey} >
<div>React Google Maps</div>   
<div style = {{height: "100vh"}} >
<Map zoom = {9} center = {location} options = {options}>
<AdvancedMarker position = {location}>
    <Pin background = {'gold'} glyphColor={'red'} />
</AdvancedMarker>
</Map>
</div>
</APIProvider>
 )
};

export default Maps;