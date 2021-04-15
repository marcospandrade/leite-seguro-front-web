<template>
  <div>
    <header-interno></header-interno>
    <div class="container">Dashboard works!</div>
    <footer-interno></footer-interno>
  </div>
</template>

<script>
import HeaderInterno from "@/components/layoutInterno/Header";
import FooterInterno from "@/components/layoutInterno/Footer";

export default {
  name: "dashboard",
  components: {
    HeaderInterno,
    FooterInterno,
  },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style>

</style>