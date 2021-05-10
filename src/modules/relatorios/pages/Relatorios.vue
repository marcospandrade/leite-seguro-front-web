<template>
  <div>
    <header-interno></header-interno>

    <div class="container" id="div-relatorio">
      <h3> Acompanhe os relatórios aqui: </h3>
      <iframe
        width="1100"
        height="650"
        src="https://datastudio.google.com/embed/reporting/e4fa2758-049e-442f-8d07-d89c16a55dd0/page/7MzHC"
        frameborder="0"
        style="border: 0"
        allowfullscreen
      ></iframe>
    </div>

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
    FooterInterno,
  },
};
</script>

<style lang="scss" scoped>
  #div-relatorio {
    margin-bottom: 10vh;
  }

  #div-relatorio h3 {
    margin: 2vh 0vw 2vh 0vw;
  }
</style>