import React from 'react';
import {Link} from 'react-router-dom';
//Functional Component

const Navbar = () => {
    return (
     <div className='container-wrapper'>
     <div className='container' style={{paddingLeft:0 + 'em'}}>
     <nav className="navbar navbar-expand-lg navbar-light">
     <ul className="navbar-nav">
     
     <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
     <li className="nav-item"><Link className="nav-link" to='/About'>Our Love Story</Link></li> 
     <li className="nav-item"><Link className="nav-link" to='/Contacts'>Contacts</Link></li> 
     <li className="nav-item"><Link className="nav-link" to='/Form'>Guestbook</Link></li> 
     <li className="nav-item"><Link className="nav-link" to='/Playlist'>Song Requests</Link></li>
       </ul>
      </nav>
     </div>
    </div>
    )
    }
    export default Navbar;