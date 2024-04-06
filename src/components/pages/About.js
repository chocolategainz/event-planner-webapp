import React from 'react';
import HappyCouple from './HappyCouple';
import HappyCoupleImage from './HappyCouple.jpg';

const About = () => {
    return ( 
<div className = "container">
    <header>About Us</header>
 
   <body> 
    <HappyCouple HappyCoupleImage={HappyCoupleImage} height={510} width={510}/> 

    <p className = "description">
{/*Placeholder */}
<h3>How we met</h3>
Enamel pin brunch subway tile twee bicycle rights disrupt migas venmo cray banjo offal pressed. Copper vegan kale chips tousled chambray. The mixtape tofu pabst tilde whatever coloring book.
Sustainable gentrify kitsch ethical stumptown, plaid fashion cold pressed wayfarers chia artisan. Intelligentsia chambray tousled, kitsch Godard actually pop-up. Listicle ugh flannel tousled roof party. Tofu ethical lumbersexual distillery freegan cardigan authentic keffiyeh.
    </p>
    </body> 
    
 
 
   
</div>



)};

export default About;