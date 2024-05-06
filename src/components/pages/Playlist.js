import Spotify from './Spotify Fetch API';
import React, {useState} from 'react'; 

const Playlist = () => {
const [error , setError] = useState({});
const [songName , setSongName] = useState('');

  const errorValidation = () => {  
     const errors = {};
if(songName.length < 4) {
        errors.songName = 'Invalid';
}

setError(errors);
       return Object.keys(errors).length === 0;
        };


const submitForm = (e) => {
        e.preventDefault();
        const validSong = errorValidation();
if(validSong) {       
console.log(submitForm);   
}
        };
 
        const handleStateChange = (e)  => {
                const {name , value} = e.target;
                if (name === 'songName') setSongName(value);
        };

 return (
        <div className = "container">
{/*I made an iframe that connects Spotify to my website. I have decided not to have users update the playlist on my website
because I want the page to be focused on song requests. We can set a time limit before the start of the wedding
for users to assign there song choice. The wedding is on October, we can have a title saying 'Do you have another song that you want to hear on our wedding? Submit a request here'
Below the title we have a form and on that form a user can submit a response using a text type input attribute, 
and that answer can be sent to the email of one of the married participants. If the couple are interested in the song,
the owners can update the playlist. The playlist on my website will show previews of different songs,
but on the day of the wedding, the full songs will be played either by the DJ or themselves (on my premium account without ads).
If users want to submit another request then they can just type in another song of interest. */}
 <header>Playlist</header>
<body>
    <Spotify />
    <form onSubmit = {submitForm}> 
        <h4>Do you have another song that you would like to hear on our wedding day?</h4>
        <p>Request a new song here:</p>
    <div className = "requestSongForm">
<input type = "text" name = "songName" id = "request" size = "40" value = {songName} onChange = {handleStateChange}></input>
    </div>
    
{error.songName && <p className="error">{error.songName}</p>}
<button type = "submit" id = "submit">Submit</button>
  
  </form>  
 </body>    
</div> 
)};


     
 

 

 


export default Playlist;