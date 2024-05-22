import {useState} from 'react';
import {APIProvider, Map, Pin, InfoWindow, AdvancedMarker} from '@vis.gl/react-google-maps';

const Maps = () => {
const [open, setOpen] = useState(false);
const apiKey = 'AIzaSyBUKYa1wpv8rwrPxbVn1RarGuC07sWHMmA';
const location = {lat:51.44131201769951, lng:-0.3325682024467502};
const options = {
    zoomControl: true,
    fullscreenControl: true,
    mapTypeControl: true,
    streetViewControl: true,
    draggable: true,
    zoom: 10,
    mapId: '97e73285245f7071'
  };

return ( 
<APIProvider apiKey = {apiKey} >
<div>React Google Maps</div>   
<div style = {{height: "100vh"}} >
<Map minZoom = {10} center = {location} options = {options}>
<AdvancedMarker position = {location} onClick = {() =>setOpen (true)}>
    <Pin background = {'gold'} glyphColor={'red'} borderColor={'green'} />
</AdvancedMarker>
{open && <InfoWindow position={location} onCloseClick={() => setOpen(false)}><p>Alexander Pope - Pup & Hotel</p><p>Parking is available at on site car park</p></InfoWindow>}
</Map>
</div>
</APIProvider>
 )
};

export default Maps;