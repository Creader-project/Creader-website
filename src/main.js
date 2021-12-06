import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faInstagram, faFacebook, faYoutube, faLinkedin, faTwitter)
library.add(fas)

createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
