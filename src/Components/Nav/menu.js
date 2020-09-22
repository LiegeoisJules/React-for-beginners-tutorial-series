import {Link} from "react-router-dom";
import React from "react";

function Menu(props) {

	return (
		<div>
			<div className='font-bold py-3'>Navigation</div>
			<ul>
				<li>
					<Link to='/' className='text-blue-500 py-3 border-t border-b block' onClick={props.closeMenu}>Home</Link>
				</li>
				<li>
					<Link to='/real' className='text-blue-500 py-3 border-b block' onClick={props.closeMenu}>Real</Link>
				</li>
				<li>
					<Link to='/projects' className='text-blue-500 py-3 border-b block' onClick={props.closeMenu}>Projects</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
