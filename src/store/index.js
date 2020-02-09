import Vue from 'vue'
import Vuex from 'vuex'
import Site from './modules/site';
import Location from './modules/locations';
import Service from './modules/services';
import Testimonials from './modules/testimonials';
import Sliders from './modules/sliders';
import Videos from './modules/videos';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Site,
    Service,
    Location,
    Testimonials,
    Sliders,
    Videos
  }
})
