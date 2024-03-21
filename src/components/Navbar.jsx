import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <NavLink activeclassname="active" exact to="/Home" className="nav-link">
        Home
      </NavLink>
      <NavLink activeclassname="active" to="/Signup" className="nav-link">
    Signup
      </NavLink>
      <NavLink activeclassname="active" to="/login" className="nav-link">
      Login
      </NavLink>
   
    </nav>
  );
};

export default Navbar;
