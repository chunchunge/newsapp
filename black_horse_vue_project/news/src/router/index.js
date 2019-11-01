import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Profile from '@/pages/Profile'
import EditFile from '@/pages/EditFile'
import Home from '@/pages/Home'
import Attention from '@/pages/Attention'
import MyComments from '@/pages/MyComments'
import Collect from '@/pages/Collect'
import Xiangqing from '@/pages/Xiangqing'
import MoreComments from '@/pages/MoreComments.vue'
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
    },
    {
      path:'/attention',
      name:'attentionpage',
      component:Attention
    },
    {
      path:'/mycomments',
      name:'mycommentspage',
      component:MyComments
    },
    {
      path:'/collect',
      name:'collectpage',
      component:Collect
    },
    {
      path:'/xiangqing/:id',
      name:'xiangqingpage',
      component:Xiangqing
    },
    {
      path: '/morecomments/:id',
      name: 'moreCommentsPage',
      component: MoreComments
    }
  ]
})
