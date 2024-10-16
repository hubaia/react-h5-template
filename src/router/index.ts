import type { IRoute } from 'umi';

const route: IRoute[] = [
  {
    path: '/',
    component: '@/layout',
    routes: [
      {
        path: '/login',
        component: '@/pages/login',
        title: '登录',
      },
      {
        path: '/',
        component: '@/pages/home',
        title: '',
      },
    ],
  },
];

export default route;
