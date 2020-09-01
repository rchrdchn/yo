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
import Readings from './components/readings';

const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/now">
						<Now />
					</Route>
					<Route exact path="/readings">
						<Readings />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
