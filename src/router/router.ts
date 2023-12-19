import {RouteRecordRaw} from 'vue-router'

// export const Layout =()=>import('@/layout/index.vue');
// 静态路由
export const constantRoutes:RouteRecordRaw[]=[
  // {
  //   path:'/redirect',
  //   component:Layout,
  //   meta:{hidden:true},
  //   children:[
  //     {
  //       path:'/redirect/:path(.*)',
  //       component:()=>import('@/views/redirect/index.vue')
  //     }
  //   ]
  // },
  // {
  //   path:'/login',
  //   component:()=>import('@/views/login/index.vue')
  // },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: () => import('@/views/dashboard/index.vue'),
  //       name: 'Dashboard',
  //       meta: { title: 'dashboard', icon: 'homepage', affix: true }
  //     }
  //   ]
  // }
]