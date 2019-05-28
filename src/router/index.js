import Vue from 'vue'
import Router from 'vue-router'
import Advertise from '@/components/openview/advertise/advertise';
import Login from '@/components/openview/login/login';
import Register from '@/components/openview/register/register';
import Password from '@/components/openview/register/password/password';
import Index from '@/components/index';
import Find from '@/components/find';
import Personal from '@/components/personal/personal';
import Friend from '@/components/personal/friend/friend';
import Setting from '@/components/personal/setting/setting';
import Avatar from '@/components/personal/setting/avatar/avatar';
import Nickname from '@/components/personal/setting/nickname/nickname';
import Sex from '@/components/personal/setting/sex/sex';
import Tel from '@/components/personal/setting/tel/tel';
import Address from '@/components/personal/setting/address/address';
import Code from '@/components/personal/setting/code/code';
import Note from '@/components/personal/note/note';
import Dates from '@/components/personal/date/date';
import DateDetail from '@/components/personal/date/dateDetail/dateDetail';
import Save from '@/components/personal/save/save';
import System from '@/components/personal/system/system';
import About from '@/components/personal/system/about/about';
import Func from '@/components/function/function';
import EditDate from '@/components/function/editDate/editDate';


Vue.use(Router)



const router = new Router({
  routes: [
    {
        path: '/',
        redirect: '/advertise'//默认重定向到广告页面
    },
    {
        path: '/advertise',
        component: Advertise//广告页面
    },
    {
        path: '/login',
        component: Login//注册页面
    },
    {
        path: '/register',
        component: Register,
        children:[{
            path: '/register/password',//密码界面
            component: Password
        }]
    },
    {
        path: '/index',//首页界面
        component: Index
    },
    {
        path: '/find',//发现界面
        component: Find
    },
    {
        path: '/function',//新建手账界面
        component: Func,
        children:[{
            path: '/function/editDate',//记日子界面
            component: EditDate
        }]
    },
    {
        path: '/personal',//个人中心界面
        component: Personal,
        children:[{
            path: '/personal/friend',//我的好友界面
            component: Friend
        },{
            path: '/personal/setting',//设置界面
            component: Setting,
            children:[{
                path: '/personal/setting/avatar',//头像设置修改界面
                component: Avatar
            },{
                path: '/personal/setting/nickname',//昵称设置修改界面
                component: Nickname
            },{
                path: '/personal/setting/sex',//性别修改界面
                component: Sex
            },{
                path:'/personal/setting/tel',//修改手机号界面
                component: Tel
            },{
                path: '/personal/setting/address',//地址修改界面
                component: Address
            },{
                path: '/personal/setting/code',//二维码查看下载界面
                component: Code
            }]
        },{
            path: '/personal/note',//我的手账界面
            component: Note
        },{
            path: '/personal/date',
            component: Dates,
            children:[{
                path:'/personal/date/datedetail',
                component: DateDetail
            }]
        },{
            path: '/personal/save',//我的收藏界面
            component: Save
        },{
            path: '/personal/system',//系统设置界面
            component: System,
            children:[{
                path: '/personal/system/about',//关于notepad界面
                component: About
            }]
        }]
    }
  ],
  linkActiveClass: 'active',
})

// 每次请求路由跳转的时候都会经过这里，在这里判断一下是否登录再合适不过
router.beforeEach((to, from, next) => {
    // console.log(to.path);
    // next();
    // 如果不判断进来的界面是否为/login 的话，会出现死循环Maximum call stack size exceeded
    if (!$cookies.get("userId")&&(to.path!=='/login'||to.path!=='/register'||to.path!=='/register/password'||to.path!=='/advertise')) {
        if(to.path=='/login'||to.path=='/register'||to.path == '/register/password'||to.path=='/advertise'){
            next();
        }else{
            next({
                path: '/login'
            })
        }
    }else{
        // if($cookies.get("userId")&&(to.path=='/login'||to.path=='/register'||to.path=='/register/password'||to.path=='/advertise')){
        //     // if(to.path=='/login'){
        //     //     next();
        //     // }else{
        //         next();
        //     // }
        // }else{
        //     next();
        // }
        next();
    }
})

export default router;


