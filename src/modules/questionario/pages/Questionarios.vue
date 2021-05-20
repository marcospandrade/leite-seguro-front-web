<template>
    <div>
        <header-interno></header-interno>
        Questionario Works
        <footer-interno></footer-interno>
    </div>
</template>

<script>
import HeaderInterno from "@/components/layoutInterno/Header";
import FooterInterno from "@/components/layoutInterno/Footer";

export default {
    name: "Questionarios",
    components: {
        HeaderInterno,
        FooterInterno
    }
}
</script>