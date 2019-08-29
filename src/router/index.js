import Vue from 'vue'
import Router from 'vue-router'
// import Advertise from '@/views/openview/advertise/advertise';
// import Login from '@/views/openview/login/login';
// import Register from '@/views/openview/register/register';
// import Password from '@/views/openview/register/password/password';
// import Index from '@/views/index';
// import Find from '@/views/find';
// import Personal from '@/views/personal/personal';
// import Friend from '@/views/personal/friend/friend';
// import Setting from '@/views/personal/setting/setting';
// import Avatar from '@/views/personal/setting/avatar/avatar';
// import Nickname from '@/views/personal/setting/nickname/nickname';
// import Sex from '@/views/personal/setting/sex/sex';
// import Tel from '@/views/personal/setting/tel/tel';
// import Address from '@/views/personal/setting/address/address';
// import Code from '@/views/personal/setting/code/code';
// import Note from '@/views/personal/note/note';
// import Dates from '@/views/personal/date/date';
// import DateDetail from '@/views/personal/date/dateDetail/dateDetail';
// import Bill from '@/views/personal/date/date';
// import Save from '@/views/personal/save/save';
// import System from '@/views/personal/system/system';
// import About from '@/views/personal/system/about/about';
// import Func from '@/views/function/function';
// import EditDate from '@/views/function/editDate/editDate';
// import EditBill from '@/views/function/editBill/editBill';


Vue.use(Router)



const router = new Router({
  mode:'history',//设置此属性，每个页面的地址才不用添加#
  routes: [
    {
        path: '/',
        redirect: '/advertise'//默认重定向到广告页面
    },
    {
        path: '/advertise',
        name: 'Advertise',
        component: (resolve) => require(['@/views/openview/advertise/advertise'],resolve)//广告页面
    },
    {
        path: '/login',
        name: 'Login',
        component: (resolve) => require(['@/views/openview/login/login'],resolve)//注册页面
    },
    {
        path: '/register',
        name: 'Register',
        component: (resolve) => require(['@/views/openview/register/register'],resolve),
        children:[{
            path: '/register/password',//密码界面
            name: 'Password',
            component: (resolve) => require(['@/views/openview/register/password/password'],resolve)
        }]
    },
    {
        path: '/index',//首页界面
        name: 'Index',
        component: (resolve) => require(['@/views/index/index'],resolve)
    },
    {
        path: '/find',//发现界面
        name: 'Find',
        component: (resolve) => require(['@/views/find'],resolve)
    },
    {
        path: '/function',//新建手账界面
        name: 'Func',
        component: (resolve) => require(['@/views/function/function'],resolve),
        children:[{
            path: '/function/editDate',//记日子界面
            name: 'EditDate',
            component: (resolve) => require(['@/views/function/editDate/editDate'],resolve),
        },{
            path: '/function/editBill',//记账单界面
            name: 'EditBill',
            component: (resolve) => require(['@/views/function/editBill/editBill'],resolve),
        }]
    },
    {
        path: '/personal',//个人中心界面
        name: 'Personal',
        component: (resolve) => require(['@/views/personal/personal'],resolve),
        children:[{
            path: '/personal/friend',//我的好友界面
            name: 'Friend',
            component: (resolve) => require(['@/views/personal/friend/friend'],resolve),
            children:[{
                path: '/personal/friend/addFriend',
                name: 'AddFriend',
                component: (resolve) => require(['@/views/personal/friend/addFriend/addFriend'],resolve)
            }]
        },{
            path: '/personal/setting',//设置界面
            name: 'Setting',
            component: (resolve) => require(['@/views/personal/setting/setting'],resolve),
            children:[{
                path: '/personal/setting/avatar',//头像设置修改界面
                name: 'Avatar',
                component: (resolve) => require(['@/views/personal/setting/avatar/avatar'],resolve)
            },{
                path: '/personal/setting/nickname',//昵称设置修改界面
                name: 'Nickname',
                component: (resolve) => require(['@/views/personal/setting/nickname/nickname'],resolve)
            },{
                path: '/personal/setting/sex',//性别修改界面
                name: 'Sex',
                component: (resolve) => require(['@/views/personal/setting/sex/sex'],resolve)
            },{
                path:'/personal/setting/tel',//修改手机号界面
                name: 'Tel',
                component: (resolve) => require(['@/views/personal/setting/tel/tel'],resolve)
            },{
                path: '/personal/setting/address',//地址修改界面
                name: 'Address',
                component: (resolve) => require(['@/views/personal/setting/address/address'],resolve)
            },{
                path: '/personal/setting/code',//二维码查看下载界面
                name: 'Code',
                component: (resolve) => require(['@/views/personal/setting/code/code'],resolve)
            }]
        },{
            path: '/personal/note',//我的手账界面
            name: 'Note',
            component: (resolve) => require(['@/views/personal/note/note'],resolve)
        },{
            path: '/personal/date',
            name: 'Dates',
            component: (resolve) => require(['@/views/personal/date/date'],resolve),
            children:[{
                path:'/personal/date/datedetail',
                name: 'DateDetail',
                component: (resolve) => require(['@/views/personal/date/dateDetail/dateDetail'],resolve),
            }]
        },{
            path: '/personal/save',//我的收藏界面
            name: 'Save',
            component: (resolve) => require(['@/views/personal/save/save'],resolve),
        },{
            path: '/personal/system',//系统设置界面
            name: 'System',
            component: (resolve) => require(['@/views/personal/system/system'],resolve),
            children:[{
                path: '/personal/system/about',//关于notepad界面
                name: 'About',
                component: (resolve) => require(['@/views/personal/system/about/about'],resolve),
            }]
        }]
    }
  ],
  linkActiveClass: 'active',
})



/**
 * 跳转控制，按序检测是否符合条件，符合则执行相关操作
 */
let linkLimit = [
    {
        check(to,form,next){
            return  !$cookies.get("userId")&&(to.path=='/login'||to.path=='/advertise'||to.path=='/register'||to.path=='/register/password')
        },
        execute(to,form,next){
            next();
        }
    },
    {
        check(to,form,next){
            return  !$cookies.get("userId");
        },
        execute(to,form,next){
            next({
                path:'/login'
            });
        }
    },
    {
        check(to,from,next){
            return $cookies.get("userId")&&(to.path=='/login'||to.path=='/register'||to.path=='/register/password'||to.path=='/advertise')
        },
        execute(to,from,next){
            next({
                path:'/index'
            })
        }
    },
    {
        check(to, from, next) {
            return true;
        },
        execute(to, from, next) {
            next();
        }
    }
]

// 每次请求路由跳转的时候都会经过这里，在这里判断一下是否登录再合适不过
router.beforeEach((to, from, next) => {
    // 每次跳转页面就进行判断
    let obj = linkLimit.find((target,index) => {
        return target.check(to,from,next);
    })
    obj.execute(to,from,next);
})

export default router;


