import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import AdminLogin from '../views/AdminLogin.vue'
import AdminDashboard from '../views/AdminDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/superuser',
    name: 'Login',
    component: AdminLogin
  },
  {
    path: '/superuser/dashboard',
    name: 'Dashboard',
    component: AdminDashboard,
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem('admin_auth') === 'true') {
        next()
      } else {
        next('/superuser')
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
