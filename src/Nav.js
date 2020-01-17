import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
  	<nav>
  		<Link to="/home">Home</Link>
  		<Link to="/services">Services</Link>
  		<Link to="/about">About Misha</Link>
  	</nav>
  );
}

export default Nav;