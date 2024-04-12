//Ceromony and Reception Information

/*Reception

Address   Contact info                
 - ....    - ....
 -....
 -....

 Ceremoney 
 Address  Contact info
  - ....  - ....
  - ....
  - ....
*/

import React from 'react';
import Venue from './Venue';
import VenuePicture from './Venue.jpg';

const Contacts = () => {
    return ( 
<div className = "container">
    <header>Contact Details</header>


{/*Content*/}
    <p><b>Get in touch</b></p>
    <p>Have any questions about the ceremony or reception?</p>

<div className = "reception">
<p><b>Reception</b></p>
<p>
    <a href ="https://www.alexanderpope.co.uk/"> 
    Alexander Pope
    </a>
</p>

<p>Address</p>
<ul>
<li>Cross Deep,</li> 
<li>Twickenham,</li> 
<li>London,</li> 
<li> TW1 4RB</li>
<li><a href = "https://www.google.com/maps/dir//Cross+Deep,+Twickenham+TW1+4RB/@51.4412385,-0.4153846,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x48760c884f1b14a3:0xb402583a338edc74!2m2!1d-0.3329844!2d51.4412674?entry=ttu">Find on Google Maps</a></li>
</ul>
</div>

<p>Contact Information</p>
<ul>
<li>020 8892 3050</li>
<li>alexanderpope@youngs.co.uk</li>
</ul>

<div className = "ceremony">
    <p><b>Ceremony</b></p>
    <p>
        <a href = "https://www.alexanderpope.co.uk/">Placeholder</a>
    </p>
</div>

<div className = "furtherInformation">
    <p><b>If you have any further questions, please do not hesitate to contact me</b></p>
    <p>Contact Information</p>
    <ul>
        <li>07471******</li>
        <li>********@gmail.com</li>
    </ul>
</div>

{/*Ending page with another image*/}
<div className = "endingImage">
    <Venue VenuePicture = {VenuePicture} height = {427} width = {900} />
</div>
 </div>

)};


export default Contacts;