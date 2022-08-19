<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Normatividad Ambiental

    p.mb-4 Colombia está catalogado como el segundo país más megadiverso debido a la variedad de ecosistemas que acá se encuentran, además de las cantidades de especies y recursos naturales, es por esto que es primordial que se asegure la conservación y preservación de estos preciados recursos por medio de normativas ambientales, como se indicada a continuación:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").border_rad(data-aos="fade-up")
      .row.justify-content-center(titulo="Clasificación Normatividad Ambiental")     
        .col-md-11
          .tabla-b.color-primario
            .tabla-b__header
                th.h4.t_th-tabla2 Clasificación
                th.h4.t_th-tabla2 Concepto
                th.h4.t_th-tabla2 Factores
              
            table
              tr.bg_color3
                td.t_td-tabla1 Protección del ambiente.
                td Son todas aquellas normas que tienen como propósito la prevención, reducción y eliminación de contaminaciones o afectaciones al medio ambiente. 
                td Se tienen en cuenta el cambio de procesos para prevenir emisiones atmosféricas y a su vez controles y mediciones en laboratorios especializados.
              tr.bg_color6
                td.t_td-tabla1 Gestión de aguas residuales.
                td Estas normas están encaminadas en la prevención hacia la contaminación de aguas superficiales. 
                td Las redes de transporte de aguas y el tratamiento de sus residuos. 
              tr.bg_color3
                td.t_td-tabla1 Gestión de residuos.
                td Se refiere a las actividades que tienen como objetivo prevenir la generación de residuos y así poder disminuir las afectaciones que tiene al ambiente. 
                td La recolección y transporte de los residuos es clave en este proceso, así mismo lo es el tratamiento y eliminación de residuos peligrosos. 
              tr.bg_color6
                td.t_td-tabla1 Protección y recuperación de suelos, aguas subterráneas y aguas superficiales.
                td Son todas aquellas medidas para prevenir las filtraciones de contaminantes en los suelos y cuerpos de agua. 
                td Se usan para limpiar el suelo y cuerpos de agua de contaminantes que puedan traer repercusiones en la salud humana.
              tr.bg_color3
                td.t_td-tabla1 Atenuación de ruidos y vibraciones.
                td Son las medidas que tienden a controlar los ruidos y vibraciones en su mayoría generadas por procesos industriales. 
                td Se realizan modificaciones preventivas de los procesos en la fuente, como lo son instalaciones de sistemas anti ruido y vibraciones. 
              tr.bg_color6
                td.t_td-tabla1 Protección de la biodiversidad y de los paisajes.
                td Se refiere a aquellas actividades destinadas a la conservación y rehabilitación de especies de fauna y flora.   
                td Es la protección y rehabilitación de hábitat y especies que han sido intervenidos. 
              tr.bg_color3
                td.t_td-tabla1 Protección contra las radiaciones.
                td Son todas aquellas normas que mediante mediciones pretenden reducir las consecuencias negativas que trae consigo las radiaciones.   
                td Se tiene en cuenta el tratamiento y transporte que tienen los residuos radiactivos. 

      .row.justify-content-center(titulo="Normas ambientales en Colombia")
        .col-md-11
          .tabla-b.color-primario
            .tabla-b__header
                th.h4.t_th-tabla3 Normas Generales
                th.h4.t_th-tabla3 Concepto
              
            table
              tr.bg_color3
                td Constitución Nacional
                td Principios principales que expone la constitución:
                  ul.lista-ul.mt-4
                    li
                      i.lista-ul__vineta
                        | Derecho a un ambiente sano.
                    li 
                      i.lista-ul__vineta
                        | El medio ambiente como patrimonio cultural.
                    li 
                      i.lista-ul__vineta
                        | Desarrollo sostenible.
              tr.bg_color6
                td.t_th-tabla3 Código nacional de los recursos naturales renovables y de protección del medio ambiente - Decreto ley 2811 de 1974
                td.t_th-tabla3 Es el código mediante el cual se establece el uso de los recursos naturales renovables.
              tr.bg_color3
                td.t_th-tabla3 Ley sanitaria - Ley 09 de 1979
                td.t_th-tabla3 Su principal objetivo es la conservación de la salud y del bienestar humano.
              tr.bg_color6
                td.t_th-tabla3 Ley 99 de 1993
                td.t_th-tabla3 Se crea el Ministerio de medio ambiente.
              tr.bg_color3
                td.t_th-tabla3 Código minero - Ley 685 del 2001
                td.t_th-tabla3 Se expide el código de minas.
                
      .row.justify-content-center(titulo="Tratados internacionales")
        .col-md-11
          p Son un acuerdo entre dos o más países que quedan por escrito, los cuales están regulados por las normas del derecho internacional.
          .tabla-b.color-primario
            .tabla-b__header
                th.h4.t_th-tabla3 Tratados
                th.h4.t_th-tabla3 Concepto
              
            table
              tr.bg_color3
                td.t_th-tabla3 Convención para el cambio climático 
                td.t_th-tabla3 Busca desarrollar temas frente a la educación, formación, sensibilización y cumplimiento de los compromisos adquiridos.
              tr.bg_color6
                td.t_th-tabla3 Convención para la protección de la biodiversidad
                td.t_th-tabla3 Se estableció en la conferencia de Río de Janeiro en el año 1991 y tiene como principal objetivo la protección de la biodiversidad.
              tr.bg_color3
                td.t_th-tabla3 Convención de Basilea sobre residuos peligroso (1989)
                td.t_th-tabla3 Reducir el volumen de residuos para proteger la salud humana y del medio ambiente. Colombia la ratificó mediante la ley 256 de 1996.
              tr.bg_color6
                td.t_th-tabla3 Convenio de Viena para la protección de la capa de ozono y el Protocolo de Montreal
                td.t_th-tabla3 Ratificado por Colombia por medio de la Ley de 1990.

      .row.justify-content-center(titulo="Leyes ambientales")     
        .col-md-11
          p Corresponden a los principios y normas que buscan la protección, conservación, recuperación del medio ambiente y preservación de los recursos naturales. 
          .tabla-b.color-primario
            .tabla-b__header
                th.h4.t_th-tabla5 Leyes Generales
                th.h4.t_th-tabla4 Concepto
                th.h4 Fuente
              
            table
              tr.bg_color3
                td.t_td-tabla1 Ley 99 de 1993
                td Por la cual se crea el Ministerio del Medio Ambiente.
                td
                  a.boton.color-primario.me-3(:href="obtenerLink('downloads/ley-99-1993.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
              tr.bg_color6
                td.t_td-tabla1 Ley 23 de 1973
                td En la cual se dictan los principios sobre prevención de los contaminantes del agua, suelo y aire. 
                td
                  a.boton.color-primario(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9018" target="_blank")
                    span Enlace web
                    i.fas.fa-link
              tr.bg_color3
                td.t_td-tabla1 Ley 388 de 1997
                td Se define el ordenamiento territorial municipal y distrital.
                td
                  a.boton.color-primario(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=339" target="_blank") 
                    span Enlace web
                    i.fas.fa-link
              tr.bg_color6
                td.t_td-tabla1 Ley 491 de 1999
                td Se modifica el código penal y se establecen delitos contra los recursos naturales y el medio ambiente. 
                td
                  a.boton.color-primario.me-3(:href="obtenerLink('downloads/Ley-491-1999.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
              tr.bg_color3
                td.t_td-tabla1 Ley 29 de 1992
                td Por medio de la cual se adopta el "Protocolo de Montreal relativo a las sustancias agotadoras de la capa de ozono”.
                td
                  a.boton.color-primario.me-3(:href="obtenerLink('downloads/ley_29_1992.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download

      .row.justify-content-center(titulo="Decretos ambientales")     
        .col-md-11
          p Tienen como propósito velar por la recuperación, conservación, protección, manejo, uso y aprovechamiento de los recursos naturales renovables de la nación. Destina como un servicio público la salud y el saneamiento ambiental.
          .tabla-b.color-primario
            .tabla-b__header
                th.h4.t_th-tabla5 Decreto
                th.h4.t_th-tabla4 Concepto
                th.h4 Fuente
              
            table
              tr.bg_color3
                td.t_td-tabla1 Decreto 1791
                td Por medio del cual se establece el régimen de aprovechamiento forestal.
                td
                  a.boton.color-primario(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1296" target="_blank")
                    span Enlace web
                    i.fas.fa-link
              tr.bg_color6
                td.t_td-tabla1 Decreto 870 de 2017
                td Se establece el pago por servicios ambientales.
                td
                  a.boton.color-primario.me-3(:href="obtenerLink('downloads/DECRETO_870_DE_2017.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
              tr.bg_color3
                td.t_td-tabla1 Decreto 2820 de 2010
                td Se reglamenta el Título VIII de la Ley 99 de 1993 sobre licencias ambientales.
                td
                  a.boton.color-primario(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=45524 " target="_blank") 
                    span Enlace web
                    i.fas.fa-link
              tr.bg_color6
                td.t_td-tabla1 Decreto 283
                td Hidrocarburos - Por el cual se reglamenta el almacenamiento, manejo, transporte, distribución de combustibles líquidos derivados del petróleo y el transporte por carrotanques de petróleo crudo.
                td
                  a.boton.color-primario(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8807" target="_blank") 
                    span Enlace web
                    i.fas.fa-link
             

      .row.justify-content-center(titulo="Resoluciones ambientales")     
        .col-md-11
          .tabla-b.color-primario
            .tabla-b__header
                th.h4.t_th-tabla5 Resolución
                th.h4.t_th-tabla4 Concepto
                th.h4 Fuente
              
            table
              tr.bg_color3
                td.t_td-tabla1 Resolución 1561 de 2019
                td Se establecen los términos de referencia para la elaboración de estudios de impacto ambiental.
                td
                  a.boton.color-primario.me-3(:href="obtenerLink('downloads/RESOLUCIÓN-1561-DE-2019.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
              tr.bg_color6
                td.t_td-tabla1 Resolución 2210 de 2018
                td Se reglamenta el uso del sello minero ambiental colombiano. 
                td
                  a.boton.color-primario.me-3(:href="obtenerLink('downloads/RESOLUCION-2210-DE-2018.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
              tr.bg_color3
                td.t_td-tabla1 Resolución 1447 de 2018
                td Se reglamenta el sistema de monitoreo y evaluación de las acciones de mitigación.
                td
                  a.boton.color-primario(href="https://www.icbf.gov.co/cargues/avance/docs/resolucion_minambienteds_1447_2018.htm" target="_blank") 
                    span Enlace web
                    i.fas.fa-link
              tr.bg_color6
                td.t_td-tabla1 Resolución 689 de 2016
                td Por la cual se adopta el reglamento técnico que establece los límites máximos de fósforo y la biodegradabilidad de los tensoactivos presentes en detergentes y jabones, y se dictan otras disposiciones. 
                td
                  a.boton.color-primario.me-3(:href="obtenerLink('downloads/RESOLUCION_0689.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
              tr.bg_color3
                td.t_td-tabla1 Resolución 260 de 2011
                td En la cual se fijan las tarifas para el cobro de los servicios de evaluación y seguimiento de licencias ambientales. 
                td
                  a.boton.color-primario(href="https://xperta.legis.co/visor/legcol/legcol_b7f597e009720114e0430a0101510114/coleccion-de-legislacion-colombiana/resolucion-260-de-2011" target="_blank") 
                    span Enlace web
                    i.fas.fa-link
              tr.bg_color6
                td.t_td-tabla1 Resolución 2064 de 2010
                td Por la cual se reglamentan las medidas posteriores a la aprehensión preventiva, restitución o decomiso de especímenes de especies silvestres de Fauna y Flora Terrestre y Acuática y se dictan otras disposiciones.
                td
                  a.boton.color-primario(href="https://www.icbf.gov.co/cargues/avance/docs/resolucion_minambientevdt_2064_2010.htm" target="_blank") 
                    span Enlace web
                    i.fas.fa-link
              tr.bg_color3
                td.t_td-tabla1 Resolución 1023 de 2005
                td Se adoptan guías ambientales que serán utilizadas como medidas de autogestión.
                td
                  a.boton.color-primario.me-3(:href="obtenerLink('downloads/RESOLUCION_1023.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download    

    .bg_fondo4
      .row.align-items-center.mb-4(data-aos="fade-right")
        .col-lg-10
          .bg_subtitulos   
            .row
              .col-lg-8
                .titulo-sexto.color-terciario
                  h3 Recursos Naturales

      p Los recursos naturales son todos aquellos elementos o bienes que nos proporciona la naturaleza y que se encuentran en el medio natural en el cual no interviene la acción del hombre para su generación.  

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5(data-aos="fade-right")
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema3/img01.png')
        .col-lg-5(data-aos="fade-left")
          p Estos recursos se pueden utilizar para satisfacer las necesidades vitales del ser humano y de los demás seres vivos.
          p Es necesario entender que sin una adecuada planificación y organización algunos de estos bienes que provee la naturaleza pueden tender a desaparecer.
          p El cuidado de los recursos naturales es importante, no sólo porque son la base de las sociedades productivas modernas, sino porque forman parte esencial de la naturaleza y son los que permiten la existencia de los seres vivos en el planeta Tierra.
      
      p La actividad humana explota los recursos naturales de forma intensa por lo que deben existir regulaciones en los diferentes territorios para controlar y evitar la sobreexplotación de ellos.
      p.mb-5 Los recursos naturales se dividen según sus fuentes de generación y mantenimiento en dos grandes grupos: 
            
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.bg_tar1-t3.p-5(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema3/img02.svg', alt='Significativos')
          h4.text-center Renovables
          .row.justify-content-center
            .col-lg-9
              p.mb-4 Están disponibles permanentemente, es decir, que no se agotan a pesar de su explotación y uso ya que se generan a una velocidad superior a la que se consumen. Es necesario recalcar que si la tasa de utilización fuese superior a la de generación estos recursos estarían en peligro de agotarse. 
              p Por ejemplo:
              ul.lista-ul--color
                li.m_bot1
                  i.lista-ul__vineta
                  |	Agua
                li.m_bot1
                  i.lista-ul__vineta
                  |	Viento
                li.m_bot1
                  i.lista-ul__vineta
                  |	Radiación solar
                li.m_bot1
                  i.lista-ul__vineta
                  |	Madera
                li.m_bot1
                  i.lista-ul__vineta
                  |	Biocombustibles                  
        .col-md.tarjeta.bg_tar2-t3.p-5(data-aos="fade-left")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema3/img03.svg', alt='No significativos')
          h4.text-center No renovables
          .row.justify-content-center
            .col-lg-9
              p.mb-4 Elementos de la naturaleza los cuales se encuentran en cantidades limitadas, ya que su ciclo de renovación es lento en comparación con los ritmos extractivos y de explotación. Estos recursos no pueden ser producidos por el ser humano.
              p Por ejemplo:
              ul.lista-ul--color
                li.m_bot1
                  i.lista-ul__vineta
                  |	Petróleo
                li.m_bot1
                  i.lista-ul__vineta
                  |	Gas natural
                li.m_bot1
                  i.lista-ul__vineta
                  |	Carbón
                li.m_bot1
                  i.lista-ul__vineta
                  |	Oro
                li.m_bot1
                  i.lista-ul__vineta
                  |	Metales       

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-8
        .bg_subtitulos   
          .row
            .col-lg-8 
              .titulo-sexto.color-terciario
                h3 Conservación Ambiental

    p.mb-4 La conservación ambiental nace como una necesidad debido a los recurrentes problemas ambientales que afectan a la salud tanto humana como de los diferentes seres vivos que interactúan en el planeta Tierra.

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10.col-xl-12.col-xxl-10 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img06.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Esta conservación debe ser profunda y verdadera para que se minimicen los daños por el hombre y se despierte la conciencia humana para avanzar en un modelo de desarrollo sostenible que pretende satisfacer las necesidades presentes sin comprometer las de las generaciones futuras. Es por esto por lo que se han creado movimientos sociales que tienen como finalidad la conservación de los recursos naturales. 

    .row.justify-content-center.mb-4         
      .col-lg-10
        p El conservacionismo tiene como objetivo la conservación del medio ambiente mediante un movimiento social el cual pretende defender las políticas y leyes ecológicas, y que además tiene como principales valores la biodiversidad, el equilibrio biótico, la armonía paisajística, entre otros. Es necesario entender que este movimiento no maneja las mismas posturas que los ecologistas ya que estos están abogando por la no explotación de los recursos naturales, en cambio los conservacionistas demandan una explotación la cual sea responsable y sustentable en términos económicos, sociales y ambientales.
        p La conservación del medio ambiente está basada en las siguientes razones: 

        SlyderA(tipo="b").bg_slyder-t3.p-5
          .row.justify-content-around.align-items-center
            .col-lg-6(data-aos="fade-right") 
              h4 Razones Científicas
              p Para sostener la vida en la tierra es necesario una preservación de la biodiversidad genética, ya que los daños ecológicos que se adelantan en la actualidad tienen repercusiones químicas y biológicas las cuales son irreversibles y pueden afectar en un futuro a la salud humana y la preservación de la especie.     
            .col-lg-6(data-aos="fade-left") 
              figure
                img(src='@/assets/curso/tema3/img07.png', alt='AvatarTop')

          .row.justify-content-around.align-items-center
            .col-lg-6
              h4 Razones Económicas
              p Para que los recursos naturales tengan el tiempo necesario para su reposición es necesario que se exploten de una manera sustentable mediante la no destrucción de los hábitats en donde se encuentran lo cual hace que sean más rentables a largo plazo. 
            .col-lg-6
              figure
                img(src='@/assets/curso/tema3/img08.png', alt='AvatarTop')

          .row.justify-content-around.align-items-center
            .col-lg-6
              h4 Razones Culturales
              p Para muchas comunidades los territorios en donde se explotan los recursos naturales no solo plantean un atractivo turístico, sino que son lugares de contacto místico y que tienen un valor cultural importante y tradicional de cada país.     
            .col-lg-6
              figure
                img(src='@/assets/curso/tema3/img09.png', alt='AvatarTop')

          .row.justify-content-around.align-items-center
            .col-lg-6
              h4 Razones Éticas
              p El estado tiene la obligación de defender el bien común de todos sus habitantes, por lo tanto, la conservación de estos recursos es una prolongación de la especie humana.   
            .col-lg-6
              figure
                img(src='@/assets/curso/tema3/img10.png', alt='AvatarTop')

          .row.justify-content-around.align-items-center
            .col-lg-6
              h4 Razones Sociales
              p La explotación de los recursos naturales de manera indiscriminada y algunas veces de forma ilegal termina repercutiendo en la sociedad y en la mayoría de los casos en comunidades que son más débiles y propensas a la pobreza y enfermedades por el trabajo mal remunerado. 
            .col-lg-6
              figure
                img(src='@/assets/curso/tema3/img11.png', alt='AvatarTop')
          
          .row.justify-content-around.align-items-center
            .col-lg-6
              h4 Razones Legales
              p Existen legislaciones en los diferentes niveles, tanto locales, como nacionales e internacionales las cuales se deben cumplir a cabalidad para asegurar los derechos de los seres humanos a vivir una vida libre de enfermedades y satisfaciendo sus necesidades básicas. 
            .col-lg-6
              figure
                img(src='@/assets/curso/tema3/img12.png', alt='AvatarTop')
          



     

</template>

<script>
export default {
  name: 'Tema3',
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
