import Vue from 'vue'
import Router from 'vue-router'
import Advertise from '@/views/openview/advertise/advertise';
import Login from '@/views/openview/login/login';
import Register from '@/views/openview/register/register';
import Password from '@/views/openview/register/password/password';
import Index from '@/views/index';
import Find from '@/views/find';
import Personal from '@/views/personal/personal';
import Friend from '@/views/personal/friend/friend';
import Setting from '@/views/personal/setting/setting';
import Avatar from '@/views/personal/setting/avatar/avatar';
import Nickname from '@/views/personal/setting/nickname/nickname';
import Sex from '@/views/personal/setting/sex/sex';
import Tel from '@/views/personal/setting/tel/tel';
import Address from '@/views/personal/setting/address/address';
import Code from '@/views/personal/setting/code/code';
import Note from '@/views/personal/note/note';
import Dates from '@/views/personal/date/date';
import DateDetail from '@/views/personal/date/dateDetail/dateDetail';
// import Bill from '@/views/personal/date/date';
import Save from '@/views/personal/save/save';
import System from '@/views/personal/system/system';
import About from '@/views/personal/system/about/about';
import Func from '@/views/function/function';
import EditDate from '@/views/function/editDate/editDate';
import EditBill from '@/views/function/editBill/editBill';


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
        },{
            path: '/function/editBill',//记账单界面
            component: EditBill
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
                component: Avatar,
                meta:{
                    keepAlive: false
                }
            },{
                path: '/personal/setting/nickname',//昵称设置修改界面
                component: Nickname,
                meta:{
                    keepAlive: false
                }
            },{
                path: '/personal/setting/sex',//性别修改界面
                component: Sex,
                meta:{
                    keepAlive: true
                }
            },{
                path:'/personal/setting/tel',//修改手机号界面
                component: Tel,
                meta:{
                    keepAlive: false
                }
            },{
                path: '/personal/setting/address',//地址修改界面
                component: Address,
                meta:{
                    keepAlive: false
                }
            },{
                path: '/personal/setting/code',//二维码查看下载界面
                component: Code,
                meta:{
                    keepAlive: false
                }
            }],
            meta:{
                keepAlive: true
            }
        },{
            path: '/personal/note',//我的手账界面
            component: Note,
            meta:{
                keepAlive: false
            }
        },{
            path: '/personal/date',
            component: Dates,
            children:[{
                path:'/personal/date/datedetail',
                component: DateDetail
            }],
            meta:{
                keepAlive: false
            }
        },{
            path: '/personal/save',//我的收藏界面
            component: Save,
            meta:{
                keepAlive: false
            }
        },{
            path: '/personal/system',//系统设置界面
            component: System,
            children:[{
                path: '/personal/system/about',//关于notepad界面
                component: About
            }],
            meta:{
                keepAlive: true
            }
        }],
        meta:{
            keepAlive: false
        }
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


