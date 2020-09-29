import React, {Component, useState} from 'react';
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
import ProjectsList from "./Views/ProjectsList";
import SignUp from "./Components/SignUp/SignUp";
import UserProvider from "./Providers/UserProvider";

class App extends Component {
	render() {
		return (
			<UserProvider>
				<div className='relative min-h-screen pb-10'>
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
								<ProjectsList/>
							</Route>
							<Route path="/project/:id">
								<Project/>
							</Route>
							<Route path='/signIn'>
								<div>Sign In</div>
							</Route>
							<Route path='/signUp'>
								<SignUp/>
							</Route>
						</Switch>
						<Footer/>
					</Router>
				</div>
			</UserProvider>
		);
	}

}

export default App;
