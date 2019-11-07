// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入组件库
import Vant, { Lazyload } from 'vant';
//注册组件库
Vue.use(Vant);
//引入组件样式文件
import 'vant/lib/index.css';

import axios from "axios";
// 路由守卫
router.beforeEach((to,from,next)=>{
  var token =localStorage.getItem('token')
  // if(to.path=="/profile"){
    const pagesNeedAuth=[
      '/profile',
      '/editfile'
    ]
    if(pagesNeedAuth.indexOf(to.path) >=0){
    if(token){
      next();
    }else{
      next('/login')
    }
  }else{
    next();
  }
 
});
// 错误拦截
axios.defaults.baseUrl="http://111.230.181.206:3000"
import {Toast} from 'vant';
// 请求拦截
axios.interceptors.request.use((config)=>{
  // 判断有没有带token
  if(!config.headers.Authorization && localStorage.getItem('token')){
    // 没有就强制加上去
    config.headers.Authorization = localStorage.getItem('token')
  }
  // 有的话就让你返回
  return config;
})
axios.interceptors.response.use((res)=>{
  const {message,statusCode} =res.data;
  if(message && statusCode ==401){
    Toast.fail(message)
  }
if(message=="用户信息验证失败"){
  router.push('./login')
}


  return (res);
})
// 绑定到原型
Vue.prototype.$axios = axios;

//设置默认的 api 域名
axios.defaults.baseURL = "http://localhost:3000"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
