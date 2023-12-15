<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right") 
        p El #[i marketing] digital permite a las organizaciones conocer a los consumidores digitales, y crear nuevos modelos de negocio relacionados con las nuevas tendencias de mercado, las cuales han evolucionado con la llegada de las nuevas tecnologías de la información y la comunicación; para ampliar algunos conceptos introductorios se invita a ver el siguiente video.
    
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/gcH_RmAXv_M" title="El consumidor digital y modelos de negocio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
