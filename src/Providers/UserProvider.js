import React, { useEffect, useState } from "react";
import fire from "../Config/fire";

export const UserContext = React.createContext();

const routesPublic = [
	{url: '/', displayName: 'Home'},
	{url: '/real', displayName: 'Real'},
	{url: '/projects', displayName: 'Project'}];
const routesPrivate = [
	{url: '/', displayName: 'Home'},
	{url: '/real', displayName: 'Real'},
	{url: '/projects', displayName: 'Project'},
	{url: '/formAdd', displayName: 'Form add'}];

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [routes, setRoutes] = useState(routesPublic);

	useEffect(() => {
		fire.auth().onAuthStateChanged( (user) => {
			setUser(user);
			setRoutes(user ? routesPrivate : routesPublic);
		});
	}, [])

	return (
		<UserContext.Provider value={{ user, routes }}>{children}</UserContext.Provider>
	);
};

export default UserProvider;
