import Vue from 'vue'
import Router from 'vue-router'
import DashboardRoutes from './dashboard';
import AdminRoutes from './admin';

Vue.use(Router);


const MAIN_ROUTES = [
    {path: '/', name: 'home',       component: () => import('../views/Home'),               meta: { title : 'Home' }},
    {path: '/contact', name: 'contact',    component: () => import('../views/Contact'),            meta: { title : 'Contact' }},
    {path: '/blogs', name: 'blogs',    component: () => import('../views/Blog/Index'),            meta: { title : 'Blogs' }},
    {path: '/blogs/:slug', name: 'blogShow',    component: () => import('../views/Blog/Show'),            meta: { title : 'Blog' }},
    {path: '/services/:slug', name: 'services',    component: () => import('../views/Service'),            meta: { title : 'Service' }},
    {path: '/thank-you', name: 'thankyou',    component: () => import('../views/ThankYou'),            meta: { title : 'Thank You' }},
    {path: '/locations', name: 'locations',    component: () => import('../views/Location/Index'),            meta: { title : 'Locations' }},
    {path: '/locations/:slug', name: 'location',    component: () => import('../views/Location/Show'),            meta: { title : 'Location' }},
    {path: '/about-us', name: 'about',    component: () => import('../views/About'),            meta: { title : 'About' }},
    {path: '*', name: 'error404',   component: () => import('../views/Errors/Error404'),    meta: { title : '404' }},
];

const ROUTES = [
    ...DashboardRoutes,
    ...AdminRoutes,
    ...MAIN_ROUTES
];

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: ROUTES,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});


router.beforeEach((to, from, next) => {
    document.title = process.env.VUE_APP_NAME + ` ${to.meta.title ? ' - ' + to.meta.title : ''}`;

    let requiresAuth  = to.meta.requiresAuth;
    let adminToken    = localStorage.getItem('authorization');

    if(requiresAuth && adminToken === null) next({name : 'login'});
    else if(!requiresAuth && adminToken !== null) next({name : 'dashboard'});
    else next();
});

export default router;