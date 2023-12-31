export default {
  global: {
    componenteFormativo: 'El consumidor digital y modelos de negocio',
    descripcionCurso:
      'El componente formativo permitirá que el aprendiz apropie conocimientos del consumidor digital, las tendencias de <em>marketing</em> 4.0, las plataformas digitales y su gestión respecto a los contenidos digitales; aplicables en todos los campos y diferentes tipos de organizaciones que desean generar valor de marca a través del <em>marketing</em> digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El consumidor digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características del consumidor digital',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Comportamiento del consumidor digital',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'El consumidor 4.0',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tendencias del <em>marketing</em> 4.0',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Ecosistemas digitales para el <em>marketing</em>',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plataformas digitales para el <em>marketing</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tiendas virtuales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Redes sociales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Sitios web',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Publicidad <em>online</em>',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Video <em>marketing</em>',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: '<em>Pódcast</em>',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Apps',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Blogs',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Bases de datos',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Licencias',
            hash: 't_2_10',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_005_623605.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Habilidades Digitales y Recursos Google - SENA',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (s.f.). <em>Habilidades Digitales y Recursos Google – SENA</em>. [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=2HhXvGP0uU8&list=PLdgsC6jI-tmV2RKgTC848jJlOqJWe5e4D',
    },
    {
      tema: 'Redes sociales',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (s.f.). <em>Redes sociales</em>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rR5wqTUDRI4',
    },
    {
      tema: 'Conceptos Básicos Sobre <em>Marketing Digital</em> - SENA',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (s.f.). <em>Conceptos básicos sobre marketing digital – SENA</em>. [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LnUX087fcsk',
    },
  ],
  glosario: [
    {
      termino: 'Base de datos ',
      significado: 'administran datos de manera organizada y jerárquica. ',
    },
    {
      termino: 'Consumidor',
      significado:
        'persona u organización que consume bienes o servicios que los productores o proveedores ponen a su disposición en el mercado y que sirven para satisfacer algún tipo de necesidad.',
    },
    {
      termino: 'Internet',
      significado: 'red de computadores conectados globalmente en red.',
    },
    {
      termino: 'Licencias',
      significado:
        'permisos o autorizaciones que se dan para explotar derechos de autor.',
    },
    {
      termino: '<em>Marketing</em> Digital',
      significado:
        'planes o estrategias que emplean las organizaciones para impulsar o generar valor de marca. ',
    },
    {
      termino: 'Redes sociales',
      significado: 'comunidad de personas que se forman en internet. ',
    },
    {
      termino: 'Sitio <em>web</em>',
      significado: 'conjunto de páginas <em>web</em>. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Carús, L. F., Víctor, C. D., t Argüelles, I. (s. f.). <em>El comportamiento del consumidor online factores que aumentan la actividad de búsqueda de Ewom en el sector turístico.</em> Uniovi.es.',
      link:
        'https://digibuo.uniovi.es/dspace/bitstream/handle/10651/29594/TFM_FdezCarus,Leticia.pdf;jsessionid=DBC988DD19773D40B92C3AE8CD6D8EC3?sequence=6',
    },
    {
      referencia:
        'Del Carmen, M., Rodríguez, R., Desiré, D. A., Padilla, Q., y Mayo, S. (s. f.). El consumidor digital: motivaciones y factores que influencian su comportamiento. Idus.us.es.',
      link:
        'https://idus.us.es/bitstream/handle/11441/93839/El_consumidor_digital.pdf?sequence=3',
    },
    {
      referencia:
        'Moschini, S., y Di, N. (s. f.). Claves del marketing digital. Edu.mx.',
      link:
        'https://www.ceut.edu.mx/Biblioteca/books/Administraci%C3%B3n-2/Claves-del-Marketing-Digital.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'María Alejandra Tovar Bernal  ',
          cargo: 'Experta Temático',
          centro: 'Regional Tolima - Centro de Industria y la Información',
        },
        {
          nombre: 'Adriana López ',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'José Gabriel Ortiz Abella ',
          cargo: 'Corrector de Estilo ',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
