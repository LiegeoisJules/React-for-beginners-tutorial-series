import React, {useEffect, useState} from "react";
import * as axios from "axios";
import { useParams } from 'react-router-dom';
import Loader from "../Components/Loader";

function Project() {
	const {id} = useParams()
	const url = `https://5f6a0569d808b90016bc0b92.mockapi.io/api/v1/real/${id}`;
	const [product, setProduct] = useState({
		loading: false,
		data: null,
		error: false
	});

	let content = null;

	useEffect(() => {
		setProduct({
			loading: true,
			data: null,
			error: false
		});
		axios.get(url)
			.then(response => {
				setProduct({
					loading: false,
					data: response.data,
					error: false
				});
			}).catch(response => {
				setProduct({
					loading: false,
					data: null,
					error: true
				});
			});
	}, [url])

	if (product.loading) {
		content = <Loader/>
	}

	if (product.error) {
		content = <div className='p-2 bg-red-300 text-center text-2xl text-red-700'>Une erreur est survenue :(</div>
	}

	if (product.data) {
		content =
			<div className='p-3'>
				<h1 className='text-2xl font-bold mb-3'>{product.data.name}</h1>
				<div>
					<img
						src={product.data.thumbnail}
						alt={product.data.name}
						className='w-3/5'
					/>
				</div>
				<div>
					<h3 className='font-medium'>Description</h3>
					<p>{product.data.description}</p>
				</div>
				<p className='text-right text-sm text-gray-500'>{product.data.createdAt}</p>
			</div>
	}

	return (
		<div>
			{content}
		</div>
	);
}

export default Project;
