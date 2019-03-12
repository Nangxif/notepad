<template>
  <div id="login">
    <advertise></advertise>
    <div class="login-wrapper">
        <router-link to="/index" class="close">&times;</router-link>
        <p class="login_title">开启生活手账</p>
        <input type="number" name="tel" class="login-input" placeholder="输入手机号" />
        <router-link class="login-title-btn" to="/login/password">下一步</router-link>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import advertise from './advertise/advertise';
export default {
  name: 'Login',
  components:{
    advertise
  }
}
</script>

<style>
#login{
  width: 100%;
  height: 100%;
}
.login-wrapper{
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%; 
    height: 100%;
    background-color: white;
    z-index: 1;
}

.login-wrapper .close{
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
.login-wrapper .login_title{
    margin-left: 10%;
    margin-top: 24%;
    font-size: 20px;
    font-family: "微软雅黑","黑体";
}

.login-wrapper .login-input{
    display: block;
    margin: 0 auto;
    margin-top: 22%;
    padding: 0px 15px;
    width: 70%;
    height: 40px;
    border: 0px;
    border-bottom: 1px solid #d6d6d6;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    font-size: 18px;
    outline: none;
}
.login-wrapper .login-title-btn{
    display: block;
    margin: 0 auto;
    margin-top: 10%;
    width: 70%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    background-color: #dddddd;
    border-radius: 20px;
    text-decoration: none;
    color: black;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    user-select: none;
}

</style>