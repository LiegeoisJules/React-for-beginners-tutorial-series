import React from 'react';
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";
import Home from "./Views/Home";
import Real from "./Views/Real";
import Project from "./Views/Project";

function App() {
	return (
		<Router>
			<Header/>
			<Switch>
				<Route exact path="/">
					<Home/>
				</Route>
				<Route path="/real">
                  	<Real/>
				</Route>
				<Route path="/projects">
					<Project/>
				</Route>
				<Route path="/project/:id">
					<Project/>
				</Route>
			</Switch>
			<Footer/>
		</Router>
	);
}

export default App;
