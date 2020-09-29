import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCVqTPpbsF7AMZkBRErnxXruVnvH7MWhjQ",
	authDomain: "react-tailwind-7cdf7.firebaseapp.com",
	databaseURL: "https://react-tailwind-7cdf7.firebaseio.com",
	projectId: "react-tailwind-7cdf7",
	storageBucket: "react-tailwind-7cdf7.appspot.com",
	messagingSenderId: "195504190325",
	appId: "1:195504190325:web:1c2ae6ca5df503139d193c"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
