import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Profile from '@/pages/Profile'
import EditFile from '@/pages/EditFile'
import Home from '@/pages/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'homepage',
      component:Home
    },
    {
      path:'/login',
      name:'loginPage',
      component:Login
    },
    {
      path:'/register',
      name:'registerpage',
      component:Register
    },
    ,
    {
      path:'/profile',
      name:'profilepage',
      component:Profile
    },
    {
      path:'/editfile',
      name:'editfilepage',
      component:EditFile
    }
  ]
})
