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
    name: 'homeLink'
  },
  {
    path: '/menu',
    component: Menu,
    name: 'menuLink'
  },
  {
    path: '/contact',
    component: Contact,
    name: 'contactLink'
  },
  {
    path: '/admin',
    component: Admin,
    name: 'adminLink'
  },
  {
    path: '/about',
    component: About,
    children: [
      { path: '/history',name:'historyLink', component: History },
      { path: '/delivery', name:'deliveryLink', component: Delivery },
      { path: '/ordering-guide', name:'orderingGuideLink', component: OrderingGuide },
    ],
    name: 'aboutLink'
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
