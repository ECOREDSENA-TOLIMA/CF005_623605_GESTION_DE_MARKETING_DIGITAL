<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El componente el consumidor digital y modelos de negocio aborda de manera integral los aspectos claves relacionados con el consumidor en el entorno digital y las estrategias de #[i marketing]. En la primera sección, se exploran las características y el comportamiento del consumidor digital, así como la evolución hacia el consumidor 4.0 y las tendencias del #[i marketing] 4.0. La segunda sección se centra en las plataformas digitales utilizadas para el #[i marketing], incluyendo tiendas virtuales, redes sociales, sitios web, publicidad online, video #[i marketing], pódcast, apps, #[i blogs], bases de datos y licencias
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
