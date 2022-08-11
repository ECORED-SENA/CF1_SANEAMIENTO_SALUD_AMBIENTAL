<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1(data-aos="fade-right") Promotoría Ambiental

    p La promotoría ambiental es la capacidad que tienen diversos actores de la comunidad para promover acciones encaminadas en el cuidado del medio ambiente y la construcción de un futuro que esté basado en modelos de desarrollo sostenible. 
    p Los promotores ambientales son los principales actores y pilares de la educación ambiental, ya que además de actuar como líderes comunitarios desarrollando proyectos y programas en pro del medio ambiente y la relación con comunidades, también contribuyen a los procesos de sensibilización y educación.  

    .bg_1.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-5
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema4/img01.png')
        .col-lg-7
          p Estos promotores tienen enmarcado sus quehaceres dentro de la participación ciudadana, con el control social de las diferentes gestiones ambientales y la organización de comunidades para darle solución a las problemáticas ambientales que los afecten. Algunas de sus funciones son:
          ul.lista-ul--color
            li.m_bot1
              i.lista-ul__vineta
              |	Conocer y difundir todas las políticas referentes a la educación ambiental para dar a conocer al público sus diferentes estrategias y objetivos. 
            li.m_bot1
              i.lista-ul__vineta
              |	El desarrollo de los diferentes procesos de gestión para lograr sensibilizar, educar y capacitar a la comunidad. 
            li.m_bot1
              i.lista-ul__vineta
              |	Articular las organizaciones con índoles sociales a los procesos ambientales bien sea locales o regionales.  
            li.m_bot1
              i.lista-ul__vineta
              |	Estará encargado de estimular la participación ciudadana para garantizar que las comunidades se organicen en pro de satisfacer sus necesidades. 
            li.m_bot1
              i.lista-ul__vineta
              |	Ser un intermediario de la comunidad y las instituciones.
            
    .row.justify-content-center.mb-4         
      .col-lg-10
        p.mb-4 El Ministerio de Ambiente, Desarrollo Sostenible, viene implementado el Programa 
          span.text_color1 Promotores Ambientales Comunitarios,
          | como una herramienta para el cumplimiento de la estrategia contenida en la Política Nacional de Educación Ambiental denominada "Formación de Educadores y Dinamizadores Ambientales",  convirtiéndose en el procedimiento que permite implementar programas de capacitación y formación cuyo objetivo principal es promover y cualificar la participación ciudadana en los procesos de planificación, gestión y seguimiento de las políticas, planes, programas y proyectos que orientan el desarrollo sostenible y la educación ambiental tanto en lo local como en lo regional, dentro de los lineamientos del Desarrollo Sostenible.

        TabsC.color-acento-botones
          .py-3.py-md-4(titulo="Objetivos y estrategias")
            .row.justify-content-center
              .col-md-2.mb-4.mb-md-0
                figure
                  img.img-t.mx-auto(src='@/assets/curso/tema4/img02.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-3
                p Los Promotores Ambientales Comunitarios tienen dentro de sus objetivos la participación de la ciudadanía, en donde se agrupen y trabajen conjuntamente para darle solución a las problemáticas ambientales, la preservación de sus tradiciones culturales y el enfoque hacia una educación ambiental comprometida al desarrollo sostenible de cada región. 
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                p La estrategia que se adelanta para suplir las necesidades del desarrollo territorial tiene como finalidad la dinamización de los procesos regionales a parte de la gestión de las corporaciones y entidades territoriales de las diferentes regiones, esto con el fin de fortalecer los procesos que estén directamente orientados a promover objetivos de desarrollo sostenible, que contribuyan a la construcción de una sociedad comprometida y enfocada en mejorar sus interacciones con el medio ambiente.
            
          .py-3.py-md-4(titulo="Funciones y atributos")
            .row.justify-content-center
              .col-md-2.mb-4.mb-md-0
                figure
                  img.img-t.mx-auto(src='@/assets/curso/tema4/img03.svg', alt='Texto que describa la imagen')
              .col-md-8
                p Los promotores ambientales comunitarios son lideres que cuentan con altos grados de sensibilidad y responsabilidad social frente al desarrollo sostenible de las regiones en donde residen, son personas que mediante su constante interés por la comunidad y la solución de los problemas que afronten se han ganado su admiración y respeto. Son destacados por su vocación de servicio, por su saber y conocimiento que le permiten ofrecer respuestas acertadas para llegar a acuerdos entre los diferentes actores sociales. 

    .row.justify-content-center.align-items-center
      .col-lg-6
          p Funciones del promotor ambiental comunitario: 
          ul.lista-ul--color
            li.m_bot1
              i.lista-ul__vineta
              |	Conocer y difundir la Política Nacional de Educación Ambiental y sus estrategias.
            li.m_bot1
              i.lista-ul__vineta
              |	Adelantar los procesos que sean necesarios para una correcta gestión de la sensibilización, educación y capacitación de las comunidades. 
            li.m_bot1
              i.lista-ul__vineta
              |	Articular las organizaciones sociales con los procesos ambientales que se realicen a nivel local y regional.  
            li.m_bot1
              i.lista-ul__vineta
              |	Fortalecer la participación ciudadana y la capacidad que tienen para organizarse y tomar decisiones. 
            li.m_bot1
              i.lista-ul__vineta
              |	Ser el intermediario entre la comunidad y las instituciones territoriales. 
            li.m_bot1
              i.lista-ul__vineta
              |	Participar de los procesos de planeación de la gestión ambiental. 
      .col-lg-4
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema4/img04.png')
            
      

    


     

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
