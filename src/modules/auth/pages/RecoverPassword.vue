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
          v-model="formRecuperarSenha.emailRecuperarSenha"
        />
      </div>

      <div class="row" style="justify-content: center">
        <div @click.prevent="recoverPassword" class="btn btn-entrar btn-lg">
          Recuperar senha
        </div>
      </div>

      <p class="forgot-password text-center">
        <router-link to="/login">Já tem uma conta?</router-link>
      </p>

      <div class="rodapeLogin">
        <div class="row">
          <div class="col-12">
            <router-link to="/">
              <button class="btn btn-registrar">Voltar</button>
            </router-link>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RecuperarSenha",
  data() {
    return {
        formRecuperarSenha: {
            emailRecuperarSenha: "",
        }
    };
  },
  methods: {
    recoverPassword() {
      console.log("Recuperação de senha");
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