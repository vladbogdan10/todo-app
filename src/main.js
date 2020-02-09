import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:8000/todo'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
