import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueRouter from 'vue-router';
import VueRescource from 'vue-resource';
import routes from './routes';

Vue.config.debug = true;

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueRescource);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})



const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

/*
new Vue({

  el: '#app',
  render: h => h(App)
})
*/
