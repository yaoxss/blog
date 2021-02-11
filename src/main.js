import Vue from 'vue'
import App from './App.vue'
import router from './routers/index.js'
import '@/assets/icon/ali/iconfont.css'
import 'github-markdown-css/github-markdown.css'
// 使用这个会有不推荐
// import '@/config/mockjs.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
