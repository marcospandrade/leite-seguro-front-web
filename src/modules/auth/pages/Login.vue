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

      <div class="row" style="justify-content: center">
        <button @click.prevent="login" class="btn btn-entrar btn-lg">
          Entrar
        </button>
      </div>

      <p class="forgot-password text-center">
        <router-link to="recuperar-senha">Esqueceu sua senha?</router-link>
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
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      senha: "",
      form: {
        emailLogin: "",
        senhaLogin: "",
      },
    };
  },

  methods: {
    ...mapActions("auth", ["ActionLoginIn"]),
    login() {
      if (this.email == "" || this.senha == "") {
          console.log("Algo de errado não está certo* Campos Vazios")
      } else {
        this.form.emailLogin = this.email;
        this.form.senhaLogin = this.senha;
        this.$router.push({ name: 'Dashboard' })
        // try {
        //   this.ActionLoginIn(this.form)
        //     .then(() => {
        //       console.log("Deu certo");
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
        // } catch (err) {
        //   console.log(err);
        // }
      }
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