<template>
  <div
    id="registerTemplate"
    class="vue-tempalte"
    style="background-image: url('images/vacas-pasto.jpg')"
  >
    <form class="vertical-center needs-validation">
      <h3>Leite Seguro</h3>

      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div
            class="form-group"
            :class="{ 'form-group-error': $v.formRegistro.nome.$error }"
          >
            <label for="nome" class="form-label">Nome</label>
            <input
              id="nome"
              type="text"
              class="form-control"
              v-model.trim="$v.formRegistro.nome.$model"
            />
            <div v-if="$v.formRegistro.nome.$error">
              <div class="error" v-if="!$v.formRegistro.nome.required">
                Nome é obrigatório.
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.formRegistro.telefone.$error }"
          >
            <label for="telefone" class="form-label">Telefone</label>
            <input
              id="telefone"
              type="text"
              class="form-control"
              v-mask="'(##) #####-####'"
              v-model.trim="$v.formRegistro.telefone.$model"
              @blur="validateHelper.telLength = true"
                
            />
            <div v-if="$v.formRegistro.telefone.$error">
              <div class="error" v-if="!$v.formRegistro.telefone.required">
                Telefone é obrigatorio.
              </div>
              <div class="error" id="telLength" v-if="(validateHelper.telLength) && (!$v.formRegistro.telefone.minLength)">
                Deve conter 11 dígitos.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div
            class="form-group"
            :class="{ 'form-group-error': $v.formRegistro.cpf_cnpj.$error }"
          >
            <label for="documento" class="form-label">CPF / CNPJ</label>
            <input
              id="cpf_cnpj"
              type="text"
              class="form-control"
              v-mask="
                formRegistro.cpf_cnpj.length > 14
                  ? '##.###.###/####-##'
                  : '###.###.###-##'
              "
              v-model.trim="$v.formRegistro.cpf_cnpj.$model"
              @blur="validateHelper.cpf_cnpjLength = true"
            />
            <div v-if="$v.formRegistro.cpf_cnpj.$error">
              <div class="error" v-if="!$v.formRegistro.cpf_cnpj.required">
                Insira o número do documento.
              </div>
              <div class="error" v-if="(!$v.formRegistro.cpf_cnpj.minLength) && (validateHelper.cpf_cnpjLength)">
                No mínimo 11 dígitos.
              </div>
              <div class="error" v-if="!$v.formRegistro.cpf_cnpj.maxLength">
                No máximo 14 dígitos.
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.formRegistro.email.$error }"
          >
            <label for="email" class="form-label">Email</label>
            <input
              id="email"
              type="email"
              class="form-control"
              v-model.trim="$v.formRegistro.email.$model"
              @blur="validateHelper.emailValido = true"
            />
            <div v-if="$v.formRegistro.email.$error">
              <div class="error" v-if="!$v.formRegistro.email.required">
                Email é obrigatorio.
              </div>
              <div class="error" v-if="(!$v.formRegistro.email.email) && (validateHelper.emailValido)">
                Email inválido
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.formRegistro.senha.$error }"
          >
            <label for="senha" class="form-label">Senha</label>
            <input
              id="senha"
              type="password"
              class="form-control"
              v-model.trim="$v.formRegistro.senha.$model"
              @blur="validateHelper.senhaLength = true"
            />
            <div v-if="$v.formRegistro.senha.$error">
              <div class="error" v-if="!$v.formRegistro.senha.required">
                Campo obrigatório.
              </div>
              <div class="error" v-if="(!$v.formRegistro.senha.minLength) && (validateHelper.senhaLength)">
                A senha deve conter no mínimo 6 caracteres.
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-sm-12">
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.confirmarSenha.$error }"
          >
            <label for="confirmar-senha" class="form-label"
              >Confirmar Senha</label
            >
            <input
              id="confirmar-senha"
              type="password"
              class="form-control"
              v-model.trim="$v.confirmarSenha.$model"
              @blur="validateHelper.senhasIguais = true"
            />
            <div v-if="$v.confirmarSenha.$error">
              <div class="error" v-if="!$v.confirmarSenha.required">
                Confirmar Senha é obrigatorio.
              </div>
              <div class="error" v-if="(!$v.confirmarSenha.sameAsSenha) && (validateHelper.senhasIguais)">
                As senhas devem ser iguais.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" style="justify-content: center">
        <div @click.prevent="register" class="btn btn-entrar btn-md">
          Cadastrar
        </div>
      </div>

      <p class="forgot-password text-center">
        <router-link to="recuperar-senha"
          >Tem conta e esqueceu a senha?</router-link
        >
      </p>

      <div class="rodapeLogin">
        <div class="row">
          <div class="col-6">
            <router-link to="/">
              <button class="btn btn-registrar">Voltar</button>
            </router-link>
          </div>
          <div class="col-6">
            <router-link to="/login">
              <button class="btn btn-registrar">Já tem conta?</button>
            </router-link>
          </div>
        </div>
      </div>
    </form>
    <modal name="success-modal" :adaptive="true">
      <div>Deu tudo certo, meu chegado.</div>
    </modal>

    <modal name="error-modal" :adaptive="true">
      Algo de errado não deu certo.
    </modal>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  sameAs,
  maxLength,
} from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      formRegistro: {
        nome: "",
        telefone: "",
        cpf_cnpj: "",
        email: "",
        senha: "",
      },
      //  User usuarioParaRegistro:
      confirmarSenha: "",

      validateHelper: {
        telLength: false,
        cpf_cnpjLength: false,
        emailValido: false,
        senhaLength: false,
        senhasIguais: false
      }
      
    };
  },
  validations: {
    formRegistro: {
      nome: {
        required,
      },
      telefone: {
        required,
        minLength: minLength(15),
      },
      cpf_cnpj: {
        required,
        minLength: minLength(14),
        maxLength: maxLength(18),
      },
      email: {
        required,
        email,
      },
      senha: {
        required,
        minLength: minLength(8),
      },
    },
    confirmarSenha: {
      required,
      sameAsSenha: sameAs(function () {
        return this.formRegistro.senha;
      }),
    },
  },
  mounted() {},
  methods: {
    ...mapActions("auth", ["ActionRegister"]),
    async register() {
      this.formRegistro.cpf_cnpj = this.formRegistro.cpf_cnpj.replaceAll(/[./-]/g, '')
      if (!this.$v.$invalid) {
        try {
          // Tratamento do campo de CPF/CNPJ usando classe de caracteres
          

          await this.ActionRegister(this.formRegistro).then(() => {
            console.log("Passou a validação")
            this.$modal.show("success-modal");
          });
        } catch (err) {
          this.$modal.show("error-modal");
          console.log(err);
        }
        this.$router.push({ name: "Login" });
      } else {
        this.$modal.show("error-modal");
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