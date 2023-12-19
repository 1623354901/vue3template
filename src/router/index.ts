import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
import {constantRoutes} from './router'
const router=createRouter({
  history:createWebHashHistory(),
  routes:constantRoutes as RouteRecordRaw[],
  scrollBehavior:()=>({left:0,top:0})
});

// 重置路由
export function resetRouter(){
  router.replace({path:'/login'});
  location.reload();
}
export default router;
router.beforeEach((to, from, next) => {
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else next()
  if (to.meta.requireAuth) next('notfound')
  next()
})

// 解析守卫刚好会在导航被确认之前、所有组件内守卫和异步路由组件被解析之后调用，可确保访问自定义meta属性
router.beforeResolve((to, from, next) => {
  next()
})

router.afterEach((to, from, failure) => {
})


