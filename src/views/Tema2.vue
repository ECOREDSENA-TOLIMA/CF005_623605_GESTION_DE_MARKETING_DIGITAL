<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 2. Plataformas digitales para el <em>marketing</em>
    
    Separador
    .row
      .col-xl-12
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.1 Tiendas virtuales
    Separador
    .row
      .col-xl-12
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.2 Redes sociales
    Separador
    .row
      .col-xl-12
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.3 Sitios web
    Separador
    .row
      .col-xl-12
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.4 Publicidad #[i online]
    Separador
    .row
      .col-xl-12
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.5 Video #[i marketing]
    Separador
    .row
      .col-xl-12
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.6 #[i Pódcast]
    Separador
    .row
      .col-xl-12
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.7 Apps
    Separador
    .row
      .col-xl-12
    #t_2_8.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.8 Blogs
    Separador
    .row
      .col-xl-12
    #t_2_9.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.9 Bases de datos
    Separador
    .row
      .col-xl-12
    #t_2_10.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.10 Licencias
</template>

<script>
export default {
  name: 'Tema2',
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
