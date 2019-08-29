export default{
	getSex(state){
		let sexMap = new Map();
		sexMap.set("男","♂");
		sexMap.set("女","♀");
		sexMap.set("未设置","未设置");
		return sexMap.get(state.sex);
	}
}