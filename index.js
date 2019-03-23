import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Info from '@/components/Info'
import Search from '@/components/Search'
import Open from '@/components/Open'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
    ,
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
    ,
    {
      path: '/Open',
      name: 'Open',
      component: Open
    }
    ,
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
    ,
    {
    path: '/Info',
    name: 'Info',
    component: Info
    }
  ]
})
