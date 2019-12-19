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
import Social from './components/social';

const App = () => {
	return (
		<Router>
			<div class="container">
			<Navbar />
			<Social />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/now">
						<Now />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
