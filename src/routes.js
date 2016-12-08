import VueRouter from 'vue-router'
import Login from './components/Login'
import Hello from './components/Hello'

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/', name: 'home', component: Hello }
]

const router = new VueRouter({
  root: '/',
  // history: true,
  // mode: 'history',
  // saveScrollPosition: true,
  routes
})

export default router

