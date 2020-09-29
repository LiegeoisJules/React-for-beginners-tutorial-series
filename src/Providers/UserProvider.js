import React, { useEffect, useState } from "react";
import fire from "../Config/fire";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		fire.auth().onAuthStateChanged(setUser);
		console.log(user);
	}, []);

	return (
		<UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
	);
};

export default UserProvider;
