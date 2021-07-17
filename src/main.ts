import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCompositionAPI from 'vue'

// Vue.use(VueCompositionAPI)

// new Vue({
//     router,
//     store,
//     vuetify,
//     render: h => h(App)
// }).$mount('#app')

import { createApp } from 'vue'

createApp(App).use(router).use(store).use(vuetify).mount('#app')
