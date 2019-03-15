import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login';
import Password from '@/components/login/password/password';
import Index from '@/components/index';
import Find from '@/components/find';
import Personal from '@/components/personal/personal';
import Friend from '@/components/personal/friend/friend';
import Setting from '@/components/personal/setting/setting';
import Avatar from '@/components/personal/setting/avatar/avatar';
import Nickname from '@/components/personal/setting/nickname/nickname';
import Tel from '@/components/personal/setting/tel/tel';
import Code from '@/components/personal/setting/code/code';
import Note from '@/components/personal/note/note';
import Save from '@/components/personal/save/save';
import System from '@/components/personal/system/system';
import Func from '@/components/function/function';
import EditDate from '@/components/function/editDate/editDate';


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: Login,
        children:[{
            path: '/login/password',//密码界面
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
                path:'/personal/setting/tel',//修改手机号界面
                component: Tel
            },{
                path: '/personal/setting/code',//二维码查看下载界面
                component: Code
            }]
        },{
            path: '/personal/note',//我的手账界面
            component: Note
        },{
            path: '/personal/save',//我的收藏界面
            component: Save
        },{
            path: '/personal/system',//我的手账界面
            component: System
        }]
    }
  ],
  linkActiveClass: 'active',
})





// export default new Router({ 
//   routes: [  
//     { 
//       path: '/play',  
//       name: 'play',  
//       component: Play,  
//       children: [  
//         {  
//           path: '/play/home',  
//           name: 'home',  
//           component: Home,
//           children:[{
//           	path:'/play/home/time',
//           	name:'time',
//           	component:Time
//           }]  
//         },  
//         {  
//           path: '/play/about',  
//           name: 'about',  
//           component: About  
//         }   
//       ]  
//     }]
// }) 
