import Vue from 'vue'
import Router from 'vue-router'
import Hi from '@/components/Hi'

Vue.use(Router)

export default new Router({
  mode: 'history', // 这行的作用是去掉地址栏中的#
  routes: [
    {
      path: '/',
      name: 'Hi',
      component: Hi
    }
  ]
})
