<template>
  <!-- Header Starts -->
  <header class="site-header d-none d-lg-block">
    <div class="container-fluid pl-lg--35 pr-lg--35">
      <div
        class="row justify-content-between align-items-center position-relative"
      >
        <div class="col-4 col-md-4 logo-safemilk">
          <a href="#">Leite Seguro</a>
        </div>
        <!-- Menu Block -->
        <div class="col-4 col-md-4">
          <div class="main-navigation">
            <ul class="main-menu">
              <li class="menu-item has-dropdown">
                <a href="#features">Sistema</a>
              </li>
              <li class="menu-item"><a href="#">Preços</a></li>

              <li class="menu-item"><a href="#">Ajuda</a></li>
            </ul>
          </div>
          <div class="mobile-menu"></div>
        </div>

        <!-- Button Block -->
        <div class="col-4 col-md-4">
          <div class="header-btns">
            <a href="#" class="btn btn-header">Registrar</a>
            <a href="#" class="btn btn-header">Entrar</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>