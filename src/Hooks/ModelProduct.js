import axios from "axios";

export function productRemove(id) {
	axios.delete(`https://5f6a0569d808b90016bc0b92.mockapi.io/api/v1/real/${id}`)
		.then(response => {
			return response;
		}).catch(response => {
			return response;
		})
}
