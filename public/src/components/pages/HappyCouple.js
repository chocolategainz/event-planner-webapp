import React from 'react';

const HappyCouple = ({HappyCoupleImage, height, width} ) => {
return (
    
    <div className = "image">
        <img src = {HappyCoupleImage} alt = "Happy" height = {height} width = {width} />
        </div>
     );
 }
export default HappyCouple;