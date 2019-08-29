const mixin = {
	data(){
		return {
            "isBack": false,
            "openModal": false,
            "isModal": false,//遮罩是否显示
            "timer": {}
        }
	},
	methods:{
        closeModal(){
            this.openModal = false;
            this.timer=setTimeout(()=>{
                clearTimeout(this.timer);
                this.isModal=false;
            },1000);
        }
    }
}

export default mixin;