<template>
  <div class="container text-center">
    <img src="../assets/logo2.png">
    <br><br><br><br>
    <form id="input-form" class="form-horizontal">
      <div class="form-group">
        <label class="control-label col-md-3 col-md-offset-1">Email</label>
        <div class="col-md-5">
          <CredentialForm
            id="input-email"
            v-model="email"
            type="text"
            placeholder="fbm@fbm.com"
          />
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-md-3 col-md-offset-1">Password</label>
        <div class="col-md-5">
          <CredentialForm
            id="input-password"
            v-model="password"
            type="password"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-md-offset-5 col-md-4">
          <button
            type="button"
            class="btn btn-primary btn-block"
            @click="onLogin"
          >
          Login
          </button>
        </div>
      </div>
    </form>
    <ErrorMessage
      v-if="errorMessage"
      :message="errorMessage"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import CredentialForm from './elements/CredentialForm.vue';
import ErrorMessage from './elements/ErrorMessage.vue';


export default {
  name: 'Login',
  components: {
    CredentialForm,
    ErrorMessage,
  },
  data() {
    return {
      email: '',
      password: '',
      emailFrom: 'text',
      passwordFrom: 'password',
    };
  },
  computed: mapState('auth', [
    'errorMessage',
  ]),
  methods: {
    ...mapActions('auth', [
      'login',
    ]),

    onLogin() {
      this.login({
        email: this.email,
        password: this.password,
        router: this.$router,
      });
    },
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
