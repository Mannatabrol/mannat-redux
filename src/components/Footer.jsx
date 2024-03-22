import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer>
        <NavLink activeclassname="red" to="/Home" style={{ color: 'orange', textDecoration: 'none' }}>
          <li>Home{'\u{1F3E0}'}</li> 
        </NavLink>
        <NavLink activeClassName="red" to="/Signup" style={{ color: 'orange', textDecoration: 'none' }}>
          <li>Sign-up{'\u{270D}'}</li>
        </NavLink>
        <NavLink activeClassName="red" to="/Login" style={{ color: 'orange', textDecoration: 'none' }}>
          <li>Login{'\u{1F464}'}</li>
        </NavLink>
      </footer>
    </div>
  );
};

export default Footer;
