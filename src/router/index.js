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
import author_login from "../views/author_center/author_login.vue";
import author_chapter_list from "../views/author_center/Book/novel/author_chapter_list.vue";
import author_centre_view from "../views/author_center/author_centre_view.vue";
import dashboard from "../views/author_center/workbench/dashboard.vue";
import top_nav from "../views/author_center/component/top_nav.vue";
import left_nav from "../views/author_center/component/left_nav.vue";
import author_case from "../views/author_center/Book/author_case.vue";
import author_setting from "../views/author_center/author_info/author_setting.vue";
import book_create from "../views/author_center/Book/book_create.vue";
import book_list_head from "../views/author_center/Book/novel/component/book_list_head.vue";
import author_chapter_exist from "../views/author_center/Book/novel/author_chapter_exist.vue";
import chapter_create_head from "../views/author_center/Book/novel/component/chapter_create_head.vue";
import author_chapter_create from "../views/author_center/Book/novel/author_chapter_create.vue";
import author_novel_setting from "../views/author_center/Book/novel/author_novel_setting.vue";
import book_create_header from "../views/author_center/Book/novel/component/book_create_header.vue";
import author_setting_header from "../views/author_center/author_info/author_setting_header.vue";
import book_setting_head from "../views/author_center/Book/novel/component/book_setting_head.vue";

// import store from '../store/index'

const routes = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ y: 0 }),
    routes: [
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
            path: '/author/login',
            name: 'Author_create',
            component: () => import('../views/author_center/author_login.vue'),
            meta: {
                requireLogin: true
            }
        },
        {
            path: '/authorManagement',
            type: 'author',
            name: 'author',
            redirect: '/novel/dashboard',
            component: author_centre_view,
            children: [
                {
                    path: '/novel/dashboard',
                    name: 'Author Home',
                    components: {
                        content: dashboard,
                        top: top_nav,
                        aside: left_nav
                    },
                    leaf: true,
                    iconCls: 'el-icon-s-home',
                    menuShow: true,
                    meta: {
                        title: 'Author centre',
                        need_log: true
                    }
                },
                {
                    path: '/novel/readerdashboard',
                    name: 'Reader Data',
                    components: {
                        content: user_setting,
                        top: top_nav,
                        aside: left_nav
                    },
                    leaf: true,
                    iconCls: 'el-icon-user-solid',
                    menuShow: true,
                    meta: {
                        title: 'Author dashboard',
                        need_log: true
                    }
                }
            ]
        },
        {
            path: '/storyManagement',
            type: 'story',
            name: 'story',
            redirect: '/novel/list',
            component: author_centre_view,
            children: [{
                path: '/novel/list',
                name: 'Novel_list',
                components: {
                    content: author_case,
                    top: top_nav,
                    aside: left_nav
                },
                leaf: true,
                menuShow: false,
                props: true,
                meta: {
                    title: 'Author Book',
                    need_log: true
                }
            }, {
                path: '/author/setting',
                name: 'author_setting',
                components: {
                    content: author_setting,
                    top: author_setting_header,
                    aside: left_nav
                },
                leaf: true,
                menuShow: false,
                props: true,
                meta: {
                    title: 'Author setting',
                    need_log: true
                }
            },
                {
                    path: '/novel/create',
                    name: 'New_novel',
                    components: {
                        content: book_create,
                        top: book_create_header,
                        aside: left_nav
                    },
                    leaf: true,
                    menuShow: false,
                    meta: {
                        title: ' Author Novel create',
                        need_log: true
                    }

                },
                {
                    path: '/novel/chapter/:book_id',
                    name: 'chapter_view',
                    components: {
                        content: author_chapter_list,
                        top: book_list_head,
                        aside: left_nav
                    },
                    leaf: true,
                    menuShow: false,
                    props: true,
                    meta: {
                        title: 'Author Novel chapter',
                        need_log: true
                    }
                },
                {
                    path: '/novel/chapter/:book_id/:chapter_id',
                    name: 'chapter_retrieve',
                    components: {
                        content: author_chapter_exist,
                        top: chapter_create_head,
                        aside: left_nav
                    },
                    leaf: true,
                    menuShow: false,
                    meta: {
                        title: 'Author chapter view',
                        need_log: true
                    }
                }, {
                    path: '/novel/chapter/create/:book_id',
                    name: 'chapter_create',
                    components: {
                        content: author_chapter_create,
                        top: chapter_create_head,
                        aside: left_nav
                    },
                    leaf: true,
                    menuShow: false,
                    meta: {
                        title: 'Author chapter create',
                        need_log: true
                    }
                },
                {
                    path: '/novel/book/setting',
                    name: 'book_setting',
                    components: {
                        content: author_novel_setting,
                        top: book_setting_head,
                        aside: left_nav
                    },
                    leaf: true,
                    menuShow: false,
                    meta: {
                        title: 'Author Novel setting',
                        need_log: true
                    }
                }]
        },
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
                    name: 'd',
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
                {
                    path: '/:pathMatch(.*)*',
                    name: 'NotFound',
                    components: {
                        header: header_two,
                        content:Bad_request,
                        footer: Footer_component
                    }
                }
            ]
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
