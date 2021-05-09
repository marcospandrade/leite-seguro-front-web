<template>
    <div>
        <header-interno/>
        <div class="container">Usuarios works</div>
        <footer-interno/>
    </div>
</template>

<script>
import HeaderInterno from "@/components/layoutInterno/Header";
import FooterInterno from "@/components/layoutInterno/Footer";
import { mapActions } from 'vuex';

export default {
    name:"Usuarios",
    components:{
        HeaderInterno,
        FooterInterno
    },
    methods: {
        ...mapActions("usuarios", ["ActionGetUsuariosRegistrados"]),
    },
    mounted(){
        this.ActionGetUsuariosRegistrados();
    }
}
</script>