import React from "react";
import Loader from "../Components/Loader";
import Card from "../Components/Card";
import {useAxiosGet} from "../Hooks/HttpRequest";

function ProjectsList() {
	const url = 'https://5f6a0569d808b90016bc0b92.mockapi.io/api/v1/real?limit=10&page=1';

	let products = useAxiosGet(url)

	let content = null;


	if (products.loading) {
		content = <Loader/>
	}

	if (products.error) {
		content = <div className='p-2 bg-red-300 text-center text-2xl text-red-700'>Une erreur est survenue :(</div>
	}

	if (products.data) {
		content = products.data.map((product) => {
			return <Card product={product} />
		})
	}

	return (
		<div className='w-full grid gap-2 xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 p-3'>
			{content}
		</div>
	);
}

export default ProjectsList;
