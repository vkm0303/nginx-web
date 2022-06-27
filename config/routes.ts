export default [
  {
    path: '/login',
    name: '登录',
    component: '@/pages/Login',
    hideInMenu: true,
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: '首页',
    // wrappers: ['@/wrappers/auth'],
    component: '@/pages/Dashboard/index',
  },
  {
    path: '/project-config',
    name: '项目配置',
    // wrappers: ['@/wrappers/auth'],
    component: '@/pages/ProjectConfig/index',
  },
  { component: '@/pages/404' },
];
