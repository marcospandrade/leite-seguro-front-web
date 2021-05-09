<template>
  <footer class="footer">
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
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 10vh;
  width: 100%;
  background-image: linear-gradient(-45deg, #152649 0%, #4f525c 100%);
}

.footer-leite-seguro {
  font-weight: bolder;
  color:white;
}

</style>