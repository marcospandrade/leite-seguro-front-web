<template>
  <div>
    <header-interno></header-interno>
    <div class="container">Relatorio works</div>
    <footer-interno></footer-interno>
  </div>
</template>

<script>
import HeaderInterno from "@/components/layoutInterno/Header";
import FooterInterno from "@/components/layoutInterno/Footer";

export default {
  name: "Relatorios",
  components: {
      HeaderInterno,
      FooterInterno
  }
};
</script>