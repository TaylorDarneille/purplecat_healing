import React from 'react';
import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js';
import Services from './Services';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function Main() {
  return (
  	<Router>
		<main id="main" className="section">
			<Nav />
			<Switch>
	          <Route path="/home">
	            <Home />
	          </Route>
	          <Route path="/services">
	            <Services />
	          </Route>
	          <Route path="/about">
	            <About />
	          </Route>
	        </Switch>
		</main>
	</Router>
  );
}

export default Main;