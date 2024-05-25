import React from 'react';

const Venue = ({VenuePicture, height, width}) => {
    return (
        <div className = "contactUsImage">
<img src = {VenuePicture} alt = "Wedding venue" width = {width} height = {height}></img>
        </div>
    )
}

export default Venue;