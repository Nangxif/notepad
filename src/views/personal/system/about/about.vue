<template>
  <div class="about">
    <head-top :is-back="isBack" page-title="关于notepad"></head-top>
    <div class="about_wrapper">
        <h2>关于notepad</h2>
        <h3>版本1.0</h3>
        <h3>开发者：曩昔方</h3>
        <p>1.此嵌入式APP仅用于个人学习，不做商用；</p>
        <p>2.APP切记不可用手机系统自带返回键进行操作，返回即为退出；</p>
        <p>3.APP主要功能为“写手账”，“记日子”。</p>
        <h2>开发初衷</h2>
        <p>人这一生其实特别短暂，一晃都快触及而立之年。夜深人静的时候，也会想起自己老了的时候，身边还剩下什么人，让你花一辈子去疼爱的父母和贤妻是否安在？都说人生三分甜，七分苦，想把我人生这三分的甜，记录成册。古来稀之年翻开这些回忆，眼里满满的都是自己年轻时的影子。</p>
        <p></p>
        <p></p>
        <p></p>
    </div>
    <router-view></router-view>


  </div>
</template>

<script>
import headTop from '@/components/common/head';
export default {
    data(){
        return{
            "isBack": true
        }
    },
    components:{
        headTop
    }
}
</script>

<style>
    .about_wrapper{
        position: fixed;
        left: 0px;
        top: 3.031rem;
        width: 100%;
        height: calc(100% - 3.031rem);
        padding:.5rem;
        background-color: white;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 501;
    }
    .about_wrapper h2,.about_wrapper h3{
        text-align: center;
        margin-top:0.22rem;
        margin-bottom:0.22rem;
    }
    .about_wrapper p{
        font-style: 1rem;
    }


</style>