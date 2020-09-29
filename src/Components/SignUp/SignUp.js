import React, {useContext, useEffect, useState} from "react";
import firebase from "firebase";
import {StyledFirebaseAuth} from "react-firebaseui";
import fire from "../../Config/fire";
import {UserContext} from "../../Providers/UserProvider";

let uiConfig = {
	signInFlow: 'popup',
	signInOptions: [
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
		firebase.auth.GoogleAuthProvider.PROVIDER_ID
	],
	callbacks: {
		signInSuccessWithAuthResult: (authResult, redirectUrl) => {
			return false;
		}
	}
}
const signOut = () => {
	fire.auth().signOut().then(() => {
		console.log("Sign out with success");
	});
}

const SignUp = () => {
	const { user } = useContext(UserContext);

	if (user) {
		return (
			<div className='text-center pt-5'>
				<h1 className='text-xl'>Welcome, {user.displayName}</h1>
				<p className='text-sm my-5'>{user.email}</p>
				<button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={signOut}>Sign Out</button>
			</div>
		)
	} else {
		return (
			<div className='text-center pt-5'>
				<h1 className='text-xl'>Sign In Form</h1>
				<StyledFirebaseAuth
					className='w-3/5 mx-auto'
					uiCallback={ui => ui.disableAutoSignIn()}
					uiConfig={uiConfig}
					firebaseAuth={fire.auth()} />
			</div>
		);
	}
}

export default SignUp;
