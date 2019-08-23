<template>
  <div id="register">
    <div class="register-wrapper">
        <router-link to="/login" class="close">&times;</router-link>
        <p class="register_title">开启生活手账</p>
        <input type="number" name="tel" class="register-input" placeholder="输入手机号" v-model="tel"/>
        <button type="button" class="register-title-btn" @click="getCode">获取验证码</button>
        <!-- <router-link class="register-title-btn" to="/register/password">获取验证码</router-link> -->
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data(){
    return {
        tel:""
    }
  },
  methods:{
    getCode(){
        this.$router.push({path:"/register/password?tel="+this.tel})
    }
  }
}
</script>

<style>
#register{
  width: 100%;
  height: 100%;
}
.register-wrapper{
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%; 
    height: 100%;
    background-color: white;
    z-index: 1;
}

.register-wrapper .close{
    position: fixed;
    right: 5px;
    top: 5px;
    width: 40px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    display: block;
    font-size: 30px;
    font-weight: 600;
    text-decoration: none;
    color: black;
}
.register-wrapper .register_title{
    margin-left: 10%;
    margin-top: 24%;
    font-size: 1.25rem;
    font-family: "微软雅黑","黑体";
}

.register-wrapper .register-input{
    display: block;
    margin: 0 auto;
    margin-top: 22%;
    padding: 0px 0.5rem;
    width: 70%;
    height: 2.5rem;
    border: 0px;
    border-bottom: 1px solid #d6d6d6;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    font-size: 1rem;
    outline: none;
}
.register-wrapper .register-title-btn{
    display: block;
    margin: 0 auto;
    margin-top: 10%;
    width: 70%;
    text-align: center;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 1rem;
    background-color: #fed640;
    border-radius: 1.25rem;
    text-decoration: none;
    color: white;
}

</style>