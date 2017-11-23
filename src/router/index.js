import Vue from 'vue';
import Router from 'vue-router';

import Auth from '@/store/modules/auth';

import Root from '@/components/Root';
import Login from '@/components/Login';
import Home from '@/components/Home';
import HomeIndex from '@/components/HomeIndex';
import Diary from '@/components/Diary/Diary';
import CreateDiary from '@/components/Diary/CreateDiary';
import ViewDiary from '@/components/Diary/ViewDiary';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Root,
      redirect: '/home/index',

      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login,
        },
        {
          path: 'home',
          name: 'Home',
          component: Home,
          meta: {
            requiresAuth: true,
          },

          children: [
            {
              path: 'index',
              name: 'HomeIndex',
              component: HomeIndex,
            },
            {
              path: 'diary',
              name: 'Diary',
              component: Diary,
            },
            {
              path: 'diary/new',
              name: 'CreateDiary',
              component: CreateDiary,
            },
            {
              path: 'diary/:diaryId',
              name: 'ViewDiary',
              component: ViewDiary,
            },
          ],
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !Auth.state.loggedIn) {
    next({
      path: '/login',
    });
  } else {
    next();
  }
});

export default router;
