import Spotify from './Spotify Fetch API';
import React, {useState} from 'react'; 
import './Themes.css';

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
 
<body></body>

<header><h4><u>Playlist</u></h4></header>      
<p className = "caption"> 
We're thrilled to invite you to be a part of our special day by contributing to the soundtrack of our wedding celebration!
Your music request will add a personalized touch to the festivities, making memories that will last a lifetime. 
To ensure that the music reflects the joy and love of the occasion, we kindly ask you to follow these simple steps to submit your song request:
</p>

    <Spotify />

    <form onSubmit = {submitForm}> 
    <p>
        <ol>  
                <p> 
                <li>  
                <span>Enter Your Song Choice: </span> 
                Please type the title and artist of the song you'd like to request in the designated field below. 
                We welcome a variety of genres, from timeless classics to contemporary hits, so feel free to share your favorite tune that holds special meaning for you or resonates with the spirit of our union.
                </li>
                </p>
                
                <p> 
                <li>
                <span>Submit Your Request: </span> 
                Once you've entered your song choice, hit the submit button. 
                Your request will be securely sent to our email inbox for review.
                </li>
                </p>
                
                <p>
                <li>
               <span> Review Process: </span> 
                My partner and I will carefully review each song request to ensure it aligns with the overall ambiance and atmosphere of our wedding celebration. 
                We value your contribution and appreciate your understanding if, for any reason, a song cannot be added to the playlist.
                </li>
                </p>
                
                <p>
                <li>
               <span>Confirmation: </span> 
                  If your song request is accepted, you'll receive a confirmation email notifying you that 
                your chosen song will be included in the playlist for our wedding reception. 
                </li>
                 </p>           
        </ol>    
    </p>

        <p className = "requestTitle">Request a new song here:</p>
    <div className = "requestSongForm">
<p> 
<input type = "text" name = "songName" id = "request" size = "40" value = {songName} onChange = {handleStateChange}></input>
</p>
    </div>
    
{error.songName && <p className="error">{error.songName}</p>}
<button type = "submit" class="btn btn-success btn-lg" id = "submit">Submit</button>
   </form>   
  </div>   

)};


     
 

 

 


export default Playlist;