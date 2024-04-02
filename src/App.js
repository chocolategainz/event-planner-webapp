import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';


/*Functional Component*/
function App() {
  return (
    <div className="Nav">
      <header className="">
      <Navbar /> 
      </header>
      <Router>
       <Routes>
        <Route exact path = '/' element = {<Homepage />} />
        <Route exact path = 'About' element = {<About />} />
        <Route exact path = 'Contact' element = {<Contacts />} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
