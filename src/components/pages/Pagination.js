import React, {useState} from 'react';


const Pagination = () => { 
    
const [currentPage, setCurrentPage] = useState(1); 


const nextButton = (e) => {
    e.preventDefault();
   setCurrentPage(currentPage + 1);

   if (currentPage === 2) {
     const attending = document.getElementById("attending").checked;
      setCurrentPage(attending ? 3 : 4);
    } else {
      setCurrentPage(currentPage + 1);
    }    
  };

    const prevButton = (e) => {
        e.preventDefault();
        setCurrentPage(currentPage - 1)
    }

    
 

    

    const submit = (e) => {
    e.preventDefault();
    }

    return (
              <div className = "container"> 
              <form> 
            {currentPage === 1 && (  
    <div className = "questionOne">
<h3>Please enter your name:</h3>

        <input name = "firstname" placeholder = "first name" id="firstName"></input>
        <input name = "lastname" placeholder = "last name" id="lastName"></input>
        <button type = "button" className = "nextButton" onClick = {nextButton}>Next</button>
    </div>
)}

{currentPage === 2 && ( 
  <div className = "questionTwo">
    <h3>Will you be attending the wedding?</h3>
    <p> 
    <input type = "radio" id="attending" name = "weddingAttendance" value = "Attending"></input>   
    <label htmlFor = "attending">Attending</label> 
    
    
    <input type = "radio" id = "notAttending" name = "weddingAttendance" value = "Not Attending"></input>
    <label htmlFor = "notAttending">Not Attending</label>
    <button type = "button" className = "previousButton" onClick = {prevButton}>Previous</button>
    <button type = "button" className = "nextButton" onClick = {nextButton}>Next</button>  
    </p>
</div>  
)}

{currentPage === 3 && (
<div className = "sectionOne">
<h3>Ceremony</h3>
<p> 
<ul>
  <li>Saturday 12th October 2024, 11:30am</li>
  <li>location for ceremony</li>
</ul>
</p>
{/*Radio Buttons for section One */}
<p>
<input type = "radio" id="attending" name = "weddingAttendance" value = "Attending"></input>   
    <label htmlFor = "attending">Attending</label> 
<input type = "radio" id = "notAttending" name = "weddingAttendance" value = "Not Attending"></input>
    <label htmlFor = "notAttending">Not Attending</label>
</p>

{/**Reception*/}
<h3>Reception</h3>
<p>
  <ul>
    <li>Saturday 12th October 2024, 13:30pm</li>
    <li>Cross Deep, Twickenham, London, TW1 4RB</li>
  </ul>
  <input type = "radio" id="attending" name = "weddingAttendance" value = "Attending"></input>   
    <label htmlFor = "attending">Attending</label> 
<input type = "radio" id = "notAttending" name = "weddingAttendance" value = "Not Attending"></input>
    <label htmlFor = "notAttending">Not Attending</label>
</p>
<button type = "button" className = "sectionOnePreviousButton" onClick = {prevButton}>Previous</button>
<button type = "button" className = "sectionOneNextButton" onClick = {nextButton}>Next</button>  
</div>
)}

{/**Section Two */}

{currentPage === 4 && (
  <div className = "sectionTwo">
<h3>No worries, would you like to send a message to the newly wed couple? </h3>
<p>
  <input name = "message" placeholder = "optional" id = "message"></input>
</p>
<button type = "submit" id = "submitButton" onClick={submit}>Submit</button>
<button type = "button" className = "exit">Exit</button>  
</div>
)}
 </form>   
 
   </div>
    )
};


export default Pagination;
 