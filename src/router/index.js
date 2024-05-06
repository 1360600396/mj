import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/storage'

// 一级路由页面的导入
const Login = () => import('@/views/Login')
const Register = () => import('@/views/Register')
const Layout = () => import('@/views/Layout')
const Detail = () => import('@/views/Detail')

// 二级路由页面的导入
const Article = () => import('@/views/Article')
const Collect = () => import('@/views/Collect')
const Like = () => import('@/views/Like')
const User = () => import('@/views/User')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/article/:id', component: Detail },
    {
      path: '/',
      component: Layout,
      redirect: '/article',
      children: [
        { path: '/article', component: Article },
        { path: '/like', component: Like },
        { path: '/collect', component: Collect },
        { path: '/user', component: User }
      ]
    }
  ]
})

// 白名单(就是一个数组，数组收录所有无需登录即可访问的页面)
const whiteList = ['/login', '/register']

// 路由前置守卫
// 1. to 往哪去
// 2. from 从哪来
// 3. next 是否放行 next() 放行 next(路径) 拦截到某个页面
router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {
    // 如果有token，直接放行
    next()
  } else {
    // 没有token的人，看看要去哪
    // 判断访问的路径 to.path, 是否在白名单中
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
