import axios from 'axios';
axios.default.baseURL = process.env.API_ROOT;
// 个人中心相关接口封装
let register = (obj) => {
	return axios.post('/users/register', obj)
}

let login = (obj) => {
	return axios.get('/users/login', {
		params:obj
	})
}

let settingData = () =>{
	return axios.get('/setting/getsettingdata',{})
}

let updateuserName = (username) =>{
	return axios.get('/setting/updateuserName',{
		params:{
			userName:username
		}
	})
}
let updateSex = (sex) =>{
	return axios.get('/setting/updateSex',{
		params:{
			sex:sex
		}
	})
}
let updateTel = (tel) =>{
	return axios.get('/setting/updateTel',{
		params:{
			tel:tel
		}
	})
}
let updateAddress = (address) =>{
	return axios.get('/setting/updateAddress',{
		params:{
			address:address
		}
	})
}


// 功能模块接口封装
let addDate = (obj) => {
	return axios.post('/fn/addDate', obj)
}
let getDates = () =>{
	return axios.get('/fn/getDates',{})
}
let getSingleDate = (_id) =>{
	return axios.get('/fn/getSingleDate',{
		params:{
			_id:_id
		}
	})
}
let deleteDates = (_id) =>{
	return axios.get('/fn/deleteDates',{
		params:{
			_id:_id
		}
	})
}
export {
	register,
	login,
	settingData,
	updateuserName,
	updateSex,
	updateTel,
	updateAddress,
	addDate,
	getDates,
	getSingleDate,
	deleteDates
}