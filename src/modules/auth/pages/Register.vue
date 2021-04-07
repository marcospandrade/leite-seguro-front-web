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
          v-model="formRegistro.email"
        />
      </div>

      <div class="form-group">
        <label>Senha</label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="formRegistro.senhaRegistro"
        />
      </div>

      <div class="form-group">
        <label>Confirmar Senha</label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="formRegistro.confirmarSenhaRegistro"
        />
      </div>

      <div class="row" style="justify-content: center">
        <div @click.prevent="register" class="btn btn-entrar btn-lg">
          Cadastrar
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
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      formRegistro: {
        emailRegistro: "",
        senhaRegistro: "",
        confirmarSenhaRegistro: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["ActionRegister"]),
    async register() {
      if (
        this.formRegistro.emailRegistro == "" ||
        this.formRegistro.senhaRegistro == "" ||
        this.formRegistro.confirmarSenhaRegistro == ""
      ) {
        if (
          this.formRegistro.senhaRegistro ===
          this.formRegistro.confirmarSenhaRegistro
        ) {
          try {
            await this.ActionRegister(this.formRegistro).then(() => {
                console.log("Deu certo o registro")
            })
          } catch (err) {
            console.log("try catch");
            console.log(err);
          }
        }
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