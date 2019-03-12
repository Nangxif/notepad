<template>
  <div id="password">
    <div class="password-wrapper">
        <router-link to="/index" class="close">&times;</router-link>
        <p class="password_title">开启生活手账</p>
        <input type="password" name="password" class="password-input" placeholder="设置密码" />
        <input type="number" name="number" class="password-input" placeholder="输入验证码" />
        <router-link class="password-title-btn" to="/index">下一步</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'password'
}
</script>

<style>
#password{
  width: 100%;
  height: 100%;
}
.password-wrapper{
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%; 
    height: 100%;
    background-color: white;
    z-index: 1;
}

.password-wrapper .close{
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
.password-wrapper .password_title{
    margin-left: 10%;
    margin-top: 24%;
    font-size: 20px;
    font-family: "微软雅黑","黑体";
}

.password-wrapper .password-input{
    display: block;
    margin: 0 auto;
    margin-top: 9%;
    padding: 0px 15px;
    width: 70%;
    height: 40px;
    border: 0px;
    border-bottom: 1px solid #d6d6d6;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    font-size: 18px;
    outline: none;
}
.password-wrapper .password-title-btn{
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
