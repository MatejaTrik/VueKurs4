import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/About'
import Contact from './components/Contact'
import History from './components/History'
import Delivery from './components/Delivery'
import OrderingGuide from './components/OrderingGuide'

export const routes = [
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