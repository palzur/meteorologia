import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/assets/css/main.css'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5'
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
}).$mount('#app')
