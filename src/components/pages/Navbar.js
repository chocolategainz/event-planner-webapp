import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
//Functional Component

const Navigation = () => {
    return (
     <div className='container-wrapper'>
     <div className='container' style={{paddingLeft:0 + 'em'}}>
     <nav className="navbar navbar-expand-lg navbar-light">
     <ul className="navbar-nav">
     <li className="nav-item"><Link className="nav-link" to='/'><h4 className = 'home'>Home</h4></Link></li>
     <li className="nav-item"><Link className="nav-link" to='/About'>About</Link></li> 
     <li className="nav-item"><Link className="nav-link" to='/Contact'>Contact Us</Link></li> 
     </ul>
     </nav>
     </div>
    </div>
    )
    }
    export default (Navigation);