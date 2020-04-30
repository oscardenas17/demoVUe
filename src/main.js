import Vue from 'vue'
import App from './App.vue'
import router from './router'

//import para SCSS
require("./assets/scss/styles.scss")

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
