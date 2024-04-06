import React from 'react';
import HappyCouple from './HappyCouple';
import HappyCoupleImage from './HappyCouple.jpg';

const About = () => {
    return ( 
<div className = "container">
    <header>About Us</header>
 
   <body> 
    <HappyCouple HappyCoupleImage={HappyCoupleImage} height={540} width={540}/> 

    <p className = "description">
        
    </p>
    </body> 
    
 
 
   
</div>



)};

export default About;