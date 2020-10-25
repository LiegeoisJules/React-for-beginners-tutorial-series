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
import ProjectsList from "./Views/ProjectsList";
import SignUp from "./Components/SignUp/SignUp";
import UserProvider from "./Providers/UserProvider";
import PrivateRoute from './Providers/PrivateRoute';
import error404 from './Views/error404';
import FormAdd from './Views/FormAdd';

function App() {
	return (
		<UserProvider>
			<div className='relative min-h-screen pb-10'>
				<Router>
					<Header/>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/real" component={Real} />
						<Route path="/projects" component={ProjectsList} />
						<Route path="/project/:id" component={Project} />
						<PrivateRoute path='/formAdd' component={FormAdd} />
						<Route path='/signUp' component={SignUp} />
						<Route component={error404} />
					</Switch>
					<Footer/>
				</Router>
			</div>
		</UserProvider>
	);
}

export default App;
