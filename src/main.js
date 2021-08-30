<<<<<<< HEAD
import { createApp } from 'vue'
=======
import Vue from 'vue'
>>>>>>> 第三次更新
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
<<<<<<< HEAD
import 'amfe-flexible'
import './styles/index.less'
import 'vant/lib/index.css'
createApp(App).use(store).use(router).use(Vant).mount('#app')
=======
import axios from 'axios'
import './styles/index.less'
import 'vant/lib/index.css'
import 'amfe-flexible'

Vue.prototype.$axios = axios

Vue.use(Vant)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
>>>>>>> 第三次更新
