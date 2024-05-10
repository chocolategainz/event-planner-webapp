import React from "react";
import PictureTwo from "./PictureTwo.jpg";
import Themes from "./Themes.css";

const Homepage = () => {
    return ( 
        
<div className = "container">
       
    <header>
    <h4>
    Home
    </h4>
    </header>

    <main>
<img src = {PictureTwo} alt = "Two people smiling" width = {1500}></img>
    </main>
</div>
)};

export default Homepage;

