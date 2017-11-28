// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import insEleUi from './common/js/eleui.js'
import vueMsg from 'vue-message'

insEleUi()

// Vue.use(Element, { size: 'small' })
Vue.use(ElementUI)
Vue.use(vueMsg)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
