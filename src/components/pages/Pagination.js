import React, {useState} from 'react';

const Pagination = () => { 
const [currentPage, setCurrentPage] = useState(1); 
 const [firstName , setFirstName] = useState(''); 
 const [surname , setSurname] = useState(''); 
 const [email , setEmail] = useState(''); 
const [attendance , setAttendance] = useState('');
const [ceremonyAvailability , setCeremonyAvailability] = useState('');
const [receptionAvailability , setReceptionAvailability] = useState('');
const [error , setError] = useState({});
  
const validateData = () => {
  const errors = {};
  if (firstName.length < 3) {
    errors.firstName = "Name is invalid";
  }
  if(surname.length < 4) {
errors.surname = "Surname is invalid";
  }
  if (email.length < 15) {
    errors.email = "Email is invalid";
  }
  if (currentPage === 2 && !attendance) { 
  errors.attendance = "You must select an answer!";
}


    setError(errors);
    return Object.keys(errors).length === 0;
    
};

console.log(validateData); 

const handleStateChange = (e) => {
  const {name , value} = e.target;
  if (name === 'firstName' ) setFirstName(value);
  else if (name === 'surname') setSurname(value);
  else if (name === 'email') setEmail(value);
  else if (name === 'attendance')setAttendance(value);
  else if (name === 'ceremonyAvailability')setCeremonyAvailability(value);
  else if (name === 'receptionAvailability')setReceptionAvailability(value);
};


const nextButton = () => {
    if (validateData()) {
  
   if (currentPage === 2) {
     const attending = document.getElementById("attending").checked;
      setCurrentPage(attending ? 3 : 4);
    } else {
      setCurrentPage(currentPage + 1);
    }    
}
  };
    const prevButton = (e) => {
        e.preventDefault();
        setCurrentPage(currentPage - 1);
       
    };

    const newPrevButton = (e) => {
      e.preventDefault();
      setCurrentPage(2);
    }
    
    const submit = (e) => {
    e.preventDefault();
  const note = document.getElementById("submitButton");
alert("Thank you for submitting a message to us.");
console.log(note);
    };

     const finished = (e) => {
        e.preventDefault(); 
        if (!ceremonyAvailability || !receptionAvailability) {
        alert("Please select an option for both ceremony and reception availability.");
        return;
       } else { 
    } 
  alert("Thank you! You are responses have been saved. Please submit another form to update your rsvp status.");   
  };
    
    

const reset = () => {
  document.getElementsByClassName("resetButton")
  setCurrentPage(1);
  setFirstName('');
  setSurname('');
  setEmail('');
};


    return (
              <div className = "container"> 

<header id = "guestbookTitle">RSVP</header>
 
<div className = "formContainer"> 
              <form className = "formContent" onSubmit = {submit}> 
            {currentPage === 1 && (  
    <div className = "questionOne">
<h3>Enter your name:</h3>

        <input type = "text"
        name = "firstName" 
        placeholder = "first name" 
        id="firstName"
        value = {firstName}
        onChange = {handleStateChange} 
        ></input>
{error.firstName && <p className="error">{error.firstName}</p>}

        <input type = "text" 
        name = "surname" 
        placeholder = "last name" 
        id="surname"
        value = {surname}
        onChange = {handleStateChange}
        ></input>
{error.surname && <p className="error">{error.surname}</p>}

  <h3>Enter your email address:</h3>
  <input type = "email" 
  name = "email" 
  placeholder = "example@gmail.com" 
  id = "email"
  value = {email}
  onChange = {handleStateChange}
  ></input>
  {error.email && <p className="error">{error.email}</p>}
        <button type = "button" className = "nextButton" onClick = {nextButton}>Next</button>
    </div>
)}
{currentPage === 2 && ( 
  <div className = "questionTwo">
    <h3>Will you be attending the wedding?</h3>
    <p> 
      {/*Attending*/}
    <input type = "radio" 
    id="attending" 
    name = "attendance"
    value = "attending"
    onChange = {handleStateChange}
    checked={attendance === "attending"}
    ></input>   
    <label htmlFor = "attending">Attending</label> 

{/*Not attending*/}
    <input type = "radio" 
    id = "notAttending" 
    name = "attendance"
    value = "notAttending"
    onChange = {handleStateChange}
    checked={attendance === "notAttending"}
    ></input>
    <label htmlFor = "notAttending">Not Attending</label>
    
    {/*Error value */}
    {error.attendance && <p className="error">{error.attendance}</p>}

{/*Next and Previous buttons */}
    <button type = "button" className = "previousButton" onClick = {prevButton}>Previous</button>
    <button type = "button" className = "nextButton" onClick = {nextButton}>Next</button> 


    </p>
</div>  
)}

{currentPage === 3 && (
<div className = "pageThree">
<h3>Ceremony</h3>
<p> 
<ul>
  <li>Saturday 12th October 2024, 11:30am</li>
  <li>location for ceremony</li>
</ul>
</p>


<p>
<input type = "radio" 
id="accept" 
name = "ceremonyAvailability" 
value = "accept"
onChange = {handleStateChange}
checked = {ceremonyAvailability === "accept"}
></input>   
    <label htmlFor = "accept">Attending</label> 
    
<input type = "radio" 
id = "decline" 
name = "ceremonyAvailability"
 value = "decline"
 onChange = {handleStateChange}
 checked = {ceremonyAvailability === "decline"}
 ></input>
    <label htmlFor = "decline">Not Attending</label>
 
</p>
{/**Reception*/}
<h3>Reception</h3>
<p>
  <ul>
    <li>Saturday 12th October 2024, 13:30pm</li>
    <li>Cross Deep, Twickenham, London, TW1 4RB</li>
  </ul>
    
  <input type = "radio" 
  id="confirmed" 
  name = "receptionAvailability" 
  value = "confirmed" 
  onChange = {handleStateChange}
  checked = {receptionAvailability === "confirmed"}
  ></input>   
    <label htmlFor = "confirmed">Attending</label>

<input type = "radio" 
id = "rejected" 
name = "receptionAvailability" 
value = "rejected"
onChange = {handleStateChange}
checked = {receptionAvailability === "rejected"}
></input>
  <label htmlFor = "rejected">Not Attending</label>
</p>

<button type = "button" className = "sectionOnePreviousButton" onClick = {prevButton}>Previous</button>
<button type = "submit" className = "submitButtonSectionFour" onClick = {finished}>Finish</button> 
<button type = "reset" id = "resetButton" onClick = {reset}>Restart</button> 
</div>
)}

{/**Section Two */}
{currentPage === 4 && (
  <div className = "sectionTwo">
<h3>Would you like to send a message to the newly wed couple? </h3>
<p>

<div class="mb-3">
  <textarea class="form-control" id="message" rows="3" placeholder = "optional"></textarea>

</div>
  
</p>

<button type = "button" id = "newPrevButton" onClick = {newPrevButton}>Previous</button>

<button type = "submit">Submit</button>
<button type = "reset" className = "resetButton" onClick = {reset}>Restart</button> 
</div>
)}
 </form>    
   </div>

</div>

    )
};
export default Pagination;