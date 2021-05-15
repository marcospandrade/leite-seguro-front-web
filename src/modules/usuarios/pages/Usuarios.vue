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
            <button class="btn btn-info btn-sm btn-acoes">Alterar</button>
            <button class="btn btn-danger btn-sm btn-acoes">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
      isAdmin: function(value){
          if(value == "F"){
              return "Usuario"
          }
          if(value == "V"){
              return "Admin"
          }
      }
  },
  components: {
    HeaderInterno,
    FooterInterno,
  },
  data(){
      return{
      
      }
  },
  computed: {
    ...mapState("usuarios", ['usuariosRegistrados'])
  },
  methods: {
    ...mapActions("usuarios", ["ActionGetUsuariosRegistrados"]),
    teste() {
        console.log(this.usuariosRegistrados)
    }
  },
  mounted() {
    this.ActionGetUsuariosRegistrados();
  },
};
</script>

<style lang="scss" scoped>
    .btn-acoes{
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
</style>