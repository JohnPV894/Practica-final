/*
                        <div class="card">
                              <div class="color"><img src="" alt=""><input type="button" value="" placeholder="Editar"></div>
                              <div class="nombre"></div>
                              <h2>Contacto</h2>
                              <p>Telefono</p>
                              <div class="telefono"></div>
                              <br>
                              <p>Correo</p>
                              <div class="correo"></div>
                              <hr>
                              <a href="/src/interfaces/img/add (1).png" download="add (1).png"><button>Titulos</button></a>
                              <a href="/src/interfaces/img/add (1).png" download="add (1).png"><button>CV</button></a>
                        </div>
 */

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
                                    <div class="color"><img src="" alt=""><input type="button" value="" placeholder="Editar"></div>
                                    <div class="id" style="display: none;">${element.id}</div>
                                    <div class="nombre"  >${element.nombre}</div>
                                    <h2>Contacto</h2>
                                    <p>Telefono</p>
                                    <div class="telefono">${element.telefono}</div>
                                    <br>
                                    <p>Correo</p>
                                    <div class="correo">${element.correo}</div>
                                    <hr>
                                    <a href="/src/interfaces/img/add (1).png" download="add (1).png"><button>Titulos</button></a>
                                    <a href="/src/interfaces/img/add (1).png" download="add (1).png"><button>CV</button></a>
                              </div>`
                              $(".contenedor-cards").append(estructuraHtml_card);
                        });
                        //for (const cadaElemento of datos) {
                        //      console.log(datos[cadaElemento]);

                        //      style="display: none;
                        //      
                        //}




                  }
            });
      }
      catch{
            console.error("error al recuperar datos de Php \n Verificar 'http://localhost:3000/src/funcionalidades/agregar_estudiante.php' ")
      }
});