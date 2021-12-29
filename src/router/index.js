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
import Footer_component from "../components/footer_component.vue";
import header_two from "../components/header_two.vue";
import base_view from "../base_view.vue";

// import store from '../store/index'

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home_v1',
            component: base_view,
            redirect: 'index',
            children: [
                {
                    path: '/',
                    name: 'Home',
                    components: {
                        header: header_two,
                        content:Home_v1,
                        footer: Footer_component
                    }
                },
                {
                    path: '/:pathMatch(.*)*',
                    name: 'NotFound',
                    components: {
                        header: header_two,
                        content:Bad_request,
                        footer: Footer_component
                    }
                },
                {
                    path: '/login',
                    name: 'login',
                    components: {
                        header: header_two,
                        content:login,
                        footer: Footer_component
                    }
                },
                {
                    path: '/register',
                    name: 'register',
                    components: {
                        header: header_two,
                        content:registration,
                        footer: Footer_component
                    }
                },
                {
                    path: '/book/:id',
                    name: 'book_detail',
                    components: {
                        header: header_two,
                        content:book_detail,
                        footer: Footer_component
                    },
                    props: true

                },
                {
                    path: '/about/',
                    name: 'about',
                    components: {
                        header: header_two,
                        content:about_us,
                        footer: Footer_component
                    },
                },
                {
                    path: '/book/:book_id/:id',
                    name: 'chapter_detail',
                    components: {
                        header: header_two,
                        content:chapter_detail,
                        footer: Footer_component
                    },
                    props: true,
                    meta: {
                        title: 'Chapter',
                        need_log: false
                    }
                },
                {
                    path: '/bookcase/:id',
                    name: 'user_home',
                    props: true,
                    components: {
                        header: header_two,
                        content: user_home,
                        footer: Footer_component
                    },
                    children: [
                        {
                            path: '/bookcase/:id',
                            name: 'bookcase',
                            alis:'',
                            component:user_book_case
                        }, {
                            path: '/bookcase/:id/inbox',
                            name: 'inbox',
                            component: user_inbox
                        }, {
                            path: '/bookcase/:id/statement',
                            name: 'statement',
                            components: user_statement
                        },
                    ]

                },
                {
                    path: '/settings',
                    name: 'user_setting',
                    components: {
                        header: header_two,
                        content: user_setting,
                        footer: Footer_component
                    },
                },
            ]
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


        // {
        //     path: '/bookcase/',
        //     name: 'bookcase',
        //     component: user_book_case,
        // },

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
