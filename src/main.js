import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AxiosPlugin from  "./plugins/AxiosPlugin.js";
import store from './store'
import vuetify from './plugins/vuetify'
import colors from 'vuetify/lib/util/colors'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart,faCompass, faPlusSquare, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faHouseUser, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart,faCompass,faPlusSquare,faPaperPlane,faHouseUser,faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// -------------




Vue.use(AxiosPlugin);
Vue.use(vuetify);

Vue.config.productionTip = false

new Vue({
    router,
    axios,
    VueAxios,
    store,
    vuetify,
    colors,
    render: h => h(App)
}).$mount('#app')
