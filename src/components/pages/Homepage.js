import React from "react";

import PictureTwo from "./PictureTwo.jpg";
import Themes from "./Themes.css";

const Homepage = () => {
    return (    
          
<div className = "container">  
    <header><h4><u> Home </u></h4></header>  

<body></body>    
    <main className = 'boxContainer'>
        {/*Have writing instead of a picture - include names and date of wedding and at the bottom have a button taking
        the user to the rsvp page */}
<p>Ian & Jennifer</p>
<p>24.10.2024</p>
<button type="button" class="btn btn-success btn-lg">RSVP</button>
{/*<img src = {PictureTwo} alt = "Two people smiling" height = {500}></img>*/}
</main>  

</div>
)};

export default Homepage;

