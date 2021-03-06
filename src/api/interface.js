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
	update_address: '/setting/updateAddress',
	// 查找好友
	get_friend: '/friend/getFriend',
	// 返回好友列表
	get_friends: '/friend/getFriends',
	// 添加好友
	add_friend: '/friend/addFriend',
	// 通过id列表查找信息
	get_friendbyid: '/friend/getFriendById'

}

const USER = {
	// 登录
	login: '/users/login',
	// 注册
	register: '/users/register',
	// 注销
	loginout: '/users/loginout'
}

export default{
	INDEX,
	FIND,
	FN,
	SELFCENTER,
	USER
}