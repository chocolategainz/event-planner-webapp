import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import Form from './components/pages/Form';
import Playlist from './components/pages/Playlist';

/*Functional Component*/
function App() {

  return (  
<div className="Nav">  
      <Router>
      <header className="">
      <Navbar /> 
      </header>   
       <Routes>
        <Route exact path = "/" element = {<Homepage />} />
        <Route exact path = "/About" element = {<About />} />
        <Route exact path = "/Contacts" element = {<Contacts />} />
        <Route exact path = "/Form" element = {<Form />} />
        <Route exact path = "/Playlist" element = {<Playlist />} />
       </Routes>
      </Router>
    </div>
   
  );
}

export default App;
