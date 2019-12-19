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

const App = () => {
	return (
		<Router>
			<section className="section">
				<div class="container">
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/now">
							<Now />
						</Route>
					</Switch>
				</div>
			</section>
		</Router>
	);
}

export default App;
