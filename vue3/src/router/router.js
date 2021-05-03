import Vue from 'vue';
import Router from 'vue-router';
import routerPath from './routerPath';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        { path: routerPath.HOME, component: () => import('../page/Home.vue')},
        { path: routerPath.LOGIN},
        { path: routerPath.NOTICE},
        { path: routerPath.COMUNITY},
        { path: routerPath.MYPAGE},
        { path: '*' , redirect: routerPath.HOME }
    ]
});


router.beforeEach(async (to, _from, next) => {

    console.log(to);

    next();
});

export default router;