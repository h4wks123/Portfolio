import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../images/logo.png';

const Navbar=()=>{
    return (    
       <div className="z-10 w-[100%] h-20 fixed top-0 left-0 bg-cover bg-center bg-no-repeat flex items-center justify-between px-12 py-12">
           <div className="flex items-center">
             <img src={LOGO} width="15%" height="10%" alt="Logo" className="mr-3"/>
             <p className="text-white text-3xl font-bold ml-2">Portfolio</p>
           </div>
           <div className="hidden md:flex space-x-10">
             <Link to="/" className="text-white text-1xl font-semibold">Home</Link>
             <Link to="/About" className="text-white text-1xl font-semibold">About</Link>
             <Link to="/Contact" className="text-white text-1xl font-semibold">Contacts</Link>
           </div>
      </div>
    )

}

export default Navbar;
