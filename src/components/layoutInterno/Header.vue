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
          </div>
        </div>
      </div>
      <div class="logout navbar-nav">
        <button class="nav-link logout-link" @click.prevent="logout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderInterno",

  methods: {
    logout(){
      this.$router.push({name: 'landing'})
    }
  }
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
  justify-content: right;
  text-align: right;
  margin: auto;
}
.logout-link {
  font-weight: bolder;
}
</style>