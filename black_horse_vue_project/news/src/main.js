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
router.beforeEach((to,from,next)=>{
  var token =localStorage.getItem('token')
  if(to.path=="/profile"){
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
axios.defaults.baseUrl="http://127.0.0.1:3000"
import {Toast} from 'vant';
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
