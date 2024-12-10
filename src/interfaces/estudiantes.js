
$(document).ready(function () {
      try{
            $.ajax({//console.log(user.responseJSON.estudiantes);
                  type: "GET",
                  url: "http://localhost:3000/src/funcionalidades/agregar_estudiante.php",
                  //data: "data",
                  //dataType: "dataType",
                  success: function (datos) {
                        console.log(datos);
                  $(".contenedor-cards").append(datos );

                  }
            });
            $("body").css("background", "red");
      }
      catch{
            console.error("error al recuperar datos de Php \n Verificar 'http://localhost:3000/src/funcionalidades/agregar_estudiante.php' ")
      }
});