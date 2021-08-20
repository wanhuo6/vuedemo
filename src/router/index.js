import Vue from 'vue'
import Router from 'vue-router'
import Hi from '../components/Hi'
import Login from "../components/Login";
import QQLogin from "../components/QQLogin";

Vue.use(Router)

export default new Router({
  mode: 'history', // 这行的作用是去掉地址栏中的#
  routes: [
    {
      path: '/',
      name: 'Hi',
      component: Hi
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        show_header: true,
        title_text: '登录页面'
      }
    },
    {
      path: '/qqlogin',
      name: 'QQLogin',
      component: QQLogin
    }
  ]
})
