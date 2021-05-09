<template>
  <div>
    <header-interno></header-interno>
    <div class="container">Perfil works</div>
    <footer-interno></footer-interno>
  </div>
</template>

<script>
import HeaderInterno from "@/components/layoutInterno/Header";
import FooterInterno from "@/components/layoutInterno/Footer";

export default {
    name:"Perfil",
    components: {
        HeaderInterno,
        FooterInterno
    }
}
</script>