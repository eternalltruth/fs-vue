import { whiteList } from "@/config/white-list"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import router from "@/router"


router.beforeEach((to, from, next) => {
    NProgress.start()
    const token  = localStorage.getItem('token')
    if (token) {
        if(to.path === '/login'){
            next({path:'/'})
        } else {
            // 这块具体可以根据请求得来的角色 动态生成路由或者直接拿后台返回的路由生成
            next()
        }
    } else {
        // 如果没有 Token
    if (whiteList.indexOf(to.path) !== -1) {
        // 如果在免登录的白名单中，则直接进入
        next()
      } else {
        // 其他没有访问权限的页面将被重定向到登录页面
        next("/login")
        NProgress.done()
      }
    }

})


router.afterEach(() => {
    NProgress.done()
})
  