<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 El consumidor digital
    .cajon.color-primario.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4(data-aos="flip-right")
          figure  
            img(src='@/assets/curso/temas/tema1/img1.svg', alt='Imagen decorativa')
        .col-lg-8(data-aos="flip-right")
          p En la actualidad, el entorno global está inmerso en una era tecnológica conocida como la era de la tecnología 5.0. Esta etapa implica cambios significativos y evolución en diversos aspectos, como la industria y la producción, la fuerza laboral y la promoción de nuevas tendencias de consumo.
          p Antes de explorar quién es el consumidor digital y entender quiénes lo conforman, es fundamental abordar el concepto de consumidor. Este se define como aquellas personas o instituciones que adquieren bienes y servicios con el propósito de satisfacer una necesidad. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Con la evolución que ha vivido la humanidad y los cambios tecnológicos, las organizaciones han creado nuevas estrategias de mercado que han llevado a que los consumidores cambien los canales o medios por los cuales adquieren los bienes y servicios para satisfacer sus necesidades. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop(data-aos="flip-right")
        figure  
          img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col-lg-10.movil(data-aos="flip-right")
        figure  
          img(src='@/assets/curso/temas/tema1/img2_1.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Para entender cómo se ha evolucionado en estos nuevos hábitos de consumo y en estos nuevos perfiles de consumidores, es necesario dar una mirada a la evolución de las generaciones, en el siguiente slider se detallan las características especiales de cada una de las generaciones activas a la fecha.
    
    SlyderB.slyder-b-img.mb-5.p-5(:datos="datosSlyderEjemplo")(data-aos="zoom-in-up")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Caracterizar cada una de estas generaciones permite a las organizaciones establecer mejoras en las políticas de estrategia de #[i marketing], debido a que cada persona tiene unas características definidas, principalmente en los medios de comunicación; lo que permitirá que se ofrezca productos y servicio al cliente personalizado para fidelizarlo.
        p Con los nuevos cambios tecnológicos, se puede decir que se encuentran consumidores digitales en cada una de las generaciones, sin embargo existen generaciones más inmersas, donde se puede decir que viven en un mundo de virtualidad.
        p Estos cambios de consumo también se han dado a la gran exposición que tienen las personas, a los medios de comunicación y en especial al internet, mediante los computadores y dispositivos móviles; cada día reciben mayor información y exposición a publicidad y tendencias, que genera mayores hábitos de consumo debido a la hiperconectividad. 
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-up")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img9.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los consumidores digitales son personas u organizaciones, que adquieren bienes o servicios, para satisfacer sus necesidades a través de las plataformas electrónicas como sitios #[i web], redes sociales, tiendas virtuales, #[i apps], entre otros; sin embargo, son cada vez más exigentes debido a la cantidad de marcas que les ofrece el mercado.
        
    Separador
    .row
      .col-xl-12
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.1 Características del consumidor digital
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p La nueva era digital o la llamada industria 4.0, ha generado evoluciones y cambios en el consumo de productos y servicios; por lo cual hoy se habla de consumidor digital, característico de la sociedad moderna; quienes tienen unas nuevas exigencias y expectativas de consumo. Estos nuevos consumidores o nueva tendencia de consumo a través de los medios digitales, tienen unas características marcadas y definidas, que motivan al consumidor a adquirir productos o servicios, o bien son influyentes a la hora de tomar decisiones de consumo.
        p A continuación, se realiza un análisis detallado de las características de los consumidores digitales y cómo las organizaciones deben de internalizarlas y de esta forma, crear planes y estrategias de #[i marketing].
    
    .tarjeta.tarjeta--azul.slyder-b-img.p-4
      SlyderA(tipo="b")(data-aos="zoom-in-up")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Compradores digitales
            p El consumidor digital, tiene una tendencia marcada a adquirir productos y servicios, por medios #[i online]; debido a que prefieren la facilidad y comodidad, que este nuevo mercado le ofrece; por lo general, realiza búsquedas del producto, lo que le permite realizar comparaciones, como la reputación, la calidad, el costo-beneficio y la experiencia que este le ofrece.  Estos consumidores también suelen realizar comparaciones en tiendas físicas, debido a su nivel de exigencia. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img10.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Hiperconectados
            p El consumidor digital, al estar hiperconectado es usuario de las redes sociales y, por lo cual está en contacto con las marcas de su preferencia, es un medio para verificar la favorabilidad o confiabilidad de la marca, lo que es un indicativo para adquirir los productos o servicios.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img11.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Cómodos
            p El mercado se ha encargado de ofrecer comodidad, por lo cual el consumidor digital, puede adquirir productos o servicios, en cualquier momento o lugar; realizar compras desde cualquier dispositivo en el cual se encuentre conectado como los móviles, computadores o #[i tablet] 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img12.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Exigentes
            p La exigencia es una de las características más marcadas de los consumidores digitales, los productos o servicios adquiridos, deben de cumplir con todas sus expectativas; de lo contrario generan críticas a través de las redes sociales u otros medios digitales, lo que puede generar imagen negativa para la organización. También exigen disponibilidad de los productos y servicios, como atención al cliente las 24 horas. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img13.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Personalizados
            p Aunque las compras #[i online], no generan un contacto físico con el consumidor, está busca que la relación empresa- cliente sea directa, por lo cual una de las estrategias del #[i marketing] digital es entregar productos personalizados a los consumidores.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img14.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 En busca de experiencias
            p Los consumidores digitales, no solo adquieren un producto o servicios, compran una experiencia; cada detalle de la compra es relevante; por lo cual es indispensable que el sitio donde se adquieren los productos o servicios aporte la información relevante al consumidor; como las características de los productos o servicios, el servicio de atención al cliente, las respuestas efectivas; dato estas exigencias del consumidor las organizaciones deben esforzarse por ofrecer una experiencia única al consumidor.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img15.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Ambientalistas
            p Con los cambios y evoluciones, y debido a las condiciones ambientales, que afectan el medio ambiente, las nuevas generaciones están más interesadas en productos o servicios responsabilidad socioambiental; por lo cual, en sus listas de marcas de preferencia, siempre estarán las organizaciones con estos mismos principios e ideales. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img16.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Rápidos
            p Los consumidores digitales son rápidos e impacientes, desean que adquirir productos y servicios se realice de una forma ágil, casi que de inmediato.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img17.jpg', alt='Imagen decorativa')        
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-12(data-aos="flip-right")
        p Las organizaciones deben tener en cuenta las características de los consumidores digitales, realizar una segmentación adecuada les permite efectuar una distribución homogénea de su nicho de mercado; esto le facilitara diseñar estrategias de #[i marketing] digitales adecuadas al tipo de cliente que desee para su organización. 
    Separador
    .row
      .col-xl-12
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.2 Comportamiento del consumidor digital
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p El comportamiento humano está influenciado por aspectos físicos y psicológicos, así como por elementos del entorno, la familia, la sociedad y la cultura. Los cambios tecnológicos han introducido transformaciones significativas en el comportamiento humano, incluidos los hábitos de consumo.
        p La hiperconectividad de las personas ha permitido que estén informadas y en constante intercambio de comunicación con otras personas o con las organizaciones. El constante cambio de tendencia obliga a las organizaciones a estar en permanente evolución para mantenerse a la vanguardia.
        p Los estudios y la psicología han identificado cuatro perfiles del comportamiento del consumidor digital; a continuación se detallan a través de las siguientes tarjetas las características de cada uno.
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="flip-right")
      .tarjeta.colortarj-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img18.svg' alt='AvatarTop')
          .col-12
            h4.text-center Predictor
            p.text-center Es el consumidor que buscar seguridad al momento de realizar las compras de productos o servicios, este consumidor desea que todo el proceso ocurra con normalidad, por lo que las organizaciones deben de brindarle una estabilidad; son los compradores que adquieren subscripciones y, realizan reservas.
      .tarjeta.colortarj-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img19.svg' alt='AvatarTop')
          .col-12
            h4.text-center Romántico
            p.text-center Consumidor que prefiere lo práctico y lo sencillo, son minimalistas; y están en constante contacto con la naturaleza; buscan la conexión de cuerpo, alma y espíritu; pero también buscan relacionarse en comunidad.
      .tarjeta.colortarj-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img20.svg' alt='AvatarTop')
          .col-12
            h4.text-center Irritable
            p.text-center Está en constante actividad, es el consumidor que cuestiona todo y desea que las cosas cambien; por lo cual mantienen en constante dinámica en las redes sociales y emplea los comentarios; se apoya en su comunidad. 
      .tarjeta.colortarj-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img21.svg' alt='AvatarTop')
          .col-12
            h4.text-center Impulsivo
            p.text-center Adquiere productos y servicios por impulso, sus compras no son planeadas, son compradores que se dejan llevar por una primera impresión, pero es un comprador que busca precios bajos. 
      .tarjeta.colortarj-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img22.svg' alt='AvatarTop')
          .col-12
            h4.text-center Oportunista
            p.text-center Es el comprador que adquiere bienes y servicios por plataformas digitales, siempre que los precios están bajos o se ofrecen ofertas.
      .tarjeta.colortarj-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img23.svg' alt='AvatarTop')
          .col-12
            h4.text-center Fiel
            p.text-center Es fiel a las marcas de su preferencia, por lo que visita los sitios digitales de estas marcas para adquirir bienes y servicios por medios digitales.
      .tarjeta.colortarj-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img24.svg' alt='AvatarTop')
          .col-12
            h4.text-center Racional
            p.text-center Es el consumidor digital que no adquiere productos o servicios #[i online] por impulso; realiza compras después de informarse y de forma equilibrada.
      .tarjeta.colortarj-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img25.svg' alt='AvatarTop')
          .col-12
            h4.text-center Crítico 
            p.text-center Es el consumidor digital para el cual es relevante lo que ofrece los sitios digitales, todo lo que tiene que ver con la compra, los medios de pago, los tiempos de entrega y el servicio posventa.      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Todos los perfiles de consumidores digitales se mantienen informados al estar conectados. Buscan experiencias y rapidez en sus compras, considerando que los tiempos y la disponibilidad de productos y servicios son aspectos relevantes. Además, al estar en línea, no solo califican y comentan sus experiencias, sino que también comparten sus opiniones en las redes sociales.
    Separador
    .row
      .col-xl-12
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.3 El consumidor 4.0
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p El ser humano ha tenido cambios evolutivos, entre ellos se ha visualizado los cambios en los hábitos y tendencias de consumo, por lo cual se analizará cada una de las evoluciones que ha tenido el ser humano y las organizaciones, desde el consumidor 1.0 al consumidor 4.0. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p.text-center La evolución de los consumidores
    .row.justify-content-center.align-items-center.mb-5.fondo-2
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-10(data-aos="flip-right")
            hr
            .row.justify-content-center.align-items-center
              .col-6.col-lg-1
                figure
                  img(src='@/assets/curso/temas/tema1/img26.svg', alt='Imagen decorativa')
              .col-lg-11            
                p Consumidor 1.0
                p Para este consumidor no existía una referencia de marca, su elección de consumo se centraba en las características de los productos o servicios, o en lo que la industria o el mercado le ofrecía.
                p Estos consumidores también se encontraban limitados, debido a que la oferta de productos y servicios no era amplia, y en muchos de los casos se encontraba monopolizada.
            hr
            .row.justify-content-center.align-items-center
              .col-6.col-lg-1
                figure
                  img(src='@/assets/curso/temas/tema1/img27.svg', alt='Imagen decorativa')
              .col-lg-11            
                p Consumidor 2.0
                p El consumidor empieza a tener mayores posibilidades de elección de productos y servicios, debido a que la industria y los mercados van aumentando la oferta. 
                p Las organizaciones se centran en satisfacer las necesidades de los consumidores, por lo cual se empieza a hablar de creación de valor.
            hr
            .row.justify-content-center.align-items-center
              .col-6.col-lg-1
                figure
                  img(src='@/assets/curso/temas/tema1/img28.svg', alt='Imagen decorativa')
              .col-lg-11            
                p Consumidor 3.0
                p Es el inicio de los avances tecnológicos, los consumidores empiezan a emplear los dispositivos móviles y las redes sociales, por lo tanto empiezan a estar en mayor contacto con las marcas.
                p Tuvieron la influencia de los #[i baby boomers].

            hr
            .row.justify-content-center.align-items-center
              .col-6.col-lg-1
                figure
                  img(src='@/assets/curso/temas/tema1/img29.svg', alt='Imagen decorativa')
              .col-lg-11            
                p Consumidor 4.0 
                p Este consumidor es más depediente de los medios digitales para adquirir productos o servicios, las empresas u organizaciones, han empezado a desarrollar nuevas estrategias de #[i marketing] orientadas a estos nuevos consumidores, los cuales se pueden denominar consumidores actuales. 
                p Fueron influenciados por los #[i millennials].
            hr
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Los actuales consumidores 4.0 surgen a partir de la evolución que ha vivido la humanidad debido a los cambios tecnológicos, al estar los consumidores conectados constantemente a un dispositivo móvil, a los computadores, tabletas y otros dispositivos, están en constante consumo de información y publicidad de diferentes productos y servicios.
        p Sin embargo, antes de crear estrategias de #[i marketing] que permitan atraer a clientes potenciales, se deben identificar sus necesidades y cómo los productos o servicios que ofrece la organización pueden satisfacerlas sus necesidades y cumplir sus expectativas, por ende es necesario, tener una comunicación activa con el consumidor, así como realizar una investigación de mercado.
        p Para atraer al consumidor 4.0 se debe emplear algunas estrategias como:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0(data-aos="flip-left")
        .titulo-sexto.color-acento-contenido.offset-0
          h5 Figura 1.
          span  #[i  Estrategias consumidor 4.0]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop(data-aos="zoom-in-up")
        figure
          img(src='@/assets/curso/temas/tema1/img30.svg', alt='La Figura 1 presenta las estrategias para atraer al consumidor 4.0. Estas incluyen la fidelización, la escucha de necesidades, la integración tanto online como offline, el uso de herramientas tecnológicas específicas y la elección adecuada de canales de comunicación')
      .col-lg-10.movil(data-aos="zoom-in-up")
        figure
          img(src='@/assets/curso/temas/tema1/img30_1.svg', alt='La Figura 1 presenta las estrategias para atraer al consumidor 4.0. Estas incluyen la fidelización, la escucha de necesidades, la integración tanto online como offline, el uso de herramientas tecnológicas específicas y la elección adecuada de canales de comunicación')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Una de las estrategias de #[i marketing] digitales es buscar fortalecer los sentimientos de la comunidad, mediante el #[i marketing] emocional, el cual busca crear un sentimiento en los consumidores o #[i leads]; si bien las compras #[i online] han facilitado la vida de los consumidores; se ha perdido el contacto físico con las organizaciones; Uno de los objetivos de las estrategias del #[i marketing] emocional, es mantener la conexión con los consumidores a lo largo del tiempo, mediante las emociones.
    .cajon.color-primario.p-4.mb-4(data-aos="flip-right")
      p Algunos de los beneficios del #[i marketing] emocional incluyen la recordación de la marca, impulsar el consumo de los productos o servicios y generar comentarios positivos que sean compartidos sobre la experiencia, de esta manera se crean conexiones con los leads, lo que contribuye a su fidelidad.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Para medir el éxito de las estrategias de #[i marketing] en el consumidor digital, se deben tener en cuenta los activos digitales, como la marca, los #[i e-commerce], los puntos de venta, los B2B y los influenciadores. Para tener mayor claridad sobre cada uno de los conceptos, a continuación se definen estas herramientas así:
    
    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img31.png", alt="alt")
          .crd_hover_txt--body
            .icono  
              img(src="@/assets/curso/temas/tema1/flecha.svg", alt="Imagen decorativa")
            h4.mb-3 Marca
            p.mb-0 Se deben crear estrategias de #[i marketing] que la impulsen en los medios digitales, por lo cual para medir el éxito se debe verificar el posicionamiento de la marca, los seguidores en las diferentes plataformas digitales, el contenido, los anuncios, comentarios positivos.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img32.png", alt="alt")
          .crd_hover_txt--body
            .icono  
              img(src="@/assets/curso/temas/tema1/flecha.svg", alt="Imagen decorativa")
            h4.mb-3 #[i E-commerce]
            p.mb-0 Las organizaciones que impulsan sus productos o servicios, a través de #[i e-commerce], deben tener en cuenta los comentarios y reseñas, de los usuarios en cuanto a su experiencia. Sin embargo, se debe tener en cuenta los puntos de venta físicos; como se indica, los consumidores digitales emplean el consumo #[i online] y #[i offline], por lo cual se debe medir el número de visitas a las tiendas físicas.
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img33.png", alt="alt")
          .crd_hover_txt--body
            .icono  
              img(src="@/assets/curso/temas/tema1/flecha.svg", alt="Imagen decorativa")
            h4.mb-3 #[i Business to Business] 
            p.mb-0 Las organizaciones que emplean el comercio #[i Business to Business] (B2B), miden el éxito de acuerdo al número de suscriptores a boletines o #[i newsletters]; su principal objetivo mediante el #[i marketing] digital es la construcción de reputación en los medios digitales.
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img34.png", alt="alt")
          .crd_hover_txt--body
            .icono  
              img(src="@/assets/curso/temas/tema1/flecha.svg", alt="Imagen decorativa")
            h4.mb-3 Influenciadores 
            p.mb-0 Las personas que se dedican a influenciar miden su éxito, mediante la interacción con sus seguidores, el número de comentarios, el número de personas que se conectan a los live, las veces que es compartidos sus contenidos, y los contenidos que han sido guardados en páginas como Instagram, Facebook o Pinterest.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p Al analizar las métricas de los activos digitales se deben tener en cuenta las métricas para las campañas de #[i marketing] digital las cuales son: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3(data-aos="flip-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img35.svg' alt='AvatarTop')
          .tarjeta.colorcol1.w-100
            .p-4
              h3.text-center Métrica general
              p En esta métrica se busca medir la efectividad de la campaña de acuerdo a la inversión y esfuerzos realizados por las organizaciones, con el número de consumidores que se ha logrado fidelizar.
              br
              br
      .col-lg-3(data-aos="flip-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img36.svg' alt='AvatarTop')
          .tarjeta.colorcol1.w-100
            .p-4
              h3.text-center Métrica de campaña
              p Se busca medir la efectividad de la campaña según el número de suscriptores, consumidores potenciales y las ventas que realiza la organización, al implementar la campaña.
              br
              br
              br
              
      .col-lg-3(data-aos="flip-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img37.svg' alt='AvatarTop')
          .tarjeta.colorcol1.w-100
            .p-4
              h3.text-center Métrica de producto
              p Mide la favorabilidad de los productos o servicios de una marca en específico, respecto a la competencia.
              br
              br
              br
              br
              p
      .col-lg-3(data-aos="flip-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img38.svg' alt='AvatarTop')
          .tarjeta.colorcol1.w-100
            .p-4
              h3.text-center Métrica digital
              p Mide la interacción de los consumidores, respecto a una marca en los medios digitales; se mide el número de productos o servicios que es adquirido #[i online], cuántos suscriptores o seguidores tiene la marca, las búsqueda realizadas de la marca en la #[i web].
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Las organizaciones deben crear indicadores de medición de éxito, de acuerdo con sus necesidades, que permitan identificar el éxito de sus campañas de #[i marketing] digital o crear nuevas estrategias que le permitan llegar a los #[i leads] o clientes potenciales, configurando ventas efectivas y fidelización del consumidor.
        p Existen algunas métricas que permiten medir los resultados de las campañas publicitarias:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-left")
        .tabla-b.color-acento-botones.mb-5        
          table(border=1)
            thead(style="background-color:#33ECE0;")
              tr
                th.text-center Métricas              
                th.text-center Concepto
                th.text-center Medición
            tbody
            tr
              td Coste de adquisición del cliente (CAC).
              td Es el costo en el que la organización incurre para obtener un nuevo cliente y que consuma sus productos o servicios. 
              td (Costo #[i marketing] + Costo ventas + Gastos generales) / Consumidores nuevos = CAC. 
            tr
              td Coste de #[i marketing] al adquirir un cliente (M%-CAC).
              td Es el costo de adquisición de un cliente expresado en porcentaje (%). 
              td (Costo #[i marketing] + Gastos generales) / (Costo #[i marketing] + Costo ventas + Gastos generales) = % CAC.
            tr
              td Porcentaje de clientes originados en #[i marketing].
              td Es el porcentaje que mide la efectividad de las campañas de #[i marketing], respecto a los nuevos consumidores. 
              td Clientes nuevos / Clientes #[i leads] = %.
            tr
              td Índice de promotores neto (NPS).
              td Mide la satisfacción del consumidor, pero también la probabilidad de que este recomiende la marca, a través de una encuesta. 
              td (Promotores – Detractores) / Encuestados = NPS.
            tr
              td Coste por #[i lead].
              td Mide la inversión de presupuesto vs los #[i leads] adquiridos, con cada campaña de #[i marketing] digital. 
              td Inversión campaña / #[i Leads] Nuevos = Costo #[i lead]. 
            tr
              td Número total de visitas.
              td Mide el comportamiento de las visitas, al implementar una campaña de #[i marketing] digital. 
              td Visita sin interactuar / Total visitas = % rebote. 
            tr
              td Tasa de clics.
              td Los números de clics que interactúan con la campaña publicitaria.
              td Clics / Impresiones totales = Tasa clics.  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Con el fin de fortalecer el concepto sobre métricas, en el siguiente video se consolida el concepto y los diferentes indicadores acorde a la red consultada así:
    
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video          
            iframe(width="560" height="315" src="https://www.youtube.com/embed/WTJGT2cMkQI" title="Métricas del marketing digital" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
    Separador
    .row
      .col-xl-12
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.4 Tendencias del <em>marketing</em> 4.0
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Las organizaciones a través de los procesos de mejora continua al interior de las organizaciones y con el fin de satisfacer y fidelizar al cliente, idean estrategias que permitan crear procesos de ventas eficientes y eficaces; pero estas estrategias no se enfocan solo en la venta como tal, también se crean estrategias o técnicas al interior de las organizaciones o en sus procesos productivas, que permitan atraer y fidelizar a los clientes. 
        p Las organizaciones deben estudiar las necesidades de sus clientes actuales o sus clientes potenciales, y a partir de estas necesidades, implementar estrategias que permitan llegar a estos clientes, satisfacer sus necesidades y lograr una fidelización. 
        p Es común pensar que el #[i marketing] se trata de la publicidad, pero este tan solo es una de las estrategias para llegar a los clientes; al estudiar las necesidades de los clientes, se comprende de una forma adecuada, cuáles son las estrategias que se deben tomar que  van desde la creación de un producto y servicio, eficiencia y eficacia en la producción, la logística, los canales de distribución, el servicio de venta y posventa. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-right")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img39.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Se puede definir el #[i marketing] como el conjunto de actividades y estrategias, que implementas las organizaciones, para crear y comunicar valor de marca, logrando la fidelización de los clientes, a partir del estudio y análisis de las necesidades y comportamiento de los clientes, como de los mercados. 
        p La palabra #[i marketing] es un término en inglés, que al traducir al idioma se traduce como mercadología, mercadeo o mercadotecnia. 
        p En cuanto a los principales objetivos del #[i marketing] se encuentran: 
    
    .tarjeta--container.row.mb-5
      .col-md.colorcol1.p-5(data-aos="flip-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img40.svg', alt='Imagen decorativa')        
        p.text-center Aumento de las ventas en las organizaciones.
      .col-md.colortarj-2.p-5(data-aos="flip-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img41.svg', alt='Imagen decorativa')        
        p.text-center Atraer nuevos clientes y lograr su fidelización.
      .col-md.colorcol1.p-5(data-aos="flip-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img42.svg', alt='Imagen decorativa')        
        p.text-center Creación de valor y comunicación de marca.
      .col-md.colortarj-2.p-5(data-aos="flip-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img43.svg', alt='Imagen decorativa')        
        p.text-center Imagen corporativa favorable.
      .col-md.colorcol1.p-5(data-aos="flip-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img44.svg', alt='Imagen decorativa')        
        p.text-center Posicionamiento de marca.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Al iniciar los estudios de las necesidades de las personas y sus deseos a satisfacer, se debe realizar la segmentación del mercado e identificar el nicho de mercado.
        p La segmentación del mercado, permite agrupar los clientes potenciales en grupos de acuerdo a su ubicación geográfica, a la demografía (edad, sexo), por grupo socioeconómico (nivel de ingresos), según las características psicológicas, y comportamentales (beneficio del comprador, intención de compra); por su parte, el nicho de mercado se encuentra inmerso en cada segmento del mercado, mediante grupos más reducidos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7(data-aos="flip-right")
            p En cuanto a la historia y evolución del #[i marketing], el profesor E. D. Jones, en el año 1902 habla por primera vez del término #[i marketing] en la universidad de Michigan, también en el año 1922 Fred E. Clarck, el presidente de la #[i American Marketing Association] (A.M.A.), escribe sobre los principios del #[i marketing], por lo cual es considerado como uno de los padres del #[i marketing]. 
            p Por su parte el docente universitario Phili Kother, es considerado el padre del #[i marketing] moderno, debido a sus aportes al #[i marketing] y al ser reconocido por su asesoría en empresas como IBM y #[i Bank of America]. Con Phili Kother las empresas empiezan a hablar de las 4 P del #[i marketing] (producto, precio, plaza y promoción).

          .col-lg-3
            figure
              img(src='@/assets/curso/temas/tema1/img45.svg', alt='Imagen decorativa') 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p El #[i marketing], a través de la historia, ha pasado por cuatro etapas o fases, las cuales han evolucionado de acuerdo con los cambios de las necesidades de las personas, los medios de producción y las nuevas tecnologías de las comunicaciones y la información.
    
    TabsC.color-primario.mb-5(data-aos="flip-left")
      .py-3.colortabs.py-md-4(titulo="<em>Marketing</em> 1.0")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img46.jpg', alt='Imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            h4 Orientado al producto (1890-1959)
            p Para la época las empresas, se enfocaban en los medios de producción, lo cual se evidenció con Henry Ford y la cadena de producción. Por lo cual la implementación del #[i marketing] se enfocaba solo en el producto y se empleaba la comunicación por medios masivos.
      .py-3.colortabs.py-md-4(titulo="<em>Marketing</em> 2.0")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img47.jpg', alt='Imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            h4 Orientado al consumidor (1860-1989)
            p En esta etapa, el consumidor empieza a ser más exigente, debido al aumento de la competencia; por lo cual se crea la necesidad de fidelizar al cliente.  
            p Por lo cual se enfocan en las necesidades y deseos de los clientes.

      .py-3.colortabs.py-md-4(titulo="<em>Marketing</em> 3.0")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img47.jpg', alt='Imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            h4 Estrategia de marca (1990-2015)
            p Nace la necesidad de generar fidelización o lealtad hacia la marca, por lo cual se crean estrategias donde el cliente empieza a interactuar con la marca.
      .py-3.colortabs.py-md-4(titulo="<em>Marketing</em> 4.0")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img48.jpg', alt='Imagen decorativa')
          .col-md-6.mb-4.mb-md-0
            h4 #[i Marketing] digital (2016-Actualidad)
            p En esta época el comercio electrónico se encuentra en auge, por lo cual se crea la necesidad de implementar las estrategias de #[i marketing] tradicional a lo digital. 
            p Las empresas empiezan a implementar la Big Data y la minería de datos para estudiar el comportamiento de las personas.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Debido a los cambios en los hábitos de consumo impulsados por la llegada de la tecnología, el #[i marketing] tradicional se ha visto obligado a reinventarse a través de una nueva evolución que se desarrolla en el #[i marketing] 4.0. Este enfoque debe estar respaldado por las nuevas tecnologías y modelos de comunicación modernos.
        p El #[i marketing] 4.0 es una estrategia esencial para las organizaciones con el fin de llegar a los consumidores actuales o consumidores 4.0. Es importante complementar esta estrategia con la implementación de métricas que analizan la efectividad de las campañas.
        p El objetivo principal del #[i marketing] 4.0 es la búsqueda de la fidelización de los #[i leads], a través de la implementación del #[i marketing] tradicional y el #[i marketing] digital; las principales estrategias y campañas son implementadas mediante las redes sociales, sitios #[i web], tiendas virtuales y buscadores.
        p Las ventajas que ofrece la implementación del #[i marketing] 4.0 son: 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0(data-aos="flip-left")
        .titulo-sexto.color-acento-contenido.offset-0
          h5 Figura 2.
          span  #[i  Ventajas marketing 4.0]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop(data-aos="flip-right")
        figure  
          img(src='@/assets/curso/temas/tema1/img50.svg', alt='En la figura 2 se muestran las ventajas de la implementación del marketing 4.0, va desde conocer al cliente, hasta la fidelización del mismo.')
      .col-lg-10.movil(data-aos="flip-right")
        figure  
          img(src='@/assets/curso/temas/tema1/img50_1.svg', alt='En la figura 2 se muestran las ventajas de la implementación del marketing 4.0, va desde conocer al cliente, hasta la fidelización del mismo.')        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p La implementación del #[i marketing] 4.0, es de gran importancia para las organizaciones, debido a que se crea posicionamiento de marca en los medios digitales y los mensajes publicitarios llegan a los consumidores, desde cualquier medio digital, a los dispositivos en los cuales se encuentre conectado; y genera una imagen positiva de la organización y la marca. 
        p Algunas de las tendencias del #[i marketing] 4.0 son: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0(data-aos="flip-left")
        .titulo-sexto.color-acento-contenido.offset-0
          h5 Figura 3.
          span  #[i Tendencias marketing 4.0]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop(data-aos="flip-right")
        figure  
          img(src='@/assets/curso/temas/tema1/img51.svg', alt='En la figura 3 se muestran las tendencias del marketing 4.0, incluye las búsquedas por voz, la automatización, el desplazamiento de la televisión por el internet y nuevos negocios en redes sociales.')
      .col-lg-10.movil(data-aos="flip-right")
        figure  
          img(src='@/assets/curso/temas/tema1/img51_1.svg', alt='En la figura 3 se muestran las tendencias del marketing 4.0, incluye las búsquedas por voz, la automatización, el desplazamiento de la televisión por el internet y nuevos negocios en redes sociales.')
    Separador
    .row
      .col-xl-12
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.5 Ecosistemas digitales para el <em>marketing</em>
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p El mundo digital se asemeja a un ecosistema natural, debido a que se requiere la interacción de diferentes elementos, para su correcto funcionamiento. Un ecosistema digital permite el tráfico de datos e información, en el cual se pueden realizar visitas, conseguir leads, ofrecer productos y servicios, y generar ventas #[i online].
        p Estos ecosistemas digitales han permitido que las organizaciones migren a un mundo virtual, en el que se permite la interacción de los consumidores y las organizaciones, de forma #[i online]; logrando la fidelización de los consumidores digitales y generando valor para la marca, debido a que alcanza visibilidad. Al implementar un ecosistema digital, las organizaciones deben implementar estrategias que creen valor. 
        p Algunos de los elementos de un ecosistema digital se describen así: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-left")
        .cajon.colortabs.p-4.mb-4
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-4
              figure  
                img(src='@/assets/curso/temas/tema1/img52.jpg', alt='Imagen decorativa')
            .col-lg-8
              p En cada uno de los puntos indicar el ítem correspondiente a la imagen.
              ol.lista-ol--cuadro
                li
                .lista-ol--cuadro__vineta
                  span(style="color:#000000") 1
                | Página #[i web] de la empresa.
                li
                .lista-ol--cuadro__vineta
                  span(style="color:#000000") 2
                | Diseño de marca de la empresa.
                li
                .lista-ol--cuadro__vineta
                  span(style="color:#000000") 3
                | Objetivos del ecosistema digital y del #[i marketing] digital. 
                li
                .lista-ol--cuadro__vineta
                  span(style="color:#000000") 4
                | Optimización de los motores de búsqueda. 
                li
                .lista-ol--cuadro__vineta
                  span(style="color:#000000") 5
                | Métrica o análisis de la #[i web]. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Con la implementación de los ecosistemas digitales, las organizaciones deben optimizar los recursos digitales, debido a que permiten que las estrategias y elementos del ecosistema sean eficientes y estén acorde a la organización, la marca y la creación de valor.
        p Las siguientes son las estrategias para optimizar los recursos de un ecosistema digital.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.fondo-3.p-5(data-aos="flip-left")
        LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoB")
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in-up")
        p Un parámetro es utilizado por programadores o sistemas operativos para asignar un valor a un comando. Al recibir información, este comando ejecuta un procedimiento específico, como cuando se realiza una búsqueda en Google al introducir el nombre de una marca. Para que esta marca aparezca en las primeras páginas o sitios #[i web], es necesario parametrizarla o adquirir servicios que utilicen estrategias de SEO (#[i Search Engine Optimization]) y SEM (#[i Search Engine Marketing]).
        p Por ejemplo, al buscar la marca de zapatos “Vélez” en el buscador de Google, esta aparece como el primer sitio #[i web], y si se observa fue parametrizada como una página de Anuncio. 
        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0(data-aos="flip-left")
        .titulo-sexto.color-acento-contenido.offset-0
          h5 Figura 4.
          span  #[i Parametrización “Vélez”]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in-up")
        figure  
          img(src='@/assets/curso/temas/tema1/img57.jpg', alt='En la figura 4 se muestra la búsqueda en Google de la marca Vélez, donde se ubica en la primera posición por medio de un anuncio.')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Sin embargo, a introducir en el motor de búsqueda de Google la palabra “zapatos” se encuentra la empresa “Dafitti”.
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0(data-aos="flip-left")
        .titulo-sexto.color-acento-contenido.offset-0
          h5 Figura 5.
          span  #[i Parametrización “Zapatos”.]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in-up")
        figure  
          img(src='@/assets/curso/temas/tema1/img58.jpg', alt='En la figura 5 se muestra la búsqueda en Google de la palabra zapatos, donde se ubica en la primera posición la empresa Dafitti.')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p La parametrización, permite realizar una medición por lo cual, se emplean sitios que permitan realizar analítica como Google Analytics y Adobe Analytics.
        p Con la parametrización de campañas de #[i marketing] digital se encuentran algunos elementos clave que se deben identificar y que  se ejemplifican con los siguientes pasos.
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Página <em>web</em>")
        .col-md-12.mb-4.mb-md-0.p-4
          p Al realizar la búsqueda de la página #[i web] de Vélez se encuentra la siguiente URL https://www.velez.com.co/?gclid=Cj0KCQjwl92XBhC7ARIsAHLl9alIsB_XUYK23Q1hzN4vHIL965lGBabfEgsfY4VPz4-y7m0MA4a0YekaAvjEEALw_wcB, la cual tiene la siguiente estructura.
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/img59.jpg', alt='Imagen decorativa')
      .row(titulo="Dominio")
        .col-md-12.mb-4.mb-md-0.p-4
          p El cual se asemeja a una dirección o código postal; el cual no se encuentra físico, este se encuentra alojado en la #[i web], el dominio principal de la marca Vélez es https://www.velez.com.co
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/img60.jpg', alt='Imagen decorativa')
      .row(titulo="Separador de dominio")
        .col-md-12.mb-4.mb-md-0.p-4
          p Es el comando encargado de separar los parámetros del dominio principal; principalmente se identifica por estar representado por el signo de interrogación (?); el separador de parámetro para la marca Vélez se encuentra terminado el dominio principal, como se observa en la URL “?gclid=Cj0KCQjwl92XBhC7ARIsAHLl9alIsB_XUYK23Q1hzN4vHIL965lGBabfEgsfY4VPz4-y7m0MA4a0YekaAvjEEALw_wcB
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/img61.jpg', alt='Imagen decorativa')
      .row(titulo="Parámetro detector")
        .col-md-12.mb-4.mb-md-0.p-4
          p Es el que permite realizar análisis de tráfico de los sitios #[i Web], debido a que es único en cada URL, el parámetro detector de la marca Vélez se encuentra seguido del separador de dominio. “gclid=Cj0KCQjwl92XBhC7ARIsAHLl9alIsB_XUYK23Q1hzN4vHIL965lGBabfEgsfY4VPz4-y7m0MA4a0YekaAvjEEALw_wcB”
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/img62.jpg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Los medios de pago son otra herramienta que hacen parte de los ecosistemas digitales, estos nacen como una necesidad para realizar transacciones en el comercio electrónico; por consiguiente, surgen los métodos de pagos digitales. Dentro de este ecosistema de pago se deben identificar los actores que los involucran, tal como se detalla en las siguientes tarjetas.
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="flip-right")
      .tarjeta.colortarj-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img63.svg' alt='AvatarTop')
          .col-12
            h4.text-center Emisor
            p.text-center Son las entidades financieras, encargadas de emitir las tarjetas débito y de crédito. 
      .tarjeta.colortarj-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img64.svg' alt='AvatarTop')
          .col-12
            h4.text-center Adquiriente
            p.text-center Permiten a las organizaciones aceptar pagos con tarjetas débitos o crédito. 
      .tarjeta.colortarj-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img65.svg' alt='AvatarTop')
          .col-12
            h4.text-center Red de tarjetas
            p.text-center Permiten las transacciones, entre los consumidores y las organizaciones. 
      .tarjeta.colortarj-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img66.svg' alt='AvatarTop')
          .col-12
            h4.text-center Procesadores de pago
            p.text-center Se encargan de procesar las transacciones que se dan entre las organizaciones, los consumidores y las entidades financieras. 
      .tarjeta.colortarj-1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema1/img67.svg' alt='AvatarTop')
          .col-12
            h4.text-center #[i Gateway]
            p.text-center Son las plataformas que permiten a las organizaciones aceptar pagos realizados mediante tarjetas débito o crédito. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Dentro de los ecosistemas digitales se encuentran los medios que emplean las organizaciones para implementar las estrategias de #[i marketing] digital, dentro de los cuales se encuentran los medios propios, medios pagados, y medios ganados. En el siguiente recurso se detallan los elementos de los medios propios.
    
    SlyderB.slyder-b-img.mb-5.p-5(:datos="datosSlyderEjemplo1")(data-aos="zoom-in-up")
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p La publicidad #[i display], por su parte, es una publicidad #[i online] donde las organizaciones crean estrategias publicitarias visibles en las plataformas digitales en forma de #[i banner], y que pueden estar compuestos por textos, imágenes, sonidos y videos. 
        p En este entorno publicitario se encuentran los anunciantes que son las organizaciones, quienes emplean las páginas #[i web] u otros medios digitales, como también las plataformas de afiliados; las organizaciones incurren en costos por esta publicidad, estos pueden ser por el número de veces que se muestre la publicidad, por las veces que se dé clic sobre los anuncios o por cada vez que el consumidor adquiera un producto o servicio.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop(data-aos="flip-right")
        figure  
          img(src='@/assets/curso/temas/tema1/img74.svg', alt='Imagen decorativa')
      .col-lg-10.movil(data-aos="flip-right")
        figure  
          img(src='@/assets/curso/temas/tema1/img74_1.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.colortarj-2.p-4.mb-4
          p #[b Los medios ganados]: se refieren a aquellos que una organización ha obtenido gracias a su gestión y reputación de marca, derivados de las experiencias de los consumidores. Estos resultados son producto de las estrategias de #[i marketing] que involucran medios propios y medios pagados, como las publicaciones de consumidores, menciones, revisiones (reseñas), me gusta, entre otros.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Todas estas estrategias de #[i marketing] digital deben estar soportadas por una infraestructura tecnológica, la cual permite generar nuevos negocios, los cuales han llegado gracias a internet y evolución de las nuevas tecnologías. 
        p La infraestructura tecnológica está compuesta por elementos como #[i hardware], #[i software], sistemas operativos, redes y almacenamiento de datos. La interacción y funcionamiento de estos elementos posibilitan la creación de nuevos negocios en línea.
        p Dentro de la infraestructura tecnológica se encuentra la infraestructura tradicional, infraestructura de nube, e infraestructura hiperconvergente, así:
        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p La gestión de la infraestructura de las tecnologías permite organizar todos los recursos de los ecosistemas tecnológicos, mediante la gestión de los sistemas operativos, gestión de la nube, gestión de la virtualización, gestión de las interfaces de programación y gestión de riesgos.
     
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="zoom-in-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img75.svg' alt='AvatarTop')
          .tarjeta.colorcol1.w-100
            .p-4
              h3.text-center Infraestructura tradicional 
              p Las organizaciones adquieren los elementos de la infraestructura tecnológica como #[i hardware], #[i software], sistemas operativos y almacenamiento de datos, los cuales son gestionados por la organización en sus instalaciones.
      .col-lg-4(data-aos="zoom-in-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img76.svg' alt='AvatarTop')
          .tarjeta.colorcol1.w-100
            .p-4
              h3.text-center Infraestructura de nube
              p Son infraestructuras tecnológicas, #[i cloud computing]; lo que se conoce como la nube, las organizaciones las pueden tener de forma privada o pueden acceder a la nube publica alquilando la infraestructura tecnológica a través de un proveedor. 
      .col-lg-4(data-aos="zoom-in-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img77.svg' alt='AvatarTop')
          .tarjeta.colorcol1.w-100
            .p-4
              h3.text-center Infraestructura hiperconvergente
              p Es la infraestructura que permite la gestión de datos a través de la red y el almacenamiento de datos, desde un único servidor.
              br
              br
              br
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p La gestión de la infraestructura de las tecnologías permite organizar todos los recursos de los ecosistemas tecnológicos, mediante la gestión de los sistemas operativos, gestión de la nube, gestión de la virtualización, gestión de las interfaces de programación y gestión de riesgos.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyderEjemplo1: [
      {
        titulo: 'Medios propios',
        texto:
          'Son los medios digitales propiedad de la organización, hacen parte de ellos las plataformas digitales y los canales de comunicación, implementados como estrategia de <em>marketing</em> digital que permiten acceder a los consumidores digitales.',
        imagen: require('@/assets/curso/temas/tema1/img68.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Objetivo',
        texto:
          'Crear interacción con los consumidores y poder influir en sus decisiones de compra, aportan conocimiento de la marca; dentro de los medios propios se encuentran <em>websites</em> corporativa, aplicaciones móviles, <em>blog</em>.',
        imagen: require('@/assets/curso/temas/tema1/img69.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '<em>Branding</em>',
        texto:
          'Son todas las estrategias de <em>marketing</em> que emplea la organización, para gestionar y dar a conocer su marca, con la finalidad de influenciar en los consumidores. Dentro de los tipos de branding se encuentran el corporativo, personal y un último, que es el <em>employer branding</em>, donde el empleado es un promotor de la marca.',
        imagen: require('@/assets/curso/temas/tema1/img70.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '<em>Search Marketing</em>',
        texto:
          'Es otra de las estrategias de medios propios, debido a que las organizaciones, se encargar de realizar gestiones en sitios <em>Web</em>, con la finalidad de ser visibles en los principales buscadores, mediante estrategias como SEO (<em>Search Engine Optimization</em>) o SEM (<em>Search Engine Marketing</em>). Generando valor de marca, ser visibles en las plataformas digitales y ante los consumidores, generación de ventas y obtención de reputación.',
        imagen: require('@/assets/curso/temas/tema1/img71.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Medios pagados',
        texto:
          'Son las estrategias de <em>marketing</em> en las que las organizaciones realizan pagos a terceros para que sus productos o servicios sean publicitados por ellos y así generar valor para la marca. ',
        imagen: require('@/assets/curso/temas/tema1/img72.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyderEjemplo: [
      {
        titulo: '',
        texto:
          '<b>Generación posguerra o silenciosa:</b> es la generación nacida entre 1925 y 1944, en época de la depresión y la Segunda Guerra Mundial. Se caracterizan por ser valerosos, decididos y trabajadores incansables.',
        imagen: require('@/assets/curso/temas/tema1/img3.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          '<b>Generación <em>baby boomers</em>:</b> es la generación nacida 1945 y 1959, quienes vivieron el inicio de la televisión, y electrodomésticos del hogar, el teléfono móvil, primeros computadores y equipos de oficina como el fax.',
        imagen: require('@/assets/curso/temas/tema1/img4.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          '<b>Generación X:</b> los nacidos entre 1960 y 1980, esta generación vive la llegada del internet y los juegos digitales, medios de comunicación digitales como el Facebook y se empieza a realizar negocios por internet, como el comercio electrónico.',
        imagen: require('@/assets/curso/temas/tema1/img5.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          '<b>Los <em>millennials</em> o generación Y:</b> es es la generación nacida en los años 1981 A a 1993, están marcados por la cúspide económica, con los inicios del bloque económico de la Unión Europea; pero se han visto enfrentados a una crisis social, debido a la baja oferta de empleo y disminución en los salarios. ',
        imagen: require('@/assets/curso/temas/tema1/img6.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          '<b>La generación Z:</b> son los nacidos en los años 1994 a 2010, marcados por el cambio del milenio, es la generación que le gusta la diversión y es su eje fundamental en la vida. Pasa la mayoría de su tiempo en las redes sociales y generando contenido para ellas, siendo este su mayor medio de información y entretenimiento;, en su adolescencia vivieron la crisis hipotecaria y financiera del 2008.',
        imagen: require('@/assets/curso/temas/tema1/img7.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],

    datosLineaTiempoB: [
      {
        titulo: 'Procesos y procedimientos',
        texto:
          'Al implementar procesos y procedimientos en cada una de las tareas dentro del ecosistema permite lograr la optimización de los recursos minimizando los riesgos asociados a las actividades u operaciones, debido a que, al encontrar un ecosistema parametrizado, las gestiones realizadas dentro de este son más eficientes.',
        icono: require('@/assets/curso/temas/tema1/img53.svg'),
      },
      {
        titulo: 'Actividades de parametrización',
        texto:
          'Las organizaciones deben de definir e identificar los procesos, procedimientos y actividades que se deben parametrizar dentro de los ecosistemas digitales, a partir del análisis del ecosistema digital a implementar, por lo cual se debe realizar una recolección y análisis de datos que permitan la estructuración adecuada de cada procedimiento.',
        icono: require('@/assets/curso/temas/tema1/img54.svg'),
      },
      {
        titulo: 'Diagrama de flujos',
        texto:
          'El diagrama de flujos es uno de los esquemas más adecuado en la implementación de los procesos y procedimientos, el cual permite una planeación adecuada dentro del ecosistema digital.',
        icono: require('@/assets/curso/temas/tema1/img55.svg'),
      },
      {
        titulo: 'Parametrización de variables',
        texto:
          'La parametrización de variables que permite dar un orden y estructura, en el cual se desea que los datos registrados en medios digitales por las organizaciones, a través de las campañas digitales, sean más eficientes y llegue a un mayor número de consumidores digitales. ',
        icono: require('@/assets/curso/temas/tema1/img56.svg'),
      },
    ],
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
