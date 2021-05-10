<template>
  <footer class="footer mt-auto">
    <div class="container text-center mt-3">
      <h5 class="footer-leite-seguro">Leite Seguro 2021</h5>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterInterno",
};
</script>

<style>
.footer {
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-image: linear-gradient(-45deg, #152649 0%, #4f525c 100%);
}

.footer-leite-seguro {
  padding-top: 3vh;
  font-weight: bolder;
  color: white;
}
</style>