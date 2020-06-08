import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import DefaultLayout from './layouts/Default';
import AdminLayout from './layouts/Admin';
import NoLayout from './layouts/NoLayout';
import Loader from './components/Loader';
import './scss/main.scss';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Snotify, { SnotifyPosition } from 'vue-snotify'

Vue.mixin({
  data() {
    return {
      refreshTimeout: false
    }
  },
  methods: {
    chunk(array, size) {
      const chunked_arr = [];
      let copied = [...array]; // ES6 destructuring
      const numOfChild = Math.ceil(copied.length / size); // Round up to the nearest integer
      for (let i = 0; i < numOfChild; i++) {
        chunked_arr.push(copied.splice(0, size));
      }
      return chunked_arr;
    }
  },
  updated() {
    clearTimeout(this.refreshTimeout);
    this.refreshTimeout = setTimeout(function() { AOS.refresh(); }, 300);
  },
});
Vue.component('default-layout', DefaultLayout);
Vue.component('admin-layout', AdminLayout);
Vue.component('no-layout', NoLayout);
Vue.component('loader', Loader);
Vue.use(require('vue-moment'));
Vue.use(BootstrapVue);
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: 'veeFields',
  errorBagName: 'veeErrors',
  dictionary: {
    en: {
      messages: {
        required: (field, args) => `* required`,
      }
    }
  }
});

const options = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}

Vue.use(Snotify, options);

Vue.config.productionTip = process.env.VUE_APP_PROD;

new Vue({
  created () {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app');
