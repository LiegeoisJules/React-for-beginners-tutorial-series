import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../Providers/UserProvider";
import 'react-dropdown/style.css';
import {productRemove} from "../Hooks/ModelProduct";

function Card(props) {

	const {user} = useContext(UserContext);

	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="border rounded">
			<Link to={`/project/${props.product.id}`}>
				<div
					style={{
						'backgroundImage': `url('${props.product.thumbnail}')`,
					}}
					className="w-full h-64 bg-blue bg-cover"
				>
				</div>
			</Link>
			<div className="p-3">
				<h3 className="font-bold text-xl mb-3">
					<Link to={`/project/${props.product.id}`}>
						{props.product.name}
					</Link>
				</h3>
				<div className="mb-3">
					{props.product.description}
				</div>
				<p className='text-right text-sm text-gray-500'>{props.createdAt}</p>
				<div className='w-full flex justify-between'>
					<Link
						to={`/project/${props.product.id}`}
						className="bg-blue-500 flex justify-center text-white p-2"
					>
						Voir plus
					</Link>
					{!!user ? (
						<div className="relative inline-block text-left">
							<div>
								<span className="rounded-md shadow-sm">
								  <button type="button" onClick={() => setShowMenu(!showMenu)}
										  className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
										  id="options-menu" aria-haspopup="true" aria-expanded="true">
									Options
									  <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
									  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"/>
									</svg>
								  </button>
								</span>
							</div>
							{!!showMenu ? (
								<div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg">
									<div className="rounded-md bg-white shadow-xs">
										<div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
											<a href="#"
											   className="block px-2 py-2 text-sm leading-5 text-red-700 hover:bg-red-100 hover:text-red-900 focus:outline-none focus:bg-red-100 focus:text-red-900"
											   onClick={productRemove(props.product.id)}
											   role="menuitem">Delete</a>
										</div>
									</div>
								</div>
							) : ''}
						</div>
					) : ''}
				</div>
			</div>
		</div>
	)
}


export default Card;
