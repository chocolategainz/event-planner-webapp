import React from 'react';
import HappyCouple from './HappyCouple';
import HappyCoupleImage from './HappyCouple.jpg';
import Names from './Names';
import ImageNames from './Names.jpg'

const About = () => {
    return ( 
<div className = "container">
    <header>About Us</header>
 
   <body> 
    <HappyCouple HappyCoupleImage={HappyCoupleImage} height={550} width={510}/> 

    <p className = "description">
{/*Placeholder */}
<h3>How we met</h3>
Once upon a time, in the digital expanse of a dating website, our two hearts found solace in each other's words. 
With each exchanged message, our connection deepened, transcending screens and distances.
 As days turned into nights filled with endless conversations, we realized that we had stumbled upon a rare love, 
 one destined for eternity. With hesitant yet hopeful steps, we ventured beyond the virtual realm, forging bonds in the tangible world. 
 And as time wove its gentle tapestry, amidst laughter, tears, and shared dreams, we have decided to stand hand in hand, 
 saying "I do", so that our love story will eternally be etched in the stars.
    </p>

{/*Image of married couple on wedding cards*/}
<Names ImageNames={ImageNames} height={260} width={450}/>
    </body> 
</div>



)};

export default About;