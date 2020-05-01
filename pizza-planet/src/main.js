import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/About'
import Contact from './components/Contact'
import History from './components/History'
import Delivery from './components/Delivery'
import OrderingGuide from './components/OrderingGuide'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/menu',
    component: Menu,
    name: 'Menu'
  },
  {
    path: '/contact',
    component: Contact,
    name: 'Contact'
  },
  {
    path: '/admin',
    component: Admin,
    name: 'Admin'
  },
  {
    path: '/about',
    component: About,
    children: [
      { path: '/history', component: History },
      { path: '/delivery', component: Delivery },
      { path: '/ordering-guide', component: OrderingGuide },
    ],
    name: 'About'
  },
  {
    path: '*',
    redirect: '/',
  }
]
const router = new VueRouter({
  mode:'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
