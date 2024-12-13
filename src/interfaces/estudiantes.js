
$(document).ready(function () {
      try{
            $.ajax({//console.log(user.responseJSON.estudiantes);
                  type: "GET",
                  url: "http://localhost:3000/src/funcionalidades/agregar_estudiante.php",
                  //data: "data",
                  //dataType: "dataType",
                  success: function (datos) {
                        let datosRecibidos =JSON.parse(datos)
                        console.log(datosRecibidos);
                        datosRecibidos.forEach(element => {
                              const estructuraHtml_card=`
                              <div class="card">
                                    <div class="color">
                                          <img src="./img/user.png" alt=""><input type="button" value="Editar" class="editarAlumno" >
                                    </div>
                                    <div class="id" style="display: none;">${element.id}</div>
                                    <div class="nombre" >${element.nombre}</div>
                                    <h2>Contacto</h2>
                                    <p>Telefono</p>
                                    <div class="telefono">${element.telefono}</div>
                                    
                                    <p>Correo</p>
                                    <div class="correo">${element.correo}</div>
                                    <hr>                              
                                    <div class="contenedor-botones">
                                          <a href="/src/interfaces/img/add (1).png" download="add (1).png"><button>Titulos</button></a>
                                          <a href="/src/interfaces/img/add (1).png" download="add (1).png"><button>CV</button></a>
                                    </div>
                              </div>`
                              $(".contenedor-cards").append(estructuraHtml_card);
                        });

                  }
            });
      }
      catch{
            console.error("error al recuperar datos de Php \n Verificar 'http://localhost:3000/src/funcionalidades/agregar_estudiante.php' ")
      }

      $(".agregarAlumno").click(function () { 
            $(".formulario-alumno").fadeIn();

      });
});