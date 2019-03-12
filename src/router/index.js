import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login';
import Password from '@/components/login/password/password';
import Index from '@/components/index';
import Find from '@/components/find';
import Personal from '@/components/personal/personal';
import Friend from '@/components/personal/friend/friend';
import Create from '@/components/create/create';


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: Login,
        children:[{
            path: '/login/password',
            component: Password
        }]
    },
    {
        path: '/index',
        component: Index
    },
    {
        path: '/find',
        component: Find
    },
    {
        path: '/create',
        component: Create
    },
    {
        path: '/personal',
        component: Personal,
        children:[{
            path: '/personal/friend',
            component: Friend
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
