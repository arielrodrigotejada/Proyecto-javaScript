$(document).ready(function(){


  //Cambiador de temas
  var tema = $("#tema");
  var temaAzul = $("#temaAzul");
  var temaRojo = $("#temaRojo");
  var temaVerde = $("#temaVerde");

  temaAzul.click(function(){
    tema.attr("href", "css/azul.css");
  })

  temaRojo.click(function(){
    tema.attr("href", "css/rojo.css");
  })

  temaVerde.click(function(){
    tema.attr("href", "css/verde.css");
  })

  // Cambio opacidad pasandole mouse encima
  temaAzul.mouseover(function(){
    temaAzul.fadeTo("slow", 0.7);
  })

  temaRojo.mouseover(function(){
    temaRojo.fadeTo("slow", 0.7);
  })

  temaVerde.mouseover(function(){
    temaVerde.fadeTo("slow", 0.7);
  })

  temaAzul.mouseout(function(){
    temaAzul.fadeTo("slow", 1);
  })

  temaRojo.mouseout(function(){
    temaRojo.fadeTo("slow", 1);
  })

  temaVerde.mouseout(function(){
    temaVerde.fadeTo("slow", 1);
  })

// Scroll automatico para arriba

  $(".subir").click(function(e){
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    },600);
    return false;
  })

// Formulario falso

$("#formularioLogin").submit(function(){
  var nombreUsuario = $("#nombreUsuario").val();
  localStorage.setItem("Usuario", nombreUsuario);

})


  var nombreUsuario = localStorage.getItem("Usuario");

  if (nombreUsuario != null && nombreUsuario != undefined) {
    var parrafoAside = $("aside p");
    parrafoAside.html("Bienvenido, usuario " + nombreUsuario);
    parrafoAside.append('<br><b><a href="#" id="cerrarSesion">Cerrar sesion</a></b>')

    $("#divLogin").hide();

    $("#cerrarSesion").click(function(){
      localStorage.clear();
      location.reload();
    })
  }

// Acordeon

$("#divAcordeon").accordion();

})
