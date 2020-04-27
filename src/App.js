import React, { useState, useEffect } from 'react';
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
	const getPrefColorScheme = () => {
		if (!window.matchMedia) return;
	
		return window.matchMedia("(prefers-color-scheme: dark)").matches;
	}

	const getInitialMode = () => {
		const isReturningUser = "dark" in localStorage;
		const savedMode = JSON.parse(localStorage.getItem("dark"));
		const userPrefersDark = getPrefColorScheme();
		// if mode was saved --> dark / light
		if (isReturningUser) {
		return savedMode;
		// if preferred color scheme is dark --> dark
		} else if (userPrefersDark) {
		return true;
		// otherwise --> light
		} else {
		return false;
		}
		// return savedMode || false;
	}

	const [darkMode, setDarkMode] = useState(getInitialMode());

	useEffect(() => {
		localStorage.setItem("dark", JSON.stringify(darkMode));
	}, [darkMode])



	return (
		<Router>
			<div className={`container ${darkMode ? "dark-mode" : "light-mode"}`}>
				<Navbar onChangeMode={() => setDarkMode(prevMode => !prevMode)} darkMode={darkMode}/>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/now">
						<Now />
					</Route>
					<Route path="/readings">
						<Readings />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
