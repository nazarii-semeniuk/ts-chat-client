import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/',
      name: 'Main',
      component: () => import('../views/MainView.vue'),
      children: [
        {
          path: '',
          name: 'Select Chat',
          component: () => import('../views/SelectChatView.vue')
        },
        {
          path: 'chat/:chatId',
          name: 'Chat',
          component: () => import('../views/ChatView.vue')
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  if(!authRequired) {
    return next();
  }
  const userStore = useUserStore();
  const loggedIn = userStore.isLoggedIn;
  if(authRequired && !loggedIn) {
    return next('/login');
  }
  next();
});


export default router
