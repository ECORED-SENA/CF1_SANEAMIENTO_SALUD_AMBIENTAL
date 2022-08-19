export default {
  global: {
    componenteFormativo: 'Componentes ambientales',
    descripcionCurso:
      'Se abordarán temas que permitirán tener una concepción clara de los componentes ambientales, cómo determinarlos y evaluarlos, la manera de participar comunitariamente para defenderlos conociendo las leyes que los abarcan, así mismo obtendrá conocimientos sobre las técnicas educativas para transmitir este conocimiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Aspectos ambientales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Impactos ambientales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normatividad ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Promotoría ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Educación ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Programa ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Participación comunitaria',
        desarrolloContenidos: true,
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
      tema: 'Aspectos Ambientales',
      referencia: 'Lina Bejarano, 2018. Componentes Ambientales. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_jl2o3uk5P8',
    },
    {
      tema: 'Aspectos Ambientales',
      referencia:
        'UNESCO en español, Los Objetivos de Desarrollo Sostenible - qué son y cómo alcanzarlos, YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MCKH5xk8X-g',
    },
    {
      tema: 'Normatividad Ambiental',
      referencia:
        'Esteban Correa, Introducción a la Normatividad Ambiental en Colombia (Sonido Mejorado), YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XPeC4Fw_T10',
    },
  ],
  glosario: [
    {
      termino: 'Aspecto ambiental',
      significado:
        'Actividades humanas que tienen influencia sobre el entorno en donde se desarrollan.',
    },
    {
      termino: 'Componentes Ambientales',
      significado:
        'Elementos, factores o recursos naturales que presentan interacciones entre sí, lo cual permite que se genere la vida en nuestro planeta.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'Consecuencias de las actividades humanas que repercuten sobre el medio ambiente generando un impacto ambiental en el entorno en el cual operan ya sea positivo o negativo, el cual incluye el aire, el agua, el suelo, la flora, la fauna, los seres humanos y sus interrelaciones.',
    },
    {
      termino: 'Leyes ambientales',
      significado:
        'Corresponden a los principios y normas que buscan la protección, conservación, recuperación del medio ambiente y preservación de los recursos naturales.',
    },
    {
      termino: 'Matriz aspectos e impactos',
      significado:
        'Base fundamental para la toma de decisiones frente a los impactos ambientales que se determinen y evalúen dentro de la organización. ',
    },
    {
      termino: 'Resolución Ambiental',
      significado:
        'Lineamientos que la autoridad requiere para la elaboración y ejecución de los estudios ambientales que deben ser presentados ante las autoridades.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaldía de Ibagué. (s.f.). Lección 1: Concepto de participación comunitaria. En Participación comunitaria. Recuperado el 31 de mayo, 2022, de',
      link:
        'https://ibague.gov.co/portal/admin/archivos/formacionVirtual/participacioncomunitaria/contenido/pdf/Unidad1Leccion1.pdf',
    },
    {
      referencia:
        'Alfonso Ávila, N. Z. H. (2014). Principales normas ambientales colombianas. Universidad EAN.',
      link: 'https://files.core.ac.uk/pdf/1162/74477868.pdf',
    },
    {
      referencia:
        'Carrillo Roa, J. D. y Cacua Peñaloza, S. C. (2019). Educación ambiental en Colombia: hacia un óptimo desarrollo sostenible. Dialéctica, 15(1).',
      link: 'http://portal.amelica.org/ameli/jatsRepo/88/88741012/html/',
    },
    {
      referencia:
        'Comisión Económica para América Latina y el Caribe. (s.f.). Acerca de desarrollo sostenible. Naciones Unidas. Recuperado el 30 de mayo, 2022, de',
      link:
        ' https://www.cepal.org/es/temas/desarrollo-sostenible/acerca-desarrollo-sostenible',
    },
    {
      referencia:
        'Decreto 1791 de 1996. Por medio del cual se establece el régimen de aprovechamiento forestal.4 de octubre de 1996. D.O. No. 42894.',
    },
    {
      referencia:
        'Decreto 2820 de 2010. Por el cual se reglamenta el Título VIII de la Ley 99 de 1993 sobre licencias ambientales. 5 de agosto de 2010. D.O. No. 47792.',
    },
    {
      referencia:
        'Decreto 283 de 1990. por el cual se reglamenta el almacenamiento, manejo, transporte, distribución de combustibles líquidos derivados del petróleo y el transporte por carrotanques de petróleo crudo. 30 de enero de 1990. D.O. No. 39165.',
    },
    {
      referencia:
        'Decreto 870 de 2017. Por el cual se establece el pago por servicios ambientales y otros incentivos a la conservación. 25 de mayo de 2017. D.O. No. 50244.',
    },
    {
      referencia:
        'Delgado Álvarez, C. y Palacios Peña, P. (s.f.). Técnicas educativas. Universidad del Azuay. Recuperado el 31 de mayo, 2022, de',
      link:
        'https://www.uazuay.edu.ec/sites/default/files/public/TECNICAS-EDUCATIVAS.pdf',
    },
    {
      referencia:
        'Ley 134 de 1994. Por la cual se dictan normas sobre mecanismos de participación ciudadana. 31 de mayo de 1994. D.O. No. 41373.',
    },
    {
      referencia:
        'Ley 23 de 1973. Por la cual se conceden facultades extraordinarias al Presidente de la República para expedir el Código de Recursos Naturales y de Protección al Medio Ambiente y se dictan otras disposiciones. 19 de diciembre de 1973. D.O. No. 34001.',
    },
    {
      referencia:
        'Ley 29 de 1992. Por medio de la cual se aprueba el "Protocolo de Montreal relativo a las sustancias agotadoras de la capa de ozono", suscrito en Montreal el 16 de septiembre de 1987, con sus enmiendas adoptadas en Londres el 29 de junio de 1990 y en Nairobi el 21 de junio de 1991. 28 de diciembre de 1992. D.O. No. 40699.',
    },
    {
      referencia:
        'Ley 388 de 1997. Por la cual se modifican la Ley 9ª de 1989 y la Ley 3ª de 1991 y se dictan otras disposiciones. 18 de julio de 1997. D.O. No. 43091.',
    },
    {
      referencia:
        'Ley 491 de 1999. Por la cual se establece el Seguro Ecológico, se modifica el Código Penal y se dictan otras disposiciones. 13 de enero de 1999. D.O. No. 43477.',
    },
    {
      referencia:
        'Ley 99 de 1993. Por la cual se crea el Ministerio del Medio Ambiente, se reordena el Sector Público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental, SINA, y se dictan otras disposiciones. 22 de diciembre de 1993. D.O. No. 41146.',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (s.f.). Programa Nacional de Promotoría Ambiental Comunitaria. Minambiente. Recuperado el 30 de mayo, 2022, de',
      link:
        'https://archivo.minambiente.gov.co/index.php/ordenamiento-ambiental-territorial-y-coordinacion-del-sina/educacion-y-participacion/programa-nacional-de-promotoria-ambiental-comunitaria',
    },
    {
      referencia:
        'Resolución 1023 de 2005. Por la cual se adoptan guías ambientales como instrumento de autogestión y autorregulación. 4 de agosto de 2005. D.O. No. 45990.',
    },
    {
      referencia:
        'Resolución 1447 de 2018. Por la cual se reglamenta el sistema de monitoreo, reporte y verificación de las acciones de mitigación a nivel nacional de que trata el artículo 175 de la Ley 1753 de 2015, y se dictan otras disposiciones. 2 de agosto de 2018. D.O. No. 50673.',
    },
    {
      referencia:
        'Resolución 1561 de 2019. Por la cual se adoptan los términos de referencia para la elaboración del Estudio de Impacto Ambiental (EIA), requerido para el trámite de la licencia ambiental de los proyectos de explotación de materiales de construcción, amparados en autorizaciones mineras temporales, objetivos al mantenimiento, mejoramiento y rehabilitación de vías terciarias y para el programa Colombia Rural y otras adopciones. 9 de octubre de 2019. D.O. No. 51102.',
    },
    {
      referencia:
        'Resolución 2064 de 2010. Por la cual se reglamentan las medidas posteriores a la aprehensión preventiva, restitución o decomiso de especímenes de especies silvestres de Fauna y Flora Terrestre y Acuática y se dictan otras disposiciones. 26 de octubre de 2010. D.O. No. 47874.',
    },
    {
      referencia:
        'Resolución 2210 de 2018. Por medio de la cual se reglamenta el uso del Sello Minero Ambiental Colombiano. 21 de noviembre de 2018. D.O. No. 50786.',
    },
    {
      referencia:
        'Resolución 260 de 2011. Por la cual se fijan las tarifas para el cobro de los servicios de evaluación y seguimiento de licencias, permisos, autorizaciones y demás instrumentos de control y manejo ambiental y se dictan otras disposiciones. 29 de diciembre de 2011. D.O. No. 48297.',
    },
    {
      referencia:
        'Resolución 689 de 2016. Por la cual se adopta el reglamento técnico que establece los límites máximos de fósforo y la biodegradabilidad de los tensoactivos presentes en detergentes y jabones, y se dictan otras disposiciones. 5 de noviembre de 2016. D.O. No. 49864.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Julián Ardila',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Palito',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional - Tolima',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar celis',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
