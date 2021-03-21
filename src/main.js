import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false


let data = {
  states: mock,
  currentState: {
    name: "initial",
    abbreviation: "UT"
  },
  copyright: "&#169 Michael Teuscher 2021"
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
