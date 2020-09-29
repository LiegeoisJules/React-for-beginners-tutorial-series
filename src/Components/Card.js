import React from "react";
import {Link} from "react-router-dom";

function Card(props) {

	console.log(props);

	return (
		<div className="border rounded overflow-hidden">
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
				<Link
					to={`/project/${props.product.id}`}
					className="bg-blue-500 text-white p-2 flex justify-center w-full"
				>
					Voir plus
				</Link>
			</div>
		</div>
	)
}


export default Card;
