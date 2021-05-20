<template>
  <div>
    <header-interno />
    <div class="container">
      <div class="text-center mt-4 mb-2">
        <h3>Usuários registrados</h3>
      </div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Documento</th>
            <th>Telefone</th>
            <th>Admin</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="usuario in usuariosRegistrados.leiteseguro_usuario"
            :key="usuario.idusuario"
          >
            <td>{{ usuario.idusuario }}</td>
            <td>{{ usuario.nome }}</td>
            <td>{{ usuario.cpf_cnpj }}</td>
            <td>{{ usuario.telefone }}</td>
            <td>{{ usuario.flagadmin | isAdmin }}</td>
            <td>
              <button
                class="btn btn-info btn-sm btn-acoes"
                @click.prevent="alterarUsuario()"
              >
                Alterar
              </button>
              <button
                class="btn btn-danger btn-sm btn-acoes"
                @click.prevent="abrirModal(usuario)"
              >
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <modal name="opa-modal">
      <div class="card" style="height: 100%">
        <div class="card-header text-center">
          <h2>Opa</h2>
        </div>
        <div class="card-body text-center" style="padding: 1rem">
          <h4>Tem certeza que deseja excluir o usuário?</h4>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col">
              <button
                class="btn btn-lg"
                @click.prevent="fecharModal('opa-modal')"
              >
                Voltar
              </button>
            </div>
            <div class="col" style="text-align: end">
              <button class="btn btn-danger btn-lg" @click="excluirUsuario()">
                Excluir
              </button>
            </div>
          </div>
        </div>
      </div>
    </modal>

    <modal name="sucesso-modal">
      <div class="card" style="height: 100%">
        <div class="card-header text-center">
          <h2>Sucesso</h2>
        </div>
        <div class="card-body text-center" style="padding: 1rem">
          <h4>Usuário deletado com sucesso!</h4>
        </div>
        <div class="card-footer">
          <div class="row text-center">
            <button
              class="btn btn-lg"
              @click.prevent="fecharModal('sucesso-modal')"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </modal>

    <modal name="erro-modal">
      <div class="card" style="height: 100%">
        <div class="card-header text-center">
          <h2>Erro</h2>
        </div>
        <div class="card-body text-center" style="padding: 1rem">
          <h4>Não foi possível deletar o usuário!</h4>
        </div>
        <div class="card-footer">
          <div class="row text-center">
            <button
              class="btn btn-lg"
              @click.prevent="fecharModal('erro-modal')"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </modal>

    <footer-interno />
  </div>
</template>

<script>
import HeaderInterno from "@/components/layoutInterno/Header";
import FooterInterno from "@/components/layoutInterno/Footer";
import { mapActions, mapState } from "vuex";

export default {
  name: "Usuarios",
  filters: {
    isAdmin: function (value) {
      if (value == "F") {
        return "Usuario";
      }
      if (value == "V") {
        return "Admin";
      }
    },
  },
  components: {
    HeaderInterno,
    FooterInterno,
  },
  data() {
    return {
      usuarioDeletar: {
        idusuario: "",
      },
    };
  },
  computed: {
    ...mapState("usuarios", ["usuariosRegistrados"]),
  },
  methods: {
    ...mapActions("usuarios", [
      "ActionGetUsuariosRegistrados",
      "ActionDeletarUsuario",
    ]),
    abrirModal(usuario) {
      this.usuarioDeletar.idusuario = usuario.idusuario;
      this.$modal.show("opa-modal");
    },
    excluirUsuario() {
      this.$modal.hide("opa-modal");
      console.log(this.usuarioDeletar);
      this.ActionDeletarUsuario(this.usuarioDeletar)
        .then(() => {
          this.$modal.show("sucesso-modal");
            this.carregarUsuarios();
        })
        .catch((err) => {
          console.log(err);
          this.$modal.show("erro-modal");
        });
    },
    fecharModal(nomeModal) {
      this.$modal.hide(nomeModal);
      this.usuarioDeletar = {};
    },
    async carregarUsuarios(){
      await this.ActionGetUsuariosRegistrados();
    }
  },
  mounted() {
    this.ActionGetUsuariosRegistrados();
  },
};
</script>

<style lang="scss" scoped>
.btn-acoes {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>