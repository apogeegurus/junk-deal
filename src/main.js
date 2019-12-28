import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import VueCarousel from 'vue-carousel';

import DefaultLayout from './layouts/Default';
import AdminLayout from './layouts/Admin';
import NoLayout from './layouts/NoLayout';
import './scss/main.scss';
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.component('default-layout', DefaultLayout);
Vue.component('admin-layout', AdminLayout);
Vue.component('no-layout', NoLayout);
Vue.use(BootstrapVue);
Vue.use(VueCarousel);
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: 'veeFields',
  errorBagName: 'veeErrors'
});

Vue.config.productionTip = process.env.VUE_APP_PROD;

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app');
