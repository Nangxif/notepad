const INDEX = {};

const FIND = {

};

const FN = {
	// 添加日子
	add_date: '/fn/addDate',
	// 获取所有日子
	get_dates: '/fn/getDates',
	// 获取单个日子内容
	get_singleDate: '/fn/getSingleDate',
	// 删除日子
	delete_dates: '/fn/deleteDates'
};

const SELFCENTER = {
	// 获取设置部分的数据
	get_settingdata: '/setting/getsettingdata',
	// 更改昵称
	update_userName: '/setting/updateuserName',
	// 更改性别
	update_sex: '/setting/updateSex',
	// 更改电话
	update_tel: '/setting/updateTel',
	// 更改地址
	update_address: '/setting/updateAddress'

}

const USER = {
	// 登录
	login: '/users/login',
	// 注册
	register: '/users/register',
}

export default{
	INDEX,
	FIND,
	FN,
	SELFCENTER,
	USER
}