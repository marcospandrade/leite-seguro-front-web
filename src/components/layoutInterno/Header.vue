<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Leite Seguro</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" id="navbarNav">
          <div class="row">
            <router-link to="/dashboard" aria-current="page" class="nav-link"
              >Dashboard</router-link
            >
            <router-link to="/perfil" class="nav-link">Perfil</router-link>
            <router-link to="/relatorios" class="nav-link"
              >Relatórios</router-link
            >
            <router-link to="/usuarios" class="nav-link">Usuários</router-link>
            <router-link to="/questionarios" class="nav-link">
              Questionários
            </router-link>
          </div>
        </div>
        <div class="logout navbar-nav">
          <button
            class="nav-link logout-link"
            @click.prevent="abrirModal('logout-modal')"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
    <modal name="logout-modal">
      <div class="card" style="height: 100%">
        <div class="card-header text-center">
          <h2>Opa</h2>
        </div>
        <div class="card-body text-center" style="padding: 1rem">
          <h4>Tem certeza que deseja sair do sistema?</h4>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col">
              <button
                class="btn btn-lg"
                @click.prevent="fecharModal('logout-modal')"
              >
                Voltar
              </button>
            </div>
            <div class="col" style="text-align: end">
              <button class="btn btn-info btn-lg" @click.prevent="logout()">
                Sair
              </button>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </nav>
</template>

<script>
export default {
  name: "HeaderInterno",

  methods: {
    fecharModal(modal) {
      this.$modal.hide(modal);
    },
    abrirModal(modal) {
      this.$modal.show("logout-modal");
    },
    logout() {
      this.$router.push({ name: "landing" });
    },
  },
};
</script>

<style lang="scss" scoped>
#navbarNav {
  margin-left: 2vw;
  display: inline-flex;
}

.navbar {
  background-color: #0b6e4f;
}

.navbar-brand {
  margin: 0vh 2vw;
}

.logout {
  justify-content: end;
  text-align: end;
  margin-left: auto;
}
.logout-link {
  font-weight: bolder;
}
</style>