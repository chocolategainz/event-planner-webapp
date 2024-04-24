import React, {useState} from 'react';
const Pagination = () => { 

  const [inputFields , setInputFields] = useState({
    name: "" ,
    surname: "" ,
    email: "" 
   }); 

const [error , setError] = useState({});
const [submission , setSubmission] = useState(false);
  
const validateData = (inputFields) => {
  let errors = {};
  if (inputFields.name.length < 3) {
    errors.name = "Name is invalid";
  }
  if(inputFields.surname.length < 4) {
errors.surname = "Surname is invalid";
  }
  if (inputFields.email.length < 15) {
    errors.email = "Email is invalid";
  }
  return errors; 
};
console.log(validateData); 

const handleStateChange = (e) => {
  setInputFields({... inputFields, [e.target.name]: e.target.value});
  setInputFields({... inputFields, [e.target.surname]: e.target.value});
  setInputFields({... inputFields, [e.target.email]: e.target.value});
};

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
  const note = document.getElementById("submitButton");
alert("Thank you for submitting a message to us.");
console.log(note);
    }
    const finished = (e) => {
       e.preventDefault();
       alert("Thank you! You are now officially added to our guestbook. All of your details will be forwarded to ...")
    }
const reset = () => {
  document.getElementById("resetButton");
setCurrentPage(1);
};


    return (
              <div className = "container"> 
              <form onSubmit = {submission}> 
            {currentPage === 1 && (  
    <div className = "questionOne">
<h3>Please enter your name:</h3>

        <input type = "text"
        name = "firstname" 
        placeholder = "first name" 
        id="firstName"
        value = {inputFields.name}
        onChange = {handleStateChange}
        ></input>

        <input type = "text" 
        name = "lastname" 
        placeholder = "last name" 
        id="lastName"
        value = {inputFields.surname}
        onChange = {handleStateChange}
        ></input>

  <h3>Please enter your email address:</h3>
  <input type = "email" 
  name = "email" 
  placeholder = "example@gmail.com" 
  id = "email"
  value = {inputFields.email}
  onChange = {handleStateChange}
  ></input>
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
<input type = "radio" id="ceremonyAttendance" name = "ceremonyAvailability" value = "Attending"></input>   
    <label htmlFor = "ceremonyAttendance">Attending</label> 
    
<input type = "radio" id = "ceremonyAttendanceDeclined" name = "ceremonyAvailability" value = "Not Attending"></input>
    <label htmlFor = "ceremonyAttendanceDeclined">Not Attending</label>
</p>
{/**Reception*/}
<h3>Reception</h3>
<p>
  <ul>
    <li>Saturday 12th October 2024, 13:30pm</li>
    <li>Cross Deep, Twickenham, London, TW1 4RB</li>
  </ul>
  <input type = "radio" id="receptionAttendance" name = "receptionAvailibility" value = "Attending"></input>   
  <input type = "radio" id="receptionAttendance" name = "receptionAvailibility" value = "Attending" ></input>   
    <label htmlFor = "receptionAttendance">Attending</label>

<input type = "radio" id = "receptionAttendanceDeclined" name = "receptionAvailibility" value = "Not Attending"></input>
    <label htmlFor = "receptionAttendanceDeclined">Not Attending</label>
</p>
<button type = "button" className = "sectionOnePreviousButton" onClick = {prevButton}>Previous</button>
<button type = "submit" id = "submitButtonSectionFour" onClick = {finished}>Finish</button>  
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
<button type = "reset" id = "resetButton" onClick = {reset}>Reset</button> 
</div>
)}
 </form>   
 
   </div>
    )
};
export default Pagination;