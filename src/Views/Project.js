import React from "react";
import { useParams } from 'react-router-dom';
import Loader from "../Components/Loader";
import Card from "../Components/Card";
import {useAxiosGet} from "../Hooks/HttpRequest";

function Project() {
	const {id} = useParams()
	const url = `https://5f6a0569d808b90016bc0b92.mockapi.io/api/v1/real/${id}`;

	let product = useAxiosGet(url);

	let content = null;


	if (product.loading) {
		content = <Loader/>
	}

	if (product.error) {
		content = <div className='p-2 bg-red-300 text-center text-2xl text-red-700'>Une erreur est survenue :(</div>
	}

	if (product.data) {
		content = <Card product={product.data} />
	}

	return (
		<div className='w-full flex justify-center'>
			<div className='w-2/5'>
				{content}
			</div>
		</div>
	);
}

export default Project;
