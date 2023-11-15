<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 El consumidor digital
      
    Separador
    .row
      .col-xl-12
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.1 Características del consumidor digital
      
    Separador
    .row
      .col-xl-12
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.2 Comportamiento del consumidor digital
      
    Separador
    .row
      .col-xl-12
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.3 El consumidor 4.0
      
    Separador
    .row
      .col-xl-12
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.4 Tendencias del <em>marketing</em> 4.0
      
    Separador
    .row
      .col-xl-12
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.5 Ecosistemas digitales para el <em>marketing</em>


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
