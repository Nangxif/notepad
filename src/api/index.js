import axios from 'axios';
axios.default.baseURL = process.env.API_ROOT;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

export default{
	async get(url, params = {}, method = "GET" ){
		if(method.toUpperCase() == 'POST'){
			return new Promise((resolve,reject) => {
				axios.post(url,params).then(res => {
					resolve(res);
				}).catch(err => {
					reject(err);
				})
			});
		}
		return new Promise((resolve, reject) => {
			axios({
				url,
				params,
				method
			}).then(res => {
				resolve(res);
			}).catch(err => {
				reject(err);
			})
		})
	}
}
