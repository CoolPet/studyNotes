// 配置路由的相关信息
import VueRouter from "vue-router"
import Vue from "vue"

// keep-alive 报错解决方案
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// import Home from "../components/Home.vue"
// import About from "../components/About.vue"
// import User from "../components/User.vue"

// 1.通过 Vue.use(插件),来安装插件
Vue.use(VueRouter)

// 2.创建 VueRouter 对象
// 不使用路由懒加载的配置文件
// const routes = [
//     {
//         path: "/",
//         // redirect 重定向
//         redirect: "/home"
//     },{
//         path: "/home",
//         component: Home
//     },{
//         path: "/about",
//         component: About
//     },{
//         path: "/user/:id",
//         component: User
//     }
// ]
// 路由懒加载的配置文件
const routes = [
    {
        path: "/",
        // redirect 重定向
        redirect: "/home"
    },{
        path: "/home",
        component:() => import("../components/Home.vue"),
        meta:{
            title: "首页"
        },
        children:[{
            path: "",
            redirect: "news"
        },{
            path: "news",
            component:() => import("../components/HomeNews.vue"),
            meta:{
                title: "新闻"
            }
        },{
            path: "message",
            component:() => import("../components/HomeMessage.vue"),
            meta:{
                title: "消息"
            }
        }]
    },{
        path: "/about",
        component:() => import("../components/About.vue"),
        meta:{
            title: "关于"
        },
        // 路由内独享的守卫
        beforeEnter:(to, from, next) => {
            // console.log("about beforeEach")
            next()
        }
    },{
        path: "/user/:id",
        component:() => import("../components/User.vue"),
        meta:{
            title: "用户"
        }
    },{
        path: "/profile",
        component:() => import("../components/Profile.vue"),
        meta:{
            title: "档案"
        }
    }
]
const router = new VueRouter({
    // 配置路由和组件之间的映射关系
    routes,
    // 网页地址的显示模式,默认模式是:hash
    mode:"history",
    linkActiveClass: "active"
})

// 前置钩子
router.beforeEach((to, from,next) => {
    // console.log("++++++++++++")
    // 在子路由中添加了 title 的属性
    document.title = to.meta.title
    // 没有在子路由中添加 title 属性
    // document.title = to.matched[0].meta.title
    next()  // next() 是固定需要的方法
})

// 后置钩子
router.afterEach((to, from) => {
    // console.log("------------")
})

// 3.将 router 对象传入到 Vue 实例中
export default router