import axios from 'axios';
axios.default.baseURL = process.env.API_ROOT;
let register = (obj) => {
	return axios.post('/users/register', obj)
}

let login = (obj) => {
	return axios.get('/users/login', {
		params:obj
	})
}

export {
	register,
	login
}