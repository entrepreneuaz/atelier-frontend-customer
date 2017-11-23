import backend from '@/helpers/backend';


export default {
  namespaced: true,
  state: {
    loggedIn: false,
    authToken: '',
    errorMessage: '',
  },

  mutations: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
    setToken(state, token) {
      state.authToken = token;
      backend.defaults.headers.common.Authorization = `token ${token}`;
    },
    setError(state, errorMessage) {
      state.errorMessage = errorMessage;
    },
  },

  actions: {
    login({ commit }, payload) {
      backend.post('/accounts/login', {
        email: payload.email,
        password: payload.password,
      }).then((response) => {
        commit('login');
        commit('setToken', response.data.sessionToken);
        payload.router.push('/home/index');
      }).catch((err) => {
        commit('setError', err.response.data.message);
      });
    },
  },
};
