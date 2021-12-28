import {createRouter, createWebHistory} from 'vue-router'
import Home_v1 from '../views/Home_v1.vue'
import author_book_create from "../views/components/author_book_create.vue";
import book_detail from "../views/book_page/book_detail.vue";
import about_us from "../views/ultility/about_us.vue";
import login from "../views/Login.vue"
import user_book_case from "../views/user_center/component/user_book_case.vue";
import bad_request from "../views/ultility/Bad_request.vue";
import Bad_request from "../views/ultility/Bad_request.vue";
import user_home from "../views/user_center/user_home.vue";
import user_setting from "../views/user_center/component/user_setting.vue";
import registration from "../views/registration.vue";
import user_inbox from "../views/user_center/component/user_inbox.vue";
import user_statement from "../views/user_center/component/user_statement.vue";
import chapter_detail from "../views/book_page/chapter_detail.vue";
// import store from '../store/index'

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home_v1',
            component: Home_v1
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: Bad_request
        },
        {
            path: '/404_bad_request',
            name: 'bad_request',
            component: bad_request
        },
        {
            path: '/login',
            name: 'Login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: login
        },
        {
            path: '/register',
            name: 'Register',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: registration
        },
        {
            path: '/payment/success',
            name: 'Payment_success',
            component: () => import('../views/payment/Plan_success.vue'),
            meta: {
                requireLogin: true
            }
        },
        {
            path: '/plan/',
            name: 'Payment',
            component: () => import('../views/payment/plan.vue'),
            meta: {
                requireLogin: true
            }
        },
        {
            path: '/author/create',
            name: 'Author_create',
            component: author_book_create,
            meta: {
                requireLogin: true
            }
        },
        {
            path: '/book/:id',
            name: 'book_detail',
            component: book_detail,
            props: true

        },
        {
            path: '/about/',
            name: 'about',
            component: about_us,
        },
        // {
        //     path: '/chapter/',
        //     name: 'chapter',
        //     props: true,
        //     component: book_chatper,
        //     meta: {
        //         requireLogin: true
        //     }
        // },
        {
            component: chapter_detail,
            path: '/book/:book_id/:id',
            name: 'chapter_detail',
            props: true,
            meta: {
                title: 'Chapter',
                need_log: false
            }
        },
        {
            path: '/profile/',
            name: 'user_home',
            component: user_home,
            children: [
                {
                    path: '',
                    name: 'bookcase',
                    alias: '/bookcase/',
                    components: {
                        content: user_book_case
                    },
                }, {
                    path: '/inbox/',
                    name: 'inbox',
                    alias: '/inbox/',
                    components: {
                        content: user_inbox
                    },
                }, {
                    path: '/statement/',
                    name: 'statement',
                    alias: '/statement/',
                    components: {
                        content: user_statement
                    },
                },
            ]

        },
        // {
        //     path: '/bookcase/',
        //     name: 'bookcase',
        //     component: user_book_case,
        // },
        {
            path: '/settings',
            name: 'user_setting',
            component: user_setting,
        },

    ]
})

// routes.beforeEach((to, from, next) => {
//     if (to.meta.requireLogin && !store.state.isAuthenticated) {
//         console.log('login please')
//         next('/login')
//     } else {
//         next()
//     }
// })
export default routes;
