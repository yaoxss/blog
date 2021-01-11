import Vue from 'vue'
import App from './App.vue'
import router from './routers/index.js'
import '@/assets/icon/ali/iconfont.css'
import 'github-markdown-css/github-markdown.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
