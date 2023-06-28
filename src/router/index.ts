import { createRouter, createWebHistory } from 'vue-router';

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
})

export default router
