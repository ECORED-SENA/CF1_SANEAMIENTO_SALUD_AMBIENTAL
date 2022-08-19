<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1(data-aos="fade-right") Educación Ambiental

    p La Educación Ambiental fue inicialmente contemplada como un proceso educativo, el cual es integral, continuo, expresivo, el cual está lleno de habilidades y conocimientos los cuales son útiles para entender la naturaleza y su equilibrio ecológico, el cual se debe desarrollar bajo unas metas y objetivos claros medidos con el paso del tiempo.
    p Su desarrollo debe abarcar toda la educación del niño, del joven, del adulto y del anciano para que sea un proceso continuo y permanente que logre prevenir y resolver los problemas ambientales actuales y futuros. 

    .bg_9.p-5.mb-4
      .row.justify-content-center        
        .col-lg-10
          figure.mb-4
            img(data-aos="fade-up")(src='@/assets/curso/tema5/img01.png')
          p A la Educación Ambiental le interesa no sólo explicar los problemas del ambiente natural, sino también del social y el transformado, en el que se manifiestan con toda claridad las distintas responsabilidades de los sectores sociales. Estos problemas hacen evidente la necesidad de decidir y actuar sobre los retos inmediatos, sin perder de vista las acciones a mediano y largo plazos.
          p Los componentes de la educación ambiental son:

          SlyderF.mb-5(columnas="col-lg-6 col-xl-6")(data-aos="fade-down")
            .row.justify-content-center
              .col-12
                .tarjeta.p-4.bg_color6.h-105
                  p.text-center Conciencia y sensibilidad ante el ambiente y los desafíos ambientales.

            .row.justify-content-center
              .col-12
                .tarjeta.p-4.bg_color14.h-105
                  p.text-center Conocimiento y entendimiento del ambiente y los desafíos ambientales.

            .row.justify-content-center
              .col-12
                .tarjeta.p-4.bg_color6.h-105
                  p.text-center Actitudes de preocupación por el ambiente y de motivación por mejorar o mantener la calidad ambiental.

            .row.justify-content-center
              .col-12
                .tarjeta.p-4.bg_color14.h-105
                  p.text-center Habilidades para identificar y contribuir a resolver los desafíos ambientales.
            
            .row.justify-content-center
              .col-12
                .tarjeta.p-4.bg_color6.h-105
                  p.text-center Participación en actividades que contribuyan a resolver los desafíos ambientales.

    p.mb-5 En la década de los 70 nace la Educación Ambiental como una respuesta a la preocupación mundial ante el creciente y cada vez más evidente deterioro de los recursos naturales por parte de la mano del hombre. Poniendo en la cuerda floja la insostenibilidad del paradigma del desarrollo industrial de la época, y llevando a los mismos países a buscar la necesidad urgente de plantear cambios en las actividades realizadas por las diferentes ciencias del saber, para dar soluciones claras y concretas a los problemas por los que atraviesa la humanidad; de acuerdo con esta problemática, se da una mirada a las ciencias de la educación como una estrategia pedagógica dentro de los procesos de aprendizaje que busca facilitar la comprensión por parte de los individuos, de la realidad medioambiental de su localidad, región y país.

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/img03.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p El nuevo problema medioambiental es abordado desde una perspectiva de formación del individuo, donde cada uno se sienta responsable por el espacio que ocupa, que sienta pertenencia, le dé el mejor uso y propenda por su conservación y mantenimiento.
            br
            br
            p La Educación Ambiental da una clara respuesta al creciente deterioro del entorno, preparando al individuo desde sus primeros años de su vida para que interactúe con el medio que lo rodea y formar en él una conciencia que le permita convivir con su entorno, transformarlo positivamente según las necesidades que tenga, preservarlo y alargar su durabilidad.  

    .row.justify-content-center
      .col-lg-8
        p A continuación, se describen los principales sucesos históricos a lo largo del tiempo en la Educación Ambiental: 

    .row.justify-content-center.mb-5       
      .col-lg-10
        .bg_10.p-5(data-aos="fade-up-right")
          LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoB")

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-2
        .bg_subtitulos   
          .row
            .col-lg-2 
              .titulo-sexto.color-terciario
                h3 Capacitación

    p La capacitación hace referencia a un conjunto de actividades didácticas que están orientadas a ampliar diferentes conocimientos y habilidades sobre un tema específico.
    p Es una de las herramientas más útiles para transmitir de manera efectiva ciertos temas que sean necesarios para el desarrollo de actividades tanto individuales como colectivas. 
    p.mb-4 La capacitación es un proceso que ayuda a los seres humanos a adaptarse a las circunstancias que se presenten y permite que pueda responder a ellas de manera eficiente, para ello, es necesario desarrollar habilidades por medio del aprendizaje.

    .row.justify-content-center.mb-4
      .col-lg-6
        .bg_2.p-2(data-aos="fade-up")
          p.text-center A continuación, se describen los tipos de capacitación:

    .row.justify-content-center.mb-5
      .col-lg-10
        SlyderA(tipo="b").bg_slyder-t3.p-5
          .row.justify-content-center.align-items-center
            .col-lg-6(data-aos="fade-right") 
              h5 Aprendizaje pasivo
              p El participante es el objeto receptor pasivo de los conocimientos que está impartiendo el instructor, ya sea de manera directa o indirecta. 
            .col-lg-5(data-aos="fade-left") 
              figure
                img(src='@/assets/curso/tema5/img13.png', alt='AvatarTop')

          .row.justify-content-center.align-items-center
            .col-lg-6
              h5 Aprendizaje activo
              p Le exige al participante actuar y pensar para que logre descubrir el conocimiento. El instructor y los medios didácticos juegan un papel que consiste en facilitar, guiar y estimular al aprendiz.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/img14.png', alt='AvatarTop')

          .row.justify-content-center.align-items-center
            .col-lg-6
              h5 Capacitación grupal 
              p Esta capacitación es brindada a un grupo de participantes y se genera una enseñanza colectiva.  
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/img15.png', alt='AvatarTop')

          .row.justify-content-center.align-items-center
            .col-lg-6
              h5 Capacitación individual 
              p Es una capacitación adaptada directamente a las características individuales de cada participante, en la cual se consideran sus potenciales y limitaciones.  
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/img16.png', alt='AvatarTop')

          .row.justify-content-center.align-items-center
            .col-lg-6
              h5 Capacitación organizacional 
              p La empresa se entiende como un todo mediante el planteamiento de un programa formativo el cual se adelante mediante talleres o seminarios, con el fin de que todos los miembros de la organización adquieran los mismos conocimientos útiles. 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/img17.png', alt='AvatarTop')
          
          .row.justify-content-center.align-items-center
            .col-lg-6
              h5 Capacitación asertiva 
              p Esta es aplicada cuando existen dificultades de comunicación entre los líderes y sus colaboradores cuando las tareas no son debidamente elaboradas por la falta de comprensión de las reglas. 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/img18.png', alt='AvatarTop')

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-8
        .bg_subtitulos   
          .row
            .col-lg-8
              .titulo-sexto.color-terciario
                h3 Técnicas Educativas

    p La educación, al igual que todos los campos de actividad del hombre, requiere también de una buena dosis de técnica por parte del maestro; técnica encaminada al manejo de la clase, a la organización de la asignatura, al proceso de interrelación maestro-alumno para la elaboración de los conocimientos; sin descuidar además la comprobación de los resultados que hace de la Evaluación un proceso en el que mayormente debe notarse la preparación profesional del educador. Siendo, por tanto, la técnica una rama inherente a la educación, conviene analizar brevemente lo que por ello debemos entender en el campo didáctico.
    p.mb-4 A continuación, se resumen las técnicas educativas:

    ImagenInfograficaB.color-acento-botones
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema5/img19.svg', alt='Texto que describa la imagen')
          

      div(x="12.6%" y="74.3%" tooltip="Técnicas para el aprendizaje asistido")
        .row.justify-content-center.mb-4
          .col-6
            .bg_color16.p-2
              h5.text-center Técnicas para el aprendizaje asistido                      
        .row.justify-content-evenly
          .col-lg-3.ms-0.ms-lg-5
            ul.lista-ul--color
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Entrevista
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Estudio dirigido exegética
          .col-lg-3
            ul.lista-ul--color
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Exposición didáctica
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Redescubrimiento
          .col-lg-3
            ul.lista-ul--color
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Resolución de problemas
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Seminario

      div(x="38.2%" y="74.3%" tooltip="Técnicas para el aprendizaje colaborativo")
        .row.justify-content-center.mb-4
          .col-6
            .bg_color16.p-2
              h5.text-center Técnicas para el aprendizaje colaborativo                 
        .row.justify-content-evenly
          .col-lg-3.ms-0.ms-lg-5
            ul.lista-ul--color
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Argumentación (interrogatorio) Asamblea 
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Debate 
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Entrevista 
          .col-lg-3
            ul.lista-ul--color
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Foro abierto
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Discusión dirigida
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Lluvia de ideas 
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Mesa redonda
          .col-lg-3
            ul.lista-ul--color
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Panel Phillips 6-6
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Simposio 
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Socio drama
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Taller

      div(x="64.5%" y="74.3%" tooltip="Técnicas para el aprendizaje de aplicación")
        .row.justify-content-center.mb-4
          .col-6
            .bg_color16.p-2
              h5.text-center Técnicas para el aprendizaje de aplicación                      
        .row.justify-content-evenly
          .col-lg-3.ms-0.ms-lg-5
            ul.lista-ul--color
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Cuestionario Encuesta
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Estudio de caso
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Experiencia directa
          .col-lg-3
            ul.lista-ul--color
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Lista de cotejo
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                | Observación
          .col-lg-3
            ul.lista-ul--color
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Redescubrimiento
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Registro anecdótico

      div(x="88%" y="74.3%" tooltip="Técnicas para el aprendizaje autónomo")
        .row.justify-content-center.mb-4
          .col-6
            .bg_color16.p-2
              h5.text-center Técnicas para el aprendizaje autónomo                
        .row.justify-content-evenly
          .col-lg-3.ms-0.ms-lg-5
            ul.lista-ul--color
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Analogía biográfica
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Bosquejo esquemático
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Cadena de secuencias
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Cuadro sinóptico
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Diagrama jerárquico
          .col-lg-3
            ul.lista-ul--color
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Estudio dirigido
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Investigación bibliográfica
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Mapa conceptual 
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Mapa de un cuento
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Mapa del carácter 
          .col-lg-3
            ul.lista-ul--color
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Mapa mental 
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                | Mentefacto 
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Mesa de la idea principal
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Resumen 
              li.m_bot1
                i.lista-ul__vineta.bg_color15
                |	Rueda de atributos

    figcaption.color_enlace Nota. Carlos Delgado Álvarez, Universidad del Usuay, Técnicas Educativas. #[a(href="https://www.uazuay.edu.ec/sites/default/files/public/TECNICAS-EDUCATIVAS.pdf" target='_blank') <br> TECNICAS-EDUCATIVAS.pdf]  

     

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: '1972',
        texto:
          '<b>Conferencia de Estocolmo (Suecia)</b> <br><br> Por primera vez se habla de educación ambiental.',
        icono: require('@/assets/curso/tema5/img04.svg'),
      },
      {
        titulo: '1975',
        texto:
          '<b>Seminario de Belgrado (Yugoslavia)</b> <br><br> Se publica la “carta de Belgrado”, donde se establecen los objetivos de la educación ambiental.',
        icono: require('@/assets/curso/tema5/img05.svg'),
      },
      {
        titulo: '1977',
        texto:
          '<b>Congreso Internacional de Educación Ambiental de Tbilisi (URSS)</b> <br><br> La educación ambiental se integra al currículum escolar.',
        icono: require('@/assets/curso/tema5/img06.svg'),
      },
      {
        titulo: '1992',
        texto:
          '<b>Cumbre de la Tierra, Río de Janeiro (Brasil)</b> <br><br> Aparece la “Agenda 21” con un capítulo dedicado al fomento de la educación ambiental, como herramienta prioritaria para alcanzar el desarrollo sustentable.',
        icono: require('@/assets/curso/tema5/img07.svg'),
      },
      {
        titulo: '1994',
        texto:
          '<b>Ley 19.300 de Bases Generales del Medio Ambiente (Chile)</b> <br><br> Consigna la educación ambiental como un instrumento de gestión ambiental.',
        icono: require('@/assets/curso/tema5/img08.svg'),
      },
      {
        titulo: '2002',
        texto:
          '<b>Cumbre de Johannesburgo sobre el Desarrollo Sostenible (Sudáfrica)</b> <br><br> La ONU decreta el entre 2005 y 2015 como el Decenio de la Educación para el Desarrollo Sostenible.',
        icono: require('@/assets/curso/tema5/img09.svg'),
      },
      {
        titulo: '2009',
        texto:
          '<b>Política Nacional de Educación para el Desarrollo Sustentable (Chile)</b> <br><br> Establece una serie de principios, objetivos y líneas estratégicas orientadas a lograr una educación que promueva el Desarrollo Sustentable en el país.',
        icono: require('@/assets/curso/tema5/img10.svg'),
      },
      {
        titulo: '2015',
        texto:
          '<b>Cumbre de Desarrollo Sostenible Nueva York (EEUU)</b> <br><br> La Asamblea General adopta la Agenda 2030 para el Desarrollo Sostenible, estableciendo 17 grandes objetivos.',
        icono: require('@/assets/curso/tema5/img11.svg'),
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
