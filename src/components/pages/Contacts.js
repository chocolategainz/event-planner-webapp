//Ceromony and Reception Information

import React from 'react';
import './Themes.css';
import Maps from './GoogleMapsApi.js';
import Location from './Map Two.js';

const Contacts = () => {

    return ( 
<div className = "container">
    <header id = 'contactTitle'>Contact Details</header>


{/*Contact Content*/}
    <p><b>Get in touch</b></p>
    <p>If you have any questions about the ceremony or reception, then please do not hesitate to contact us:</p>

    <p>
        <div className = "himAndHer" >i.escuella@sky.com </div> 
        <div className = "himAndHer" >OR</div> 
       <div className = "himAndHer">j.stone@yahoo.com</div> 
    </p>
<div className = "ceremonyContainer">
    <p className = 'ceremony'>Ceremony</p>
    <p>
      <Maps />      
    </p>
    </div>
   

<div className = "receptionContainer">
<p className = 'reception'>Reception</p>
<p>
  <Location />  
</p>
</div>

 </div>

)};


export default Contacts;