import React, {useState} from 'react';


const Pagination = () => { 
    
const [currentPage, setCurrentPage] = useState(1); 


const nextButton = (e) => {
    e.preventDefault();
   setCurrentPage(currentPage + 1);
    }

    const prevButton = (e) => {
        e.preventDefault();
        setCurrentPage(currentPage - 1)
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
    <input type = "radio" id="attending" value = "Attending"></input>   
    <label htmlFor = "attending">Attending</label> 
    
    
    <input type = "radio" id = "notAttending" value = "Not Attending">Not Attending/</input>
    <label htmlFor = "notAttending">Not Attending</label>
    <button type = "button" className = "previousButton" onClick = {prevButton}>Previous</button>
    <button type = "button" className = "nextButton" onClick = {nextButton}>Next</button>  
    </p>
</div>  
)}
 </form>     
   </div>
    )
};


export default Pagination;
 