import React from 'react';
const Playlist = () => {
 const clientID = `a8d53105487a4b5ea3cf59076eaf510a`;
    const clientIdSecret = `f9249b73f9a54ecdb566215e27972a7e`;

    const authData = `${clientID} : ${clientIdSecret}`;
    const encodedData = btoa(authData);

    const spotifyRequest  = { 
        
     method: 'post',
     headers: { 'Content-Type': 'application/x-www-form-urlencoded',
     'Authorization': `Basic ${encodedData}`
    },

    body: `grant_type=client_credentials`  
 };

 fetch("https://accounts.spotify.com/api/token", spotifyRequest) 
 .then(response => {
    if(!response.ok) {
        throw new Error('Response was not ok');
    }
    return response.json();
 })
 .then(data => {
    console.log(data);
 })
 .catch (error => {
console.log('Fetch error:',error)
 });


const userId = 1178425605;  
const url = `https://api.spotify.com/v1/users/${userId}/playlists`;


const data = {
    "name": "Wedding Playlist",
    "description": "Music playlist for my wedding",
    "public": false
};

fetch(url, {
   method: 'post',
headers: { 'Authorization': 'Bearer 1POdFZRZbvb...qqillRxMr2z',
'Content-Type': 'application/json'
},
body: JSON.stringify(data)
})
.then(response => {
    if (!response.ok) {
        throw new Error("The response was not okay")
    }
return response.JSON();
})
.then(data => {
    console.log('Playlist created:', data);
})
.catch(error => {
    console.error('There was a problem creating the playlist:', error);
});
 return (
        <div className = "container">
{/*I am going to use the Spotify API web app to create a playlist and alllow users to update that playlist on the website */}
 <header>Playlist</header>

        </div>
    
)};


     
 

 

 


export default Playlist;