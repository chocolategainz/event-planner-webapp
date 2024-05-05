import React from 'react';

const Spotify = () => {  
return (
    <div className="iframeContainer"> 
        <iframe title= "myFrame" className = "embed-iframe" border-radius = {12} src="https://open.spotify.com/embed/playlist/3oAEtO3PlyJ7oGVw0EPYC5?utm_source=generator"width= {400} 
        height= {400}> 
        </iframe> 
    </div>
)
 };

export default Spotify;