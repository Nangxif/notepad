<template>
  <div id="password">
    <div class="password-wrapper">
        <router-link to="/index" class="close">&times;</router-link>
        <p class="password_title">开启生活手账</p>
        <input type="password" name="password" class="password-input" placeholder="设置密码"  v-model="password"/>
        <input type="number" name="number" class="password-input" placeholder="输入验证码" v-model="code"/>
        <!-- <router-link class="password-title-btn" to="/index">下一步</router-link> -->
        <button type="button" class="password-title-btn" @click="registe">下一步</button>
    </div>
  </div>
</template>

<script>
import {register,login} from '../../../../assets/api.js';
export default {
  name: 'password',
  data(){
    return{
        password:'',
        code:''
    }
  },
  methods:{
    registe(){
        let _target = this;
        register({ 
            tel:_target.$route.query.tel,
            password: _target.password,
            code: _target.code,
        }).then((res)=>{
            if(res.data.code == 1){
                login({
                    tel:_target.$route.query.tel,
                    password: _target.password
                }).then((login) => {
                    _target.$router.push({path:"/index"});
                })
            }
        });
        
    }
  }
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
    width: 2.5rem;
    text-align: center;
    height: 2.5rem;
    line-height: 2.5rem;
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
    padding: 0px .5rem;
    width: 70%;
    height: 2.5rem;
    border: 0px;
    border-bottom: 1px solid #d6d6d6;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    font-size: 1rem;
    outline: none;
}
.password-wrapper .password-title-btn{
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
