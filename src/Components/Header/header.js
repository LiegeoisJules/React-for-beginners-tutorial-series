import React from "react";
import Nav from "../Nav/navbar";


function Header() {

	return (
		<header className='border-b p-3 flex justify-between items-center'>
			<p className='font-bold'>Header</p>
			<Nav/>
		</header>
	);
}

export default Header;
