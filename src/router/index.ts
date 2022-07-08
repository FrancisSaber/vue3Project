import { createRouter, createWebHashHistory } from 'vue-router';

// 加个type是为了说明引入了一个类型，也可以不加
import type { RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
