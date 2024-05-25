import React from "react";
import "./Themes.css";
import Example from './Example';

const Homepage = () => {
    return (      
<div className = "container">   
<Example />
    <main className = 'boxContainer'>
<p>IAN & JENNIFER</p>
{/* <div className = 'borderLine'></div>*/}
<p id = "weddingDate">16.10.2024</p>
</main>  

{/*Countdown API*/}
<div id = "countdownTimer">
    <img src="https://i.countdownmail.com/3aa851.gif?id=$2y$10$@/vvh.n*|URL:EMAIL|*" alt="countdownmail.com"/>
</div>
 </div>


)};

export default Homepage;

