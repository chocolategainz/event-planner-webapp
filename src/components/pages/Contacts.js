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
    <p className = "contactsCaption">If you have any questions please do not hesitate to get in touch with us:</p>

    <p>
        <div className = "himAndHer" >i.escuella@sky.com </div> 
        <div className = "himAndHer" >OR</div> 
       <div className = "himAndHer">j.stone@yahoo.com</div> 
    </p>
<div className = "ceremonyContainer">
    <p className = 'ceremony'>Wedding Ceremony</p>
    <p>
      <Maps />      
    </p>
    </div>
   

<div className = "receptionContainer">
<p className = 'reception'>Wedding Reception</p>
<p>
  <Location />  
</p>
</div>

 </div>

)};


export default Contacts;