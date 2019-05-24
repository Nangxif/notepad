<template>
  <div id="login">
    <div class="login-wrapper">
        <p class="login_title">开启生活手账</p>
        <input type="number" name="tel" class="login-input" placeholder="输入手机号" />
        <input type="password" name="password" class="login-input" placeholder="输入密码" />
        <router-link class="login-title-btn" to="/login/password">登录</router-link>
        <router-link class="login-title-btn" to="/register">未注册？点此注册</router-link>
        <!-- <router-view></router-view> 子路由的话一定要用到router-view-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
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
    font-size: 1.25rem;
    font-family: "微软雅黑","黑体";
}

.login-wrapper .login-input{
    display: block;
    margin: 0 auto;
    margin-top: 6%;
    padding: 0px 0.5rem;
    width: 70%;
    height: 2.5rem;
    border: 0px;
    border-bottom: 1px solid #d6d6d6;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    font-size: 1rem;
    outline: none;
}
.login-wrapper .login-input:first-of-type{
    margin-top: 22%;
}
.login-wrapper .login-title-btn{
    display: block;
    margin: 0 auto;
    margin-top: 4%;
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