$(document).ready(function () {
//   if (window.location.href.indexOf("index") > -1) {
//     $(function () {
//       $(".bxslider").bxSlider({
//         mode: "fade",
//         captions: true,
//         slideWidth: 2200,
//       });
//     });
//   }
// Posts
  if (window.location.href.indexOf("index") > -1) {
    var articulos = [
      {
        img: "img/cancun.jpg",
        title: "Mejores lugares para visitar en México este 2021",
        date:
          "Publicado el día 20/Abr/2021",
        content:
          "México simpre ha sido uno de los destinos turisticos favoritos; su cultura, calidad y calidez ha llamado a viajeros de todo el mundo. Ahora, gracias a las experiencias de estos viajeros, se han recopilado sus comentarios y reseñas para hacer una lista de los mejores destinos turistico de México",
        ref:
          "art1.html"  
      },
      {
          img: "img/viaje1.jpg",
        title: "Las maravillas de viajar",
        date:
          "Publicado el día 28/Mar/2018",
        content:
          "Las personas que viven viajando tienen mayores probabilidades de vivir más tiempo. Estudios demuestran que viajar reduce el estrés, mantiene el cuerpo sano por fuera y por dentro y contribuye a la salud cerebral.No importa el lugar o la distancia que se recorra, toda forma de viaje mejora nuestra vida y realmente aumenta nuestras expectativas de vida.",
        ref:
          "art2.html"
      },
    ];
    console.log(articulos);

    // Recorrer el JSON para enviar al index.HTML
    articulos.forEach((item) => {
      var articulos = `<article class="articulos">
                    <img id="imgg" src="${item.img}">
                    <hr>
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="${item.ref}" class="button-more">Artículo completo</a>
                    <p></p>
                </article>`;
      //console.log(post);
      $("#articulos").append(articulos);
    });
  }
});