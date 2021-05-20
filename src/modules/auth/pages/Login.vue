<template>
  <div
    id="loginTemplate"
    class="vue-tempalte"
    style="background-image: url('images/vacas-pasto.jpg')"
  >
    <form class="vertical-center">
      <h3>Leite Seguro</h3>

      <div class="form-group" :class="{ 'form-group--error': $v.form.email.$error }">
        <label for="email" class="form-label">E-mail</label>
        <input
              id="email"
              type="email"
              class="form-control form-control-lg"
              v-model.trim="$v.form.email.$model"
            />
            <div v-if="$v.form.email.$error">
              <div class="error" v-if="!$v.form.email.required">
                Email é obrigatorio.
              </div>
              <div class="error" v-if="!$v.form.email.email">
                Email inválido
              </div>
            </div>
      </div>

      <div class="form-group" :class="{ 'form-group--error': $v.form.senha.$error }">
        <label>Senha</label>
        
        <input
              id="senha"
              type="password"
              class="form-control form-control-lg"
              v-model.trim="$v.form.senha.$model"
            />
            <div v-if="$v.form.senha.$error">
              <div class="error" v-if="!$v.form.senha.required">
                Senha é obrigatorio.
              </div>
              <div class="error" v-if="!$v.form.senha.minLength">
                Senha menor que 6 caracteres.
              </div>
            </div>
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
import {
  required,
  email,
  minLength,
} from "vuelidate/lib/validators";

export default {
  name: "Login",

  data() {
    return {
      form: {
        email: "",
        senha: "",
      },
    };
  },

  validations: {
    form: {
      email: {
        required,
        email,
      },
      senha: {
        required,
        minLength: minLength(6),
      },
    }
  },

  methods: {
    ...mapActions("auth", ["ActionLoginIn"]),
    async login() {
      this.$v.$touch();
      if (this.$v.$invalid) {
          console.log("Algo de errado não está certo*")
      } else {
        this.form.email = this.$v.form.$model.email;
        this.form.senha = this.$v.form.$model.senha;

        try {
          await this.ActionLoginIn(this.form).then((res) => {
            // console.log(res)
            this.$router.push({ name: 'Dashboard' })
          })
          .catch((err) => {
              console.log(err);
            });
        } catch(err) {
          console.log(err);
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