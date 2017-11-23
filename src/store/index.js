import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    endpointUrl: 'http://localhost:3000',
  },

  mutations: {
  },

  modules: {
    auth,
  },
});
