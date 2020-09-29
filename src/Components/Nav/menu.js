import {Link} from "react-router-dom";
import React, {useContext} from "react";
import {UserContext} from "../../Providers/UserProvider";
import fire from "../../Config/fire";
import './menu.css';

function Menu(props) {
	const {user} = useContext(UserContext);

	const signOut = () => {
		fire.auth().signOut();
	}

	return (
		<div className='relative'>
			<div className='font-bold py-3'>Navigation</div>
			{!!user ? (
				<>
					<div className='absolute signout-btn'>
						<button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={signOut}>Sign Out</button>
					</div>
					<div className='py-3'>
						<img className='profile-img rounded-full' src={user.providerData[0].photoURL} alt={user.displayName} />
						<p className='py-1 text-gray-900' >{user.displayName}</p>
						<p className='pb-1 text-sm text-gray-600'>{user.email}</p>
					</div>
				</>
			) : ''}
			<ul>
				<li>
					<Link to='/' className='text-blue-500 py-3 border-b border-b block' onClick={props.closeMenu}>Home</Link>
				</li>
				<li>
					<Link to='/real' className='text-blue-500 py-3 border-b block' onClick={props.closeMenu}>Real</Link>
				</li>
				<li>
					<Link to='/projects' className='text-blue-500 py-3 border-b block' onClick={props.closeMenu}>Projects</Link>
				</li>
				{!user ? (
					<li>
						<Link to='/signUp' className='text-blue-500 py-3 border-b border-b block' onClick={props.closeMenu}>Sign In</Link>
					</li>
				) : ''}
			</ul>
		</div>
	);
}

export default Menu;
