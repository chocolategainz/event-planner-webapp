import {useState} from 'react';
import {APIProvider, Map, Pin, InfoWindow, AdvancedMarker} from '@vis.gl/react-google-maps';

const Location = () => {
const [open, setOpen] = useState(false);
const mapsApiKey = 'AIzaSyCmp56nKL1lRZixLFCyEx9uYrg4ZGIHa6U';
const ceremonyLocation = { lat: 51.40821425385024, lng:-0.3059059116567697 };
const mapOptions = {
    zoomControl: true,
    fullscreenControl: true,
    mapTypeControl: true,
    streetViewControl: false,
    draggable: true,
    zoom: 10,
    mapId: '75fb76c183422447'
  };

return (
<APIProvider mapsApiKey = {mapsApiKey} >
<div style = {{height: "100vh"}} >
<Map minZoom = {10} center = {ceremonyLocation} options = {mapOptions}>
<AdvancedMarker position = {ceremonyLocation} onClick = {() =>setOpen (true)}>
    <Pin background = {'green'} glyphColor={'red'} borderColor={'gold'} />
</AdvancedMarker>
{open && <InfoWindow position={ceremonyLocation} onCloseClick={() => setOpen(false)}><p>The Guildhall</p></InfoWindow>}
</Map>
</div>
</APIProvider>
 );
}

export default Location;