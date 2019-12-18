import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import './App.scss';
import Navbar from './components/navbar';
import Home from './components/home';
import Now from './components/now';
import Contact from './components/contact';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/now">
						<Now />
					</Route>
					<Route path="/contact">
						<Contact/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
