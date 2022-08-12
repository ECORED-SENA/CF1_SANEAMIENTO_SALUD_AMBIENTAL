<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-right") Impactos Ambientales

    .bg_fondo2
      .row.justify-content-center.mb-5
        .col-lg-7(data-aos="fade-right")
          p Los impactos ambientales son todas aquellas alteraciones que son generadas por el ser humano al medio ambiente ya sea de manera directa o indirecta por un proyecto, acción, obra o labor en un área determinada.
          p Toda actividad que pueda causar un impacto ambiental en alguna de sus fases estará obligada a someterse al Sistema de Evaluación de Impacto Ambiental para determinar con claridad la magnitud de estos impactos. 
          p Por medio de la identificación de impactos ambientales se busca hacer una evaluación y valoración de los efectos presentes como resultado de las actividades, productos o servicios en una organización, así como, se pretende mediante la evaluación, poder hallar soluciones para prevenir, mitigar o controlar dichos impactos. 
        .col-lg-5(data-aos="fade-left")
          figure
              img.img-t.mx-auto(src='@/assets/curso/tema2/img01.png')

      .row.justify-content-center.mb-5
        .col-lg-7.col-xl-8.col-xxl-7
          .bg_2.p-2(data-aos="fade-up")
            p.text-center Los impactos ambientales se pueden establecer de acuerdo con los siguientes tipos:

      .row.justify-content-center
        .col-lg-9
          .row.justify-content-center.mb-5
            .col-md-6.col-xl.mb-4.mb-xl-0
              .tarjeta-numerada.color-primario.p-4.h-100(data-aos="fade-right")
                .tarjeta-numerada__numero
                  .h2 01
                p.m_left2
                  b El aprovechamiento de recursos naturales
                p.m_left2 Estos recursos pueden ser utilizados para el aprovechamiento forestal cuando son renovables, cuando no son renovables son utilizados en extracción como lo es el petróleo o el carbón.

            .col-md-6.col-xl.mb-4.mb-xl-0
              .tarjeta-numerada.color-acento-contenido.p-4.h-100(data-aos="fade-up")
                .tarjeta-numerada__numero
                  .h2 02
                p.m_left2 
                  b Contaminación
                p.m_left2 Se relacionan proyectos que dentro de su funcionamiento emiten gases a la atmósfera o que contaminan cuerpos de agua con vertimientos. 

            .col-md-6.col-xl.mb-4.mb-xl-0
              .tarjeta-numerada.color-secundario.p-4.h-100(data-aos="fade-left")
                .tarjeta-numerada__numero
                  .h2 03
                p.m_left2 
                  b Ocupación del territorio
                p.m_left2 Son proyectos que modifican las condiciones biológicas de un territorio ya sea por acciones de uso de tierras para extracción u otro tipo de acciones donde se vean afectadas áreas determinadas.

      .row.justify-content-center.mb-5
        .col-lg-10
          p Dentro de los impactos ambientales, se encuentran distintas clasificaciones de acuerdo con sus propiedades; por ejemplo: 
    
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
        .tarjeta-avatar
          img.img-t.mx-auto(src='@/assets/curso/tema2/img02.svg' alt='AvatarTop')
          .tarjeta.bg_color11.h-200
            .text-black.p-4
              h5 Positivo o negativo
              p De acuerdo con los efectos resultantes sobre el medio ambiente.
        
        .tarjeta-avatar
          img.img-t.mx-auto(src='@/assets/curso/tema2/img03.svg' alt='AvatarTop')
          .tarjeta.bg_color12.h-200
            .text-black.p-4
              h5 Directo o indirecto
              p Cuando el impacto es producido por una acción específica del proyecto.

        .tarjeta-avatar
          img.img-t.mx-auto(src='@/assets/curso/tema2/img04.svg' alt='AvatarTop')
          .tarjeta.bg_color13.h-200
            .text-black.p-4
              h5 Acumulativo
              p Es el resultado de la adición de impactos ambientales que ocurrieron previamente y que aún están ocurriendo.

        .tarjeta-avatar
          img.img-t.mx-auto(src='@/assets/curso/tema2/img05.svg' alt='AvatarTop')
          .tarjeta.bg_color11.h-200
            .text-black.p-4
              h5 Sinérgico
              p Se produce cuando la aglomeración de impactos tiene una incidencia mayor que cuando se suman individualmente.

        .tarjeta-avatar
          img.img-t.mx-auto(src='@/assets/curso/tema2/img06.svg' alt='AvatarTop')
          .tarjeta.bg_color12.h-200
            .text-black.p-4
              h5 Residual
              p Persiste después de la implementación de medidas de mitigación.

        .tarjeta-avatar
          img.img-t.mx-auto(src='@/assets/curso/tema2/img07.svg' alt='AvatarTop')
          .tarjeta.bg_color13.h-200
            .text-black.p-4
              h5 Temporal o permanente
              p Son por un período de tiempo determinado.

        .tarjeta-avatar
          img.img-t.mx-auto(src='@/assets/curso/tema2/img08.svg' alt='AvatarTop')
          .tarjeta.bg_color11.h-200
            .text-black.p-4
              h5 Reversible o irreversible
              p Dependen de qué tan factible es retornar a las condiciones originales.
        
        .tarjeta-avatar
          img.img-t.mx-auto(src='@/assets/curso/tema2/img09.svg' alt='AvatarTop')
          .tarjeta.bg_color12.h-200
            .text-black.p-4
              h5 Continuo o periódico
              p Dependerá del período en que se exteriorice.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bg_5.p-5
          p(data-aos="fade-right") En el impacto ambiental existen una serie de pasos fundamentales para tener en cuenta en el proceso de identificación, como: 
          ul.lista-ul--color(data-aos="fade-right")
            li.m_bot1
              i.lista-ul__vineta
              |	Definir los objetivos puntuales del proyecto.
            li.m_bot1
              i.lista-ul__vineta
              |	Realizar un análisis de las posibilidades expertas para desempeñar el objetivo.
            li.m_bot1
              i.lista-ul__vineta
              |	Declarar las acciones propuestas, las cuales incluyen alternativas de posibles impactos ambientales. 
            li.m_bot1
              i.lista-ul__vineta
              |	Caracterizar las condiciones del medio ambiente previo al inicio del proyecto. 
            li.m_bot1
              i.lista-ul__vineta
              |	Contar con un análisis de costos y beneficios.
            li.m_bot1
              i.lista-ul__vineta
              |	Realizar el análisis de los impactos ambientales que estén relacionados con las acciones planteadas. 
            li.m_bot1
              i.lista-ul__vineta
              |	Evaluar los impactos de las acciones que previamente se proponen y sus afectaciones al medio ambiente. 
            li.m_bot1
              i.lista-ul__vineta
              |	Elaborar resumen y recomendaciones.

    p Para identificar los impactos ambientales es necesario conocer primero los aspectos ambientales dentro de la organización, tanto de las actividades, productos o servicios y cómo estos afectan el medio ambiente.
    p.mb-5 A continuación, se relacionan algunas variables que se deben tener en cuenta como factores contaminantes: 

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.bg_color-titulo(data-aos="fade-right")
          h5 Tabla 1
          span.text-small.color_text <em>Variables ambientales</em>

    .row.justify-content-center
      .col-lg-10(data-aos="fade-up-right")
        .tabla-b.color-primario.mb-5
          .tabla-b__header
              th.h4.t_th-tabla1 Variable ambiental
              th.h4.t_th-tabla1 Factor contaminante 
              th.h4.t_th-tabla1 Identificación 
            
          table
            tr.bg_color3
              td.h5.text-center.t_td-tabla1 Atmósfera
              td Los factores contaminantes pueden ser Gases, Lluvia ácida, Aerosoles o Ruido.
              td 
                ul.lista-ul
                  li.vineta_guion.m_bot2 
                    i.lista-ul__vineta
                    | Se identifican por medio de los índices de calidad de aire
                  li.vineta_guion 
                    i.lista-ul__vineta
                    | Emisiones de CO2
            tr.bg_color6
              td.h5.text-center.t_td-tabla1 Ruido
              td Son todos aquellos sonidos indeseables o que exceden los decibeles permitidos.
              td 
                ul.lista-ul
                  li.vineta_guion.m_bot2 
                    i.lista-ul__vineta
                    | Nivel de presión acústica
                  li.vineta_guion 
                    i.lista-ul__vineta
                    | Decibelímetro
            tr.bg_color3
              td.h5.text-center.t_td-tabla1 Agua
              td Son aquellos provenientes de acciones industriales o contaminantes orgánicos. 
              td 
                ul.lista-ul
                  li.vineta_guion.m_bot2 
                    i.lista-ul__vineta
                    | Índice de calidad de aguas
                  li.vineta_guion.m_bot2 
                    i.lista-ul__vineta
                    | pH
                  li.vineta_guion.m_bot2 
                    i.lista-ul__vineta
                    | Oxígeno disuelto
                  li.vineta_guion 
                    i.lista-ul__vineta
                    | Coliformes
            tr.bg_color6
              td.h5.text-center.t_td-tabla1 Capacidad de los suelos
              td 
                ul.lista-ul
                  li.vineta_guion.m_bot2
                    i.lista-ul__vineta
                    | Erosión
                  li.vineta_guion.m_bot2
                    i.lista-ul__vineta
                    | Inundación
                  li.vineta_guion.m_bot2
                    i.lista-ul__vineta
                    | Pérdida de capacidad de los suelos
                  li.vineta_guion.m_bot2
                    i.lista-ul__vineta
                    | Cambios topográficos
              td 
                ul.lista-ul
                  li.vineta_guion.m_bot2 
                    i.lista-ul__vineta
                    | %cubierta vegetal
                  li.vineta_guion.m_bot2 
                    i.lista-ul__vineta
                    | %pedregosidad
                  li.vineta_guion.m_bot2 
                    i.lista-ul__vineta
                    | Producción agraria
            tr.bg_color3
              td.h5.text-center.t_td-tabla1 Paisaje
              td Estos factores pueden verse determinados por la variación de vegetación, junto con la aridez del terreno o los cambios en el uso del suelo. 
              td 
                ul.lista-ul
                  li.vineta_guion.m_bot2 
                    i.lista-ul__vineta
                    | Método de valoración directa subjetiva
                  li.vineta_guion 
                    i.lista-ul__vineta
                    | Valoración indirecta
            tr.bg_color6
              td.h5.text-center.t_td-tabla1 Fauna
              td La pérdida de hábitat por contaminantes, por incendios, inundaciones o remoción en masa.  
              td Está determinado por la abundancia de especies y sus diferentes variedades.
            tr.bg_color3
              td.h5.text-center.t_td-tabla1 Vegetación
              td Se puede dar por incendios, inundaciones o remoción en masa lo cual lleva a una pérdida de la cubierta vegetal.   
              td Se deberán identificar especies endémicas, autóctonas y la diversidad entre ellas. 
    
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-2
        .bg_subtitulos   
          .row
            .col-lg-2 
              .titulo-sexto.color-terciario
                h3 Normatividad

    p.mb-4 La matriz de aspectos e impactos ambientales es una de las herramientas fundamentales dentro de un sistema de gestión ambiental ya que al ser una exigencia de la norma ISO 14001 que regula estos sistemas se convierte en un paso para la obtención de la certificación ambiental. 

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10.col-xl-12.col-xxl-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img10.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p La matriz ambiental de la norma ISO 14001 busca que todos los proyectos planteados en la empresa sean ambientalmente positivos, es decir que se alineen con el cuidado del medio ambiente, desde su planeación hasta su finalización y resultados. Por lo tanto, se entiende que esta matriz funcionará como un instrumento de planificación en el cual se vinculan las variables ambientales evidenciadas dentro de todas las etapas del proceso productivo de la organización.

    .row.justify-content-center.mb-4         
      .col-lg-10
        p Además, las matrices de impacto ambiental son una base fundamental para la toma de decisiones ya que la información que contiene permite hacer proyecciones a corto, mediano y largo plazo y así poder determinar las acciones de mejora a seguir. 

    .row.justify-content-center.mb-5         
      .col-lg-10
        .bg_6.p-5
          p(data-aos="fade-right") Estas son algunas de las ventajas de la implementación de estas matrices dentro de la organización: 
          ul.lista-ul--color(data-aos="fade-right")
            li.m_bot1
              i.lista-ul__vineta
              |	Facilita la identificación del impacto ambiental del proyecto mientras que ofrece recomendaciones para su adecuada atención y manejo. Además, permite identificar las normas y requisitos ambientales que debe cumplir cada organización para cumplir con las regulaciones del sector.
            li.m_bot1
              i.lista-ul__vineta
              |	Sirve para identificar la viabilidad técnica de los procesos al indicarnos la disponibilidad de los recursos naturales que se pueden necesitar para su desarrollo.
            li.m_bot1
              i.lista-ul__vineta
              |	Posibilita el cumplimiento de las normas y regulaciones de tipo ambiental, así como la obtención de licencias y autorizaciones dentro de este ámbito. 
            li.m_bot1
              i.lista-ul__vineta
              |	Determina el costo de las medidas de manejo que se deben implementar, apoyando la viabilidad económica del proyecto.

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10
        .bg_subtitulos   
          .row
            .col-lg-8
              .titulo-sexto.color-terciario
                h3 Valoración de aspectos e impactos ambientales

    p Para identificar y comprender los aspectos ambientales, es necesario identificar las actividades, productos y servicios que desarrolla la organización, definiendo entradas y salidas de materiales o energía, procesos y tecnología usados, instalaciones, lugares, métodos de transporte y factores humanos.

    .bg_7.p-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-7(data-aos="fade-right")
          p Los cambios en el ambiente ya sean adversos o beneficiosos, son el resultado total o parcial de aspectos ambientales.
          p La evaluación ambiental tiene como objetivo la verificación de los parámetros y normativas que actualmente se encuentran vigentes para conocer el estado de los componentes del entorno, lo cual facilita planificar acciones a tomar con el fin de mantener o mejorar las condiciones del medio ambiente. 
          p Se debe entender que las relaciones que se manejan entre los aspectos ambientales y sus respectivos impactos asociados son de causa y efecto, es por esto por lo que se requiere de una buena comprensión de aquellos aspectos que tienen o pueden tener impactos significativos sobre el ambiente, ya que de la identificación de las actividades que desarrolla la entidad pueden surgir muchos aspectos ambientales e impactos asociados.
        .col-lg-5(data-aos="fade-left")
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema2/img11.svg')

    p.mb-5 La identificación de los aspectos ambientales significativos y sus impactos asociados es necesaria para determinar cuándo se necesita control o mejora y para establecer prioridades para acciones de gestión.
        
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10
        .bg_subtitulos   
          .row
            .col-lg-8
              .titulo-sexto.color-terciario
                h3 Matriz de Leopold

    p.mb-5 La evaluación, al ser uno de los pasos fundamentales en el impacto ambiental, requiere conocer el proceso que se debe realizar, sobre todo al situarlo desde el manejo y utilización de la matriz Leopold: 

    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .bloque-texto-f.color-primario.pt-4.px-5.mb-4
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto.ms-4 En la década de 1970 por el Dr. Med. Luna Leopold y algunos colaboradores desarrollaron proyectos de construcción con influencia, enfoque y contenido particularmente útiles, para la evaluación preliminar de estos proyectos que predicen un gran impacto ambiental. 
          .bloque-texto-f__autor.mb-3
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/tema2/img12.png', alt='Texto que describa la imagen')
    
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-4(data-aos="fade-right") La forma de usar la matriz de Leopold se puede resumir en los siguientes pasos:  
        ul.lista-ul--color(data-aos="fade-right")
            li.m_bot1
              i.lista-ul__vineta
              |	Limite la esfera de atribución.
            li.m_bot1
              i.lista-ul__vineta
              |	Determine las acciones que ejerce el proyecto en el área.
            li.m_bot1
              i.lista-ul__vineta
              |	Determine para cada acción los elementos que se ven afectados.
            li.m_bot1
              i.lista-ul__vineta
              |	Determine el significado de cada elemento en una escala de 1 a 10.
            li.m_bot1
              i.lista-ul__vineta
              |	Determine el tamaño de cada acción en cada elemento en una escala de 1 a 10.
            li.m_bot1
              i.lista-ul__vineta
              |	Determine si el tamaño es positivo o negativo. 
            li.m_bot1
              i.lista-ul__vineta
              |	Determine cuántas medidas de proyecto influyen en el medio ambiente, en la desagregación positiva y negativa. 
            li.m_bot1
              i.lista-ul__vineta
              |	Se deben añadir los resultados de las acciones.  
            li.m_bot1
              i.lista-ul__vineta
              |	Determine cuántos factores ambientales se ven afectados por el proyecto que se adoptan en positivos y negativos. 
            li.m_bot1
              i.lista-ul__vineta
              |	Agregue resultados de los elementos del medio ambiente. 

    .bg_fondo3
      .row.justify-content-center.mb-5(data-aos="fade-up")
        .col-lg-10
          .bg_8.p-2
            p.text-center Los proyectos o actividades que deben ser sometidas al Sistema de Evaluación de Impacto Ambiental, son los siguientes:
          img(src='@/assets/curso/tema2/img13.png')

      .row.justify-content-center
        .col-lg-12
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
            .row.justify-content-center.mb-3
              .col-12.mb-4
                .tarjeta.color-acento-contenido.p-4.h-130.bg_color2
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 1
                      | Acueductos, presas, drenajes, o aquellas actividades que alteren los cuerpos naturales de agua.
              .col-12
                .tarjeta.color-acento-botones.p-4.h-130.bg_color1
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 4
                      | Reactores y establecimientos nucleares.

            .row.justify-content-center.mb-3
              .col-12.mb-4
                .tarjeta.color-acento-contenido.p-4.h-130.bg_color2
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 2
                      | Líneas de transmisión de energía de alto voltaje.
              .col-12
                .tarjeta.color-acento-botones.p-4.h-130.bg_color1
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 5
                      | Aeropuertos, terminales de buses, automotores, vías férreas, estaciones de servicio y autopistas. 

            .row.justify-content-center.mb-3
              .col-12.mb-4
                .tarjeta.color-acento-botones.p-4.h-130.bg_color2
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 3
                      | Centrales generadoras de energía mayores a 3 MW.
              .col-12
                .tarjeta.color-acento-botones.p-4.h-130.bg_color1
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 6
                      | Puertos, vías de navegación, astilleros y terminales marítimas.

            .row.justify-content-center.mb-3
              .col-12.mb-4
                .tarjeta.color-acento-botones.p-4.h-130.bg_color2
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 7
                      | Proyectos de turismo y desarrollo urbano. 
              .col-12
                .tarjeta.color-acento-botones.p-4.h-130.bg_color1
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 10
                      | Oleoductos, gasoductos, ductos mineros u otros análogos.

            .row.justify-content-center.mb-3
              .col-12.mb-4
                .tarjeta.color-acento-botones.p-4.h-130.bg_color2
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 8
                      | Proyectos industriales o inmobiliarios que se ejecuten en zonas declaradas latentes o saturadas.
              .col-12
                .tarjeta.color-acento-botones.p-4.h-130.bg_color1
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 11
                      | Ejecución de obras, programas o actividades en parques nacionales, reservas nacionales y santuarios de la naturaleza.

            .row.justify-content-center.mb-3
              .col-12.mb-4
                .tarjeta.color-acento-botones.p-4.h-130.bg_color2
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 9
                      | Proyectos de desarrollo minero, incluidos los de carbón, petróleo y gas.
              .col-12
                .tarjeta.color-acento-botones.p-4.h-130.bg_color1
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 12
                      | Agroindustrias, planteles y establos de crianza, lechería y engorda de animales.

            .row.justify-content-center.mb-3
              .col-12.mb-4
                .tarjeta.color-acento-botones.p-4.h-130.bg_color2
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 13
                      | Proyectos de desarrollo o explotación forestal en suelos de bosques nativos. 
              .col-12
                .tarjeta.color-acento-botones.p-4.h-130.bg_color1
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 16
                      | Proyectos donde se apliquen productos químicos de manera masiva.

            .row.justify-content-center.mb-3
              .col-12.mb-4
                .tarjeta.color-acento-botones.p-4.h-130.bg_color2
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 14
                      | Proyectos de explotación intensiva o de cultivos que utilicen el recurso hidrológico.
              .col-12
                .tarjeta.color-acento-botones.p-4.h-130.bg_color1
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 17
                      | Proyectos de desarrollo, cultivo o explotación, en las áreas mineras, agrícolas y forestales.  

            .row.mb-3
              .col-12
                .tarjeta.color-acento-botones.p-4.h-130.m_botton.bg_color2
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 15
                      | Proyectos de saneamiento ambiental.
                

      


    

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
