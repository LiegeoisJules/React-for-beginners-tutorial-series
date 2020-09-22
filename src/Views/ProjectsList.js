import React, {useEffect, useState} from "react";
import * as axios from "axios";
import Loader from "../Components/Loader";

function ProjectsList() {
	const url = `https://5f6a0569d808b90016bc0b92.mockapi.io/api/v1/real`;
	const [products, setProducts] = useState({
		loading: false,
		data: null,
		error: false
	});

	let content = null;

	useEffect(() => {
		setProducts({
			loading: true,
			data: null,
			error: false
		});
		axios.get(url)
			.then(response => {
				setProducts({
					loading: false,
					data: response.data,
					error: false
				});
			}).catch(response => {
			setProducts({
				loading: false,
				data: null,
				error: true
			});
		});
	}, [url])

	if (products.loading) {
		content = <Loader/>
	}

	if (products.error) {
		content = <div className='p-2 bg-red-300 text-center text-2xl text-red-700'>Une erreur est survenue :(</div>
	}

	if (products.data) {
		content = {products}
			// <div className='p-3'>
			// 	<h1 className='text-2xl font-bold mb-3'>{product.data.name}</h1>
			// 	<div>
			// 		<img
			// 			src={product.data.thumbnail}
			// 			alt={product.data.name}
			// 			className='w-3/5'
			// 		/>
			// 	</div>
			// 	<div>
			// 		<h3 className='font-medium'>Description</h3>
			// 		<p>{product.data.description}</p>
			// 	</div>
			// 	<p className='text-right text-sm text-gray-500'>{product.data.createdAt}</p>
			// </div>
	}

	return (
		<div>
			{content}
		</div>
	);
}

export default ProjectsList;
