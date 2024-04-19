import React, {useState} from 'react';


const Pagination = () => { 
  const currentPage = 1;   
const paginationData = [{currentPage, setStatePage}] = useState(0); 


const nextButton = (e) => {
    e.preventDefault();
   setStatePage(currentPage + 1);
    }

    const prevButton = (e) => {
        e.preventDefault();
        setStatePage(currentPage - 1)
    }

};

    return (
              <div className = "container"> 
              <form> 
            {currentPage === 1 && (  
    <div className = "questionOne">
<h3>Please enter your name:</h3>
        <input name = "firstname" placeholder = "first name" id="firstName"></input>
        <input name = "lastname" placeholder = "last name" id="lastName"></input>
        <button className = "nextButton" onClick = {nextButton}>Next</button>
    </div>
)};

{currentPage === 2 && ( 
  <div className = "questionTwo">
    <h3>Will you be attending the wedding?</h3>
    <p> 
    <input type = "radio" id="attending">Attending</input>
    <input type = "radio" id = "notAttending">Not Attending</input>
    <button type = "submit" className = "previousButton" onClick = {prevButton}>Previous</button>
    <button type = "submit" className = "nextButton" onClick = {nextButton}>Next</button>  
    </p>
</div>  
)};

 </form>     
   </div>
    )



export default Pagination;
 