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
            titulo: '1.5	Ecosistemas digitales para el <em>marketing</em>',
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
      link:
        'https://www.youtube.com/watch?v=2HhXvGP0uU8&list=PLdgsC6jI-tmV2RKgTC848jJlOqJWe5e4D',
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
      significado: 'red de computadores conectados a globalmente en red.',
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
      termino: 'Sitio web',
      significado: 'conjunto de páginas web. ',
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
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lizeth Daniela Reinoso Diaz',
          cargo: 'Experta temática',
          centro: 'Regional Tolima. Centro Agropecuario La Granja',
        },
        {
          nombre: 'Oscar Absalón Guevara',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Santander. Centro de la Industria, la Empresa y los Servicios – CIES',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Asesora metodológica',
          centro: 'Regional Distrito Capital. Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'egional Distrito Capital. Centro de Diseño y Metrología',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yobanni Penagos',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
