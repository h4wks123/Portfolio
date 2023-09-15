import { Route,Routes } from 'react-router-dom';
import Navbar from '../layouts/navbar';

import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

function App() {
  return (
   <>
    <Navbar/>
      <div>
        <Routes>        
        <Route path="/"  element={<Home/>} />
        <Route path="/About"  element={<About />}/>
        <Route path="/Contact"  element={<Contact/>}/>
        </Routes>
      </div>
    </>
   
  );
}

export default App;