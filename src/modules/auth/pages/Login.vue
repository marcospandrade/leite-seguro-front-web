<template>
  <div
    id="loginTemplate"
    class="vue-tempalte"
    style="background-image: url('images/vacas-pasto.jpg')"
  >
    <form class="vertical-center">
      <h3>Leite Seguro</h3>

      <div class="form-group">
        <label>E-mail</label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="email"
        />
      </div>

      <div class="form-group">
        <label>Senha</label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="senha"
        />
      </div>

      <div class="row" style="justify-content: center;">
        <button @click="login()" class="btn btn-entrar btn-lg">
          Entrar
        </button>
      </div>

      <p class="forgot-password text-center">
        <router-link to="/forgot-password">Esqueceu sua senha?</router-link>
      </p>

      <div class="rodapeLogin">
        <div class="row">
          <div class="col-6">
            <router-link to="/">
              <button class="btn btn-registrar">Voltar</button>
            </router-link>
          </div>
          <div class="col-6">
            <router-link to="register">
              <button class="btn btn-registrar">Cadastre-se</button>
            </router-link>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        email: "",
        senha: "",
      },
    };
  },

  methods: {
    login() {
      alert("Login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/login.scss";

.vue-tempalte {
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>